# 📐 Struttura Dettagliata Workshop

> **Documento di Riferimento**: Struttura completa del sito Docusaurus per il workshop LLM
> **Last Updated**: 2025-10-05

---

## 🗂️ Architettura Generale del Sito

```
LLM-from-zero-to-hero/
│
├── docs/                          # Contenuti principali del corso
├── blog/                          # Annunci e aggiornamenti (opzionale)
├── src/                           # Codice sorgente personalizzazioni
├── static/                        # Asset statici (immagini, file)
├── .workshop-plan/                # Pianificazione progetto (questa directory)
└── [config files]                 # Configurazione Docusaurus
```

---

## 📚 Struttura Dettagliata `docs/`

### 🏠 Homepage Corso (`docs/index.md`)
- Overview completo del workshop
- Highlight 3 giorni
- Quick links ai moduli principali
- CTA "Inizia il corso"

### 📋 Informazioni Generali (`docs/informazioni-generali/`)

#### `index.md`
- Introduzione sezione
- Indice contenuti

#### `obiettivi.md`
- Obiettivo del workshop
- Cosa NON è / Cosa È questo workshop
- Da dove partiamo vs dove arriviamo
- Profili target
- Chi trarrà massimo beneficio

#### `prerequisiti.md`
- Hardware richiesto
- Software necessario
- Competenze base richieste
- Setup pre-workshop

#### `metodologia.md`
- Principi guida (Pratica > Teoria)
- Target base
- Real-world focus
- Autonomia come obiettivo
- Struttura delle lezioni

#### `risultati-attesi.md`
- Competenze acquisite
- Deliverables creati
- Mindset sviluppato
- Certificazione (se applicabile)

---

### 📅 GIORNO 1: LLM Foundations & Prompt Engineering

**Path**: `docs/giorno-1-foundations/`

#### `index.md`
- Overview Giorno 1
- Learning objectives della giornata
- Timeline (10:00-15:00)
- Deliverables attesi

#### Modulo 1: LLM Foundations (`01-llm-foundations/`)

##### `index.md`
- Overview modulo
- Perché è importante capire i fondamentali
- Durata: 90 min

##### `01-token.md`
**Titolo**: Token: l'Alfabeto degli LLM
- Cos'è un token
- Come funziona la tokenizzazione
- Esempi pratici (text, emoji, codice)
- Ottimizzazione uso token
- Tool: OpenAI Tokenizer demo
- **Esercizio**: Analizza tokenizzazione di un tuo prompt

##### `02-anatomia-llm.md`
**Titolo**: Come Funziona un LLM
- Transformer architecture (semplificato)
- Training vs Inference
- Pesi del modello
- Differenze tra modelli (GPT, Claude, etc.)
- **Analogia**: LLM come "calcolatrice di parole"

##### `03-ragionamento.md`
**Titolo**: Come "Ragionano" gli LLM
- Next token prediction
- Attention mechanism (concetto base)
- Perché non è vera intelligenza
- Implicazioni pratiche per il prompting
- **Esempio**: Predire prossima parola

##### `04-contesto.md`
**Titolo**: Contesto e Context Window
- Cos'è il context window
- Limiti dei vari modelli
- Gestione memoria di lavoro
- Best practices per contesti lunghi
- **Caso d'uso PM**: Analizzare documento progetto lungo

##### `05-multimodalita.md`
**Titolo**: Capacità Visive e Multimodalità
- Cosa significa multimodale
- Vision capabilities (immagini, screenshot, diagrammi)
- Use cases pratici
- **Esempio PMO**: Analizzare Gantt chart da screenshot

##### `06-concetti-chiave.md`
**Titolo**: Concetti Essenziali
- Temperature (creatività vs precisione)
- Hallucinations (quando e perché)
- Fine-tuning vs Prompt engineering
- Limiti e considerazioni etiche
- **Cheatsheet**: Glossario termini chiave

#### Modulo 2: Prompt Engineering - Teoria (`02-prompt-engineering-teoria/`)

##### `index.md`
- Overview prompt engineering
- Perché è fondamentale
- Durata: 120 min (2 parti)

##### `01-anatomia-prompt.md`
**Titolo**: Anatomia di un Prompt Efficace
- Componenti essenziali
- Struttura ottimale
- Errori comuni da evitare
- **Template base**: Struttura prompt universale

##### `02-framework-race.md`
**Titolo**: Framework RACE
- **R**ole: Definire il ruolo
- **A**ction: Specificare l'azione
- **C**ontext: Fornire contesto
- **E**xpectations: Chiarire aspettative
- **Esempi pratici** per ogni ruolo (PM, PMO, Design, Funzionali)
- **Esercizio**: Trasformare prompt generico in RACE

##### `03-chain-of-thought.md`
**Titolo**: Chain-of-Thought Prompting
- Cos'è il ragionamento step-by-step
- Quando usarlo
- Pattern "Let's think step by step"
- **Caso d'uso PM**: Analisi rischi progetto
- **Template**: CoT per decision making

##### `04-few-shot-learning.md`
**Titolo**: Few-Shot Learning: Guidare con Esempi
- Zero-shot vs Few-shot
- Come scegliere esempi efficaci
- Pattern Input-Output
- **Caso d'uso PMO**: Standardizzare status report
- **Template**: Few-shot per documenti ricorrenti

##### `05-role-based.md`
**Titolo**: Role-Based & Multi-Perspective Prompting
- Assegnare personas specifiche
- Multi-perspective analysis
- Expert panels virtuali
- **Caso d'uso Service Design**: Stakeholder analysis
- **Esempio**: Panel di esperti per decisione strategica

##### `06-meta-prompting.md`
**Titolo**: Meta-Prompting: Far Scrivere Prompt a Claude
- Cos'è il meta-prompting
- Quando delegare la creazione del prompt
- Iterazione e raffinamento
- **Workflow**: Da idea vaga a prompt ottimizzato
- **Esercizio pratico**: Genera prompt per tuo use case

##### `07-debugging.md`
**Titolo**: Debugging e Ottimizzazione Prompt
- Riconoscere prompt deboli
- Tecniche di troubleshooting
- Iterazione metodica
- **Checklist**: 10 segnali di prompt da migliorare
- **Prima/Dopo**: Esempi di ottimizzazione

#### Modulo 3: Esercizi Pratici (`03-esercizi-pratici/`)

##### `index.md`
- Overview sessione pratica
- Modalità di lavoro (individuale/gruppo)
- Criteri valutazione

##### `esercizio-1-ottimizzazione.md`
**Titolo**: Esercizio 1 - Ottimizzare Prompt Inefficaci
- **Brief**: 3 prompt deboli da migliorare
- **Obiettivo**: Applicare framework RACE + CoT
- **Tempo**: 30 min
- **Deliverable**: 3 prompt ottimizzati
- **Soluzione guidata**: Passo-passo con spiegazioni

##### `esercizio-2-template.md`
**Titolo**: Esercizio 2 - Template Personalizzati
- **Brief**: Creare template per task ricorrente del proprio ruolo
- **Esempi per ruolo**:
  - PM: Status report settimanale
  - PMO: Risk analysis
  - Service Design: User research synthesis
  - Funzionali: Requirements documentation
- **Tempo**: 30 min
- **Deliverable**: 2 template riutilizzabili pronti
- **Bonus**: Condivisione peer-to-peer

---

### 📅 GIORNO 2: Claude Advanced Features

**Path**: `docs/giorno-2-claude-features/`

#### `index.md`
- Overview Giorno 2
- Perché passare da ChatGPT a Claude
- Learning objectives
- Timeline
- Deliverables

#### Modulo 1: Projects & Output Styles (`01-projects-output-styles/`)

##### `index.md`
- Overview features Claude uniche
- Durata: 150 min

##### `01-claude-projects.md`
**Titolo**: Claude Projects: Il Tuo Workspace AI
- Cos'è un Project in Claude
- Quando usarlo vs Chat normale
- Struttura di un Project
- **Caso d'uso PM**: Project dedicato a uno specifico cliente
- **Demo**: Creare primo Project

##### `02-custom-instructions.md`
**Titolo**: Custom Instructions Avanzate
- Differenza vs system prompt
- Come scrivere istruzioni efficaci
- Esempi per ruolo:
  - PM: "Sei PM senior per progetti enterprise..."
  - Service Design: "Esperto UX con focus accessibilità..."
- **Template**: Custom Instructions per ogni profilo
- **Best practices**: Cosa includere/evitare

##### `03-knowledge-base.md`
**Titolo**: Knowledge Base Strategy
- Upload documenti e file
- Formati supportati (PDF, DOC, CSV, etc.)
- Organizzazione knowledge base
- **Caso d'uso PMO**: Upload template aziendali, policy, best practices
- **Limiti**: Dimensione, numero file, context
- **Esercizio**: Upload 3 documenti rilevanti

##### `04-output-styles.md`
**Titolo**: Output Styles Personalizzati
- Cos'è un Output Style
- Come crearne uno custom
- Esempi pre-built
- **Use cases**:
  - Formato email aziendale
  - Stile documentazione tecnica
  - Report esecutivi
- **Pratica**: Creare Output Style per deliverable ricorrente

##### `05-tools-mcp.md`
**Titolo**: Tools & MCP Connectors
- Cos'è Model Context Protocol
- Tools disponibili (web search, data analysis, etc.)
- Come abilitare tools nel Project
- **Demo**: Web search per research
- **Caso d'uso**: Competitive analysis automatizzata

##### `06-pratica-integrata.md`
**Titolo**: Pratica Integrata: Configurare Project Completo
- **Challenge**: Setup Project end-to-end
- Configurazione:
  - Nome e descrizione
  - Custom Instructions
  - Upload knowledge base
  - Output Style
  - Tools abilitati
- **Deliverable**: 1 Project funzionante e testato

#### Modulo 2: Artifacts & Search (`02-artifacts-search/`)

##### `index.md`
- Overview modulo
- Durata: 120 min

##### `01-artifacts.md`
**Titolo**: Generare Contenuti Professionali con Artifacts
- Cos'è un Artifact
- Tipi di Artifacts (documenti, presentazioni, diagrammi, codice)
- Quando usare Artifacts vs chat normale
- **Esempi per ruolo**:
  - PM: Gantt chart, WBS, RACI matrix
  - Service Design: User journey map, wireframe
  - PMO: Dashboard KPI, timeline
- **Pratica**: Generare 2 Artifacts professionali

##### `02-deep-research.md`
**Titolo**: Deep Research e Search Capabilities
- Extended thinking per research complesse
- Web search integrato
- Synthesis multi-source
- **Caso d'uso PM**: Market research per nuova iniziativa
- **Caso d'uso Funzionali**: Technology assessment
- **Esercizio**: Research report su topic specifico

##### `03-file-processing.md`
**Titolo**: File Processing Avanzato
- Analisi PDF multi-pagina
- Processing CSV e data analysis
- Elaborazione immagini e screenshot
- OCR e document extraction
- **Casi pratici**:
  - Estrarre insights da quarterly report (PDF)
  - Analizzare dataset progetti (CSV)
  - Interpretare whiteboard session (immagine)
- **Esercizio**: Upload e analisi file reale

##### `04-challenge-finale.md`
**Titolo**: Challenge Finale - Combina Tutte le Features
- **Brief complesso**: Task multi-step che richiede:
  - Project configurato
  - Knowledge base
  - Web search
  - File processing
  - Artifact generation
- **Scenario PM**: Preparare proposal per nuovo cliente
- **Scenario PMO**: Audit progetto in difficoltà
- **Deliverable**: Artifact professionale completo + presentazione
- **Tempo**: 60 min
- **Peer review**: Feedback tra partecipanti

---

### 📅 GIORNO 3: Claude Code per Non-Sviluppatori

**Path**: `docs/giorno-3-claude-code/`

#### `index.md`
- Overview Giorno 3
- Claude Code: cosa cambia
- Learning objectives
- Setup richiesto
- Deliverables

#### Modulo 1: Introduzione (`01-introduzione/`)

##### `index.md`
- Overview modulo introduttivo
- Durata: 45 min

##### `01-overview.md`
**Titolo**: Claude Code vs Claude Chat: Le Differenze
- Cos'è Claude Code
- Quando usare Code vs Chat
- Capabilities uniche di Code:
  - File system access
  - Multi-file editing
  - Terminal integration
  - Repository analysis
- **Misconception**: "È solo per sviluppatori" ❌

##### `02-capabilities-non-dev.md`
**Titolo**: Capabilities per Non-Sviluppatori
- Documentation creation/update
- Content generation in bulk
- Data analysis e transformation
- Research e synthesis
- Template standardization
- **Casi d'uso non-code**:
  - Generare user manual da specs
  - Standardizzare 50+ documenti
  - Analizzare repository documentale
  - Creare knowledge base strutturata

##### `03-setup.md`
**Titolo**: Setup e Interfaccia
- Installazione Claude Code (Mac/Windows/Linux)
- Prima configurazione
- Tour interfaccia
- Comandi base
- **Checklist**: Verifica setup completo
- **Troubleshooting**: Problemi comuni

#### Modulo 2: Documentation & Content (`02-documentation/`)

##### `index.md`
- Overview modulo documentation
- Durata: 105 min

##### `01-creare-documentazione.md`
**Titolo**: Creare e Aggiornare Documentazione
- Generare docs da zero
- Update documenti esistenti
- Multi-file editing
- **Caso d'uso PM**: Creare project charter completo
- **Caso d'uso Funzionali**: Requirements specification
- **Pratica guidata**: Genera set documentazione

##### `02-standardizzare.md`
**Titolo**: Standardizzare Formati
- Analizzare documenti esistenti
- Identificare pattern
- Applicare standard su batch
- **Scenario PMO**: 20 status report con formati diversi → standard unico
- **Esercizio**: Standardizzazione documenti forniti

##### `03-knowledge-base.md`
**Titolo**: Generare Knowledge Base Strutturata
- Da contenuti sparsi a KB organizzata
- Struttura gerarchica
- Indici e cross-reference
- **Output**: Wiki aziendale/KB Markdown
- **Caso d'uso**: Documentare processo complesso

##### `04-workshop-pratico.md`
**Titolo**: Workshop Pratico Progressivo
- **Parte 1**: Genera documento singolo (15 min)
- **Parte 2**: Update batch documenti (20 min)
- **Parte 3**: Crea KB multi-file (25 min)
- **Deliverable**: Set completo documenti + KB

#### Modulo 3: Research & Analysis (`03-research-analysis/`)

##### `index.md`
- Overview modulo research
- Durata: 75 min

##### `01-analisi-repository.md`
**Titolo**: Analizzare Repository Complessi (Non-Code)
- Esplorare struttura directory
- Trovare informazioni specifiche
- Estrarre pattern e insights
- **Caso d'uso PMO**: Audit documentale progetto legacy
- **Caso d'uso Service Design**: Analizzare repository user research
- **Esercizio**: Analizza repository fornito

##### `02-estrazione-insights.md`
**Titolo**: Estrarre Insights da Dataset
- Analisi file CSV/Excel
- Aggregazioni e statistiche
- Visualizzazione data (tabelle, charts)
- **Scenario PM**: Analizzare dati progetti per trend
- **Deliverable**: Report insights + raccomandazioni

##### `03-synthesis.md`
**Titolo**: Synthesis e Comparative Analysis
- Confrontare documenti multipli
- Gap analysis automatizzata
- Executive summary da fonti multiple
- **Caso d'uso**: Comparison competitor analysis
- **Esercizio finale**: Synthesis report da 5+ documenti

#### Modulo 4: Progetto Finale (`04-progetto-finale/`)

##### `index.md`
- Overview progetto finale
- Modalità valutazione
- Durata: 45 min

##### `01-brief.md`
**Titolo**: Brief Progetto Finale
- **Opzione PM**: Preparare complete project documentation per nuovo progetto
- **Opzione PMO**: Audit e remediation plan per progetto in crisi
- **Opzione Service Design**: User research synthesis + journey map documentation
- **Opzione Funzionali**: Complete requirements package per feature complessa
- **Requisiti**:
  - Usare Claude Code
  - Multi-file output
  - Knowledge base integration
  - Professional deliverable
- **Tempo**: 30 min esecuzione

##### `02-presentazioni.md`
**Titolo**: Presentazioni Flash
- 3 minuti per partecipante
- Show deliverable
- Spiega approach
- Lessons learned
- Peer feedback

##### `03-wrap-up.md`
**Titolo**: Wrap-up e Prossimi Passi
- Recap journey 3 giorni
- Key takeaways
- Risorse per continuare
- Community e supporto
- Certificato partecipazione
- **Call to action**: Applica subito nel lavoro

---

### 📚 Risorse Aggiuntive

**Path**: `docs/risorse/`

#### `index.md`
- Overview sezione risorse
- Indice materiali

#### `template-prompt.md`
**Titolo**: Template Prompt Riutilizzabili
- 10+ template pronti per:
  - PM: Status report, risk analysis, stakeholder comm
  - PMO: Audit checklist, governance docs
  - Service Design: User research synthesis, persona creation
  - Funzionali: Requirements, test cases, user stories
- **Formato**: Copy-paste ready
- **Customization guide**: Come adattarli

#### `glossario.md`
**Titolo**: Glossario Completo
- 50+ termini tecnici spiegati
- Organizzato alfabeticamente
- Esempi pratici per ogni termine
- Cross-reference

#### `link-utili.md`
**Titolo**: Link e Riferimenti Utili
- Documentazione ufficiale (Claude, OpenAI, etc.)
- Community e forum
- Tool complementari
- Corsi avanzati
- Blog e newsletter

#### `faq.md`
**Titolo**: FAQ - Domande Frequenti
- 20+ domande comuni con risposte dettagliate
- Organizzate per categoria:
  - Concetti base
  - Prompt engineering
  - Claude features
  - Claude Code
  - Troubleshooting
  - Best practices

---

## 🎨 Altre Sezioni del Sito

### Homepage (`src/pages/index.tsx`)
- Hero section
- Overview workshop (3 card per i 3 giorni)
- Statistiche impatto
- Testimonials (se disponibili)
- CTA "Inizia il corso"

### Blog (`blog/`)
**Opzione 1**: Rimuovere completamente
**Opzione 2**: Convertire in "Annunci & Aggiornamenti"
- Annunci pre-workshop
- Update durante corso
- Post-workshop follow-up

### Footer (in `docusaurus.config.ts`)
- Link sezioni principali
- Contatti organizzatore
- Social links
- Licenza materiali

---

## 📊 Sidebar Configuration

### Sidebar Structure (in `sidebars.ts`)

```typescript
{
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Home',
    },
    {
      type: 'category',
      label: '📋 Informazioni Generali',
      collapsed: false,
      items: [
        'informazioni-generali/index',
        'informazioni-generali/obiettivi',
        'informazioni-generali/prerequisiti',
        'informazioni-generali/metodologia',
        'informazioni-generali/risultati-attesi',
      ],
    },
    {
      type: 'category',
      label: '📅 Giorno 1: Foundations',
      collapsed: true,
      items: [
        'giorno-1-foundations/index',
        {
          type: 'category',
          label: 'LLM Foundations',
          items: [
            'giorno-1-foundations/01-llm-foundations/index',
            'giorno-1-foundations/01-llm-foundations/01-token',
            'giorno-1-foundations/01-llm-foundations/02-anatomia-llm',
            'giorno-1-foundations/01-llm-foundations/03-ragionamento',
            'giorno-1-foundations/01-llm-foundations/04-contesto',
            'giorno-1-foundations/01-llm-foundations/05-multimodalita',
            'giorno-1-foundations/01-llm-foundations/06-concetti-chiave',
          ],
        },
        {
          type: 'category',
          label: 'Prompt Engineering',
          items: [
            'giorno-1-foundations/02-prompt-engineering-teoria/index',
            'giorno-1-foundations/02-prompt-engineering-teoria/01-anatomia-prompt',
            'giorno-1-foundations/02-prompt-engineering-teoria/02-framework-race',
            'giorno-1-foundations/02-prompt-engineering-teoria/03-chain-of-thought',
            'giorno-1-foundations/02-prompt-engineering-teoria/04-few-shot-learning',
            'giorno-1-foundations/02-prompt-engineering-teoria/05-role-based',
            'giorno-1-foundations/02-prompt-engineering-teoria/06-meta-prompting',
            'giorno-1-foundations/02-prompt-engineering-teoria/07-debugging',
          ],
        },
        {
          type: 'category',
          label: 'Esercizi Pratici',
          items: [
            'giorno-1-foundations/03-esercizi-pratici/index',
            'giorno-1-foundations/03-esercizi-pratici/esercizio-1-ottimizzazione',
            'giorno-1-foundations/03-esercizi-pratici/esercizio-2-template',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📅 Giorno 2: Claude Features',
      collapsed: true,
      items: [
        'giorno-2-claude-features/index',
        {
          type: 'category',
          label: 'Projects & Output Styles',
          items: [
            'giorno-2-claude-features/01-projects-output-styles/index',
            'giorno-2-claude-features/01-projects-output-styles/01-claude-projects',
            'giorno-2-claude-features/01-projects-output-styles/02-custom-instructions',
            'giorno-2-claude-features/01-projects-output-styles/03-knowledge-base',
            'giorno-2-claude-features/01-projects-output-styles/04-output-styles',
            'giorno-2-claude-features/01-projects-output-styles/05-tools-mcp',
            'giorno-2-claude-features/01-projects-output-styles/06-pratica-integrata',
          ],
        },
        {
          type: 'category',
          label: 'Artifacts & Search',
          items: [
            'giorno-2-claude-features/02-artifacts-search/index',
            'giorno-2-claude-features/02-artifacts-search/01-artifacts',
            'giorno-2-claude-features/02-artifacts-search/02-deep-research',
            'giorno-2-claude-features/02-artifacts-search/03-file-processing',
            'giorno-2-claude-features/02-artifacts-search/04-challenge-finale',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📅 Giorno 3: Claude Code',
      collapsed: true,
      items: [
        'giorno-3-claude-code/index',
        {
          type: 'category',
          label: 'Introduzione',
          items: [
            'giorno-3-claude-code/01-introduzione/index',
            'giorno-3-claude-code/01-introduzione/01-overview',
            'giorno-3-claude-code/01-introduzione/02-capabilities-non-dev',
            'giorno-3-claude-code/01-introduzione/03-setup',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          items: [
            'giorno-3-claude-code/02-documentation/index',
            'giorno-3-claude-code/02-documentation/01-creare-documentazione',
            'giorno-3-claude-code/02-documentation/02-standardizzare',
            'giorno-3-claude-code/02-documentation/03-knowledge-base',
            'giorno-3-claude-code/02-documentation/04-workshop-pratico',
          ],
        },
        {
          type: 'category',
          label: 'Research & Analysis',
          items: [
            'giorno-3-claude-code/03-research-analysis/index',
            'giorno-3-claude-code/03-research-analysis/01-analisi-repository',
            'giorno-3-claude-code/03-research-analysis/02-estrazione-insights',
            'giorno-3-claude-code/03-research-analysis/03-synthesis',
          ],
        },
        {
          type: 'category',
          label: 'Progetto Finale',
          items: [
            'giorno-3-claude-code/04-progetto-finale/index',
            'giorno-3-claude-code/04-progetto-finale/01-brief',
            'giorno-3-claude-code/04-progetto-finale/02-presentazioni',
            'giorno-3-claude-code/04-progetto-finale/03-wrap-up',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Risorse',
      collapsed: true,
      items: [
        'risorse/index',
        'risorse/template-prompt',
        'risorse/glossario',
        'risorse/link-utili',
        'risorse/faq',
      ],
    },
  ],
}
```

---

## 📁 File Count Summary

### Totale File da Creare

- **Informazioni Generali**: 5 file
- **Giorno 1**: 17 file (1 index + 16 contenuti)
- **Giorno 2**: 11 file (1 index + 10 contenuti)
- **Giorno 3**: 15 file (1 index + 14 contenuti)
- **Risorse**: 5 file
- **Homepage & Config**: 3 file

**TOTALE: ~56 file markdown** + configurazioni

---

## 🎯 Priorità Sviluppo

### Fase 1 (Essenziale)
1. Informazioni Generali (completa)
2. Giorno 1 - Foundations (almeno skeleton)
3. Risorse base (template + glossario)

### Fase 2 (Importante)
4. Giorno 1 - Contenuti completi
5. Giorno 2 - Skeleton + contenuti principali
6. FAQ e link utili

### Fase 3 (Completamento)
7. Giorno 2 - Contenuti completi
8. Giorno 3 - Completo
9. Homepage personalizzata
10. Refinement finale

---

## 📝 Note per lo Sviluppo

### Consistenza
- Ogni file deve seguire stesso template
- Frontmatter standardizzato
- Stile comunicativo uniforme
- Tag coerenti

### Qualità
- Esempi sempre contestualizzati
- Linguaggio accessibile (no jargon)
- Focus pratico
- Esercizi applicabili

### Manutenibilità
- File piccoli e focalizzati
- Facile navigation
- Cross-reference chiari
- Update-friendly

---

**🎯 Questa struttura è il blueprint completo per sviluppare tutti i contenuti del workshop.**
