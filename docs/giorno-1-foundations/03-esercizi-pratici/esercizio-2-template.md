---
title: "Esercizio 2: Creare Template Personalizzati"
description: Costruisci la tua library personale di prompt template riutilizzabili per task ricorrenti del tuo ruolo
sidebar_position: 2
tags: [esercizio, template, automation, riuso]
---

# Esercizio 2: Creare Template Personalizzati

> ⏱️ **Tempo**: 30 minuti + 5 min condivisione
> 👤 **Modalità**: Individuale → Peer Exchange
> 📦 **Deliverable**: 2 template riutilizzabili + usage guide
> 🎯 **Difficoltà**: ⭐⭐ Intermedio

---

## 🎯 Obiettivo Esercizio

Costruisci una **library personale di prompt template** riutilizzabili per i task ricorrenti del tuo lavoro. Impara a parametrizzare, documentare e condividere template che ti faranno risparmiare ore ogni settimana.

Al completamento di questo esercizio:
- ✅ Identificherai opportunità di automation con prompt
- ✅ Creerai template riutilizzabili con placeholder chiari
- ✅ Documenterai usage guide per riuso futuro
- ✅ Avrai una library iniziale da espandere nel tempo

---

## 📚 Istruzioni

Creerai **2 prompt template** per task che esegui regolarmente (settimanale o mensile).

**Workflow**:
1. **Identifica** 2 task ricorrenti e time-consuming
2. **Analizza** input/output/variabili per ciascuno
3. **Costruisci** template con metadata, RACE structure, placeholder
4. **Testa** template su caso reale
5. **Condividi** con colleghi per feedback

---

## 🔨 Step-by-Step Guide

### Step 1: Identifica Task Ricorrenti (5 min)

Pensa a **2 task** che fai regolarmente nel tuo lavoro.

**Criteri selezione**:
- ✅ **Ripetitivo**: stesso processo ogni volta (settimanale/mensile)
- ✅ **Time-consuming**: almeno 30 min normalmente
- ✅ **Standardizzabile**: output simile ogni volta
- ✅ **Alto ROI**: automatizzare ti risparmierebbe molto tempo

💡 **Esempi per Ruolo**:

**PM**: Weekly status report, Risk assessment, Stakeholder update email, Change request evaluation

**PMO**: Portfolio review, Project audit, Resource allocation analysis, Governance compliance check

**Service Design**: User research synthesis, Journey mapping documentation, Design critique facilitator, Accessibility audit report

**Funzionale/BA**: Requirements → User stories, Test case generation, Gap analysis (AS-IS vs TO-BE), API documentation from specs

:::tip Suggerimento
Scegli task che fai **davvero** regolarmente, non task ipotetici. Il template sarà più utile!
:::

**Checkpoint**: Hai identificato 2 task specifici e ricorrenti?

---

### Step 2: Analizza Task (5 min)

Per **ciascun task**, rispondi a queste domande:

**1. Input tipico**: Che dati/informazioni hai disponibili ogni volta?
- Es: "Note team + metrics dashboard + issue tracker"

**2. Output desiderato**: Cosa vuoi ottenere esattamente?
- Es: "Email status report professionale pronta per invio"

**3. Variabili**: Cosa cambia ogni volta? (da parametrizzare con placeholder)
- Es: "[PROJECT_NAME]", "[WEEK_NUMBER]", "[COMPLETION_%]"

**4. Costanti**: Cosa è sempre uguale? (da hard-code in template)
- Es: "Formato 3 sezioni: Progress, Risks, Next Steps"

**5. Framework appropriato**: RACE? CoT? Few-Shot?
- Es: "RACE per struttura, nessun Few-Shot necessario"

**Checkpoint**: Hai mappato input/output/variabili per entrambi i task?

---

### Step 3: Costruisci Template (15 min)

Per ciascun template, crea un documento completo con 3 sezioni.

#### A) Metadata

```markdown
## TEMPLATE: [Nome Descrittivo Template]
**USE CASE**: [Quando usare questo template]
**AUTHOR**: [Il tuo nome]
**VERSION**: 1.0
**LAST UPDATED**: [Data]
**ESTIMATED TIME SAVED**: [es: "20 min per esecuzione"]
```

#### B) Prompt Structure

```markdown
### PROMPT

[ROLE]
Sei [ruolo specifico con expertise rilevante]...

[ACTION]
[Task specifico da eseguire]...

[CONTEXT - con PLACEHOLDER]
- **[PLACEHOLDER_1]**: [descrizione cosa inserire]
- **[PLACEHOLDER_2]**: [descrizione cosa inserire]
- Costante: [valore fisso che non cambia]

[EXPECTATIONS]
Format:
[struttura precisa dell'output]

Tone: [formale/casual/tecnico/etc]
Length: [word count o guideline]
Audience: [chi leggerà l'output]
```

#### C) Usage Guide

```markdown
### HOW TO USE THIS TEMPLATE

**Step-by-Step**:
1. Replace `[PLACEHOLDER_X]` with [spiegazione dettagliata]
2. Replace `[PLACEHOLDER_Y]` with [spiegazione dettagliata]
3. Run prompt in Claude
4. Review output and adjust if necessary

**Example Fill**:
[Mostra esempio compilato con dati reali anonimizzati]

**Tips**:
- [Consiglio 1 per uso ottimale]
- [Consiglio 2]

**Common Pitfalls**:
- [Errore comune da evitare]
- [Fix suggerito]

**Variations**:
- [Possibile variante del template per contesto diverso]
```

**Checkpoint**: Hai costruito 2 template completi con metadata, prompt RACE, e usage guide?

---

### Step 4: Testa Template (5 min)

**Test su caso reale**:
1. Prendi un tuo template
2. Compila i placeholder con dati reali (anche recenti)
3. Esegui prompt in Claude
4. Valuta output:
   - È utilizzabile direttamente?
   - Necessita modifiche?
   - Formato corretto?
5. Raffina template se necessario

:::warning Importante
Se l'output non è soddisfacente, torna allo Step 3 e migliora il template. Non procedere con template difettosi!
:::

**Checkpoint**: Almeno 1 dei tuoi template produce output di qualità?

---

## 🎁 Starter Templates Library dal Workshop

> 💡 Questi 5 template sono stati preparati basandoci sui use case più richiesti dai partecipanti nel pre-assessment del workshop.
> Sono **pronti all'uso**: copia, personalizza con i tuoi dati, salva nella tua library!

**Top Use Cases Identificati** (dal pre-assessment):
1. ⭐ **Meeting Notes Synthesis** (richiesto da 4/7 partecipanti)
2. ⭐ **Status Report Automation** (richiesto da 4/7 partecipanti)
3. ⭐ **Test Case Generation** (richiesto esplicitamente da Functional)
4. ⭐ **UX Concept Creation** (richiesto da Service Designers)
5. ⭐ **Document Analysis** (richiesto da 3/7 partecipanti)

**Come Usare Questi Template**:
1. Scegli template più rilevante per tuo ruolo
2. Copia template completo
3. Sostituisci `[PLACEHOLDER]` con tuoi dati
4. Testa su caso reale
5. Raffina se necessario
6. Salva nella tua personal library

:::tip 🚀 Quick Win
Questi starter templates ti fanno risparmiare ~80% del tempo rispetto a crearli da zero. Personalizzali e avrai 5 prompt professionali pronti in 20 minuti!
:::

---

### **Template 1: Meeting Notes → Executive Summary** ⭐ Most Requested

**USE CASE**: Trasformare note sparse di meeting in executive summary actionable per stakeholder senior
**TARGET ROLES**: PMO, Functional, PM (richiesto da 4/7 partecipanti)
**ESTIMATED TIME SAVED**: ~20 min per meeting (da 30 min scrittura → 10 min review)
**VERSION**: 1.0 (Workshop Edition)

#### **PROMPT TEMPLATE**

```markdown
[ROLE]
Sei un Senior Project Coordinator esperto in executive communication e meeting facilitation.

[ACTION]
Trasforma le meeting notes non strutturate in executive summary professionale per [STAKEHOLDER_TYPE].

[CONTEXT]
**Meeting Info**:
- **Tipo**: [Project Steering / Team Sync / Stakeholder Review / Design Review]
- **Data**: [GG/MM/AAAA]
- **Durata**: [N minuti]
- **Partecipanti**: [Lista ruoli presenti]
- **Obiettivo meeting**: [Perché convocato]

**Raw Meeting Notes**:
[PASTE_NOTE_TESTUALI_QUI]
[Anche disordinate, abbreviazioni OK - LLM strutturerà]

**Audience Summary**:
- **Destinatari**: [C-level / Project Team / Cliente / Board]
- **Loro priority**: [Cosa interessa: decisioni? risks? timeline?]

[EXPECTATIONS]
**Formato**: Executive Summary Document

**Struttura Obbligatoria**:

### 📋 **MEETING OVERVIEW**
- Meeting: [Tipo]
- Data: [Data]
- Partecipanti: [Lista]
- Duration: [N min]

### 🎯 **KEY DECISIONS TAKEN**
| Decision | Decided By | Rationale | Impact |
|----------|-----------|-----------|--------|
| [Decisione 1] | [Nome/Ruolo] | [Perché] | [Su cosa] |
| [Decisione 2] | [...] | [...] | [...] |

### ✅ **ACTION ITEMS**
| Owner | Action | Deadline | Priority | Status |
|-------|--------|----------|----------|--------|
| [Nome] | [Cosa fare] | [Data] | [H/M/L] | [New] |
| [...] | [...] | [...] | [...] | [...] |

### ⚠️ **RISKS & BLOCKERS**
- [Risk/Blocker 1]: Severity [H/M/L], Owner: [Chi], Mitigation: [Piano]

### ❓ **OPEN QUESTIONS**
- [Domanda 1] → Resolve by: [Nome], by: [Data]

### ➡️ **NEXT STEPS**
1. [Azione prioritaria] - [Owner] - [Timeline]
2. [Next meeting: Data/Obiettivo]

**Tone**: Professionale-conciso, action-oriented, neutral
**Length**: 400-600 parole
**Audience**: [Specificato sopra]
**Output**: Ready per email/Confluence
```

#### **TIPS & COMMON PITFALLS**

✅ **Tips**:
- Note disordinate OK: LLM struttura
- Abbreviazioni OK: LLM espande
- Verifica decisioni critiche (human-review)

❌ **Pitfalls**:
- Note troppo scarne → Aggiungi context per topics importanti
- Action items senza owner → Sempre annotare "Nome will do X"

---

### **Template 2: Documento Funzionale → Test List** ⭐ Explicitly Requested

**USE CASE**: Generare comprehensive test cases da documento funzionale/user story
**TARGET ROLE**: Functional/BA (richiesto esplicitamente nel pre-assessment)
**ESTIMATED TIME SAVED**: ~45 min (da 1h scrittura → 15 min review)
**VERSION**: 1.0

#### **PROMPT TEMPLATE**

```markdown
[ROLE]
Sei un Senior QA Engineer e Test Architect con 10 anni esperienza in test strategy enterprise e test automation planning.

[ACTION]
Genera comprehensive test case list per la funzionalità descritta, coprendo test positivi, negativi, edge cases e security.

[CONTEXT]
**Documento Funzionale**:
[PASTE_DOCUMENTO o UPLOAD_FILE]

**System Under Test**:
- **Applicazione**: [Nome sistema]
- **Modulo/Feature**: [Area specifica]
- **Tech Stack**: [Web/Mobile/API]
- **Integration**: [Sistemi esterni]

**User Story** (se disponibile):
As a [user type], I want to [action], so that [benefit]

**Acceptance Criteria**:
- [Criterio 1]
- [Criterio 2]

[EXPECTATIONS]
**Formato**: Test Case Table (Excel/JIRA-ready)

| Test ID | Category | Description | Preconditions | Steps | Expected Result | Priority | Type |
|---------|----------|-------------|---------------|-------|-----------------|----------|------|
| TC-001 | Functional | [Desc] | [Setup] | [1. Step 1<br/>2. ...] | [Expected] | High | Positive |

**Coverage Requirements**:
- Positive Tests: Min 40%
- Negative Tests: Min 30%
- Boundary/Edge: Min 20%
- Security: 10%

**Prioritization**:
- High: Core functionality, security-critical
- Medium: Important alternate paths
- Low: Nice-to-have, rarely used

**Deliverable**: Table ready per import in JIRA/Azure DevOps
```

#### **TIPS**

✅ Upload doc completo per test precisi
✅ Specifica tech stack (influenza test types)
⚠️ Security tests: sempre human review con security expert

---

### **Template 3: Requisiti → PowerPoint Outline** ⭐ Explicitly Requested

**USE CASE**: Trasformare requisiti/documenti in outline presentazione PowerPoint
**TARGET ROLE**: PMO (richiesto esplicitamente nel pre-assessment)
**ESTIMATED TIME SAVED**: ~30 min (da 1h strutturazione → 30 min creazione slides)
**VERSION**: 1.0

#### **PROMPT TEMPLATE**

```markdown
[ROLE]
Sei un Presentation Designer esperto in executive presentations e stakeholder management, specializzato in trasformare contenuto tecnico in narrative compelling.

[ACTION]
Crea outline dettagliato per presentazione PowerPoint basato sui documenti forniti, ottimizzato per [AUDIENCE_TYPE] con obiettivo [GOAL].

[CONTEXT]
**Source Documents**:
[PASTE_DOCUMENTI o UPLOAD_FILE]

**Presentation Context**:
- **Audience**: [C-Level / Board / Team / Cliente]
- **Occasion**: [Steering / Kick-off / Status / Go-NoGo / Budget Approval]
- **Presenter**: [Tuo ruolo]
- **Duration**: [10/20/30/45 min] → [N slides target]
- **Goal**: [Approval / Informare / Decision / Alignment]

**Key Messages** (cosa audience DEVE ricordare):
1. [Message 1]
2. [Message 2]
3. [Message 3]

[EXPECTATIONS]
**Formato**: PowerPoint Outline slide-by-slide

**Struttura per ogni slide**:
---
### **Slide N: [Titolo]**
**Content**: [Bullet points o descrizione]
**Visual Suggestion**: [Tipo visual: chart, timeline, icon, etc.]
**Speaker Notes**: [Talking points 3-5 frasi]
**Data/Evidence**: [Stat rilevante se disponibile]
---

**Delivery Guidelines**:
- Total Slides: ~1 slide per 1.5-2 min speaking
- Slide Density: Max 5-7 bullet, max 10 parole/bullet
- Visual-to-Text Ratio: 60% visual / 40% text
- Flow: Problem → Solution → Evidence → Action

**Tone**: [Appropriate per audience]
**Output**: Ready per creare slides in PPT/Keynote
```

#### **TIPS**

💡 Start with "So What?": Ogni slide risponde "perché audience care?"
💡 Data-driven: Min 3-4 data points throughout
⚠️ Avoid bloat: Se >15 slides per 20 min, troppo denso

---

### **Template 4: Brainstorming → UX/UI Concept** ⭐

**USE CASE**: Generare multipli concept UX/UI per feature con rationale e tradeoff
**TARGET ROLES**: Service Design (2 partecipanti richiesto)
**ESTIMATED TIME SAVED**: ~40 min (da 1.5h brainstorming → 30 min review + sketch)
**VERSION**: 1.0

#### **PROMPT TEMPLATE**

```markdown
[ROLE]
Sei un Senior UX/UI Designer con 10+ anni in design thinking e product design, specializzato in user-centered design e rapid prototyping.

[ACTION]
Genera [3-5] concept alternativi UX/UI per il problema descritto, con focus su diversità approcci (non varianti minori).

[CONTEXT]
**Feature/Problema**:
[DESCRIZIONE_DETTAGLIATA]

**User Persona** (Primary):
- **Nome**: [Es: "Maria, 35, PM"]
- **Goals**: [Cosa vuole ottenere]
- **Pain Points**: [Frustrazioni attuali]
- **Tech Savviness**: [Novice / Intermediate / Advanced]
- **Context**: [Desktop/Mobile, quando usa]

**Business Goals**:
- [Goal 1 es: "Engagement +30%"]
- [Goal 2]

**Constraints**:
- **Technical**: [Es: "PWA only, no native app"]
- **Budget/Time**: [Es: "MVP in 2 mesi"]
- **Brand**: [Guidelines, tone, style]
- **Accessibility**: [WCAG 2.1 AA?]

[EXPECTATIONS]
**Formato**: Concept Document con [N] alternatives

**Per Ogni Concept**:

### **Concept N: [Nome Descrittivo]**

**🎨 Core Idea** (1-2 frasi):
[Unique value proposition]

**🎯 Key Differentiator**:
[Cosa rende diverso]

**👤 User Flow** (step-by-step):
1. [Entry: come arriva]
2. [Interazione step 1]
3. [...]
5. [Outcome]

**🧩 UI Components**:
- [Component 1: es "Modal with stepper"]
- [Component 2]

**✅ Pros** / **❌ Cons**:
- Pro: [Es: "20% faster completion"]
- Con: [Es: "Higher dev effort"]

**💰 Implementation Effort**:
- Design: [Low/Med/High - N giorni]
- Development: [Low/Med/High]
- Total: [X person-days]

**📸 Visual Description** (text only):
[Layout, colori, typography, spacing - NO image generation]

---

**Comparison Matrix**:
| Criteria | Concept 1 | 2 | 3 | 4 | 5 |
|----------|-----------|---|---|---|---|
| User Value (1-5) | [...] | | | | |
| Ease (1-5) | | | | | |
| Innovation (1-5) | | | | | |
| Effort (low=1) | | | | | |
| **TOTAL** | | | | | |

**Recommendation**: Concept [N] for MVP, rationale: [2-3 frasi]
```

#### **TIPS**

💡 Ask for diverse approaches: "Molto diversi, not just UI variations"
💡 Include edge cases in flow
⚠️ Don't over-design: Concepts = exploration, not final
✅ Hybrid OK: Best solution spesso mix di 2 concepts

---

### **Template 5: Multi-Document Analysis → Insights Report** ⭐

**USE CASE**: Analizzare multipli docs ed estrarre insights actionable consolidati
**TARGET ROLES**: Functional, PM, Service Design (richiesto da 4 partecipanti)
**ESTIMATED TIME SAVED**: ~90 min (da 2.5h lettura → 1h review)
**VERSION**: 1.0

#### **PROMPT TEMPLATE**

```markdown
[ROLE]
Sei un Senior Business Analyst e Research Synthesizer con expertise in qualitative/quantitative analysis e insight generation.

[ACTION]
Analizza i [N] documenti forniti, identifica pattern/trend/insights, genera report consolidato con raccomandazioni actionable.

[CONTEXT]
**Documenti da Analizzare**:
[UPLOAD_FILES o PASTE per ciascuno]
- **Doc 1**: [Nome / Tipo]
- **Doc 2**: [...]
- **Doc N**: [...]

**Obiettivo Analisi**:
[Cosa cerchiamo: es "Pain points utenti", "Gap analysis", "Benchmark competitor", "Risk assessment"]

**Focus Areas** (se specifici):
- [Area 1]
- [Area 2]

**Context**:
- **Project/Initiative**: [Nome]
- **Stakeholder**: [Chi richiede + loro concerns]
- **Decision da Supportare**: [Report serve per decidere cosa?]

[EXPECTATIONS]
**Formato**: Executive Insights Report

**Struttura**:

## **EXECUTIVE SUMMARY** (Max 200 parole)
**TL;DR**: [3-5 frasi sintesi]
**Key Takeaways**:
1. [Insight più importante]
2. [...]
3. [...]

## **METHODOLOGY**
- Documents Analyzed: [N docs, X pagine]
- Approach: [Qualitative/Quantitative/Comparative]
- Timeframe: [Periodo dati]

## **KEY FINDINGS** (Prioritized)

### **Finding 1: [Titolo]**
**Evidence**:
- [Source: Doc 1, Page 5]: "[Quote]"
- **Pattern Frequency**: [Es: "8/12 interviews"]

**Insight**: [Cosa significa, perché importa]
**Impact**: [High / Medium / Low]

[Repeat per Finding 2, 3, ...]

## **PATTERN ANALYSIS**
**Recurring Themes**:
1. **Theme 1**: [Observed in Docs X,Y,Z]
   - Manifestations: [Come appare]
   - Trend: [Increasing/Stable/Decreasing]

**Outliers**: [Eccezioni ai pattern]

## **COMPARATIVE ANALYSIS** (se applicabile)
| Dimension | Entity 1 | Entity 2 | Gap |
|-----------|----------|----------|-----|
| [Criterio 1] | [...] | [...] | [...] |

## **RISKS & GAPS**
**Critical Risks**:
1. **Risk**: [Descrizione]
   * Likelihood: [H/M/L]
   * Impact: [H/M/L]
   * Mitigation: [Action]

**Gaps**: [Missing info/capability]

## **RECOMMENDATIONS** (Prioritized)

### **Immediate Actions** (Next 2 weeks):
1. **Action**: [Descrizione]
   * Owner: [Suggested role]
   * Effort: [Hours/Days]
   * Expected Outcome: [Benefit]

### **Short-Term** (1-3 months): [...]
### **Long-Term** (3-12 months): [...]

## **NEXT STEPS**
- [ ] Review report
- [ ] Decision meeting: [Date]
- [ ] Assign actions

**Tone**: Analytical, evidence-based, balanced
**Length**: 1500-2500 words
**Deliverable**: Report ready per presentation/circulation
```

#### **TIPS**

💡 Document naming descrittivi aiutano LLM
💡 Prioritize recent docs se troppi
⚠️ Verify critical data: fact-check numeri e date
✅ Cross-reference: Se finding importante, verifica sia in source

---

## 💡 Come Usare Questi Template Efficacemente

### **Quick Start Workflow**:

1. **Identifica use case**: Quale dei 5 matcha meglio?
2. **Copy template completo** → Notion/Google Doc/Text editor
3. **Fill ALL placeholders**:
   - Cerca `[MAIUSCOLO_PLACEHOLDER]`
   - No placeholder vuoti (scrivi "N/A" se non applicabile)
4. **Test first time**: Prima volta, testa su case non-critico
5. **Refine**: Output non perfetto? → Tweaka → Ritesta
6. **Save personalizzato**: Dopo 2-3 usi, salva custom version

### **Template Maintenance**:

**Versioning** (raccomandato):
```markdown
## Template: [Name]
**Version**: 1.0 → 1.1 → 2.0
**Changelog**:
- v1.0 (08/10/2025): Initial da workshop
- v1.1 (15/10/2025): Added [X] placeholder
- v2.0 (05/11/2025): Restructure format
```

**Quando aggiornare**:
- ✅ Output non soddisfa consistently → Tweaka Expectations
- ✅ Nuovi use case → Aggiungi Variation
- ✅ Team feedback → Integrate
- ❌ Over-engineering: Funziona → STOP tweaking

---

## 🎯 Template Selection Decision Tree

```
Hai meeting notes da strutturare?
├─ SÌ → Template 1: Meeting Notes → Executive Summary
└─ NO → ↓

Hai doc funzionale → test cases?
├─ SÌ → Template 2: Test List Generation
└─ NO → ↓

Crei presentazione da documenti?
├─ SÌ → Template 3: PowerPoint Outline
└─ NO → ↓

Brainstorm concept UX/UI?
├─ SÌ → Template 4: UX/UI Concept
└─ NO → ↓

Multipli documenti da analizzare?
├─ SÌ → Template 5: Multi-Document Analysis
└─ NO → Vedi [Template Ideas per Ruolo](#-template-ideas-per-ruolo)
```

---

## 📊 Expected ROI da Template Library

**Time Savings** (basato su pre-assessment + case studies):
- Template 1 (Meeting Notes): ~20 min/meeting × 4/week = **80 min/week**
- Template 2 (Test List): ~45 min/doc × 2/week = **90 min/week**
- Template 3 (PPT Outline): ~30 min/presentation × 1/week = **30 min/week**
- Template 4 (UX Concepts): ~40 min/brainstorm × 0.5/week = **20 min/week**
- Template 5 (Doc Analysis): ~90 min/analysis × 0.5/week = **45 min/week**

**Total Potenziale**: **~265 min/week = 4.4 hours/week**

**Annualized**: 4.4h/week × 48 settimane = **211 hours/year = 26 giorni lavorativi** 🤯

**Quality Improvement**:
- Consistency: Da 40% → 90% utilizzabile first-time
- Completeness: Da 60% → 95% coverage requisiti
- Professionalism: Da "good enough" → production-ready

:::tip 🚀 Success Metric
Workshop è successo se **80%+ partecipanti usano almeno 1 template entro 7 giorni** post-workshop.
Track con follow-up survey venerdì 11/10!
:::

---

🎉 **Questi template sono il tuo "Starter Pack"! Ora procedi con esempio dettagliato qui sotto, poi segui la [Step-by-Step Guide](#-step-by-step-guide) per creare TUOI template personalizzati!**

---

## 💡 Esempio Completo: Weekly Status Report Generator (PM)

Questo è un template completo pronto all'uso come reference.

```markdown
## TEMPLATE: Weekly Status Report Generator
**USE CASE**: Generare executive status update ogni venerdì per steering committee
**AUTHOR**: [Nome]
**VERSION**: 1.0
**LAST UPDATED**: 2025-10-06
**ESTIMATED TIME SAVED**: ~25 min per report (da 30 min a 5 min)

---

### PROMPT

[ROLE]
Sei un Senior Project Manager esperto in executive communication per progetti enterprise.

[ACTION]
Genera weekly status report professionale per project steering committee.

[CONTEXT]
- **Project Name**: [PROJECT_NAME]
- **Week Number**: [WEEK_N]
- **Completion %**: [PERCENTAGE]%
- **Target completion for this week**: [TARGET_%]%
- **Key Achievements this week**:
  - [ACHIEVEMENT_1]
  - [ACHIEVEMENT_2]
  - [ACHIEVEMENT_3]
- **Blockers/Issues**:
  - [ISSUE_1]
  - [ISSUE_2]
- **Planned next week**:
  - [NEXT_1]
  - [NEXT_2]
  - [NEXT_3]
- **Decisions needed**: [DECISIONS_NEEDED]

Budget Status: [ON_TRACK / OVER / UNDER]
Timeline Status: [ON_TRACK / DELAYED / AHEAD]

[EXPECTATIONS]
Format:
Subject: Weekly Status - [PROJECT_NAME] - Week [WEEK_N]

📊 **PROGRESS**
- [% completion vs target - highlight variance if >5%]
- [Key milestone updates and achievements]
- [Metrics that matter to executives]

⚠️ **RISKS & ISSUES**
- [Top 2-3 issues/risks con severity (High/Medium/Low)]
- [Mitigation actions in corso per ciascuno]
- [Impact assessment se non risolti]

➡️ **NEXT WEEK PRIORITIES**
- [3-5 priority actions con owner e deadline]
- [Decisions needed da sponsor - chiare e actionable]

Tone: Professionale, data-driven, proactive (trasparente su issues ma confident su mitigation)
Length: 300-400 parole max
Audience: C-level steering committee (limited technical knowledge)
Output: Email pronto per invio (no placeholder, no "TODO")

---

### HOW TO USE THIS TEMPLATE

**Step-by-Step**:
1. Replace `[PROJECT_NAME]` with your project name
2. Replace `[WEEK_N]` with current week number (or date)
3. Fill `[COMPLETION_%]` and `[TARGET_%]` from project dashboard
4. List `[ACHIEVEMENT_1/2/3]` from team updates or standup notes
5. List `[ISSUE_1/2]` from issue tracker or risk register
6. List `[NEXT_1/2/3]` from sprint planning or roadmap
7. Specify `[DECISIONS_NEEDED]` (or write "None" se non ce ne sono)
8. Update budget/timeline status
9. Run prompt in Claude
10. Quick review (< 2 min) → Send!

**Example Fill**:
```
Project Name: Digital Transformation Platform
Week Number: Week 20 (Mese 5 di 9)
Completion %: 58%
Target completion: 62%
Key Achievements:
  - Completata migrazione database Fase 1 (milestone critica)
  - API integration testing: 98% pass rate
  - Onboarding nuovo tech lead completato
Blockers/Issues:
  - Ritardo 1 settimana su UI design (waiting client feedback)
  - Risk: potenziale scope creep da nuovo stakeholder finance
Planned next week:
  - Deploy staging environment
  - Workshop requirements Fase 2 con cliente
  - Risk review meeting con PMO
Decisions needed: Approval budget adicional €50K per scope adjustment

Budget Status: ON_TRACK
Timeline Status: DELAYED (minor, 1 week)
```

**Tips**:
- Aggiorna template ogni venerdì stesso orario (crea routine)
- Tieni note durante settimana per non dimenticare achievements
- Sii trasparente su issues, ma sempre con mitigation plan
- Se nessun decision needed, scrivi esplicitamente "None this week"

**Common Pitfalls**:
- ❌ Lasciare placeholder non compilati → output avrà "[TODO]"
  - ✅ Fix: Compila TUTTI i placeholder prima di run
- ❌ Troppi achievements/issues → report troppo lungo
  - ✅ Fix: Top 3 achievements, top 2-3 risks (prioritize!)
- ❌ Issues senza mitigation plan → panico stakeholder
  - ✅ Fix: Ogni issue deve avere "Mitigation: [azione concreta]"

**Variations**:
- **Monthly Report**: Cambia "week" con "month", aggiungi trend analysis
- **Project Sponsor Only**: Rimuovi dettagli tecnici, focus su business value
- **Team Internal**: Meno formale, più dettagli tecnici, add "Team shoutouts"
```

---

## 💡 Template Ideas per Ruolo

Usa questi come ispirazione per i tuoi template.

### 📊 PM Templates

**1. Risk Assessment Generator**
- **Quando**: Monthly o quando nuovo risk identificato
- **Input**: Risk description, project context, constraints
- **Output**: Risk analysis con probability/impact, mitigation plan, ownership
- **Framework**: RACE + CoT per analisi sistematica

**2. Stakeholder Communication (Bad News)**
- **Quando**: Comunicare delays, budget overrun, scope changes
- **Input**: Situation description, stakeholder type, mitigation plan
- **Output**: Email professionale trasparente e proattiva
- **Framework**: RACE + Multi-perspective (PM + stakeholder POV)

**3. Change Request Evaluation**
- **Quando**: Cliente richiede change o new feature
- **Input**: Change description, current baseline, constraints
- **Output**: Impact analysis (timeline/budget/scope), recommendation
- **Framework**: RACE + CoT per valutazione step-by-step

---

### 📈 PMO Templates

**1. Portfolio Health Dashboard Generator**
- **Quando**: Weekly o bi-weekly per executive review
- **Input**: List progetti + status, budget, timeline data
- **Output**: Executive summary con RAG status, trends, action items
- **Framework**: RACE + tabella standardizzata

**2. Project Audit Checklist**
- **Quando**: Quarterly audit o quando progetto flagged
- **Input**: Project documentation, standards checklist
- **Output**: Audit report con findings, gaps, recommendations
- **Framework**: RACE + CoT per audit sistematico

**3. Resource Allocation Optimizer**
- **Quando**: Resource conflicts o planning trimestre
- **Input**: Resource pool, project priorities, skills matrix
- **Output**: Allocation plan ottimizzato con rationale
- **Framework**: RACE + CoT per ottimizzazione

---

### 🎨 Service Design Templates

**1. User Interview Synthesis**
- **Quando**: Dopo ogni round user interviews
- **Input**: Interview notes, research questions, user segments
- **Output**: Insights report con themes, quotes, recommendations
- **Framework**: RACE + Few-Shot per formato insights consistente

**2. Journey Map Documentation**
- **Quando**: Dopo workshop journey mapping
- **Input**: Touchpoint notes, pain points, opportunities
- **Output**: Structured journey map documentation
- **Framework**: RACE + template formato standardizzato

**3. Usability Test Report**
- **Quando**: Dopo usability test session
- **Input**: Task list, success metrics, user observations
- **Output**: Test report con critical issues prioritizzati
- **Framework**: RACE + Few-Shot per categorizzazione issues

---

### ⚙️ Funzionale/BA Templates

**1. Business Requirements → User Stories**
- **Quando**: Ogni volta ricevi requirements da business
- **Input**: Business requirement description, stakeholder, constraints
- **Output**: User stories formato Agile + acceptance criteria
- **Framework**: RACE + Few-Shot per formato standard

**2. Test Case Generator**
- **Quando**: Dopo user stories defined, prima development
- **Input**: User story, acceptance criteria, edge cases
- **Output**: Comprehensive test cases (positive/negative/edge)
- **Framework**: RACE + CoT per coverage completa

**3. Gap Analysis (AS-IS vs TO-BE)**
- **Quando**: Inizio progetto o change initiative
- **Input**: Current state description, desired future state
- **Output**: Gap analysis con effort estimate, roadmap
- **Framework**: RACE + tabella comparativa strutturata

---

## ✅ Self-Assessment Checklist

Prima di considerare l'esercizio completato:

### Template Quality
- [ ] Ho creato 2 template completi con metadata, prompt, usage guide
- [ ] Ogni template ha **placeholder chiari** con spiegazioni
- [ ] **Framework RACE** applicato correttamente
- [ ] **Usage guide** dettagliata con step-by-step
- [ ] Incluso **example fill** con dati realistici

### Testing
- [ ] Ho testato almeno 1 template su caso reale
- [ ] L'output è **utilizzabile direttamente** (o con minor tweaking)
- [ ] Template **risparmia tempo** rispetto a processo manuale

### Documentation
- [ ] Documentato **when to use** per ciascun template
- [ ] Inclusi **tips** e **common pitfalls**
- [ ] Template è **salvato** in luogo accessibile (Notion/Confluence/file)

---

## 🔄 Peer Exchange (5 minuti)

:::tip Condivisione Cross-Role
I template più interessanti spesso vengono da ruoli diversi dal tuo. Esplora!
:::

### Istruzioni

**Step 1: Scambio** (2 min)
- Condividi **1 dei tuoi template** con un vicino
- Preferibilmente qualcuno di **ruolo diverso** (cross-functional learning)

**Step 2: Try It** (2 min)
- Prova a usare il template del collega
- Compila placeholder (anche con dati fittizi)
- Valuta: è chiaro? Facile da usare?

**Step 3: Feedback** (1 min)
- **✅ Cosa funziona**: Aspetto più utile/chiaro del template
- **🔄 Suggestion**: 1 miglioramento per renderlo più usable

---

## 📦 Deliverable Finale

Crea un documento (Notion, Google Doc, Markdown) con:

```markdown
# MY PROMPT TEMPLATE LIBRARY

**Author**: [Nome]
**Created**: [Data]
**Last Updated**: [Data]

---

## 📚 Index

1. [Template 1 Name] - [Use case brief]
2. [Template 2 Name] - [Use case brief]

---

## Template 1: [Nome]

[Full template con metadata, prompt RACE, usage guide, example]

---

## Template 2: [Nome]

[Full template con metadata, prompt RACE, usage guide, example]

---

## 📝 Lessons Learned

**What I learned creating these templates**:
- [Learning 1]
- [Learning 2]

**How I plan to use them**:
- [Piano utilizzo nel lavoro quotidiano]

**Ideas for future templates**:
- [Template idea 1 da creare prossimamente]
- [Template idea 2]

---

## 🔄 Template Changelog

| Date | Template | Version | Changes |
|------|----------|---------|---------|
| 2025-10-06 | Weekly Status | 1.0 | Initial creation |
| 2025-10-06 | Risk Analysis | 1.0 | Initial creation |
```

:::tip Mantieni Aggiornato
I template migliorano con l'uso. Quando trovi modi per ottimizzarli, aggiorna e versioning!
:::

---

## 🔑 Key Learnings

Dall'esercizio dovresti aver consolidato:

✨ **Identificare opportunità automation**:
- Task ripetitivi = candidati per template
- Più tempo risparmiato = higher ROI template

✨ **Parametrizzare intelligentemente**:
- Variabili → placeholder chiari
- Costanti → hard-code nel template
- Balance tra flessibilità e semplicità

✨ **Documentare per riuso**:
- Usage guide = template utilizzabile da altri
- Examples = riduzione barriera all'ingresso
- Tips & pitfalls = accelerazione adoption

✨ **Creare sistema scalabile**:
- Library che cresce nel tempo
- Versioning per miglioramento continuo
- Condivisione team = moltiplicatore impatto

---

## ➡️ Prossimi Step

### Post-Workshop Actions

**Settimana 1**: Usa template creati oggi
- Applica template nel lavoro quotidiano
- Nota cosa funziona bene e cosa migliorare
- Aggiorna template con learnings

**Settimana 2-4**: Espandi library
- Aggiungi 1 nuovo template ogni settimana
- Obiettivo: 5+ template entro fine mese
- Copri i task più time-consuming

**Mese 2**: Condividi con team
- Presenta template a team/colleghi
- Raccogli feedback e use cases
- Crea shared team template library (Confluence/Notion)
- Standardizza formati output team

**Ongoing**: Maintainance
- Review quarterly dei template
- Depreca quelli non usati
- Aggiorna con nuovi learnings
- Track tempo risparmiato (per dimostrare ROI!)

---

## 💡 Template Management Best Practices

### Organizzazione

**Folder Structure Suggerita**:
```
📁 My Prompt Templates/
  ├── 📁 PM/
  │   ├── status-reports.md
  │   ├── risk-analysis.md
  │   └── stakeholder-comms.md
  ├── 📁 Analysis/
  │   ├── requirements-breakdown.md
  │   └── gap-analysis.md
  └── 📁 Archive/
      └── deprecated-templates.md
```

### Naming Convention

**Pattern**: `[role]-[task]-[version].md`
- Es: `pm-weekly-status-v2.md`
- Es: `ba-user-stories-v1.md`

### Versioning

Quando aggiornare versione:
- **v1.0 → v1.1**: Minor tweaks, chiarificazioni
- **v1.x → v2.0**: Major restructure, nuovo framework
- **Archive**: Template non più usato ma salvato per reference

---

## 🎯 Challenge: Template Sprint (Opzionale)

Vuoi accelerare la creazione della tua library?

**Challenge 30-Day Template Sprint**:
- **Goal**: Creare 10 template in 30 giorni
- **Cadenza**: 2-3 template/settimana
- **Focus**: Tutti i task time-consuming del tuo lavoro
- **Deliverable**: Comprehensive personal template library

**Benefits**:
- Automazione massiva task ricorrenti
- Risparmio stimato: 3-5 ore/settimana
- Standardizzazione output professionale
- Template condivisibili con team (force multiplier)

---

## 🚀 Hai Completato il Modulo!

🎉 **Congratulazioni!** Hai completato tutti gli esercizi pratici del Giorno 1.

Ora hai:
- ✅ Ottimizzato prompt inefficaci (Esercizio 1)
- ✅ Creato template riutilizzabili (Esercizio 2)
- ✅ Library iniziale di prompt professionali
- ✅ Competenze pratiche di prompt engineering

**Sei pronto per il Giorno 2: Claude Advanced Features!**

---

## 🔗 Risorse Correlate

**Refresh Framework**:
- [Meta-Prompting](../prompt-engineering-teoria/meta-prompting) - Far generare template a Claude
- [Framework RACE](../prompt-engineering-teoria/framework-race) - Struttura base template
- [Debugging](../prompt-engineering-teoria/debugging) - Ottimizzare template che non funzionano

**Espandi Competenze**:
- [Giorno 2: Workspace & Context](/giorno-2-advanced-features/workspace-context) - Workspace persistenti per salvare template
- [Giorno 2: Content Generation](/giorno-2-advanced-features/content-generation) - Structured outputs e format consistency

---

**[Fine Esercizio 2]**

🎉 **Eccellente!** Hai creato la tua library di template. Continua ad espanderla e vedrai il tempo risparmiato accumularsi settimana dopo settimana!
