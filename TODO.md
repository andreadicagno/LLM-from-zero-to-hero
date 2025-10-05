# 📋 TODO - Workshop LLM: from Casual User to Power User

> **Last Updated**: 2025-10-05
> **Status**: Planning Phase Complete ✅
> **Progress**: 15% Complete

---

## 🎯 Obiettivo Progetto

Trasformare il sito Docusaurus demo in un corso completo per workshop in 3 giorni sugli LLM, orientato a profili non-tecnici (PM, PMO, Service Design, Funzionali).

**Target**: 8 partecipanti
**Formato**: 3 mercoledì (08/10, 15/10, 22/10/2025), 10:00-15:00
**Tool**: ChatGPT, Copilot, Claude (Chat, Projects, Artifacts, Claude Code)

---

## 📊 Avanzamento Generale

### Fase 1: Setup & Pianificazione ✅
- [x] Analisi struttura Docusaurus esistente
- [x] Definizione piano generale
- [x] Creazione TODO.md
- [x] Creazione `.workshop-plan/` con documentazione pianificazione
  - [x] structure.md (architettura completa sito)
  - [x] content-outline.md (outline dettagliato tutti i moduli)
  - [x] config-changes.md (modifiche Docusaurus config)
  - [x] README.md (guida utilizzo documentazione)
- [x] Creazione template contenuti
  - [x] module-template.md (template moduli teoria)
  - [x] exercise-template.md (template esercizi pratici)
  - [x] index-template.md (template pagine overview)

### Fase 2: Pulizia & Ristrutturazione
- [ ] Rimozione contenuti demo
- [ ] Creazione nuova struttura directory `docs/`
- [ ] Aggiornamento configurazione Docusaurus
- [ ] Aggiornamento sidebars

### Fase 3: Sviluppo Contenuti Giorno 1
- [ ] Modulo 1: LLM Foundations
- [ ] Modulo 2: Prompt Engineering Teoria
- [ ] Modulo 3: Esercizi Pratici

### Fase 4: Sviluppo Contenuti Giorno 2
- [ ] Modulo 1: Projects & Output Styles
- [ ] Modulo 2: Artifacts & Search

### Fase 5: Sviluppo Contenuti Giorno 3
- [ ] Modulo 1: Introduzione Claude Code
- [ ] Modulo 2: Documentation
- [ ] Modulo 3: Research & Analysis
- [ ] Modulo 4: Progetto Finale

### Fase 6: Risorse & Finalizzazione
- [ ] Creazione sezione Risorse
- [ ] Template prompt riutilizzabili
- [ ] Glossario
- [ ] FAQ
- [ ] Homepage personalizzata
- [ ] Testing completo
- [ ] Deploy GitHub Pages

---

## 📁 Struttura File da Creare

### Directory Structure
```
LLM-from-zero-to-hero/
├── .workshop-plan/          # Pianificazione e documentazione
│   ├── structure.md          # Struttura dettagliata
│   ├── content-outline.md    # Outline completo moduli
│   ├── config-changes.md     # Modifiche configurazione
│   └── templates/            # Template contenuti
│       ├── module-template.md
│       ├── exercise-template.md
│       └── resource-template.md
│
├── docs/
│   ├── index.md              # Overview corso
│   ├── informazioni-generali/
│   │   ├── index.md
│   │   ├── obiettivi.md
│   │   ├── prerequisiti.md
│   │   ├── metodologia.md
│   │   └── risultati-attesi.md
│   │
│   ├── giorno-1-foundations/
│   │   ├── index.md
│   │   ├── 01-llm-foundations/
│   │   │   ├── index.md
│   │   │   ├── 01-token.md
│   │   │   ├── 02-anatomia-llm.md
│   │   │   ├── 03-ragionamento.md
│   │   │   ├── 04-contesto.md
│   │   │   ├── 05-multimodalita.md
│   │   │   └── 06-concetti-chiave.md
│   │   │
│   │   ├── 02-prompt-engineering-teoria/
│   │   │   ├── index.md
│   │   │   ├── 01-anatomia-prompt.md
│   │   │   ├── 02-framework-race.md
│   │   │   ├── 03-chain-of-thought.md
│   │   │   ├── 04-few-shot-learning.md
│   │   │   ├── 05-role-based.md
│   │   │   ├── 06-meta-prompting.md
│   │   │   └── 07-debugging.md
│   │   │
│   │   └── 03-esercizi-pratici/
│   │       ├── index.md
│   │       ├── esercizio-1-ottimizzazione.md
│   │       └── esercizio-2-template.md
│   │
│   ├── giorno-2-claude-features/
│   │   ├── index.md
│   │   ├── 01-projects-output-styles/
│   │   │   ├── index.md
│   │   │   ├── 01-claude-projects.md
│   │   │   ├── 02-custom-instructions.md
│   │   │   ├── 03-knowledge-base.md
│   │   │   ├── 04-output-styles.md
│   │   │   ├── 05-tools-mcp.md
│   │   │   └── 06-pratica-integrata.md
│   │   │
│   │   └── 02-artifacts-search/
│   │       ├── index.md
│   │       ├── 01-artifacts.md
│   │       ├── 02-deep-research.md
│   │       ├── 03-file-processing.md
│   │       └── 04-challenge-finale.md
│   │
│   ├── giorno-3-claude-code/
│   │   ├── index.md
│   │   ├── 01-introduzione/
│   │   │   ├── index.md
│   │   │   ├── 01-overview.md
│   │   │   ├── 02-capabilities-non-dev.md
│   │   │   └── 03-setup.md
│   │   │
│   │   ├── 02-documentation/
│   │   │   ├── index.md
│   │   │   ├── 01-creare-documentazione.md
│   │   │   ├── 02-standardizzare.md
│   │   │   ├── 03-knowledge-base.md
│   │   │   └── 04-workshop-pratico.md
│   │   │
│   │   ├── 03-research-analysis/
│   │   │   ├── index.md
│   │   │   ├── 01-analisi-repository.md
│   │   │   ├── 02-estrazione-insights.md
│   │   │   └── 03-synthesis.md
│   │   │
│   │   └── 04-progetto-finale/
│   │       ├── index.md
│   │       ├── 01-brief.md
│   │       ├── 02-presentazioni.md
│   │       └── 03-wrap-up.md
│   │
│   └── risorse/
│       ├── index.md
│       ├── template-prompt.md
│       ├── glossario.md
│       ├── link-utili.md
│       └── faq.md
│
├── static/img/               # Aggiungere immagini custom
├── src/pages/index.tsx       # Homepage da personalizzare
└── blog/                     # Convertire in "Annunci & Aggiornamenti"
```

---

## 🔧 Modifiche Tecniche Necessarie

### File da Modificare
- [ ] `docusaurus.config.ts` - Aggiornare titolo, tagline, navbar, footer
- [ ] `sidebars.ts` - Creare sidebar strutturata per i 3 giorni
- [ ] `src/pages/index.tsx` - Nuova homepage workshop
- [ ] `src/css/custom.css` - Personalizzazione tema

### File da Rimuovere
- [ ] `docs/tutorial-basics/` - Tutto il contenuto demo
- [ ] `docs/tutorial-extras/` - Tutto il contenuto demo
- [ ] `blog/` - Post demo (opzionale: convertire in annunci)

### File da Creare
- [ ] `.workshop-state.json` - Tracking stato workshop
- [ ] 40+ file markdown con contenuti educativi
- [ ] Template riutilizzabili

---

## 📝 Checklist Contenuti per Modulo

Ogni modulo deve includere:

- [ ] **Frontmatter completo**
  - `title`
  - `description`
  - `sidebar_position`
  - `tags`

- [ ] **Learning Objectives**
  - Cosa imparerai
  - Prerequisiti

- [ ] **Contenuto Principale**
  - Spiegazioni chiare
  - Esempi pratici contestualizzati (PM, PMO, Service Design, Funzionali)
  - Codice/prompt con commenti

- [ ] **Tips & Best Practices**
  - Admonitions Docusaurus (:::tip, :::warning, :::info)

- [ ] **Key Takeaways**
  - Punti chiave riassuntivi

- [ ] **Next Steps**
  - Link alla sezione successiva

- [ ] **Esercizi** (dove applicabile)
  - Brief esercizio
  - Soluzione guidata

---

## 🎨 Personalizzazioni UI/UX

### Navbar
- [ ] Aggiornare logo e titolo
- [ ] Link diretti ai 3 giorni
- [ ] Link a Risorse
- [ ] Link GitHub

### Homepage
- [ ] Hero section con overview workshop
- [ ] Card per ogni giorno
- [ ] Call-to-action (Inizia il corso)
- [ ] Statistiche (3 giorni, 40+ moduli, etc.)

### Footer
- [ ] Info contatto
- [ ] Licenza
- [ ] Link social

### Tema
- [ ] Colori brand workshop
- [ ] Dark mode support
- [ ] Badge di progresso per ogni giorno

---

## 📚 Contenuti Specifici da Sviluppare

### Giorno 1: LLM Foundations & Prompt Engineering

#### Modulo 1: LLM Foundations
- [ ] Token e tokenizzazione
- [ ] Anatomia transformer
- [ ] Ragionamento (next token prediction)
- [ ] Context window e gestione
- [ ] Multimodalità
- [ ] Temperature, hallucinations, limiti

#### Modulo 2: Prompt Engineering
- [ ] Framework RACE
- [ ] Chain-of-Thought
- [ ] Few-Shot Learning
- [ ] Role-Based Prompting
- [ ] Meta-Prompting
- [ ] Debugging prompt

#### Modulo 3: Esercizi
- [ ] Esercizio 1: Ottimizzazione prompt inefficaci
- [ ] Esercizio 2: Template personalizzati

### Giorno 2: Claude Advanced Features

#### Modulo 1: Projects & Output Styles
- [ ] Claude Projects setup
- [ ] Custom Instructions avanzate
- [ ] Knowledge base strategy
- [ ] Output Styles personalizzati
- [ ] Tools & MCP connectors

#### Modulo 2: Artifacts & Search
- [ ] Generazione Artifacts professionali
- [ ] Deep Research capabilities
- [ ] File processing (PDF, CSV, images)
- [ ] Challenge combinazione features

### Giorno 3: Claude Code

#### Modulo 1: Introduzione
- [ ] Claude Code vs Chat
- [ ] Capabilities per non-dev
- [ ] Setup e interfaccia

#### Modulo 2: Documentation
- [ ] Creare/aggiornare docs
- [ ] Standardizzare formati
- [ ] Generare knowledge base

#### Modulo 3: Research & Analysis
- [ ] Analizzare repository
- [ ] Estrarre insights da dataset
- [ ] Synthesis e comparative analysis

#### Modulo 4: Progetto Finale
- [ ] Brief progetto complesso
- [ ] Presentazioni flash
- [ ] Certificazione

### Risorse
- [ ] 5+ template prompt riutilizzabili
- [ ] Glossario 30+ termini
- [ ] 10+ link utili
- [ ] FAQ (15+ domande)

---

## 🚀 Priorità di Sviluppo

### Alta Priorità (Fase 1-2)
1. Setup `.workshop-plan/` con tutta la documentazione
2. Pulizia contenuti demo
3. Configurazione Docusaurus e sidebars
4. Struttura directory completa

### Media Priorità (Fase 3-4)
5. Contenuti Giorno 1 (fondamentali)
6. Contenuti Giorno 2
7. Homepage personalizzata

### Bassa Priorità (Fase 5-6)
8. Contenuti Giorno 3
9. Risorse aggiuntive
10. Personalizzazioni UI/UX avanzate
11. Testing e deploy

---

## 📌 Note Importanti

### Linee Guida Contenuti
- **Linguaggio**: Italiano, chiaro e accessibile
- **Tone**: Professionale ma friendly, educativo
- **Target**: Non-STEM, esperienza base ChatGPT
- **Focus**: Pratica > Teoria (60/40)
- **Esempi**: Sempre contestualizzati a PM, PMO, Service Design, Funzionali
- **Casi d'uso**: Azienda consulenza tipo Accenture

### Deliverables Attesi dal Workshop
Per ogni partecipante:
- 3+ template prompt riutilizzabili
- 1 Claude Project configurato
- 1 Output Style custom
- 1 Artifact professionale
- 2+ documenti generati con Claude Code
- 1 progetto finale completato

### Link di Riferimento
- Docusaurus: https://docusaurus.io/docs
- Claude Docs: https://docs.anthropic.com/
- GitHub Repo: https://github.com/andreadicagno/LLM-from-zero-to-hero

---

## 🔄 Sessioni di Lavoro

### Sessione 1 - 2025-10-05 ✅ COMPLETATA
- [x] Analisi struttura esistente
- [x] Definizione piano generale
- [x] Creazione TODO.md con tracking completo
- [x] Setup `.workshop-plan/` directory
- [x] Creazione structure.md (architettura dettagliata ~56 file)
- [x] Creazione content-outline.md (outline completo tutti moduli - DOCUMENTO CHIAVE)
- [x] Creazione config-changes.md (guide modifiche Docusaurus)
- [x] Creazione README.md pianificazione (guida utilizzo docs)
- [x] Creazione 3 template riutilizzabili (module, exercise, index)

**Deliverables Sessione 1**:
- ✅ TODO.md completo con roadmap dettagliata
- ✅ `.workshop-plan/` con 4 file documentazione + 3 template
- ✅ Struttura completa pianificata (56 file da creare)
- ✅ Outline dettagliato di TUTTI i contenuti del corso
- ✅ Sistema riutilizzabile per sviluppo veloce contenuti

**Stato**: Fase Planning completata. Pronto per Fase 2 (Pulizia & Ristrutturazione)

### Sessione 2 - TBD
**Focus**: Pulizia demo e setup configurazione

**Task Pianificati**:
- [ ] Backup file originali (docusaurus.config.ts, sidebars.ts)
- [ ] Rimozione contenuti demo (docs/tutorial-basics/, docs/tutorial-extras/)
- [ ] Applicazione modifiche da config-changes.md:
  - [ ] Aggiornare docusaurus.config.ts (metadata, navbar, footer)
  - [ ] Sostituire sidebars.ts con struttura manuale completa
- [ ] Creazione struttura directory vuota per docs/
- [ ] Test build e fix broken links
- [ ] (Opzionale) Installazione plugin (search, mermaid)

**Deliverables Attesi**:
- Sito pulito da contenuti demo
- Configurazione aggiornata
- Struttura directory pronta per contenuti

### Sessione 3 - TBD
**Focus**: Inizio sviluppo contenuti Giorno 1

**Task Pianificati**:
- [ ] Creazione docs/index.md (homepage corso)
- [ ] Sezione Informazioni Generali (5 file)
- [ ] Giorno 1 - Index + primi moduli LLM Foundations
- [ ] Uso template da .workshop-plan/templates/
- [ ] Reference content-outline.md per contenuti

**Deliverables Attesi**:
- Informazioni Generali complete
- Prime sezioni Giorno 1 funzionanti

---

## 💡 Idee per il Futuro

- [ ] Video tutorial embedded
- [ ] Quiz interattivi con Docusaurus Quiz plugin
- [ ] Certificato di completamento generato
- [ ] Versione in English
- [ ] Community forum/discussion board
- [ ] Template Notion/ClickUp per partecipanti

---

## 📦 Documentazione di Pianificazione Creata

### Directory `.workshop-plan/`

Tutta la documentazione necessaria per sviluppare il progetto si trova in `.workshop-plan/`:

#### 📄 File di Reference

1. **`structure.md`**
   - Architettura completa del sito (directory tree)
   - Sidebar configuration dettagliata
   - File count e organizzazione

2. **`content-outline.md`** ⭐ DOCUMENTO CHIAVE
   - Outline punto-per-punto di TUTTI i moduli (56 file)
   - Learning objectives, esempi, esercizi per ogni sezione
   - Usa come checklist durante scrittura contenuti

3. **`config-changes.md`**
   - Guide step-by-step per modifiche Docusaurus
   - docusaurus.config.ts completo
   - sidebars.ts strutturato
   - Plugin opzionali

4. **`README.md`**
   - Guida come usare la documentazione
   - Workflow sviluppo consigliato
   - Quick reference e troubleshooting

#### 📂 Template Riutilizzabili

1. **`templates/module-template.md`**
   - Template per moduli teoria/contenuto
   - Sezioni: learning objectives, contenuto, esempi, best practices, key takeaways

2. **`templates/exercise-template.md`**
   - Template per esercizi pratici
   - Sezioni: brief, step-by-step, varianti per ruolo, soluzione, peer review

3. **`templates/index-template.md`**
   - Template per pagine overview/index
   - Sezioni: timeline, moduli, deliverables, checklist progressione

### Come Usare la Documentazione

**Per riprendere il lavoro**:
1. Apri `TODO.md` → vedi stato generale
2. Consulta `.workshop-plan/content-outline.md` → vedi cosa scrivere
3. Copia template da `.workshop-plan/templates/` → sviluppa velocemente
4. Reference `.workshop-plan/config-changes.md` → per modifiche config

**Per creare nuovo contenuto**:
```bash
# Copia template appropriato
cp .workshop-plan/templates/module-template.md docs/[path]/nuovo-modulo.md

# Apri content-outline.md per vedere cosa coprire
# Compila template seguendo outline
# Check TODO.md quando completo
```

---

**🎯 Obiettivo Finale**: Sito Docusaurus completo, educativo, pronto per deployment e uso nel workshop del 08/10/2025.

**📊 Progressi**: Fase Planning completata (15%). Prossimo: Fase Pulizia & Config.
