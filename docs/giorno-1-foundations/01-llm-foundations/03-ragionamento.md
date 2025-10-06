---
title: Come "Ragionano" gli LLM
description: Comprendi il meccanismo di next token prediction e i limiti del ragionamento LLM
sidebar_position: 3
tags: [llm-foundations, next-token-prediction, attention, limiti]
---

# Come "Ragionano" gli LLM

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Comprendere come funziona la next token prediction
- [ ] Spiegare l'attention mechanism a livello concettuale
- [ ] Riconoscere i limiti del "ragionamento" LLM e come mitigarli

---

## 🔮 Next Token Prediction: Il Cuore degli LLM

:::tip 💡 Analogia: Gioco del "Completa la Frase"
Immagina di giocare a completare frasi:
- "Il sole sorge a..." → **est**
- "2 + 2 = ..." → **4**
- "Il gatto è seduto sul..." → **tappeto** (probabile)

LLM fa esattamente questo, ma con miliardi di pattern appresi!
:::

---

### Come Funziona Step-by-Step

**Processo di Generazione**:

```
Input utente: "Scrivi i vantaggi del lavoro remoto"

Step 1: LLM riceve prompt → tokenizza
Step 2: Calcola probabilità per OGNI possibile token successivo
Step 3: Sceglie token (influenzato da temperature)
Step 4: Aggiunge token all'output
Step 5: Ripete da Step 2 fino a "stop"

Output generato token-by-token:
"I" → "vantaggi" → "del" → "lavoro" → "remoto" → "sono" → ...
```

**Non è Magia**: È statistica applicata a scala enorme.

---

### Esempio Interattivo

**Frase**: "Il gatto è seduto sul..."

**LLM Calcola Probabilità**:

| Token | Probabilità | Perché? |
|-------|-------------|---------|
| "tappeto" | 45% | Visto spesso in training ("gatto" + "seduto" + "sul tappeto") |
| "divano" | 30% | Anche comune |
| "tavolo" | 15% | Possibile ma meno frequente |
| "tetto" | 8% | Raro ma plausibile |
| "Luna" | 0.01% | Grammaticalmente possibile ma assurdo |
| "sdraio" | 2% | Meno comune |

:::info 🌡️ Cos'è Temperature?
**Temperature** è un parametro (0.0-1.0) che controlla la **casualità** dell'output:
- **Bassa (0.1-0.3)**: Output deterministico, preciso, ripetibile
- **Alta (0.8-1.0)**: Output creativo, vario, sorprendente

Approfondiremo nel dettaglio in [Concetti Essenziali: Temperature](concetti-chiave)
:::

**Con Temperature Bassa (0.1)**: Sceglie quasi sempre "tappeto" (deterministic)

**Con Temperature Alta (0.9)**: Potrebbe scegliere "tetto" o varianti creative

---

### Perché "Ragionamento" È tra Virgolette

LLM **NON ragiona** come umani. Non ha:

❌ **Vera comprensione**: Non "capisce" cosa è un gatto
❌ **Modello del mondo**: Non sa che gatti sono animali reali
❌ **Intenzionalità**: Non "vuole" aiutarti
❌ **Coscienza**: È una funzione matematica complessa

✅ **Cosa FA**: Pattern matching statistico ultra-sofisticato

**Implicazione Pratica**: Può generare output plausibili ma logicamente sbagliati.

---

## 🎯 Attention Mechanism (Concetto Base)

### Cos'è Attention

**Definizione semplice**: Meccanismo che permette all'LLM di "prestare attenzione" alle parti rilevanti del contesto.

:::tip 💡 Analogia: Leggere un Libro
Quando leggi:
- "Maria ama i cani. Le piacciono molto. **Lei** ha un golden retriever."

Per capire "Lei" → il tuo cervello "presta attenzione" a "Maria" (non "cani").

Attention fa lo stesso: collega "Lei" → "Maria" nel testo.
:::

---

### Come Funziona (Semplificato)

**Esempio**:

```
Prompt: "Maria è una PM esperta. Lei gestisce progetti complessi.
         Oggi lei deve scrivere un report."

Quando genera "deve scrivere un report":
- Attention si focalizza su: "Maria", "PM", "progetti complessi"
- Ignora (parzialmente): parole meno rilevanti

Questo mantiene COERENZA nel testo generato.
```

**Perché Importa**:
- Consente conversazioni coerenti su testi lunghi
- Permette riferimenti a informazioni menzionate prima
- Essenziale per context window grande (Claude 200K)

---

### Self-Attention: Focus su Relazioni

LLM usa **self-attention**: ogni parola "guarda" tutte le altre per capire relazioni.

**Esempio**:

```
Frase: "Il progetto che abbiamo lanciato ieri è in ritardo"

Self-Attention collega:
- "progetto" ← → "lanciato ieri"
- "è" ← → "progetto" (soggetto)
- "ritardo" ← → "progetto" (cosa è in ritardo)

Output: LLM "capisce" che il PROGETTO (non "ieri" o altro) è in ritardo.
```

:::info 🔬 Tecnico ma Utile
Attention è il motivo per cui LLM può:
- Rispondere a domande su testi lunghi
- Mantenere coerenza in conversazioni multi-turn
- Riferirsi a informazioni fornite 100 messaggi prima
:::

---

### Visualizzazione Attention: Come "Vede" il Testo

**Esempio Semplice**:

```
Input: "Il progetto Alpha è in ritardo. Dobbiamo escalarlo."

Attention Weights (semplificato):
┌─────────────────────────────────────────────────┐
│ Token      │ Focus Principale                   │
├─────────────────────────────────────────────────┤
│ "Il"       │ → progetto                         │
│ "progetto" │ → Alpha, ritardo (contesto)        │
│ "Alpha"    │ → progetto (nome specifico)        │
│ "è"        │ → progetto, ritardo (predicato)    │
│ "in"       │ → ritardo (preposizione stato)     │
│ "ritardo"  │ → progetto, Alpha (info critica!)  │
│ "Dobbiamo" │ → ritardo (azione conseguente)     │
│ "escalarlo"│ → progetto Alpha, ritardo (tutto!) │
└─────────────────────────────────────────────────┘

Quando genera "escalarlo" → Attention collega a "progetto Alpha in ritardo"
```

Questo meccanismo permette all'LLM di "capire" che escalare si riferisce al **progetto in ritardo**, non a qualcos'altro.

---

### Multi-Head Attention: Diversi "Punti di Vista"

LLM usa **multiple attention heads** (teste) simultaneamente:

```
Frase: "Maria ha presentato il budget al board ieri"

Head 1 (Chi-Cosa):     Maria ← → budget, presentato
Head 2 (A Chi):        presentato ← → board
Head 3 (Quando):       presentato ← → ieri
Head 4 (Relazioni):    Maria ← → board (relazione)

Combinando: LLM "comprende" scenario completo
```

Ogni head focalizza su aspetti diversi (soggetto-verbo, relazioni temporali, etc.).

**Analogia**: Come tu leggi un documento con diverse "lenti":
- Lens 1: Chi fa cosa?
- Lens 2: Quando?
- Lens 3: Perché?

LLM fa lo stesso, simultaneamente, con decine di "lenti" (heads).

---

### Esempi Pratici: Attention al Lavoro

**Esempio PM - Status Report**:

```
Input (lungo):
"Progetto Alpha (PM: Maria) - Q1 2025
 - Budget: €500K allocato, €320K speso
 - Timeline: In linea ma 2 developer su 5 in sick leave
 - Risks: Dependency su API esterna non ancora stabile

Progetto Beta (PM: Luca) - Q1 2025
 - Budget: €200K allocato, €180K speso
 - Timeline: +2 settimane ritardo
 - Blockers: Client review ancora pending da 3 settimane

Domanda: Qual è il budget residuo di Alpha?"

LLM con Attention:
1. Identifica "Alpha" come focus
2. Attention su "€500K allocato, €320K speso" (ignora Beta!)
3. Calcola: 500-320 = 180K
4. Output: "Budget residuo Alpha: €180K"
```

**Senza Attention**: LLM si confonderebbe tra Alpha e Beta.

**Con Attention**: Focalizza precisamente su info rilevante.

---

**Esempio Service Designer - User Feedback**:

```
Input:
"User A: 'App è lenta ma funzioni sono utili'
 User B: 'Design bellissimo, peccato per lentezza'
 User C: 'Ottima UX, solo performance da migliorare'

Domanda: Qual è il tema comune negativo?"

Attention Mechanism:
- Focalizza su: "lenta", "lentezza", "performance da migliorare"
- Collega tutti e 3 i feedback (pattern matching)
- Output: "Performance/Velocità è il tema negativo ricorrente"
```

Attention permette di trovare **pattern cross-feedback**, anche se espressi con parole diverse.

---

### Limiti di Attention

Anche Attention ha limiti importanti:

**1. Degradazione su Context Lunghissimo**:

```
Context: 200,000 token (libro intero)

Attention su token 1 → token 200,000 = più debole
vs
Attention su token 199,990 → token 200,000 = forte

→ Info all'inizio del context possono essere "dimenticate"
```

**Soluzione**: Riassumi o ri-inietta info critiche nel prompt.

---

**2. "Lost in the Middle" Problem**:

```
Documento con 100 punti:
- Punti 1-10: Attention ALTA
- Punti 50-60: Attention BASSA (nel mezzo, "persi")
- Punti 90-100: Attention ALTA (recency bias)

→ Info nel mezzo di documenti lunghi rischiano di essere ignorate
```

**Soluzione**: Struttura documenti con info critica all'inizio o fine.

---

**3. Distrazione da Noise**:

```
Prompt con molto rumore:
"Progetto importante [bla bla bla 500 parole irrilevanti] deadline critica domani"

Attention può "distrarsi" su rumore invece di focus su "deadline domani"
```

**Soluzione**: Prompt concisi, info critica in evidenza (bold, ripetizione).

---

## ⚠️ Limiti del "Ragionamento" LLM

### 1. Errori Logici Banali

**Esempio**:

```
❌ Prompt: "Se ho 3 mele e ne mangio 5, quante me ne restano?"

LLM potrebbe dire: "Te ne restano -2 mele" o confondersi.

Umano: "Impossibile mangiare più mele di quelle che hai!"
```

**Perché succede**: LLM fa pattern matching, non ragionamento logico vero.

**Come Mitigare**:
- Usa Chain-of-Thought (vedremo dopo)
- Chiedi di verificare logica: "Check if this makes sense before answering"

---

### 2. Mancanza di Modello del Mondo Reale

**Esempio**:

```
❌ Prompt: "Posso usare una forchetta per bere acqua?"

LLM: "Tecnicamente sì, ma è scomodo. Meglio usare un bicchiere."

Umano: "È IMPOSSIBILE bere con una forchetta!"
```

LLM sa che "forchetta" e "bere" appaiono in contesti correlati (tavola, cibo), ma non ha esperienza fisica.

---

### 3. Confusione su Riferimenti Complessi

**Problema**: LLM può perdere traccia di **riferimenti anaforici** (pronomi, questo/quello) in testi complessi con molti soggetti.

**Perché Succede**: Attention mechanism non è perfetto. Con molti riferimenti sovrapposti, può collegare pronomi alla parola sbagliata.

---

#### Esempi Pratici - Riferimenti Ambigui

**Esempio 1 - Meeting Notes Confuse**

```
❌ Prompt Ambiguo:
"Durante il meeting, Maria ha presentato il nuovo design al team.
 Luca ha fatto domande critiche su performance.
 Lei ha risposto che era già ottimizzato.
 Poi lui ha detto che serviva testing.
 Lei ha concordato e assegnato task a Giorgio.

 Domanda: Chi ha assegnato task a Giorgio?"

LLM potrebbe:
- Confondere "lei" → potrebbe riferirsi a Maria O altra persona femminile menzionata
- In contesti complessi: errore ~30% delle volte

→ Output incerto: "Lei ha assegnato..." (ma chi è lei?)
```

✅ **Prompt Chiaro**:
```
"Durante il meeting:
- Maria presenta nuovo design
- Luca chiede su performance
- Maria risponde: già ottimizzato
- Luca dice: serve testing
- Maria concorda e assegna task a Giorgio

Domanda: Chi ha assegnato task a Giorgio?"

→ Output corretto: "Maria ha assegnato task a Giorgio"
```

**Lezione**: Sostituisci pronomi con nomi espliciti in documenti importanti.

---

**Esempio 2 - Requirements Complessi**

```
❌ Prompt Ambiguo:
"Sistema A deve sincronizzarsi con Sistema B ogni ora.
 Esso deve validare dati prima di inviarli.
 Quello deve confermare ricezione entro 30 secondi.
 Se questo fallisce, esso deve retry 3 volte.

 Domanda: Quale sistema fa retry?"

Riferimenti:
- "Esso" 1° → Sistema A? B?
- "Quello" → A o B?
- "Questo" → Quale azione?
- "Esso" 2° → A o B?

LLM: Confusione totale! 🤯
```

✅ **Prompt Chiaro**:
```
"Requisiti sincronizzazione:
1. Sistema A sincronizza con Sistema B ogni ora
2. Sistema A valida dati prima invio
3. Sistema B conferma ricezione entro 30 sec
4. Se Sistema B non conferma: Sistema A retry 3 volte

Domanda: Quale sistema fa retry?"

→ Output corretto: "Sistema A fa retry"
```

---

**Esempio 3 - Stakeholder Complessi (PMO)**

```
❌ Prompt Ambiguo:
"Il CTO ha richiesto al PM di coinvolgere l'architetto senior.
 Lui deve validare le scelte tecniche prima che lui approvi il budget.
 Se lui trova problemi, lui deve escalare al board.

 Chi escala al board in caso di problemi?"

"Lui" appare 4 volte → LLM deve indovinare chi è chi!
```

✅ **Prompt Chiaro**:
```
"Processo approvazione:
1. CTO richiede a PM di coinvolgere Architetto Senior
2. Architetto Senior valida scelte tecniche
3. CTO approva budget dopo validazione
4. Se Architetto Senior trova problemi → escala al board

Chi escala al board?"

→ Output corretto: "Architetto Senior escala al board"
```

---

#### Quando Riferimenti Sono Problematici

🚨 **Alta Probabilità Errore**:
- **Pronomi multipli** (lui/lei/esso ripetuti)
- **Molti soggetti** (3+ persone/sistemi in stesso paragrafo)
- **Riferimenti annidati** ("questo" che si riferisce a "quello" che si riferisce a...)
- **Distanza dal referente** (pronome 50+ parole dopo il nome)

✅ **LLM Gestisce Bene**:
- **Riferimenti vicini** (pronome subito dopo nome)
- **Unico soggetto** per paragrafo
- **Nomi espliciti** invece di pronomi

---

#### Best Practices per Prompt Chiari

**1. Regola dei Nomi Espliciti**

```
❌ Evita: "Lui ha detto a lei che esso non funziona"
✅ Usa:   "Marco ha detto a Sara che il sistema non funziona"
```

---

**2. Struttura a Liste Numerate**

```
❌ Paragrafo denso:
"Il PM coordina con developer che implementa feature per utente finale che
 poi testa e dà feedback al PM che lo passa al developer..."

✅ Lista chiara:
1. PM coordina progetto
2. Developer implementa feature
3. Utente finale testa
4. Utente dà feedback a PM
5. PM passa feedback a Developer
```

---

**3. Identificatori Unici**

Per sistemi/entità simili:

```
❌ "Sistema A, Sistema B, Sistema C..."
✅ "Auth Service, Payment Gateway, Notification Service"

Nomi descrittivi > Lettere generiche
```

---

**4. Riformula Domande Complesse**

```
❌ "Nell'esempio di prima, chi tra quelli menzionati deve fare cosa?"

✅ "Nel processo descritto:
    - Chi valida i dati?
    - Chi approva il budget?
    - Chi escala problemi?"

Domande multiple semplici > 1 domanda complessa
```

---

#### Quick Fix: Riassumi e Chiarisci

Se hai documento con molti pronomi:

```
Prompt a LLM:
"Riscrivi questo testo sostituendo TUTTI i pronomi (lui, lei, esso, questo, quello)
 con i nomi espliciti delle persone/cose a cui si riferiscono.

[Testo con pronomi]"

→ LLM genera versione chiara
→ Usa quella versione per analisi successive
```

---

### 4. Ragionamento Multi-Step Debole

**Problema Fondamentale**: LLM fatica quando serve **ragionamento sequenziale** con più passaggi logici dipendenti.

**Perché Succede**: Ogni token è generato basandosi sul precedente, ma LLM non "pianifica" i passi prima di rispondere.

---

#### Esempi Pratici Multi-Step

**Esempio 1 - PM: Calcolo Budget Multi-Fase**

```
❌ Prompt Debole:
"Progetto: budget €500K, speso 40% in Q1, 35% in Q2.
 Se Q3 è 20% e serve 10% buffer finale, quanto posso spendere in Q4?"

LLM potrebbe:
- Sbagliare calcolo cumulativo (40+35+20 = ?)
- Dimenticare il buffer 10%
- Confondere percentuali su totale vs residuo
→ Output: "Puoi spendere €75K" (SBAGLIATO)
```

**Reasoning Corretto Step-by-Step**:
1. Speso Q1: 40% di 500K = €200K
2. Speso Q2: 35% di 500K = €175K
3. Speso Q3: 20% di 500K = €100K
4. Cumulativo Q1-Q3: 200+175+100 = €475K
5. Residuo: 500-475 = €25K
6. Buffer 10%: 10% di 500K = €50K (serve rimanere sotto questo)
7. **Q4 disponibile**: 25K, ma attenzione al buffer!

→ Output corretto: "€25K disponibili, ma già sotto buffer 10% (€50K). Budget esaurito."

---

**Esempio 2 - Service Designer: Prioritizzazione Features**

```
❌ Prompt Debole:
"Feature A: effort 8, value 6
 Feature B: effort 3, value 5
 Feature C: effort 5, value 8
 Capacity team: 10 story points

 Quali features prioritizzi per massimizzare valore?"

LLM potrebbe:
- Non calcolare ratio value/effort correttamente
- Non verificare combinazioni che fitano in capacity 10
→ Output: "Fai A e C" (13 SP, eccede capacity! SBAGLIATO)
```

**Reasoning Corretto Step-by-Step**:
1. Calcolo value/effort ratio:
   - A: 6/8 = 0.75
   - B: 5/3 = 1.67 ⭐
   - C: 8/5 = 1.60
2. Ordine per ratio: B (1.67) > C (1.60) > A (0.75)
3. Fit in capacity 10 SP:
   - B (3 SP) + C (5 SP) = 8 SP ✅ Fit!
   - B (3 SP) + C (5 SP) + A (8 SP) = 16 SP ❌ Eccede
4. **Scelta ottimale**: B + C (8 SP, valore totale 13)

---

**Esempio 3 - Funzionale: Dependency Resolution**

```
❌ Prompt Debole:
"Task A dipende da B
 Task B dipende da C
 Task D dipende da A
 In che ordine eseguo?"

LLM potrebbe dire: "A, B, C, D" (SBAGLIATO, viola dipendenze)
```

**Reasoning Corretto Step-by-Step**:
1. Identifico tasks senza dipendenze: **C** (nessuno dipende da)
2. C fatto → posso fare **B** (dipende solo da C)
3. B fatto → posso fare **A** (dipende da B)
4. A fatto → posso fare **D** (dipende da A)
5. **Ordine corretto**: C → B → A → D

---

#### Strategie di Mitigazione

✅ **1. Chain-of-Thought (CoT) Prompting**

Forza LLM a mostrare passaggi:

```
✅ Prompt Migliorato:
"[Problema multi-step]

Rispondi seguendo questi step:
1. Identifica dati noti
2. Calcola passaggi intermedi (mostra calcoli)
3. Verifica logica di ogni step
4. Combina risultati per risposta finale

Mostra TUTTI i passaggi."
```

Questo riduce errori del 60-80% su task multi-step!

---

✅ **2. Break Down Esplicito**

Spezza problema in sub-task:

```
Invece di:
"Calcola ROI considerando costi, revenue, tasse e inflation"

Fai:
1. "Calcola revenue totale: [dati]"
2. "Calcola costi totali: [dati]"
3. "Calcola profit: revenue - costi"
4. "Applica tasse 22% su profit"
5. "Aggiusta per inflation 3%"
6. "Calcola ROI finale: profit netto / investimento"
```

Ogni step è semplice → LLM eccelle.

---

✅ **3. Verifica Intermedia**

Chiedi a LLM di auto-verificare:

```
"[Calcolo multi-step]

Dopo ogni passaggio, verifica:
- Il calcolo è corretto?
- Ho usato i dati giusti?
- Il risultato ha senso logicamente?

Se trovi errore, ricomincia da quel passaggio."
```

---

✅ **4. Usa Tool/Calculator per Math**

Per calcoli complessi:

```
Invece di far calcolare a LLM:
"Calcola NPV di cash flow: -100K, +30K/anno per 5 anni, discount 8%"

Usa:
- Excel/Sheets per calcolo
- Python code interpreter (ChatGPT Advanced Data Analysis)
- Calculator plugin

LLM orchestra, tool esegue math preciso.
```

---

#### Quando Preoccuparsi

🚨 **Alta Probabilità Errore Multi-Step**:
- Calcoli finanziari complessi (>3 passaggi)
- Logica condizionale annidata ("se A allora B, ma se C...")
- Dependency chains lunghe
- Ottimizzazione combinatoria

✅ **LLM Gestisce Bene**:
- Singoli calcoli semplici
- Logica lineare (A→B→C, max 3 step)
- Pattern recognition su dati strutturati

**Regola Pratica**: Se **tu** devi pensarci 30+ secondi, LLM rischia di sbagliare senza aiuto (CoT, breakdown).

---

## 💡 Pattern Recognition: Dove LLM Eccelle

Nonostante i limiti, LLM è **eccellente** in:

### ✅ 1. Pattern Linguistici

```
Task: "Trasforma in professionale: 'hey boss, il progetto è ok'"

LLM: "Gentile [Nome],

Il progetto procede secondo i piani.
Stato: Green.
..."
```

**Perché funziona**: Ha visto milioni di esempi formali vs informali.

---

### ✅ 2. Riconoscimento Contesto

```
Prompt: "Ho una deadline stretta, team sottodimensionato,
         e scope in crescita."

LLM riconosce: → Progetto a rischio
Output: Suggerisce mitigation (re-prioritize, escalate, resource)
```

---

### ✅ 3. Struttura e Formattazione

```
Input: Blob di testo disorganizzato

LLM: Organizza in:
- Sezioni logiche
- Bullet points
- Priorità
- Action items
```

**Eccellente per**: documenti, report, email, requirements.

---

### ✅ 4. Analogie e Spiegazioni

```
Prompt: "Spiega API a non-tecnico"

LLM: "API è come un menù di ristorante.
      Tu (app) ordini dal menù (API),
      cucina (server) prepara,
      cameriere (API) porta il piatto (dati)."
```

Ottimo per comunicazione cross-functional.

---

## 🎯 Esempi Pratici per Ruolo

### PM: Risk Assessment

❌ **Prompt Debole**:
```
"Questo progetto è rischioso?"
```
→ Output generico, poco utile

✅ **Prompt Forte** (sfrutta pattern recognition):
```
Analizza rischi di questo progetto:
- Budget: 2M€, 60% speso, 40% timeline rimanente
- Team: 2 senior developer left last month
- Client: ha cambiato requirements 3 volte in 2 mesi

Per ogni rischio: likelihood (H/M/L), impact, mitigation.
```
→ Output strutturato, actionable

---

### Service Designer: User Feedback Patterns

✅ **Sfrutta pattern recognition**:
```
Analizza questi 10 feedback utenti e identifica pattern ricorrenti:

[Feedback 1-10 qui]

Output:
- Themes emergenti
- Frequency
- Severity
- Quick wins vs long-term
```

LLM eccelle nel trovare pattern in dati qualitativi!

---

### Funzionale: Requirements Consistency Check

✅ **Sfrutta logical checking** (con vincoli):
```
Questi requirements sono consistenti? Identifica contraddizioni:

REQ-1: "Sistema deve supportare 10K utenti simultanei"
REQ-2: "Database: MySQL su server single-core"
REQ-3: "Budget infrastruttura: €500/mese"

Analizza step-by-step se sono compatibili.
```

Forcing "step-by-step" migliora reasoning.

---

## ✏️ Esercizio Pratico: Testare i Limiti

**Obiettivo**: Vedere dove LLM fallisce per capire come usarlo meglio.

### Task 1: Logica Basica

Prova questi prompt con Claude/ChatGPT:

1. "Se tutti i PM sono manager, e Maria è PM, Maria è manager?"
   - ✅ Dovrebbe dire SÌ (logica semplice)

2. "Ho 5 meeting da 1 ora. Quanto tempo mi serve se faccio 2 in parallelo?"
   - ❓ Potrebbe confondersi (logica multi-step)

3. "Cliente dice progetto va bene MA fa domande aggressive. Quale è il vero sentiment?"
   - ✅ Dovrebbe riconoscere contraddizione (pattern recognition)

---

### Task 2: Test Creatività vs Precisione

**Con Temperature Bassa (0.1)**:
```
Genera 3 titoli per presentazione progetto
```
→ Output ripetibili, sicuri, poco creativi

**Con Temperature Alta (0.9)**:
```
Genera 3 titoli per presentazione progetto
```
→ Output vari, creativi, a volte strani

**Lezione**: Scegli temperature in base al task!

---

<details>
<summary>👉 Clicca per Soluzioni Esercizio</summary>

**Task 1 - Risultati Attesi**:

1. **Logica semplice**: ✅ LLM risolve correttamente (pattern "se A→B e X è A, allora X è B")

2. **Meeting paralleli**: ❓ Potrebbe dire "5 ore" (sbagliato) invece di "3 ore" (2 in parallelo + 3 sequenziali).
   - Fix: "Think step-by-step: quali meeting posso fare in parallelo?"

3. **Sentiment contraddittorio**: ✅ LLM riconosce bene ("superficie positivo, sentiment sottostante negativo/preoccupato")

**Task 2 - Temperature**:
- **Bassa**: "Project Status Update", "Q2 Results Presentation", "Milestone Review"
- **Alta**: "🚀 Defying Deadlines: Our Journey to Success", "Plot Twist: We Actually Delivered", "The Good, The Bad, The Deployed"

**Quando usare**:
- Bassa (0.1-0.3): Analisi, documenti formali, precisione critica
- Media (0.5-0.7): Uso generale bilanciato
- Alta (0.8-1.0): Brainstorming, creatività, marketing copy

</details>

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Next Token Prediction**:
- LLM genera testo token-by-token
- Calcola probabilità statistica, non "pensa"
- Temperature controlla casualità/creatività

**Attention Mechanism**:
- Permette LLM di "focalizzarsi" su parti rilevanti del testo
- Essenziale per coerenza in conversazioni lunghe
- Collega riferimenti ("lei" → "Maria")

**Limiti**:
- ❌ Non ha vera comprensione o modello del mondo
- ❌ Può fare errori logici banali
- ❌ Ragionamento multi-step debole (senza aiuto)
- ✅ MA eccelle in pattern recognition

**Best Practices**:
- Usa Chain-of-Thought per ragionamento complesso
- Fornisci contesto esplicito
- Verifica output su task logici critici
- Sfrutta punti di forza: pattern, struttura, linguaggio

**Regola d'Oro**:
- LLM = assistente intelligente, non esperto infallibile
- Sempre fact-check su informazioni critiche
- Combina LLM + human judgment per risultati ottimali

:::

---

## 🔗 Risorse Aggiuntive

**Approfondimenti**:
- 📖 [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - Paper originale Transformer (tecnico)
- 📖 [Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) - Spiegazione visiva
- 📖 [Chain-of-Thought Prompting](../prompt-engineering-teoria/tecniche-avanzate) - Migliorare reasoning

**Interactive**:
- 🔧 [Talk to Transformer](https://talktotransformer.com/) - Vedi token generation in real-time
- 🔧 [LLM Visualization](https://bbycroft.net/llm) - Visualizza come LLM processa testo

---

## ➡️ Prossimi Passi

Ora che comprendi come LLM "ragiona":

1. **Sperimenta**: Prova l'esercizio sui limiti. Cosa scopri?
2. **Applica**: Usa temperature diverse per task diversi (formale vs creativo)
3. **Continua**: [Contesto e Context Window](contesto) - Gestire la memoria

---

:::info 💬 Discussione
**Domande da riflettere**:
- Hai mai notato LLM fare errori logici nel tuo lavoro?
- Come potresti riformulare prompt per mitigare questi limiti?
- Quali task del tuo ruolo si adattano bene al pattern recognition di LLM?
:::
