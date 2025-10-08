---
title: Advanced Context Management
description: Ottimizzare uso context window e gestire multi-session workflows
sidebar_position: 4
tags: [context-window, optimization, summarization, multi-session]
---

# Advanced Context Management

:::tip 🎯 Cosa Imparerai
In questa lezione imparerai strategie avanzate per **ottimizzare l'uso del context window**, gestire conversazioni lunghe, e mantenere qualità output anche in sessioni multi-day complesse.
:::

## 🎯 Learning Objectives

Al termine di questa lezione sarai in grado di:

- ✅ **Ottimizzare** uso del context window applicando teoria del Giorno 1 a scenari reali
- ✅ **Implementare** multi-session strategies per progetti lunghi
- ✅ **Applicare** summarization workflows per prevenire context degradation
- ✅ **Prioritizzare** informazioni nel context quando si avvicina il limite

---

## 📚 Context Window: Richiamo Teoria

### Cosa Abbiamo Imparato nel Giorno 1

**Context Window** = memoria a breve termine dell'LLM

| Provider | Context Window | Equivalent Pages |
|----------|---------------|------------------|
| Claude | 1,000,000 tokens | ~3,000 pages |
| ChatGPT (GPT-4) | 128,000 tokens | ~400 pages |
| Gemini Pro | 1,000,000 tokens | ~3,000 pages |

**Cosa va nel context**:
- ✅ Custom instructions / system prompt
- ✅ Knowledge base documents
- ✅ Chat history (tutti i messaggi della conversazione)
- ✅ Current user query
- ✅ Tools/function definitions (se presenti)

### Il Problema: Context Degradation

**Scenario comune**:
```
Chat Message 1-10: Output alta qualità ✅
Chat Message 11-30: Output ancora buono ✅
Chat Message 31-50: Inizia a dimenticare dettagli ⚠️
Chat Message 51-70: "Chi era lo stakeholder X?" ❌
Chat Message 71+: Confuso, contraddittorio ❌❌
```

**Perché succede**:
- Context si riempie con chat history lunga
- LLM fatica a trovare info rilevanti in mezzo a "noise"
- Informazioni iniziali della chat vengono "dimenticate" (tecnicamente: pesate meno nell'attention mechanism)

**Soluzione**: Strategie di context management!

---

## 🔄 Strategia 1: Summarization Workflows

### Quando Usare Summarization

**Indicatori che serve summarization**:
- 🚩 Chat &gt;50 messaggi
- 🚩 Conversazione multi-day su stesso topic
- 🚩 LLM inizia a chiedere info già fornite
- 🚩 Output degrada in qualità vs inizio chat
- 🚩 Errori o contraddizioni rispetto a messaggi precedenti

### Pattern A: Periodic Summarization

**Workflow**:
```
Step 1: Ogni 20-30 messaggi (o quando noti degradation):
Prompt: "Genera summary completo di questa conversazione.
Include:
- Decisioni chiave prese
- Informazioni importanti discusse
- Azioni concordate
- Open questions/issues
Format: Bullet points, max 500 parole"

Step 2: Salva summary
- Copy-paste in documento esterno
- O salva come file in KB

Step 3: Start nuova chat
Prompt: "Ecco context dalle conversazioni precedenti:
[paste summary]

Continuiamo da qui. [La tua nuova query...]"
```

**Esempio Reale - PM Managing Project**:

**End of Long Chat** (message #45):
```
User: "Riassumi tutte le decisioni chiave di questa conversazione sul redesign"

Claude:
# Summary - Project Redesign Discussion

## Decisioni Chiave:
- ✅ Approved redesign Option B (API-first approach)
- ✅ Budget: €150K, timeline: Q2-Q3 2025
- ✅ Team: 5 devs + 1 UX designer
- ✅ MVP scope: Authentication + Core API + Admin dashboard

## Stakeholder Alignment:
- CTO: Supporta Option B, chiede phased rollout
- CFO: Approved budget con caveat: no overrun &gt;10%
- Product Owner: Richiesto user testing sprint 4

## Risks Identificati:
1. API integration legacy system (Medium risk)
2. Resource availability Q3 (High risk - vacation season)
3. Third-party vendor SLA unclear (Low risk)

## Open Questions:
- Definire acceptance criteria per MVP
- Vendor selection per auth module
- Go-live date esatta (tentative: Sept 15)

## Next Actions:
- Draft project charter (Owner: PM, By: Jan 20)
- Setup kick-off meeting (Owner: PM, By: Jan 25)
- Vendor evaluation matrix (Owner: Tech Lead, By: Jan 30)
```

**New Chat** (fresh start):
```
User: "Ecco summary del progetto redesign dalle conversazioni precedenti:
[paste summary sopra]

Ora aiutami a draftare il project charter basandoti su queste decisioni."

→ Claude ha tutto il context necessario senza 45 messaggi precedenti!
```

---

### Pattern B: Session Handoff

**Use Case**: Multi-day project, vuoi riprendere lavoro next day

**End of Day 1**:
```
User: "Fine sessione per oggi. Genera handoff summary per riprendere domani.
Include: dove siamo arrivati, prossimi step, anything importante da ricordare."

Output:
# Handoff Summary - End of Day 1

## Progress Today:
- Completed requirements analysis for Module A (auth)
- Identified 15 functional requirements
- Drafted 8 user stories (5 approved, 3 pending review)

## Key Decisions:
- OAuth 2.0 chosen over custom auth
- Multi-factor authentication nice-to-have (not MVP)

## Blockers/Issues:
- Waiting stakeholder input su password policy (escalated to Security team)
- Unclear: integration con existing user DB (meeting scheduled Thu)

## Next Session Focus:
1. Complete remaining user stories (7 more)
2. Start acceptance criteria for approved stories
3. Review and address stakeholder feedback

## Context to Remember:
- Compliance requirement: GDPR compliant (EU users)
- Performance SLA: Login &lt;2 sec
- Stakeholder: Marco (Security Lead) wants review before finalization
```

**Start of Day 2**:
```
User: "Riprendiamo. Ecco handoff da ieri:
[paste summary]

Ok, iniziamo con punto 1: completare user stories rimanenti."
```

→ Seamless continuation senza dover scrollare 50+ messaggi!

---

## 🔄 Strategia 2: Multi-Session Strategies

### Pattern A: Checkpoint System

**Concept**: Salva "checkpoint" permanenti in KB a milestone importanti

**Workflow**:
```
Ogni milestone (es: fine analisi requirements, fine design, fine sprint):

1. Generate Checkpoint:
   "Genera checkpoint document di dove siamo arrivati:
   - Summary progresso
   - Decisioni finalized
   - Learnings/insights
   - Updated timeline
   Format: Markdown, include date"

2. Save to KB:
   Salva come: "CHECKPOINT_module-auth-requirements-2025-01-15.md"

3. Future Sessions:
   LLM può referenziare checkpoint nella KB senza re-spiegare tutto
```

**Esempio Checkpoint Document**:
```markdown
# Checkpoint: Module Auth - Requirements Complete

**Date**: 2025-01-15
**Phase**: Requirements → Design (transition)

## Completato:
- ✅ 22 functional requirements identificati e validated
- ✅ 15 user stories drafted e approved
- ✅ Stakeholder sign-off ricevuto
- ✅ Edge cases documented (8 scenarios)

## Decisioni Chiave:
1. OAuth 2.0 + JWT tokens
2. Session timeout: 30 min inactivity
3. Password policy: min 12 char, complexity required
4. MFA optional (not enforced) per MVP

## Learnings/Insights:
- Security team richiede penetration test pre-launch
- Legal team flagged: cookie consent banner needed (EU)
- Performance: caching strategy critical (discussed con Tech Lead)

## Updated Scope:
- MVP: Basic auth + OAuth
- Phase 2: MFA, SSO integration
- Phase 3: Biometric auth (mobile)

## Metrics:
- Story points estimated: 34 SP
- Velocity assumption: 12 SP/sprint → 3 sprints
- Timeline: MVP by end Q2

## Next Phase: Design
Focus:
- API design for auth endpoints
- Database schema for user table
- Security review session with Marco
```

→ Questo checkpoint è ora nella KB. Future sessioni possono dire:
```
"Reference CHECKPOINT_module-auth per decisioni requirements phase"
```

---

### Pattern B: Conversation Threading

**Use Case**: Lavori su multipli workstream paralleli dentro stesso progetto

**Strategia**:
- **Separate Chats** per workstream diversi
- **Shared KB** con checkpoint documents
- **Cross-Reference** tra chat quando necessario

**Esempio**:
```
Project: Digital Platform Redesign

Chat 1: "Requirements Analysis"
→ Focus: gathering e documenting requirements
→ KB docs: requirements spec, stakeholder interviews

Chat 2: "Design Decisions"
→ Focus: architecture e tech stack choices
→ KB docs: design docs, tech evaluation matrices

Chat 3: "Sprint Planning"
→ Focus: story breakdown, estimation, sprint planning
→ KB docs: backlog, velocity charts, checkpoint docs

Cross-reference example:
In Chat 3: "Reference decisioni da Chat 2 checkpoint su database choice"
```

---

## 🎯 Strategia 3: Context Prioritization

### Il Framework P0-P3

Quando context si avvicina a limite, prioritizza cosa tenere:

**P0 - Critical** (Always keep):
- Custom instructions / system prompt
- Core KB documents (charter, glossary, key decisions)
- Current task context

**P1 - High** (Keep if possible):
- Recent chat messages (last 10-15)
- Active workstream documents
- Decision logs

**P2 - Medium** (Nice to have):
- Related background information
- Reference documents
- Historical context

**P3 - Low** (Can remove):
- Tangential discussions
- Exploratory brainstorming messages
- Old draft versions superseded

### Action Plan When Near Limit

**Checklist**:
```
Context Warning: 80% full

Step 1: Identify P3 content
- [ ] Remove old exploratory messages
- [ ] Archive superseded drafts

Step 2: Condense P2 content
- [ ] Summarize background discussions
- [ ] Remove redundant explanations

Step 3: Preserve P0-P1
- [ ] Keep custom instructions intact
- [ ] Maintain core KB docs
- [ ] Keep recent critical decisions

Step 4: Create checkpoint
- [ ] Summary of removed content (just in case)
- [ ] Save checkpoint to KB
- [ ] Continue in same chat OR start fresh with checkpoint
```

---

## 💰 Template: Context Budget

### Planning Your Context Budget

**Claude Project Example** (1M tokens = 100%):

```
┌─────────────────────────────────────────┐
│ RESERVED ALLOCATION (~10%)              │
├─────────────────────────────────────────┤
│ Custom Instructions      2,000 tokens   │
│ Core KB (5 docs)        50,000 tokens   │
│ System/Tools             3,000 tokens   │
│                                          │
│ SUBTOTAL:               55,000 tokens   │
│                         (5.5% of total) │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ WORKING SPACE (~90%)                    │
├─────────────────────────────────────────┤
│ Chat History          ~200,000 tokens   │
│ (flexible, grows with conversation)     │
│                                          │
│ Reference Docs        ~200,000 tokens   │
│ (uploaded when needed for specific      │
│  analysis, then removed)                │
│                                          │
│ Available Buffer      ~545,000 tokens   │
│ (for new docs, long analysis, etc.)     │
└─────────────────────────────────────────┘
```

### Tracking Context Usage Over Time

**Week-by-Week Tracking**:

| Week | Reserved | Chat Hist | Ref Docs | Buffer | Total % |
|------|----------|-----------|----------|--------|---------|
| W1 | 55K (5%) | 50K (5%) | 0 | 895K (90%) | 10% |
| W2 | 55K (5%) | 120K (12%) | 100K (10%) | 725K (73%) | 27% |
| W3 | 55K (5%) | 180K (18%) | 150K (15%) | 615K (62%) | 38% |
| W4 | 55K (5%) | 200K (20%) | 200K (20%) | 545K (55%) | 45% |

**Action @ W4**:
- Context 45% full → still comfortable
- Plan summarization for W5-W6 if growth continues
- Consider archiving old reference docs if hit 70%

---

### Budget Warning Thresholds

**Green Zone** (&lt;50% full):
- ✅ Business as usual
- ✅ No action needed

**Yellow Zone** (50-75% full):
- ⚠️ Start monitoring
- ⚠️ Plan summarization strategy
- ⚠️ Identify P3 content to remove

**Orange Zone** (75-90% full):
- 🔶 Summarize non-critical discussions
- 🔶 Archive old reference docs
- 🔶 Create checkpoint before continuing

**Red Zone** (&gt;90% full):
- 🔴 Immediate action required
- 🔴 Create comprehensive checkpoint
- 🔴 Start fresh chat with checkpoint as context
- 🔴 Clean KB of obsolete docs

---

## ✏️ Esercizio: Context Audit

### Step 1: Identify Long Conversation

**Find**:
- Workspace con chat &gt;30 messaggi
- O progetto multi-day con multiple sessioni

**If you don't have one**: Usa questo scenario fittizio come pratica

---

### Step 2: Audit Content

**Categorizza ogni parte del context**:

| Content Type | P0 | P1 | P2 | P3 | Token Est. |
|--------------|----|----|----|----|------------|
| Custom instructions | ✅ | | | | 2,000 |
| Core KB docs | ✅ | | | | 50,000 |
| Recent messages (last 10) | | ✅ | | | 15,000 |
| Messages 11-30 | | | ✅ | | 20,000 |
| Old exploratory discussion | | | | ✅ | 10,000 |
| Reference doc A | | ✅ | | | 30,000 |
| Reference doc B (old) | | | | ✅ | 25,000 |
| **TOTAL** | | | | | **152,000** |

---

### Step 3: Practice Summarization

**Generate Summary**:
```
Prompt to LLM:
"Riassumi questa conversazione in modo completo ma conciso.
Include:
- Obiettivo iniziale della conversazione
- Decisioni chiave prese
- Informazioni importanti discusse
- Open questions
- Next steps
Max 500 parole, bullet points."
```

**Save Summary**: Copy to text file

---

### Step 4: Restart & Compare

**Start New Chat**:
```
"Ecco summary conversazione precedente:
[paste summary]

[Continue con tua query...]"
```

**Compare Quality**:
- ❓ Output è accurate rispetto al context summarized?
- ❓ LLM ha tutte le info necessarie?
- ❓ Cosa manca (se qualcosa)?

**Refine**: Se qualcosa manca, aggiungi alla prossima summary

---

### Step 5: Document Findings

**Template**:
```markdown
# Context Audit Results

## Original Conversation:
- Messages: [N]
- Estimated tokens: [X]
- Quality degradation noticed: [Yes/No, at message N]

## Summary Generated:
- Word count: [X]
- Token estimate: [~X]
- Compression ratio: [original tokens / summary tokens]

## New Chat Quality:
- Accuracy: [High/Medium/Low]
- Completeness: [All info / Most info / Some info missing]
- What was lost: [List anything]

## Learnings:
- [Your insights on what works]
- [What to include in future summaries]
- [When to summarize (message count threshold)]
```

---

## 🔑 Key Takeaways

- 🧠 **Context window è risorsa finita**: Anche con 1M token, conversazioni lunghe degradano qualità
- 📝 **Summarization &gt; new chat**: Periodic summaries preservano informazioni e reset context
- 🎯 **Prioritization P0-P3**: Non tutto ha stessa importanza - rimuovi P3, condensa P2, preserva P0-P1
- 💾 **Checkpoint system**: Salva milestone nella KB per reference futuro senza occupare chat history
- 📊 **Budget tracking**: Monitora uso context, intervieni proattivamente quando arrivi a 70-80%
- 🔄 **Multi-session strategies**: Handoff summaries permettono seamless continuation tra sessioni
- ⚠️ **Warning signs**: LLM chiede info già fornite = context overload → summarize now!

---

## 📚 Prossimi Passi

Ora che hai padroneggiato strategie avanzate di context management, nella prossima lezione metterai tutto insieme in un **hands-on workshop** dove creerai e configurerai un workspace completo per un tuo use case reale!

**➡️ Continua con**: [Hands-on Workshop: Setup Workspace](./hands-on-workspace)

**⬅️ Torna a**: [Knowledge Base Management](./knowledge-base)

---

:::tip 💡 Pro Tip: Automated Context Monitoring
Alcuni power users tengono un "context log" (spreadsheet o note app):
```
Date | Chat ID | Est. Tokens Used | Action Taken
2025-01-10 | Chat-PM-001 | 150K (15%) | None
2025-01-15 | Chat-PM-001 | 450K (45%) | None
2025-01-20 | Chat-PM-001 | 750K (75%) | ⚠️ Summarized
2025-01-20 | Chat-PM-002 | 55K (5%) | Fresh start
```
Aiuta a sviluppare intuition su quando summarize!
:::
