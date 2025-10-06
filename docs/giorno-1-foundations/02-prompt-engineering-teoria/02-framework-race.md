---
title: Framework RACE
description: Metodo sistematico per costruire prompt efficaci con Role, Action, Context, Expectations
sidebar_position: 2
tags: [prompt-engineering, RACE, framework, template]
---

# 🏁 Framework RACE

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base/Intermedio

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Padroneggiare i 4 componenti del framework RACE
- ✅ Applicare RACE per costruire prompt strutturati
- ✅ Utilizzare template RACE riutilizzabili per il tuo ruolo
- ✅ Creare libreria personale di prompt template

---

## 📚 Cos'è il Framework RACE?

**RACE** è un framework strutturato per costruire prompt efficaci ogni volta. È l'acronimo di:

- 🎭 **R** - **Role** (Ruolo)
- ⚡ **A** - **Action** (Azione)
- 📋 **C** - **Context** (Contesto)
- 🎯 **E** - **Expectations** (Aspettative)

**Perché usarlo?**
- ✅ Sistematico: non ti dimentichi componenti critici
- ✅ Riproducibile: stessa qualità ogni volta
- ✅ Scalabile: crea template riutilizzabili
- ✅ Efficace: riduce iterazioni da 5-6 a 1-2

:::tip Real-World Impact
Team che adottano RACE per task ricorrenti riportano **60-70% riduzione tempo** per generare deliverable standard (report, email, documenti).
:::

---

## 🎭 R - ROLE (Ruolo)

### **Cosa Definisce**
Chi deve essere l'LLM per questo task specifico

### **Perché è Importante**
Attiva pattern linguistici, prospettive e tono appropriati per l'expertise richiesta

### **Come Scrivere un Ruolo Efficace**

**Formula**:
```
"Sei un [professione] [livello seniority] con esperienza in [dominio/specializzazione]"
```

**Componenti opzionali per precision**:
- Certificazioni: "certificato PMP", "Lean Six Sigma Black Belt"
- Anni esperienza: "con 10+ anni", "senior"
- Focus area: "specializzato in...", "con focus su..."
- Industry: "nel settore banking", "per aziende SaaS"

### **Esempi di Ruoli Efficaci**

**Per Project Manager**:
```
Sei un Senior Project Manager certificato PMP con 10 anni di esperienza
in progetti Agile enterprise per il settore financial services.
```

**Per PMO**:
```
Sei un PMO Director esperto in portfolio management e governance,
con esperienza in organizzazioni Fortune 500 multi-country.
```

**Per Service Designer**:
```
Sei un Service Design Lead con 8 anni di esperienza in digital transformation,
specializzato in user research e journey mapping per il settore pubblico.
```

**Per Business Analyst**:
```
Sei un Business Analyst senior certificato CBAP, esperto in requirements elicitation
e process optimization per progetti enterprise ERP.
```

:::info Quando Omettere il Ruolo
Per task semplici e generici (es: "traduci questo testo"), il ruolo è opzionale. Usalo quando l'expertise specifica influenza la qualità dell'output.
:::

---

## ⚡ A - ACTION (Azione)

### **Cosa Definisce**
Il task specifico che l'LLM deve eseguire

### **Perché è Cruciale**
Senza azione chiara, l'LLM non sa cosa produrre

### **Verbi Efficaci per Categoria**

**Analisi & Valutazione**:
- Analizza, Valuta, Confronta, Esamina, Diagnostica, Identifica

**Creazione & Generazione**:
- Genera, Scrivi, Crea, Sviluppa, Drafta, Componi

**Trasformazione & Sintesi**:
- Trasforma, Converti, Riassumi, Sintetizza, Estrai, Distilla

**Raccomandazioni**:
- Suggerisci, Raccomanda, Proponi, Consiglia, Prioritizza

### **Confronto Azione Vaga vs Specifica**

| ❌ Vaga | ✅ Specifica |
|---------|-------------|
| "Dimmi del progetto" | "Analizza i rischi critici del progetto e prioritizzali per impact finanziario" |
| "Aiutami con i requirements" | "Trasforma i business requirements allegati in user stories formato Agile con acceptance criteria" |
| "Scrivi qualcosa per il cliente" | "Drafta email formale al cliente per comunicare slittamento deadline con mitigation plan" |
| "Guarda questi dati" | "Identifica top 3 trend emergenti dal dataset Q4 e genera executive summary con raccomandazioni" |

**Regola d'oro**: L'azione deve rispondere chiaramente a "Cosa deve produrre l'LLM?"

---

## 📋 C - CONTEXT (Contesto)

### **Cosa Fornisce**
Background, situazione, vincoli, informazioni necessarie per task

### **Perché è Fondamentale**
L'LLM non ha accesso al tuo contesto. Senza contesto = output generico e inutilizzabile.

### **Cosa Includere nel Contesto**

**Checklist Contesto Completo**:
- 🎯 Background progetto/situazione
- 💰 Vincoli (budget, timeline, risorse)
- 👥 Stakeholder rilevanti (chi, ruoli, influenza)
- 📊 Dati/metriche rilevanti
- ⚠️ Problemi/sfide/risk attuali
- 🏢 Contesto organizzativo (industry, size, cultura)
- 📅 Timeline e milestone
- 🎪 Fattori esterni (mercato, compliance, etc.)

### **Template Contesto per Ruolo**

**Template PM**:
```
Contesto:
- Progetto: [Nome e tipo]
- Cliente: [Nome cliente, industry, size]
- Budget: [€X] | Timeline: [N mesi, milestone]
- Team: [Composizione e size]
- Status attuale: [% complete, situazione]
- Challenge principale: [Problema chiave]
- Stakeholder key: [Chi sono, loro concerns]
```

**Template PMO**:
```
Contesto:
- Portfolio: [N progetti, totale budget]
- Scope: [Settore/BU analizzata]
- Periodo: [Q/Year]
- KPI focus: [Quali metriche critiche]
- Red flags attuali: [Progetti a rischio]
- Audience report: [Chi riceve, loro priorità]
```

**Template Service Design**:
```
Contesto:
- Progetto: [Feature/servizio]
- User segment: [Target users, demographics]
- Research completata: [Tipo e numero interviste/test]
- Pain points identificati: [Top 3]
- Business goals: [Obiettivi aziendali]
- Constraints: [Tech, budget, timeline]
```

**Template Funzionale/BA**:
```
Contesto:
- Feature: [Nome e scope]
- Stakeholder: [Business owner, tech lead]
- Business need: [Perché serve]
- Current state: [AS-IS process]
- Desired state: [TO-BE process]
- Acceptance criteri must-have: [Vincoli]
```

---

## 🎯 E - EXPECTATIONS (Aspettative)

### **Cosa Definisce**
Come vuoi l'output: formato, struttura, lunghezza, tone, deliverable finale

### **Perché è Potente**
Specificare expectations precise = zero iterazioni per riformattare. Output ready-to-use.

### **Aspetti da Specificare**

**1. Formato Output**:
- Tabella (specifica colonne)
- Lista (numerata, bullet, checklist)
- Email (subject + body)
- Documento (sezioni specifiche)
- Presentazione (slide structure)
- JSON/CSV (per export)

**2. Lunghezza**:
- Word count: "max 300 parole", "tra 500-700 parole"
- Character count: "max 280 caratteri" (per social)
- Page count: "max 2 pagine A4"
- Specificity: "3 bullet points, ciascuno max 50 parole"

**3. Tone & Style**:
- Formale vs Casual
- Tecnico vs Business-friendly
- Data-driven vs Narrativo
- Confident vs Cautious

**4. Audience**:
- C-level (executive summary, high-level)
- Technical team (dettaglio tecnico)
- Stakeholder esterni (context completo)
- Team interno (shorthand ok)

**5. Deliverable Type**:
- "Pronto per invio email"
- "Draft da rivedere"
- "Final version"
- "Template riutilizzabile"

### **Esempio Expectations Complete**

```
Expectations:
- Formato: Email professionale
- Lunghezza: Max 400 parole
- Struttura obbligatoria:
  * Subject line accattivante (max 60 char)
  * Opening paragrafo (context setting)
  * Body: 3 bullet points con raccomandazioni
  * Closing con clear Call-to-Action
- Tone: Professionale ma warm, solution-oriented
- Audience: C-level stakeholder non tecnico
- Evita: Jargon tecnico, acronimi non spiegati
- Includi: Data points specifici quando possibile
- Output: Ready-to-send (no placeholder [INSERT])
```

---

## 💼 RACE Completo - Esempio PM

Vediamo RACE applicato end-to-end per un caso reale.

### **Scenario**: Risk Analysis Email per Sponsor

```markdown
[ROLE]
Sei un Senior Project Manager con 10 anni di esperienza in progetti
di digital transformation per il settore bancario.

[ACTION]
Scrivi una risk analysis email per il project sponsor per comunicare
situazione rischi e richiedere decisioni critiche.

[CONTEXT]
Progetto: Core Banking System Migration
Cliente: Banca nazionale, 2M clienti, settore altamente regolamentato
Budget: €5M | Timeline: 12 mesi (siamo al mese 7)
Status: 55% completato (target era 60% - leggero ritardo)
Team: 15 persone (8 dev, 3 BA, 2 QA, 1 PM, 1 architect)

Issue critica emersa questa settimana:
- Legacy system ha API non documentate (scoperto durante integration)
- Documentazione tecnica anni '90 incompleta
- 2 developer originali legacy system sono in pensione
- Reverse engineering richiederà 3-4 settimane extra

Team concerns:
- Possibili altri "unknown unknowns" nel legacy code
- Risk di ulteriori slittamenti se emergono altri gap
- Morale team in calo per continue sorprese

Sponsor context:
- C-level, limitata conoscenza tecnica
- Focus primario: rispettare go-live date (regulatory deadline)
- Budget approval richiede business case solido

[EXPECTATIONS]
Formato: Email formale
Lunghezza: 350-450 parole
Struttura:
1. Situation Summary (1 paragrafo - what happened)
2. Risk Analysis (tabella con Top 3 risks)
   Colonne: Risk | Likelihood (H/M/L) | Impact | Mitigation Proposed
3. Decision Needed (bullet list chiaro)
4. Recommended Action (1 paragrafo con rationale)

Tone: Professionale, proactive (no panic), solution-oriented
Focus: Business impact (timeline, budget, compliance)
Evita: Technical jargon
Include: Specific data points (dates, effort estimates)
Ask: Explicit decision point con opzioni A/B
```

**Output atteso**: Email professionale pronta per invio, con analisi chiara e decision point esplicito per lo sponsor.

---

## 📚 Template RACE Riutilizzabili

Template pronti all'uso per task ricorrenti. Copia, personalizza con i tuoi dati, riutilizza.

### **Template 1: Status Report Settimanale (PM)**

```markdown
[R] Sei un Senior Project Manager in [industry]

[A] Scrivi status report settimanale del progetto per steering committee

[C]
Progetto: [Nome]
Settimana: [N]
Progress: [%]
Milestone recenti: [Cosa completato]
Issues emerse: [Problemi]
Team size: [N persone]
Budget status: [On track / Alert]

[E]
Formato: Email
Struttura:
- 📊 Progress: [Milestone + % vs target]
- ✅ Achievements questa settimana
- ⚠️ Risks & Issues (top 2)
- ➡️ Next Week Priorities
Lunghezza: Max 300 parole
Tone: Data-driven, transparent
Audience: Steering committee (mix tecnico/business)
```

---

### **Template 2: Portfolio Review (PMO)**

```markdown
[R] Sei un PMO Analyst esperto in portfolio management

[A] Genera executive dashboard summary dello stato portfolio progetti

[C]
Portfolio: [N progetti]
Scope: [BU / Division]
Periodo: [Q1 2025]
Totale budget: [€X]
Progetti per status:
- Green: [N]
- Amber: [N]
- Red: [N]
KPI focus: [On-time delivery, budget variance, resource utilization]

[E]
Formato: Dashboard-style report
Struttura:
1. Executive Summary (3 bullet points)
2. RAG Status Table (Project | Status | Budget | Timeline | Key Issue)
3. Finanziari: Budget variance analysis
4. Top 3 Risks portfolio-level
5. Recommendations

Lunghezza: Max 2 pagine
Tone: Executive, data-driven
Include: Trend arrows (↑↓↔)
```

---

### **Template 3: User Research Synthesis (Service Design)**

```markdown
[R] Sei un UX Researcher senior specializzato in qualitative research

[A] Sintetizza findings da user interviews e genera insights actionable

[C]
Research: [Topic]
Numero interviste: [N]
User segment: [Demographics, caratteristiche]
Domande chiave research: [Obiettivi]
Metodo: [Semi-structured interviews / Usability test / etc.]
Durata: [N settimane]

[E]
Formato: Research Report
Struttura:
1. Research Overview (obiettivi, metodo, sample)
2. Key Findings (Top 5, con user quotes rappresentative)
3. Patterns Emergenti (temi ricorrenti)
4. Pain Points & Opportunities (tabella)
5. Recommendations Prioritized (H/M/L impact)

Lunghezza: 4-6 pagine
Include: Direct user quotes (anonimizzate)
Tone: Insights-driven, evidence-based
Audience: Product team + stakeholder business
```

---

### **Template 4: Business Requirements → User Stories (Funzionale)**

```markdown
[R] Sei un Business Analyst certificato, esperto Agile methodology

[A] Trasforma business requirement in user stories formato standard con acceptance criteria

[C]
Feature: [Nome feature]
Business need: [Requirement descrittivo da stakeholder]
Stakeholder: [Chi ha richiesto, ruolo]
Priority: [Must-have / Should-have / Nice-to-have]
Technical constraints: [Limitazioni note]
Compliance/Regulatory: [Se applicabile]

[E]
Formato: User Stories Agile
Struttura per story:
```
As a [user type]
I want to [action/capability]
So that [business benefit]

Acceptance Criteria:
- [Criterio 1 - testabile]
- [Criterio 2 - testabile]
- [Criterio 3 - testabile]

Story Points Estimate: [Fibonacci]
Priority: [H/M/L]
Dependencies: [Se presenti]
```

Numero stories: Massimo 5-6 (break down feature se troppo grande)
Tone: Chiaro, specifico, testabile
Include: Edge cases nei criteria dove rilevante
```

---

## ✏️ Esercizio Pratico: Build Your RACE

**Obiettivo**: Creare un prompt RACE per un tuo task ricorrente reale

### **Step 1: Scegli Task Ricorrente**
Esempi:
- Status report weekly
- Email stakeholder update
- Meeting notes → action items
- Requirements refinement
- User feedback synthesis

### **Step 2: Compila Ogni Componente RACE**

**R - Role**: Il tuo ruolo ideale per questo task
- Definisci expertise necessaria
- Specifica industry se rilevante
- Includi specializzazione

**A - Action**: L'azione specifica richiesta
- Usa verbo preciso
- Specifica deliverable finale
- Chiarisci scopo

**C - Context**: Contesto tipico del task
- Quali info sempre necessarie?
- Vincoli ricorrenti?
- Stakeholder coinvolti?

**E - Expectations**: Output desiderato
- Formato esatto
- Lunghezza target
- Tone appropriato
- Audience specifica

### **Step 3: Testa con Claude**
- Usa il prompt su dati reali
- Valuta qualità output
- Identifica cosa manca o va migliorato

### **Step 4: Itera e Raffina**
- Aggiusta componenti basandoti su risultati
- Prova nuovamente
- Quando funziona bene → salva come template!

### **Step 5: Crea Template Library**
Crea file/documento con i tuoi migliori RACE template per riuso veloce.

<details>
<summary>👉 Esempio Esercizio Completato - Meeting Notes Transform</summary>

**Task Ricorrente**: Trasformare note sparse di meeting in action items strutturati

```markdown
[R]
Sei un Project Coordinator esperto in meeting facilitation e follow-up.

[A]
Trasforma meeting notes non strutturate in lista action items chiara e trackable.

[C]
Meeting type: [Sprint Planning / Stakeholder Review / Team Sync]
Partecipanti: [Ruoli presenti]
Durata: [N minuti]
Topic principale: [Tema discusso]
Notes: [Raw notes testuali]

[E]
Formato: Action Items List
Struttura per item:
- Owner: [Nome persona assegnata]
- Action: [Descrizione chiara del task]
- Deadline: [Data specifica]
- Priority: [High / Medium / Low]
- Context: [1 frase perché è necessario]

Ordine: Priority (H → M → L), poi deadline
Lunghezza: Max 10 action items (prioritizza i critici)
Include separatamente:
- Decisioni prese nel meeting (bullet list)
- Open questions da follow-up

Tone: Chiaro, actionable
Output: Ready to paste in project management tool
```

**Risultato**: Da 2 pagine di note sparse → Lista di 7 action items chiari con owner e deadline, pronta per tracking ✅
</details>

---

## 🔑 Key Takeaways

:::tip Punti Chiave da Ricordare

✨ **RACE è Framework Sistematico**: Role, Action, Context, Expectations - mai più dimenticare componenti critici

✨ **Context è il Segreto**: L'LLM non "sa" il tuo contesto. Più specifico = output migliore

✨ **Expectations = Zero Rework**: Specificare formato/lunghezza/tone precisi elimina iterazioni

✨ **Template = Scalabilità**: Crea RACE template per task ricorrenti e risparmia 70% tempo

✨ **Itera per Perfezionare**: Primo tentativo raramente perfetto. Raffina basandoti su output reali

:::

---

## 🔗 Risorse Aggiuntive

**Prossime Tecniche**:
- [Chain-of-Thought](./chain-of-thought) - Per problemi complessi che richiedono ragionamento multi-step
- [Few-Shot Learning](./few-shot-learning) - Guidare con esempi per output ultra-consistente

**Best Practices**:
- Salva i tuoi migliori RACE template in documento condiviso team
- Versiona i template quando li migliori (v1, v2, etc.)
- Documenta quando/come usare ciascun template

---

## ➡️ Prossimi Passi

Hai padroneggiato RACE! Ora esplora tecniche avanzate per situazioni specifiche.

👉 **[Continua con Chain-of-Thought Prompting →](./chain-of-thought)**

Per problemi complessi che richiedono analisi multi-step, la tecnica Chain-of-Thought farà la differenza.

