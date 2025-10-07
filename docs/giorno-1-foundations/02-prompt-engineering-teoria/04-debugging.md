---
title: Debugging e Ottimizzazione Prompt
description: Diagnosi sistematica e troubleshooting per prompt inefficaci
sidebar_position: 4
tags: [prompt-engineering, debugging, optimization, troubleshooting]
---

# 🔧 Debugging e Ottimizzazione Prompt

> ⏱️ **Durata**: 18 minuti
> 🎯 **Livello**: Intermedio/Avanzato

---

## 🎯 Learning Objectives

- ✅ Riconoscere segnali prompt debole
- ✅ Diagnosticare problemi specifici
- ✅ Applicare tecniche troubleshooting
- ✅ Iterare verso prompt ottimale

---

## 🚩 Segnali di Prompt Debole

### **Red Flags - Output Problems**:

**1. Output Generico/Vago**
- Non specifico per tuo contesto
- Usa placeholder [INSERISCI QUI]
- Applicabile a qualsiasi situazione

**2. Output Inconsistente**
- Stesso prompt, risultati diversi
- Formato varia ogni volta
- Tone non uniforme

**3. Output Incompleto**
- Mancano sezioni richieste
- Troppo breve
- Non risponde alla domanda

**4. Output Off-Topic**
- LLM fraintende task
- Risponde a domanda diversa
- Focus sbagliato

**5. Troppe Iterazioni Necessarie**
- Follow-up continui
- Ogni volta devi correggere
- = Prompt inefficiente

---

## 🔍 Diagnosi Sistematica

### **Troubleshooting Table**

| Sintomo | Probabile Causa | Fix |
|---------|-----------------|-----|
| Output vago | Prompt troppo generico | Aggiungi contesto, esempi |
| Formato sbagliato | Expectations poco chiare | Specifica formato, usa few-shot |
| Tone inappropriato | No role/style definito | Aggiungi role, tone/audience |
| Troppo lungo/corto | No constraint lunghezza | Specifica word/char count |
| Info inventate | No fonti, oltre capability | Fornisci documenti, web search |
| Ignora parti prompt | Troppo lungo/complesso | Semplifica, split in sub-tasks |

---

## 💡 Esempio Debugging - Caso Reale

### **v1 - Prompt Originale (Weak)**
```
"Scrivi un report sul progetto"
```
**Output**: 2 paragrafi vaghi, inutilizzabile ❌

**Diagnosi**:
- ❌ No contesto
- ❌ No formato
- ❌ No audience
- ❌ Task vago

---

### **v2 - Aggiungi Contesto**
```
"Scrivi report su Digital Platform per ABC. 60% complete."
```
→ Meglio ma ancora vago su formato

---

### **v3 - Aggiungi Formato**
```
"Scrivi executive summary Digital Platform (ABC, 60% complete).

Formato:
- Progress
- Risks
- Next Steps
Max 300 parole"
```
→ Molto meglio, ma tone non preciso

---

### **v4 - Refine Complete (Strong)**
```
Sei Senior PM esperto executive communication.

Scrivi executive summary Digital Platform per CFO.

Context:
- Cliente: ABC Corp (Fortune 500)
- Budget: €2M
- Status: 60% complete, on track
- Win: migration fase 1 completata
- Next: deployment Q1

Format:
📊 Progress: [milestone + %]
⚠️ Risks: [top 2]
➡️ Next: [priority actions]

Tone: Confident, data-driven, conciso
Max 300 parole
No jargon tecnico
```
→ Output professional, pronto! ✅

---

## 🎯 Prompt Reali dal Workshop: Before/After Analysis

> 💡 I seguenti 5 prompt sono stati condivisi da partecipanti del workshop nel pre-assessment.
> Vediamo come trasformarli da versioni "naive" a prompt professionali ottimizzati usando RACE e tecniche avanzate.

:::tip Perché Questi Esempi?
Analizzare prompt reali (non artificiali) mostra pattern comuni di errori e soluzioni concrete applicabili ai tuoi use case.
:::

---

### **Caso 1: PM - Definizione Requisiti Funzionali**

**Context Partecipante**: Project Manager che deve definire requisiti per nuova feature

**❌ Prompt Originale**:
```
"Devo implementare una determinata funzionalità. Aiutami a definire i requisiti funzionali."
```

**🔍 Diagnosi Gap**:
- ❌ **Role**: Assente (chi deve essere l'LLM?)
- ❌ **Action**: Vaga ("aiutami" non è specifico)
- ❌ **Context**: Zero info sulla funzionalità (quale? per chi? perché?)
- ❌ **Expectations**: No formato, no struttura, no vincoli
- **Score**: 2/10 - Praticamente inutilizzabile

**Probabile Output**:
"Ecco alcuni requisiti generici da considerare: facilità d'uso, performance, scalabilità..." ❌
→ Lista vaga applicabile a qualsiasi feature, zero valore aggiunto

---

**✅ Prompt Ottimizzato (RACE Framework)**:

```markdown
[ROLE]
Sei un Senior Business Analyst certificato CBAP con 10 anni di esperienza in requirements engineering per progetti enterprise.

[ACTION]
Genera documento completo di requisiti funzionali per feature [NOME_FEATURE] nel sistema [NOME_SISTEMA].

[CONTEXT]
- **Feature**: [Descrizione dettagliata funzionalità]
- **User Story**: As a [user type], I want to [action], so that [benefit]
- **Business Driver**: [Perché serve questa feature]
- **Stakeholder**: [Chi ha richiesto, chi usa, chi approva]
- **Sistema target**: [Piattaforma/tech stack]
- **Vincoli**: [Tecnici, budget, timeline, compliance]
- **Integration**: [Sistemi esterni da integrare]

[EXPECTATIONS]
**Formato**: Requirements Document strutturato

**Struttura obbligatoria**:

1. **FUNCTIONAL REQUIREMENTS**
   - FR-001: [Requirement description]
     * Priority: [Must-have / Should-have / Nice-to-have]
     * Rationale: [Perché necessario]
     * Acceptance Criteria: [Condizioni per considerarlo completato]
   - FR-002: [...]
   [Min 5, max 15 requirements]

2. **NON-FUNCTIONAL REQUIREMENTS**
   - Performance: [Requisiti tempo risposta, throughput]
   - Security: [Autenticazione, autorizzazione, encryption]
   - Usability: [Accessibilità, user experience]
   - Scalability: [Utenti concorrenti, data volume]

3. **USER INTERFACE REQUIREMENTS**
   - [Descrizione UI components necessari]

4. **BUSINESS RULES**
   - [Regole business che governano la feature]

5. **ASSUMPTIONS & DEPENDENCIES**
   - Assumptions: [Cosa assumiamo vero]
   - Dependencies: [Cosa deve esistere prima]

6. **OUT OF SCOPE**
   - [Cosa esplicitamente NON incluso]

**Tone**: Tecnico ma chiaro, orientato a sviluppatori e stakeholder business
**Audience**: Development team + Product Owner + Stakeholder
**Output**: Ready per review session, no placeholder [INSERISCI]
```

---

**📊 Impact Misurato**:
- **Tempo risparmiato**: 2 ore (da 2.5h manuale → 30 min review)
- **Completezza**: Da 40% → 95% coverage requisiti critici
- **Iterazioni**: Da 4-5 round → 1-2 refinement
- **Qualità**: Output production-ready con minimal tweaking

---

### **Caso 2: Functional - Riformulazione Testo**

**Context Partecipante**: Funzionale che deve riscrivere testo per audience diversa

**❌ Prompt Originale**:
```
"Puoi rifrasarmi questo testo: [testo]?"
```

**🔍 Diagnosi Gap**:
- ❌ **Role**: Assente
- ⚠️ **Action**: Presente ma generico ("riformula")
- ❌ **Context**: Zero (perché riformulare? per chi? con che obiettivo?)
- ❌ **Expectations**: No tone, no lunghezza, no audience, no constraints
- **Score**: 3/10 - Risultato imprevedibile

**Probabile Output**:
Riformulazione random con tone arbitrario, lunghezza variabile, potrebbe non essere utilizzabile ❌

---

**✅ Prompt Ottimizzato (RACE Framework)**:

```markdown
[ROLE]
Sei un Communication Specialist esperto in business writing e stakeholder communication.

[ACTION]
Riformula il seguente testo adattandolo per [AUDIENCE_TARGET].

[CONTEXT]
**Testo originale**:
[PASTE_TESTO]

**Contesto**:
- **Audience originale**: [Chi era il target originale]
- **Audience target**: [Nuovo target - es: C-level non-tecnici, team sviluppo, cliente esterno]
- **Scopo**: [Informare / Persuadere / Documentare / Istruire]
- **Canale**: [Email / Presentazione / Report / Documentazione]
- **Background necessario**: [Contesto che audience deve conoscere]

[EXPECTATIONS]
**Formato**: [Email / Paragrafo / Documento / Bullet points]

**Requisiti**:
- **Tone**: [Formale / Professionale-accessibile / Tecnico / Casual-friendly]
- **Lunghezza**: [Max X parole / +20% rispetto originale / 2 paragrafi max]
- **Linguaggio**:
  - [✅ / ❌] Jargon tecnico
  - [✅ / ❌] Acronimi (se usati, definirli first time)
  - [✅ / ❌] Analogie/metafore per semplificare
- **Focus**: [Cosa enfatizzare per questa audience]
- **Evita**: [Cosa rimuovere o minimizzare]

**Deliverable**: Testo riformulato ready-to-use

**Esempio formato output**:
```
[Testo riformulato qui]

---
Key changes applied:
- Rimosso jargon tecnico X, Y, Z
- Aggiunte analogie business per concetti A, B
- Ridotta lunghezza da 500 → 350 parole
```
```

---

**📊 Impact Misurato**:
- **Precisione**: Da "spara nel buio" → tone perfetto first-time 90% casi
- **Riutilizzo**: Template salvato, riutilizzabile per ogni riformulazione
- **Tempo**: Da 15 min trial-and-error → 2 min setup + 1 min review

---

### **Caso 3: Service Design - AI Act & Normative**

**Context Partecipante**: Service Designer che ricerca responsabilità normative su AI

**❌ Prompt Originale**:
```
"Secondo l'AI Act e le altre normative, quali sono le responsabilità dell'agenzia nazionale di cybersicurezza in tema di responsabilità ed etica dell'AI?"
```

**🔍 Diagnosi Gap**:
- ⚠️ **Role**: Implicito (legal expert) ma non dichiarato
- ✅ **Action**: Chiaro (identificare responsabilità)
- ⚠️ **Context**: Topic complesso, alto rischio hallucination (normative specifiche)
- ❌ **Expectations**: No formato, no fonti richieste esplicitamente
- ⚠️ **Risk ALTO**: Hallucination su normative = rischio compliance
- **Score**: 5/10 - Pericoloso senza fact-checking

**Probabile Output**:
Mix di info corrette + hallucination su articoli specifici ❌
→ LLM inventa numeri articoli, date, dettagli normativi plausibili ma falsi

:::danger ⚠️ High Risk Scenario
Su normative/legal/compliance, hallucinations possono causare decisioni business errate. Sempre richiedere fonti verificabili!
:::

---

**✅ Prompt Ottimizzato (Anti-Hallucination + RACE)**:

```markdown
[ROLE]
Sei un Legal Consultant specializzato in AI regulation e compliance EU, con expertise in AI Act e cybersecurity law.

[ACTION]
Analizza le responsabilità dell'Agenzia per la Cybersicurezza Nazionale (ACN) italiana in tema di AI governance secondo AI Act EU e normative correlate.

[CONTEXT]
**Scope ricerca**:
- **Normativa primaria**: EU AI Act (Regulation 2024/1689)
- **Normative secondarie**: NIS2 Directive, GDPR (rilevanti per AI), Cyber Resilience Act
- **Focus geografico**: Italia, ruolo ACN
- **Ambito**: Responsabilità & oversight su sistemi AI
- **Timeline**: Normative in vigore o approvate fino a [DATA_CORRENTE]

**Documenti di riferimento** (se disponibili):
[Upload PDF: AI Act ufficiale, decreto istitutivo ACN, linee guida EDPB]

[EXPECTATIONS]
**⚠️ REQUISITI ANTI-HALLUCINATION**:
1. **Cita SEMPRE fonti specifiche**: Articolo numero, sezione, documento
2. **Se info non certa o non disponibile**: Dichiara esplicitamente "Non ho fonte verificabile per..."
3. **NO invenzione**: Non inventare articoli, numeri, date
4. **Web search**: [Se possibile] Abilita per riferimenti più recenti

**Formato Output**:

### **1. RESPONSABILITÀ ACN SECONDO AI ACT**
- **Responsabilità 1**: [Descrizione]
  * Fonte: [Art. X, Sezione Y, AI Act EU 2024/1689]
  * Dettaglio: [Cosa prevede esattamente]
  * Applicabilità Italia: [Come si traduce per ACN]

### **2. RESPONSABILITÀ DA NORMATIVE CORRELATE**
- **NIS2 Directive**: [Responsabilità specifiche se presenti]
- **GDPR**: [Responsabilità su AI che processa dati personali]

### **3. TIMELINE IMPLEMENTAZIONE**
- [Date chiave per entrata in vigore obblighi]

### **4. GREY AREAS / INCERTEZZE**
- [Aspetti non chiari o in evoluzione]

### **5. FONTI CONSULTATE**
- [Lista URL/documenti ufficiali utilizzati]

**⚠️ DISCLAIMER**:
"Questa analisi è basata su fonti pubblicamente disponibili fino a [DATA]. Per decisioni compliance-critical, consultare sempre legal counsel specializzato."

**Tone**: Professionale-tecnico, preciso, evidence-based
**Audience**: Team legale + Compliance officer
**Lunghezza**: 800-1200 parole
```

---

**📊 Impact Misurato**:
- **Hallucination risk**: Da ALTO (70%) → BASSO (10%) con source forcing
- **Affidabilità**: Output verificabile vs "fidarsi ciecamente"
- **Legal safety**: Disclaimer + citation proteggono da liability
- **Tempo ricerca**: Da 3 ore Google Scholar → 30 min analysis + 30 min fact-check

**🔴 CRITICAL**: Sempre fact-check normative con fonti primarie ufficiali!

---

### **Caso 4: PMO - Paragrafo Strutturato**

**Context Partecipante**: PMO che deve strutturare info in documento

**❌ Prompt Originale**:
```
"Ciao, crea un paragrafo suddiviso in tre sezioni (sezione a - sezione b - sezione c) inserendo le informazioni che trovi di seguito..."
```

**🔍 Diagnosi Gap**:
- ❌ **Role**: Assente
- ✅ **Action**: Chiaro (crea paragrafo strutturato)
- ⚠️ **Context**: Informazioni fornite MA manca: chi legge? scopo? tone?
- ⚠️ **Expectations**: Struttura definita (3 sezioni) MA naming vago ("sezione a/b/c")
- **Score**: 6/10 - Meglio di altri, ma migliorabile

**Cosa funziona già**:
- ✅ Specifica struttura output (3 sezioni)
- ✅ Fornisce info da utilizzare

**Cosa manca**:
- ❌ Audience non chiara
- ❌ Nome sezioni generico ("a/b/c" non dice cosa contengono)
- ❌ Tone non specificato
- ❌ Lunghezza non definita

---

**✅ Prompt Ottimizzato (RACE Framework)**:

```markdown
[ROLE]
Sei un Technical Writer esperto in documentazione PMO e governance reporting.

[ACTION]
Trasforma le informazioni raw fornite in paragrafo strutturato professionale per [TIPO_DOCUMENTO].

[CONTEXT]
**Tipo documento**: [Report mensile PMO / Governance document / Audit report]
**Audience**: [Steering Committee / Board / Team PMO interno]
**Scopo**: [Informare decisioni / Documentare compliance / Status update]

**Informazioni raw da strutturare**:
[PASTE_INFORMAZIONI]

**Background addizionale**:
- **Progetto/Portfolio**: [Nome e scope]
- **Periodo riferimento**: [Mese/Quarter]
- **Decision richieste**: [Se audience deve decidere qualcosa]

[EXPECTATIONS]
**Formato**: Documento strutturato in 3 sezioni tematiche

**Struttura**:

### **[NOME_SEZIONE_1]** (es: "Executive Summary")
[Contenuto sezione 1: high-level overview, key takeaways]
[Lunghezza: 100-150 parole]

### **[NOME_SEZIONE_2]** (es: "Dettaglio Operativo")
[Contenuto sezione 2: dati, metriche, evidence]
[Lunghezza: 150-200 parole]

### **[NOME_SEZIONE_3]** (es: "Raccomandazioni & Next Steps")
[Contenuto sezione 3: azioni richieste, timeline]
[Lunghezza: 100-150 parole]

**Requisiti**:
- **Tone**: [Formale-conciso / Professionale-accessibile / Data-driven neutro]
- **Lunghezza totale**: 350-500 parole
- **Stile**: Bullet points dove appropriato per leggibilità
- **Dati**: Integrare numeri/metriche dove possibile
- **Call-to-Action**: Se richiesto, includere clear next steps

**Output**: Copy-paste ready per documento finale
```

---

**📊 Impact Misurato**:
- **Chiarezza**: Nomi sezioni descrittivi vs "a/b/c" → lettore capisce subito contenuto
- **Tone**: Appropriato per audience → no rework
- **Lunghezza**: Controllata → fit perfetto in template documento
- **Professionalità**: Da draft grezzo → documento polished

---

### **Caso 5: PM - Tabella Categorizzazione Documento**

**Context Partecipante**: PM che deve analizzare documento e categorizzare contenuti

**❌ Prompt Originale**:
```
"Crea una tabella che raccolga i contenuti principali del documento categorizzandoli per macro-tematiche (es. NIST function)."
```

**🔍 Diagnosi Gap**:
- ❌ **Role**: Assente
- ✅ **Action**: Chiaro (tabella categorizzata)
- ⚠️ **Context**: Documento da analizzare MA senza info su tipo, scope, obiettivo analisi
- ⚠️ **Expectations**: Formato (tabella) definito, esempio (NIST) fornito MA colonne non specificate
- **Score**: 7/10 - Buon punto di partenza, già sopra media

**Cosa funziona già**:
- ✅ Formato chiaro (tabella)
- ✅ Esempio categorizzazione (NIST function)
- ✅ Task specifico

**Cosa migliorerebbe**:
- Colonne esatte tabella
- Numero righe target
- Livello dettaglio per categoria
- Cosa fare con contenuti che non fittano

---

**✅ Prompt Ottimizzato (Few-Shot Enhanced)**:

```markdown
[ROLE]
Sei un Senior Business Analyst specializzato in document analysis e framework categorization (NIST, ISO, COBIT).

[ACTION]
Analizza il documento allegato ed estrai contenuti principali categorizzati in tabella strutturata secondo [FRAMEWORK_CATEGORIZZAZIONE].

[CONTEXT]
**Documento da analizzare**:
[UPLOAD_FILE o PASTE_CONTENUTO]

**Tipo documento**: [Technical specification / Business requirements / Audit report / Policy document]
**Scopo analisi**: [Quick reference / Gap analysis / Compliance mapping / Knowledge extraction]
**Framework categorizzazione**: [NIST Cybersecurity Framework / ISO 27001 / COBIT / Custom categories]

[EXPECTATIONS]
**Formato**: Tabella Markdown

**Struttura Tabella**:

| # | Macro-Tematica | Contenuto Chiave | Dettaglio/Note | Page/Section Ref | Priority |
|---|----------------|------------------|----------------|------------------|----------|
| 1 | [NIST Function: Identify] | [Sintesi contenuto] | [Dettagli rilevanti] | [Pag. X, Sez. Y] | [H/M/L] |
| 2 | [NIST Function: Protect] | [...] | [...] | [...] | [...] |

**Colonne Explained**:
- **#**: Progressive number
- **Macro-Tematica**: Categoria secondo framework (es: NIST 5 functions)
- **Contenuto Chiave**: Sintesi 1-2 frasi del contenuto rilevante
- **Dettaglio/Note**: Info addizionali o implicazioni
- **Page/Section Ref**: Riferimento documento originale per traceability
- **Priority**: Importanza/urgenza (High/Medium/Low) se valutabile

**Requisiti**:
- **Completezza**: Copri TUTTI i contenuti rilevanti del documento
- **Granularità**: 1 riga = 1 concept/topic distinto
- **Target rows**: Min 10, max 30 (se doc molto lungo, priorizza top 30)
- **Categoria "Other"**: Per contenuti che non fittano framework, crea categoria catch-all

**Few-Shot Example**:

Input (documento snippet):
"Il sistema deve implementare controlli di accesso basati su ruoli (RBAC) con autenticazione multi-fattore obbligatoria per utenti privilegiati. Audit log devono essere conservati per 12 mesi..."

Output Tabella:
| # | Macro-Tematica | Contenuto Chiave | Dettaglio/Note | Page/Section Ref | Priority |
|---|----------------|------------------|----------------|------------------|----------|
| 1 | NIST: Protect | RBAC + MFA per utenti privilegiati | Controllo accesso basato ruoli con MFA mandatory | Pag. 5, Sez. 3.2 | High |
| 2 | NIST: Detect | Audit logging 12-mesi retention | Monitoraggio attività con log retention policy | Pag. 5, Sez. 3.2 | Medium |

**Deliverable**: Tabella completa Markdown, copy-paste ready in Confluence/Notion
```

---

**📊 Impact Misurato**:
- **Traceability**: Page references permettono verifica rapida
- **Actionability**: Priority column permette focus immediato
- **Completezza**: Da analisi superficiale → coverage sistematica
- **Tempo**: Da 2h analisi manuale → 10 min review output LLM

---

## 🎓 Lessons Learned dai Prompt Reali

**Pattern Comuni Identificati**:

1. ❌ **80% non specifica Role** → Quick win: sempre aggiungere expertise appropriata
2. ❌ **100% non definisce Audience** → Output tone imprevedibile
3. ❌ **60% context insufficiente** → LLM "indovina" invece di usare info corrette
4. ❌ **40% formato vago** → Necessita rework multiple iterazioni

**Gap Più Impattanti**:
- 🔴 **Context mancante** = #1 causa output generico
- 🟡 **Expectations vaghe** = #2 causa iterazioni multiple
- 🟢 **Role assente** = impatto moderato ma easy fix

**ROI Medio Refactoring**:
- ⏱️ **Tempo risparmiato**: 60-70% per task ricorrente
- 🔄 **Iterazioni**: Da 4-5 → 1-2 refinement
- ✅ **Qualità**: Da 40% utilizzabile → 85%+ production-ready

:::tip 💡 Takeaway Actionable
**Per i Tuoi Prompt**:
1. **Quick Audit**: Prendi 3 tuoi prompt ricorrenti → Usa checklist RACE
2. **Identifica pattern**: Quali componenti mancano sempre?
3. **Template-izza**: Converti in template riutilizzabile
4. **Before/After**: Testa e documenta miglioramento
5. **Condividi**: Migliori prompt = team productivity boost
:::

---

## ☑️ Checklist Debugging Prompt

Quando output non soddisfa, verifica:

### **☐ ROLE**
- [ ] Ruolo/expertise specificato?
- [ ] Appropriato per task?

### **☐ ACTION**
- [ ] Task chiaro e specifico?
- [ ] Verbo azione preciso?

### **☐ CONTEXT**
- [ ] Contesto sufficiente?
- [ ] Vincoli esplicitati?
- [ ] Background incluso?

### **☐ EXPECTATIONS**
- [ ] Formato definito?
- [ ] Lunghezza specificata?
- [ ] Tone/style indicato?
- [ ] Audience chiara?

### **☐ EXAMPLES**
- [ ] Servono esempi (few-shot)?
- [ ] Esempi rappresentativi?

### **☐ LENGTH**
- [ ] Prompt chiaro non verboso?
- [ ] Info essenziale vs nice-to-have?

---

## 🧪 Technique: Prompt Ablation

**Cos'è**: Aggiungere/rimuovere componenti uno alla volta per vedere impatto

**Esempio**:
```
Baseline:
"Analizza rischi progetto X. Mese 5/12, 40% complete."

Test 1 - Aggiungi Role:
"Sei PMO Risk Specialist. Analizza rischi..."
→ Output più strutturato ✅

Test 2 - Aggiungi Format:
"...Formato: Tabella rischio, likelihood, impact"
→ Output actionable ✅

Test 3 - Aggiungi Examples:
[+ few-shot]
→ Formato perfettamente consistente ✅
```

Così capisci quale componente ha più impatto.

---

## 🔧 Common Fixes - Cheat Sheet

**Problema: Output Troppo Generico**
```
❌ "Dammi suggerimenti progetto"
✅ "Sei PM. Suggerisci 3 azioni concrete per recuperare 2 settimane ritardo progetto [X]. Focus: re-prioritization scope."
```

**Problema: Formato Non Rispettato**
```
❌ "Scrivi in tabella"
✅ "Output markdown table:
| Colonna A | Colonna B | Colonna C |
[+ few-shot example]"
```

**Problema: Tone Sbagliato**
```
❌ [no mention]
✅ "Tone: Professionale accessibile, audience non-tecnica. Evita jargon, usa analogie business."
```

**Problema: Troppo Lungo/Corto**
```
❌ [no constraint]
✅ "Exactly 3 bullet points, max 50 parole ciascuno"
```

**Problema: Hallucinations**
```
❌ "Dammi statistiche su [topic recente]"
✅ "Analizza SOLO dati da documenti allegati. Se info non presente: dichiara 'Non disponibile'"
```

---

## 📊 Advanced: Prompt Versioning

**Strategy**: Mantieni changelog

```
## Status Report Prompt

### v1.0 (2025-01-15)
"Scrivi status report"
→ Issue: troppo generico

### v2.0 (2025-01-16)
+ Added: Role, Format
→ Issue: tone non C-level

### v3.0 (2025-01-17)
+ Added: Audience (CFO), Tone, Length
→ Working well!

### v3.1 (2025-01-20)
+ Refined: Emoji sections
→ CURRENT VERSION
```

**Benefici**:
- Traccia evoluzione
- Puoi tornare a versione precedente
- Condivisibile con team
- Impari cosa funziona

---

## ⏹️ When to Stop Optimizing

### **✅ Prompt è "Good Enough" Quando**:
- Output soddisfa 80%+ delle volte
- Necessita &lt;2 follow-up
- Saving tempo significativo
- ROI positivo (tempo saved > tempo optimization)

### **❌ Don't Over-Optimize**:
- Perfetto è nemico del buono
- Prompt 20-parole funzionante > 500-parole 5% meglio
- Marginal gains non sempre valgono effort

**Regola 80/20**: 20% effort optimization → 80% miglioramento. Ulteriore = diminishing returns.

---

## ✏️ Esercizio Debugging Workflow

### **Parte 1: Audit Tuo Prompt**
1. Prompt che usi regolarmente
2. Usa checklist sopra
3. Identifica mancanze
4. Crea v2 migliorata
5. Test side-by-side

### **Parte 2: Fix Broken Prompt**
Prompt: "Help me with stakeholder communication for project issue"

Task:
1. Identifica tutti problemi
2. Scrivi diagnosi
3. Crea versione ottimizzata
4. Spiega ogni modifica

### **Parte 3: Ablation Testing**
1. Parti da prompt minimo
2. Aggiungi 1 componente alla volta
3. Documenta impatto
4. Identifica elementi critici vs opzionali

---

## 🔑 Key Takeaways

:::tip Punti Chiave

✨ **Output Problematico = Prompt Migliorabile**: Non è mai "colpa" dell'LLM

✨ **Diagnosi Sistematica > Trial-and-Error**: Usa checklist RACE

✨ **Ablation Testing = Identifica Essenziale**: Cosa ha veramente impatto

✨ **Versioning Aiuta**: Traccia miglioramenti nel tempo

✨ **"Good Enough" > Perfetto**: 80/20 rule, non over-optimize

✨ **Debugging è Skill Iterativa**: Migliori con pratica

:::

---

## 🎓 Conclusione Modulo Prompt Engineering

**Congratulazioni!** Hai completato il modulo Prompt Engineering.

**Cosa hai imparato**:
- ✅ Anatomia prompt efficace (6 componenti)
- ✅ Framework RACE sistematico
- ✅ Chain-of-Thought per problemi complessi
- ✅ Few-Shot per output consistente
- ✅ Role-Based & Multi-Perspective
- ✅ Meta-Prompting per delegare
- ✅ Debugging sistematico

**Prossimi Step**:
1. Applica tecniche al tuo lavoro quotidiano
2. Crea library prompt template
3. Condividi best practices con team
4. Itera e migliora continuamente

---

## ➡️ Dove Andare da Qui

Prima di passare agli esercizi, esplora pattern avanzati per workflow enterprise complessi:

👉 **[Continua con Pattern Avanzati →](./advanced-patterns)**

Impara prompt chaining, multi-turn conversation management, context window optimization, e constrained generation per casi d'uso sofisticati.

---

**Oppure vai direttamente alla pratica**:

👉 **[Vai agli Esercizi Pratici →](../esercizi-pratici)**

Metti in pratica tutto ciò che hai imparato con esercizi hands-on guidati!

