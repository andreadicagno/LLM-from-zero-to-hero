# 📝 Content Outline Completo

> **Documento di Riferimento**: Outline dettagliato di tutti i contenuti per ogni modulo
> **Last Updated**: 2025-10-05 (Sessione 4)

---

## 📋 Come Usare Questo Documento

Questo file contiene l'outline **punto per punto** di ciò che deve essere trattato in ogni sezione del corso. Usa questo come checklist quando scrivi i contenuti.

**Legenda**:
- 🎯 Learning Objective
- 📚 Contenuto teorico
- 💡 Esempio pratico
- ✏️ Esercizio/Attività
- 🔑 Key Takeaway
- ⚠️ Common Pitfall / Warning

---

## 📌 Index Pages Strategy (Aggiornato Sessione 4)

**Problema identificato**: Ridondanze tra overview Giorno e overview Moduli causavano frustrazione utente (stesse info ripetute 2-3 volte).

**Soluzione Applicata - Opzione C (Ibrida)**:

### Giorno Index (`giorno-X/index.md`) - Master Document
**Ruolo**: Punto di riferimento completo con TUTTI i dettagli (~180-200 righe)

**Include**:
- ✅ Overview completa del giorno
- ✅ Learning objectives dettagliati (tutti i moduli del giorno)
- ✅ Timeline dettagliata (tabella orari)
- ✅ Key concepts completi
- ✅ Checklist progressione (Fondamenti, Prompt Engineering, Pratica)
- ✅ Deliverables del giorno
- ✅ Prerequisites e come prepararti
- ✅ Prossimi passi e risorse aggiuntive

### Modulo Index (`giorno-X/0X-modulo/index.md`) - Quick Navigation Page
**Ruolo**: Pagina di navigazione veloce, NO ridondanze (~70-100 righe)

**Include SOLO**:
- ✅ Intro brevissima (2-3 paragrafi, ~80 parole)
- ✅ Lista argomenti compatta (cards: emoji + titolo + durata + 1 frase max 15 parole)
- ✅ CTA chiaro per iniziare

**NON Include** (già nel parent):
- ❌ Learning objectives dettagliati
- ❌ Key concepts
- ❌ Checklist progressione
- ❌ Timeline dettagliata
- ❌ Deliverables
- ❌ Metodologia apprendimento
- ❌ Sezioni "Perché importa" lunghe
- ❌ Discussione/Q&A

**Benefici**:
- ✅ Utente non rilegge stesse info 3 volte
- ✅ Arriva al contenuto reale più velocemente (2 click vs 3)
- ✅ Informazioni dettagliate concentrate in 1 posto (giorno index)
- ✅ Riduzione ~45% righe totali index pages
- ✅ Risparmio ~3-4 min tempo lettura ripetitiva

**Risultati Sessione 4**:
- `giorno-1-foundations/index.md`: 235 → 183 righe (-22%)
- `01-llm-foundations/index.md`: 266 → 75 righe (-72%)
- Totale index: 501 → 258 righe (**-49% riduzione**)

**Apply to Future Modules**: Usa questa strategy per tutti i moduli futuri (Giorno 2, Giorno 3).

---

## GIORNO 1: LLM Foundations & Prompt Engineering

### Modulo 1.1: LLM Foundations

#### 01-token.md - Token: l'Alfabeto degli LLM

🎯 **Learning Objectives**:
- Capire cos'è un token e come funziona la tokenizzazione
- Imparare a ottimizzare l'uso dei token nei prompt

📚 **Contenuti**:
- Definizione: Token = unità minima di testo per un LLM
- Esempi tokenizzazione:
  - Parola comune: "hello" = 1 token
  - Parola rara: "antidisestablishmentarianism" = 4+ token
  - Spazi e punteggiatura contano
  - Emoji: 🚀 = 1-2 token
  - Codice: differenze tra linguaggi

💡 **Esempi Pratici**:
- Confronto: testo italiano vs inglese (IT usa più token)
- Tool demo: OpenAI Tokenizer
- Analisi prompt reale: "Scrivi status report progetto" → conta token

📚 **Ottimizzazione Token**:
- Perché importa: costi API, limiti context window
- Tecniche:
  - Essere concisi ma chiari
  - Evitare ripetizioni
  - Rimuovere parole non necessarie
- Quando NON ottimizzare: quando chiarezza > brevità

✏️ **Esercizio**:
- Prendi un tuo prompt tipico
- Analizzalo con tokenizer
- Trova modi per ridurre token mantenendo efficacia

🔑 **Key Takeaways**:
- Token ≠ parole, LLM "vedono" token
- Ottimizzare token = risparmiare costi e context
- Chiarezza viene sempre prima

---

#### 02-anatomia-llm.md - Come Funziona un LLM

🎯 **Learning Objectives**:
- Comprendere architettura base di un LLM (senza tecnicismi)
- Distinguere training da inference
- Capire differenze tra modelli (GPT, Claude, etc.)

📚 **Contenuti - Transformer Architecture (Semplificato)**:
- Analogia: LLM = "super-calcolatrice di probabilità linguistiche"
- Componenti base (concetti, non matematica):
  - Input: testo → token → numeri
  - Layers: elaborazione tramite "strati" neurali
  - Output: probabilità prossima parola

📚 **Training vs Inference**:
- Training:
  - Fase di "apprendimento" (mesi, datacenter)
  - Legge miliardi di testi
  - Impara pattern linguistici
  - Crea "pesi" del modello
- Inference:
  - Fase di "utilizzo" (quando usiamo ChatGPT/Claude)
  - Applica conoscenza appresa
  - Genera risposte in tempo reale

💡 **Analogia Efficace**:
- Training = studiare per anni all'università
- Inference = rispondere a domanda d'esame

📚 **Differenze tra Modelli**:
- GPT-5 (OpenAI): coding/math eccellente, reasoning, sistema unificato multi-model
- Claude Sonnet 4 (Anthropic): 1M context window, precisione massima, compliance
- Gemini 2.5 (Google): multimodale nativo (video/audio), Deep Think, Google Workspace
- Parametri del modello: architetture 2025 più efficienti, dimensione ≠ tutto

⚠️ **Common Pitfalls**:
- LLM non "capisce" come umani
- Non ha coscienza o intenzionalità
- Non "pensa", predice statisticamente

🔑 **Key Takeaways**:
- LLM = pattern matching statistico avanzatissimo
- Training crea il modello, inference lo usa
- Scegli modello in base a use case

---

#### 03-ragionamento.md - Come "Ragionano" gli LLM

🎯 **Learning Objectives**:
- Capire il meccanismo di next token prediction
- Comprendere cos'è l'attention mechanism (concetto)
- Riconoscere limiti del "ragionamento" LLM

📚 **Next Token Prediction**:
- Funzionamento base:
  1. LLM riceve prompt
  2. Calcola probabilità per ogni possibile token successivo
  3. Sceglie token (influenzato da temperature)
  4. Aggiunge al testo e ripete

💡 **Esempio Interattivo**:
- Frase: "Il gatto è seduto sul..."
- Probabilità:
  - "tappeto" (45%)
  - "divano" (30%)
  - "tavolo" (15%)
  - "tetto" (8%)
  - altro (2%)

📚 **Attention Mechanism (Concetto Base)**:
- Definizione semplice: LLM "presta attenzione" a parti rilevanti del contesto
- Esempio:
  - Prompt: "Maria ama i cani. Le piacciono molto. Lei ha un golden retriever."
  - Quando genera "retriever", attention si focalizza su "cani" e "Maria"
- Perché importa: consente coerenza su testi lunghi

📚 **Limiti del "Ragionamento"**:
- ❌ Non è vera comprensione
- ❌ Non ha modello del mondo reale
- ❌ Può fare errori logici banali
- ✅ Eccelle in pattern recognition
- ✅ Ottimo con compiti visti in training

💡 **Esempio Limite**:
- Prompt: "Se ho 3 mele e ne mangio 5, quante me ne restano?"
- LLM potrebbe dire "-2" o confondersi
- Umano capisce subito che è impossibile

✏️ **Esercizio Pratico**:
- Prova a "ingannare" Claude con domanda illogica
- Osserva come risponde
- Riformula per ottenere risposta corretta

🔑 **Key Takeaways**:
- LLM predice token per token, no "pensiero"
- Attention = focus su parti rilevanti del testo
- Conoscere limiti aiuta a scrivere prompt migliori

---

#### 04-contesto.md - Contesto e Context Window

🎯 **Learning Objectives**:
- Comprendere cos'è il context window
- Imparare a gestire conversazioni/documenti lunghi
- Best practices per ottimizzare uso del contesto

📚 **Cos'è il Context Window**:
- Definizione: "memoria di lavoro" dell'LLM
- Misurato in token
- Include:
  - System prompt/Custom Instructions
  - Cronologia conversazione
  - File/documenti caricati
  - Risposta in generazione

📚 **Limiti Context Window per Modello**:
- GPT-5: 400K token (~300K parole / ~1200 pagine)
- Claude Sonnet 4: 1M token (~750K parole / ~3000 pagine)
- Gemini 2.5 Pro: 1M token (~750K parole / ~3000 pagine)
- Quando si supera: errori o perdita informazioni

💡 **Esempio Pratico PM**:
- Document analysis:
  - Project charter (10 pagine) = ~8K token
  - Stakeholder analysis (5 pagine) = ~4K token
  - Risk register (3 pagine) = ~2.5K token
  - **Totale**: ~14.5K token → OK per Claude

📚 **Gestione Memoria di Lavoro**:
- Conversazioni lunghe: LLM "dimentica" inizio
- Strategie:
  1. **Summarize**: riassumi periodicamente
  2. **Split**: dividi task complessi in subtask
  3. **Reference**: carica documenti invece di copiarli
  4. **New chat**: ricomincia quando necessario

💡 **Caso d'uso PMO**:
- Analizzare 50 status report → NON tutti insieme
- Approccio migliore:
  1. Batch di 10 report per volta
  2. Estrai insights per batch
  3. Chiedi synthesis finale degli insights

⚠️ **Common Pitfalls**:
- Copiare interi documenti in chat invece di upload
- Conversazione lunghissima che perde coerenza
- Non sfruttare Projects per contesto persistente

✏️ **Best Practices**:
- ✅ Upload file quando >1 pagina
- ✅ Usa Projects per contesto ricorrente
- ✅ Chiedi riassunti intermedi
- ✅ Monitora "quality" delle risposte (se degrada, nuovo contesto)

🔑 **Key Takeaways**:
- Context window = memoria limitata ma ampia
- Claude Sonnet 4 & Gemini 2.5 (1M token) = game changer per documenti enormi
- Gestire contesto strategicamente = risultati migliori

---

#### 05-multimodalita.md - Capacità Visive e Multimodalità

🎯 **Learning Objectives**:
- Capire cosa significa "multimodale"
- Imparare a sfruttare vision capabilities
- Identificare use cases pratici per immagini

📚 **Cosa Significa Multimodale**:
- Testo: input/output principale
- Immagini: input (alcuni modelli anche output)
- Audio: input (es. Whisper per trascrizioni)
- Video: (ancora limitato, frame extraction)
- Futuro: integrazione seamless di tutti i media

📚 **Vision Capabilities**:
- Cosa LLM "vede" in un'immagine:
  - Oggetti e scene
  - Testo (OCR)
  - Grafici e diagrammi
  - Layout e composizione
  - Colori e stili
- Limiti:
  - No volti riconoscibili (privacy)
  - Possibili errori su dettagli piccoli
  - Qualità immagine influenza risultati

💡 **Use Cases Pratici per Ruoli**:

**PM - Project Manager**:
- Upload Gantt chart screenshot → estrai task list
- Foto whiteboard brainstorming → trascrivi + organizza
- Screenshot email → estrai action items
- Diagram architettura → genera documentazione

**PMO**:
- Dashboard KPI screenshot → analizza trend
- Org chart immagine → converti in testo/tabella
- Process flow diagram → identifica bottleneck

**Service Design**:
- Wireframe sketch → genera HTML/description
- User journey map foto → estrai touchpoint
- Competitor app screenshot → feature analysis

**Funzionali**:
- Mockup UI → genera requirements
- Error screenshot → troubleshooting
- Data visualization → insights extraction

✏️ **Esercizio Pratico**:
1. Prendi screenshot di un tuo deliverable (Gantt, dashboard, wireframe)
2. Upload a Claude
3. Chiedi:
   - "Descrivi cosa vedi"
   - "Estrai informazioni chiave"
   - "Genera documentazione testuale"
4. Valuta accuratezza e utilità

💡 **Esempio Real-World**:
- Scenario: Meeting su Zoom, condivisa slide complessa
- Senza multimodal: appuntare tutto a mano
- Con multimodal:
  1. Screenshot slide
  2. Upload a Claude
  3. "Riassumi key point di questa slide"
  4. "Suggerisci follow-up action"

⚠️ **Limitazioni da Conoscere**:
- Qualità immagine: bassa risoluzione = risultati peggiori
- Formato: preferire PNG/JPG, evitare formati esotici
- Dimensione: file troppo grandi possono dare problemi
- Privacy: no informazioni sensibili/personali in immagini

🔑 **Key Takeaways**:
- Multimodale = LLM non solo testo
- Vision apre use case potentissimi
- Screenshot = modo veloce per dare contesto
- Sempre verificare output su informazioni critiche

---

#### 06-concetti-chiave.md - Concetti Essenziali

🎯 **Learning Objectives**:
- Comprendere concetti chiave: temperature, hallucinations, fine-tuning
- Riconoscere quando e perché si verificano problemi
- Best practices per mitigare limiti

📚 **Temperature (Creatività vs Precisione)**:

**Cos'è**:
- Parametro che controlla "casualità" dell'output
- Range tipico: 0.0 a 1.0 (o 2.0)

**Temperature Bassa (0.0 - 0.3)**:
- Più deterministica e precisa
- Output ripetibili e coerenti
- Usa quando:
  - Analisi dati
  - Documentazione tecnica
  - Risposte fattuali

**Temperature Alta (0.7 - 1.0)**:
- Più creativa e varia
- Output diversi ogni volta
- Usa quando:
  - Brainstorming
  - Content creation creativo
  - Idee innovative

💡 **Esempio Pratico**:
- Prompt: "Genera 3 titoli per presentazione su AI"
- Temp 0.1: sempre simili, sicuri
- Temp 0.9: molto diversi, originali

⚠️ **Nota**: Molti tool non espongono temperature, usa default

---

📚 **Hallucinations (Quando LLM "Inventa")**:

**Cos'è**:
- LLM genera informazioni plausibili ma false
- Sembra confident anche quando sbaglia
- Più frequente su:
  - Fatti specifici (date, numeri, citazioni)
  - Informazioni recenti (post training cutoff)
  - Domini ultra-specializzati

💡 **Esempio Hallucination**:
- Chiedi: "Chi ha vinto Oscar miglior film 2024?"
- Se training cutoff 2023 → potrebbe inventare risposta

**Come Riconoscere**:
- 🚩 Risposte troppo specifiche senza fonti
- 🚩 Date/numeri che sembrano random
- 🚩 Citazioni che "suonano bene" ma dubbie

**Come Mitigare**:
- ✅ Chiedi fonti esplicite
- ✅ Verifica fatti critici
- ✅ Usa "se non sai, dillo"
- ✅ Abilita web search per info recenti
- ✅ Fornisci documenti accurati come contesto

✏️ **Esercizio**:
1. Chiedi a Claude info su evento recente (post cutoff)
2. Osserva se ammette di non sapere o inventa
3. Prova con web search abilitato e confronta

---

📚 **Fine-Tuning vs Prompt Engineering**:

**Fine-Tuning**:
- Ri-addestrare modello su dati specifici
- Modifica pesi del modello
- Pro: performance ottimale per task specifico
- Contro: costoso, complesso, serve expertise tecnico
- Quando: volumi enormi, task ripetitivo critico

**Prompt Engineering**:
- Ottimizzare input al modello esistente
- No modifica del modello
- Pro: immediato, flessibile, no costi extra
- Contro: limiti di ciò che prompt può fare
- Quando: 99% dei casi per utenti business

💡 **Regola Pratica**:
- Inizia sempre con prompt engineering
- Solo se veramente non basta, considera fine-tuning
- Per utenti non-tecnici: prompt engineering è sufficiente

---

📚 **Altri Concetti Importanti**:

**Knowledge Cutoff**:
- Data limite training del modello
- Claude Sonnet 4: agosto 2025, GPT-5: settembre 2025, Gemini 2.5: marzo 2025
- Info post-cutoff: hallucination risk alto
- Soluzione: web search o fornire documenti aggiornati

**Emergent Abilities**:
- Capacità che "emergono" con modelli grandi
- Es: ragionamento multi-step, traduzione, coding
- Non programmate esplicitamente, emergono da training

**Alignment**:
- Processo per rendere LLM sicuri e utili
- RLHF (Reinforcement Learning from Human Feedback)
- Perché: evitare output dannosi/offensivi
- Impatto: a volte LLM è "troppo cauto"

⚠️ **Considerazioni Etiche Base**:
- Privacy: no dati sensibili in prompt
- Bias: LLM può riflettere bias dei dati training
- Verifica: sempre fact-check informazioni critiche
- Trasparenza: dichiara quando usi AI per contenuti importanti

🔑 **Key Takeaways**:
- Temperature controlla creatività
- Hallucinations esistono, verificare sempre fatti critici
- Prompt engineering è primo step (fine-tuning raramente necessario)
- Conoscere limiti = usare LLM responsabilmente

---

### Modulo 1.2: Prompt Engineering Teoria

#### 01-anatomia-prompt.md - Anatomia di un Prompt Efficace

🎯 **Learning Objectives**:
- Identificare componenti di un prompt efficace
- Riconoscere prompt deboli vs forti
- Applicare struttura ottimale

📚 **Componenti Essenziali**:

1. **Ruolo/Persona** (opzionale ma utile)
   - Chi deve essere l'LLM?
   - Es: "Sei un PM senior con 10 anni esperienza..."

2. **Task/Azione** (obbligatorio)
   - Cosa deve fare?
   - Verbo chiaro: analizza, scrivi, genera, confronta
   - Es: "Analizza i rischi del progetto..."

3. **Contesto** (fondamentale)
   - Background necessario
   - Vincoli e requisiti
   - Es: "...per progetto enterprise banking, deadline Q2, team distribuito..."

4. **Formato Output** (molto utile)
   - Come vuoi la risposta?
   - Es: "...in formato tabella con 3 colonne: rischio, probabilità, impatto"

5. **Esempi** (quando serve)
   - Input-output esempio
   - Chiarisce aspettative

6. **Tone/Style** (opzionale)
   - Formale, casual, tecnico?
   - Es: "Usa linguaggio business-friendly"

📚 **Struttura Ottimale**:
```
[RUOLO] + [TASK] + [CONTESTO] + [FORMATO] + [VINCOLI/NOTE]
```

💡 **Esempio Prompt Debole**:
```
"Scrivi un report sul progetto"
```
❌ Problemi:
- No contesto
- Task vago
- No formato
- Risultato: output generico inutile

💡 **Esempio Prompt Forte**:
```
Sei un Project Manager esperto in progetti IT enterprise.

Scrivi un executive summary del progetto "Digital Transformation Platform" per il CFO.

Contesto:
- Budget: 2M€
- Durata: 9 mesi
- Team: 15 persone
- Status: 60% completato, 2 settimane ritardo
- Risk principale: integrazione legacy systems

Formato:
- Massimo 300 parole
- 3 sezioni: Progress, Risks, Next Steps
- Bullet points
- Tone: conciso, business-oriented

Focus su impatto finanziario e tempistiche.
```
✅ Chiaro, contestualizzato, formato definito

✏️ **Esercizio**:
1. Prendi un prompt che usi abitualmente
2. Identifica componenti mancanti
3. Riscrivilo con struttura completa
4. Confronta risultati

⚠️ **Errori Comuni**:
- Prompt troppo vago ("fai qualcosa")
- Troppo lungo senza struttura (muro di testo)
- Assumere che LLM "capisca contesto implicito"
- No formato → output non utilizzabile

🔑 **Key Takeaways**:
- Prompt = istruzioni chiare, come per un assistente umano
- Più dettagli rilevanti = output migliore
- Formato definito = risparmio tempo
- Struttura > lunghezza

---

#### 02-framework-race.md - Framework RACE

🎯 **Learning Objectives**:
- Padroneggiare framework RACE
- Applicarlo a casi reali
- Creare template RACE riutilizzabili

📚 **Framework RACE - Overview**:
Metodo strutturato per costruire prompt efficaci

**R** - Role (Ruolo)
**A** - Action (Azione)
**C** - Context (Contesto)
**E** - Expectations (Aspettative)

---

📚 **R - ROLE (Ruolo)**:

**Cosa**: Definisci chi deve essere l'LLM

**Perché**: Attiva pattern di risposta appropriati

**Come scrivere**:
- Specifica expertise: "Sei [professione] esperto in [dominio]"
- Aggiungi livello: senior, junior, specialist
- Include focus: "...con focus su [area specifica]"

💡 **Esempi per Ruolo**:
- PM: "Sei un Senior Project Manager certificato PMP con esperienza in progetti Agile enterprise"
- PMO: "Sei un PMO Director esperto in governance e portfolio management"
- Service Designer: "Sei un Service Design Lead con 8 anni esperienza in digital transformation"
- Funzionale: "Sei un Business Analyst senior specializzato in requirements elicitation"

---

📚 **A - ACTION (Azione)**:

**Cosa**: Il task specifico da eseguire

**Perché**: Chiarezza su output atteso

**Verbi efficaci**:
- Analizza, Valuta, Confronta
- Genera, Crea, Scrivi
- Riassumi, Sintetizza, Estrai
- Suggerisci, Raccomanda, Proponi

💡 **Esempi Azione Chiara vs Vaga**:
- ❌ Vaga: "Dimmi del progetto"
- ✅ Chiara: "Analizza i rischi critici del progetto"
- ❌ Vaga: "Aiutami con i requirements"
- ✅ Chiara: "Genera user stories dal documento requirements allegato"

---

📚 **C - CONTEXT (Contesto)**:

**Cosa**: Informazioni background necessarie

**Cosa includere**:
- Background progetto/situazione
- Vincoli (tempo, budget, risorse)
- Stakeholder rilevanti
- Documenti/dati disponibili
- Problemi/sfide specifiche

💡 **Template Contesto PM**:
```
Contesto:
- Progetto: [nome e tipo]
- Cliente/Industry: [settore]
- Budget e Timeline: [vincoli]
- Team: [composizione]
- Status attuale: [stato]
- Challenge principale: [problema chiave]
```

---

📚 **E - EXPECTATIONS (Aspettative)**:

**Cosa**: Come vuoi l'output

**Aspetti da specificare**:
1. **Formato**:
   - Tabella, lista, paragrafo, JSON
   - Struttura specifica (es: "3 sezioni...")
2. **Lunghezza**:
   - Parole/caratteri
   - "Conciso" vs "dettagliato"
3. **Tone/Stile**:
   - Formale, tecnico, executive
   - Audience target
4. **Deliverable specifico**:
   - "Pronto per email a CEO"
   - "Draft da rivedere con team"

💡 **Esempio Expectations Completo**:
```
Expectations:
- Formato: Email professionale
- Lunghezza: Max 400 parole
- Struttura:
  * Subject line accattivante
  * Intro (1 para)
  * Body (3 bullet points)
  * Clear CTA
- Tone: Professionale ma friendly
- Target: C-level stakeholder non tecnico
- Pronto per invio (no placeholder)
```

---

💡 **RACE Completo - Esempio PM**:

```
[ROLE]
Sei un Senior Project Manager con 10 anni di esperienza in progetti di digital transformation per il settore bancario.

[ACTION]
Scrivi una risk analysis email per il project sponsor.

[CONTEXT]
Progetto: Core Banking System Migration
Cliente: Banca nazionale, 2M clienti
Budget: 5M€, Timeline: 12 mesi (siamo al mese 7)
Status: 55% completato, leggero ritardo (1 settimana)
Issue critica emersa: legacy system ha API non documentate
Team concerns: possibili altri "unknown unknowns"

[EXPECTATIONS]
Formato: Email formale
Lunghezza: 300-400 parole
Struttura:
- Situazione attuale (1 para)
- Top 3 rischi identificati (con impact/likelihood)
- Mitigazione proposta per ciascun rischio
- Ask esplicita (decisione/approval)
Tone: Professionale, proattivo (no panic), solution-oriented
Destinatario: Sponsor C-level (limitata conoscenza tecnica)
```

---

✏️ **Esercizio Pratico - Build Your RACE**:

**Step 1**: Scegli task reale del tuo lavoro

**Step 2**: Compila RACE
- R: Il tuo ruolo ideale per questo task
- A: L'azione specifica necessaria
- C: Contesto completo della situazione
- E: Output esattamente come lo vuoi

**Step 3**: Testa con Claude

**Step 4**: Itera e raffina

---

💡 **Template RACE Riutilizzabili per Ruolo**:

**Template PM - Status Report**:
```
[R] Senior PM in [industry]
[A] Scrivi status report settimanale
[C] Progetto: [nome], Settimana: [N], Progress: [%], Issues: [...]
[E] Email per steering committee, formato standard aziendale
```

**Template PMO - Portfolio Review**:
```
[R] PMO Analyst esperto in portfolio management
[A] Genera executive summary portfolio progetti
[C] N progetti: [elenco], Totale budget: [X], Status: [...]
[E] Dashboard-style report, focus su RAG status e finanzials
```

**Template Service Design - Research Synthesis**:
```
[R] Senior UX Researcher
[A] Sintetizza findings da user interviews
[C] N interviste: [numero], Tipo utenti: [...], Topic: [...]
[E] Report con insights, quotes, pattern emergenti, raccomandazioni
```

**Template Funzionale - Requirements**:
```
[R] Business Analyst certificato
[A] Trasforma business need in user stories
[C] Feature: [nome], Stakeholder needs: [...], Constraints: [...]
[E] User stories formato Agile (As a... I want... So that...), con acceptance criteria
```

---

🔑 **Key Takeaways**:
- RACE = framework sistematico per prompt efficaci
- Ogni componente ha uno scopo specifico
- Riutilizza template per task ricorrenti
- Più preciso in Expectations = meno iterazioni

---

#### 03-chain-of-thought.md - Chain-of-Thought Prompting

🎯 **Learning Objectives**:
- Comprendere cos'è Chain-of-Thought (CoT)
- Sapere quando usarlo
- Applicare CoT a problemi complessi

📚 **Cos'è Chain-of-Thought**:

**Definizione**: Tecnica che richiede all'LLM di mostrare il ragionamento step-by-step prima della risposta finale

**Perché funziona**:
- LLM genera token sequenzialmente
- Esplicitare ragionamento migliora accuratezza
- "Pensare ad alta voce" previene errori logici

**Quando usare CoT**:
- ✅ Problemi multi-step
- ✅ Decisioni complesse
- ✅ Analisi con trade-off
- ✅ Quando errori sono costosi
- ❌ Task semplici (overhead inutile)

---

📚 **Pattern Base CoT**:

**Pattern 1 - Esplicito**:
```
Rispondi seguendo questi step:
1. [analizza X]
2. [valuta Y]
3. [considera Z]
4. [concludi con raccomandazione]

Mostra il ragionamento per ogni step.
```

**Pattern 2 - "Let's think step by step"**:
```
[Il tuo prompt]

Let's approach this step by step:
1. First, let's...
2. Then, we should...
3. Finally, we can...
```

**Pattern 3 - "Before answering..."**:
```
[Il tuo prompt]

Before providing the answer, please:
- Identify the key factors
- Analyze trade-offs
- Consider implications
Then give your recommendation.
```

---

💡 **Esempio CoT - PM Decision Making**:

**Scenario**: Scegliere tra 2 architetture software

**Senza CoT** (risposta diretta):
```
"Quale architettura sceglieresti per il progetto: microservizi o monolite?"

Risposta: "Microservizi perché sono più scalabili."
```
❌ Risposta semplicistica, no analisi

**Con CoT**:
```
Aiutami a scegliere l'architettura per progetto CRM enterprise.

Opzioni: Microservizi vs Monolite

Context:
- Team: 8 dev, esperienza mixed
- Timeline: 9 mesi
- Scalabilità: potenziale crescita 10x users in 3 anni
- Maintenance: team interno long-term

Analizza step-by-step:
1. Pro/Contro di ciascuna architettura per questo contesto
2. Risk assessment per entrambe
3. Effort di implementazione vs benefici
4. Raccomandazione finale con rationale

Mostra il ragionamento completo.
```

✅ Risposta: analisi strutturata, trade-off espliciti, decisione giustificata

---

💡 **Esempio CoT - PMO Risk Analysis**:

```
Analizza questo scenario di progetto step-by-step:

Progetto: Migrazione cloud di 50+ applicazioni
Budget: 3M€, 18 mesi
Status: mese 8, 30% completato (target era 45%)
Nuovo requirement: compliance GDPR richiede re-design architettura
Team morale: basso, 2 key people a rischio turnover

Approccio:
1. Identifica tutti i rischi (tecnici, organizzativi, finanziari)
2. Categorizza per severity (H/M/L) e likelihood (%)
3. Per top 3 rischi, analizza:
   - Root cause
   - Potential impact
   - Mitigation options
4. Raccomanda action plan prioritizzato

Mostra analisi completa prima delle raccomandazioni.
```

---

💡 **Esempio CoT - Service Design Decision**:

```
Devo decidere quale user flow testare nel prossimo sprint.

Opzioni:
A) Onboarding flow (critico ma complesso)
B) Checkout flow (meno critico ma quick win)
C) Profile management (requested da utenti)

Vincoli:
- Solo 1 settimana per test
- 5 partecipanti disponibili
- Stakeholder vuole risultati velocemente

Ragiona step-by-step:
1. Valuta ogni opzione su: valore per utente, complexity, data quality potenziale
2. Considera vincoli (tempo, partecipanti)
3. Analizza trade-off tra quick win vs high impact
4. Suggerisci scelta + piano B se opzione principale ha issues

Spiega il ragionamento.
```

---

📚 **CoT per Task Ricorrenti - Template**:

**Template: Prioritizzazione Features**
```
Ho N features da prioritizzare per prossimo quarter.

Features: [lista con breve descrizione]

Criteri:
- User value (1-10)
- Implementation effort (S/M/L)
- Strategic alignment
- Dependencies

Approccio step-by-step:
1. Score ogni feature sui criteri
2. Identifica dependencies critiche
3. Crea matrice value/effort
4. Considera strategic alignment
5. Proponi roadmap prioritizzato

Mostra scoring e rationale.
```

**Template: Stakeholder Communication**
```
Devo comunicare [bad news / change] a [stakeholder].

Situazione: [descrivi]
Stakeholder: [ruolo, concerns, influenza]
Obiettivo: [cosa vuoi ottenere]

Pensa step-by-step:
1. Analizza reazione probabile stakeholder
2. Identifica key concerns da addressare
3. Prepara messaging per mitigare resistenza
4. Definisci ask specifico
5. Draft email/talking points

Spiega strategia comunicativa.
```

---

✏️ **Esercizio Pratico**:

**Parte 1**: Senza CoT
- Prendi decisione complessa del tuo lavoro
- Chiedi a Claude risposta diretta
- Valuta qualità

**Parte 2**: Con CoT
- Stessa decisione
- Usa pattern CoT (esplicita i step)
- Confronta qualità, insights, confidence

**Parte 3**: Template
- Crea template CoT per tuo task ricorrente
- Salvalo per riuso

---

⚠️ **Quando NON usare CoT**:

- ❌ Task semplici (es: "traduci questa frase")
- ❌ Quando serve risposta rapidissima
- ❌ Output deve essere conciso per forza
- ❌ Non serve giustificazione (es: brainstorming idee)

**Regola**: CoT per decisioni e analisi; risposta diretta per task semplici

---

🔑 **Key Takeaways**:
- CoT = mostrare ragionamento step-by-step
- Migliora accuratezza in task complessi
- Pattern: "Let's think step by step" funziona bene
- Crea template CoT per decisioni ricorrenti
- Non tutto ha bisogno di CoT (scegli con criterio)

---

#### 04-few-shot-learning.md - Few-Shot Learning: Guidare con Esempi

🎯 **Learning Objectives**:
- Comprendere zero-shot vs few-shot
- Imparare a selezionare esempi efficaci
- Applicare few-shot a task ricorrenti

📚 **Zero-Shot vs Few-Shot vs Many-Shot**:

**Zero-Shot**:
- Solo istruzioni, no esempi
- Es: "Scrivi email formale per cliente"
- Pro: veloce, flessibile
- Contro: output variabile, può non matchare aspettative

**Few-Shot**:
- Istruzioni + 2-5 esempi
- Es: "Scrivi email formale. Esempio 1:... Esempio 2:..."
- Pro: output più consistente, match formato
- Contro: usa più token

**Many-Shot**:
- Istruzioni + molti esempi (10+)
- Pro: massima consistenza
- Contro: context window usage alto

💡 **Quando usare Few-Shot**:
- ✅ Formato output specifico richiesto
- ✅ Task ricorrente (standardizzazione)
- ✅ Stile/tone particolare
- ✅ Zero-shot non dà risultati desiderati

---

📚 **Pattern Few-Shot Efficace**:

**Struttura**:
```
[Task description]

Formato atteso:

Esempio 1:
Input: [esempio input 1]
Output: [esempio output desiderato 1]

Esempio 2:
Input: [esempio input 2]
Output: [esempio output desiderato 2]

[Opzionale: Esempio 3]

Ora, applica lo stesso formato a:
Input: [tuo input reale]
Output:
```

---

💡 **Esempio Few-Shot - PMO Status Report Standardization**:

```
Trasforma status update informali in formato standard executive.

Formato standard:
- Status: [RAG]
- Progress: [% e milestone]
- Risks: [top 2]
- Next: [prossimi step]

Esempio 1:
Input: "Tutto ok, abbiamo fatto testing questa settimana. Ancora un po' di bug ma niente di grave. La prossima settimana deploy."

Output:
Status: 🟢 Green
Progress: 85% - Testing phase completed, deployment prep underway
Risks: (1) Minor bugs in QA - mitigation in progress, (2) None critical
Next: Production deployment scheduled week 23

Esempio 2:
Input: "Siamo indietro di 2 settimane. Il cliente ha cambiato requirements di nuovo. Non so se ce la facciamo per la deadline."

Output:
Status: 🔴 Red
Progress: 40% - 2 weeks behind schedule due to requirement changes
Risks: (1) Scope creep - client requirements volatility, (2) Deadline at risk - need timeline rebaseline
Next: Scope review meeting with sponsor, revised plan by Friday

Ora trasforma:
Input: "La migration è quasi finita. Abbiamo avuto problemi con il database ma li abbiamo risolti. Manca solo la documentazione."

Output:
```

✅ Risultato: consistente, formato standardizzato automaticamente

---

💡 **Esempio Few-Shot - Service Design User Feedback Synthesis**:

```
Trasforma raw feedback utenti in insights strutturati.

Formato:
- Theme: [categoria]
- User quote: "[citazione rappresentativa]"
- Insight: [1 frase sintesi]
- Impact: [H/M/L]

Esempio 1:
Input: "Il checkout è troppo lungo, ho abbandonato due volte perché mi chiedeva troppe cose. Vorrei solo pagare e basta."

Output:
Theme: Checkout Friction
User quote: "Vorrei solo pagare e basta"
Insight: Excessive form fields in checkout causing cart abandonment
Impact: H

Esempio 2:
Input: "Mi piace che ci siano le recensioni, mi aiutano a scegliere. Magari poteste mettere anche le foto dei prodotti fatte dai clienti."

Output:
Theme: Social Proof Enhancement
User quote: "Magari poteste mettere anche le foto dei prodotti fatte dai clienti"
Insight: Users value peer content (reviews) and desire user-generated photos
Impact: M

Ora applica a:
Input: "Non capisco mai se il prodotto è in stock o no. A volte ordino e poi mi dicono che non c'è. Frustrante."

Output:
```

---

💡 **Esempio Few-Shot - Funzionale: Requirements → User Stories**:

```
Trasforma business requirements in user stories formato Agile.

Formato:
As a [user type]
I want to [action]
So that [benefit]

Acceptance Criteria:
- [criterio 1]
- [criterio 2]

Esempio 1:
Requirement: "Il sistema deve permettere export dei report in PDF"

User Story:
As a Manager
I want to export reports in PDF format
So that I can share them with stakeholders who don't have system access

Acceptance Criteria:
- PDF generated includes all data visible on screen
- Export completes within 10 seconds for reports up to 50 pages
- PDF is formatted for A4 print

Esempio 2:
Requirement: "Gli admin devono poter disattivare utenti"

User Story:
As an Administrator
I want to deactivate user accounts
So that I can revoke access for departed employees while preserving their historical data

Acceptance Criteria:
- Deactivated users cannot log in
- User data remains in system (soft delete)
- Reactivation possible by admin
- Audit log records deactivation action

Ora trasforma:
Requirement: "I clienti devono ricevere notifiche quando il loro ordine è spedito"

User Story:
```

---

📚 **Best Practices Selezione Esempi**:

**1. Qualità > Quantità**
- 2-3 esempi ben scelti > 10 esempi mediocri
- Ogni esempio deve essere rappresentativo

**2. Diversità**
- Copri casi tipici diversi
- Include edge case se rilevante
- Es: caso semplice + caso complesso

**3. Chiarezza**
- Esempi cristallini, no ambiguità
- Input-output esplicitamente separati
- Formato consistente tra esempi

**4. Rappresentatività**
- Esempi simili a use case reale
- Evita esempi troppo semplici/toy

**5. Progressive Complexity**
- Primo esempio: semplice
- Esempi successivi: più elaborati

---

✏️ **Esercizio: Crea tuo Few-Shot Template**:

**Step 1**: Identifica task ricorrente
- Es: trasformare meeting notes in action items

**Step 2**: Definisci formato output desiderato
```
Action Item:
- Owner: [nome]
- Task: [descrizione]
- Deadline: [data]
- Priority: [H/M/L]
```

**Step 3**: Crea 2-3 esempi
- Usa casi reali (anonimizzati se serve)
- Input effettivo → Output formattato

**Step 4**: Testa template
- Prova con nuovo input
- Verifica consistenza output
- Raffina se necessario

**Step 5**: Salva template riutilizzabile

---

⚠️ **Pitfalls Comuni**:

❌ **Esempi inconsistenti**
- Esempio 1 usa formato A
- Esempio 2 usa formato B
- → LLM confuso

❌ **Troppo pochi esempi per task complesso**
- Task elaborato, solo 1 esempio
- → Output non affidabile

❌ **Esempi non rappresentativi**
- Esempi toy vs use case reale complesso
- → Risultati deludenti su dati veri

✅ **Fix**: Esempi consistenti, numero adeguato, rappresentativi

---

🔑 **Key Takeaways**:
- Few-shot = guidare con esempi
- Formato input-output chiaro essenziale
- 2-3 esempi ben scelti spesso sufficienti
- Crea template riutilizzabili per task ricorrenti
- Few-shot = standardizzazione e consistenza

---

#### 05-role-based.md - Role-Based & Multi-Perspective Prompting

🎯 **Learning Objectives**:
- Padroneggiare role-based prompting
- Usare multi-perspective per analisi complesse
- Creare "panel di esperti" virtuali

📚 **Role-Based Prompting - Base**:

**Cos'è**: Assegnare ruolo/persona specifica all'LLM

**Perché funziona**:
- Attiva pattern linguistici specifici
- Cambia "mindset" dell'output
- Stesso input, prospettive diverse in base a ruolo

💡 **Esempio - Stesso Problema, Ruoli Diversi**:

**Scenario**: "App mobile crashha spesso"

**Role: Developer**
```
Sei uno sviluppatore mobile senior.
Analizza: "App mobile crashha spesso"

Output focus: stack trace, memory leaks, code-level debugging
```

**Role: Product Manager**
```
Sei un Product Manager.
Analizza: "App mobile crashha spesso"

Output focus: user impact, churn risk, priorità fix vs features
```

**Role: Customer Support**
```
Sei un Customer Support Manager.
Analizza: "App mobile crashha spesso"

Output focus: comunicazione utenti, workaround, FAQ, escalation
```

→ Stesso problema, 3 prospettive complementari

---

📚 **Multi-Perspective Prompting**:

**Cos'è**: Chiedere a LLM di assumere multipli ruoli sequenzialmente o simultaneamente

**Pattern 1 - Sequenziale**:
```
Analizza [problema] da 3 prospettive:

1. Come [Ruolo A]: [analisi]
2. Come [Ruolo B]: [analisi]
3. Come [Ruolo C]: [analisi]

Poi sintetizza: raccomandazione che integra tutte le prospettive
```

**Pattern 2 - Panel Discussione**:
```
Simula panel discussione con:
- [Esperto A]: [specialty]
- [Esperto B]: [specialty]
- [Esperto C]: [specialty]

Topic: [domanda/problema]

Ogni esperto argomenta la sua posizione, poi dibattito e conclusione consensus.
```

---

💡 **Esempio Multi-Perspective - PM Decision**:

```
Devo decidere se estendere deadline progetto di 1 mese (+€200K) o tagliare scope.

Analizza da 3 prospettive:

**1. Come Project Manager**:
- Focus: delivery, team, quality
- Considera: morale team, technical debt risk, reputazione
- Raccomandazione + rationale

**2. Come CFO**:
- Focus: finanzials, ROI, budget
- Considera: costi aggiuntivi, opportunità cost, cash flow
- Raccomandazione + rationale

**3. Come Product Owner**:
- Focus: user value, market timing, feature completeness
- Considera: must-have vs nice-to-have, competitor moves, user expectations
- Raccomandazione + rationale

**Synthesis**:
Integra le 3 prospettive e raccomanda decisione finale con trade-off chiari.
```

---

💡 **Esempio Panel Esperti - Service Design**:

```
Simula panel di esperti UX per discutere:
"Dovremmo ridisegnare il nostro onboarding da zero o iterare sull'esistente?"

Panel:
- **UX Researcher**: Data-driven, focus su user insights
- **Interaction Designer**: Usability e design patterns
- **Business Analyst**: Costi, timeline, business impact

Formato discussione:
1. Ogni esperto presenta posizione (2-3 paragrafi)
2. Risposte a concerns degli altri (1 para ciascuno)
3. Voto finale e consensus (o minority report se no agreement)

Mostra dibattito completo.
```

---

📚 **Role-Based per Generazione Contenuti**:

**Use Case**: Stesso contenuto, audience diverse

**Scenario**: Spiegare "Digital Transformation Initiative"

**Role: CEO (C-Level Communication)**:
```
Sei Chief Communication Officer.
Scrivi email CEO all-hands su Digital Transformation Initiative.

Tone: Visionary, inspiring
Focus: Strategic vision, long-term value, cultural change
Lunghezza: 400 parole
Evita: Technical jargon
```

**Role: Tech Lead (Team Communication)**:
```
Sei Engineering Manager.
Scrivi email al team dev su Digital Transformation Initiative.

Tone: Pragmatic, technical
Focus: Architettura, stack, roadmap, skill development
Lunghezza: 500 parole
Include: Technical details, learning resources
```

**Role: Change Manager (Stakeholder Management)**:
```
Sei Change Management Lead.
Scrivi FAQ per line managers su Digital Transformation Initiative.

Tone: Supportive, reassuring
Focus: Team impact, timeline, training, support available
Formato: Q&A (10 domande)
Include: Handling resistance, practical next steps
```

---

💡 **Template: Expert Panel per Decisioni Complesse**:

```
Decision: [la tua decisione]
Options: [A, B, C...]

Expert Panel:
- [Expertise 1]: [nome ruolo + focus area]
- [Expertise 2]: [nome ruolo + focus area]
- [Expertise 3]: [nome ruolo + focus area]

Per ogni esperto:
1. Analisi situazione dal suo punto di vista
2. Raccomandazione (con rationale)
3. Risks identificati dalla sua prospettiva

Cross-perspective synthesis:
- Punti di agreement
- Punti di tensione/trade-off
- Raccomandazione integrata finale

Output: Executive summary decisione (max 300 parole)
```

---

✏️ **Esercizio Pratico**:

**Parte 1: Role Impact**
- Prendi un problema del tuo lavoro
- Analizza come 3 ruoli diversi
- Confronta insights unici per ciascun ruolo

**Parte 2: Panel Decision**
- Decisione complessa da prendere
- Crea panel 3-4 esperti
- Simula discussione
- Estrai raccomandazione finale

**Parte 3: Audience Adaptation**
- 1 messaggio, 3 audience (es: C-level, team, clienti)
- Usa role per adattare comunicazione
- Valuta effectiveness per ciascuna audience

---

📚 **Best Practices**:

**Scelta Ruoli**:
- ✅ Ruoli con expertise complementare
- ✅ Include possibili dissenting voices
- ✅ Numero ottimale: 3-4 (più = confuso)
- ❌ Ruoli troppo simili (redundante)
- ❌ Troppi ruoli (dispersivo)

**Descrizione Ruolo**:
- Sii specifico: "UX Researcher con focus accessibility" > "UX person"
- Include bias/priorità del ruolo
- Es: "CFO risk-averse, focus ROI short-term"

**Synthesis**:
- Sempre concludi con integrazione prospettive
- Non lasciare solo opinioni separate
- Highlight trade-off e raccomandazione

---

⚠️ **Limitazioni**:

❌ **LLM non ha vera expertise**
- "Esperto" è pattern linguistico, non conoscenza reale
- Sempre verifica su domini critici

❌ **Può generare stereotipi**
- "Come CFO" → sempre risk-averse (può non essere vero)
- Consapevolezza che sono simulazioni

✅ **Usa per**:
- Esplorare prospettive
- Identificare blind spots
- Structured thinking
- Non sostituisce veri esperti su decisioni critiche

---

🔑 **Key Takeaways**:
- Role-based = cambiare prospettiva LLM
- Multi-perspective = analisi più ricca e completa
- Expert panel = explore trade-off complessi
- 3-4 ruoli complementari ottimale
- Sempre sintetizzare prospettive diverse
- È simulazione, non vera expertise

---

#### 06-meta-prompting.md - Meta-Prompting: Far Scrivere Prompt a Claude

🎯 **Learning Objectives**:
- Comprendere cos'è meta-prompting
- Saper delegare creazione prompt a LLM
- Iterare e raffinare prompt generati

📚 **Cos'è Meta-Prompting**:

**Definizione**: Chiedere all'LLM di scrivere/ottimizzare prompt per te

**Quando usare**:
- ✅ Non sei sicuro come strutturare prompt complesso
- ✅ Vuoi ottimizzare prompt esistente
- ✅ Task nuovo e non familiare
- ✅ Serve template riutilizzabile

**Workflow**:
1. Descrivi task/obiettivo in linguaggio naturale
2. LLM genera prompt strutturato
3. Testi prompt generato
4. Iteri e raffini se necessario

---

📚 **Pattern 1: Generate Prompt from Scratch**:

```
Sono un [ruolo] e devo [task].

Help me create an effective prompt for this.

Specificazioni:
- Obiettivo: [cosa vuoi ottenere]
- Context: [situazione]
- Output desiderato: [formato/tipo]
- Constraints: [eventuali vincoli]

Genera un prompt strutturato che io possa riutilizzare.
```

💡 **Esempio Pratico - PM**:

```
Sono un Project Manager e devo creare weekly status reports per executive committee.

Help me create an effective prompt per generare questi reports automaticamente.

Specificazioni:
- Obiettivo: Report conciso ma completo per C-level
- Input: Avrò notes sparse del team + metrics da dashboard
- Output: Email professionale, max 400 parole
- Sezioni: Progress, Risks, Next Steps
- Tone: Professionale, data-driven, proactive

Genera prompt riutilizzabile che includa:
1. Role e context
2. Struttura input-output
3. Template formato desiderato
```

**Claude genera**:
```
[GENERATED PROMPT]
Sei un Senior PM esperto in executive communication.

Trasforma i seguenti project updates in executive status report.

INPUT:
Team Notes: [inserire]
Metrics: [inserire]

OUTPUT FORMAT:
Subject: Weekly Status - [Progetto] - Week [N]

📊 Progress:
- [Milestone/% con target comparison]
- [Key achievements questa settimana]

⚠️ Risks & Issues:
- [Top 2-3 risks con impact assessment]
- [Mitigation actions in corso]

➡️ Next Steps:
- [Priority actions prossima settimana]
- [Decisions needed da sponsor]

Tone: Confident ma trasparente su challenges. No surprises.
Max 400 parole.
```

→ Ora hai template pronto!

---

📚 **Pattern 2: Optimize Existing Prompt**:

```
Ho questo prompt ma i risultati non sono ottimali:

[Tuo prompt attuale]

Problemi che sto riscontrando:
- [Issue 1]
- [Issue 2]

Analizza il prompt e suggerisci versione ottimizzata che:
1. [Fix per issue 1]
2. [Fix per issue 2]
3. Migliori [aspetto specifico]

Spiega le modifiche che fai.
```

💡 **Esempio - Prompt Weak → Strong**:

```
Ho questo prompt ma l'output è troppo generico:

"Analizza i rischi del progetto e dimmi cosa dovremmo fare."

Problemi:
- Output vago, non actionable
- No struttura
- Non specifica quali rischi prioritizzare

Ottimizza questo prompt per generare risk analysis utile per PM.
```

**Claude ottimizza**:
```
[OPTIMIZED PROMPT]
Conduci risk analysis del progetto seguendo questo framework:

SCOPE:
- Progetto: [nome]
- Fase attuale: [milestone]
- Timeline remaining: [settimane]
- Budget remaining: [€]

ANALISI:
Per ogni rischio identificato:
1. Descrizione (1 frase)
2. Category: [Technical/Organizational/External/Financial]
3. Probability: [H/M/L] + rationale
4. Impact se si materializza: [H/M/L] + quantifica se possibile
5. Status: [New/Existing/Mitigated]

PRIORITIZATION:
Ordina rischi per (Probability × Impact)

MITIGATION:
Per top 3 rischi:
- Mitigation strategy (specifica)
- Owner (chi la esegue)
- Deadline (quando)
- Trigger points (quando escalate)

OUTPUT:
Tabella summary + paragrafo raccomandazioni per sponsor.
```

→ Molto più strutturato e actionable!

---

📚 **Pattern 3: Create Template Library**:

```
Sono [ruolo] e ho questi task ricorrenti:
1. [Task A]
2. [Task B]
3. [Task C]

Per ciascun task, crea un prompt template riutilizzabile che:
- Segua framework RACE
- Includa placeholder per variabili
- Sia copy-paste ready

Output: 3 prompt templates + guida uso.
```

💡 **Esempio - Funzionale BA**:

```
Sono Business Analyst e ho questi task ricorrenti:
1. Trasformare business requirements in user stories
2. Creare test cases da user stories
3. Gap analysis tra AS-IS e TO-BE

Per ciascun task, crea prompt template RACE-based.

Include:
- Placeholder chiari [da sostituire]
- Esempi input-output
- Note su quando usare il template
```

**Claude genera**:
```
[TEMPLATE 1: Requirements → User Stories]
[R] Sei Business Analyst certificato, esperto Agile.
[A] Trasforma business requirement in user stories con acceptance criteria.
[C]
Feature: [NOME FEATURE]
Business Need: [REQUIREMENT TESTUALE]
Stakeholder: [CHI HA CHIESTO]
Constraints: [VINCOLI TECNICI/BUSINESS]
[E]
Output: User stories formato:
"As a [user type], I want [action] so that [benefit]"
+ Acceptance Criteria (min 3)
+ Priority [H/M/L] + story points estimate

[TEMPLATE 2: User Stories → Test Cases]
[...]

[TEMPLATE 3: Gap Analysis]
[...]
```

---

💡 **Meta-Prompting Iterativo**:

**Step 1**: Chiedi primo prompt
```
Genera prompt per: [task description]
```

**Step 2**: Testa su caso reale

**Step 3**: Feedback
```
Ho testato questo prompt:
[prompt generato]

Funziona bene per [aspetti positivi]
Ma ha problemi su [aspetti negativi]

Raffina il prompt per:
- [Improvement 1]
- [Improvement 2]
```

**Step 4**: Ri-testa versione raffinata

**Step 5**: Ripeti fino a soddisfacente

→ Co-creation iterativa del prompt perfetto

---

✏️ **Esercizio: Build Your Prompt Library**:

**Task 1: Generate**
- Identifica 3 task ricorrenti del tuo lavoro
- Usa meta-prompting per generare template per ciascuno
- Testa su dati reali

**Task 2: Optimize**
- Prendi un tuo prompt che usi abitualmente
- Chiedi a Claude di ottimizzarlo
- Confronta risultati old vs new

**Task 3: Iterate**
- Genera prompt per task complesso nuovo
- Testa
- Chiedi refinement in base a risultati
- Ripeti 2-3 volte
- Documenta versione finale

**Deliverable**: Library di 5+ prompt templates ottimizzati

---

📚 **Best Practices Meta-Prompting**:

**Quando chiedi a Claude di generare prompt**:

✅ **Sii specifico su obiettivo**
- "Genera prompt per status report" → vago
- "Genera prompt per trasformare project notes in executive email 300 parole, formato [X]" → chiaro

✅ **Fornisci esempio input/output**
- Mostra esempio di input che darai
- Mostra esempio di output che vuoi
- Claude creerà prompt per quel mapping

✅ **Specifica constraints**
- Lunghezza, formato, tone, audience
- Più dettagli = prompt migliore

✅ **Chiedi explanations**
- "Spiega perché hai strutturato così"
- Impari prompt engineering mentre lo fai

⚠️ **Non fidarti ciecamente**:
- Sempre testa prompt generato
- Potrebbe non essere perfetto al primo tentativo
- Itera

---

🔑 **Key Takeaways**:
- Meta-prompting = delegare creazione prompt a LLM
- Utile per task nuovi o ottimizzare esistenti
- Pattern: describe task → generate prompt → test → refine
- Crea library di template riutilizzabili
- Iterazione è chiave: primo tentativo raramente perfetto
- Meta-prompting stessa è skill da praticare

---

#### 07-debugging.md - Debugging e Ottimizzazione Prompt

🎯 **Learning Objectives**:
- Riconoscere segnali di prompt debole
- Diagnosticare problemi specifici
- Applicare tecniche di troubleshooting
- Iterare sistematicamente verso prompt ottimale

📚 **Segnali di Prompt Debole**:

**🚩 Red Flags - Output Problems**:
1. **Output generico/vago**
   - Non specifico per tuo contesto
   - Usa placeholder [INSERISCI QUI]
   - Potrebbe applicare a qualsiasi situazione

2. **Output inconsistente**
   - Stesso prompt, risultati molto diversi
   - Format varia ogni volta
   - Tone non uniforme

3. **Output incompleto**
   - Mancano sezioni richieste
   - Troppo breve
   - Non risponde alla domanda

4. **Output off-topic**
   - LLM fraintende task
   - Risponde a domanda diversa
   - Focus sbagliato

5. **Necessita troppe iterazioni**
   - Ogni volta devi correggere
   - Follow-up continui per ottenere ciò che volevi
   - Più tempo = prompt inefficiente

---

📚 **Diagnosi Sistematica**:

**Step 1: Identifica il Problema**

| Sintomo | Probabile Causa | Fix |
|---------|-----------------|-----|
| Output vago | Prompt troppo generico | Aggiungi contesto specifico, esempi |
| Format sbagliato | Expectations poco chiare | Specifica formato esatto, usa few-shot |
| Tone inappropriato | No role/style definito | Aggiungi role, specifica tone/audience |
| Output troppo lungo/corto | No constraint lunghezza | Specifica word/character count |
| Informazioni inventate | No fonti, task oltre capability | Fornisci documenti, abilita web search |
| Ignora parti del prompt | Prompt troppo lungo/complesso | Semplifica, split in sub-tasks |

**Step 2: Applicare Fix Mirato**

💡 **Esempio Debugging - Caso Reale**:

**Prompt Originale (weak)**:
```
"Scrivi un report sul progetto"
```

**Output**: Generico, 2 paragrafi vaghi, inutilizzabile

**Diagnosi**:
- ❌ No contesto
- ❌ No format
- ❌ No audience
- ❌ Task vago

**Fix Iterativo**:

**v2 - Aggiungi Contesto**:
```
"Scrivi un report sul progetto Digital Platform per il cliente ABC. Siamo al 60% completion."
```
→ Migliore ma ancora vago su formato

**v3 - Aggiungi Formato**:
```
"Scrivi executive summary del progetto Digital Platform (cliente ABC, 60% complete).

Formato:
- Progress
- Risks
- Next Steps
Max 300 parole."
```
→ Molto meglio, ma tone ancora non preciso

**v4 - Aggiungi Role e Refina**:
```
Sei Senior PM esperto in executive communication.

Scrivi executive summary progetto Digital Platform per CFO.

Context:
- Cliente: ABC Corp (Fortune 500)
- Budget: €2M
- Status: 60% complete, on track
- Key win questa settimana: migration fase 1 completata
- Upcoming: fase 2 deployment Q1

Format:
📊 Progress: [milestone + %]
⚠️ Risks: [top 2]
➡️ Next: [priority actions]

Tone: Confident, data-driven, conciso
Max 300 parole
No jargon tecnico
```
→ Output professional e preciso!

---

📚 **Checklist Debugging Prompt**:

Quando output non soddisfa, verifica:

**☐ ROLE**
- [ ] Ho specificato ruolo/expertise?
- [ ] Role appropriato per il task?

**☐ ACTION**
- [ ] Task chiaro e specifico?
- [ ] Verbo d'azione preciso (analizza vs "dimmi")?

**☐ CONTEXT**
- [ ] Contesto sufficiente fornito?
- [ ] Vincoli e constraints esplicitati?
- [ ] Background necessario incluso?

**☐ EXPECTATIONS**
- [ ] Formato output definito?
- [ ] Lunghezza specificata?
- [ ] Tone/style indicato?
- [ ] Audience chiara?

**☐ EXAMPLES**
- [ ] Servono esempi (few-shot)?
- [ ] Esempi forniti sono rappresentativi?

**☐ LENGTH**
- [ ] Prompt chiaro ma non verboso?
- [ ] Info essenziale vs nice-to-have separata?

---

💡 **Technique: Prompt Ablation**:

**Cos'è**: Rimuovere/aggiungere componenti uno alla volta per vedere impatto

**Esempio**:
```
Baseline prompt:
"Analizza rischi progetto X. Siamo al mese 5 di 12, 40% complete."

Test 1 - Aggiungi Role:
"Sei PMO Risk Specialist. Analizza rischi progetto X. Mese 5/12, 40% complete."
→ Output più strutturato ✅

Test 2 - Aggiungi Format:
"Sei PMO Risk Specialist. Analizza rischi progetto X (mese 5/12, 40% complete).
Formato: Tabella con rischio, likelihood, impact."
→ Output actionable ✅

Test 3 - Aggiungi Examples:
[Stessa v2 + few-shot example]
→ Format perfettamente consistente ✅
```

Così capisci quale componente ha più impatto.

---

📚 **Common Fixes - Cheat Sheet**:

**Problema: Output troppo generico**
```
❌ Before: "Dammi suggerimenti per il progetto"
✅ After: "Sei PM esperto. Suggerisci 3 azioni concrete per recuperare 2 settimane ritardo su progetto [X]. Focus: re-prioritization scope."
```

**Problema: Format non rispettato**
```
❌ Before: "Scrivi in formato tabella"
✅ After: "Output in markdown table:
| Colonna A | Colonna B | Colonna C |
[Poi few-shot example]"
```

**Problema: Tone sbagliato**
```
❌ Before: [no mention di tone]
✅ After: "Tone: Professionale ma accessibile, per audience non-tecnica. Evita jargon, usa analogie business."
```

**Problema: Troppo lungo/corto**
```
❌ Before: [no length constraint]
✅ After: "Exactly 3 bullet points, max 50 parole ciascuno"
```

**Problema: Hallucinations (inventa info)**
```
❌ Before: "Dammi statistiche su [topic recente]"
✅ After: "Analizza SOLO dati da questi documenti [upload]. Se info non presente, dichiara 'Non disponibile nei documenti forniti'"
```

---

✏️ **Esercizio Debugging Workflow**:

**Parte 1: Audit Tuo Prompt**
1. Prendi prompt che usi regolarmente
2. Usa checklist sopra
3. Identifica mancanze
4. Crea versione v2 migliorata
5. Testa side-by-side

**Parte 2: Fix Broken Prompt**
```
Prompt problematico:
"Help me with stakeholder communication for the project issue"

Task:
1. Identifica tutti i problemi
2. Scrivi diagnosi
3. Crea versione ottimizzata
4. Spiega ogni modifica

Deliverable: Before/After comparison document
```

**Parte 3: Ablation Testing**
1. Parti da prompt minimo funzionante
2. Aggiungi 1 componente alla volta (role, context, format, etc.)
3. Documenta impatto di ciascuno
4. Identifica elementi critici vs opzionali per il tuo use case

---

📚 **Advanced: Prompt Versioning**:

**Strategy**: Mantieni changelog dei tuoi prompt

```
## Status Report Prompt

### v1.0 (2025-01-15)
"Scrivi status report del progetto"
→ Issue: troppo generico

### v2.0 (2025-01-16)
+ Added: Role (Senior PM)
+ Added: Format (3 sections)
→ Issue: tone ancora non adatto a C-level

### v3.0 (2025-01-17)
+ Added: Audience specification (CFO)
+ Added: Tone guidance (data-driven, concise)
+ Added: Length constraint (300 words)
→ Working well!

### v3.1 (2025-01-20)
+ Refined: Emoji usage for sections (visual clarity)
→ CURRENT VERSION
```

Benefici:
- Traccia evoluzione
- Puoi tornare a versione precedente
- Condivisibile con team
- Impari cosa funziona

---

⚠️ **When to Stop Optimizing**:

✅ **Prompt è "good enough" quando**:
- Output soddisfa requisiti 80%+ delle volte
- Necessita minor iteration (<2 follow-up)
- Saving tempo significativo
- ROI positivo (tempo saved > tempo optimization)

❌ **Don't over-optimize**:
- Perfetto è nemico del buono
- Prompt 20-parole che funziona > 500-parole al 5% meglio
- Marginal gains non valgono sempre effort

**Regola 80/20**: 20% effort di optimization → 80% miglioramento. Ulteriore optimization = diminishing returns.

---

🔑 **Key Takeaways**:
- Output problematico = prompt migliorabile
- Diagnosi sistematica > tentativi random
- RACE framework copre maggior parte dei fix
- Ablation testing identifica componenti critici
- Versioning aiuta tracciare miglioramenti
- "Good enough" > perfezione paralizzante
- Debugging prompt è skill iterativa

---

### Modulo 1.3: Esercizi Pratici

#### esercizio-1-ottimizzazione.md - Ottimizzare Prompt Inefficaci

🎯 **Obiettivo Esercizio**:
Trasformare prompt deboli in prompt efficaci applicando framework RACE e CoT

⏱️ **Tempo**: 30 minuti
👤 **Modalità**: Individuale
📦 **Deliverable**: 3 prompt ottimizzati + analisi miglioramenti

---

📚 **Istruzioni**:

Ti verranno forniti 3 prompt inefficaci reali.

Per ciascuno:
1. **Diagnostica** problemi (usa checklist debugging)
2. **Riscrivilo** applicando framework appropriato (RACE, CoT, Few-Shot)
3. **Testa** entrambe versioni con Claude
4. **Documenta** differenze negli output

---

💡 **PROMPT 1: Project Status (PM)**

**Versione Debole**:
```
"Come va il progetto? Dammi un update"
```

**Task**:
- Identifica 5+ problemi
- Riscrivi con framework RACE
- Specifica formato e tone
- Testa e confronta output

**Criteri Successo**:
- Output actionable (non generico)
- Formato professionale
- Pronto per invio a stakeholder
- <5 minuti generazione (no 10 follow-up)

---

💡 **PROMPT 2: Requirements Analysis (Funzionale)**

**Versione Debole**:
```
"Questi sono i requirements del cliente:
[copia-incolla email cliente di 500 parole]

Cosa dovremmo fare?"
```

**Task**:
- Identifica problemi struttura prompt
- Riscrivi con:
  - Role appropriato
  - Task specifico
  - Format output chiaro
  - Considera CoT se necessario
- Confronta output

**Criteri Successo**:
- Output strutturato (no wall of text)
- Actionable next steps
- Considera technical feasibility

---

💡 **PROMPT 3: User Research Synthesis (Service Design)**

**Versione Debole**:
```
"Ho fatto 10 interviste utenti. Help me make sense of them."
```

**Task**:
- Troppo vago! Identifica mancanze
- Riscrivi specificando:
  - Cosa vuoi estrarre (insights? patterns? quotes?)
  - Formato synthesis
  - Output actionable
- Considera few-shot se serve standardizzare
- Testa

**Criteri Successo**:
- Insights chiari e categorizzati
- Evidence-based (citazioni se necessario)
- Raccomandazioni design

---

📝 **Template Documentazione**:

Per ogni prompt, documenta:

```
## PROMPT [N]: [Nome]

### Original (Weak)
[prompt originale]

### Problemi Identificati
1. [Problema 1]
2. [Problema 2]
3. [...]

### Optimized Version
[nuovo prompt]

### Modifiche Applicate
- [Framework usato: RACE/CoT/Few-Shot]
- [Componenti aggiunti]
- [Rationale scelte]

### Output Comparison
**Before**: [summary output debole]
**After**: [summary output ottimizzato]

### Key Learnings
[Cosa hai imparato da questo esercizio]
```

---

✏️ **Bonus Challenge** (se finisci prima):

**Prompt 4 - Multi-Stakeholder Communication**:
```
"Devo comunicare che il progetto è in ritardo"
```

Riscrivilo usando **multi-perspective approach**:
- Come comunicare a: Team, Sponsor, Cliente
- 3 versioni ottimizzate dello stesso messaggio
- Tone e focus diversi per audience

---

🔍 **Peer Review** (ultimi 10 min):

- Scambia i tuoi 3 prompt ottimizzati con vicino
- Testa i suoi prompt
- Dai feedback:
  - ✅ Cosa funziona bene
  - 🔄 Suggerimenti ulteriori miglioramenti
- Discussione gruppo: pattern comuni identificati

---

🔑 **Key Learnings Attesi**:
- Riconoscere pattern di prompt deboli
- Applicare framework sistematicamente
- Vedere impatto concreto di ottimizzazioni
- Sviluppare "occhio critico" per prompt

---

#### esercizio-2-template.md - Creare Template Personalizzati

🎯 **Obiettivo Esercizio**:
Creare 2 prompt template riutilizzabili per task ricorrenti del proprio ruolo

⏱️ **Tempo**: 30 minuti
👤 **Modalità**: Individuale → Condivisione gruppo
📦 **Deliverable**: 2 template pronti all'uso + guida utilizzo

---

📚 **Istruzioni**:

**Step 1: Identifica Task Ricorrenti** (5 min)
- Pensa a 2 task che fai regolarmente (settimanale/mensile)
- Devono essere:
  - Ripetitivi (stesso processo)
  - Time-consuming (almeno 30 min normalmente)
  - Standardizzabili (output simile ogni volta)

💡 **Esempi per Ruolo**:
- **PM**: Weekly status report, Risk assessment, Stakeholder update
- **PMO**: Portfolio review, Project audit, Resource allocation
- **Service Design**: User research synthesis, Journey mapping, Design critique
- **Funzionale**: Requirements elicitation, User story creation, Test case generation

---

**Step 2: Analizza Task** (5 min)

Per ciascun task, rispondi:
1. **Input tipico**: Che dati/info hai disponibili?
2. **Output desiderato**: Cosa vuoi ottenere esattamente?
3. **Variabili**: Cosa cambia ogni volta? (da parametrizzare)
4. **Costanti**: Cosa è sempre uguale? (da hard-code in template)
5. **Formato**: Struttura output ideale?

---

**Step 3: Costruisci Template** (15 min)

Per ciascun template, includi:

**A) Metadata**
```
TEMPLATE: [Nome Template]
USE CASE: [Quando usarlo]
AUTHOR: [Tu]
LAST UPDATED: [Data]
```

**B) Prompt Structure**
```
[ROLE]
Sei [ruolo specifico]...

[ACTION]
[Task specifico]...

[CONTEXT - con placeholder]
- Variabile 1: [INSERIRE_X]
- Variabile 2: [INSERIRE_Y]
- Costante: [valore fisso]

[EXPECTATIONS]
Format:
[struttura precisa]

Tone: [...]
Length: [...]
```

**C) Usage Guide**
```
## How to Use This Template

1. Replace [PLACEHOLDER_X] with [spiegazione]
2. Replace [PLACEHOLDER_Y] with [spiegazione]
3. Review output e adjust se necessario

## Example Fill
[Mostra esempio compilato]
```

---

💡 **Esempio Template - PM Status Report**:

```
TEMPLATE: Weekly Status Report Generator
USE CASE: Generate executive status update ogni venerdì
AUTHOR: [Nome]
VERSION: 1.0

---

Sei un Senior Project Manager esperto in executive communication.

Genera weekly status report per project steering committee.

CONTEXT:
- Project Name: [PROJECT_NAME]
- Week Number: [WEEK_N]
- Completion %: [PERCENTAGE]
- Key Achievements this week: [LIST_ACHIEVEMENTS]
- Blockers/Issues: [LIST_ISSUES]
- Planned next week: [LIST_NEXT_STEPS]

OUTPUT FORMAT:
Subject: Weekly Status - [PROJECT_NAME] - Week [WEEK_N]

📊 PROGRESS
- [% completion vs target]
- [Key milestone updates]

⚠️ RISKS & ISSUES
- [Top 2-3 con mitigation]

➡️ NEXT WEEK
- [Priority actions]
- [Decisions needed]

TONE: Professional, data-driven, proactive
LENGTH: 300-400 words max
AUDIENCE: C-level (limited technical detail)

---

## HOW TO USE

1. Replace [PROJECT_NAME] with your project name
2. Replace [WEEK_N] with current week number
3. Fill [LIST_ACHIEVEMENTS] with bullet points from team updates
4. Fill [LIST_ISSUES] with current blockers
5. Fill [LIST_NEXT_STEPS] with planned actions
6. Run prompt → review → send

## EXAMPLE FILL
[...]
```

---

**Step 4: Testa Template** (5 min)

- Usa template su caso reale
- Verifica output
- Raffina se necessario
- Documenta versione finale

---

💡 **Template Ideas per Ruolo**:

**PM Templates**:
1. Risk Assessment Generator
2. Stakeholder Communication (bad news)
3. Change Request Evaluation
4. Lessons Learned Synthesis

**PMO Templates**:
1. Project Health Check
2. Portfolio Dashboard Generator
3. Resource Conflict Resolution
4. Governance Compliance Check

**Service Design Templates**:
1. User Interview Synthesis
2. Usability Test Report
3. Design Critique Facilitator
4. Accessibility Audit

**Funzionale Templates**:
1. Business Requirements → User Stories
2. Test Case Generator
3. API Documentation from Specs
4. Gap Analysis (AS-IS vs TO-BE)

---

**Step 5: Condivisione (ultimi 5 min)**:

**Peer Exchange**:
- Condividi 1 dei tuoi template
- Ricevi 1 template da collega (diverso ruolo se possibile)
- Prova a usare template altrui
- Feedback cross-role

**Group Discussion**:
- Quale template pensate userete davvero?
- Quali pattern funzionano per più ruoli?
- Come mantenere template library aggiornata?

---

📦 **Deliverable Finale**:

Documento contenente:

```
# MY PROMPT TEMPLATE LIBRARY

## Template 1: [Nome]
[Full template con metadata, prompt, usage guide]

## Template 2: [Nome]
[Full template con metadata, prompt, usage guide]

## Lessons Learned
- [Cosa ho imparato creando questi template]
- [Come penso di usarli nel lavoro quotidiano]
- [Idee per futuri template]
```

---

🔑 **Key Learnings Attesi**:
- Identificare opportunità di automation con prompt
- Strutturare template riutilizzabili
- Parametrizzare variabili vs costanti
- Creare biblioteca personale di prompt
- Risparmiare tempo su task ricorrenti

---

🎯 **Post-Workshop**:
- Salva template in repository accessibile (Notion, Confluence, etc.)
- Itera template basandoti su utilizzo reale
- Condividi con team (best practice)
- Espandi library con nuovi template

---

## GIORNO 2: Advanced LLM Features & Professional Workflows

> **Provider-Agnostic Design**: Tutti i concetti applicabili a Claude, ChatGPT, Gemini, e altri LLM moderni

### Modulo 2.1: Workspace Persistenti & Context Management

#### 01-workspace-concepts.md - Workspace Patterns Universali

🎯 **Learning Objectives**:
- Comprendere il concetto di workspace persistente (indipendente da provider)
- Comparare implementazioni: Claude Projects, ChatGPT Custom GPTs, Gemini Gems
- Scegliere tool appropriato per use case specifico

📚 **Contenuti**:
- **Cos'è un workspace persistente**:
  - Context riutilizzabile tra sessioni
  - Custom instructions permanenti
  - Knowledge base associata
  - Multi-conversation management
  - Perché serve: efficienza, consistenza, specializzazione

- **Comparazione Provider**:
  - **Claude Projects**:
    - Knowledge base (file upload multipli)
    - Custom instructions per Project
    - Multi-chat nello stesso contesto
    - 1M token context window
    - Best for: document-heavy work, long context
  - **ChatGPT Custom GPTs**:
    - Custom instructions + tone
    - Actions (API calls, no-code)
    - File upload e code interpreter
    - Best for: automation, API integration
  - **Gemini Gems**:
    - Instructions personalizzate
    - Google Workspace grounding
    - Multimodal nativo
    - Best for: Google ecosystem users

💡 **Decision Tree**:
- Se lavori principalmente con documenti lunghi → Claude Projects
- Se hai bisogno API/integrations → ChatGPT GPTs
- Se usi Google Workspace → Gemini Gems
- Se vuoi massima flessibilità → usa multipli per task diversi

📚 **Use Cases per Ruolo**:
- **PM**: Project-specific workspace (charter, risks, stakeholders)
- **PMO**: Portfolio workspace con dati tutti i progetti
- **Service Design**: Research workspace con user interviews
- **Funzionale**: Requirements workspace con specs e docs

✏️ **Esercizio**:
- Identifica 2-3 contesti ricorrenti nel tuo lavoro
- Scegli provider appropriato per ciascuno
- Outline cosa includeresti in workspace

🔑 **Key Takeaways**:
- Workspace = context specializzato riutilizzabile
- Ogni provider ha punti di forza diversi
- Non sei limitato a un solo tool
- Setup iniziale ripaga in efficienza long-term

---

#### 02-custom-instructions.md - System Prompts Efficaci

🎯 **Learning Objectives**:
- Distinguere system prompt da user prompt
- Scrivere custom instructions efficaci cross-provider
- Creare template riutilizzabili per ruoli

📚 **Contenuti**:
- **System Prompts vs User Prompts**:
  - System: definisce "chi è" l'AI, comportamento permanente
  - User: task specifico, query singola
  - Interazione: system + user = risposta contestualizzata

- **Come Funzionano per Provider**:
  - **Claude Custom Instructions** (Projects):
    - Campo dedicato in Project settings
    - Applicato a tutte le chat del Project
    - Max ~10K token
  - **ChatGPT Custom Instructions** (Settings + GPTs):
    - "What would you like ChatGPT to know about you?"
    - "How would you like ChatGPT to respond?"
    - GPTs: instructions + examples nella configurazione
  - **Gemini Instructions** (Gems):
    - Personality e behavior definition
    - Focus area specialization

📚 **Best Practices Scrittura**:
- **RACE applicato a instructions**:
  - **Role**: "Sei [profession] esperto in [domain]"
  - **Action patterns**: "Quando ti chiedo X, fai sempre Y"
  - **Context**: "Background su di me: [ruolo, industry, style]"
  - **Expectations**: "Rispondi sempre con: [formato, tone, lunghezza]"

💡 **Template per Ruolo**:

**PM Template**:
```
You are a Senior Project Manager with 10+ years experience in [industry].

About my context:
- I manage [type] projects with [team size]
- Key stakeholders: [list]
- Methodology: [Agile/Waterfall/Hybrid]

When I ask for:
- Status reports: Use format [Progress | Risks | Next Steps], max 400 words, tone: confident and data-driven
- Risk analysis: Categorize by [Tech/Org/External], rate H/M/L, always suggest mitigation
- Stakeholder communication: Adapt tone to audience (C-level: exec summary, team: detailed)

Default behavior:
- Be proactive: suggest next steps
- Be specific: no vague recommendations
- Be actionable: clear owners and deadlines
- Ask clarifying questions when context insufficient
```

**PMO Template**:
```
You are a PMO Director specializing in portfolio management and governance.

Context:
- I oversee portfolio of [N] projects
- Focus areas: governance, resource optimization, reporting
- Audience: C-level executives and project teams

Response patterns:
- Portfolio views: Always show RAG status, budget vs actual, timeline variance
- Governance: Reference [framework name] standards
- Reports: Executive-friendly (minimal jargon, data visualization-ready)

Default format:
- Start with TL;DR executive summary
- Use tables/structured data when applicable
- Highlight risks and opportunities
- Quantify impact when possible
```

**Service Design Template**:
```
You are a Senior Service Designer with expertise in [domain].

My work:
- User research synthesis
- Journey mapping
- Usability testing
- Design system work

When I share:
- Research data: Extract insights, patterns, themes with supporting quotes
- User feedback: Categorize by impact (H/M/L), identify pain points and delighters
- Design critiques: Use [framework] for structured feedback

Tone:
- Analytical but accessible
- Evidence-based (always reference source)
- User-centric language
- Balanced (pros and cons)
```

**Funzionale/BA Template**:
```
You are a Senior Business Analyst certified in [certification].

Context:
- I work on requirements elicitation and documentation
- Stakeholders: business users, dev teams, product owners
- Output: user stories, test cases, process flows

Standards:
- User stories: "As a [role] I want [action] so that [benefit]" + acceptance criteria
- Requirements: Follow [standard] format
- Test cases: Given-When-Then format

Default behavior:
- Ask clarifying questions for ambiguous requirements
- Identify edge cases and dependencies
- Suggest acceptance criteria
- Flag potential gaps or conflicts
```

✏️ **Esercizio: Scrivi le Tue Custom Instructions**:
1. Scegli provider che userai
2. Compila template per il tuo ruolo
3. Personalizza con:
   - Tuo contesto specifico
   - Format output preferiti
   - Tone desiderato
   - Pattern ricorrenti
4. Testa con 3 query tipiche
5. Itera e raffina

⚠️ **Common Pitfalls**:
- ❌ Troppo generico: "Aiutami con il mio lavoro"
- ❌ Troppo lungo: >2000 parole (LLM perde focus)
- ❌ Contraddittorio: "Sii conciso" + "Spiega tutto in dettaglio"
- ✅ Specifico, bilanciato, testabile

🔑 **Key Takeaways**:
- Custom instructions = system prompt riutilizzabile
- RACE framework applicabile
- Template salvano tempo
- Itera basandoti su utilizzo reale

---

#### 03-knowledge-base.md - Document Management Strategies

🎯 **Learning Objectives**:
- Caricare e organizzare knowledge base efficacemente
- Comprendere limiti e best practices per provider
- Strategie multi-document analysis

📚 **Contenuti**:
- **Concetto: Persistent Document Context**:
  - Upload file una volta, disponibili in tutte le chat workspace
  - LLM può referenziare senza re-upload
  - RAG (Retrieval Augmented Generation) basics

📚 **Formati Supportati per Provider**:
- **Comuni a tutti**: PDF, TXT, DOCX, CSV, MD, code files
- **Claude**: + images (PNG, JPG), XLSX
- **ChatGPT**: + images, audio (con Whisper), video (frame extraction in beta)
- **Gemini**: + multimodal nativo (image, audio, video)

📚 **Limiti per Provider**:
| Provider | Max File Size | Max Files | Total Context |
|----------|---------------|-----------|---------------|
| Claude Projects | 32MB per file | 100+ files | 1M tokens (~3000 pages) |
| ChatGPT (GPT-4) | 25MB per file | 20 files/chat | 128K tokens (~400 pages) |
| Gemini Pro | 20MB per file | Variable | 1M tokens |

💡 **Upload Strategies**:
- **Organizzazione by type**:
  - Core docs (sempre rilevanti): charter, glossary, team roster
  - Reference docs (consulta quando serve): specs, standards, policies
  - Data docs (periodicamente aggiornati): reports, metrics, logs

- **Naming conventions**:
  - Usa nomi descrittivi: `project-charter-v2.pdf` not `doc1.pdf`
  - Include date se rilevante: `status-report-2025-01-15.pdf`
  - Categorizza con prefissi: `REQ_` for requirements, `TEST_` for test docs

📚 **RAG Basics** (per non-tecnici):
- Come funziona:
  1. Upload documento
  2. Sistema lo "chunka" e indicizza
  3. Quando fai query, trova chunk rilevanti
  4. LLM risponde basandosi su quei chunk
- Implicazioni:
  - Query specifiche → risultati migliori
  - Documenti strutturati → retrieval più accurato
  - Troppi documenti → possibile "noise"

💡 **Case Study PM**:
```
Project Knowledge Base Setup:

Core Docs (sempre loaded):
- project-charter.pdf (10 pages)
- stakeholder-analysis.xlsx (5MB)
- risk-register.pdf (8 pages)
- team-directory.csv (50 rows)
- project-glossary.md (200 terms)

Reference Docs (load quando serve):
- requirements-spec-v3.pdf (150 pages)
- architecture-design.pdf (80 pages)
- test-plan.pdf (40 pages)

Data Docs (update weekly):
- status-report-YYYY-MM-DD.pdf
- burndown-chart-YYYY-MM-DD.png
- issues-log-latest.csv

Total: ~15 files, ~50MB, ~400 pages → fits comfortably in Claude Project
```

✏️ **Esercizio: Design Your KB**:
1. Lista documenti che consulti regolarmente
2. Categorizza: Core / Reference / Data
3. Verifica limiti provider scelto
4. Crea naming convention
5. Upload e testa query

⚠️ **Best Practices**:
- ✅ Clean documents: rimuovi header/footer ripetitivi
- ✅ Structured content: headings, sections chiare
- ✅ Aggiorna periodicamente: rimuovi obsoleti
- ✅ Test retrieval: verifica che LLM trova info corrette
- ❌ Non caricare tutto: più docs ≠ meglio (signal-to-noise ratio)

🔑 **Key Takeaways**:
- KB ben organizzata = efficienza 10x
- Ogni provider ha limiti diversi
- Quality > quantity nei documenti
- Naming e structure aiutano retrieval

---

#### 04-context-optimization.md - Advanced Context Management

🎯 **Learning Objectives**:
- Ottimizzare uso context window (richiamo Giorno 1 con applicazioni pratiche)
- Multi-session strategies
- Quando e come fare summarization

📚 **Contenuti**:
- **Context Window Review**:
  - Giorno 1: teoria (1M token = ~3000 pages)
  - Giorno 2: application pratica in workspace

📚 **Strategie Cross-Provider**:

**1. Summarization Workflows**:
```
Scenario: Conversazione lunga (>50 messaggi), contesto degradante

Strategia:
1. Ogni 20-30 messaggi, chiedi: "Riassumi i key points di questa conversazione"
2. Salva summary
3. Nuova chat, iniza con: "Ecco il contesto dalle conversazioni precedenti: [summary]. Continuiamo da qui."

Quando:
- Long research sessions
- Multi-day projects
- Troubleshooting complessi
```

**2. Multi-Session Strategies**:
```
Pattern A - Session Handoff:
End of Session 1:
"Genera handoff summary per prossima sessione. Include: decisioni prese, open questions, next steps."

Start of Session 2:
"Ecco handoff da sessione precedente: [paste]. Dove eravamo rimasti?"

Pattern B - Checkpoint System:
Ogni milestone:
"Checkpoint: summary progresso, decisioni, learnings finora"
Salva come doc in KB → disponibile in future sessioni
```

**3. Context Prioritization**:
```
Quando context si riempie, prioritizza:
P0 - Critical: custom instructions, core KB docs
P1 - High: current task context, recent messages
P2 - Medium: related background info
P3 - Low: tangential discussions

Strategia: Se vicino a limit, rimuovi P3, condensa P2
```

💡 **Template: Context Budget**:
```
Project Workspace Context Budget (Claude 1M tokens):

Reserved (sempre loaded):
- Custom instructions: ~2K tokens
- Core KB (5 docs): ~50K tokens
- Current chat history: ~20K tokens

Available for tasks: ~928K tokens

Usage tracking:
- Week 1: 15% full (status reports, planning)
- Week 2: 35% full (+ requirements analysis)
- Week 3: Summarize + reset → back to 20%
```

✏️ **Esercizio: Context Audit**:
1. Prendi una tua chat/workspace lunga
2. Identifica cosa sta occupando context
3. Cosa è essential vs nice-to-have?
4. Pratica summarization
5. Restart chat con summary → compare quality

🔑 **Key Takeaways**:
- Context window è risorsa finita
- Summarization > nuova chat quando si riempie
- Prioritizza critical context
- Checkpoint regolari salvano lavoro

---

#### 05-hands-on-workspace.md - Workshop Pratico: Setup Workspace

🎯 **Obiettivo Esercizio**:
Creare e configurare 1 workspace completo per task ricorrente del proprio ruolo

⏱️ **Tempo**: 45 minuti
👤 **Modalità**: Individuale con checkpoints gruppo
📦 **Deliverable**: 1 workspace configurato e testato

📚 **Istruzioni Step-by-Step**:

**Step 1: Scegli Use Case** (5 min)
- Identifica task ricorrente (weekly/monthly)
- Esempi:
  - PM: Weekly status reporting
  - PMO: Portfolio health review
  - Service Design: User research synthesis
  - Funzionale: Requirements documentation

**Step 2: Scegli Provider** (5 min)
- Basandoti su decision tree (modulo 01)
- Considera:
  - Tool che già usi
  - Limiti (file size, numero docs)
  - Feature specifiche necessarie

**Step 3: Raccogli Documenti** (10 min)
- Lista 5-10 docs rilevanti per use case
- Categorizza: Core / Reference / Data
- Verifica dimensioni totali vs limiti provider

**Step 4: Scrivi Custom Instructions** (15 min)
- Usa template da modulo 02
- Personalizza per use case
- Include:
  - Role definition
  - Output format preferences
  - Tone and style
  - Recurring patterns

**Step 5: Setup & Upload** (5 min)
- Crea workspace/Project/GPT/Gem
- Upload documenti
- Salva custom instructions
- Naming: descrittivo e chiaro

**Step 6: Test** (10 min)
- 3 query tipiche per il tuo use case
- Valuta:
  - ✅ Output rispetta format
  - ✅ Tone appropriato
  - ✅ Referenzia docs correttamente
  - ✅ Actionable e utile
- Itera instructions se necessario

---

💡 **Esempio Completo - PM Status Report Workspace**:

```
Provider: Claude Project
Nome: "Weekly Status Reports - Project Phoenix"

Custom Instructions:
---
You are a Senior PM for Project Phoenix (enterprise CRM migration).

Context:
- Client: TechCorp (Fortune 500)
- Timeline: 12 months, currently month 7
- Team: 15 people (8 dev, 3 QA, 2 design, 2 PM)
- Methodology: Agile (2-week sprints)

When I ask for status report:
1. Review latest docs in KB (sprint report, issues log, metrics)
2. Generate in format:
   Subject: Weekly Status - Project Phoenix - Week [N]

   📊 PROGRESS
   - % completion vs target
   - Sprint accomplishments (3-5 bullets)

   ⚠️ RISKS & BLOCKERS
   - Top 2-3 with severity and mitigation

   ➡️ NEXT WEEK
   - Planned deliverables
   - Decisions needed from sponsor

3. Tone: Confident, data-driven, transparent
4. Length: 300-400 words max
5. Audience: Steering committee (C-level, limited tech detail)

Default: Be proactive, flag issues early, suggest solutions
---

Knowledge Base (8 files):
1. project-charter.pdf (15 pages)
2. stakeholder-analysis.xlsx (stakeholder list, communication prefs)
3. risk-register.pdf (updated monthly)
4. sprint-report-current.pdf (updated every 2 weeks)
5. issues-log.csv (updated daily by team)
6. kpi-dashboard.png (screenshot updated weekly)
7. team-roster.md (roles, contacts)
8. project-glossary.md (acronyms, technical terms)

Total: ~45MB, ~180 pages → fits in Claude Project

Test Queries:
1. "Generate this week's status report" → ✅ Correct format, referenced sprint-report and issues-log
2. "What are top 3 risks right now?" → ✅ Pulled from risk-register, added mitigation suggestions
3. "Draft email to sponsor about timeline slip" → ✅ Appropriate tone, clear ask
```

---

**Checkpoint Gruppo** (durante esercizio):
- 15 min: Tutti hanno scelto use case e provider?
- 30 min: Instructions scritte, qualcuno vuole feedback?
- 40 min: Test completati, problemi?

**Peer Review** (ultimi 10 min):
- Scambia workspace access (se possibile) o screenshot
- Feedback:
  - ✅ Custom instructions chiare?
  - ✅ KB ben organizzata?
  - ✅ Test queries rappresentative?
  - 💡 Suggerimenti miglioramento

---

🔑 **Key Learnings Attesi**:
- Workspace setup richiede upfront thinking
- Custom instructions ben scritte = 80% successo
- KB organization critica
- Test e iterate essenziali
- ROI: 30 min setup → risparmio ore/settimana

**Post-Workshop**:
- Usa workspace per 1 settimana
- Traccia tempo risparmiato
- Raffina instructions basandoti su uso reale
- Considera creare 2-3 workspace per contesti diversi

---

### Modulo 2.2: Generazione Contenuti Avanzati

#### 01-interactive-outputs.md - Contenuti Modificabili e Interattivi

🎯 **Learning Objectives**:
- Comprendere differenza tra static text e interactive outputs
- Comparare Claude Artifacts, ChatGPT Canvas, Gemini capabilities
- Scegliere tool appropriato per tipo di output

📚 **Contenuti**:
- **Concetto: Interactive vs Static**:
  - Static: Testo in chat, copy-paste necessario
  - Interactive: Contenuto in panel separato, modificabile inline, versionabile
  - Perché importa: editing, iteration, professional delivery

📚 **Claude Artifacts**:
- **Cos'è**: Contenuti generati in panel separato, full-screen, modificabili
- **Tipi supportati**:
  - **Documents**: Markdown, structured content
  - **Code**: HTML, CSS, JavaScript, Python, React components
  - **Diagrams**: Mermaid (flowcharts, sequence, ER diagrams)
  - **Data viz**: Charts con React/SVG
  - **Interactive demos**: React components funzionanti

💡 **Demo Claude Artifacts**:
```
Prompt: "Crea flowchart del processo approvazione expense report usando Mermaid"

Output: Artifact with Mermaid code
- Visualizza diagram immediatamente
- Edita code → preview real-time
- Download come PNG/SVG
- Condividi link (se public)

Use case PM: Process documentation, workflow diagrams, decision trees
```

📚 **ChatGPT Canvas**:
- **Cos'è**: Editing collaborativo per documenti e code
- **Features**:
  - Documento/code in sidebar
  - Edit inline suggestions
  - Versioning (undo/redo)
  - Selection-based edits: seleziona paragrafo → "make more concise"

💡 **Demo ChatGPT Canvas**:
```
Prompt: "Scrivi proposal per nuovo project management tool"

Output: Canvas opens with document
- Iterative editing: "Expand section 2", "Make tone more formal"
- Inline comments e suggestions
- Version history
- Export formats

Use case: Draft documents, collaborative writing, iterative refinement
```

📚 **Gemini Multimodal Outputs**:
- **Capabilities**:
  - Multimodal input → multimodal output
  - Image generation (dove disponibile, integrato con Imagen)
  - Data visualization con Google Charts
  - Google Workspace integration (Docs, Sheets, Slides generation)

💡 **Comparazione Quick Reference**:

| Feature | Claude Artifacts | ChatGPT Canvas | Gemini |
|---------|------------------|----------------|--------|
| **Best For** | Diagrams, code, structured docs | Collaborative writing | Google Workspace users |
| **Output Types** | Mermaid, React, Markdown, code | Documents, code | Docs/Sheets/Slides |
| **Editing** | Code-level | Inline natural language | Via Workspace apps |
| **Versioning** | Manual (regenerate) | Built-in undo/redo | Via Workspace history |
| **Sharing** | Link (if public) | Copy/paste | Direct to Drive |
| **Interactivity** | React components run | Static (no code execution) | Via Apps Script |

💡 **Use Cases per Ruolo**:

**PM - Project Manager**:
- **Claude**: Gantt charts (Mermaid), RACI matrices, risk heatmaps
- **ChatGPT**: Project charters, status reports, proposals
- **Gemini**: Auto-populate Google Sheets with project data

**PMO - Portfolio Management**:
- **Claude**: Portfolio dashboards (React viz), dependency diagrams
- **ChatGPT**: Executive summaries, policy documents
- **Gemini**: Aggregate data from multiple Sheets → master dashboard

**Service Design**:
- **Claude**: User journey maps (Mermaid), wireframes (HTML/CSS), flowcharts
- **ChatGPT**: Research reports, design briefs
- **Gemini**: Collaborative design docs in Google Docs

**Funzionale - Business Analyst**:
- **Claude**: Process flows (BPMN via Mermaid), ER diagrams, state machines
- **ChatGPT**: Requirements documents, test plans
- **Gemini**: Requirements traceability matrix in Sheets

✏️ **Esercizio: Generate 3 Different Outputs**:
1. **Claude Artifact**: Crea process flowchart per tuo workflow tipico
2. **ChatGPT Canvas** (se hai accesso): Scrivi brief/report, itera 3 volte
3. **Gemini** (se usi Google): Genera structured data in Sheets

Confronta:
- Quale tool più veloce per quale tipo?
- Quality output?
- Ease of editing?

🔑 **Key Takeaways**:
- Interactive outputs = game changer per deliverables professionali
- Claude Artifacts eccelle in diagrammi e code
- ChatGPT Canvas ottimo per iterative writing
- Gemini integra perfettamente con Google Workspace
- Usa tool giusto per job giusto

---

#### 02-structured-outputs.md - JSON, XML e Format Consistency

🎯 **Learning Objectives**:
- Generare output strutturati (JSON, XML, CSV, YAML)
- Garantire consistency formato cross-provider
- Use cases data extraction e integration

📚 **Contenuti**:
- **Perché Structured Outputs**:
  - Parsing automatico
  - API integration
  - Database import
  - Template riutilizzabili
  - No ambiguità formato

📚 **JSON Mode** (tutti i provider):

**Claude**:
```json
Prompt: "Extract project info in JSON format:
{
  "project_name": "",
  "status": "",
  "completion_percentage": 0,
  "risks": [{"risk": "", "severity": "", "mitigation": ""}]
}

From this document: [paste doc]"
```

**ChatGPT** (JSON mode API, o via prompt):
```json
Prompt: "Output ONLY valid JSON, no explanation:
Schema:
{
  "tasks": [
    {"title": "string", "owner": "string", "deadline": "YYYY-MM-DD", "priority": "H|M|L"}
  ]
}

Extract from: [text]"
```

**Gemini**:
```json
Similar prompting, può anche generare Apps Script per Sheets integration
```

💡 **Altri Formati Utili**:

**CSV** (data tables):
```
Prompt: "Generate CSV with columns: Task, Owner, Status, Due Date
Include 10 sample tasks for project onboarding"

Output:
Task,Owner,Status,Due Date
"Setup dev environment","John Doe","In Progress","2025-01-20"
"Create design mockups","Jane Smith","Not Started","2025-01-25"
...
```

**Markdown Tables** (reports):
```
Prompt: "Compare 3 project management tools in markdown table:
Columns: Tool, Price, Best For, Limitations"

Output:
| Tool | Price | Best For | Limitations |
|------|-------|----------|-------------|
| Jira | $7/user/mo | Agile teams | Complex setup |
...
```

**YAML** (config files):
```
Prompt: "Generate YAML config for CI/CD pipeline:
- Build step
- Test step
- Deploy step
Include common parameters"
```

📚 **Consistency Strategies**:

**Strategy 1: Schema Definition**:
```
System instruction:
"When asked for structured output, ALWAYS use this schema:
[define exact schema]
Never deviate. If data missing, use null or empty string."
```

**Strategy 2: Few-Shot**:
```
Prompt:
"Extract project info following these examples:

Example 1:
Input: "Project Alpha is 60% complete, lead by John"
Output: {"name": "Alpha", "completion": 60, "lead": "John"}

Example 2:
Input: "Beta project just started, Sarah is PM"
Output: {"name": "Beta", "completion": 0, "lead": "Sarah"}

Now extract from: [your input]"
```

**Strategy 3: Validation Loop**:
```
Workflow:
1. Generate structured output
2. Parse with code/tool (e.g., JSON.parse())
3. If error → ask LLM to fix
4. Repeat until valid
```

💡 **Use Cases per Ruolo**:

**PM - Data Extraction**:
```
From unstructured status email → JSON:
{
  "sprint": 15,
  "completed_stories": 23,
  "blockers": [
    {"issue": "API integration delay", "impact": "High", "owner": "DevTeam"}
  ],
  "next_sprint_commitment": 25
}

Use: Import in dashboard tool, trend analysis
```

**PMO - Portfolio Aggregation**:
```
From 10 project reports → CSV:
Project,RAG,Budget_Used_%,Timeline_Variance_Days,Top_Risk
Alpha,Green,78,0,None
Beta,Amber,65,-5,Resource availability
...

Use: Import in Excel/Tableau for portfolio view
```

**Service Design - Research Data**:
```
From user interviews → JSON:
{
  "participant_id": "P001",
  "role": "End User",
  "pain_points": ["Long load time", "Confusing navigation"],
  "delighters": ["Quick checkout"],
  "priority_features": ["Mobile app", "Saved preferences"]
}

Use: Aggregate across participants, pattern analysis
```

**Funzionale - Requirements Traceability**:
```
From requirements doc → XML:
<requirements>
  <requirement id="REQ-001">
    <title>User Authentication</title>
    <priority>High</priority>
    <status>Approved</status>
    <test_cases>
      <test_case id="TC-001">Login with valid credentials</test_case>
      <test_case id="TC-002">Login with invalid credentials</test_case>
    </test_cases>
  </requirement>
</requirements>

Use: Import in ALM tool, traceability matrix
```

✏️ **Esercizio: Structured Data Pipeline**:
1. Prendi documento non strutturato (email, report, meeting notes)
2. Definisci schema JSON/CSV appropriato
3. Prompt LLM per extraction
4. Valida output (parsing)
5. Itera se errori
6. Deliverable: Clean structured data

⚠️ **Common Pitfalls**:
- ❌ Schema ambiguo: "date" → "2025-01-15" or "15/01/2025" or "Jan 15"? Specifica format
- ❌ No validation: Assume output è valid → parsing fails
- ❌ Troppo complesso: Schema con 50 nested fields → errors
- ✅ Start simple, validate, iterate

🔑 **Key Takeaways**:
- Structured outputs = integration e automation
- JSON mode disponibile cross-provider
- Schema definition + few-shot = consistency
- Always validate programmatically
- Use cases: data extraction, API, reporting

---

#### 03-content-generation.md - Documenti, Presentazioni, Diagrammi

🎯 **Learning Objectives**:
- Generare documenti professionali pronti all'uso
- Creare presentazioni strutturate
- Produrre diagrammi tecnici e visualizzazioni
- Code generation basics per non-developers

📚 **Contenuti**:

**1. Documenti Professionali**:

💡 **Template-Based Generation**:
```
Prompt framework:
"Generate [document type] following this structure:
[paste template outline]

Content for:
- Section 1: [brief for content]
- Section 2: [brief for content]
...

Style: [formal/technical/exec summary]
Length: [X pages/words]
Audience: [who will read this]"
```

**Esempi per Ruolo**:

**PM - Project Charter**:
```
Prompt:
"Generate project charter for [project name]:

Structure:
1. Executive Summary (1 para)
2. Business Case (problem, solution, benefits)
3. Scope (in-scope, out-of-scope)
4. Timeline (phases, milestones)
5. Budget (high-level breakdown)
6. Risks (top 5 with mitigation)
7. Success Criteria (measurable)
8. Stakeholders (RACI)

Context:
- Project: CRM migration
- Duration: 12 months
- Budget: €2M
- Stakeholders: IT Director (sponsor), Sales VP, 3 dept heads

Style: Formal, executive-friendly
Length: 5-6 pages"
```

**PMO - Governance Policy**:
```
Prompt:
"Write project governance policy document:

Sections:
1. Purpose and Scope
2. Roles and Responsibilities
3. Decision Authority Matrix
4. Gate Review Process
5. Reporting Requirements
6. Escalation Procedures
7. Compliance and Audit

Reference: [attach existing policy if available]
Style: Policy document (clear, authoritative)
Length: 10 pages"
```

**Service Design - Research Report**:
```
Prompt:
"Generate user research report:

Structure:
1. Executive Summary
2. Methodology (10 interviews, 5 usability tests)
3. Key Findings (insights + supporting quotes)
4. Pain Points Analysis
5. Opportunities Identified
6. Recommendations (prioritized)
7. Next Steps

Data: [upload interview transcripts, test notes]
Include: Participant quotes, frequency of themes
Style: Analytical but accessible
Length: 15-20 pages"
```

---

**2. Presentazioni**:

💡 **Slide Structure Generation**:
```
Prompt:
"Create slide deck outline for [topic]:

Audience: [C-level / Team / Clients]
Duration: [X minutes presentation]
Goal: [Inform / Persuade / Train]

Generate for each slide:
- Slide number and title
- Key message (1 sentence)
- Bullet points (3-5)
- Speaking notes (what to say)
- Visual suggestion (chart/image/diagram type)

Number of slides: [X]"
```

**Esempio PMO - Portfolio Review**:
```
Prompt:
"Create 15-slide portfolio review for quarterly board meeting:

Audience: Board of Directors (limited PM knowledge)
Duration: 20 minutes
Goal: Show portfolio health, get approval for 2 new projects

Content to cover:
- Portfolio overview (10 active projects)
- RAG status breakdown
- Budget: $15M total, 85% utilized
- Resource utilization (capacity analysis)
- Top 3 risks across portfolio
- 2 new project proposals (business case, ROI)
- Q&A preparation

For each slide:
- Title + key message
- 3-5 bullets (exec-friendly language)
- Speaking notes
- Visual type (chart, table, icon)

Style: Executive (high-level, visual-heavy)"

Output:
Slide 1: Portfolio Overview
Key Message: "10 active projects delivering $8M value, 80% on track"
Bullets:
- 8 Green, 1 Amber, 1 Red
- $12.75M spent / $15M budget (85%)
- Expected ROI: 3.2x by Q4 2025
Speaking Notes: "Good morning. Today I'll walk through our project portfolio health..."
Visual: Dashboard with RAG donuts, budget gauge

[Continues for 15 slides]
```

---

**3. Diagrammi e Visualizzazioni**:

📚 **Mermaid Basics** (per Claude Artifacts):

**Flowchart**:
```
Prompt: "Create flowchart for expense approval process using Mermaid:
- Employee submits
- Manager reviews (approve/reject)
- If >$1000, Finance approves
- If approved, process payment
- If rejected, notify employee"

Output (Mermaid code in Artifact):
graph TD
    A[Employee Submits] --> B{Manager Review}
    B -->|Approve & <$1000| E[Process Payment]
    B -->|Approve & >$1000| C{Finance Review}
    B -->|Reject| F[Notify Employee]
    C -->|Approve| E
    C -->|Reject| F
    E --> G[Complete]
    F --> G
```

**Sequence Diagram** (API interactions, user flows):
```
Prompt: "Sequence diagram for user login flow (Mermaid):
User → Frontend → API → Database → Auth Service"

Output:
sequenceDiagram
    User->>Frontend: Enter credentials
    Frontend->>API: POST /login
    API->>Database: Query user
    Database-->>API: User data
    API->>Auth: Validate password
    Auth-->>API: Token
    API-->>Frontend: Success + token
    Frontend-->>User: Dashboard
```

**Entity Relationship Diagram**:
```
Prompt: "ER diagram for project management system:
Entities: Project, Task, User, Team
Relationships defined"
```

💡 **Quando Usare LLM vs Tool Dedicato**:
- ✅ LLM for: Quick drafts, standard diagrams, iteration speed
- ✅ Dedicated tool (Lucidchart, Draw.io, Figma) for: Complex diagrams, pixel-perfect design, team collaboration

---

**4. Code Generation** (Overview per Non-Developers):

📚 **Simple Scripts**:
```
Use case: Automation tasks

Example - CSV data cleanup:
Prompt: "Write Python script to:
1. Read CSV file 'projects.csv'
2. Remove rows where Status = 'Cancelled'
3. Calculate days until deadline for each project
4. Save to 'active-projects.csv'

Include comments explaining each step"

Output: Runnable Python code with comments
(Even non-developers can run with copy-paste)
```

**No-Code Alternatives**:
- Zapier/Make.com formula generation
- Google Sheets Apps Script
- Excel VBA macros

✏️ **Esercizio: Generate 3 Content Types**:
1. **Document**: Genera brief/report rilevante per tuo ruolo (3-5 pagine)
2. **Presentation**: Outline slide deck (10 slides) per stakeholder communication
3. **Diagram**: Flowchart o sequence diagram di un tuo processo

Criteri valutazione:
- Professional quality?
- Ready to use or needs heavy editing?
- Accurate to your domain?
- Time saved vs manual creation?

🔑 **Key Takeaways**:
- LLM can generate production-ready deliverables
- Template-based prompting = consistency
- Mermaid diagrams in Artifacts = powerful combo
- Always review and validate (especially for client-facing docs)
- Time saving: 70-80% per documenti standard

---

#### 04-workshop-pratico.md - Challenge: Deliverable Professionale

🎯 **Obiettivo Esercizio**:
Generare deliverable professionale completo per il proprio ruolo, combinando tecniche Modulo 2

⏱️ **Tempo**: 60 minuti
👤 **Modalità**: Individuale → Peer review
📦 **Deliverable**: 1 artifact professionale pronto per stakeholder

📚 **Challenge Varianti per Ruolo**:

**PM - Project Kick-Off Package**:
```
Deliverable: Pacchetto completo kick-off meeting

Componenti:
1. Project Charter (documento 5-6 pagine)
   - Executive summary, scope, timeline, budget, risks
2. RACI Matrix (structured table)
   - Stakeholders, activities, responsibility levels
3. Project Timeline (Mermaid Gantt)
   - Phases, milestones, dependencies
4. Kick-off Presentation (10 slides outline)
   - Agenda, intros, project overview, next steps

Tool suggerito: Claude (Artifacts per Gantt) + ChatGPT (Charter doc)

Criteri successo:
- ✅ Pronto per presentazione a sponsor
- ✅ Tutti componenti coerenti tra loro
- ✅ Professional format
- ✅ <5 min edits needed
```

**PMO - Portfolio Dashboard Report**:
```
Deliverable: Executive portfolio review

Componenti:
1. Portfolio Overview (documento 3 pagine)
   - Summary 10 progetti, RAG status, financials
2. Structured Data (JSON/CSV)
   - Project list con metrics, export-ready per viz tool
3. Risk Heatmap (Mermaid diagram)
   - Probability vs Impact matrix, progetti posizionati
4. Executive Presentation (8 slides outline)
   - Portfolio health, decisions needed, Q&A prep

Tool suggerito: Claude (diagrams) + Gemini (Sheets integration) o ChatGPT

Criteri successo:
- ✅ Data-driven insights
- ✅ Executive-friendly (no jargon)
- ✅ Actionable recommendations
- ✅ Visual storytelling
```

**Service Design - User Journey Package**:
```
Deliverable: User journey analysis completo

Componenti:
1. Research Synthesis Report (8-10 pagine)
   - Methodology, findings, insights, quotes
2. User Journey Map (Mermaid o visual description)
   - Stages, touchpoints, pain points, emotions, opportunities
3. Structured Insights Data (JSON)
   - Themes, frequency, impact scores
4. Recommendations Deck (12 slides outline)
   - Insights, prioritized opportunities, next steps

Tool suggerito: Claude (journey diagram) + ChatGPT Canvas (report)

Criteri successo:
- ✅ Evidence-based (quotes, data)
- ✅ Visual journey map clear
- ✅ Prioritized recommendations
- ✅ Ready for design team handoff
```

**Funzionale - Requirements Package**:
```
Deliverable: Pacchetto requirements completo feature

Componenti:
1. Business Requirements Document (10 pagine)
   - Business case, functional reqs, non-functional reqs, constraints
2. User Stories (structured format)
   - Epic breakdown, stories con acceptance criteria
3. Process Flow Diagram (Mermaid)
   - Current state (AS-IS) + Future state (TO-BE)
4. Test Cases (structured table/CSV)
   - Test scenarios, expected results, priority

Tool suggerito: Claude (process flows) + ChatGPT (BRD) + structured output per stories

Criteri successo:
- ✅ Clear, unambiguous requirements
- ✅ Testable acceptance criteria
- ✅ Process flows accurate
- ✅ Ready for dev team estimation
```

---

**Step-by-Step Workflow**:

**Phase 1: Planning** (10 min)
1. Scegli scenario reale o realistic simulation
2. Raccogli input necessari (brief, data, context docs)
3. Decide tool(s) da usare
4. Outline componenti deliverable

**Phase 2: Generation** (35 min)
1. Genera componente principale (documento/report)
   - Usa template prompting
   - Include context rilevante
2. Genera componenti strutturati (data, tables)
   - Structured output prompts
3. Genera visualizzazioni (diagrams, charts)
   - Mermaid/Artifacts o description per manual creation
4. Genera presentation outline
   - Slide-by-slide structure

**Phase 3: Integration & Polish** (10 min)
1. Review coerenza tra componenti
2. Edit per consistency (terminologia, dati, tone)
3. Format check (professional standard)
4. Prep per condivisione

**Phase 4: Peer Review** (5 min)
1. Scambia deliverable con partner
2. Review con checklist:
   - ✅ Professional quality?
   - ✅ Complete (tutti componenti)?
   - ✅ Actionable/useful?
   - 💡 1-2 suggerimenti miglioramento

---

**Troubleshooting Common Issues**:

❌ **Problema**: Output troppo generico
✅ **Fix**: Aggiungi più context specifico nel prompt (nomi reali, numeri, dettagli)

❌ **Problema**: Inconsistenza tra componenti
✅ **Fix**: Genera glossary/data dictionary all'inizio, referenzia in tutti i prompt

❌ **Problema**: Diagram Mermaid non renderizza
✅ **Fix**: Valida syntax con Mermaid Live Editor, chiedi a Claude di fixare

❌ **Problema**: Documento troppo lungo
✅ **Fix**: Specifica word count strict, chiedi "condense to max X words"

---

🔑 **Key Learnings Attesi**:
- Multi-component deliverable possibili con LLM
- Planning upfront (outline) accelera generation
- Tool diversi per componenti diversi (mix & match)
- Professional quality raggiungibile con prompt curati
- Peer review evidenzia blind spots

**Post-Workshop Reflection**:
- Quanto tempo avresti impiegato manualmente? (stima)
- Quanto tempo effettivo con LLM?
- Quality satisfactory per uso reale?
- Cosa rifaresti diversamente?
- Template riutilizzabile per questo tipo deliverable?

---

### Modulo 2.3: Research & Analysis Professionale

#### 01-web-search-llm.md - Ricerca e Verifica Online

🎯 **Learning Objectives**:
- Comprendere web search capabilities per provider
- Condurre research efficace con LLM
- Best practices verifica fonti

📚 **Contenuti**:
- **Web Search Comparison**:
  - **ChatGPT Web Browsing** (quando disponibile):
    - Accesso Bing search
    - Browse web pages
    - Summarize findings con citazioni
    - Limitations: può essere disabled temporaneamente, cap su queries
  - **Claude.ai Web Search** (limited beta 2025):
    - Search capability integrata
    - Context-aware search
    - Source citations
    - Limitations: non sempre disponibile tutti gli utenti
  - **Gemini with Google Search**:
    - Deep Google Search integration
    - Grounding con Google data
    - Real-time info
    - Best for: factual queries, current events
  - **Perplexity** (specialized research tool):
    - Dedicated research interface
    - Multiple sources aggregation
    - Pro: Follow-up questions, source comparison
    - Best for: Deep research, academic-style queries

💡 **Quando Usare Web Search**:
- ✅ Info post knowledge cutoff (current events, recent data)
- ✅ Fact verification (dates, statistics, quotes)
- ✅ Market research (competitors, trends, news)
- ✅ Best practices check (industry standards, recent recommendations)
- ❌ Quando hai documenti proprietari (usa KB invece)
- ❌ Per info sensibili/interne (no search, confidentiality)

📚 **Best Practices Formulare Query**:

**Pattern 1: Specific + Timebound**:
```
❌ Generic: "Tell me about AI trends"
✅ Specific: "What are the top 3 AI trends in enterprise software in 2025? Focus on adoption statistics"
```

**Pattern 2: Comparative**:
```
❌ Vague: "Which project management tool is best?"
✅ Comparative: "Compare Jira vs Asana vs Monday.com for software development teams: features, pricing, integration capabilities. Sources from 2024-2025"
```

**Pattern 3: Source Quality Guidance**:
```
Prompt: "Research [topic]. Prioritize:
- Peer-reviewed sources / Industry reports
- Official documentation
- Reputable tech publications (TechCrunch, Wired, etc.)

Avoid: Forums, personal blogs, unreliable sources
Cite all sources with URLs"
```

💡 **Use Cases per Ruolo**:

**PM - Competitive Analysis**:
```
Prompt: "Research competitor 'CompanyX' product releases in last 6 months:
- New features announced
- Pricing changes
- Market reception (reviews, news)

Sources: Company announcements, tech news, analyst reports
Deliverable: Summary table with sources"
```

**PMO - Industry Benchmarking**:
```
Prompt: "Find 2024-2025 benchmarks for IT project success rates:
- % on-time delivery
- % within budget
- Top failure reasons

Focus on: Gartner, PMI, Standish Group reports
Provide summary + source links"
```

**Service Design - UX Trends**:
```
Prompt: "What are emerging UX patterns for mobile banking apps in 2025?
- Biometric auth trends
- Personalization approaches
- Accessibility standards

Sources: Nielsen Norman Group, Baymard Institute, UX design blogs
Summarize top 5 patterns with examples"
```

**Funzionale - Regulatory Research**:
```
Prompt: "Research GDPR compliance requirements for CRM systems as of 2025:
- Data retention rules
- User consent requirements
- Breach notification timelines

Sources: Official EU regulations, legal compliance sites
Provide checklist with source citations"
```

📚 **Verificare Fonti**:

**Red Flags**:
- 🚩 No source URL provided
- 🚩 "According to a study..." (vague, no citation)
- 🚩 Statistics senza context (n=?, when?)
- 🚩 Single source per critical claim

**Best Practices**:
- ✅ Ask: "Provide URLs for all sources"
- ✅ Cross-reference: 2+ independent sources for key facts
- ✅ Check dates: Info recente o outdated?
- ✅ Authority: Source credibile per il topic? (es: medical info da WHO, tech da IEEE)

**Verification Workflow**:
```
1. LLM provides research with sources
2. Spot check: Click 2-3 URLs, verify claims accurate
3. For critical info: Independent verification (Google directly)
4. Red flag? → Ask LLM: "Can you find alternative source for [claim]?"
5. Document which facts verified vs LLM-claimed
```

✏️ **Esercizio: Condurre Research Verificata**:
1. Scegli topic rilevante per tuo lavoro (recente, post-2024)
2. Formulate search query con best practices
3. Usa LLM con web search (ChatGPT/Gemini/Perplexity)
4. Ottieni risultati con fonti
5. Verifica 3 claim cliccando sources
6. Rate accuracy: quante claim verificate corrette?

🔑 **Key Takeaways**:
- Web search in LLM = game changer per info recenti
- Provider diversi = capabilities diverse
- Always ask for sources + URLs
- Verify critical facts independently
- Perplexity specializzato per deep research

---

#### 02-multi-document-analysis.md - Analisi Comparativa Documenti

🎯 **Learning Objectives**:
- Caricare e analizzare documenti multipli
- Comparative analysis workflows
- Synthesis e pattern identification

📚 **Contenuti**:

**Comparative Analysis Workflows**:

**Pattern 1: Gap Analysis (AS-IS vs TO-BE)**:
```
Setup:
- Document 1: Current process documentation
- Document 2: Proposed future state
- Upload entrambi in workspace

Prompt:
"Analyze differences between current-process.pdf (AS-IS) and future-process.pdf (TO-BE):

Create gap analysis table:
| Area | AS-IS | TO-BE | Gap | Impact | Priority |

Focus on:
- Process steps added/removed
- Role changes
- System/tool changes
- Timeline differences

Highlight top 5 gaps by impact"
```

**Pattern 2: Competitive Comparison**:
```
Setup:
- Upload 3-5 competitor product specs / brochures

Prompt:
"Compare these 5 product specifications:

Generate comparison matrix:
| Feature | Product A | Product B | Product C | Product D | Product E |

Categories:
- Core features
- Integrations
- Pricing
- Target audience
- Unique selling points

Identify:
- ✅ Our strengths (where we excel)
- ⚠️ Our gaps (where competitors stronger)
- 💡 Opportunities (unmet needs)"
```

**Pattern 3: Requirements Analysis**:
```
Setup:
- Upload requirements from 3 stakeholder groups

Prompt:
"Analyze requirements from:
- stakeholder-group-A.pdf
- stakeholder-group-B.pdf
- stakeholder-group-C.pdf

Identify:
1. Common requirements (all 3 groups)
2. Conflicting requirements (disagreements)
3. Unique requirements (single group only)
4. Priority conflicts (different importance ratings)

Create:
- Venn diagram description
- Conflict resolution recommendations"
```

📚 **Extraction & Synthesis**:

**Key Insights Extraction**:
```
Prompt template:
"I've uploaded 10 project status reports (week 1-10).

Extract insights:
1. Recurring issues (mentioned 3+ times)
2. Risk evolution (new risks emerged? Resolved?)
3. Velocity trend (story points completed per week)
4. Team sentiment indicators (morale, blockers)

Output:
- Executive summary (5 bullet points)
- Trend analysis (improving/degrading/stable)
- Action items for PM"
```

**Pattern Identification**:
```
Use case: User research synthesis

Upload: 15 user interview transcripts

Prompt:
"Analyze interview transcripts and identify:

Patterns:
- Common pain points (mentioned by 5+ participants)
- Feature requests (categorize by frequency)
- User workflows (typical sequences)
- Emotional high/low points

For each pattern:
- Frequency (X out of 15 participants)
- Severity (high/medium/low impact)
- Supporting quotes (2-3 representative)
- Design implications"
```

📚 **Evidence-Based Reasoning**:

**Quote Extraction**:
```
Prompt:
"From uploaded interview transcripts, find quotes that support these themes:
1. 'Onboarding is confusing'
2. 'Mobile app needs improvement'
3. 'Customer support is helpful'

For each theme:
- 3 representative quotes
- Participant ID
- Context (what question prompted this)

Format: Citazione + [Participant ID, Context]"
```

**Reference Tracking**:
```
For reports/analysis citing multiple sources:

Prompt: "Write analysis of [topic] using uploaded documents.

Citation rule: After EVERY claim, cite source:
Format: [Document name, page/section]

Example:
'The project is behind schedule by 2 weeks [Status Report Week 8, Executive Summary]'

Maintain citation discipline throughout report"
```

💡 **Use Cases per Ruolo**:

**PM - Risk Trend Analysis**:
```
Upload: Risk registers from months 1-6 of project

Prompt:
"Analyze risk evolution across 6 months:

Tracking:
- New risks emerged per month
- Risks mitigated (closed)
- Risks that materialized (impact)
- Recurring risk categories

Insights:
- Are we getting better at risk mgmt? (metrics)
- Which types of risks we miss consistently?
- Early warning signals for future projects

Deliverable: Trend report + lessons learned"
```

**PMO - Portfolio Pattern Analysis**:
```
Upload: Post-mortem reports from 10 completed projects

Prompt:
"Meta-analysis of project post-mortems:

Identify:
- Common success factors (in successful projects)
- Common failure patterns (in troubled projects)
- Best practices mentioned frequently
- Recommendations ignored (mentioned but not acted on)

Categorize findings:
- People/team issues
- Process issues
- Technical issues
- Communication issues

Deliverable: Organizational learnings + process improvements"
```

**Service Design - Cross-Study Synthesis**:
```
Upload: 3 user research studies from different quarters

Prompt:
"Synthesize findings across Q1, Q2, Q3 research:

Longitudinal analysis:
- Pain points: Persistent vs resolved vs new
- Feature requests: Consistency over time
- User satisfaction: Trend (improving/declining)
- Demographic shifts: User base changes

Identify:
- Validated insights (consistent across all 3)
- Emerging trends (appeared in Q3, not earlier)
- Resolved issues (Q1 problem, not in Q3)

Deliverable: Synthesis report for roadmap planning"
```

**Funzionale - Multi-System Requirements Merge**:
```
Upload: Requirements docs from 3 legacy systems to be consolidated

Prompt:
"Analyze requirements from System A, B, C for new unified system:

Consolidation:
- Core features (all 3 systems need)
- System-specific features (unique to 1 system)
- Overlapping features (similar intent, different implementation)
- Deprecated features (no longer needed)

Conflict resolution:
- Where systems have incompatible requirements
- Recommendation for unified approach

Deliverable: Consolidated requirements doc + decisions log"
```

✏️ **Esercizio: Multi-Doc Comparative Analysis**:
1. Raccogli 3-5 documenti simili (es: reports, specs, research findings)
2. Upload in workspace
3. Choose analysis type: gap, comparison, synthesis
4. Generate analysis con citations
5. Spot-check: verify citations accurate (doc contains cited info?)
6. Deliverable: Analysis report con fonti

🔑 **Key Takeaways**:
- Multi-doc analysis = LLM superpower
- Patterns emergono che lettura singola non evidenzia
- Always demand citations/sources
- Evidence-based = credible analysis
- Time saving: giorni di manual work → ore

---

#### 03-verification-strategies.md - Fact-Checking e Quality Assurance

🎯 **Learning Objectives**:
- Riconoscere quando LLM output richiede verifica
- Implementare fact-checking workflows
- Best practices per critical information

📚 **Contenuti**:

**Hallucination Detection Revisited** (richiamo Giorno 1):
- Red flags: vague sources, suspiciously specific numbers, overconfident tone
- High-risk domains: medical, legal, financial, recent events

📚 **Fact-Checking Workflows**:

**Workflow 1: Cross-Reference con Web Search**:
```
Step 1: LLM generates claim
"According to 2024 PMI report, 71% of projects use Agile methodology"

Step 2: Verify with web search
Query: "PMI 2024 report Agile adoption percentage"

Step 3: Compare
- Found: PMI Pulse 2024 says 71% → ✅ Verified
- Not found or different % → ⚠️ Flag for manual check
```

**Workflow 2: Multi-Model Verification**:
```
Strategy: Ask same question to 2+ different LLMs

Query: "What is the GDPR maximum fine for data breach?"

- ChatGPT: "Up to €20 million or 4% of global annual turnover, whichever is higher"
- Claude: "€20 million or 4% of global annual revenue, whichever is greater"
- Gemini: "€20 million or 4% worldwide annual revenue, whichever higher"

All agree? → Higher confidence (still verify if critical)
Disagree? → Definitely verify independently
```

**Workflow 3: Source Validation**:
```
LLM provides source → Validate authority

Check:
- ✅ Domain reputable? (.gov, .edu, known org)
- ✅ Publication date relevant?
- ✅ Author credentials appropriate?
- ✅ Primary vs secondary source?
- ❌ Broken link / can't access → can't verify

Example:
Source: "Study by Dr. Smith on Harvard website 2023"
Verify:
1. harvard.edu search for "Dr. Smith [topic] 2023"
2. Found? Read abstract, confirm claim
3. Not found? Ask LLM for direct URL or different source
```

📚 **Critical Information Handling**:

**When NOT to Trust LLM** (always verify independently):
- 💰 **Financial**: Investment advice, tax rules, financial projections
- ⚖️ **Legal**: Compliance requirements, contractual terms, liability
- 🏥 **Medical**: Health claims, drug interactions, treatment recommendations
- 📊 **Statistics**: Market data, research findings, survey results
- 📅 **Dates**: Historical events, deadlines, chronology
- 🔢 **Calculations**: Math, financial models, engineering specs

**Red Flag Checklist**:
```
Review LLM output for:
- [ ] Specific numbers without sources (e.g., "73.2% of companies...")
- [ ] Quotes without attribution (e.g., "As Einstein said...")
- [ ] Recent events (post knowledge cutoff) without web search
- [ ] Legal/regulatory claims (e.g., "GDPR requires...")
- [ ] Medical/health advice
- [ ] Financial projections
- [ ] "Studies show..." without study name/source

If ANY checked → VERIFY before using
```

📚 **Professional Practices**:

**Documentation Protocol**:
```
For important deliverables, maintain verification log:

| Claim | Source LLM Provided | Verification Method | Status | Notes |
|-------|---------------------|---------------------|---------|-------|
| "71% Agile adoption" | PMI 2024 Report | Web search + found report | ✅ Verified | Confirmed in Executive Summary |
| "$2.5M avg cost..." | Not specified | Google search | ⚠️ Can't verify | Removed from report |
| "GDPR €20M fine" | Official EU reg | Checked eur-lex.europa.eu | ✅ Verified | Article 83 GDPR |

Attach log to deliverable for transparency
```

**Transparency Guideline**:
```
When using AI for professional content:

✅ DO:
- Disclose AI use for critical documents
- "Analysis assisted by AI tools, facts verified independently"
- Verify all statistics, quotes, claims
- Own the output (you're responsible)

❌ DON'T:
- Pass AI-generated content as 100% human without review
- Use AI output for regulated domains without expert review
- Claim sources that LLM hallucinated
- Skip verification on time-sensitive but critical info
```

💡 **Use Case: PM Status Report Verification**:
```
LLM generates: "Project is 68% complete, 2 weeks ahead of schedule"

Verification checklist:
1. ✅ Check project dashboard: Confirm 68% (or calculate manually)
2. ✅ Compare timeline: Original deadline vs current projection
3. ✅ Validate assumptions: What metrics define "complete"?
4. ✅ Spot check: 2-3 completed tasks mentioned actually done?
5. If all verify → Report credible
6. If any don't → Correct before sending

Time: 5 min verification vs 2 hours manual report writing → Still huge win
```

💡 **Use Case: PMO Benchmarking Data**:
```
LLM claims: "Industry average IT project budget overrun is 27%, according to 2024 Gartner study"

Verification:
1. ⚠️ High-stakes claim (will inform exec decision)
2. Web search: "Gartner 2024 IT project budget overrun"
3. Result: Found report, but says "23-31% range, median 27%"
4. Correction: "27% median (range 23-31%), per Gartner 2024"
5. Include URL in report footnote

Lesson: Close enough to be credible, but precision matters for professional use
```

✏️ **Esercizio: Verification Audit**:
1. Genera report con LLM su topic professionale (tuo dominio)
2. Highlight tutte le claims fattuali (statistics, quotes, dates, regulatory)
3. Crea verification matrix (claim | source | method | status)
4. Verify 5 claims random
5. Results:
   - Quante verificate corrette?
   - Quante hallucinations trovate?
   - Quante "non verificabili" (no source)?
6. Correggi report basandoti su verification

🔑 **Key Takeaways**:
- Trust but verify (especially for high-stakes content)
- Multi-model + web search = best verification combo
- Document your verification process
- Transparency su AI use = professional standard
- 5-10 min verification > days of mistakes downstream

---

#### 04-deep-research-challenge.md - Challenge: Research Completa

🎯 **Obiettivo Esercizio**:
Condurre deep research completa su topic professionale, con synthesis e report

⏱️ **Tempo**: 60 minuti
👤 **Modalità**: Individuale → Peer review
📦 **Deliverable**: Research report (5-8 pagine) con fonti verificate

📚 **Challenge Framework**:

**Scegli Topic** (da uno di questi o proponi tuo):
- **PM**: "Emerging project management methodologies for AI/ML projects in 2025"
- **PMO**: "Best practices for portfolio management in distributed/remote organizations"
- **Service Design**: "Accessibility standards and inclusive design trends 2024-2025"
- **Funzionale**: "Low-code/no-code platforms for enterprise: capabilities and limitations"
- **Your own**: Topic rilevante per tuo lavoro attuale

---

**Workflow Step-by-Step**:

**Phase 1: Research Planning** (10 min)
1. Define research questions (3-5 questions)
   - Main question: [core topic]
   - Sub-questions: [aspects to explore]
2. Identify credible source types:
   - Primary: Official docs, research papers, industry reports
   - Secondary: Tech publications, expert blogs, case studies
3. Outline report structure:
   - Sections you'll need
   - Expected length per section

**Phase 2: Information Gathering** (25 min)
1. **Web Search Research** (15 min):
   - Use LLM with web search (ChatGPT/Gemini/Perplexity)
   - Query for each research question
   - Collect findings + sources (URLs)
   - Take notes: key claims, statistics, quotes

2. **Multi-Source Synthesis** (10 min):
   - If you have relevant docs, upload and analyze
   - Cross-reference web findings with your docs
   - Identify patterns, contradictions, gaps

**Phase 3: Verification** (10 min)
1. List 10 key claims from research
2. Spot-check 5:
   - Click source URLs
   - Verify claim accurate in source
   - Check source authority/date
3. Flag unverified claims for revision or removal

**Phase 4: Report Writing** (10 min)
1. Structure report:
   ```
   # [Topic] - Research Report

   ## Executive Summary
   - 3-5 key findings (bullet points)

   ## Research Questions
   - List questions explored

   ## Findings
   ### [Area 1]
   - Key points
   - Supporting evidence [Source]

   ### [Area 2]
   ...

   ## Analysis
   - Patterns identified
   - Contradictions / debates
   - Gaps in current knowledge

   ## Recommendations
   - Actionable takeaways for [your role]
   - Prioritized by impact

   ## Sources
   - [All URLs cited, formatted]

   ## Verification Log
   - [Attach verification matrix]
   ```

2. Use LLM to draft sections
3. Edit for coherence and accuracy

**Phase 5: Peer Review** (5 min)
1. Exchange reports with partner
2. Review checklist:
   - ✅ Clear structure?
   - ✅ Evidence-based (sources cited)?
   - ✅ Actionable recommendations?
   - ✅ Sources credible (spot-check 2)?
   - 💡 What's most valuable insight?
   - 💡 What's missing or could improve?

---

💡 **Example: PM Research on AI Project Methodologies**:

**Research Questions**:
1. What are the unique challenges of managing AI/ML projects vs traditional software?
2. Which methodologies are emerging (hybrid, specialized frameworks)?
3. What do case studies show about success factors?
4. What tools/practices are recommended by practitioners?

**Information Gathering**:
- Web search: "AI project management challenges 2024 2025"
  - Found: PMI article, Harvard Business Review, Gartner report
- Web search: "MLOps project methodology"
  - Found: Google Cloud docs, Microsoft Azure best practices, case studies
- Pattern: Agile + ML-specific practices (experiment tracking, model versioning)

**Key Findings (with sources)**:
1. "Data quality issues cited as #1 challenge in 73% of AI projects [Gartner AI Survey 2024]"
2. "Cross-functional teams (DS + Engineers + Domain experts) show 2.5x higher success rate [HBR Case Study Analysis 2024]"
3. "Iterative experimentation phase recommended before committing to production architecture [Google Cloud MLOps guide]"

**Verification**:
- ✅ Gartner stat: Found in "2024 AI Project Reality Check" report, page 12
- ✅ HBR stat: Article "What Makes AI Projects Succeed", Dec 2024
- ✅ Google guide: Confirmed in MLOps whitepaper section 3

**Recommendations**:
1. Adopt hybrid Agile+MLOps approach (specific framework: [name])
2. Mandatory cross-functional kickoff for AI projects
3. Build in 4-week experimentation phase before architecture freeze
4. Tools to evaluate: [list with rationale]

**Report**: 7 pages, 15 sources cited, 5 key claims verified

---

**Evaluation Criteria**:

**Content** (40 points):
- [ ] Research questions clear and relevant (5)
- [ ] Findings evidence-based, not generic (10)
- [ ] Analysis goes beyond summary (synthesis, patterns) (10)
- [ ] Recommendations actionable and prioritized (10)
- [ ] Professional depth appropriate for audience (5)

**Sources** (30 points):
- [ ] 10+ sources cited (5)
- [ ] Sources credible and relevant (10)
- [ ] All claims have citations (10)
- [ ] URLs accessible and accurate (5)

**Verification** (20 points):
- [ ] Verification log included (5)
- [ ] 5+ claims verified (10)
- [ ] Unverified claims flagged or removed (5)

**Presentation** (10 points):
- [ ] Clear structure, easy to navigate (5)
- [ ] Professional formatting (5)

**Total: 100 points**

---

**Reflection Questions** (post-exercise):
1. Time vs manual research: quanto tempo avresti impiegato senza LLM?
2. Quality: report è production-ready o needs significant edits?
3. Surprises: insights inaspettati emersi dal research?
4. Limitations: cosa LLM non ha potuto fare bene?
5. Reusability: questo workflow applicabile a futuri research tasks?

---

🔑 **Key Learnings Attesi**:
- Deep research possibile con LLM in frazione del tempo
- Verification è critical step, non optional
- Multiple sources = more robust findings
- Structured approach (questions → gather → verify → synthesize) scalabile
- Balance: LLM speed + human judgment = best results

**Post-Workshop**: Conduct real research con questo workflow nel tuo lavoro, iterate e raffina il processo.

---

### Modulo 2.4: Integrazione & Automazione (Concepts)

#### 01-api-automation-basics.md - APIs e Automation per Non-Sviluppatori

🎯 **Learning Objectives**:
- Comprendere cos'è un'API in termini semplici
- Riconoscere quando API è soluzione appropriata vs UI
- Basics di costi e ROI per automation

📚 **Contenuti**:

**Cos'è un'API** (per non-tecnici):
- **Analogia**: API = "drive-through" per software
  - UI (User Interface) = entrare nel ristorante, ordinare a persona
  - API (Application Programming Interface) = restare in auto, ordinare al microfono, ricevere cibo alla finestra
  - Entrambi danno stesso risultato (cibo/risposta), ma API è automatizzabile

📚 **API vs UI - Quando Usare Cosa**:

| Scenario | UI (manuale) | API (automation) |
|----------|--------------|------------------|
| Task una tantum | ✅ Veloce | ❌ Overhead setup |
| Task ripetitivo (giornaliero/settimanale) | ❌ Time sink | ✅ Automazione |
| Poche iterazioni (<10) | ✅ Sufficiente | ❌ Not worth it |
| Batch processing (100+ items) | ❌ Impraticabile | ✅ Necessario |
| Esplorazione/learning | ✅ Interattivo | ❌ Troppo rigido |
| Production workflow | ❌ Errore-prone | ✅ Affidabile |

💡 **Esempi Pratici**:

**Caso 1 - UI appropriato**:
```
Task: Generare 1 status report settimanale
Metodo: Claude.ai UI
- 2 minuti in chat
- Flessibilità (puoi iterare, cambiare format)
- No technical setup
Verdict: UI perfetto ✅
```

**Caso 2 - API appropriato**:
```
Task: Generare 50 product descriptions da CSV con 1000 prodotti
Metodo: API call in loop (o no-code tool con API integration)
- Setup: 30 min iniziali (script/workflow)
- Esecuzione: automatica, 1000 descrizioni generate in 20 min
- Risultato: Tempo totale 50 min vs ~20 ore manuali
Verdict: API necessario ✅
```

📚 **Use Cases Automation per Ruolo**:

**PM - Status Report Automation**:
```
Scenario:
- 10 progetti da monitorare
- Report settimanale per ciascuno
- Dati da: Jira, Confluence, spreadsheet

Senza API:
- 10 progetti × 30 min/report = 5 ore/settimana
- 20 ore/mese
- Tedioso, error-prone

Con API Automation:
- Setup: Script che query Jira API, Confluence API, genera report via LLM API
- Tempo setup: 4-6 ore (una volta, o da dev team)
- Esecuzione: Automatica ogni venerdì, 10 report in 15 min
- Saving: ~18 ore/mese

ROI: Break-even dopo mese 1
```

**PMO - Portfolio Data Aggregation**:
```
Scenario:
- 30 progetti, ciascuno con dashboard diverso
- Consolidare dati in master view mensile

Manuale: 10+ ore/mese (export, copy-paste, reconcile)

API:
- Integration con project management tools APIs
- Automated data pull → standardize → generate portfolio view
- Tempo: 30 min/mese (review automated report)
```

**Service Design - User Feedback Analysis**:
```
Scenario:
- 500+ user feedback submissions/mese da survey tool
- Analyze, categorize, extract insights

Manuale: 2-3 giorni full-time

API:
- Survey tool API → pull responses
- LLM API → categorize, sentiment analysis, theme extraction
- Generate synthesis report
- Tempo: 1-2 ore (setup + review)
```

**Funzionale - Test Case Generation**:
```
Scenario:
- 200 user stories, need test cases generated

Manuale: 5-10 min per story = 16-33 ore

API:
- Export user stories from backlog tool API
- LLM API → generate test cases (Given-When-Then)
- Import back or export as CSV
- Tempo: 2 ore total (setup + QA review)
```

📚 **Costi API vs UI**:

**Pricing Models**:
- **UI (Subscription)**:
  - Claude Pro: $20/mese, usage limits, unlimited messages
  - ChatGPT Plus: $20/mese, GPT-4 access, daily caps

- **API (Pay-per-use)**:
  - Claude API: ~$3 per 1M input tokens, ~$15 per 1M output tokens (Haiku), Sonnet più costoso
  - ChatGPT API: ~$3-30 per 1M tokens depending on model
  - Cost per request: tipicamente $0.01-$0.10 per request medio

💡 **ROI Calculation Example**:
```
PM Automation Case:

Manual effort: 20 hours/mese × $50/hour (costo fully-loaded) = $1,000/mese
API cost:
- 10 reports × 4 weeks = 40 API calls/mese
- ~5K tokens input + 2K output per report
- Claude Haiku: 40 × $0.001 = $0.04/mese (trascurabile)
- Development time: 6 hours × $100/hour (contractor) = $600 one-time

Savings: $1,000/mese - $0.04 = ~$1,000/mese
Break-even: Mese 1 (after initial $600 investment)
Annual saving: $12,000

Verdict: Massive ROI ✅
```

📚 **No-Code Alternatives** (non serve programmare):

**Tools**:
- **Zapier**: Connect apps, trigger workflows
  - Example: New Jira issue → LLM summarize → post to Slack
- **Make.com**: Visual automation builder
  - Example: CSV upload → LLM process → Google Sheets
- **n8n**: Open-source automation (more technical)
  - Example: Schedule daily report generation

💡 **Zapier Example - PM Status Automation**:
```
Trigger: Every Friday 9am
Steps:
1. Zapier → Query Jira API (get issues updated this week)
2. Zapier → Send data to Claude API with prompt: "Generate status report..."
3. Claude → Returns formatted report
4. Zapier → Post report in Slack channel #project-status

Setup time: 30-60 min (no coding)
Run: Fully automatic weekly
```

⚠️ **When NOT to Automate**:
- ❌ Task cambia spesso (automation diventa obsoleto)
- ❌ Requires nuanced human judgment ogni volta
- ❌ Frequency bassa (quarterly) e tempo manual basso (<1 ora)
- ❌ Data sensitivity (automation introduce security risk)

✅ **When to Automate**:
- ✅ High frequency (daily/weekly)
- ✅ High volume (batch processing)
- ✅ Standardized output (stesso format ogni volta)
- ✅ Time-consuming manual (>5 ore/mese)

✏️ **Esercizio: Automation Opportunity Analysis**:
1. Identifica 3 task ripetitivi nel tuo lavoro
2. Per ciascuno, valuta:
   - Frequency (daily/weekly/monthly)
   - Time per execution (ore)
   - Total time/mese
   - Standardization (alta/media/bassa)
3. Calculate ROI potenziale:
   - Manual cost (ore × hourly rate)
   - Automation cost estimate (setup + run)
   - Break-even point
4. Priority ranking (quale automatizzare prima)

🔑 **Key Takeaways**:
- API = automation, UI = interaction
- ROI calcolo guida decisione se automatizzare
- No-code tools rendono API accessible anche a non-dev
- Non tutto va automatizzato (judgment call)
- Start small: automazione 1 task, learn, scale

---

#### 02-plugins-extensions.md - Ecosistemi Estensibilità

🎯 **Learning Objectives**:
- Comprendere plugin/extension ecosystems per provider
- Identificare use cases per extensions
- Comparare maturità e availability

📚 **Contenuti**:

**Cosa Sono Plugins/Extensions** (overview non-tecnico):
- **Definizione**: Add-ons che connettono LLM a servizi esterni
- **Analogia**: Plugins = "superpowers" per LLM
  - Base LLM: text generation
  - + Web search plugin: può cercare info in real-time
  - + Database plugin: può query dati aziendali
  - + Calendar plugin: può leggere/creare eventi

📚 **Ecosistemi per Provider**:

**ChatGPT - Actions & Plugins**:
- **GPT Store**: Marketplace di Custom GPTs con Actions
- **Actions**: API calls che GPT può fare
- **Examples**:
  - Zapier plugin: trigger automations
  - Wolfram: advanced calculations
  - Code Interpreter: run Python code, analyze data
  - DALL-E: generate images
  - Web browsing: search internet

💡 **Use Case - PM con Jira Action**:
```
Custom GPT "Project Assistant" with Jira Action:

User: "What are my open P0 bugs?"
→ GPT calls Jira API
→ Returns list of P0 bugs
→ GPT summarizes in readable format

User: "Create task: Review security audit findings"
→ GPT calls Jira create API
→ Confirms task created with link
```

**Claude - MCP (Model Context Protocol)**:
- **MCP**: Anthropic's standard per connettere Claude a data sources/tools
- **Status 2025**: Early adoption, growing ecosystem
- **Examples**:
  - File system access (read local files)
  - Database connectors (Postgres, SQLite)
  - API integrations (custom company data)

💡 **Use Case - PMO con Database MCP**:
```
Claude Desktop with Postgres MCP:

User: "Show portfolio budget utilization by project"
→ Claude queries company Postgres DB via MCP
→ Retrieves financial data
→ Generates summary table + insights

All without: exporting CSV, manual data wrangling
```

**Gemini - Extensions**:
- **Google Workspace Extensions**: Deep integration
  - Gmail: read/draft emails
  - Google Docs: create/edit documents
  - Sheets: analyze/manipulate data
  - Calendar: schedule meetings
- **Google Search Grounding**: Real-time web data
- **YouTube, Google Maps, Google Flights**: Specialized searches

💡 **Use Case - Service Designer con Workspace Extensions**:
```
Gemini with Gmail + Docs extensions:

User: "Summarize user feedback emails from last week and create research report in Docs"
→ Gemini reads Gmail (with permission)
→ Extracts feedback
→ Creates Google Doc with synthesis
→ Shares doc link

Integration: Seamless if already Google Workspace user
```

📚 **Comparazione Ecosistemi**:

| Aspect | ChatGPT Actions | Claude MCP | Gemini Extensions |
|--------|-----------------|------------|-------------------|
| **Maturity** | High (GPT Store launched 2023) | Emerging (2024-2025) | High (Google services) |
| **Availability** | Wide (anyone can create GPT) | Limited (requires technical setup) | Google services: wide; 3rd party: growing |
| **Ease of Use** | High (no-code GPT creator) | Medium (some technical skill) | High (native Google integration) |
| **Ecosystem Size** | Largest (1000s of GPTs) | Small (early days) | Medium (focused on Google) |
| **Best For** | Diverse integrations, public sharing | Privacy-sensitive, company data | Google Workspace users |

📚 **Common Use Cases Cross-Provider**:

**Database Query**:
- PM: "What's our project velocity trend last 6 sprints?" → query Jira database
- PMO: "Show me budget variance for all red projects" → query financial system

**CRM Integration**:
- Sales-adjacent roles: "Summarize recent client interactions" → query Salesforce
- Account managers: "Create follow-up tasks for accounts with no activity in 30 days"

**Document Management**:
- All roles: "Find all requirements docs related to authentication feature" → search Confluence/SharePoint
- Compliance: "Check which policy docs need annual review" → query document management system

**Calendar/Scheduling**:
- PM: "Schedule project review meeting, find time when all 5 stakeholders available" → check calendars, create event
- PMO: "Block time for portfolio planning next week, avoid conflicts"

**Data Analysis**:
- Analyst roles: "Analyze this dataset for outliers and trends" → Code Interpreter or Sheets Extension
- Finance: "Reconcile budget actuals vs forecast, flag variances >10%"

📚 **Quando Esplorare Extensions**:

✅ **Good Fit**:
- Ripetitive data access (query DB, read emails, check calendar daily)
- Workflow già digital (use SaaS tools)
- Privacy OK con provider access (con dovuti permessi)
- ROI clear (major time saving)

⚠️ **Caution**:
- One-time tasks (overhead setup not worth it)
- Highly sensitive data (valuta security implications)
- Ecosystem immature per tuo tool (es: niche enterprise software without API/plugin)

💡 **Getting Started Recommendations**:

**For ChatGPT Users**:
1. Explore GPT Store: cerca GPTs per tuo ruolo/industry
2. Try 3-5 pre-built GPTs (no setup needed)
3. If useful, consider creating Custom GPT for your specific workflow

**For Claude Users**:
1. Wait for MCP ecosystem maturity (Q2-Q3 2025)
2. If technical resources available, pilot MCP for high-value integration
3. Monitor Anthropic announcements for new connectors

**For Gemini Users**:
1. If on Google Workspace, enable Workspace Extensions immediately (huge value)
2. Test with non-sensitive data first
3. Define permissions carefully (what Gemini can access)

✏️ **Esercizio: Extension Use Case Design**:
1. Identify 1 integration opportunity (quale external system vuoi connettere?)
2. Define workflow:
   - Trigger (quando activation)
   - Action (cosa deve fare)
   - Output (risultato atteso)
3. Choose provider/plugin/extension appropriato
4. Estimate:
   - Setup effort (ore)
   - Potential saving (ore/mese)
   - ROI (months to break-even)
5. Decision: pursue now, later, or not worth it?

🔑 **Key Takeaways**:
- Extensions = connect LLM to external world
- Each provider has different ecosystem maturity
- Google Workspace users → Gemini extensions natural fit
- Diverse needs → ChatGPT GPT Store (largest selection)
- Privacy-sensitive → Claude MCP (keep data on-premise possible)
- Evaluate ROI before investing in setup

---

#### 03-workflow-design.md - Workshop: Progettare Workflow AI-Augmented

🎯 **Obiettivo Esercizio**:
Progettare 1 workflow AI-augmented per task ripetitivo, dalla identificazione opportunità a implementation plan

⏱️ **Tempo**: 45 minuti
👤 **Modalità**: Individuale → Condivisione gruppo
📦 **Deliverable**: Workflow design document (2-3 pagine)

📚 **Step-by-Step Workflow**:

**Step 1: Identify Opportunity** (10 min)

Template:
```
## Task Identification

Task Name: [es: Weekly Portfolio Status Aggregation]

Current Process (AS-IS):
1. [Step 1: es: Export data da 10 project trackers]
2. [Step 2: es: Manual copy-paste in master spreadsheet]
3. [Step 3: es: Calculate metrics (% complete, budget variance)]
4. [Step 4: es: Write executive summary (2-3 paragraphs)]
5. [Step 5: es: Format report, send email to leadership]

Time Investment:
- Frequency: [Daily / Weekly / Monthly]
- Time per execution: [X hours]
- Total time/month: [Y hours]

Pain Points:
- [es: Tedious copy-paste, error-prone]
- [es: Different data formats across tools]
- [es: Writing summary takes mental energy]

Automation Potential: [High / Medium / Low]
Rationale: [perché task è good candidate]
```

---

**Step 2: Map Current Process** (5 min)

Visual representation (text-based flowchart):
```
Current Workflow:
START
  ↓
[Manual] Export Jira data → CSV
  ↓
[Manual] Export Trello data → CSV
  ↓
[Manual] Export Asana data → CSV
  ↓
[Manual] Open master Excel
  ↓
[Manual] Copy-paste 3 CSV files
  ↓
[Manual] Calculate: % complete, variance
  ↓
[Manual] Write summary paragraph
  ↓
[Manual] Format report (colors, charts)
  ↓
[Manual] Email to 5 stakeholders
  ↓
END

Total: 10 manual steps, ~3 hours
Error risk: Steps 5-6 (copy-paste, calculation)
```

---

**Step 3: Design AI-Augmented Workflow** (15 min)

Template:
```
## AI-Augmented Workflow (TO-BE)

Workflow Name: Automated Portfolio Status Report

Components:
1. Data Collection (automated)
   - Tool: Zapier / Make.com
   - Action: Scheduled trigger (every Friday 8am)
   - Connects to: Jira API, Trello API, Asana API
   - Output: 3 JSON files with project data

2. Data Processing (AI-assisted)
   - Tool: LLM API (Claude/ChatGPT)
   - Input: 3 JSON files
   - Prompt: "Standardize project data, calculate % complete and budget variance for each"
   - Output: Consolidated dataset (JSON/CSV)

3. Summary Generation (AI)
   - Tool: LLM API
   - Input: Consolidated dataset
   - Prompt: "Generate executive summary (3 paragraphs):
     - Para 1: Overall portfolio health (X green, Y amber, Z red)
     - Para 2: Top 3 risks across projects
     - Para 3: Key achievements this week"
   - Output: Formatted text

4. Report Assembly (automated)
   - Tool: Google Docs API or Email template
   - Action: Insert summary + data table into template
   - Format: Apply styles, add charts (optional)

5. Distribution (automated)
   - Tool: Email API (Gmail, Outlook)
   - Action: Send to distribution list
   - Include: PDF report attachment

Human-in-the-Loop:
- Step 2.5: Review consolidated data (5 min) - catch anomalies
- Step 3.5: Edit summary if needed (5 min) - add context
- Step 5: Approve send (1 min) - final gate

Total Time: 15 min (review + edits) vs 3 hours manual
Automation: 90%
```

Visual TO-BE Workflow:
```
TO-BE Workflow:
START (Scheduled Trigger)
  ↓
[AUTO] Zapier pulls data from Jira, Trello, Asana APIs
  ↓
[AUTO] LLM consolidates + calculates metrics
  ↓
[HUMAN] Review data (5 min) → [if issue] Fix manually → Rerun
  ↓
[AUTO] LLM generates executive summary
  ↓
[HUMAN] Edit summary (5 min - optional)
  ↓
[AUTO] Assemble report (template + data + summary)
  ↓
[HUMAN] Approve (1 min)
  ↓
[AUTO] Email to stakeholders
  ↓
END

Total: 3 automated steps, 3 human checkpoints, ~15 min
```

---

**Step 4: Implementation Plan** (10 min)

Template:
```
## Implementation Plan

### Prerequisites
- [ ] Access to tool APIs (Jira, Trello, Asana)
- [ ] LLM API account (Claude/ChatGPT)
- [ ] Automation platform account (Zapier Pro or Make.com)
- [ ] Budget approval ($ estimate below)

### Implementation Phases

Phase 1: Proof of Concept (Week 1-2)
- [ ] Manual test: Export data, use LLM to consolidate, review quality
- [ ] Validate: LLM output accuracy acceptable? (>90%)
- [ ] Decision: Proceed or iterate prompt

Phase 2: Automation Setup (Week 3-4)
- [ ] Setup Zapier workflows (data collection)
- [ ] Setup LLM API calls (processing + summary)
- [ ] Setup report template (Google Docs/Email)
- [ ] Test end-to-end with sample data

Phase 3: Pilot (Week 5-6)
- [ ] Run automated workflow for 2 weeks
- [ ] Monitor: errors, time saved, quality
- [ ] Collect feedback from report recipients
- [ ] Iterate: fix bugs, improve prompts

Phase 4: Production (Week 7+)
- [ ] Deploy to production schedule
- [ ] Document workflow for maintenance
- [ ] Train backup person to manage
- [ ] Monitor monthly: uptime, cost, effectiveness

### Cost Estimate

Setup Costs (one-time):
- Development time: [X hours × $Y/hour] = $Z
- Tool setup: Zapier Pro 1 month trial = $0

Ongoing Costs (monthly):
- Zapier Pro: $20/month
- LLM API: ~100 API calls/month × $0.05 = $5/month
- Total: $25/month

ROI Calculation:
- Time saved: 3 hours/week × 4 weeks = 12 hours/month
- Cost saved: 12 hours × $50/hour (loaded rate) = $600/month
- Net saving: $600 - $25 = $575/month
- Annual saving: $6,900
- Setup investment: $Z (break-even in month 1 if <$575)

### Risk Mitigation

Risks:
1. API changes break integration
   - Mitigation: Monitor for API deprecation notices, maintain backup manual process
2. LLM accuracy degrades
   - Mitigation: Human review checkpoints, quarterly prompt tuning
3. Data security concern
   - Mitigation: Ensure API calls over HTTPS, review provider security policies, no PII in prompts

### Success Metrics

KPIs to track:
- Time spent per report (target: <30 min)
- Accuracy of LLM-generated summary (target: >90% no edits needed)
- Stakeholder satisfaction (survey quarterly)
- Error rate (target: <5% workflows fail)

Review: Monthly check-in, quarterly full audit
```

---

**Step 5: Peer Feedback** (5 min)

Exchange workflow designs with partner:

Feedback Checklist:
- ✅ Opportunity well-defined? (clear pain point)
- ✅ TO-BE workflow realistic? (not over-optimistic)
- ✅ Human-in-the-loop at right steps? (not fully automated without oversight)
- ✅ ROI calculation reasonable? (assumptions valid)
- ✅ Risks identified and mitigated?
- 💡 Suggestions: [what would you add/change?]

---

**Deliverable Template Summary**:
```
# Workflow Design: [Name]

## 1. Opportunity
- Task description
- Current pain points
- Time investment
- Automation potential

## 2. AS-IS Workflow
- [Flowchart or step-by-step]

## 3. TO-BE Workflow (AI-Augmented)
- [Flowchart with automation + human checkpoints]
- Tools/APIs used
- Human-in-the-loop steps

## 4. Implementation Plan
- Prerequisites
- Phases (POC → Pilot → Production)
- Timeline
- Cost estimate
- ROI calculation

## 5. Risk Mitigation
- Risks identified
- Mitigation strategies
- Success metrics

## 6. Next Steps
- [ ] Present to manager for approval
- [ ] Secure budget ($X)
- [ ] Start Phase 1 (POC)
```

---

**Group Sharing** (ultimi 10 min):
- 3-4 volontari condividono workflow design
- Group discussion:
  - Pattern comuni? (tutti automatizzano reporting?)
  - Unexpected use cases?
  - Lessons learned?

---

🔑 **Key Learnings Attesi**:
- Workflow design richiede analisi dettagliata (non solo "usa AI")
- Human-in-the-loop essenziale (automation ≠ eliminare umano)
- ROI thinking guida prioritization
- Start small (POC → Pilot → Production), iterate
- Documentation critica per maintenance e scaling

**Post-Workshop**:
- Implementa 1 workflow (start con più alto ROI)
- Track metriche per 3 mesi
- Share learnings con team
- Identify next automation opportunity

---

## GIORNO 3: Claude Code per Non-Sviluppatori

## GIORNO 3: Claude Code per Non-Sviluppatori

### Modulo 3.1: Introduzione

[Content outline for Day 3 continues...]

---

## RISORSE

### Template Prompt Riutilizzabili

**Collection di 15+ template pronti**:

1. **PM Collection**
   - Project Status Report (weekly/monthly)
   - Risk Analysis Framework
   - Stakeholder Communication Matrix
   - Change Request Evaluator
   - Lessons Learned Synthesizer

2. **PMO Collection**
   - Portfolio Health Dashboard
   - Project Audit Checklist
   - Resource Allocation Optimizer
   - Governance Compliance Check

3. **Service Design Collection**
   - User Research Synthesis
   - Journey Map Generator
   - Usability Test Reporter
   - Accessibility Audit

4. **Funzionale Collection**
   - Requirements → User Stories
   - Test Case Generator
   - Gap Analysis (AS-IS/TO-BE)
   - API Documentation from Specs

5. **Cross-Role Collection**
   - Meeting Notes → Action Items
   - Email to Executive Summary
   - Multi-Document Synthesis
   - Decision Framework (pros/cons/recommendation)

Ogni template include:
- Full RACE-structured prompt
- Placeholder guide
- Example usage
- Tips & variations

---

### Glossario

**50+ termini essenziali**:

- **Token**: Unità minima di testo per LLM
- **Context Window**: Memoria di lavoro LLM
- **Temperature**: Parametro creatività/casualità
- **Hallucination**: Informazione inventata da LLM
- **Prompt Engineering**: Ottimizzazione input per LLM
- **Few-Shot Learning**: Guidare LLM con esempi
- **Chain-of-Thought**: Ragionamento step-by-step
- **RACE Framework**: Role, Action, Context, Expectations
- **Meta-Prompting**: LLM scrive prompt
- **Claude Projects**: Workspace persistente con custom instructions
- **Output Styles**: Template formato risposta
- **Artifacts**: Contenuti generati visualizzabili/editabili
- **MCP (Model Context Protocol)**: Estensioni/tools per Claude
- **Knowledge Base**: Documenti caricati in Project
- [... continua fino a 50+]

Ogni termine con:
- Definizione chiara
- Esempio pratico
- Quando usarlo
- Related terms

---

### Link Utili

**Documentation**:
- Claude Official Docs
- Anthropic Blog (features updates)
- Prompt Library (Anthropic)

**Tools**:
- OpenAI Tokenizer
- Claude.ai (web)
- Claude Code (desktop)

**Communities**:
- r/ClaudeAI (Reddit)
- Anthropic Discord
- LinkedIn Groups

**Learning**:
- Prompt Engineering courses
- LLM fundamentals

---

### FAQ

**20+ domande comuni**:

**Basics**
- Q: Differenza tra ChatGPT e Claude?
- Q: Come scelgo tra modelli Claude (Haiku/Sonnet/Opus)?
- Q: Cosa fare quando Claude "allucina"?

**Prompt Engineering**
- Q: Quanto dovrebbe essere lungo un prompt?
- Q: Meglio italiano o inglese?
- Q: Come testo se prompt è migliorato?

**Claude Features**
- Q: Quando usare Projects vs Chat?
- Q: Quanti file posso caricare in KB?
- Q: Come creare Output Style custom?

**Claude Code**
- Q: Serve saper programmare?
- Q: Differenza vs Claude Chat?
- Q: Può modificare file sul mio computer?

**Best Practices**
- Q: Come gestisco informazioni sensibili?
- Q: Come verifico accuratezza output?
- Q: Posso condividere prompt con team?

[... continua fino a 20+]

---

**🎯 Questo outline copre TUTTI i contenuti che devono essere sviluppati per il workshop completo.**

**Prossimi step**:
1. Usare questo outline come checklist
2. Sviluppare ogni sezione in file markdown separato
3. Mantenere consistenza tono e struttura
4. Testare esercizi pratici
5. Raccogliere feedback e iterare
