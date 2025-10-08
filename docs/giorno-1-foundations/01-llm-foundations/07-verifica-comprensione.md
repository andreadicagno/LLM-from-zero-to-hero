---
title: Verifica di Comprensione
description: Domande per testare la comprensione dei concetti fondamentali di token, context window e next token prediction
sidebar_position: 7
tags: [llm-foundations, assessment, verifica, token, context-window, next-token-prediction]
---

# Verifica di Comprensione - Fondamenti LLM

> ⏱️ **Durata**: 20-30 minuti
> 🎯 **Obiettivo**: Verificare comprensione profonda dei concetti chiave del Giorno 1

---

## 🎯 Come Usare Questa Sezione

Queste domande ti aiutano a verificare se hai davvero compreso i concetti fondamentali degli LLM:

- **Token** e come vengono processati
- **Context Window** e gestione della memoria
- **Next Token Prediction** e meccanismo di generazione
- **Attention Mechanism** e come LLM "ragiona"

:::tip 💡 Approccio Consigliato
1. Rispondi prima alle domande **senza** guardare le risposte
2. Clicca per rivelare la risposta solo dopo aver riflettuto
3. Se sbagli: rileggi la sezione corrispondente indicata
4. Per domande complesse: discuti con colleghi o formatore
:::

---

## 📊 Sezione 1: Quick Check (Scelta Multipla)

### Domanda 1: Generazione Token

**Come genera testo un LLM?**

- **A)** Scrive l'intera risposta in una volta sola dopo aver "pensato"
- **B)** Genera un token alla volta, rileggendo **tutto il contesto** ogni volta
- **C)** Divide la risposta in frasi e le scrive sequenzialmente
- **D)** Scrive parole casuali e poi le riordina

<details>
<summary>✅ Clicca per vedere la risposta corretta</summary>

### Risposta: **B) Genera un token alla volta, rileggendo tutto il contesto ogni volta**

**Spiegazione**:

Il processo di generazione LLM è **iterativo e sequenziale**:

```
Input utente: "Scrivi i vantaggi del lavoro remoto"

Step 1: LLM riceve prompt → tokenizza
Step 2: Calcola probabilità per OGNI possibile token successivo
Step 3: Sceglie token (es. "I")
Step 4: Aggiunge "I" all'output
Step 5: Ripete da Step 2 con contesto aggiornato

Iterazione 1: Context → genera "I"
Iterazione 2: Context + "I" → genera "vantaggi"
Iterazione 3: Context + "I vantaggi" → genera "del"
...e così via token-by-token
```

**Concetto Chiave**: Ad ogni iterazione, LLM rilegge **TUTTO** il contesto (prompt originale + tutti i token generati finora) per calcolare il prossimo token.

**Perché le altre opzioni sono sbagliate**:
- **A)** ❌ LLM non "pensa" prima di scrivere - genera in streaming
- **C)** ❌ Non ragiona a livello di frasi, solo token
- **D)** ❌ Non c'è randomizzazione seguita da riordino

📖 **Rivedi**: [Come "Ragionano" gli LLM - Next Token Prediction](ragionamento#next-token-prediction-il-cuore-degli-llm)

</details>

---

### Domanda 2: Context Window

**Il context window di 200K token include:**

- **A)** Solo i miei messaggi nella conversazione
- **B)** Solo i documenti che carico
- **C)** System prompt + cronologia + documenti + nuovo messaggio + risposta in generazione
- **D)** Solo le ultime 10 risposte dell'LLM

<details>
<summary>✅ Clicca per vedere la risposta corretta</summary>

### Risposta: **C) System prompt + cronologia + documenti + nuovo messaggio + risposta in generazione**

**Spiegazione**:

Il context window è il **contenitore totale** che include TUTTI gli elementi:

```
[Context Window = 200K token] (esempio Claude)
│
├─ System Prompt / Custom Instructions (~500-2K token)
├─ Cronologia Conversazione (~varia)
│   ├─ Messaggio 1 (tu)
│   ├─ Risposta 1 (LLM)
│   ├─ Messaggio 2 (tu)
│   └─ ...
├─ File / Documenti caricati (~varia)
├─ Il tuo nuovo messaggio (~varia)
└─ Risposta che sta generando (~varia)

Totale: DEVE essere ≤ 200K token
```

**Esempio Concreto**:
```
System prompt: 1K token
Cronologia (20 messaggi): 15K token
Documenti caricati (3 PDF): 25K token
Nuovo messaggio: 200 token
Risposta in generazione: ~2K token
─────────────────────────────────────
TOTALE: 43.2K token (OK, sotto il limite 200K)
```

**Quando superi il limite**:
- LLM tronca (rimuove) parte del contesto (solitamente dall'inizio)
- Oppure restituisce errore
- Risultato: perdita coerenza, informazioni "dimenticate"

📖 **Rivedi**: [Contesto e Context Window - Cos'è il Context Window](contesto#cos-è-il-context-window)

</details>

---

## 💭 Sezione 2: Comprensione Profonda (Domande Aperte)

### Domanda 3: Budget Analysis Scenario

**Scenario Reale**:

```
Conversazione con Claude:
- Messaggio 1: Carichi documento budget Q1-Q4 (5000 token)
- Messaggi 2-20: Discussione su allocazioni (~8000 token)
- Messaggio 21: "Qual era il budget Q2 di progetto Alpha?"
```

**Domanda**: Quando Claude genera la risposta al messaggio 21, cosa "vede" esattamente per produrre ogni singolo token della risposta? Spiega il processo step-by-step.

<details>
<summary>💡 Clicca per vedere la risposta completa</summary>

### Risposta Ideale

**Elementi chiave da comprendere**:

#### 1. Context Completo ad Ogni Iterazione

Claude vede **TUTTO** il contesto disponibile:
- Documento budget caricato (5K token)
- 20 messaggi precedenti della conversazione (8K token)
- Il nuovo messaggio 21 ("Qual era il budget Q2 di progetto Alpha?")

**Totale contesto**: ~13K token disponibili ad ogni iterazione

---

#### 2. Processo Iterativo Token-by-Token

**Generazione della risposta "Il budget Q2 di progetto Alpha era €350K"**:

```
Iterazione 1 - Genera "Il":
├─ Input: Contesto completo (13K token)
├─ LLM calcola probabilità per OGNI token possibile
├─ Sceglie "Il" (alta probabilità per iniziare risposta formale)
└─ Output parziale: "Il"

Iterazione 2 - Genera "budget":
├─ Input: Contesto completo (13K) + "Il" (appena generato)
├─ Attention mechanism: focalizza su "budget" nella domanda
├─ Sceglie "budget" (altissima probabilità dato contesto)
└─ Output parziale: "Il budget"

Iterazione 3 - Genera "Q2":
├─ Input: Contesto completo (13K) + "Il budget" (già generato)
├─ Attention: cerca "Q2" nel documento e nella domanda
├─ Sceglie "Q2" (specifico alla query)
└─ Output parziale: "Il budget Q2"

Iterazione 4 - Genera "di":
├─ Input: Contesto completo (13K) + "Il budget Q2" (già generato)
├─ Grammatica italiana: preposizione necessaria
└─ Output parziale: "Il budget Q2 di"

Iterazione 5 - Genera "progetto":
├─ Input: Contesto completo (13K) + "Il budget Q2 di" (già generato)
├─ Attention: collega "progetto Alpha" dalla domanda
└─ Output parziale: "Il budget Q2 di progetto"

...e così via fino a "€350K" (trovato nel documento budget)
```

**Punto Cruciale**: Ad **ogni** iterazione, Claude:
1. Rilegge **tutto** il contesto originale (13K token)
2. Aggiunge i token già generati nella risposta corrente
3. Calcola probabilità per il prossimo token
4. Sceglie e genera il token
5. **Ripete** il processo

---

#### 3. Attention Mechanism in Azione

Per ogni token generato, l'attention "pesa" quali parti del contesto sono rilevanti:

**Esempio per token "€350K"**:

```
Attention Weights (semplificato):

Alta Attention (95-100%):
├─ "budget Q2" nel documento budget
├─ "progetto Alpha" nel documento
├─ Riga specifica: "Alpha - Q2: €350K allocated"

Media Attention (30-50%):
├─ Contesto generale budget nel documento
├─ Domanda dell'utente (per validare risposta corretta)

Bassa Attention (5-10%):
├─ Messaggi precedenti non correlati
├─ Altre sezioni documento (Q1, Q3, Q4)
└─ Progetti diversi da Alpha (Beta, Gamma...)
```

L'attention permette a Claude di "focalizzarsi" sulle informazioni rilevanti (Q2 + Alpha) ignorando parzialmente il resto (altri quarter, altri progetti).

---

#### 4. No Memoria Esterna

**Misconception Comune** ❌:
> "Claude legge il documento una volta, memorizza le info in una 'memoria', e poi risponde usando quella memoria"

**Realtà** ✅:
- **NON** esiste "memoria separata" dove Claude salva informazioni
- **TUTTO** è nel context window, riletto ad ogni iterazione
- Se rimuovi il documento → Claude non può più rispondere (no memoria persistente)

**Analogia**:
Immagina di dover rispondere a una domanda su un libro, ma ogni secondo devi **rileggere** l'intero libro + la domanda + ciò che hai scritto finora. Questo è esattamente ciò che fa l'LLM ad ogni token!

---

### Verifica Tua Comprensione

Hai capito correttamente se hai menzionato:

✅ **Contesto completo riletto ogni volta** (documento + cronologia + nuovo messaggio)
✅ **Processo iterativo token-by-token** (non generazione frasi intere)
✅ **Attention mechanism** che focalizza su parti rilevanti
✅ **No memoria esterna** - tutto nel context window

📖 **Approfondisci**:
- [Next Token Prediction](ragionamento#next-token-prediction-il-cuore-degli-llm)
- [Attention Mechanism](ragionamento#attention-mechanism-concetto-base)
- [Context Window Management](contesto)

</details>

---

### Domanda 4: Context Window Overflow

**Scenario**:

```
Hai una conversazione di 180K token con Claude (limit: 200K).
Carichi un nuovo documento da 30K token.
```

**Domanda a**: Cosa succede? Perché?

**Domanda b**: Come impatta questo la generazione token-by-token della risposta di Claude?

<details>
<summary>💡 Clicca per vedere la risposta completa</summary>

### Risposta Ideale

#### Domanda a: Overflow - Cosa Succede

**Calcolo**:
- Conversazione esistente: 180K token
- Nuovo documento: 30K token
- **Totale**: 180K + 30K = **210K token**
- Limit Claude: 200K token
- **Overflow**: 210K - 200K = **10K token in eccesso** ❌

---

**LLM deve "fare spazio" - Opzioni possibili**:

**1. Truncation (Troncamento) - Più Comune**:
```
[Context Window - 200K token limit]
│
├─ [Primi 10K token] ← ❌ RIMOSSO (messaggio 1-3)
├─ [Token 10K-180K] ← ✅ MANTENUTO (messaggi 4-50)
├─ [Nuovo documento 30K] ← ✅ AGGIUNTO
└─ TOTALE: 200K token (fit nel limit)
```

**Conseguenza**: Hai "dimenticato" i primi messaggi della conversazione (1-3).

---

**2. Error (Errore)**:
```
"Context window exceeded. Please reduce input."
```

Claude restituisce errore e ti chiede di:
- Rimuovere documenti
- Riassumere conversazione
- Iniziare nuova chat

---

**3. Sliding Window (Alcuni modelli)**:
- LLM mantiene parti **più rilevanti** del contesto
- Rimuove parti **meno importanti** (es. small talk, messaggi obsoleti)
- Intelligente ma **non perfetto** - può rimuovere info critiche

---

#### Domanda b: Impatto su Generazione Token-by-Token

**Se ha fatto truncation** (scenario più comune):

```
Conversazione PRIMA dell'overflow:
├─ Messaggio 1 (rimosso): "Progetto Alpha costa €500K" ← ❌
├─ Messaggio 2 (rimosso): "Deadline Alpha: 31 Dicembre" ← ❌
├─ Messaggio 3 (rimosso): "Team Alpha: 5 developer" ← ❌
├─ Messaggi 4-50 (mantenuti): discussione generale ← ✅
└─ Nuovo documento (30K): dati recenti ← ✅

Domanda attuale (messaggio 51):
"Qual è il budget di progetto Alpha?"
```

---

**Generazione della risposta Token-by-Token**:

**Iterazione 1-5**: Claude genera "Non trovo informazioni sul budget di Alpha"

```
Iterazione 1 - genera "Non":
├─ Input context: messaggi 4-50 + nuovo documento
├─ Attention: cerca "budget" + "Alpha"
├─ Trova: ❌ Info su budget Alpha NON presente (era in msg 1, rimosso!)
└─ Probabilità alta per "Non" (indica mancanza info)

Iterazione 2 - genera "trovo":
├─ Input: context + "Non"
└─ Segue pattern "Non trovo..." (risposta negativa)

Iterazione 3-5: "informazioni sul budget di Alpha"
```

**Output finale**: "Non trovo informazioni sul budget di progetto Alpha nel contesto attuale."

---

**Scenario Peggiore - Allucinazione**:

Se LLM trova pattern simili in altre parti del contesto (es. budget progetto Beta):

```
Iterazione 1-N: genera "Il budget di Alpha è €300K"

Come succede:
├─ Attention: cerca pattern "budget [progetto]"
├─ Trova: "Budget Beta: €300K" (messaggio 20, mantenuto)
├─ Confonde: Beta → Alpha (context insufficiente per disambiguare)
└─ Genera: valore SBAGLIATO (allucinato)
```

**Output finale (ERRATO)**: "Il budget di progetto Alpha è €300K"

→ Ma in realtà Alpha costa €500K (info era in msg 1, rimosso!)

---

#### Implicazioni Pratiche

**Problem Chain**:
```
Context Overflow
    ↓
Truncation (rimozione info iniziali)
    ↓
LLM genera token vedendo solo contesto parziale
    ↓
Attention non trova info necessarie
    ↓
Output: "non trovo info" (best case)
    O
Output: allucinazione basata su pattern simili (worst case)
    ↓
Qualità risposta degrada ❌
```

---

#### Come Prevenire

**Strategia 1: Monitor Context Usage**
```
Prima di caricare documento 30K:
- Check: context attuale = 180K
- Calcolo: 180K + 30K = 210K (overflow!)
- Azione: riassumi conversazione o inizia nuova chat
```

**Strategia 2: Summarize Periodicamente**
```
Ogni 50 messaggi (~100K token):
"Riassumi la nostra conversazione finora in 10 bullet points.
Dopo, ricominciamo usando il summary come contesto."

Risultato: 100K token → 1K token summary (risparmio 99K!)
```

**Strategia 3: Use Projects/Knowledge Base**
```
Invece di caricare documenti nel context:
- Upload a Claude Project (Knowledge Base)
- LLM accede senza occupare context window
- Conversazione rimane "leggera"
```

---

### Verifica Tua Comprensione

Hai capito correttamente se hai menzionato:

✅ **Overflow calculation** (210K > 200K limit)
✅ **Truncation** come soluzione comune
✅ **Info perse** dal contesto (primi messaggi)
✅ **Generazione token-by-token impattata** (attention non trova info eliminate)
✅ **Rischio allucinazione** o risposta "non trovo"
✅ **Strategie prevenzione** (summarize, projects, monitoring)

📖 **Approfondisci**:
- [Context Window - Overflow](contesto#overflow-cosa-succede-quando-superi-il-limite)
- [Strategie di Gestione Context](contesto#strategie-di-gestione-context)

</details>

---

## 🧪 Sezione 3: Scenario Complesso (Sintesi)

### Domanda 5: PMO Dashboard Design Challenge

**Context**:

Sei un PMO che vuole usare Claude per analizzare **50 status report settimanali** (~100K token totali) e rispondere a domande tipo:
- "Quali progetti hanno rischio budget?"
- "Chi è in ritardo di più di 2 settimane?"
- "Confronta performance team A vs team B"

...durante una sessione di lavoro interattiva.

---

**Domanda Multi-Parte**:

**a)** Considerando che Claude genera risposte **token-by-token rileggendo tutto il contesto**, quali sono i **vantaggi** di caricare tutti i 50 report nel context window vs fare query separate su batch più piccoli?

**b)** Quali sono i **rischi/limiti** di questo approccio, pensando al meccanismo di next token prediction e attention?

**c)** Proponi una **strategia ottimale** per bilanciare vantaggi e limiti. Giustifica tecnicamente le tue scelte.

<details>
<summary>💡 Clicca per vedere la risposta completa e rubrica valutazione</summary>

### Risposta Ideale - Parte a: Vantaggi Context Unificato

#### 1. Cross-Reference Automatico

**Vantaggio**: Attention può "vedere" tutti i report simultaneamente

**Esempio Pratico**:
```
Query: "Confronta budget Alpha vs Beta"

Con context unificato (100K token, 50 report):
├─ Iterazione 1-N: genera risposta
├─ Attention: focalizza su "budget Alpha" (report 5) E "budget Beta" (report 23)
├─ Genera: "Alpha: €500K speso/€600K allocato (83%)
│           Beta: €200K speso/€400K allocato (50%)"
└─ NO bisogno di reload o query multiple

Senza context unificato (batch 25 report):
├─ Query 1 su Batch 1: trova Alpha, NON trova Beta
├─ Query 2 su Batch 2: trova Beta
└─ TU manualmente confronti → workflow inefficiente
```

**Beneficio**: Risposta immediata con comparison automatica cross-report.

---

#### 2. Coerenza Risposte Multi-Query

**Vantaggio**: Ogni token generato ha accesso all'**intero dataset**

**Esempio Pratico**:
```
Query 1: "Quali progetti sono a rischio?"
Output: "Alpha, Gamma, Epsilon" (basato su 50 report)

Query 2 (successiva): "Dettagli su progetti a rischio"
Output: Claude ricorda "Alpha, Gamma, Epsilon" dalla risposta precedente
        E accede ai report originali per dettagli

Con context unificato:
- Coerenza perfetta tra query 1 e 2
- No contraddizioni

Senza context unificato:
- Query 2 su batch diverso → potrebbe menzionare progetti diversi
- Inconsistenza tra risposte
```

---

#### 3. Pattern Recognition Cross-Progetti

**Vantaggio**: Attention trova pattern emergenti su scala completa

**Esempio**:
```
Query: "Identifica trend comuni nei progetti in ritardo"

Attention mechanism:
├─ Analizza tutti 50 report simultaneamente
├─ Pattern matching su progetti "in ritardo"
├─ Trova: 8 progetti in ritardo hanno tutti "dependency su API esterna"
└─ Output: "Trend critico: dependency esterne = top blocker"

Con batch separati:
- Batch 1 (25 report): trova 4 progetti con dependency issue
- Batch 2 (25 report): trova 4 progetti con dependency issue
- TU devi aggregare manualmente → insight più lento
```

---

#### 4. Efficienza Conversazionale

**Vantaggio**: No re-upload, conversazione fluida

```
Workflow Con Context Unificato:
├─ Upload 50 report: 1 volta (inizio sessione)
├─ Query 1: risposta immediata
├─ Query 2: risposta immediata (context già caricato)
├─ Query 3-10: flow continuo
└─ Tempo totale: ~5 minuti per 10 query

Workflow Senza Context Unificato:
├─ Query 1: upload batch 1 → attendi → risposta
├─ Query 2: upload batch 2 → attendi → risposta
├─ Query 3: upload batch 1+2 (per cross-reference) → attendi
└─ Tempo totale: ~20 minuti per 10 query (overhead upload)
```

---

### Risposta Ideale - Parte b: Rischi e Limiti

#### 1. Attention Degradation ("Lost in the Middle")

**Problema**: Con 100K token, attention si "disperde"

**Meccanismo Tecnico**:
```
Context di 100K token (50 report):
├─ Report 1-5 (inizio): Attention ALTA (primacy effect)
├─ Report 20-30 (mezzo): Attention BASSA ← ⚠️ PROBLEMA
└─ Report 45-50 (fine): Attention ALTA (recency effect)

Query: "Budget progetto Gamma" (Gamma è nel report 25 = nel mezzo)

Generazione token-by-token:
├─ Attention: scansiona 100K token
├─ Focus preferenziale: inizio + fine context
├─ Report 25 (Gamma): attention DEBOLE
└─ Rischio: info su Gamma "persa" o ignorata parzialmente
```

**Risultato**: Info nel mezzo del context rischiano di essere sottovalutate.

📊 **Research**: Modelli LLM mostrano 20-40% degradazione accuracy su info "nel mezzo" di context lunghi.

---

#### 2. Context Window Saturo

**Problema**: 100K token di report = poco spazio per conversazione

```
Claude Context Window: 200K token limit
├─ 50 report: 100K token (50% del limit)
├─ System prompt: 1K token
├─ Cronologia conversazione: ?
└─ Spazio rimanente: ~99K token per chat

Dopo 30-40 messaggi (~60-80K token conversazione):
├─ Totale: 100K (report) + 1K (system) + 80K (chat) = 181K
├─ Vicino al limit (200K)
└─ Prossimi 10-15 messaggi → OVERFLOW RISK

Conseguenza:
- Truncation: rimuove inizio conversazione o parte dei report
- Context instabile dopo conversazione lunga
```

---

#### 3. Latency (Velocità)

**Problema**: Ogni token rilegge 100K token → generazione più lenta

**Timing Stimato**:
```
Query su 100K context:
├─ Time to First Token (TTFT): ~2-4 secondi
├─ Token/secondo: ~30-50 token/sec (vs 80-100 con context piccolo)
└─ Risposta completa (200 token): ~6-10 secondi

Query su 10K context (batch piccolo):
├─ TTFT: ~0.5-1 secondo
├─ Token/secondo: ~80-100
└─ Risposta completa (200 token): ~2-3 secondi
```

**Impatto UX**: Risposte percepibilmente più lente con context enorme.

---

#### 4. Cognitive Load & Noise

**Problema**: Con 50 report, attention può "distrarsi" su informazioni irrilevanti

**Esempio**:
```
Query: "Budget Alpha"

Context: 50 report con:
- "Budget" menzionato 200+ volte (ogni report ha sezione budget)
- "Alpha" menzionato 15 volte (vari contesti)
- Altri 1000+ nomi di progetti, KPI, date...

Attention mechanism:
├─ Deve filtrare 100K token per trovare "budget Alpha"
├─ Noise: "budget Beta", "budget Gamma", "alpha version", "alpha test"...
├─ Rischio: confusion tra "Alpha project" vs "alpha release" vs "alpha testing"
└─ Qualità: può degradare se troppo noise

Con context piccolo (5-10 report rilevanti):
├─ Meno noise
├─ Attention più focalizzata
└─ Accuracy migliore
```

---

### Risposta Ideale - Parte c: Strategia Ottimale

#### Approccio Ibrido Raccomandato

**Architettura**:

```
┌─────────────────────────────────────────────┐
│ Claude Project - Knowledge Base (Persistent)│
│ ├─ 50 Status Report (storage permanente)    │
│ └─ No impact su context window              │
└─────────────────────────────────────────────┘
           ↓ Query-based retrieval
┌─────────────────────────────────────────────┐
│ Context Window (200K)                        │
│ ├─ System prompt: 1K                         │
│ ├─ Subset report rilevanti: 10-20K          │
│ ├─ Conversazione: 20-30K                     │
│ └─ Spazio libero: ~150K (buffer)            │
└─────────────────────────────────────────────┘
```

---

**Step-by-Step Workflow**:

**1. Setup Iniziale (Fase Upload)**:
```
Azione: Upload tutti 50 report a Claude Project (Knowledge Base)

Vantaggi:
- Persistent storage: no re-upload tra sessioni
- No context window consumption
- Full-text search capabilities

Docusaurus:
project = claude.create_project("PMO Dashboard Q1-Q4")
project.upload_documents(status_reports_50)  # permanent storage
```

---

**2. Query con Reference Mirato (Fase Analysis)**:

```
Query Generale (Cross-Report Pattern):

"Basandoti sui 50 status report in Knowledge Base, identifica progetti con:
 - Budget speso &gt;80% E timeline remaining &gt;50%
 - Estrai: nome progetto, PM, % budget, % timeline, risk level

Output formato: tabella markdown"

Cosa succede:
├─ Claude accede a Knowledge Base (50 report)
├─ Attention: scansiona tutti ma estrae solo info richieste
├─ Genera: tabella con 8 progetti identificati
└─ Context window: ~5K token (solo query + risposta, NO 50 report)
```

**Output Esempio**:
```markdown
| Progetto | PM | Budget % | Timeline % | Risk |
|----------|----|-----------| ------------|------|
| Alpha    | Sara | 85% | 55% | HIGH |
| Gamma    | Luca | 90% | 60% | CRITICAL |
...
```

---

**3. Deep Dive su Subset (Fase Details)**:

```
Follow-up Query:

"Carica nel context window i report di Alpha e Gamma identificati sopra.
Analizza root cause dei budget overrun per ciascuno."

Cosa succede:
├─ Claude carica SOLO 2 report nel context (~4K token)
├─ Context window: leggero, attention focalizzata
├─ Analisi deep: dettagli, citazioni, root cause analysis
└─ No "lost in the middle" problem (solo 2 report)

Output: analisi dettagliata su Alpha & Gamma con citazioni specifiche
```

---

**4. Summarize Periodicamente (Fase Maintenance)**:

```
Ogni 15-20 messaggi (~30K token conversazione):

"Riassumi insights chiave emersi finora:
 - Progetti critici
 - Pattern identificati
 - Action items

Formato: 10 bullet points max, poi ricominciamo chat usando summary"

Risultato:
├─ 30K token conversazione → 500 token summary
├─ Risparmio: 29.5K token context
└─ Context window: libero per nuove query
```

---

#### Giustificazione Tecnica della Strategia

**Perché Funziona**:

| Aspetto | Problema Originale | Come Strategia Risolve |
|---------|-------------------|------------------------|
| **Attention Degradation** | 100K context = info "perse nel mezzo" | Knowledge Base + subset mirato = 5-10K context (no degradation) |
| **Context Saturo** | 100K report + chat → overflow rapido | Report fuori da context, solo subset caricato (150K liberi) |
| **Latency** | 100K token riletto ogni iterazione = lento | Context piccolo (5-10K) = generazione veloce (80+ tok/sec) |
| **Cognitive Load** | 50 report = noise elevato | Subset rilevante = attention focalizzata, meno noise |
| **Cross-Reference** | Batch separati = no comparison | Knowledge Base accesso full dataset per pattern recognition |
| **Coerenza** | Query multiple su batch diversi = inconsistenza | Single source of truth (Knowledge Base) = coerenza garantita |

---

**Concetti Fondamentali Applicati**:

✅ **Next Token Prediction Ottimizzato**:
- Ogni token generato vede context **rilevante** (non 100K indiscriminato)
- Probabilità calcolo più accurato (meno noise)

✅ **Attention Mechanism Efficace**:
- Focus su 5-10K token rilevanti vs 100K dispersi
- Attention weights più "puliti", info critiche in evidenza

✅ **Context Window Management**:
- Storage permanente (Projects) per bulk data
- Context window per working memory dinamico
- Buffer ampio per conversazioni lunghe (150K liberi)

✅ **Batch Processing Intelligente**:
- Analisi generale su tutti 50 report (Knowledge Base)
- Deep dive su subset rilevante (context window)
- Divide et impera: scalabilità garantita

---

### Rubrica di Valutazione

**Risposta Eccellente** (100%) include:

- ✅ **Parte a**: Almeno 3 vantaggi concreti con esempi pratici
- ✅ **Parte b**: Almeno 3 limiti tecnici con riferimento a next token prediction/attention
- ✅ **Parte c**: Strategia ibrida con giustificazione tecnica dettagliata
- ✅ **Bonus**: Cita concetti specifici (attention degradation, lost in the middle, truncation)

**Risposta Buona** (70-90%):

- ✅ Identifica vantaggi e limiti principali
- ✅ Propone strategia ragionevole
- ⚠️ Manca profondità tecnica su meccanismi (attention, token-by-token)

**Risposta Sufficiente** (50-70%):

- ✅ Comprende scenario base
- ⚠️ Vantaggi/limiti generici senza esempi concreti
- ⚠️ Strategia vaga o non ottimale

**Risposta Insufficiente** (&lt;50%):

- ❌ Non comprende impatto di context window su generazione
- ❌ Strategia impraticabile o contraddittoria
- ❌ Non menziona attention o next token prediction

---

### Approfondimenti Consigliati

Se hai trovato difficoltà, rivedi:

📖 [Next Token Prediction - Come Funziona](ragionamento#next-token-prediction-il-cuore-degli-llm)
📖 [Attention Mechanism - Limiti](ragionamento#limiti-di-attention)
📖 [Context Window - Strategie di Gestione](contesto#strategie-di-gestione-context)
📖 [Batch Processing Intelligente](contesto#4-batch-processing-intelligente)

</details>

---

## 🎯 Auto-Valutazione

### Checklist Comprensione Concetti Chiave

Segna ✅ solo se riesci a spiegare il concetto a un collega **senza** rileggere i materiali:

#### Token & Tokenizzazione

- [ ] So spiegare cos'è un token e come viene creato dalla tokenizzazione
- [ ] Comprendo che 1 parola ≠ 1 token (può essere multipli)
- [ ] So perché l'italiano usa più token dell'inglese
- [ ] Conosco quando ottimizzare token (e quando NON serve)

#### Context Window

- [ ] So cos'è il context window e cosa include
- [ ] Comprendo i limiti per modello (GPT-5, Claude Sonnet 4, Gemini)
- [ ] So cosa succede quando supero il limite (truncation, overflow)
- [ ] Conosco almeno 3 strategie per gestire context lungo

#### Next Token Prediction

- [ ] Comprendo che LLM genera **token-by-token**, non frasi intere
- [ ] So che ad **ogni iterazione** LLM rilegge **tutto** il contesto
- [ ] Comprendo che non c'è "memoria esterna" - solo context window
- [ ] So perché questo impatta la velocità e i costi

#### Attention Mechanism

- [ ] So spiegare a livello concettuale cos'è l'attention
- [ ] Comprendo come attention "focalizza" su parti rilevanti
- [ ] Conosco il problema "lost in the middle" con context lunghi
- [ ] So come attention degrada con troppo noise/informazioni

#### Limiti e Best Practices

- [ ] Comprendo che LLM NON "ragiona" come umani (pattern matching statistico)
- [ ] So riconoscere quando LLM rischia errori (multi-step reasoning, logic)
- [ ] Conosco tecniche di mitigazione (Chain-of-Thought, breakdown, verifiche)
- [ ] So quando usare LLM (pattern recognition) vs quando serve human judgment

---

### Punteggio di Maturità

- **20/20 ✅**: Eccellente! Hai compreso profondamente i fondamenti LLM
- **15-19 ✅**: Buona comprensione, rivedi aree con ⬜
- **10-14 ⚠️**: Competenza base, ripassa moduli con difficoltà
- **&lt;10 ❌**: Rivedi Giorno 1 completamente prima di continuare

---

## 🔗 Risorse per Approfondire

**Se hai sbagliato domande su Token**:
- 📖 Rileggi: [Token - L'Alfabeto degli LLM](token)
- 🔧 Pratica: [OpenAI Tokenizer](https://platform.openai.com/tokenizer) - Visualizza token real-time

**Se hai sbagliato domande su Context Window**:
- 📖 Rileggi: [Contesto e Context Window](contesto)
- 📖 Strategie: [Context Management Best Practices](contesto#strategie-di-gestione-context)

**Se hai sbagliato domande su Next Token Prediction**:
- 📖 Rileggi: [Come "Ragionano" gli LLM](ragionamento)
- 🔧 Interactive: [LLM Visualization](https://bbycroft.net/llm) - Vedi token generation in azione

**Se hai sbagliato domande su Attention**:
- 📖 Rileggi: [Attention Mechanism](ragionamento#attention-mechanism-concetto-base)
- 📖 Visual: [Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)

---

## ➡️ Prossimi Passi

### Se Hai Superato la Verifica (≥15/20)

✅ **Ottimo lavoro!** Sei pronto per:

1. **Applicare**: Usa questi concetti nei tuoi prompt quotidiani
2. **Sperimentare**: Testa limiti di LLM con scenari reali del tuo lavoro
3. **Continuare**: Passa al [Modulo 2: Prompt Engineering](../prompt-engineering-teoria/) - Framework RACE

---

### Se Hai Bisogno di Ripasso (&lt;15/20)

⚠️ **Nessun problema!** Concetti complessi richiedono tempo:

1. **Rivedi**: Rileggi moduli dove hai avuto difficoltà
2. **Pratica**: Usa [esercizi pratici](../esercizi-pratici/) del Giorno 1
3. **Discuti**: Porta domande al formatore o gruppo
4. **Ritenta**: Rifai questa verifica tra 1-2 giorni

:::tip 💡 Strategia di Studio
Non andare avanti se hai &lt;10/20. I concetti del Giorno 1 sono **fondamentali** per tutto il resto del workshop. Meglio consolidare ora che confondersi dopo!
:::

---

## 💬 Feedback & Discussione

**Domande aperte per riflessione/discussione di gruppo**:

1. Quale concetto ti ha sorpreso di più? (Next token prediction? Attention? Context limits?)
2. Come cambierà il tuo modo di scrivere prompt ora che conosci questi meccanismi?
3. Quali workflow del tuo lavoro beneficerebbero da context window grande (1M token)?
4. Hai identificato task dove LLM rischia di sbagliare? Come mitigheresti?

---

:::info 📧 Hai Domande Non Risolte?
Se hai dubbi dopo questa verifica:
- 💬 Discussione gruppo: [Forum workshop](#)
- 📧 Email formatore: [contatto@workshop.it](#)
- 📚 Office hours: Mercoledì 14:00-15:00
:::

---

**[Fine Verifica]**
