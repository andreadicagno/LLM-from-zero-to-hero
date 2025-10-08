---
title: Workshop Pratico - Setup Workspace
description: Creare workspace completo hands-on per il proprio ruolo
sidebar_position: 5
tags: [workshop, hands-on, practice, workspace-setup]
---

# Workshop Pratico: Setup Workspace

:::tip 🎯 Obiettivo Esercizio
In questo workshop hands-on creerai e configurerai **1 workspace completo** per un task ricorrente del tuo ruolo professionale, mettendo in pratica tutto ciò che hai imparato nel Modulo 1.
:::

## 📋 Informazioni Workshop

| Aspetto | Dettaglio |
|---------|-----------|
| ⏱️ **Tempo** | 45 minuti |
| 👤 **Modalità** | Individuale con checkpoints gruppo |
| 📦 **Deliverable** | 1 workspace configurato e testato |
| 🎯 **Obiettivo** | Workspace immediatamente utilizzabile nel lavoro reale |

---

## 🚀 Istruzioni Step-by-Step

### Step 1: Scegli Use Case (5 min)

**Identifica task ricorrente** nel tuo lavoro che beneficerebbe da un workspace persistente.

**Criteri selezione**:
- ✅ Task che ripeti settimanalmente o mensilmente
- ✅ Richiede consultazione di multipli documenti
- ✅ Formato output standardizzato
- ✅ Risparmio tempo stimato &gt;1 ora/mese

**Esempi per Ruolo**:

**Project Manager**:
- 📊 Weekly status reporting per steering committee
- 🎯 Sprint planning e estimation
- ⚠️ Risk analysis e mitigation planning
- 📝 Project charter drafting

**PMO Director**:
- 📈 Portfolio health dashboard (mensile)
- 🔍 Resource capacity planning
- 📊 Executive reporting consolidation
- 🎯 Governance compliance review

**Service Designer**:
- 🔬 User research synthesis (da interviews)
- 🗺️ Customer journey mapping
- 📋 Usability test analysis
- 💡 Design recommendations generation

**Business Analyst / Funzionale**:
- 📝 Requirements documentation
- ✅ User story generation da requirements
- 🧪 Test case creation
- 🔗 Traceability matrix generation

**📝 Scrivi qui il tuo use case scelto**:
```
Use case: _______________________________________
Frequenza: [Weekly / Bi-weekly / Monthly]
Tempo attuale speso: _______ ore
Risparmio stimato con workspace: _______ ore
```

---

### Step 2: Scegli Provider (5 min)

**Reference al Decision Tree** (lezione 01-workspace-concepts):

```
❓ Lavori con molti documenti lunghi? → Claude Projects
❓ Serve API integration / automation? → ChatGPT GPTs
❓ Usi Google Workspace heavily? → Gemini Gems
```

**Checklist considerazioni**:
- [ ] Ho già abbonamento a questo provider?
- [ ] I miei documenti rientrano nei limiti (size, numero)?
- [ ] Formati supportati coprono i miei file?
- [ ] Feature speciali necessarie disponibili?

**📝 Provider scelto**: ________________

**Motivazione** (1-2 frasi): ________________________________________________________

---

### Step 3: Raccogli Documenti (10 min)

**Lista 5-10 documenti** rilevanti per il tuo use case.

**Template Inventory**:

| # | Documento | Tipo | Size | Categoria |
|---|-----------|------|------|-----------|
| 1 | ____________ | PDF/DOCX/XLSX | __MB | Core/Ref/Data |
| 2 | ____________ | PDF/DOCX/XLSX | __MB | Core/Ref/Data |
| 3 | ____________ | PDF/DOCX/XLSX | __MB | Core/Ref/Data |
| 4 | ____________ | PDF/DOCX/XLSX | __MB | Core/Ref/Data |
| 5 | ____________ | PDF/DOCX/XLSX | __MB | Core/Ref/Data |
| ... | | | | |

**Totale Size**: _______ MB
**Totale Files**: _______ files

**Verifica Limiti**:
- [ ] Total size &lt; limit provider
- [ ] Number files &lt; limit provider
- [ ] Formati tutti supportati

**Naming Convention**:

Pattern scelto: `[CATEGORY]_[description]-[version/date].[ext]`

**Esempio**: `CHARTER_digital-platform-v2.pdf`

---

### Step 4: Scrivi Custom Instructions (15 min)

**Usa template** da lezione 02-custom-instructions, personalizza per il tuo use case.

**Template Base**:
```markdown
# Role
You are a [YOUR_ROLE] with expertise in [DOMAIN].

# About My Context
- [Key context point 1]
- [Key context point 2]
- [Stakeholders/Team info]
- [Methodology/Framework used]

# When I Ask For [TASK_1]
Format:
- [Output element 1]
- [Output element 2]
- [Output element 3]

Length: [word count]
Tone: [tone description]

# When I Ask For [TASK_2]
Format:
- ...

# Default Behavior
- [Behavior guideline 1]
- [Behavior guideline 2]
- [When to ask clarifying questions]

# Output Format
- [Markdown/Plain text preferences]
- [Bullets vs numbered lists]
- [Emojis yes/no]

# Tone
[Overall tone description: professional, technical, executive-friendly, etc.]
```

**📝 Le tue Custom Instructions** (scrivi qui o in file separato):

_(Compila template sopra con le tue informazioni)_

---

### Step 5: Setup & Upload (5 min)

**Azioni da completare**:

**🔷 Se usi Claude**:
1. [ ] Vai a claude.ai → "Projects"
2. [ ] Click "Create Project"
3. [ ] Nome: `[Descrittivo, es: "Weekly Status Reports - Q1 2025"]`
4. [ ] Upload documenti da Step 3
5. [ ] Settings → "Custom Instructions" → Paste instructions da Step 4
6. [ ] Save

**🟢 Se usi ChatGPT**:
1. [ ] Vai a chat.openai.com → "Explore GPTs"
2. [ ] Click "Create a GPT"
3. [ ] Nome: `[Descrittivo]`
4. [ ] Instructions: Paste da Step 4
5. [ ] Upload files (se Custom GPT) OR provide in chat
6. [ ] Conversation starters: 3-5 query tipiche
7. [ ] Save (Private / Public)

**🔴 Se usi Gemini**:
1. [ ] Vai a gemini.google.com → "Gem Manager" (💎)
2. [ ] "Create Gem"
3. [ ] Nome: `[Descrittivo]`
4. [ ] Instructions: Paste da Step 4
5. [ ] Extensions: Seleziona se serve (Drive, Gmail, etc.)
6. [ ] Save

---

### Step 6: Test & Iterate (10 min)

**Test con 3 query tipiche** del tuo use case.

**Query Test Template**:

**Query 1** (Basic scenario):
```
[Scrivi prima query tipica qui]
```

**Valuta Output**:
- [ ] ✅ Rispetta formato richiesto nelle instructions
- [ ] ✅ Tone appropriato per audience
- [ ] ✅ Referenzia documenti caricati correttamente
- [ ] ✅ Lunghezza adeguata
- [ ] ✅ Actionable e utile per il tuo lavoro

Se qualcosa non va → **Refine instructions** e ri-testa.

---

**Query 2** (Complex scenario):
```
[Query più complessa che richiede multi-document analysis]
```

**Valuta Output**:
- [ ] ✅ Cross-document synthesis funziona
- [ ] ✅ Cita fonti correttamente ([Doc name, page/section])
- [ ] ✅ No hallucinations (info inventate)
- [ ] ✅ Completeness (copre tutti gli aspetti richiesti)

---

**Query 3** (Edge case):
```
[Scenario meno frequente ma importante]
```

**Valuta Output**:
- [ ] ✅ Gestisce caso edge appropriatamente
- [ ] ✅ Chiede clarifications se info mancanti (good!)
- [ ] ✅ Non fa assumptions pericolose

---

**Refinement Notes**:
```
Cosa funziona bene:
- [Note]
- [Note]

Cosa va migliorato:
- [Issue] → [Fix]
- [Issue] → [Fix]

Next iteration instructions:
- [Change 1]
- [Change 2]
```

---

## 💼 Esempio Completo: PM Status Report Workspace

**Use Case**: Weekly status report per steering committee

### Setup Details

**Provider**: 🔷 Claude Project

**Documenti Caricati** (8 files, ~35MB):
```
1. CHARTER_digital-platform-v2.pdf (12 pages, Core)
2. stakeholder-analysis.xlsx (5MB, Core)
3. RISK_register-live.pdf (15 pages, Core)
4. baseline-schedule.pdf (5 pages, Core)
5. REPORT_status-2025-01-08.pdf (3 pages, Data)
6. REPORT_status-2025-01-01.pdf (3 pages, Data)
7. issues-log-latest.csv (50 rows, Data)
8. team-directory.csv (20 rows, Core)
```

**Custom Instructions**:
```markdown
# Role
You are a Senior Project Manager for the Digital Platform project.

# About My Context
- Project: 12-month enterprise digital transformation
- Team: 15 people (5 devs, 3 QA, 2 UX, 2 BAs, 1 architect, 1 scrum master, you)
- Stakeholders: CTO (sponsor), CFO, Product Owner, 3 dept heads
- Methodology: Agile/Scrum, 2-week sprints
- Reporting: Weekly to steering committee (Fridays)

# When I Ask For Status Reports
Format:
- 📊 **Progress**: Current sprint/milestone + % complete vs baseline
- ⚠️ **Top 3 Risks**: From risk register, rate H/M/L, mitigation status
- ✅ **Achievements This Week**: 2-3 key wins
- 🚧 **Blockers**: Current impediments requiring escalation
- ➡️ **Next Week Focus**: Priority actions with owners

Length: Max 400 words (executive-friendly, concise)
Tone: Confident, data-driven, solution-oriented
Always: Reference baseline for variance analysis, cite specific docs

# When I Ask For Risk Analysis
- Pull from risk register document
- Categorize: Technical / Organizational / External
- For HIGH risks: Always suggest 2-3 mitigation actions
- Include early warning indicators

# Default Behavior
- Be proactive: Suggest next steps even if not asked
- Be specific: Use dates, names, numbers (not "soon" or "someone")
- Be actionable: Every recommendation = clear owner + deadline
- Ask clarifying questions if context insufficient

# Output Format
- Markdown with clear headers
- Emojis for quick scanning (📊 🎯 ⚠️ ✅ 🚧 ➡️)
- Bullets for lists
- Tables when comparing options

# Tone
Professional, confident, solution-oriented. Avoid: jargon, hedging language, overly casual.
```

**Test Query 1** (Basic):
```
"Draft this week's status report. We completed sprint 12,
now at 62% overall project completion. New blocker: vendor API delay 1 week."
```

**Expected Output Structure**:
```
📊 **Progress**
- Sprint 12: COMPLETED (100% - 15 story points delivered)
- Overall Project: 62% complete (baseline: 58% by this date) → +4% ahead ✅
- Next Milestone: Q1 Integration Testing (on track for Feb 15)

⚠️ **Top 3 Risks**
1. 🔴 Vendor API Delay (NEW) - 1 week slip
   Impact: Sprint 13 integration work delayed
   Mitigation: (1) Escalated to vendor executive sponsor...
...
```

---

## 🎤 Peer Review (15 min, Optional)

Se il workshop è in gruppo, dedica 15 minuti finali a **peer review**.

**Format**:
- Forma coppie/trios
- 5 min ciascuno per presentare il proprio workspace
- Feedback strutturato

**Peer Review Checklist**:

| Aspetto | ✅ | ⚠️ | ❌ | Note/Suggerimenti |
|---------|----|----|-----|-------------------|
| **Use case chiaro e specifico** | | | | |
| **Provider appropriato per needs** | | | | |
| **Documenti ben organizzati** | | | | |
| **Custom instructions dettagliate** | | | | |
| **Naming convention sensato** | | | | |
| **Test output di qualità** | | | | |

**Suggerimenti dal peer**:
- _______________________
- _______________________
- _______________________

---

## ✅ Checklist Completion

**Prima di concludere il workshop**, verifica di aver completato:

### Setup Completato
- [ ] Provider selezionato con motivazione chiara
- [ ] Workspace/Project/GPT/Gem creato con nome descrittivo
- [ ] 5+ documenti caricati e categorizzati (Core/Ref/Data)
- [ ] Naming convention applicata ai file
- [ ] Custom instructions scritte e salvate (min 200 parole)
- [ ] Verifica limiti provider rispettati

### Testing Completato
- [ ] 3 query test eseguite (basic, complex, edge case)
- [ ] Output valutato con checklist qualità
- [ ] Almeno 1 iterazione di refinement instructions (se necessario)
- [ ] Workspace testato e funzionante

### Documentazione
- [ ] Note prese su cosa funziona / cosa migliorare
- [ ] Esempi di good outputs salvati per reference
- [ ] Context budget calcolato (% di context utilizzato)

### Prossimi Passi
- [ ] Pianificato quando userai workspace (data/ora prima utilizzo reale)
- [ ] Identificato workflow per update documenti Data (se applicable)
- [ ] Scheduled review per refine instructions (dopo 5-10 utilizzi reali)

---

## 🔑 Key Takeaways Workshop

- 🎯 **Workspace reale &gt; esempio teorico**: Hai creato qualcosa immediatamente utilizzabile nel tuo lavoro
- 🔄 **Iteration è normale**: Primo setup raramente perfetto - refine basandoti su uso reale
- 📊 **ROI rapido**: Setup 45 min, risparmio stimato 1-2 ore/settimana → ROI positivo in 1 mese
- 📝 **Custom instructions sono critical**: Differenza tra output generico vs output su misura
- 🗂️ **KB organization matters**: Documenti ben nominati e categorizzati = retrieval migliore
- 🧪 **Test con scenari reali**: Query test basate su tuo lavoro vero, non esempi astratti

---

## 📚 Prossimi Passi

Congratulazioni! Hai completato il **Modulo 1: Workspace Persistenti & Context Management**.

Hai ora:
- ✅ Compreso workspace patterns universali cross-provider
- ✅ Imparato a scrivere custom instructions efficaci
- ✅ Padroneggiato strategie di knowledge base management
- ✅ Applicato context optimization techniques
- ✅ **Creato un workspace reale pronto all'uso**

**Nel prossimo modulo** imparerai a generare **contenuti professionali avanzati**: outputs interattivi, structured data, documenti complessi, e molto altro!

**➡️ Continua con**: [Modulo 2: Content Generation](/giorno-2-advanced-features/content-generation)

**⬅️ Torna a**: [Context Optimization](./context-optimization)

---

:::tip 💡 Post-Workshop Action
Nei prossimi 7 giorni:
1. **Usa** il workspace creato almeno 3 volte per task reale
2. **Documenta** cosa funziona e cosa va raffinato
3. **Itera** instructions basandoti su feedback reale
4. **Celebra** il tempo risparmiato! ⏰💰

Molti utenti riportano 30-50% risparmio tempo su task ricorrenti dopo 2-3 settimane di uso workspace ottimizzato.
:::
