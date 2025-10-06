# Prompt di Analisi Questionari Pre-Corso

> 🎯 **Scopo**: Analizzare le risposte aggregate dai questionari per ottenere insights actionable e raccomandazioni di fine-tuning
>
> 📊 **Input**: CSV esportato da Google Forms
>
> ⏱️ **Tempo analisi**: ~3-5 minuti con Claude

---

## 🚀 Come Usare Questo Prompt

### Step 1: Esporta CSV da Google Forms
1. Apri il Google Form con le risposte
2. Click su **"Risposte"** → Icona foglio di calcolo verde → "Crea foglio di lavoro"
3. Nel Google Sheet creato: **File → Scarica → Valori separati da virgola (.csv)**
4. Salva il file come `questionari-giorno1.csv`

### Step 2: Carica su Claude
1. Vai su [claude.ai](https://claude.ai)
2. Inizia nuova conversazione
3. **Allega il CSV** (clip 📎 → Upload file)
4. **Copia-incolla il prompt qui sotto**
5. Invia

### Step 3: Analizza Risultati
Claude genererà un report strutturato con:
- Dashboard quantitativo
- Gap analysis
- Raccomandazioni specifiche per Modulo 1, 2, 3
- Profili partecipanti
- Red flags

---

## 📋 PROMPT DA USARE CON CLAUDE

```
[ROLE]
Sei un Learning Experience Designer esperto in workshops su AI/LLM per professionisti non-tecnici.
Hai esperienza nell'analizzare pre-assessment e adattare contenuti formativi in base al livello dei partecipanti.

[ACTION]
Analizza i dati del questionario pre-corso allegato (CSV) e genera un report completo
per permettermi di personalizzare i contenuti del Giorno 1 del workshop "LLM from 0 to Hero 🦸🏻‍♂️".

[CONTEXT]
Workshop Details:
- Target: 8 partecipanti - PM, PMO, Service Designer, Functional/BA
- Background: Non-STEM, esperienza base ChatGPT
- Giorno 1 Contenuti:
  * Modulo 1 (10:15-11:30): LLM Foundations (Token, Context, Temperature, Hallucinations, Multimodalità)
  * Modulo 2 (11:30-13:30): Prompt Engineering (RACE, Chain-of-Thought, Few-Shot, Role-Based, Meta-Prompting, Debugging)
  * Modulo 3 (13:30-14:45): Esercizi Pratici (Ottimizzazione prompt, Template personalizzati)
- Obiettivo: Bilanciare teoria (40%) e pratica (60%), partenza da livello reale della classe

[EXPECTATIONS]
Genera report strutturato in 6 sezioni:

---

## SEZIONE 1: DASHBOARD QUANTITATIVO

Tabella riassuntiva con metriche chiave:

| Metrica | Valore | Note |
|---------|--------|------|
| N. Partecipanti | [N] | [Breakdown ruoli: X PM, Y PMO, Z Service Design, W Functional] |
| Background STEM | [%] | [Implicazioni per profondità tecnica] |
| Frequenza Uso LLM | [Media: Occasionale/Regolare/etc] | [Range: da X a Y] |
| Strumento Principale | [ChatGPT X%, Claude Y%, etc.] | [Considerazioni per demo/esempi] |
| Livello Auto-Valutato | [Media: Principiante/Intermedio/Avanzato] | [Distribuzione: X beginners, Y intermediate, Z advanced] |
| Confidence Task Critici | [Media scala 1-5: X.X] | [Dispersione: da X a Y] |

**Sintesi**: [2-3 frasi che descrivono il profilo generale della classe]

---

## SEZIONE 2: GAP ANALYSIS - Conoscenze Fondamentali

Analisi delle risposte alle domande C1-C6 (scala 1-5):

| Concetto | Media | Distribuzione | Priorità Approfondimento |
|----------|-------|---------------|--------------------------|
| Token | [X.X] | [N partecipanti: 1-2, M: 3, K: 4-5] | [Alta/Media/Bassa] |
| Context Window | [X.X] | [...] | [...] |
| Temperature | [X.X] | [...] | [...] |
| Hallucinations | [X.X] | [...] | [...] |
| Training vs Inference | [X.X] | [...] | [...] |
| Multimodalità | [X.X] | [...] | [...] |

**Top 3 Gap da Colmare** (score <3.0):
1. [Concetto]: [Dettaglio] → **Raccomandazione**: [Es: "Rallentare spiegazione, aggiungere 2-3 esempi concreti, demo live"]
2. [...]
3. [...]

**Concepts Già Familiari** (score >3.5):
- [Elenco] → **Raccomandazione**: [Es: "Sintesi rapida, focus su applicazioni pratiche"]

---

## SEZIONE 3: PROMPT ENGINEERING - Livello Attuale

Analisi domande D1-D4:

**Familiarità con Prompt Engineering**:
- Mai sentito: [N%]
- Sentito ma non applicato: [N%]
- Applica tecniche base: [N%]
- Usa framework specifici: [N%]

**Uso Framework Strutturati** (media scala 1-5): [X.X]
→ **Implicazione**: [Es: "Classe principalmente beginner su framework, necessario approccio step-by-step con molti esempi"]

**Comportamento Iterativo** (ottimizzazione prompt):
- Accetta primo risultato: [N%]
- Itera raramente: [N%]
- Itera regolarmente (3+ tentativi): [N%]
→ **Implicazione**: [...]

**Template Riutilizzabili**:
- Nessun template: [N%]
- 1-2 template: [N%]
- Libreria estesa (5+): [N%]
→ **Implicazione**: [Es: "Enfatizzare benefici template, dedicare tempo extra Esercizio 2 (creazione template)"]

**Analisi Esempi Prompt Condivisi** (domanda B4):
[Analizza 3-5 esempi rappresentativi forniti dai partecipanti]

Pattern identificati:
1. [Pattern comune: es: "Prompt molto brevi, no contesto"]
2. [Pattern: es: "Uso imperativo diretto, no role-based"]
3. [Pattern: es: "Output format mai specificato"]

Livello medio stimato: [Beginner/Intermediate/Advanced] + rationale

---

## SEZIONE 4: USE CASES E PRIORITÀ

Analisi domande E1-E3:

**Top Use Cases Richiesti** (dalla domanda E1, aggregati):
1. [Use case più citato: es: "Status report automatizzati"] → [N partecipanti]
2. [...]
3. [...]
4. [...]
5. [...]

**Breakdown per Ruolo**:
- **PM**: [Use cases specifici citati]
- **PMO**: [...]
- **Service Design**: [...]
- **Functional**: [...]

**Ostacoli Principali** (domanda E2):
1. [Ostacolo più citato]: [N%]
2. [...]: [N%]
3. [...]: [N%]

→ **Raccomandazione**: [Es: "Focalizzare Modulo 2 su scrittura prompt concreti, evitare teoria eccessiva"]

**Task Specifici da Coprire** (domanda E3):
[Elenco task/documenti menzionati che possono diventare esempi pratici durante workshop]

---

## SEZIONE 5: PROFILI PARTECIPANTI & CLUSTERING

Cluster i partecipanti in 3-4 profili tipo:

### Profilo A: [Nome Descrittivo - es: "Curious Beginner"]
- **N. Partecipanti**: [X]
- **Caratteristiche**:
  - Frequenza uso: [...]
  - Familiarità concetti: [Media: X.X]
  - Prompt engineering: [Livello]
  - Confidence: [Scala 1-5]
- **Needs**:
  - [Bisogno 1: es: "Fondamentali solidi, passo-passo"]
  - [Bisogno 2: es: "Esempi concreti role-specific"]
- **Risk**: [Es: "Potrebbe sentirsi sopraffatto se ritmo troppo veloce"]
- **Strategy**: [Es: "Check-in frequenti, pair con Profilo B durante esercizi"]

### Profilo B: [Nome - es: "Regular User, No Structure"]
[Struttura identica]

### Profilo C: [Nome - es: "Advanced Experimenter"]
[Struttura identica]

### Profilo D (se presente): [Outlier - es: "Complete Newbie" o "Expert Hero"]
[Struttura identica]

---

## SEZIONE 6: RACCOMANDAZIONI FINE-TUNING

### 🎯 MODULO 1: LLM Foundations (10:15-11:30)

**Timing Consigliato** (75 min totali):
- Token: [X min] → [Normale 12 min / Rallentare a 18 min / Accelerare a 8 min] - Rationale: [...]
- Anatomia LLM: [X min] → [...]
- Ragionamento: [X min] → [...]
- Context Window: [X min] → [...]
- Multimodalità: [X min] → [...]
- Concetti Chiave: [X min] → [...]

**Contenuti da Enfatizzare**:
- ✅ [Concetto X]: [Perché - es: "Gap score 1.8, critico per capire Modulo 2"]
- ✅ [...]

**Contenuti da Sintetizzare** (già familiari):
- ⚡ [Concetto Y]: [Perché - es: "Score 4.2, sintesi rapida + focus applicazioni"]
- ⚡ [...]

**Demo/Esempi Specifici da Aggiungere**:
1. [Esempio concreto per use case citato: es: "Demo tokenizer su status report PM reale"]
2. [...]

---

### 🎯 MODULO 2: Prompt Engineering (11:30-13:30 con pausa)

**Timing Consigliato** (90 min netti):
- Anatomia Prompt: [X min] → [...]
- Framework RACE: [X min] → [...]
- Chain-of-Thought: [X min] → [...]
- Few-Shot: [X min] → [...]
- Role-Based: [X min] → [...]
- Meta-Prompting: [X min] → [...]
- Debugging: [X min] → [...]

**Focus Raccomandato**:
- 🔥 [Framework X]: [Rationale - es: "RACE: base per tutto, classe ha 0 framework - dedicare 25 min con hands-on"]
- 🔥 [...]

**Approccio Didattico**:
- [Raccomandazione: es: "Più esempi pratici che teoria (ratio 70/30), classe impara by doing"]
- [Es: "Usare prompt attuali condivisi (domanda B4) come before/after case study"]

**Template da Preparare Pre-Workshop**:
- [Use case 1 citato frequentemente]: [Es: "Template RACE per weekly status report - pronto per personalizzazione"]
- [...]

---

### 🎯 MODULO 3: Esercizi Pratici (13:30-14:45)

**Timing Consigliato** (75 min):
- Esercizio 1 (Ottimizzazione): [X min] → [...]
- Esercizio 2 (Template Personalizzati): [X min] → [...]
- Peer Review/Discussione: [X min] → [...]

**Adattamenti Esercizi**:
- Esercizio 1: [Es: "Usare prompt reali condivisi dai partecipanti invece di esempi generici"]
- Esercizio 2: [Es: "Focus su top 3 use case citati (status report, meeting notes, requirements)"]

**Gruppi Suggeriti** (se lavoro collaborativo):
- Gruppo 1: [Profilo A + Profilo B - rationale]
- Gruppo 2: [...]
- [Evitare: Profilo A isolato, rischia frustrazione]

**Deliverable da Enfatizzare**:
- [Es: "Ogni partecipante esce con min 2 template pronti per use case personali - questo risolve ostacolo #1 citato (scrivere prompt efficaci)"]

---

### 🎯 COMUNICAZIONI PRE-WORKSHOP

**Email Pre-Work Consigliata**:
Basandoti sui risultati, suggerisci di inviare 3-5 giorni prima:
- [Risorsa 1 da leggere: es: "Articolo 5 min su Token per colmare gap base"]
- [Risorsa 2: es: "Video 10 min Claude walkthrough per i 2 che non l'hanno mai usato"]
- [Reminder: es: "Portare 2 esempi task quotidiani + 1 prompt che usate già"]

---

### 🚩 RED FLAGS & AZIONI MITIGATION

Identifica situazioni da monitorare:

1. **[Red Flag - es: "Disparità livello estrema"]**:
   - Dettaglio: [Es: "1 partecipante esperto (score medio 4.5) vs 5 principianti assoluti (score <2.0)"]
   - Risk: [Es: "Esperto si annoia, beginners sopraffatti"]
   - Mitigation: [Es: "Assegnare all'esperto ruolo 'mentor' durante esercizi, preparare 2 esercizi bonus avanzati"]

2. **[Red Flag - es: "Nessuna familiarità con Claude"]**:
   - Dettaglio: [...]
   - Mitigation: [...]

3. **[Red Flag - es: "Aspettative non allineate"]**:
   - Dettaglio: [Da domanda F3 - es: "2 partecipanti si aspettano coding, ma workshop è no-code"]
   - Mitigation: [Es: "Email pre-workshop chiarire scope: focus business use, Giorno 3 solo introduzione Claude Code"]

---

### 💬 QUOTE SIGNIFICATIVE

[Seleziona 5-8 quote anonimizzate dalle risposte aperte che illuminano needs/aspettative]

**Su Aspettative** (domanda F3):
- "[Quote verbatim]" → [Insight: es: "Conferma bisogno pratica immediata"]
- "[...]"

**Su Ostacoli** (domanda E2, campo 'Altro'):
- "[...]"

**Prompt Attuali** (domanda B4):
- "[Esempio rappresentativo]" → [Livello: Beginner/Advanced]
- "[...]"

---

## 🎯 SUMMARY ESECUTIVO (3 Bullet Points)

1. **Profilo Classe**: [1 frase sintesi livello, background, needs dominanti]
2. **Key Adjustment**: [La modifica più importante da fare - es: "Rallentare Modulo 1 di 15 min, enfatizzare esempi pratici su framework RACE"]
3. **Success Metric**: [Come misurare se fine-tuning funziona - es: "Se 80%+ partecipanti creano 2+ template funzionanti in Esercizio 2"]

---

Fine del report.
```

---

## ✅ Checklist Post-Analisi

Dopo aver ricevuto il report da Claude:

- [ ] Letto summary esecutivo e raccomandazioni chiave
- [ ] Identificati i 3 gap più grandi da colmare
- [ ] Adattato timing Modulo 1, 2, 3 in base a raccomandazioni
- [ ] Preparati esempi extra per use case specifici citati
- [ ] Identificati partecipanti outlier (se presenti) con piano mitigation
- [ ] Preparata email pre-work (se consigliata)
- [ ] Aggiornate slide/demo in base a tool usati (ChatGPT vs Claude ratio)
- [ ] Creati template pre-popolati per Esercizio 2 basati su use case top 3

---

## 💡 Pro Tips

### Se Classe Molto Eterogenea
- Considera **track parallele** durante Modulo 3 (esercizi base vs advanced)
- Assegna partecipanti avanzati come **peer mentor** durante hands-on
- Prepara **bonus material** per chi finisce esercizi velocemente

### Se Classe Molto Beginner
- **Rallenta Modulo 1**: aggiungi +15 min con più demo interattive
- **Semplifica Modulo 2**: focus su RACE + Few-Shot, considera saltare Meta-Prompting (può essere confusing)
- **Più tempo Esercizio 2**: Creazione template è più critica, riduci Esercizio 1

### Se Classe Avanzata
- **Accelera Modulo 1**: sintesi concetti, più tempo Q&A su edge cases
- **Approfondisci Modulo 2**: aggiungi tecniche avanzate (prompt chaining, constrained generation)
- **Challenge Exercises**: usa casi reali complessi invece di esempi base

### Se Temi Specifici Emergono
- Crea **case study personalizzato** che integra use case citati da 3+ partecipanti
- Usa **prompt reali condivisi** (domanda B4) come esempi before/after durante Modulo 2
- Invita partecipanti a condividere schermo con loro task durante esercizi (learning by peers)

---

**🎯 Prossimo Step**: Applica raccomandazioni e prepara materiali personalizzati per il Giorno 1!
