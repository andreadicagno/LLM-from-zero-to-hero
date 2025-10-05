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

## GIORNO 2: Claude Advanced Features

### Modulo 2.1: Projects & Output Styles

[Content outline for Day 2 continues...]

### Modulo 2.2: Artifacts & Search

[Content outline continues...]

---

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
