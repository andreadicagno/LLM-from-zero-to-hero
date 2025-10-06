---
title: Framework RACE per Prompt Efficaci
description: Metodo sistematico per costruire prompt che generano risultati precisi e utilizzabili ogni volta
sidebar_position: 1
tags: [prompt-engineering, RACE, framework, anatomia, best-practices]
---

# 🏁 Framework RACE per Prompt Efficaci

> ⏱️ **Durata**: 20 minuti
> 🎯 **Livello**: Base/Intermedio

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Padroneggiare i 4 componenti del framework RACE
- ✅ Applicare RACE per costruire prompt strutturati
- ✅ Trasformare prompt vaghi in prompt efficaci e actionable
- ✅ Utilizzare template RACE riutilizzabili per il tuo ruolo
- ✅ Creare libreria personale di prompt template

---

## 💡 Perché Serve un Framework Sistematico?

**Senza framework strutturato**:
- ❌ Output generico non utilizzabile
- ❌ 5-6 iterazioni per ogni task
- ❌ Risultati inconsistenti
- ❌ Perdita tempo e frustrazione

**Con framework RACE**:
- ✅ Output preciso al primo tentativo
- ✅ 1-2 iterazioni massimo
- ✅ Risultati consistenti e riproducibili
- ✅ Template riutilizzabili

:::tip Impatto Real-World
Team che adottano RACE per task ricorrenti riportano **60-70% riduzione tempo** per generare deliverable standard (report, email, documenti).
:::

---

## 📚 Cos'è il Framework RACE?

**RACE** è un framework strutturato per costruire prompt efficaci ogni volta. È l'acronimo di:

- 🎭 **R** - **Role** (Ruolo)
- ⚡ **A** - **Action** (Azione)
- 📋 **C** - **Context** (Contesto)
- 🎯 **E** - **Expectations** (Aspettative)

**Formula base**:
```
[ROLE] + [ACTION] + [CONTEXT] + [EXPECTATIONS] = Prompt Efficace
```

**Perché in quest'ordine?**
1. **Role**: Imposta la "mentalità" dell'LLM
2. **Action**: Chiarisce subito l'obiettivo
3. **Context**: Fornisce info necessarie per il task
4. **Expectations**: Definisce come vuoi l'output

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

### **Esempi di Ruoli Efficaci per Audience Workshop**

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
Senza azione chiara, l'LLM non sa cosa produrre. L'azione deve rispondere a: "Cosa deve produrre l'LLM?"

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

---

## 📋 C - CONTEXT (Contesto)

### **Cosa Fornisce**
Background, situazione, vincoli, informazioni necessarie per task

### **Perché è Fondamentale**
L'LLM non ha accesso al tuo contesto. Senza contesto = output generico e inutilizzabile.

:::warning Errore Comune
Non assumere che l'LLM "capisca" il contesto implicito. Se è rilevante per il task, esplicitalo sempre.

❌ "Analizza il problema" → Quale problema?
✅ "Analizza il problema di performance emerso nello sprint 5 del progetto Core Banking Migration..."
:::

### **Checklist Contesto Completo**

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
Come vuoi l'output: formato, struttura, lunghezza, tone, stile, esempi

### **Perché è Potente**
Specificare expectations precise = zero iterazioni per riformattare. Output ready-to-use.

### **Componenti di Expectations**

**1. Formato Output**:
- 📊 Tabella (specifica colonne)
- 📝 Lista (numerata, bullet, checklist)
- 📧 Email (subject + body)
- 📄 Documento (sezioni specifiche)
- 💻 Presentazione (slide structure)
- 💾 JSON/CSV (per export)

**2. Lunghezza**:
- Word count: "max 300 parole", "tra 500-700 parole"
- Character count: "max 280 caratteri" (per social)
- Page count: "max 2 pagine A4"
- Specificity: "3 bullet points, ciascuno max 50 parole"

**3. Tone & Style**:
- 🎩 **Formale**: per executive, board, clienti enterprise
- 💬 **Casual**: per team interno, brainstorming
- 🔬 **Tecnico**: per audience tech, detailed
- 📚 **Educativo**: per training, onboarding
- 💼 **Business-friendly**: evita jargon, focus ROI/value

**4. Audience**:
- C-level (executive summary, high-level)
- Technical team (dettaglio tecnico)
- Stakeholder esterni (context completo)
- Team interno (shorthand ok)

**5. Esempi (Few-Shot)**:
Quando il formato è particolare o difficile da descrivere a parole:
```
Esempio:
Input: [esempio input]
Output desiderato: [come vuoi sia formattato]
```

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

## 💡 Esempio Completo: Prompt Debole → RACE Forte

### ❌ **Prompt Debole (Inefficace)**

```
"Scrivi un report sul progetto"
```

**Problemi**:
- No contesto (quale progetto?)
- Task vago (che tipo di report?)
- No formato (email? presentazione? documento?)
- No audience (chi lo legge?)
- No vincoli (lunghezza? sezioni?)

**Risultato**: Output generico di 2 paragrafi vaghi, inutilizzabile ❌

---

### ✅ **Prompt RACE Forte (Efficace)**

```markdown
[ROLE]
Sei un Project Manager esperto in progetti IT enterprise.

[ACTION]
Scrivi un executive summary del progetto "Digital Transformation Platform" per il CFO.

[CONTEXT]
Progetto: Digital Transformation Platform
Cliente: ABC Corp (Fortune 500, settore retail)
Budget: €2M | Timeline: 9 mesi
Status: 60% completato, 2 settimane ritardo
Team: 15 persone
Milestone recente: Migration fase 1 completata con successo
Risk principale: integrazione con legacy ERP più complessa del previsto
Prossimi step: Deployment fase 2 in Q1 2025

[EXPECTATIONS]
Formato: Email formale
Lunghezza: 350-450 parole
Struttura obbligatoria:
1. 📊 Progress (milestone + % completion)
2. ⚠️ Risks & Issues (top 2 con mitigation plan)
3. ➡️ Next Steps (priority actions + timeline)

Tone: Conciso, business-oriented, data-driven
Audience: CFO (limitata conoscenza tecnica)
Focus: Business impact (timeline, budget, compliance)
Evita: Technical jargon
Include: Specific data points (dates, effort estimates)
```

**Risultato**: Email executive di 380 parole, pronta per invio, formato perfetto ✅

---

## 📚 Template RACE Riutilizzabili

Template pronti all'uso per task ricorrenti. Copia, personalizza con i tuoi dati, riutilizza.

### **Template 1: Recap Mail Strutturato (PM/Funzionale)**

```markdown
[R] Sei un Project Coordinator esperto in comunicazione stakeholder

[A] Trasforma thread email in recap strutturato e actionable

[C]
Thread email: [Copia-incolla conversazione]
Periodo: [Date range es: 15-20 Gen]
Partecipanti: [Stakeholder coinvolti]
Topic principale: [Oggetto discussione]
Context: [Background se necessario]

[E]
Formato: Documento strutturato
Sezioni obbligatorie:

**1. DECISIONI PRESE**
- [Decisione 1] - presa da [chi] il [data]
- [Decisione 2] - presa da [chi] il [data]

**2. ACTION ITEMS**
- Owner: [Nome]
- Azione: [Cosa fare]
- Deadline: [Data]
- Status: [New / In progress]

**3. OPEN QUESTIONS**
- [Domanda 1] - da chiarire con [chi]
- [Domanda 2] - da chiarire con [chi]

**4. NEXT STEPS**
- [Prossima azione prioritaria]
- [Timeline proposto]

Lunghezza: Max 400 parole
Tone: Chiaro, neutro, action-oriented
Output: Copy-paste ready per condivisione team
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

### **Template 4: Stakeholder Request → Feasibility Assessment (Funzionale)**

```markdown
[R] Sei un Business Analyst senior con esperienza in change management e project scoping

[A] Analizza richiesta stakeholder e genera feasibility assessment strutturato

[C]
Request: [Descrizione richiesta stakeholder]
Requestor: [Nome, ruolo, department]
Business driver: [Motivazione business]
Timeline requested: [Urgenza/deadline]
Current systems impacted: [Sistemi/processi coinvolti]
Budget indication: [Range budget se disponibile]
Strategic alignment: [Collegamento a obiettivi aziendali]

[E]
Formato: Feasibility Assessment Report
Struttura obbligatoria:

**1. REQUEST SUMMARY**
- Richiesta in 2-3 frasi
- Stakeholder key e loro driver

**2. FEASIBILITY ANALYSIS**
- Technical feasibility: [H/M/L] + rationale
- Operational feasibility: [H/M/L] + rationale
- Financial feasibility: [H/M/L] + rationale
- Timeline feasibility: [H/M/L] + rationale

**3. IMPACT ASSESSMENT**
- Systems impacted: [lista]
- Teams/departments involved: [lista]
- Dependencies: [critiche]
- Risks: [top 3]

**4. EFFORT ESTIMATION**
- Effort range: [min-max person-days]
- Duration estimate: [settimane/mesi]
- Resource needs: [skill/number]

**5. RECOMMENDATION**
- Go/No-Go/Conditional approval
- Rationale (3-4 bullet points)
- Conditions if applicable
- Alternative approaches se rilevante

Tone: Obiettivo, data-driven, decision-ready
Audience: Steering committee / Product owner
Lunghezza: Max 2 pagine
Include: Risk mitigation per recommendation
```

---

## ✏️ Esercizio Pratico: Build Your RACE

**Obiettivo**: Creare un prompt RACE per un tuo task ricorrente reale

### **Step 1: Scegli Task Ricorrente**
Esempi:
- Recap mail settimanali
- Strutturare linee guida operative
- Meeting notes → action items
- Generare matrice RACI
- Proposta commerciale per cliente
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

## ⚠️ Errori Comuni da Evitare

### 1. Prompt Troppo Vago
❌ "Aiutami con questa cosa"
❌ "Fai qualcosa con questi dati"
✅ "Analizza questo dataset CSV e identifica i top 5 trend emergenti nell'ultimo quarter"

### 2. Prompt Troppo Lungo e Non Strutturato
❌ Muro di testo di 500 parole senza separazioni, tutto insieme, context mescolato con task...
✅ Sezioni chiare: [R] | [A] | [C] | [E] (usa spazi bianchi!)

### 3. Assumere Contesto Implicito
❌ "Analizza il problema" (quale problema?)
❌ "Come al solito" (l'LLM non sa il "solito")
✅ Esplicita sempre il contesto necessario

### 4. Non Specificare Formato
❌ "Dammi un report" → Ottieni formato random
✅ "Report formato: 1) Executive Summary, 2) Dettaglio, 3) Raccomandazioni. Max 2 pagine."

### 5. Usare Riferimenti Temporali Ambigui
❌ "Dati di ieri", "la settimana scorsa"
✅ "Dati del 2025-01-05", "dati dal 2024-12-28 al 2025-01-03"

---

## 🔑 Key Takeaways

:::tip Punti Chiave da Ricordare

✨ **RACE è Framework Sistematico**: Role, Action, Context, Expectations - mai più dimenticare componenti critici

✨ **Context è il Segreto**: L'LLM non "sa" il tuo contesto. Più specifico = output migliore

✨ **Expectations = Zero Rework**: Specificare formato/lunghezza/tone precisi elimina iterazioni

✨ **Template = Scalabilità**: Crea RACE template per task ricorrenti e risparmia 70% tempo

✨ **Itera per Perfezionare**: Primo tentativo raramente perfetto. Raffina basandoti su output reali

✨ **Specificità > Genericità**: "Analizza rischi tecnici del progetto X nel mese 7" > "Dimmi dei rischi"

:::

---

## 🔗 Risorse Aggiuntive

**Approfondimenti**:
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) - Guida ufficiale Claude
- [OpenAI Prompt Engineering Best Practices](https://platform.openai.com/docs/guides/prompt-engineering) - Best practices GPT

**Prossime Tecniche Avanzate**:
Ora che padroneggi RACE, esplora tecniche avanzate per situazioni specifiche: Chain-of-Thought per problemi complessi, Few-Shot per output consistente, Role-Based per prospettive multiple.

---

## ➡️ Prossimi Passi

Hai padroneggiato il framework RACE! Ora impara tecniche avanzate per casi d'uso specifici.

👉 **[Continua con Tecniche Avanzate →](./tecniche-avanzate)**

Scopri Chain-of-Thought per ragionamento multi-step, Few-Shot Learning per output consistente, e Role-Based prompting per analisi multi-prospettiva.
