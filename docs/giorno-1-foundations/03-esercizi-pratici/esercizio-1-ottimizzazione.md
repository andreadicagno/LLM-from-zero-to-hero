---
title: "Esercizio 1: Ottimizzare Prompt Inefficaci"
description: Trasforma prompt deboli in prompt efficaci applicando framework RACE, CoT e Few-Shot
sidebar_position: 1
tags: [esercizio, ottimizzazione, RACE, debugging]
---

# Esercizio 1: Ottimizzare Prompt Inefficaci

> ⏱️ **Tempo**: 30 minuti
> 👤 **Modalità**: Individuale → Peer Review (10 min)
> 📦 **Deliverable**: 3 prompt ottimizzati + analisi miglioramenti
> 🎯 **Difficoltà**: ⭐⭐ Base-Intermedio

---

## 🎯 Obiettivo Esercizio

Impara a **riconoscere e trasformare prompt inefficaci** in prompt strutturati ed efficaci, applicando sistematicamente i framework appresi (RACE, Chain-of-Thought, Few-Shot Learning).

Al completamento di questo esercizio:
- ✅ Saprai diagnosticare problemi comuni nei prompt deboli
- ✅ Applicherai framework RACE, CoT e Few-Shot in modo sistematico
- ✅ Vedrai l'impatto concreto delle ottimizzazioni sull'output
- ✅ Svilupperai "occhio critico" per valutare qualità dei prompt

---

## 📚 Istruzioni

Ti verranno forniti **3 prompt inefficaci** tratti da situazioni reali di lavoro.

**Per ciascun prompt**:
1. **Diagnostica** i problemi usando la checklist di debugging
2. **Riscrivi** il prompt applicando il framework appropriato (RACE, CoT, Few-Shot)
3. **Testa** entrambe le versioni con Claude (se possibile)
4. **Documenta** le differenze negli output e i miglioramenti

**Usa il template di documentazione** fornito alla fine per tracciare il tuo lavoro.

---

## 💡 PROMPT 1: Project Status (PM)

### Versione Debole

```
"Come va il progetto? Dammi un update"
```

### Task

Questo prompt è estremamente debole. Il tuo compito:

1. **Identifica almeno 5 problemi** con questo prompt
2. **Riscrivi** usando framework **RACE** completo
3. **Specifica** formato output e tone appropriato
4. **Confronta** i risultati (se puoi testare con Claude)

:::tip Suggerimento
Pensa: se ricevessi questo prompt come PM, cosa mancherebbe per dare un update utile? Quali informazioni servono?
:::

### Criteri di Successo

Il prompt ottimizzato deve produrre output che:
- ✅ È **actionable** (non generico)
- ✅ Ha **formato professionale** pronto per stakeholder
- ✅ Include informazioni critiche (progress, risks, next steps)
- ✅ Richiede **&lt;5 minuti** per generazione (no 10 follow-up)

---

## 💡 PROMPT 2: Requirements Analysis (Funzionale)

### Versione Debole

```
"Questi sono i requirements del cliente:

[Immagina: copia-incolla di email cliente di 500 parole, non strutturata]

Cosa dovremmo fare?"
```

### Task

Questo prompt ha problemi di **struttura e task definition**.

1. **Identifica** i problemi principali
2. **Riscrivi** con:
   - **Role** appropriato (es: Business Analyst)
   - **Task** specifico e chiaro
   - **Format** output strutturato
   - Considera **Chain-of-Thought** se necessario per analisi step-by-step
3. **Confronta** i risultati

:::warning Attenzione
Un wall-of-text come input raramente produce output strutturato. Come trasformeresti questo in un prompt efficace?
:::

### Criteri di Successo

Il prompt ottimizzato deve produrre:
- ✅ Output **strutturato** (no wall of text)
- ✅ **Action items** chiari e prioritizzati
- ✅ Analisi **feasibility** tecnica e business
- ✅ **Next steps** concreti per il team

---

## 💡 PROMPT 3: User Research Synthesis (Service Design)

### Versione Debole

```
"Ho fatto 10 interviste utenti. Help me make sense of them."
```

### Task

Questo prompt è **troppo vago** e non specifica cosa estrarre dai dati.

1. **Identifica** tutte le informazioni mancanti
2. **Riscrivi** specificando:
   - Cosa vuoi estrarre: insights? patterns? quotes rappresentative?
   - **Formato** della synthesis
   - Output **actionable** per design decisions
3. **Considera Few-Shot** se vuoi standardizzare formato insights
4. **Testa** e confronta

:::info Contesto
Come Service Designer, synthesis di user research è critica. Un prompt debole produce insights superficiali inutilizzabili.
:::

### Criteri di Successo

Il prompt ottimizzato deve produrre:
- ✅ **Insights** chiari e categorizzati per tema
- ✅ **Evidence-based** (citazioni utenti dove rilevante)
- ✅ **Raccomandazioni** design actionable
- ✅ **Prioritizzazione** insights per impatto

---

## 📝 Template Documentazione

Per **ogni prompt ottimizzato**, documenta il tuo lavoro usando questo template:

```markdown
## PROMPT [N]: [Nome/Contesto]

### Original (Weak Version)
[Copia il prompt originale debole]

### Problemi Identificati
1. [Problema 1 - es: "Nessun contesto fornito"]
2. [Problema 2 - es: "Task troppo vago"]
3. [Problema 3 - es: "Formato output non specificato"]
4. [Problema 4]
5. [Problema 5]

### Optimized Version
[Il tuo prompt ottimizzato - scrivi il prompt completo]

### Modifiche Applicate
- **Framework usato**: [RACE / CoT / Few-Shot / Combinazione]
- **Componenti aggiunti**:
  - Role: [quale e perché]
  - Action: [come l'hai reso specifico]
  - Context: [quali dettagli hai aggiunto]
  - Expectations: [formato, tone, lunghezza]
- **Rationale**: [Perché hai fatto queste scelte]

### Output Comparison (se testato)
**Before (Weak Prompt)**:
[Summary dell'output generico/problematico]

**After (Optimized Prompt)**:
[Summary dell'output migliorato]

**Improvement Impact**:
- [Miglioramento 1 - quantificabile se possibile]
- [Miglioramento 2]
- [Miglioramento 3]

### Key Learnings
[Cosa hai imparato ottimizzando questo specifico prompt]
```

:::tip Salva il Tuo Lavoro
Documenta in un file (Notion, Google Docs, Markdown locale) per riferimento futuro. Questa documentazione è preziosa!
:::

---

## 🎯 Varianti per Ruolo

Scegli la variante più rilevante per il tuo contesto, oppure prova prompt di ruoli diversi per ampliare prospettiva.

<details>
<summary><strong>📊 Variante PM: Stakeholder Communication</strong></summary>

**Prompt Debole**:
```
"Il progetto è in ritardo. Scrivi email per il cliente."
```

**Challenge**:
- Ottimizza per comunicare bad news in modo professionale e proattivo
- Usa **multi-perspective** (considera come PM + come cliente percepisce)
- Specifica tone: trasparente ma confident, problem-solving oriented
- Include mitigation plan chiaro

</details>

<details>
<summary><strong>📈 Variante PMO: Portfolio Health Check</strong></summary>

**Prompt Debole**:
```
"Analizza questi 20 progetti e dimmi quali sono a rischio."
```

**Challenge**:
- Troppo generico. Definisci criteri "a rischio" chiari
- Usa **CoT** per analisi sistematica (budget, timeline, scope, team)
- Specifica formato output: RAG status + quantificazione risk
- Output deve supportare executive decision-making

</details>

<details>
<summary><strong>🎨 Variante Service Design: Usability Test Report</strong></summary>

**Prompt Debole**:
```
"Ho testato il prototipo con 8 utenti. Cosa è emerso?"
```

**Challenge**:
- Mancano dettagli: task testati? metriche? setup test?
- Usa **Few-Shot** per standardizzare formato insights
- Specifica categorizzazione: critical issues / nice-to-have / positive feedback
- Output deve guidare prioritizzazione fixes

</details>

<details>
<summary><strong>⚙️ Variante Funzionale: Gap Analysis</strong></summary>

**Prompt Debole**:
```
"Confronta sistema attuale e quello che vogliamo."
```

**Challenge**:
- Troppo vago. Definisci dimensioni comparison (funzionalità, performance, UX, etc.)
- Usa **RACE** + specifica format tabella comparativa
- Include effort estimate per colmare gaps
- Output deve supportare roadmap prioritization

</details>

---

## ✅ Self-Assessment Checklist

Prima di considerare l'esercizio completato, verifica:

### Completeness
- [ ] Ho ottimizzato tutti e 3 i prompt richiesti
- [ ] Ho identificato almeno 5 problemi per ciascun prompt debole
- [ ] Ho documentato il processo usando il template fornito
- [ ] Ho spiegato le modifiche applicate e il rationale

### Quality Check
- [ ] Ogni prompt ottimizzato include **Role** chiaro e appropriato
- [ ] **Action** è specifica (no verbi vaghi come "help" o "dimmi")
- [ ] **Context** fornisce informazioni sufficienti per output mirato
- [ ] **Expectations** definiscono formato, tone, lunghezza, audience
- [ ] Ho applicato il **framework più appropriato** (RACE/CoT/Few-Shot)

### Testing (se possibile)
- [ ] Ho testato almeno 1 prompt ottimizzato con Claude
- [ ] Ho confrontato output before/after
- [ ] L'output ottimizzato è effettivamente migliore e utilizzabile

---

## 🔄 Peer Review (10 minuti)

:::tip Apprendimento Collaborativo
Il confronto con colleghi arricchisce la tua comprensione. Scambia i tuoi prompt!
:::

### Istruzioni Peer Review

**Step 1: Scambio** (2 min)
- Scambia i tuoi 3 prompt ottimizzati con un vicino
- Preferibilmente con qualcuno di ruolo diverso (cross-functional learning)

**Step 2: Review** (5 min)
Leggi i prompt del collega e valuta usando questa checklist:

- [ ] Il prompt è **comprensibile** e ben strutturato?
- [ ] Il **framework applicato** è appropriato per il task?
- [ ] **RACE components** sono tutti presenti e ben definiti?
- [ ] L'**output atteso** è chiaro?
- [ ] Il prompt è **riutilizzabile** (non troppo specifico né troppo generico)?

**Step 3: Feedback** (3 min)
Fornisci feedback costruttivo:

**✅ Cosa funziona bene**:
- [2-3 punti di forza specifici]

**🔄 Suggerimenti miglioramento**:
- [1-2 suggestion costruttivi]

**💡 Alternative Approach**:
- [Se hai un'idea diversa altrettanto valida]

---

## 🚀 Bonus Challenge (Opzionale)

Se hai finito prima o vuoi un challenge extra:

### Challenge: Multi-Stakeholder Communication

**Prompt Debole**:
```
"Devo comunicare che il progetto è in ritardo."
```

**Task Avanzato**:
Crea **3 versioni ottimizzate** dello stesso messaggio usando **role-based prompting** per audience diverse:

1. **Versione per Team**: Tone motivazionale, focus su come recuperare, actionable tasks
2. **Versione per Sponsor**: Tone professionale, data-driven, mitigation plan, ask esplicita
3. **Versione per Cliente**: Tone trasparente ma rassicurante, focus su value delivery, revised timeline

**Obiettivo**: Vedere come stesso contenuto richiede approcci diversi per audience diverse.

---

## 💡 Soluzione & Spiegazione

:::warning Prima Prova Autonomamente
Tenta di completare l'esercizio da solo prima di guardare le soluzioni. L'apprendimento avviene nella pratica!
:::

<details>
<summary><strong>👉 Clicca per Soluzione Guidata - Prompt 1 (PM Status)</strong></summary>

### Soluzione Prompt 1: Project Status

#### Problemi Identificati

1. ❌ **Nessun contesto**: Quale progetto? Quale fase? Per chi è l'update?
2. ❌ **Task vago**: "Come va" non specifica cosa includere
3. ❌ **Nessun formato**: Output struttura libera, probabilmente inutilizzabile
4. ❌ **Nessun tone guidance**: Formale? Casual? Tecnico?
5. ❌ **Nessun vincolo lunghezza**: Rischio wall-of-text o troppo breve
6. ❌ **Audience non definita**: Team? Manager? C-level?

#### Versione Ottimizzata (RACE)

```
[ROLE]
Sei un Senior Project Manager con 10 anni di esperienza in progetti IT enterprise.

[ACTION]
Genera weekly status report del progetto per il project steering committee.

[CONTEXT]
Progetto: Digital Transformation Platform
Cliente: Accenture - Banking Sector
Budget: €2M | Timeline: 9 mesi (attualmente: mese 5)
Status: 60% completato
Key achievements questa settimana:
- Completata migrazione database Fase 1
- Testing integrazione API con successo
- Onboarding nuovo tech lead

Issues/Blockers:
- Ritardo 1 settimana su design UI (attesa feedback cliente)
- Risk: potenziale scope creep da nuovo stakeholder

Planned next week:
- Deploy ambiente staging
- Workshop requirements Fase 2 con cliente
- Risk review meeting

[EXPECTATIONS]
Formato:
Subject: Weekly Status - Digital Platform - Week 20

📊 **PROGRESS**
- [% completion vs target]
- [Key milestones achieved]

⚠️ **RISKS & ISSUES**
- [Top 2-3 con severity e mitigation in corso]

➡️ **NEXT WEEK PRIORITIES**
- [3-4 priority actions]
- [Decisions needed da sponsor]

Tone: Professionale, data-driven, proactive (no panic)
Lunghezza: 300-400 parole max
Audience: C-level steering committee (limited technical knowledge)
Output: Pronto per invio via email (no placeholder)
```

#### Perché Funziona

**Role**: Attiva expertise PM, linguaggio appropriato per executive communication

**Action**: Specifico ("weekly status report") vs vago ("update")

**Context**: Fornisce TUTTI i dettagli necessari per generare report mirato e accurato

**Expectations**: Formato chiaro = output direttamente utilizzabile senza iterazioni

#### Output Comparison

**Before (Weak Prompt)**:
> "Il progetto sta procedendo bene. Abbiamo fatto progressi questa settimana..."
>
> [Output generico, 2 paragrafi vaghi, 0 numeri concreti, inutilizzabile]

**After (Optimized Prompt)**:
> Subject: Weekly Status - Digital Platform - Week 20
>
> 📊 PROGRESS
> - 60% complete (vs 62% target) - minor variance, no impact to delivery
> - ✅ Database migration Phase 1 completed (critical milestone)
> - ✅ API integration testing successful - 98% pass rate
> ...
>
> [Output professionale, strutturato, con dati specifici, pronto per invio]

**Improvement**: Da 2 min di output inutilizzabile a report professionale pronto in 30 secondi.

</details>

<details>
<summary><strong>👉 Clicca per Soluzione Guidata - Prompt 2 (Requirements)</strong></summary>

### Soluzione Prompt 2: Requirements Analysis

#### Problemi Identificati

1. ❌ **Nessun role**: Chi sta analizzando? BA? PM? Tech Lead?
2. ❌ **Task vago**: "Cosa dovremmo fare" non specifica tipo di analisi
3. ❌ **Input non strutturato**: Wall-of-text difficile da processare
4. ❌ **Nessuna metodologia**: Come analizzare? Quali criteri?
5. ❌ **Output non definito**: User stories? Analisi? Stima effort?
6. ❌ **Mancano vincoli**: Technical constraints? Budget? Timeline?

#### Versione Ottimizzata (RACE + CoT)

```
[ROLE]
Sei un Senior Business Analyst certificato con esperienza in digital transformation projects.

[ACTION]
Analizza i business requirements del cliente e genera un documento strutturato con:
1. Requirements classification
2. Feasibility assessment
3. Prioritized backlog di user stories
4. Effort estimate e dependencies

[CONTEXT]
Cliente: Retail Bank
Feature Request: Customer onboarding digitale completo
Stakeholder: Head of Digital Banking
Email Cliente (sintesi):
"Vogliamo digitalizzare completamente onboarding nuovi clienti. Deve includere:
- Verifica identità (documenti foto)
- Video-identificazione
- Firma digitale contratti
- Apertura conto automatica
- Compliance KYC/AML
Target: go-live in Q2, budget ~€500K"

Constraints:
- Integrazione con core banking legacy (mainframe)
- Compliance strict (GDPR, banking regulations)
- Team: 6 developers, 1 designer

[EXPECTATIONS]
Analizza step-by-step:

**Step 1: Requirements Classification**
Categorizza requirements in:
- Must-Have (MVP)
- Should-Have (Phase 2)
- Nice-to-Have (Future)

**Step 2: Feasibility Assessment**
Per ciascun requirement valuta:
- Technical complexity (H/M/L)
- Integration points
- Compliance/security implications

**Step 3: User Stories**
Per MVP requirements, genera user stories formato:
"As a [user], I want [action] so that [benefit]"
+ Acceptance Criteria

**Step 4: Effort & Dependencies**
- Story points estimate
- Critical path dependencies
- Risk identification

**Output Format**:
Documento markdown strutturato con 4 sezioni sopra
Tone: Tecnico ma accessibile per stakeholder business
Lunghezza: Comprehensive (no word limit, priorità su completeness)
```

#### Perché Funziona

**Chain-of-Thought**: Step espliciti guidano analisi sistematica e completa

**Role**: BA senior con domain expertise → output più accurato

**Context**: Sintesi email + constraints tecnici/business → analisi realistica

**Expectations**: Framework di analisi chiaro → output actionable

#### Alternative Approach

Potresti anche usare **Few-Shot** se hai bisogno di formato user stories molto specifico:

```
[...stesso setup RACE...]

Esempio User Story formato desiderato:

INPUT: "Il cliente deve poter caricare documento identità"

OUTPUT:
**US-101: Upload Documento Identità**
As a new customer
I want to upload a photo of my ID document
So that I can verify my identity for account opening

Acceptance Criteria:
- Supports formats: JPG, PNG, PDF (max 5MB)
- Validates document quality (readable, not expired)
- Secure transmission (encrypted)
- Fallback: manual review if auto-validation fails

Technical Notes:
- OCR integration for data extraction
- Compliance: retain for 5 years per regulation

Now, apply same format to all requirements from email.
```

</details>

<details>
<summary><strong>👉 Clicca per Soluzione Guidata - Prompt 3 (UX Research)</strong></summary>

### Soluzione Prompt 3: User Research Synthesis

#### Problemi Identificati

1. ❌ **Nessun contesto**: Quali utenti? Quale prodotto? Cosa testato?
2. ❌ **Obiettivo vago**: "Make sense" non dice cosa estrarre
3. ❌ **Nessun formato**: Come strutturare insights?
4. ❌ **Nessuna prioritizzazione**: Tutti insights uguali?
5. ❌ **Nessun output actionable**: Insights per cosa? Design decisions? Roadmap?

#### Versione Ottimizzata (RACE + Few-Shot)

```
[ROLE]
Sei un Senior UX Researcher specializzato in qualitative research synthesis.

[ACTION]
Sintetizza findings da 10 user interviews e genera research report con insights actionable.

[CONTEXT]
Prodotto: Mobile banking app redesign
User segment: Millennial users (25-35 anni), tech-savvy
Interviews focus: onboarding flow + main dashboard experience
Metodologia: Semi-structured interviews, 45 min ciascuna
Research questions:
- Pain points in current onboarding?
- Dashboard: quali info cercano first?
- Missing features desiderate?

[EXPECTATIONS]
Output structured usando questo formato per ogni insight:

**TEMA**: [Categoria - es: Onboarding Friction]
**INSIGHT**: [1-2 frasi sintesi pattern osservato]
**EVIDENCE**: "[Quote rappresentativa utente]"
**FREQUENCY**: [Menzionato da N/10 utenti]
**SEVERITY**: [Critical / High / Medium / Low]
**IMPACT IF FIXED**: [Metrica attesa - es: "+15% completion rate"]
**RECOMMENDATION**: [Azione design specifica]

---

Esempio formato desiderato:

**TEMA**: Onboarding - Verifica Identità
**INSIGHT**: Il processo di upload documento è percepito come tedioso e poco chiaro sul "perché" sia necessario.
**EVIDENCE**: "Non capivo perché dovevo fare la foto al documento. Mi sembrava un po' invasivo... se me lo spiegassero meglio forse sarebbe meno fastidioso."
**FREQUENCY**: 7/10 utenti
**SEVERITY**: High
**IMPACT IF FIXED**: Riduzione abbandono onboarding stimata ~20%
**RECOMMENDATION**: Aggiungere micro-copy esplicativo prima dell'upload + progress indicator

---

Applica questo formato a tutti gli insights emersi dalle 10 interviste.

Poi, crea sezione finale:
**TOP 3 PRIORITY ACTIONS** per design team basate su severity + frequency.
```

#### Perché Funziona

**Few-Shot Example**: Formato standardizzato = insights facilmente processabili e comparabili

**Severity + Frequency**: Consente prioritizzazione data-driven

**Evidence (Quotes)**: Mantiene grounding nei dati reali, evita interpretazioni soggettive

**Actionable Recommendations**: Output utilizzabile direttamente da design team

#### Output Comparison

**Before (Weak Prompt)**:
> "Gli utenti hanno detto che l'onboarding è un po' lungo. Alcuni non capivano alcuni passaggi. In generale vogliono un'esperienza più veloce..."
>
> [Insights generici, no prioritizzazione, no quotes, inutilizzabile per design decisions]

**After (Optimized Prompt)**:
> [Research Report strutturato con 8-10 insights formatati secondo template, ciascuno con evidence, severity, recommendations specifiche]
>
> TOP 3 PRIORITY ACTIONS:
> 1. Ridisegno step verifica identità (7/10 users, High severity, +20% completion est.)
> 2. Dashboard info hierarchy (8/10 users, Medium severity, +user satisfaction)
> 3. ...
>
> [Output professionale, actionable, ready per design sprint planning]

</details>

---

## 🔑 Key Learnings

Dall'esercizio dovresti aver consolidato:

✨ **Riconoscere pattern di prompt deboli**:
- Task vaghi (es: "help me", "dimmi", "come va")
- Mancanza contesto critico
- Nessun formato output definito
- Audience e tone non specificati

✨ **Applicare framework sistematicamente**:
- RACE risolve la maggior parte dei problemi di struttura
- CoT per task che richiedono ragionamento multi-step
- Few-Shot quando serve consistenza formato

✨ **Vedere impatto tangibile**:
- Output passa da generico a professionale
- Riduzione drastica iterazioni necessarie
- Deliverable direttamente utilizzabile

✨ **Sviluppare intuizione**:
- "Sentire" quando un prompt manca di qualcosa
- Scegliere framework appropriato per contesto
- Bilanciare completezza e concisione

---

## ➡️ Prossimi Step

**Applica subito nel lavoro**:

1. **Questa settimana**: Prendi 1 prompt che usi regolarmente e ottimizzalo usando RACE
2. **Salva i 3 prompt ottimizzati** in un file/Notion per riferimento
3. **Condividi con il team**: Se hai trovato pattern utili, condividi con colleghi

**Continua con Esercizio 2** per creare template riutilizzabili!

---

## 🔗 Risorse Correlate

**Refresh concetti se necessario**:
- [Framework RACE](../prompt-engineering-teoria/framework-race) - Struttura completa prompt
- [Tecniche Avanzate](../prompt-engineering-teoria/tecniche-avanzate) - Chain-of-Thought, Few-Shot, Multi-Perspective
- [Debugging Prompt](../prompt-engineering-teoria/debugging) - Troubleshooting sistematico

---

**[Fine Esercizio 1]**

🎉 **Ottimo lavoro!** Hai completato l'esercizio di ottimizzazione. Sei pronto per creare i tuoi template riutilizzabili nel prossimo esercizio.
