---
title: Concetti Essenziali
description: Padroneggia i concetti chiave per uso professionale degli LLM - temperature, hallucinations, limiti
sidebar_position: 6
tags: [llm-foundations, temperature, hallucinations, fine-tuning, limiti]
---

# Concetti Essenziali

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Comprendere e applicare il concetto di temperature (creatività vs precisione)
- [ ] Riconoscere hallucinations e applicare strategie di mitigazione
- [ ] Distinguere fine-tuning da prompt engineering e sapere quando usarli
- [ ] Conoscere knowledge cutoff e altre limitazioni pratiche

---

## 🌡️ Temperature: Creatività vs Precisione

### Cos'è Temperature

**Definizione**: Parametro che controlla la **casualità** (randomness) dell'output LLM.

- **Range**: Tipicamente 0.0 a 1.0 (alcuni modelli fino a 2.0)
- **Default**: ~0.7 nella maggior parte dei modelli

:::tip 💡 Analogia: Termostato della Creatività
- **Temperature Bassa (0.1)** = Output "freddo", deterministico, sicuro
- **Temperature Alta (0.9)** = Output "caldo", creativo, vario
:::

---

### Come Funziona

Ricordi next token prediction?

```
Frase: "Il gatto è seduto sul..."

Probabilità calcolate:
- "tappeto" → 45%
- "divano" → 30%
- "tavolo" → 15%
- "tetto" → 8%
- altro → 2%
```

**Con Temperature Diversa**:

**Temperature = 0.1** (Bassa - Deterministic):
- Sceglie **quasi sempre** token con massima probabilità
- "tappeto" → 99% delle volte
- Output ripetibile, prevedibile

**Temperature = 0.7** (Media - Balanced):
- Sceglie in base a probabilità, con varietà
- "tappeto" → ~50%, "divano" → ~35%, "tavolo" → ~15%
- Balance tra coerenza e creatività

**Temperature = 1.0** (Alta - Creative):
- Distribuisce scelta più uniformemente
- Anche token meno probabili vengono scelti
- Output vario, a volte sorprendente

---

### Temperature Bassa (0.0 - 0.3)

**Caratteristiche**:
- ✅ Output ripetibile (stesso input → stesso output)
- ✅ Preciso, aderente a fatti
- ✅ Conservativo, evita rischi
- ❌ Poco creativo, prevedibile

**Usa Quando**:
- 📊 **Analisi dati**: Serve precisione
- 📄 **Documentazione tecnica**: No variazioni
- 🔢 **Calcoli e logic**: Accuratezza critica
- 📋 **Report formali**: Tone consistente

**Esempio PM**:

```
Temperature: 0.1

Prompt: "Calcola effort rimanente: 20 story points totali, 12 completati"

Output: "Effort rimanente: 8 story points.
Percentuale completamento: 60%.
Se velocity media è 4 SP/sprint, servono 2 sprint per completare."
```
→ Preciso, fattuale, no variazioni

---

### Temperature Media (0.5 - 0.7)

**Caratteristiche**:
- ✅ Balance creatività/precisione
- ✅ Output naturale, conversazionale
- ✅ Varia leggermente ma coerente
- ✅ Default per maggior parte task

**Usa Quando**:
- 💬 **Conversazioni generali**
- ✍️ **Scrittura business standard** (email, report)
- 🎯 **Task balanced** (non serve estrema precisione o creatività)

**Esempio Service Designer**:

```
Temperature: 0.6

Prompt: "Descrivi UX best practice per onboarding mobile"

Output: "Best practices per mobile onboarding:
1. Progressive disclosure - mostra info gradualmente
2. Skip option - permetti utenti esperti di saltare
3. Value-first - spiega benefici prima di chiedere permessi
4. ..."
```
→ Informativo ma non robotico

---

### Temperature Alta (0.8 - 1.0+)

**Caratteristiche**:
- ✅ Molto creativo, originale
- ✅ Output vari (stessa query → risultati diversi)
- ✅ Esplora opzioni inaspettate
- ❌ A volte incoerente o off-topic
- ❌ Può "inventare" più facilmente

**Usa Quando**:
- 💡 **Brainstorming**: Vuoi idee diverse
- 🎨 **Content creativo**: Marketing, copywriting
- 🔀 **Esplorare opzioni**: Alternative non convenzionali
- ✨ **Naming, titoli**: Originalità richiesta

**Esempio PMO - Brainstorming**:

```
Temperature: 0.9

Prompt: "Genera 5 nomi creativi per programma transformation aziendale"

Output (varied ogni volta):
Run 1: "Phoenix Rising", "Quantum Leap", "Catalyst 2025", ...
Run 2: "Metamorphosis", "New Horizons", "Ignition", ...
Run 3: "Evolution Engine", "Breakthrough", "Synergy Force", ...
```
→ Ogni run produce idee diverse e creative

---

### Quando NON Puoi Controllare Temperature

**Nota Importante**: Molti tool consumer **non espongono** temperature:

- ❌ ChatGPT web (subscription): usa default (~0.7)
- ❌ Claude web: usa default (~0.7)
- ✅ OpenAI API: controllo completo
- ✅ Anthropic API: controllo completo
- ✅ Google AI Studio: controllo temperature disponibile

**Se non puoi cambiare temperature**: Usa prompt engineering per influenzare creatività

```
Per output più "freddo" (temperature bassa simulata):
"Rispondi in modo preciso e fattuale, evitando speculazioni."

Per output più "caldo" (temperature alta simulata):
"Genera idee creative e originali, anche inusuali."
```

---

## 🎭 Hallucinations: Quando LLM "Inventa"

### Cos'è un'Hallucination

**Definizione**: Quando LLM genera informazione **plausibile ma falsa**, presentandola con confidenza.

:::warning ⚠️ Rischio Principale degli LLM
LLM **non sa quando non sa**. Può inventare fatti, citazioni, statistiche e sembrar credibile.
:::

---

### Tipi di Hallucinations

**1. Fatti Inventati**

```
❌ Prompt: "Quando è stato fondato Microsoft?"

LLM: "Microsoft è stata fondata nel 1976 da Bill Gates e Steve Jobs"

Realtà: 1975, Bill Gates e Paul Allen (non Steve Jobs!)
```

**2. Citazioni False**

```
❌ Prompt: "Citazione famosa di Steve Jobs sulla creatività"

LLM: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something." - Steve Jobs

Realtà: Potrebbe sembrare plausibile, ma verificare sempre fonte!
```

**3. Statistiche Inventate**

```
❌ Prompt: "Quanti progetti IT falliscono ogni anno?"

LLM: "Secondo uno studio McKinsey del 2023, il 67.3% dei progetti IT superano il budget del 45% in media"

Realtà: Numeri troppo precisi senza fonte = probabile hallucination
```

**4. Riferimenti Inesistenti**

```
❌ Prompt: "Paper research su AI nel 2024"

LLM: "Vedi il paper 'Advances in Neural Architectures' di Smith et al., pubblicato su Nature AI, Vol 15, 2024"

Realtà: Paper potrebbe non esistere!
```

---

### Perché Avvengono le Allucinazioni

**Domanda Chiave**: Se LLM è così avanzato, perché "inventa" informazioni?

**Risposta**: È una conseguenza **inevitabile** di come funziona la next token prediction. Capiamo perché.

---

#### Causa 1: LLM È "Costretto" a Rispondere

**Meccanismo**:

```
LLM opera sempre in modalità "generazione":
1. Riceve prompt
2. DEVE generare next token
3. Non ha opzione "non so" integrata nel processo base
4. Sceglie token più probabile, anche se incerto
```

**Analogia**: Come se ti obbligassero a completare frase **anche quando non sai la risposta**:

```
Domanda: "La capitale del Freedonia è..."

Tu non conosci Freedonia (paese inventato!), ma sei OBBLIGATO a dire qualcosa:
→ Dirai qualcosa che "suona plausibile" → "...Freedon City" (inventato!)

LLM fa lo stesso.
```

**Esempio Pratico**:

```
Prompt: "Qual è la policy aziendale su remote work di Acme Corp?"

LLM non ha mai visto policy Acme (dati privati), ma:
- Pattern: ha visto 1000+ policy remote work
- Genera: "Acme Corp permette 2 giorni/settimana remote con approval manager"

→ Suona plausibile MA è inventato!
```

---

#### Causa 2: Pattern Matching Senza "Comprensione"

**LLM combina pattern visti in training, anche quando non applicabili.**

**Esempio Tecnico**:

```
Training data conteneva:
- "Microsoft fondata 1975 da Bill Gates e Paul Allen"
- "Apple fondata 1976 da Steve Jobs e Steve Wozniak"
- Pattern: "X fondata [anno] da [persona] e [persona]"

Domanda: "Quando è stata fondata Google?"

LLM vede pattern e può generare:
"Google fondata 1998 da Larry Page e Sergey Brin" ✅ CORRETTO (per fortuna)

MA su domanda simile per azienda oscura:
"Acme Inc fondata 1985 da John Smith e Robert Johnson" ❌ INVENTATO
→ Ha applicato pattern anche senza dati reali!
```

---

#### Causa 3: Filling the Gaps (Riempire Vuoti)

**Quando training data ha gaps, LLM "riempie" con plausibilità statistica.**

**Visualizzazione**:

```
Training Data Coverage:
┌─────────────────────────────────────────────┐
│ Topic          │ Coverage │ Hallucination Risk│
├─────────────────────────────────────────────┤
│ Storia famosa  │ ████████ │ BASSO (5%)        │
│ Tech mainstream│ ███████░ │ MEDIO (15%)       │
│ Aziende locali │ ██░░░░░░ │ ALTO (60%)        │
│ Dati proprietari│ ░░░░░░░░ │ ALTISSIMO (95%)  │
└─────────────────────────────────────────────┘

Più training data = meno hallucination
Meno training data = più invenzione
```

**Esempio PM**:

```
Prompt: "Qual è il processo di escalation per progetti in EY Italia?"

Training data LLM:
- ✅ Ha visto: processi escalation generici consulting
- ✅ Ha visto: struttura EY (pubblico)
- ❌ NON ha: procedure interne specifiche EY Italia (confidenziali)

Output: Combina generics + EY structure = hallucination plausibile:
"In EY Italia, escalation va da Manager → Senior Manager → Partner entro 48h"

→ Struttura corretta MA processo specifico inventato!
```

---

#### Causa 4: Confidence Senza Awareness

**LLM non ha "senso di incertezza"**: genera output con stessa confidenza sia su fatti certi che su invenzioni.

**Confronto Umano vs LLM**:

```
Umano:
"Qual è la capitale del Lesotho?"
→ "Hmm... non sono sicuro, forse... Maseru? Ma verifica!"

LLM:
"Qual è la capitale del Lesotho?"
→ "La capitale del Lesotho è Maseru." (stesso tone sicuro, anche se sbaglia)
```

**Problema**: LLM non dice "non so" o "non sono sicuro" a meno che non sia esplicitamente istruito.

**Esempio Service Designer**:

```
Prompt: "Che percentuale di utenti preferisce dark mode?"

LLM NON dice:
"Non ho dati specifici, dipende da app, target, contesto"

MA genera:
"Circa il 68% degli utenti preferisce dark mode" ← INVENTATO, ma suona autorevole!
```

---

#### Causa 5: "Memorizzazione Fuzzy"

**LLM "ricorda" pattern in modo fuzzy (sfocato), non preciso come un database.**

**Analogia**:

```
Database:
Query: "SELECT capital FROM countries WHERE name='France'"
→ Return: "Paris" (100% accurato)

LLM:
Query: "Capitale della Francia?"
→ Cerca in pattern fuzzy, trova "Paris" associato a "France"
→ Return: "Paris" ✅

MA su query meno comune:
Query: "Capitale del Burkina Faso?"
→ Pattern fuzzy: "Africa", "capitale", "suona francese"
→ Return: "Ouagadougou" ✅ (corretto)
O potrebbe dire: "Ouaga" o "Ouagadugu" ❌ (fuzzy memory error)
```

**Implicazione Pratica**: Dettagli specifici (numeri, date, nomi esatti) sono più soggetti a hallucination.

---

#### Sintesi: Il Ciclo dell'Hallucination

```
1. LLM riceve prompt su topic con data gap
   ↓
2. Attiva pattern matching su dati simili (anche se non identici)
   ↓
3. Combina pattern per generare risposta "plausibile"
   ↓
4. Non ha awareness di incertezza
   ↓
5. Genera output con tono sicuro
   ↓
6. → HALLUCINATION presentata come fatto
```

**Metafora Finale**: LLM è come uno studente che:
- Ha studiato tanto ma ha gaps
- All'esame è obbligato a rispondere TUTTO
- Non può dire "non lo so"
- Combina pezzi di conoscenza per improvvisare
- **Improvvisa con confidenza**

→ Questo è utile (creatività, inferenze), ma rischioso (invenzioni)

---

#### Perché Non È (Facilmente) Risolvibile

**Sfide tecniche**:

1. **Trade-off Intrinseco**:
   - Più creatività → più hallucination risk
   - Meno hallucination → meno utile (risposte generiche)

2. **Training Data Limitato**:
   - Internet ≠ tutta la conoscenza umana
   - Dati proprietari/privati assenti
   - Info recenti mancanti (knowledge cutoff)

3. **Architettura Probabilistica**:
   - LLM è DESIGNED per generare plausibilità
   - Non è designed per "verità assoluta"

**Progressi 2025**:
- ✅ RLHF (Reinforcement Learning from Human Feedback) riduce hallucinations
- ✅ Web search integration mitiga info recenti
- ✅ Citation/source forcing migliora accountability
- ❌ MA problema non eliminabile al 100%

**Conclusione**: Hallucinations sono **feature**, non bug. Vanno gestite, non eliminate.

---

### Quando Hallucinations Sono Più Probabili

**Fattori di Rischio**:

1. **Post Knowledge Cutoff**:
   - GPT-4: eventi dopo aprile 2023
   - Claude 3.5: eventi dopo inizio 2024
   - → Alto rischio hallucination

2. **Fatti Ultra-Specifici**:
   - Date precise, numeri esatti
   - Nomi, citazioni letterali
   - → LLM "improvvisa" dettagli

3. **Domini Ultra-Specializzati**:
   - Legge specifica di niche country
   - Medical procedures rare
   - → Training data limitato

4. **Quando "Pressato" a Rispondere**:
   - "Devi darmi una risposta"
   - → LLM inventa piuttosto che ammettere ignoranza

---

### Come Riconoscere Hallucinations

**Domanda Critica**: Come distinguere informazione vera da inventata quando LLM risponde con confidenza?

**Risposta**: Cerca **pattern specifici** di hallucination. Ecco red flags per ruolo.

---

#### 🚩 Red Flags Generali

**Segnali Universali di Possibile Hallucination**:

1. **Numeri Sospettosamente Precisi** senza fonte
   - "Il 73.2% dei PM..." (troppo specifico)
   - "Budget medio €487,350" (cifra esatta dubbia)

2. **Citazioni "Troppo Perfect"**
   - Frasi che suonano bene ma non verificabili
   - Attribuite a persone famose senza fonte

3. **Confidenza su Topic Oscuro**
   - LLM risponde con sicurezza su info ultra-specifica
   - Nessuna cautela o disclaimer

4. **Riferimenti Inverificabili**
   - Paper/documenti senza link
   - "Studio XYZ 2023" senza autore/pubblicazione

5. **Contraddizioni con Esperienza**
   - Output contrasta con tua conoscenza settore
   - Logica sembra "off"

---

#### 🔍 Esempi Pratici per PM

**Esempio 1: Fake Project Statistics**

```
❌ Output LLM:
"Secondo ricerca PMI 2024, il 67.3% dei progetti agile in Italia supera
 budget del 23% in media, con spike del 45% in Q2."

🚨 Red Flags:
- Percentuali troppo precise (67.3%, 23%, 45%)
- "Ricerca PMI 2024" vaga (quale ricerca specifica?)
- Dati granulari (Q2 spike) senza fonte primaria

✅ Verifica:
1. Cerca su Google: "PMI 2024 agile budget overrun Italy"
2. Vai su sito PMI: cerca report 2024
3. Non trovi? → Probabile hallucination

→ Reality check: PMI pubblica "Pulse of the Profession", verifica LÌ
```

---

**Esempio 2: Invented Methodology**

```
❌ Output LLM:
"Usa framework RAMP (Risk Assessment & Mitigation Protocol) sviluppato
 da McKinsey nel 2022 per progetti transformation."

🚨 Red Flags:
- Framework non riconosciuto (RAMP)
- Attribution vaga (McKinsey senza link)
- Anno recente (2022) vicino a cutoff

✅ Verifica:
1. Google: "McKinsey RAMP framework 2022"
2. Vai su McKinsey Insights: cerca "RAMP"
3. Non esiste? → Hallucination

→ LLM ha combinato concetti reali (risk, mitigation, McKinsey) in framework fake
```

---

**Esempio 3: False Benchmark Data**

```
❌ Output LLM:
"Velocity media team agile in consulting: 45 story points/sprint
 (Benchmark Accenture 2024)"

🚨 Red Flags:
- Numero troppo specifico (45 SP)
- Benchmark "Accenture 2024" non linkato
- Velocity varia MOLTO per contesto (non c'è "media universale")

✅ Reality Check:
- Velocity dipende da: team size, definition of done, complessità
- Accenture non pubblica benchmark velocity generici (confidenziale)
→ Hallucination quasi certa
```

---

#### 📊 Esempi Pratici per PMO

**Esempio 4: Fake Portfolio Metrics**

```
❌ Output LLM:
"Standard PMO maturity: 15-20 progetti attivi, con PMO ratio 1:8
 (1 PMO per 8 PM), secondo Gartner Portfolio Best Practices 2023"

🚨 Red Flags:
- Ratio "1:8" troppo specifico (varia per org!)
- "Gartner Portfolio Best Practices 2023" non verificato
- "Standard" non esiste (ogni org è diversa)

✅ Verifica:
1. Cerca Gartner research: "PMO ratio 2023"
2. Gartner pubblica Magic Quadrants, non "ratio standard"
→ Hallucination: ha combinato concept Gartner + numeri inventati
```

---

**Esempio 5: Invented Governance Process**

```
❌ Output LLM:
"In aziende Fortune 500, escalation va da PM → PMO → Steering → Board
 in max 5 giorni lavorativi (Processo EPSCAL, IEEE Standard 2024)"

🚨 Red Flags:
- "Processo EPSCAL" mai sentito
- "IEEE Standard 2024" su governance (IEEE fa tech standards!)
- Timeline "5 giorni" troppo specifica per essere universale

✅ Reality Check:
- IEEE fa standard TECNICI (802.11, etc.), non governance PMO
- Ogni azienda ha suo processo escalation
→ Hallucination combinando termini noti in modo errato
```

---

#### 🎨 Esempi Pratici per Service Designer

**Esempio 6: Fake UX Research Stats**

```
❌ Output LLM:
"User research mostra: 78% utenti abbandona app se onboarding > 90 secondi
 (Nielsen Norman Group, Mobile UX Report 2024)"

🚨 Red Flags:
- Percentuale precisa (78%)
- Timeline precisa (90 secondi)
- Report "2024" recente (vicino a cutoff)

✅ Verifica:
1. Vai su nngroup.com
2. Cerca: "Mobile UX Report 2024" o "90 seconds onboarding"
3. Non esiste report specifico? → Hallucination

→ LLM sa che NN/g è autorevole su UX, inventa report plausibile
```

---

**Esempio 7: Invented User Quotes**

```
❌ Output LLM:
"Intervista utente da tuo research 2024:
 'L'app è intuitiva ma vorrei più customization options'
 - Marco R., 34 anni, Milano"

🚨 Red Flags (SE tu non hai fatto quel research!):
- LLM "cita" dati che non esistono
- Nome generico (Marco R.)
- Quote plausibile ma inventata

✅ Reality Check:
- Tu NON hai fornito trascrizioni interviste nel prompt?
→ LLM ha INVENTATO quote basandosi su pattern UX comuni!

⚠️ Rischio: Usare quote fake in presentation = GRAVE!
```

---

**Esempio 8: False Design Patterns**

```
❌ Output LLM:
"Usa pattern 'Progressive Micro-Interactions' (Google Material Design 4.0)
 per migliorare engagement del 34%"

🚨 Red Flags:
- "Progressive Micro-Interactions" suona plausibile ma non esiste come pattern formale
- "Material Design 4.0" (attuale è 3.0)
- "34% engagement" senza studio citato

✅ Verifica:
- Google Material Design attualmente: versione 3
- Pattern "Progressive Micro-Interactions" non nei docs ufficiali
→ Hallucination: combina concetti veri (Material, micro-interactions) in modo errato
```

---

#### ⚙️ Esempi Pratici per Funzionale

**Esempio 9: Tech Specs Hallucination**

```
❌ Output LLM:
"API deve supportare HTTP/3.5 protocol con TLS 1.4 encryption,
 throughput minimo 50K requests/sec (Standard REST-API-2024)"

🚨 Red Flags:
- "HTTP/3.5" non esiste (attuale: HTTP/3, no 3.5!)
- "TLS 1.4" non esiste (attuale: TLS 1.3)
- "Standard REST-API-2024" inventato

✅ Reality Check:
- HTTP versions: 1.1, 2, 3 (no 3.5)
- TLS versions: 1.2, 1.3 (no 1.4)
→ LLM ha "inventato" versioni future plausibili ma inesistenti!

⚠️ Rischio: Spec fake → sviluppo impossibile
```

---

**Esempio 10: False Integration Requirements**

```
❌ Output LLM:
"Per integrare con SAP, usa SAP Integration Framework v8.2
 con connector S4/HANA-SYNC (license Enterprise tier richiesta)"

🚨 Red Flags:
- "v8.2" versione specifica mai verificata
- "S4/HANA-SYNC" naming non standard SAP
- Dettagli licensing senza fonte

✅ Verifica:
1. Controlla SAP docs ufficiali: version attuale?
2. "S4/HANA-SYNC" esiste come prodotto?
3. Licensing requirement corretto?

→ LLM conosce SAP è complesso, inventa dettagli plausibili ma fake
```

---

#### ✅ Checklist Rapida Anti-Hallucination

**Prima di Fidarti di Output LLM, Verifica**:

| Check | Domanda | Red Flag Se... |
|-------|---------|----------------|
| 1. **Fonte** | C'è fonte verificabile citata? | Fonte vaga o assente |
| 2. **Specificità** | Numeri/date troppo precisi? | 73.2%, date esatte senza fonte |
| 3. **Plausibilità** | Suona "troppo bello per essere vero"? | Perfect fit senza complessità |
| 4. **Verifica Esterna** | Trovi su Google/docs ufficiali? | Non trovato dopo ricerca |
| 5. **Coerenza** | Contrasta con tua esperienza? | Logica dubbia o impossibile |
| 6. **Confidenza LLM** | Eccessiva sicurezza su topic oscuro? | Nessun disclaimer/cautela |
| 7. **Recency** | Info post knowledge-cutoff? | Senza web search, probabile fake |
| 8. **Complessità** | Task richiederebbe expertise umana? | LLM risponde "facilmente" |

**Regola Pratica**:
- ✅ **Fidati**: Info generali, pattern noti, concetti consolidati
- ⚠️ **Verifica**: Numeri, date, citazioni, best practices specifiche
- 🚨 **NON FIDARTI mai senza verifica**: Dati aziendali, specifiche tecniche, info legali/mediche/finanziarie

---

#### 🛠️ Tool per Verificare

**Strategie Pratiche**:

1. **Google Search**: Prima verifica sempre
2. **Vai alla Fonte Primaria**: Paper, docs ufficiali, non summary LLM
3. **Chiedi a LLM di Citare**: "Fornisci link esatto a quella fonte"
4. **Cross-Check con Expert Umano**: Su decisioni critiche
5. **Usa Web Search LLM**: ChatGPT Plus, Claude web search, Gemini (nativo)

**Esempio Prompt Verifica**:
```
"Hai citato [X]. Per favore:
1. Fornisci link URL esatto alla fonte
2. Se non hai URL verificabile, dichiara esplicitamente: 'Non ho fonte verificabile'
3. Non inventare link"
```

→ Se LLM non fornisce link valido: hallucination probabile

---

### Come Mitigare Hallucinations

✅ **Strategia 1: Chiedi Fonti Esplicitamente**

```
❌ Weak: "Quali sono le statistiche sul project failure?"

✅ Strong: "Quali sono le statistiche sul project failure?
           Cita SOLO fonti verificabili (autore, anno, pubblicazione).
           Se non hai fonte verificabile, dillo esplicitamente."
```

---

✅ **Strategia 2: "Se Non Sai, Dillo"**

```
Prompt: "Analizza questi dati. Se non hai informazioni sufficienti per
        rispondere con certezza, dichiara esplicitamente 'non ho dati
        sufficienti per...' invece di speculare."
```

---

✅ **Strategia 3: Fornisci Documenti Accurati**

```
❌ Risky: "Quali sono i KPI del nostro progetto?"
          → LLM inventa se non sa

✅ Safe: Upload project charter

"Basandoti SOLO su questo documento, elenca i KPI del progetto.
Se un KPI non è menzionato nel documento, non includerlo."
```

---

✅ **Strategia 4: Fact-Check Critico**

Per informazioni critiche:
- ✅ Verifica con fonte primaria
- ✅ Cross-check con altre fonti
- ✅ Usa web search per info recenti
- ✅ Human review su decisioni importanti

**Regola**: **Mai fidarsi ciecamente** su:
- Fatti medici, legali, finanziari
- Statistiche senza fonte
- Decisioni con impatto alto

---

✅ **Strategia 5: Abilita Web Search**

Per informazioni post-cutoff o recenti:
- ChatGPT Plus: Abilita "Browse with Bing"
- Claude: Web search (beta feature)
- Gemini: Web search integrato di default

→ Riduce hallucination su eventi recenti

---

## 🔧 Fine-Tuning vs Prompt Engineering

### Fine-Tuning

**Cos'è**: Ri-addestrare modello esistente su dataset specifico

**Come Funziona**:
1. Parti da modello base (GPT-4, Claude)
2. Aggiungi training con tuoi dati
3. Modello "impara" pattern specifici
4. Output nuovo modello customizzato

**Pro**:
- ✅ Performance ottimale per task ultra-specifico
- ✅ Può imparare terminologia/style aziendale unico
- ✅ Efficiente per volumi enormi di task ripetitivo

**Contro**:
- ❌ Costoso ($$$) - richiede migliaia di esempi
- ❌ Complesso - serve expertise tecnico
- ❌ Tempo - settimane per preparazione + training
- ❌ Manutenzione - devi aggiornare modello quando cambia

**Quando Serve**:
- Hai 10,000+ esempi di task identico
- Performance critica su task specifico
- Budget significativo (€10K+)
- Team tecnico dedicato

---

### Prompt Engineering

**Cos'è**: Ottimizzare **input** al modello esistente (no modifica modello)

**Come Funziona**:
1. Scrivi prompt efficace
2. Testa output
3. Itera prompt
4. Usa su modello standard (GPT, Claude)

**Pro**:
- ✅ Immediato - risultati in minuti
- ✅ Flessibile - cambi prompt quando serve
- ✅ No costi extra (oltre subscription/API)
- ✅ No expertise tecnico richiesto

**Contro**:
- ❌ Limiti di ciò che prompt può ottenere
- ❌ Ogni richiesta "paga" token per prompt lungo
- ❌ Meno preciso di fine-tuning su task ultra-specifico

**Quando Basta** (99% dei casi per business users):
- Task vari (non ultra-ripetitivo identico)
- Budget limitato
- Serve flessibilità
- No team ML/AI dedicato

---

### Decision Framework

```
Hai budget €50K+ e team ML?
├─ SÌ → Considera fine-tuning (se task giustifica)
└─ NO → ↓

Hai 10,000+ esempi di task identico?
├─ SÌ → Valuta fine-tuning (ROI analysis)
└─ NO → ↓

Task performance critico per business?
├─ SÌ → Valuta fine-tuning vs prompt engineering avanzato
└─ NO → PROMPT ENGINEERING (start here sempre!)
```

:::tip 💡 Regola Pratica
**Inizia SEMPRE con prompt engineering**.

Se dopo aver ottimizzato prompt ottieni:
- &lt;80% accuracy su task critico
- E hai volume enorme (10K+ esempi)
- E budget disponibile

→ Allora valuta fine-tuning

Per 99% business users: prompt engineering è sufficiente.
:::

---

## 📅 Knowledge Cutoff e Altre Limitazioni

### Knowledge Cutoff

**Cos'è**: Data limite dei dati di training

| Modello | Knowledge Cutoff |
|---------|------------------|
| GPT-5 | Settembre 2025 |
| Claude Sonnet 4 | Agosto 2025 |
| Gemini 2.5 Pro | Marzo 2025 (web search nativo compensa) |

**Implicazione**:

```
✅ Prompt: "Cosa è successo nella Prima Guerra Mondiale?"
   → LLM risponde accuratamente (ben coperto in training)

⚠️ Prompt: "Chi ha vinto elezioni Italia novembre 2025?"
   → GPT-5 (cutoff Set 2025) potrebbe NON SAPERE
   → Usa web search per eventi recentissimi!
```

**Soluzioni**:
1. **Web Search**: Abilita browsing (ChatGPT Plus, Claude, Gemini)
2. **Fornisci Documenti**: Upload articoli/report recenti
3. **Disclaimer**: "Info su eventi pre-[cutoff date] solo"

---

### Altre Limitazioni Importanti

**1. No Esperienza Reale**

LLM non ha:
- Esperienza fisica del mondo
- Emozioni genuine
- Generalmente no memoria tra sessioni

**Esempio**:
```
❌ "Quanto è pesante un laptop da 15 pollici?"

LLM: "Circa 2-3 kg" (dato statistico)

Non ha MAI sollevato un laptop!
```

---

**2. Bias dai Dati di Training**

LLM può riflettere bias nei dati:
- Bias culturali (training mostly inglese/occidentale)
- Bias professionali
- Stereotipi

**Mitigazione**: Review critico, diversità input, awareness

---

**3. No Accesso Real-Time (senza tool)**

LLM base non può:
- ❌ Controllare email
- ❌ Accedere database aziendale
- ❌ Eseguire codice (senza environment)

**Eccezione**: Con tool/plugin/MCP connectors (Giorno 2!)

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Temperature**:
- Controlla creatività vs precisione (0.0 = deterministico, 1.0 = creativo)
- Bassa (0.1-0.3): analisi, docs, precisione
- Media (0.5-0.7): balanced, default
- Alta (0.8-1.0): brainstorming, creatività
- Molti tool consumer non espongono (usa prompt per influenzare)

**Hallucinations**:
- LLM può inventare fatti plausibili
- Più probabile su: info recenti, ultra-specifiche, post-cutoff
- Mitigazione: chiedi fonti, "se non sai dillo", fornisci documenti, fact-check critico
- **Mai fidarsi ciecamente** su info critiche (legal, medical, finance)

**Fine-Tuning vs Prompt Engineering**:
- Fine-tuning: custom model, costoso, expertise richiesta
- Prompt Engineering: ottimizza input, immediato, flessibile
- **99% casi**: prompt engineering è sufficiente
- Start sempre con prompt engineering

**Knowledge Cutoff**:
- GPT-5: settembre 2025, Claude Sonnet 4: agosto 2025, Gemini 2.5: marzo 2025
- Info post-cutoff o recentissime: usa web search o fornisci documenti
- Sempre verifica date su info time-sensitive

**Limitazioni**:
- No esperienza reale, no emozioni, bias possibili
- No accesso real-time (senza tool)
- No memoria permanente tra sessioni (di default)

**Regola d'Oro**:
- LLM = assistente potente, non oracolo infallibile
- Verifica sempre fatti critici
- Combina LLM + human judgment
- Awareness di limiti = uso efficace

:::

---

## 🔗 Risorse Aggiuntive

**Approfondimenti**:
- 📖 [Hallucinations Research](https://www.anthropic.com/index/reducing-hallucinations) - Anthropic research
- 📖 [Temperature Explained](https://platform.openai.com/docs/guides/text-generation) - OpenAI guide
- 📖 [Fine-Tuning Guide](https://platform.openai.com/docs/guides/fine-tuning) - Quando e come

**Best Practices**:
- 📖 [Fact-Checking LLM Output](https://www.anthropic.com/index/fact-checking) - Strategie
- 📖 [Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering) - Anthropic

---

## ➡️ Prossimi Passi

🎉 **Congratulazioni!** Hai completato il Modulo 1: LLM Foundations

Ora hai solide basi su:
- ✅ Token e tokenizzazione
- ✅ Architettura LLM (training vs inference)
- ✅ Next token prediction e attention
- ✅ Context window e gestione
- ✅ Multimodalità e vision
- ✅ Temperature, hallucinations, limiti

**Cosa Fare Ora**:

1. **Review**: Ripassa Key Takeaways di ogni sezione
2. **Pratica**: Applica concetti a un tuo task reale
3. **Break**: Pausa 10 minuti ☕
4. **Continua**: [Modulo 2 - Prompt Engineering Teoria](../prompt-engineering-teoria) - Tecniche avanzate!

---

:::info 💬 Riflessione Finale
**Prima di procedere, chiediti**:
- Quali 3 concetti sono più rilevanti per il tuo lavoro?
- Quale limitation degli LLM ti preoccupa di più? Come mitigarla?
- Quale capability (vision, context, etc.) vuoi esplorare subito?

Porta queste riflessioni nel Modulo 2, dove imparerai a sfruttare tutto questo con prompt engineering avanzato!
:::
