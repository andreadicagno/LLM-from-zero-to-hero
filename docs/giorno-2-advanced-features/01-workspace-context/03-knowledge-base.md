---
title: Document Management Strategies
description: Organizzare knowledge base efficacemente per workspace LLM
sidebar_position: 3
tags: [knowledge-base, documents, rag, file-management]
---

# Document Management Strategies

:::tip 🎯 Cosa Imparerai
In questa lezione scoprirai come organizzare una **knowledge base efficace** caricando e gestendo documenti nei tuoi workspace, comprendendo limiti e best practices per ogni provider.
:::

## 🎯 Learning Objectives

Al termine di questa lezione sarai in grado di:

- ✅ **Caricare** e organizzare documenti in workspace persistenti
- ✅ **Comprendere** i limiti tecnici di ogni provider (file size, formati, context)
- ✅ **Applicare** strategie di naming e categorizzazione per retrieval efficiente
- ✅ **Progettare** knowledge base ottimizzate per multi-document analysis

---

## 📚 Persistent Document Context: Il Concetto

### Cos'è una Knowledge Base Persistente?

Una **knowledge base** (KB) in un workspace LLM è una collezione di documenti caricati che:

- ✅ Restano **disponibili permanentemente** in tutte le chat del workspace
- ✅ Vengono **indicizzati automaticamente** per ricerca semantica
- ✅ Possono essere **referenziati senza re-upload** ad ogni nuova conversazione
- ✅ Permettono **multi-document analysis** e comparazioni

### Il Vantaggio: Memory Condivisa

**Scenario senza KB persistente**:
```
Chat 1: "Ecco il project charter [upload]"
        → Analisi
Chat 2: "Ecco ancora il charter [re-upload] + risk register [upload]"
        → Nuova analisi
Chat 3: [Re-upload tutto di nuovo...]
        → Ripetizione infinita
```

**Scenario con KB persistente**:
```
Setup iniziale:
- Upload project charter (una volta)
- Upload risk register (una volta)
- Upload requirements doc (una volta)

Chat 1: "Analizza rischi dal risk register"
        → Risposta basata su doc già caricato
Chat 2: "Confronta requirements con charter scope"
        → Analisi cross-document automatica
Chat 3: "Estrai stakeholder da tutti i doc"
        → Multi-document synthesis
```

→ **Setup una volta, benefici permanenti!**

---

## 🔧 RAG: Come Funziona Tecnicamente (Per Non-Tecnici)

### Retrieval Augmented Generation (RAG) Basics

Quando carichi documenti in un workspace, succede questo dietro le quinte:

```
1. UPLOAD
   Tu → [Upload project-charter.pdf]

2. CHUNKING
   Sistema → Divide documento in "chunks" (pezzi da ~500-1000 parole)
   Esempio: 100-page document → ~150 chunks

3. EMBEDDING
   Sistema → Crea "impronta digitale semantica" di ogni chunk
   (Vector representation del significato)

4. INDEXING
   Sistema → Salva chunks + embeddings in indice ricercabile

5. QUERY TIME
   Tu → "Quali sono gli obiettivi del progetto?"
   Sistema →
     a. Trova chunks rilevanti nell'indice (top 5-10 più simili)
     b. Passa questi chunks + la tua domanda al LLM
     c. LLM genera risposta basandosi sui chunks trovati
```

### Implicazioni Pratiche

**✅ Query Specifiche = Retrieval Migliore**
```
❌ VAGUE: "Dimmi del progetto"
   → Sistema non sa quali chunks recuperare

✅ SPECIFIC: "Quali sono gli obiettivi Q2 del progetto Digital Platform?"
   → Sistema trova esattamente i chunks rilevanti
```

**✅ Documenti Strutturati = Accuracy Maggiore**
```
✅ GOOD: Documento con headings, sections, bullet points
   → Sistema chunka in modo logico
   → Retrieval preciso

❌ BAD: Muro di testo senza struttura
   → Chunks casuali
   → Retrieval impreciso
```

**⚠️ Troppi Documenti = Possibile Noise**
```
10 documenti rilevanti → Signal alto, noise basso
100 documenti semi-rilevanti → System confuso, retrieval degradato
```

:::info 💡 Nota Tecnica Semplificata
Non devi capire i dettagli di "embeddings" o "vector search". Il punto chiave è:
- **Upload strutturato** + **Query specifiche** = Risultati migliori
- **Quality > Quantity** nei documenti caricati
:::

---

## 📄 Formati Supportati per Provider

### Tabella Formati Cross-Provider

| Formato | Claude Projects | ChatGPT | Gemini | Note |
|---------|----------------|---------|--------|------|
| **PDF** | ✅ | ✅ | ✅ | Formato universale |
| **TXT** | ✅ | ✅ | ✅ | Plain text |
| **DOCX** | ✅ | ✅ | ✅ | Microsoft Word |
| **XLSX** | ✅ | ✅ | ❌ | Excel (Claude/ChatGPT only) |
| **CSV** | ✅ | ✅ | ✅ | Tabelle dati |
| **Markdown (.md)** | ✅ | ✅ | ✅ | Formato testo strutturato |
| **Code files** | ✅ (.py, .js, .java, etc.) | ✅ | ✅ | Source code |
| **Images (PNG, JPG)** | ✅ Nativo | ✅ Con GPT-4V | ✅ Nativo | Vision capabilities |
| **Audio** | ❌ | ✅ Via Whisper | ✅ Nativo | Transcription |
| **Video** | ❌ | 🟡 Beta (frames) | ✅ Nativo | Gemini più maturo |
| **Google Docs** | ❌ | ❌ | ✅ Via Drive | Gemini only |
| **Presentations** | Via PDF | Via PDF | ✅ Google Slides nativo | |

### Multimodal Capabilities

**🔷 Claude Projects**:
- **Forza**: Eccellente per documenti lunghi (PDF, DOCX)
- **Immagini**: Supporto nativo per screenshots, diagrammi, charts
- **Limitazione**: No audio/video diretto

**🟢 ChatGPT**:
- **Forza**: Code Interpreter per data analysis (CSV, XLSX)
- **Audio**: Whisper integration per transcription
- **Video**: Beta (frame extraction)

**🔴 Gemini**:
- **Forza**: True multimodal (text + image + audio + video in stesso context)
- **Google Workspace**: Accesso diretto a Drive, Docs, Sheets, Slides
- **Limitazione**: Meno maturo per large text documents vs Claude

---

## 📊 Limiti Tecnici per Provider

### Tabella Limiti Comparativa

| Limite | Claude Projects | ChatGPT (GPT-4) | Gemini Pro |
|--------|----------------|-----------------|------------|
| **Max File Size** | 32MB per file | 25MB per file | 20MB per file |
| **Max Number of Files** | 100+ files | ~20 files per chat | Variable (Google Drive) |
| **Total Context Window** | 1,000,000 tokens | 128,000 tokens | 1,000,000 tokens |
| **Equivalent Pages** | ~3,000 pages | ~400 pages | ~3,000 pages |
| **Persistence** | Permanent per Project | Per-chat (non persistent) | Per Gem or Drive access |
| **Best For** | Document-heavy projects | Single-session analysis | Google Workspace integration |

### Implicazioni Pratiche

**Claude Projects** - Document Champion:
```
Scenario: PM con progetto enterprise
✅ CAN DO:
- Upload 50+ documenti (charter, specs, reports, risks, etc.)
- Totale 500 pages
- Analisi cross-document permanente

Example:
- 20 requirements docs (200 pages)
- 15 sprint reports (50 pages)
- 10 design docs (150 pages)
- 5 test plans (100 pages)
→ Total: 50 files, 500 pages, ~400K tokens
→ Fits comfortably con room to spare!
```

**ChatGPT** - Session-Based:
```
Scenario: Quick analysis task
⚠️ LIMITATIONS:
- Max ~20 files per chat
- No persistence between chats

Workaround:
- Use Custom GPT per persistence (ma comunque limiti più stringenti)
- Best per: Single-document deep analysis o task automation

Example:
- Upload 10 CSV files (data analysis)
- Code Interpreter generates insights
→ Works well per session, ma devi re-upload se nuova chat
```

**Gemini** - Workspace Integrated:
```
Scenario: Google Workspace user
✅ ADVANTAGE:
- Accesso diretto a Google Drive
- No "upload" manuale necessario
- File size limits meno critici (Drive access)

Example:
- Gem con access a Drive folder "/Project X"
- 100+ docs in folder
- Gem cerca e analizza automaticamente
→ Seamless integration, ma dipendi da Google ecosystem
```

---

## 🗂️ Upload Strategies: Organizzare la KB

### Categorizzazione by Type

Organizza documenti in 3 categorie:

#### 1. Core Docs (Sempre Caricati)
**Caratteristiche**:
- Consultati frequentemente (80% delle query)
- Informazioni fondamentali sempre necessarie
- Raramente cambiano

**Esempi**:
- Project charter / Statement of Work
- Glossario termini progetto
- Team directory / RACI matrix
- Stakeholder analysis
- Governance framework

**Strategia**: Upload permanente, update solo se cambiano

---

#### 2. Reference Docs (On-Demand)
**Caratteristiche**:
- Consultati occasionalmente (15% delle query)
- Informazioni dettagliate specialistiche
- Voluminosi (50+ pages)

**Esempi**:
- Requirements specification completa (200+ pages)
- Architecture design documents
- Technical specifications
- Standard operating procedures
- Policy documents

**Strategia**: Upload quando necessario per task specifico, poi rimuovi se ingombrano

---

#### 3. Data Docs (Periodicamente Aggiornati)
**Caratteristiche**:
- Cambiano frequentemente (weekly/monthly)
- Dati time-sensitive
- Sostituisci versione obsoleta

**Esempi**:
- Weekly status reports (naming: `status-2025-01-15.pdf`)
- Sprint burndown charts
- Issues/bugs log (export da Jira/Azure)
- Test results / QA reports
- Metrics dashboards

**Strategia**: Upload + rimuovi old version quando aggiorni

---

### Naming Conventions

#### Principi Base

**✅ GOOD Naming**:
```
project-charter-v2.pdf
status-report-2025-01-15.pdf
REQ_authentication-module.docx
TEST_integration-scenarios-sprint12.xlsx
stakeholder-analysis-Q1-2025.pdf
```

**❌ BAD Naming**:
```
doc1.pdf
Final_FINAL_v3_REAL.docx
Untitled.pdf
Copy of Copy of report.pdf
Screenshot 2025-01-10 at 15.32.18.png
```

#### Naming Template

```
[CATEGORY]_[description]-[version/date].[ext]

Dove:
- CATEGORY: REQ, TEST, ARCH, REPORT, etc. (opzionale, utile per ordinamento)
- description: snake-case o kebab-case
- version/date: v1, v2 OR YYYY-MM-DD
- ext: formato file
```

#### Esempi per Ruolo

**PM**:
```
CHARTER_digital-platform-v3.pdf
RISK_register-updated-2025-01-10.xlsx
REPORT_status-steering-committee-2025-01-15.pdf
MEETING_kickoff-notes-2025-01-08.md
```

**PMO**:
```
PORTFOLIO_dashboard-Q1-2025.xlsx
GOVERNANCE_gate-review-checklist.pdf
RESOURCE_allocation-matrix-jan2025.xlsx
```

**Service Designer**:
```
RESEARCH_interview-transcripts-cohort-A.pdf
PERSONA_primary-users-v2.pdf
JOURNEY_customer-onboarding-current.pdf
USABILITY_test-results-sprint8.xlsx
```

**Business Analyst**:
```
REQ_functional-specs-module-auth-v4.docx
USER-STORY_backlog-sprint15.xlsx
TEST_acceptance-criteria-auth.pdf
TRACE_requirements-traceability-matrix.xlsx
```

---

## 💼 Case Studies per Ruolo

### 👔 Project Manager - Enterprise Project KB

**Scenario**: Progetto Digital Transformation, 12 mesi, €2M budget, 15 persone

**KB Setup** (Claude Project):

**Core Docs** (sempre loaded - 10 files, ~50MB, ~100 pages):
```
├── CHARTER_digital-transformation-v2.pdf (12 pages)
├── stakeholder-analysis.xlsx (5MB, matrix 20 stakeholders)
├── RISK_register-live.pdf (15 pages, 50+ risks tracked)
├── team-directory-roles-raci.csv (50 rows)
├── glossary-project-terms.md (200 terms)
├── GOVERNANCE_decision-log.xlsx (100+ decisions)
├── budget-tracking-baseline.xlsx (10MB)
├── timeline-master-schedule.pdf (5 pages Gantt)
├── scope-baseline-approved.pdf (8 pages)
└── communication-plan.pdf (6 pages)
```

**Reference Docs** (load when needed - 8 files, ~30MB, ~300 pages):
```
├── REQ_functional-requirements-v3.pdf (150 pages)
├── ARCH_technical-architecture.pdf (80 pages)
├── TEST_test-strategy-plan.pdf (40 pages)
├── VENDOR_contract-terms.pdf (30 pages)
```

**Data Docs** (updated weekly - 10 files, rotating):
```
├── REPORT_status-2025-01-15.pdf (most recent)
├── REPORT_status-2025-01-08.pdf (previous week)
├── REPORT_status-2025-01-01.pdf (keep last 4 weeks)
├── burndown-sprint12.png
├── issues-log-latest.csv (export da Jira weekly)
├── velocity-metrics-Q1.xlsx
```

**Total**: ~28 files active, ~80MB, ~450 pages → **Fits comfortably in 1M token Claude Project**

**Typical Queries**:
```
✅ "Draft status report for steering committee comparing progress vs baseline"
   → Accesses: status reports, baseline, timeline, risks

✅ "Analizza top 5 risks e suggerisci mitigation basandoti su decision log"
   → Accesses: risk register, decision log, lessons learned

✅ "Estrai action items da ultimo meeting notes e assegna owner da team directory"
   → Accesses: meeting notes, team directory, RACI

✅ "Budget variance analysis: actual vs baseline"
   → Accesses: budget tracking, baseline
```

---

### 📊 PMO Director - Portfolio KB

**Scenario**: Portfolio 12 progetti, reporting mensile C-level

**KB Setup** (ChatGPT GPT con automation):

**Core Docs** (template based):
```
├── TEMPLATE_portfolio-dashboard.xlsx
├── GOVERNANCE_framework-PMI.pdf
├── RESOURCE_org-chart-capacity.xlsx
├── STANDARD_reporting-formats.docx
```

**Data Docs** (uploaded monthly per automation):
```
├── PROJECT_status-alpha-jan2025.pdf
├── PROJECT_status-beta-jan2025.pdf
├── PROJECT_status-gamma-jan2025.pdf
... (12 total)
```

**API Integration** (ChatGPT Actions):
- Jira API: Pull sprint metrics
- Azure DevOps: Pull velocity data
- Excel: Generate consolidated dashboard

**Typical Workflow**:
```
1. Upload 12 status reports (PDF)
2. GPT extracts: Project name, RAG, budget var%, timeline var, top risk
3. Generates portfolio table (markdown)
4. Flags AMBER/RED projects automatically
5. Provides 3 executive recommendations
6. Exports to Excel template via action
```

---

### 🎨 Service Designer - Research KB

**Scenario**: User research redesign customer journey, 20 interviews

**KB Setup** (Gemini Gem con Google Drive):

**Google Drive Structure**:
```
/User Research 2025/
├── /interviews-transcripts/
│   ├── P001-interview-transcript.docx (20 files)
│   └── ...
├── /recordings/
│   ├── P001-session.mp4 (10 video files)
│   └── ...
├── /survey-results/
│   └── survey-responses-200.sheets
├── /synthesis/
│   ├── themes-identified.doc
│   └── pain-points-matrix.sheets
```

**Gem Instructions**:
```
"Access Google Drive folder '/User Research 2025'.
When I ask for analysis, scan all interview transcripts.
Extract pain points with quotes (cite [P001, Line 45]).
Categorize by frequency (H/M/L).
When I mention 'email', search Gmail for related threads."
```

**Typical Queries**:
```
✅ "Analizza tutte le interviews e estrai top 10 pain points"
   → Gem scans 20 transcript files automatically

✅ "Trova pattern tra P001-P010 (Persona A) vs P011-P020 (Persona B)"
   → Comparative analysis across file groups

✅ "Genera synthesis report con supporting quotes per stakeholder workshop"
   → Multi-document synthesis con citations

✅ "Cerca in Gmail discussioni su 'checkout flow issues'"
   → Gmail extension search correlata
```

---

### 📋 Business Analyst - Requirements KB

**Scenario**: Requirements elicitation nuovo CRM module

**KB Setup** (Claude Project):

**Core Docs**:
```
├── SYSTEM_as-is-documentation.pdf (100 pages)
├── REQ_stakeholder-requirements-raw.docx (50 requirements)
├── USER-STORY_backlog-master.xlsx (200 stories)
├── DATA_data-dictionary-entities.pdf (50 entities)
├── STANDARD_user-story-template.md
├── STANDARD_acceptance-criteria-template.md
```

**Typical Queries**:
```
✅ "Trasforma requirement REQ-042 in user stories formato standard"
   → Accesses: requirement doc, template, data dictionary

✅ "Genera acceptance criteria Given-When-Then per user story US-105"
   → Accesses: story, template, similar examples

✅ "Trova conflitti tra requirements stakeholder Sales vs Operations"
   → Cross-document conflict analysis

✅ "Crea traceability matrix: requirements → user stories → test cases"
   → Multi-document traceability generation
```

---

## ✏️ Esercizio: Design Your Knowledge Base

### Step 1: Inventory Documenti

**Lista documenti che consulti regolarmente** (ultimi 30 giorni):

| Documento | Frequenza Uso | Last Update | Size |
|-----------|---------------|-------------|------|
| _[Example: Project charter]_ | _[Daily/Weekly/Monthly]_ | _[Date]_ | _[MB/Pages]_ |
| | | | |
| | | | |

**Total Count**: ___ documenti
**Total Size**: ___ MB / ___ pagine

### Step 2: Categorizza

**Assegna categoria** a ogni documento:

**Core Docs** (sempre necessari):
-
-

**Reference Docs** (consultazione occasionale):
-
-

**Data Docs** (aggiornamento periodico):
-
-

### Step 3: Verifica Limiti Provider

**Provider scelto**: [Claude / ChatGPT / Gemini]

**Check limiti**:
- [ ] Total size &lt; max allowed?
- [ ] Number of files &lt; max allowed?
- [ ] Formati tutti supportati?
- [ ] Strategia update per Data Docs definita?

### Step 4: Naming Convention

**Definisci tua convention**:
```
Pattern: _______________

Esempi:
- File tipo 1: _______________
- File tipo 2: _______________
- File tipo 3: _______________
```

### Step 5: Upload & Test

**Test queries** da provare dopo upload:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Valuta**:
- ✅ Retrieval accurato?
- ✅ Citazioni corrette?
- ✅ Cross-document analysis funziona?

Se qualcosa non funziona → raffina naming, struttura docs, o query specificity

---

## ⚠️ Best Practices & Common Pitfalls

### ✅ DO: Clean Documents

**Before Upload**:
```
✅ Rimuovi header/footer ripetitivi
✅ Elimina pagine blank o template boilerplate
✅ Assicurati headings chiari (H1, H2, H3)
✅ Tabelle ben formattate
✅ No scan di bassa qualità (se PDF)
```

**Why**: Sistema chunka meglio contenuto pulito → retrieval più accurato

---

### ✅ DO: Structured Content

**Good Structure** (LLM-friendly):
```markdown
# Main Topic

## Subtopic 1
Clear paragraph with key info.

- Bullet point 1
- Bullet point 2

## Subtopic 2
Another clear section.

| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

**Bad Structure** (wall of text):
```
Lorem ipsum dolor sit amet consecutive adipiscing elit sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua ut
enim ad minim veniam quis nostrud exercitation ullamco laboris...
[2000 words senza pause, headings, o struttura]
```

---

### ✅ DO: Periodic Cleanup

**Monthly KB Audit**:
- [ ] Rimuovi documenti obsoleti (sostituiti da versione più recente)
- [ ] Archivia data docs &gt;3 mesi (se non più rilevanti)
- [ ] Verifica total size vs limit
- [ ] Test sample queries per check retrieval quality

---

### ❌ DON'T: Upload Everything

**More ≠ Better**

```
❌ BAD: Upload 100 documenti "per sicurezza"
   → Sistema confuso
   → Retrieval degradato (troppo noise)
   → Query lente

✅ GOOD: Upload 15-20 documenti veramente rilevanti
   → Signal alto
   → Retrieval preciso
   → Query veloci
```

**Rule of Thumb**: Se non hai consultato documento in ultimo mese, probabilmente non serve nella KB.

---

### ❌ DON'T: Ignore File Naming

**Bad naming → bad retrieval**:
```
❌ doc1.pdf, doc2.pdf, doc3.pdf
   → Sistema non sa cosa contengono senza aprirli
   → User non sa quale è quale

✅ risk-register-updated-2025-01.pdf
   → Self-explanatory
   → Easy to find
   → LLM può inferire contenuto da nome
```

---

## 🔑 Key Takeaways

- 📂 **KB ben organizzata** = efficienza 10x nel lavoro con workspace LLM
- 🔄 **Ogni provider ha limiti diversi**:
  - Claude: Champion per document-heavy (1M tokens, 100+ files)
  - ChatGPT: Session-based, ottimo per automation API
  - Gemini: Google Workspace native, true multimodal
- 🎯 **Quality &gt; Quantity**: 15 documenti rilevanti &gt; 100 documenti marginali
- 📝 **Naming & structure** aiutano retrieval: nomi descrittivi, documenti ben strutturati
- 🗂️ **3 categorie**: Core (sempre), Reference (on-demand), Data (periodic update)
- 🧹 **Cleanup periodico**: rimuovi obsoleti, mantieni KB lean e focused

---

## 📚 Prossimi Passi

Ora che sai organizzare una knowledge base efficace, nella prossima lezione imparerai **Advanced Context Management**: come ottimizzare uso del context window, strategie di summarization, e multi-session workflows.

**➡️ Continua con**: [Context Optimization](./context-optimization)

**⬅️ Torna a**: [Custom Instructions](./custom-instructions)

---

:::tip 💡 Pro Tip: Version Control per KB
Mantieni un file `_KB-CHANGELOG.md` nel tuo workspace:
```markdown
# KB Changelog

## 2025-01-15
- Added: risk-register-updated.pdf (replaced v2024-12)
- Removed: old-requirements-v1.pdf (superseded by v3)
- Updated: team-directory.csv (3 new members)

## 2025-01-08
- Added: status-report-2025-01-08.pdf
- ...
```
Aiuta a tracciare evoluzione KB e debug se retrieval degrada!
:::
