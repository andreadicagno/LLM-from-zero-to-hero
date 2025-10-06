# Questionario Pre-Corso Giorno 1 - Content Reference

> 📚 **Scopo Documento**: Reference completo del questionario con rationale per ogni domanda
>
> 🎯 **Uso**: Backup testuale, comprensione design choices, base per future iterazioni

---

## 📊 Overview Questionario

- **Totale Domande**: 25 (17 obbligatorie, 8 opzionali)
- **Tempo Compilazione**: 15-20 minuti
- **Struttura**: 6 sezioni (A-F)
- **Obiettivo**: Valutare livello pre-corso per fine-tuning contenuti Giorno 1

---

## 🎯 Obiettivi di Analisi

Il questionario è progettato per rispondere a queste domande chiave:

1. **Profilo Partecipanti**: Chi sono? Ruoli, seniority, background?
2. **Esperienza LLM**: Quanto/come usano attualmente LLM?
3. **Gap Conoscenza**: Quali concetti fondamentali sono sconosciuti/deboli?
4. **Livello Prompt Engineering**: Quanto sono sofisticati nell'uso di prompt?
5. **Use Cases Prioritari**: Cosa vogliono imparare a fare concretamente?
6. **Auto-Percezione**: Come si valutano? Quali aspettative?

Rispondendo a queste domande, il formatore può:
- ✅ Adattare velocità/profondità di ogni modulo
- ✅ Preparare esempi specifici per ruoli presenti
- ✅ Identificare e colmare gap critici
- ✅ Allineare aspettative con contenuti reali
- ✅ Identificare outlier che necessitano attenzione speciale

---

## 📋 Sezioni e Rationale

### SEZIONE A: Il Tuo Profilo (5 domande, tutte obbligatorie)

**Obiettivo Sezione**: Comprendere chi sono i partecipanti per contestualizzare esempi e use case

---

#### A1. Nome e Cognome
**Tipo**: Risposta breve
**Obbligatoria**: ✅

**Rationale**:
- Identificazione per personalizzazione follow-up
- Permette di collegare risposte con persona specifica durante workshop
- Utile per grouping durante esercizi (es: pairing beginner con intermediate)

---

#### A2. Email
**Tipo**: Risposta breve
**Obbligatoria**: ✅

**Rationale**:
- Contatto per invio materiali pre-work personalizzati
- Invio summary post-workshop
- Backup identificazione (oltre a Google Forms email collection)

---

#### A3. Qual è il tuo ruolo principale?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: PM | PMO | Service Designer/UX | Functional/BA | Altro (specificare)

**Rationale**:
- **Critico**: Esempi e use case devono essere role-specific per rilevanza
- Permette di:
  - Preparare case study mirati (es: PM → status report, Service Design → research synthesis)
  - Bilanciare profondità tecnica (Functional può tollerare più tech details vs PM)
  - Clustering per esercizi di gruppo (mescolare ruoli per cross-pollination insights)
- Se breakdown mostra 6 PM + 2 PMO → enfatizzare project management use case

**Uso Analisi**:
- Conta distribuzione ruoli
- Identifica se gruppo omogeneo o eterogeneo
- Adatta esempi Modulo 1-3 di conseguenza

---

#### A4. Quanti anni di esperienza hai nel tuo ruolo attuale?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: 0-2 anni | 3-5 anni | 6-10 anni | Oltre 10 anni

**Rationale**:
- **Seniority influenza**:
  - Velocità apprendimento (senior = pattern recognition più veloce)
  - Complessità use case (senior gestiscono task più strategici)
  - Confidence nel sperimentare (senior più risk-tolerant)
- Esempio: Se classe è tutta senior (6+ anni) → può assorbire contenuti più densi, meno step-by-step

**Uso Analisi**:
- Calcola esperienza media
- Se molto junior (0-2 anni dominante) → rallentare, più hand-holding
- Se molto senior (10+ dominante) → accelerare teoria, focus su advanced techniques

---

#### A5. Il tuo background formativo è prevalentemente STEM?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: Sì STEM | No umanistico/economico/altro | Background misto

**Rationale**:
- **Background STEM**:
  - Maggiore comfort con concetti tecnici (architettura LLM, token, algoritmi)
  - Può tollerare più dettagli sul "come funziona" senza sentirsi sopraffatto
- **Background Non-STEM**:
  - Necessita analogie più accessibili, meno tecnicismi
  - Focus su "cosa fa" e "come usare" piuttosto che "come funziona internamente"
- Target workshop è non-STEM, ma se emergono molti STEM → può essere opportunità per più profondità

**Uso Analisi**:
- Se >70% non-STEM (atteso) → conferma approccio no-jargon, analogie business
- Se 30%+ STEM → può aggiungere "tech deep-dive" opzionali in appendice slide

---

### SEZIONE B: La Tua Esperienza con LLM (4 domande)

**Obiettivo Sezione**: Comprendere uso attuale, familiarità con strumenti, pattern di utilizzo

---

#### B1. Con quale frequenza usi attualmente strumenti LLM?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: Mai/quasi mai | Occasionalmente (1-3/mese) | Regolarmente (1-3/settimana) | Frequentemente (quasi tutti i giorni) | Costantemente (più volte/giorno)

**Rationale**:
- **Indicatore chiave livello pratico**:
  - "Mai" → necessita intro base, walkthrough UI Claude
  - "Costantemente" → già power user, cerca optimization
- Media classe determina se workshop parte da zero o assume baseline
- Dispersione indica eterogeneità (problematico se troppo ampia)

**Uso Analisi**:
- Calcola % per ogni categoria
- Se >60% "Mai/Occasionalmente" → classe beginner, rallentare Modulo 1
- Se >60% "Regolarmente/Frequentemente" → classe intermediate, accelerare teoria, più advanced techniques
- Red Flag: Se 2 "Mai" + 6 "Costantemente" → gestire eterogeneità con track parallele

---

#### B2. Quali strumenti LLM hai usato almeno una volta?
**Tipo**: Caselle controllo (selezione multipla)
**Obbligatoria**: ✅
**Opzioni**: ChatGPT | Claude | Gemini | Microsoft Copilot | Altri (specificare) | Nessuno

**Rationale**:
- **Familiarità con Claude** (focus workshop):
  - Se >50% non hanno mai usato Claude → necessita onboarding UI Giorno 1 inizio
  - Se tutti hanno usato ChatGPT ma non Claude → evidenziare differenze chiave
- Strumento dominante influenza frame of reference (es: ChatGPT users abituati a certo stile risposta)

**Uso Analisi**:
- % per ogni tool
- Claude familiarity: se <30% → aggiungi 10 min "Claude walkthrough" pre-Modulo 1
- Se Microsoft Copilot alto → alcuni hanno esposizione enterprise AI (policy, governance)

---

#### B3. Per quali attività usi principalmente gli LLM?
**Tipo**: Caselle controllo
**Obbligatoria**: ✅
**Opzioni**: Email/comunicazioni | Riassunti documenti | Brainstorming | Analisi dati | Documentazione | Troubleshooting | Imparare concetti | Coding | Altro | Non li uso ancora

**Rationale**:
- **Identifica pattern uso attuale**:
  - Aiuta capire se uso è superficial (email, riassunti) vs deep (analisi, coding)
  - Use case attuali diventano starting point per esempi avanzati
- Top 3 attività → devono essere coperte in Modulo 2-3 con tecniche avanzate

**Uso Analisi**:
- Ranking attività per frequenza
- "Documentazione" molto citato → enfatizzare template Esercizio 2
- "Brainstorming" alto → mostrare Chain-of-Thought per ideation strutturata
- "Coding" presente ma non dominante → tranquillizzare che Giorno 1 è no-code

---

#### B4. Condividi un esempio di prompt che usi tipicamente
**Tipo**: Paragrafo (testo lungo)
**Obbligatoria**: ❌ Opzionale

**Rationale**:
- **Domanda più preziosa per assessment livello**:
  - Vedere prompt reali rivela sofisticazione meglio di auto-valutazione
  - Esempi possono diventare "before/after" case study durante Modulo 2
- Pattern comuni identificabili:
  - Prompt "command" basic: "Riassumi questo" → beginner
  - Prompt con contesto: "Sei PM, analizza rischi considerando..." → intermediate
  - Prompt con framework: "Usando RACE, genera..." → advanced
- Opzionale per non intimidire (alcuni potrebbero sentirsi giudicati)

**Uso Analisi**:
- Analizza 5-8 esempi più rappresentativi
- Identifica pattern (lunghezza, struttura, specificità)
- Livello medio prompt → calibra aspettative Modulo 2
- Quote anonimizzate diventano esempi durante workshop (con permesso)

---

### SEZIONE C: Conoscenze Fondamentali LLM (6 domande)

**Obiettivo Sezione**: Misurare familiarità con concetti chiave che saranno coperti nel Modulo 1

**Scala Comune**: 1-5 (1=Mai sentito, 5=Esperto potrei spiegare ad altri)

**Rationale Scala**:
- Likert 1-5 permette analisi quantitativa (media, distribuzione)
- Identifica concetti completamente sconosciuti (score 1-2) vs familiari (4-5)
- Guida timing: concetti con media <2.5 necessitano più tempo

---

#### C1. Token (l'unità base di testo per gli LLM)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- **Concetto fondamentale critico**: tutto il resto si basa su comprensione token
- Se score basso → rallentare spiegazione, demo interattiva tokenizer
- Se score alto → sintesi veloce, focus su ottimizzazione pratica
- Token è spesso misconosciuto anche da regular users ChatGPT

**Uso Analisi**:
- Media classe su questo concetto
- Se <2.5 → dedicare 15-18 min invece di 10 min standard
- Preparare demo live con OpenAI tokenizer su esempi partecipanti

---

#### C2. Context Window (la "memoria di lavoro" dell'LLM)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- Essenziale per capire limiti e gestione conversazioni lunghe
- Influenza best practices (quando caricare file vs copiare testo, quando nuova chat)
- Molti users casuali non sanno che LLM ha "memoria limitata"

**Uso Analisi**:
- Se score basso + domanda B1 mostra uso frequente → opportunità "aha moment" (usano senza capire limiti)
- Se score alto → focus su strategie avanzate (Projects, chunking)

---

#### C3. Temperature (controllo creatività/casualità nelle risposte)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- Concetto meno critico per beginner (molti tool non espongono parameter)
- Utile per advanced users che vogliono controllo fine
- Score tipicamente più basso di altri (meno discusso online)

**Uso Analisi**:
- Se score molto basso (<2.0) → può essere skipped o sintesi rapida
- Se score moderato (2.5-3.5) → spiegazione con esempi (quando usare low vs high)

---

#### C4. Hallucinations (quando LLM "inventa" informazioni)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- **Critico per uso professionale sicuro**
- Anche chi non conosce termine, probabilmente ha sperimentato fenomeno
- Deve essere enfatizzato se classe userà LLM per deliverable critici

**Uso Analisi**:
- Se score basso → dedicare tempo extra, esempi concreti, strategie mitigation
- Se score alto → quick recap + focus su advanced mitigation (citations, constrained generation)

---

#### C5. Training vs Inference (differenza tra fase di apprendimento e uso del modello)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- Aiuta capire cosa LLM può/non può fare
- Previene misconcezioni ("LLM impara da me" → no, è inference)
- Più concettuale, meno immediatamente pratico

**Uso Analisi**:
- Se score molto basso → semplificare spiegazione con analogia (università vs esame)
- Se score alto → sintesi veloce

---

#### C6. Multimodalità (capacità LLM di lavorare con immagini, non solo testo)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅

**Rationale**:
- Feature potente ma underutilized
- Se score basso → grande opportunità "wow moment" con demo live
- Use case pratici (screenshot Gantt, whiteboard foto, dashboard)

**Uso Analisi**:
- Se score basso + domanda B3 non include "analisi immagini" → preparare demo impattante
- Se score alto → focus su use case avanzati (document analysis multi-page)

---

### SEZIONE D: Prompt Engineering (4 domande)

**Obiettivo Sezione**: Valutare sofisticazione attuale nell'arte di scrivere prompt

---

#### D1. Hai mai sentito parlare di "Prompt Engineering"?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: No, prima volta | Sì sentito ma mai applicato | Sì, provato tecniche base | Sì, applico con framework specifici

**Rationale**:
- **Baseline awareness del campo**
- "No, prima volta" → Modulo 2 parte da zero, enfatizzare value proposition
- "Applico framework" → può accelerare, focus su framework avanzati (meta-prompting)

**Uso Analisi**:
- % per categoria
- Se >70% "Mai sentito/sentito ma non applicato" → classe beginner PE, approach didattico step-by-step
- Se mix → considerare quick recap basics + deeper dive tecniche avanzate

---

#### D2. Conosci/usi framework per strutturare prompt? (es: RACE, Chain-of-Thought, Few-Shot)
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅
**Range**: 1 (Mai sentito) - 5 (Li uso regolarmente)

**Rationale**:
- **Core skill per Modulo 2**
- Framework sono il "salto di qualità" da casual a power user
- Score qui predice quanto tempo serve su RACE, CoT, Few-Shot

**Uso Analisi**:
- Media score
- Se <2.0 → maggior parte Modulo 2 su framework base (RACE, CoT, Few-Shot)
- Se >3.5 → può aggiungere framework avanzati (ReAct, Tree-of-Thought) in appendice

---

#### D3. Quanto spesso ottimizzi/raffini un prompt che non ha dato buoni risultati?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: Mai, accetto primo risultato | Raramente | A volte (1-2 iterazioni) | Spesso (3+ tentativi) | Sistematicamente con tecniche debugging

**Rationale**:
- **Mindset indicatore**:
  - "Mai/Raramente" → necessita convincimento del valore iterazione
  - "Sistematicamente" → già ha debugging workflow, può essere enhanced
- Iterazione è skill critica per prompt engineering efficace

**Uso Analisi**:
- % per categoria
- Se "Mai/Raramente" dominante → enfatizzare Modulo 2.7 (Debugging), mostrare ROI iterazione
- Se "Spesso/Sistematicamente" → fornire framework strutturato (checklist debugging) per efficiency

---

#### D4. Hai mai creato template/prompt riutilizzabili per task ricorrenti?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: No, sempre nuovi | Pensato ma mai fatto | Sì, 1-2 template | Sì, 3-5 template | Sì, libreria estesa 5+

**Rationale**:
- **Applicazione pratica avanzata**
- Template = efficiency massima per task ripetitivi
- Esercizio 2 (Modulo 3) si basa su creazione template → questa domanda indica quanto tempo serve

**Uso Analisi**:
- % con template esistenti
- Se "No/Pensato ma mai fatto" >70% → enfatizzare value durante Modulo 2, dedicare più tempo Esercizio 2
- Se alcuni hanno già librerie → possono condividere esempi durante workshop (peer learning)

---

### SEZIONE E: Use Cases e Priorità (3 domande)

**Obiettivo Sezione**: Identificare cosa vogliono imparare a fare concretamente (guida esempi e esercizi)

---

#### E1. Quali task del tuo lavoro quotidiano vorresti automatizzare/ottimizzare con LLM? (elenco prioritario)
**Tipo**: Paragrafo
**Obbligatoria**: ✅

**Rationale**:
- **Domanda più actionable per personalizzazione**
- Risposte dirette diventano:
  - Esempi durante Modulo 2 (RACE per status report, Few-Shot per requirements)
  - Focus Esercizio 2 (template per top use case)
  - Case study per Modulo 3
- Partecipanti più engaged se vedono loro use case risolti

**Uso Analisi**:
- Aggregare risposte, identificare top 5 use case citati
- Breakdown per ruolo (PM vs PMO vs Service Design vs Functional)
- Preparare 1 template pre-fatto per use case #1 come demo Modulo 2

---

#### E2. Qual è il principale ostacolo che ti impedisce di usare LLM più efficacemente?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: Non so scrivere prompt efficaci | Risultati troppo generici | Non conosco funzionalità avanzate | Manca tempo | Policy aziendali | Non vedo use case | Altro

**Rationale**:
- **Identifica pain point da addressare**
- Ostacolo #1 deve essere risolto da workshop (altrimenti non serve)
- "Non so scrivere prompt" → focus Modulo 2
- "Risultati generici" → enfatizzare specificità (contesto, formato, few-shot)
- "Policy aziendali" → discussione governance, privacy durante Q&A

**Uso Analisi**:
- Top ostacolo citato
- Adatta enfasi moduli per risolverlo
- Se "Policy aziendali" alto → aggiungi slide best practice privacy/compliance

---

#### E3. C'è un task specifico o tipo di documento che vorresti imparare a generare/ottimizzare?
**Tipo**: Paragrafo
**Obbligatoria**: ❌ Opzionale

**Rationale**:
- Opzionale per non duplicare E1, ma permette focus su output specifico
- Alcuni potrebbero citare formato particolare (user story, test case, journey map)
- Diventa esempio concreto per Few-Shot learning

**Uso Analisi**:
- Identifica formati specifici citati
- Se "user stories" citato 3+ volte → prepara template RACE per requirements→user stories
- Quote esempi specifici durante Modulo 2

---

### SEZIONE F: Auto-Valutazione e Aspettative (4 domande)

**Obiettivo Sezione**: Comprendere percezione di sé, confidence, aspettative (allineare con realtà workshop)

---

#### F1. Come valuti il tuo livello attuale nell'uso di LLM?
**Tipo**: Scelta multipla
**Obbligatoria**: ✅
**Opzioni**: Principiante assoluto | Principiante consapevole | Intermedio | Avanzato | Esperto

**Rationale**:
- **Auto-percezione vs realtà** (cross-check con C1-C6, D1-D4)
- Alcune persone overestimate/underestimate → identifica Dunning-Kruger
- Distribuzione cluster indica eterogeneità

**Uso Analisi**:
- % per livello
- Confronta con score oggettivo domande C/D
- Red Flag: se "Avanzato" ma C1-C6 media <2.5 → overconfident, gestire aspettative
- Se "Principiante" ma C/D score alto → underconfident, rassicurare

---

#### F2. Quanto ti senti sicuro/a nell'usare LLM per task lavorativi critici (es: documenti per C-level)?
**Tipo**: Scala lineare 1-5
**Obbligatoria**: ✅
**Range**: 1 (Per nulla sicuro, sempre verifica) - 5 (Molto sicuro, minima revisione)

**Rationale**:
- **Confidence è diverso da competenza**
- Low confidence anche con skill → necessita reassurance, esempi success case
- High confidence con low skill → risk, enfatizzare hallucinations, verification

**Uso Analisi**:
- Media confidence
- Confronta con livello skill (C/D average)
- Se confidence < skill → rassicurare, mostrare best practice che danno sicurezza
- Se confidence > skill → enfatizzare limiti, verification workflows

---

#### F3. Qual è la tua aspettativa principale dal Giorno 1 del workshop?
**Tipo**: Paragrafo
**Obbligatoria**: ✅

**Rationale**:
- **Critico per alignment aspettative**
- Aspettative non allineate → insoddisfazione anche se contenuto ottimo
- Identifica misconcezioni (es: "imparo a programmare" → no, Giorno 1 è no-code)
- Temi ricorrenti diventano talking points introduzione Giorno 1

**Uso Analisi**:
- Cluster aspettative in categorie (skill tecnici, use case specifici, mindset change, etc.)
- Red Flag: aspettative fuori scope → email pre-workshop per allineare
- Quote aspettative comuni in intro Giorno 1 ("So che molti vogliono...")

---

#### F4. C'è qualcosa di specifico che vorresti NON fosse coperto?
**Tipo**: Paragrafo
**Obbligatoria**: ❌ Opzionale

**Rationale**:
- Evitare perdere tempo su contenuti non rilevanti
- Se 3+ citano "troppo coding/tecnico" → conferma approccio no-code
- Se alcuni "già conosco bene X" → può essere sintetizzato o skipped

**Uso Analisi**:
- Identifica topic da evitare/sintetizzare
- Adatta contenuto per eliminare ridondanze

---

## 📊 Analisi Aggregata: Come Usare i Dati

### Metriche Chiave da Calcolare

1. **Profilo Classe**:
   - N partecipanti per ruolo
   - Esperienza media anni
   - % STEM vs non-STEM
   - Strumento LLM dominante

2. **Livello LLM**:
   - Frequenza uso media (convertire a scala 1-5)
   - Score medio conoscenze fondamentali (C1-C6)
   - Score medio prompt engineering (D2, D4)
   - Livello auto-valutato (F1) vs oggettivo

3. **Needs & Gaps**:
   - Top 3 concetti con score più basso (C1-C6)
   - Top 3 use case citati (E1)
   - Ostacolo principale (E2)

4. **Eterogeneità**:
   - Range score (min-max) su C1-C6
   - Dispersione livello auto-valutato (F1)
   - Identifica outlier (1-2 molto avanzati o molto beginner)

### Decision Tree per Fine-Tuning

```
IF media C1-C6 < 2.5 THEN
  → Classe Beginner Foundations
  → Rallentare Modulo 1 (+15 min)
  → Aggiungere demo interattive
  → Semplificare terminologia

ELSE IF media C1-C6 > 3.5 THEN
  → Classe Intermediate/Advanced
  → Sintesi rapida Modulo 1 (-10 min)
  → Più tempo Modulo 2 tecniche avanzate (+10 min)

IF media D2 < 2.0 THEN
  → Prompt Engineering beginner
  → Focus su framework base (RACE, Few-Shot, CoT)
  → Tempo extra Esercizio 2 (template creation)

ELSE IF media D2 > 3.5 THEN
  → Prompt Engineering intermediate+
  → Aggiungere Meta-Prompting, advanced debugging
  → Challenge exercises

IF eterogeneità alta (range C1-C6 > 3 punti) THEN
  → Red Flag: gestire disparità
  → Considerare track parallele Esercizio 3
  → Pairing beginner-intermediate per peer learning

IF use case E1 convergenti (3+ citano stesso task) THEN
  → Preparare template specifico pre-fatto
  → Usare come case study Modulo 2

IF aspettative F3 fuori scope (>30%) THEN
  → Email pre-workshop per allineare
  → Chiarire cosa è/non è coperto Giorno 1
```

---

## 🎯 Esempio Analisi Completa (Scenario Ipotetico)

### Input Dati (8 partecipanti)

**Profilo**:
- Ruoli: 4 PM, 2 PMO, 1 Service Design, 1 Functional
- Esperienza: media 6.5 anni (range 3-12)
- Background: 7 non-STEM, 1 STEM

**Esperienza LLM**:
- Frequenza: 3 "Regolarmente", 4 "Occasionalmente", 1 "Mai"
- Strumenti: 7 ChatGPT, 2 Claude, 0 Gemini
- Uso: Top 3 → Email (7), Riassunti (6), Brainstorming (5)

**Conoscenze Fondamentali (media 1-5)**:
- Token: 1.9
- Context: 2.1
- Temperature: 1.5
- Hallucinations: 3.2
- Training vs Inference: 1.8
- Multimodalità: 2.7

**Prompt Engineering**:
- Sentito PE: 2 "No", 4 "Sentito ma non applicato", 2 "Tecniche base"
- Framework: media 1.6
- Iterazione: 5 "A volte", 2 "Raramente", 1 "Spesso"
- Template: 6 "No", 1 "Pensato ma mai fatto", 1 "1-2 template"

**Use Cases Top (E1)**:
1. Status report settimanali (5 citazioni)
2. Meeting notes → action items (4)
3. Risk analysis (3)
4. Requirements → user stories (2)

**Ostacoli (E2)**:
- Non so scrivere prompt efficaci: 5
- Risultati troppo generici: 2
- Manca tempo: 1

**Auto-Valutazione**:
- Livello: 1 "Principiante assoluto", 5 "Principiante consapevole", 2 "Intermedio"
- Confidence: media 2.4/5

### Output Analisi → Raccomandazioni

**Profilo Classe**: Beginner consapevole, mix PM-PMO dominante, non-STEM, uso occasionale-regolare ChatGPT

**Top 3 Gap**:
1. Temperature (1.5) → può essere sintetizzato, non critico
2. Training vs Inference (1.8) → serve analogia semplice, max 10 min
3. Token (1.9) → **CRITICO**, dedicare 18 min con demo live tokenizer

**Raccomandazioni Modulo 1** (75 min):
- Token: 18 min (vs 12 standard) → demo interattiva, esempi status report
- Context: 14 min → enfatizzare gestione documenti lunghi (use case relevante)
- Temperature: 6 min (vs 10 standard) → sintesi rapida, "nice to know"
- Hallucinations: 12 min → già discreto (3.2), quick recap + mitigation
- Multimodalità: 15 min → demo screenshot→text, use case meeting notes da whiteboard
- Resto: 10 min

**Raccomandazioni Modulo 2** (90 min):
- RACE: 25 min → foundation critica, classe beginner PE
- Few-Shot: 20 min → use case status report con template esempio
- CoT: 15 min → use case risk analysis (citato)
- Role-Based: 12 min
- Debugging: 15 min → ostacolo #1 è "prompt inefficaci"
- Meta-Prompting: 3 min sintesi (vs 10 standard) → troppo avanzato per beginner

**Raccomandazioni Modulo 3** (75 min):
- Esercizio 1: 25 min → usa prompt reali condivisi (domanda B4)
- Esercizio 2: 40 min (vs 30 standard) → focus su status report template, meeting notes→action items
- Peer Review: 10 min

**Template da Preparare**:
1. RACE template per weekly status report (citato 5 volte)
2. Few-Shot template meeting notes → action items (citato 4 volte)

**Comunicazione Pre-Workshop**:
- Email a 1 partecipante "Mai" usato LLM → inviare walkthrough Claude 10 min
- Email generale: chiarire Giorno 1 è no-code (1 STEM potrebbe aspettarsi tecnicismi)

**Red Flags**:
- Nessun red flag critico, classe relativamente omogenea
- Monitor 1 partecipante "Mai" durante Modulo 1 (possibile difficoltà seguire ritmo)

---

## ✅ Checklist Validazione Questionario

Prima di distribuire, verifica:

- [ ] Tutte 25 domande presenti
- [ ] Domande obbligatorie marcate (17 totali)
- [ ] Scale 1-5 hanno labels corrette (Mai sentito → Esperto)
- [ ] Opzioni scelta multipla coprono tutti casi (con "Altro" dove appropriato)
- [ ] Placeholder text chiari per domande aperte
- [ ] Nessuna domanda duplicata o ridondante
- [ ] Timing compilazione realistico (15-20 min con 25 domande)
- [ ] Linguaggio accessibile per non-STEM
- [ ] Nessuna domanda che richiede conoscenza tecnica pregressa

---

**Fine Reference Document**
