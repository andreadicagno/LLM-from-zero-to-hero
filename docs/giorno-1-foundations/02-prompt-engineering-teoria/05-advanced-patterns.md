---
title: Pattern Avanzati di Prompting
description: Tecniche sofisticate per workflow complessi - chaining, multi-turn, context optimization
sidebar_position: 5
tags: [prompt-engineering, advanced-patterns, chaining, multi-turn, optimization]
---

# 🎯 Pattern Avanzati di Prompting

> ⏱️ **Durata**: 13 minuti
> 🎯 **Livello**: Avanzato
> 📚 **Prerequisiti**: Framework RACE, Tecniche Avanzate, Meta-Prompting, Debugging

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Decomporre task complessi in catene di prompt sequenziali
- ✅ Gestire conversazioni multi-turn mantenendo contesto e focus
- ✅ Ottimizzare uso del context window per task con informazioni massive
- ✅ Generare output con vincoli ultra-specifici e formati strutturati

---

## 💡 Introduzione: Oltre i Prompt Singoli

Hai padroneggiato:
- **Framework RACE** - costruire prompt efficaci
- **Tecniche Avanzate** - CoT, Few-Shot, Multi-Perspective
- **Meta-Prompting** - delegare creazione prompt
- **Debugging** - diagnosticare e fixare

Ora è tempo di affrontare **scenari complessi enterprise**:
- Task che richiedono multipli passaggi sequenziali
- Conversazioni iterative lunghe (design review, requirement refinement)
- Analisi di informazioni massive (report 50+ pagine)
- Output con vincoli rigidi (JSON schema, API responses)

Questi pattern sono **LLM-agnostic** - applicabili a Claude, ChatGPT, o qualsiasi LLM. Nel Giorno 2 vedrai come amplificarli con features specifiche di Claude.

---

# 🔗 Pattern 1: Prompt Chaining & Sequential Workflows

## 📚 Cos'è Prompt Chaining?

**Definizione**: Decomporre task complesso in sequenza di prompt più semplici, dove output di ogni step diventa input del successivo.

**Analogia**: Assembly line - invece di un operatore che fa tutto, hai stazioni specializzate dove ciascuna perfeziona il lavoro della precedente.

### **Quando Usare Chaining**

✅ **Usa quando**:
- Task richiede passaggi concettualmente diversi
- Output intermedi sono utili per review
- Serve specializzazione per ogni fase
- Un singolo prompt sarebbe troppo complesso

❌ **Non usare quando**:
- Task semplice e diretto
- Passaggi non indipendenti
- Latenza è critica (ogni prompt = API call)

---

## 🛠️ Pattern Base: 3-Step Chain

**Struttura**:
```
Step 1: [Extraction] → Estrai informazioni chiave
↓
Step 2: [Analysis] → Analizza e valuta
↓
Step 3: [Synthesis] → Genera output finale
```

### **Esempio PM - Project Status Chaining**

**Scenario**: Trasformare raw meeting notes in executive status report

**Step 1 - Extraction**:
```markdown
Estrai da queste meeting notes:
1. Milestone completate questa settimana
2. Issues/blockers emersi
3. Decisioni prese
4. Action items assegnati

Notes: [raw notes]

Output: Lista strutturata di fatti
```

**Step 2 - Analysis**:
```markdown
Analizza questi fatti estratti:

[Output Step 1]

Per ciascuno valuta:
- Milestone: impact su timeline progetto
- Issues: severity e urgenza
- Decisioni: implicazioni per next steps
- Action items: risk se non completati

Output: Analisi con priorità e risk assessment
```

**Step 3 - Synthesis**:
```markdown
Genera executive status report da questa analisi:

[Output Step 2]

Formato:
- Progress Summary (2-3 bullet points)
- Critical Issues (top 2 con mitigation)
- Next Week Priorities (3 actions)

Tone: Conciso, data-driven
Audience: Steering committee
Max: 300 parole
```

**Risultato**: Report pulito e professionale attraverso 3 passaggi specializzati ✅

---

## 💡 Template Riutilizzabile: Research → Analysis → Report

```markdown
═══════════════════════════════════════════════
STEP 1: RESEARCH & INFORMATION GATHERING
═══════════════════════════════════════════════

Topic: [topic specifico]
Scope: [cosa serve ricercare]

Raccogli:
- [Tipo info 1]
- [Tipo info 2]
- [Tipo info 3]

Output: Raw data strutturato per categories

═══════════════════════════════════════════════
STEP 2: ANALYSIS & INSIGHTS EXTRACTION
═══════════════════════════════════════════════

Input: [Output Step 1]

Analizza pattern, trend, anomalie:
1. Identifica top 3 insights significativi
2. Evidenzia implicazioni
3. Note confidence level per insight

Output: Insights con supporting evidence

═══════════════════════════════════════════════
STEP 3: SYNTHESIS & RECOMMENDATIONS
═══════════════════════════════════════════════

Input: [Output Step 2]

Genera: [Executive Report / Action Plan / Strategy Doc]

Formato: [specifica struttura]
Include:
- Summary insights
- Recommendations prioritized
- Next steps concrete

Output: Deliverable finale
```

---

## ⚠️ Best Practices Chaining

### **1. Checkpoints Intermedi**
Sempre review output di ogni step prima di procedere. Se Step 1 ha errori, tutta la catena produce garbage.

### **2. Modularità**
Ogni step deve essere indipendente concettualmente. Se devi modificare Step 2, non dovrebbe richiedere cambio Step 1.

### **3. Error Handling**
```markdown
Se Step N produce output insufficiente:
- Raffina prompt Step N (più specifico)
- Fornisci esempio output desiderato
- Considera aggiungere intermediate step
```

### **4. Documentazione Output**
Salva output di ogni step per:
- Debug se risultato finale non ok
- Riuso parziale (es: solo extraction)
- Audit trail per decisioni critiche

---

# 👥 Pattern 2: Multi-Turn Conversation Management

## 📚 Cos'è Multi-Turn Management?

**Definizione**: Strategie per gestire conversazioni iterative lunghe mantenendo contesto, focus, e progresso verso obiettivo.

**Scenario tipico**: Design review iterativo, requirement refinement, brainstorming progressivo

---

## 🎯 Sfide Multi-Turn

**Problema 1: Context Drift**
- Conversazione devia dal topic originale
- LLM dimentica obiettivo iniziale

**Problema 2: Context Overload**
- Troppa informazione accumulata
- LLM confuso da messaggi precedenti

**Problema 3: Perdita Progressi**
- Insights emersi ma poi "persi" nel dialogo
- Nessun tracking di decisioni prese

---

## 🛠️ Strategie Multi-Turn

### **Strategy 1: Explicit Context Refresh**

Ogni 5-7 turn, re-stabilisci contesto:

```markdown
Per ricapitolare fin qui:

Obiettivo: [obiettivo originale conversation]

Decisioni prese:
- [decisione 1]
- [decisione 2]

Ancora da decidere:
- [open question 1]
- [open question 2]

Procedi con: [next topic]
```

**Quando**: Dopo ~5-7 exchange, o quando senti deriva

---

### **Strategy 2: Conversation Summary Checkpoints**

Periodicamente chiedi sintesi:

```markdown
Prima di continuare, sintetizza conversazione fin qui:
- Key insights emersi
- Decisioni prese
- Open questions rimanenti
- Next steps da discutere
```

Salva questa sintesi. Se conversazione diventa troppo lunga, inizia nuova con sintesi come context.

---

### **Strategy 3: Redirect Pattern**

Quando conversazione devia:

```markdown
Questo è interessante, ma stiamo deviando dall'obiettivo originale.

Recall: Stiamo lavorando su [obiettivo specifico].

Torniamo a [topic principale]. Possiamo explorare [topic tangente] dopo se rilevante.
```

---

## 💡 Esempio Service Design - Iterative User Flow Refinement

**Turn 1: Setup**
```
Stiamo progettando onboarding flow per app mobile banking.

Target: Utenti 30-50 anni, basic digital literacy
Goal: Completare setup account in <5 minuti
Constraints: Compliance KYC obbligatoria

Proponi user flow iniziale.
```

**Turn 3: Checkpoint**
```
Recap dove siamo:
✅ Flow base definito (5 step)
✅ Ridotto form fields da 15 → 8
❓ Open: gestione errori validazione
❓ Open: messaging rassicurante per KYC

Continuiamo con error handling.
```

**Turn 6: Summary Before Pivot**
```
Sintetizza decisioni flow fin qui prima di passare a visual design.

Poi discussiamo UI specifics per step 1.
```

→ Conversazione resta focused, progressi tracciati ✅

---

## 🔑 Key Takeaway Multi-Turn

:::tip Regola d'Oro Multi-Turn

**Ogni 5-7 exchange**: Checkpoint esplicito (recap + next)

**Ogni 10-12 exchange**: Summary completo → considera reset con sintesi come nuovo context

**Sempre**: Riferimenti espliciti a messaggi precedenti ("Come discusso in turn 3...")

:::

---

# 📊 Pattern 3: Context Window Optimization

## 📚 Cos'è Context Window?

**Definizione**: Limite di quanto testo l'LLM può "vedere" in una singola conversazione (input + output).

**Limiti tipici**:
- Claude Sonnet: ~200K token (~150K parole)
- ChatGPT-4: ~128K token (~96K parole)

**Problema**: Analizzare documento 50+ pagine, report multipli, transcript lunghi può eccedere limite.

---

## 🎯 Quando Serve Optimization

✅ **Situazioni critiche**:
- Analisi documenti lunghi (>30 pagine)
- Transcript meeting multipli
- Codice sorgente large
- Dataset con molte righe
- Conversazioni molto lunghe

---

## 🛠️ Tecniche Optimization

### **Technique 1: Strategic Chunking**

Dividi informazione in chunk logici, processa sequenzialmente:

```markdown
═══════════════════════════════════════════════
CHUNK 1: Sezioni 1-3 (pagine 1-15)
═══════════════════════════════════════════════

Analizza questa porzione documento:
[testo pagine 1-15]

Estrai:
- Key concepts
- Critical data points
- Important quotes

═══════════════════════════════════════════════
CHUNK 2: Sezioni 4-6 (pagine 16-30)
═══════════════════════════════════════════════

Analizza questa porzione:
[testo pagine 16-30]

Context da chunk precedente: [sintesi chunk 1]

Estrai stessi elementi + connections con chunk 1

═══════════════════════════════════════════════
SYNTHESIS: Tutti i chunk
═══════════════════════════════════════════════

Input: [sintesi tutti chunk]

Genera analisi completa documento integrata
```

---

### **Technique 2: Priority Information First**

Ordina informazione per criticità:

```markdown
Analizza questo business case (50 pagine).

CRITICAL INFO (include sempre):
- Executive Summary (pag 2-3)
- Financial Projections (pag 45-48)
- Risk Assessment (pag 40-42)

SECONDARY INFO (se spazio):
- Background (pag 5-15)
- Market Analysis (pag 20-30)

OPTIONAL:
- Appendici

Focus su critical, menziona secondary solo se impatta decisione.
```

---

### **Technique 3: Progressive Summarization**

Sintetizza progressivamente:

**Step 1**: Full doc → Summary 50% lunghezza
**Step 2**: Summary 50% → Summary 25% lunghezza
**Step 3**: Summary 25% → Executive summary 5% lunghezza

Ogni level mantiene info più critica.

```markdown
Step 1: Leggi documento (50 pag) e genera summary 25 pagine
→ Mantieni: tutti key points, elimina dettagli non-critical

Step 2: Da summary 25 pag → summary 10 pagine
→ Mantieni: solo insights principali e data critici

Step 3: Da summary 10 pag → executive brief 2 pagine
→ Mantieni: solo top 5 takeaway + raccomandazione
```

---

## 💡 Template: Analyze Large Document

```markdown
═══════════════════════════════════════════════
DOCUMENT ANALYSIS - CHUNKED APPROACH
═══════════════════════════════════════════════

Document: [title, length]
Goal: [obiettivo analisi]

───────────────────────────────────────────────
PHASE 1: EXTRACT KEY SECTIONS
───────────────────────────────────────────────

Identifica sezioni critiche per [goal]:
1. [Sezione A] - pagine X-Y
2. [Sezione B] - pagine X-Y
3. [Sezione C] - pagine X-Y

Priority: [A > B > C]

───────────────────────────────────────────────
PHASE 2: ANALYZE PRIORITY SECTIONS
───────────────────────────────────────────────

Per sezione A:
[paste testo]

Estrai:
- [elemento 1]
- [elemento 2]

Output: Insights sezione A

→ Ripeti per B, C

───────────────────────────────────────────────
PHASE 3: SYNTHESIS
───────────────────────────────────────────────

Input: [insights A, B, C]

Genera: [deliverable finale]

Max: [lunghezza]
Focus: [priorità specifiche]
```

---

# 🔐 Pattern 4: Constrained Generation

## 📚 Cos'è Constrained Generation?

**Definizione**: Generare output con vincoli ultra-specifici di formato, struttura, o contenuto che devono essere rispettati esattamente.

**Use Case**:
- JSON/XML/CSV per integrazione sistemi
- API responses con schema specifico
- Config files con syntax rigorosa
- Form fields con validazione strict
- Template con placeholder obbligatori

---

## 🎯 Tipi di Vincoli

### **1. Vincoli Formato**
```
Output MUST be valid JSON:
{
  "field1": "string",
  "field2": number,
  "field3": ["array", "of", "strings"]
}
```

### **2. Vincoli Lunghezza Esatta**
```
Generate exactly 280 characters (no more, no less) for tweet.
```

### **3. Vincoli Keyword Obbligatori**
```
Response must contain these exact phrases:
- "in compliance with GDPR"
- "pending approval from"
- "estimated completion date"
```

### **4. Vincoli Schema**
```
Follow this schema exactly:

Title: [max 60 char]
Summary: [max 200 char]
Tags: [exactly 3 tags, comma-separated]
Priority: [must be: High|Medium|Low]
```

---

## 💡 Template: Generate Structured Config

```markdown
═══════════════════════════════════════════════
STRUCTURED CONFIG GENERATION
═══════════════════════════════════════════════

Target Format: [JSON / YAML / XML / CSV]

Schema:
[paste exact schema]

Validation Rules:
1. [rule 1]
2. [rule 2]
3. [rule 3]

Example (copy structure exactly):
[paste 1 complete example]

───────────────────────────────────────────────

Generate for:
[specifiche]

After generation:
- Validate all fields present
- Check format compliance
- Verify no extra fields
- Confirm syntax valid

Output:
[generated config]
```

---

## 🎯 Esempio PMO - Generate Project Dashboard JSON

```markdown
Generate project dashboard data as JSON.

SCHEMA OBBLIGATORIO:
{
  "project_id": "string",
  "project_name": "string",
  "status": "green|amber|red",
  "progress_pct": number (0-100),
  "budget": {
    "allocated": number,
    "spent": number,
    "currency": "EUR"
  },
  "timeline": {
    "start_date": "YYYY-MM-DD",
    "end_date": "YYYY-MM-DD",
    "current_phase": "string"
  },
  "risks": [
    {
      "id": "string",
      "description": "string",
      "severity": "high|medium|low"
    }
  ]
}

EXAMPLE:
{
  "project_id": "PRJ-2025-001",
  "project_name": "Digital Platform Migration",
  "status": "amber",
  "progress_pct": 65,
  "budget": {
    "allocated": 2000000,
    "spent": 1400000,
    "currency": "EUR"
  },
  "timeline": {
    "start_date": "2024-06-01",
    "end_date": "2025-03-31",
    "current_phase": "Integration Testing"
  },
  "risks": [
    {
      "id": "RISK-001",
      "description": "Legacy system API complexity",
      "severity": "high"
    }
  ]
}

Generate for:
Project: CRM Modernization
Status: Green, 45% complete
Budget: €1.5M allocated, €600K spent
Timeline: Start 2025-01-10, End 2025-12-20, Phase: Requirements
Risk: Data migration timing (medium severity)

Validate output matches schema exactly.
```

---

## 🔑 Key Takeaways Pattern Avanzati

:::tip Punti Chiave da Ricordare

✨ **Prompt Chaining = Decomposizione**: Task complesso → sequenza step specializzati. Output N → Input N+1.

✨ **Multi-Turn = Checkpoint Frequenti**: Ogni 5-7 exchange recap, ogni 10-12 summary. Sempre riferimenti espliciti.

✨ **Context Optimization = Priorità**: Critical info first, chunking strategico, progressive summarization.

✨ **Constrained Generation = Schema + Example**: Combinare vincoli espliciti con esempio completo. Chiedere auto-validation.

✨ **Preparazione Day 2**: Questi pattern diventano più potenti con Claude Projects, Output Styles, e Artifacts (prossimo modulo!)

:::

---

## ✏️ Esercizio: Applica un Pattern

**Scegli un pattern** che risolve un tuo problema reale:

### **Opzione A: Prompt Chain**
- Identifica task complesso ricorrente
- Decomponi in 3-4 step sequenziali
- Scrivi prompt per ogni step
- Testa catena completa

### **Opzione B: Multi-Turn Strategy**
- Pensa a conversazione iterativa tipica (design review, requirement refinement)
- Definisci checkpoints (dove, quando, cosa)
- Crea template recap/redirect
- Testa in conversation reale

### **Opzione C: Constrained Generation**
- Identifica output con formato rigoroso (JSON, report template, form)
- Scrivi schema esatto + esempio
- Aggiungi validation checklist
- Testa generation compliance

---

## 🔗 Risorse Aggiuntive

**Best Practices**:
- [Anthropic: Long Context Windows](https://www.anthropic.com/news/claude-2-1-prompting) - Ottimizzare context usage
- [OpenAI: Chaining Guide](https://platform.openai.com/docs/guides/prompt-engineering) - Pattern sequenziali

**Correlati**:
- [Framework RACE](./framework-race) - Base per costruire ogni step di una chain
- [Meta-Prompting](./meta-prompting) - Delegare creazione chain a Claude
- [Debugging](./debugging) - Troubleshoot chain step-by-step

---

## ➡️ Prossimi Passi

**Congratulazioni!** Hai completato tutto il modulo Prompt Engineering - Theory.

**Cosa hai imparato**:
- ✅ Framework RACE sistematico
- ✅ Tecniche avanzate (CoT, Few-Shot, Multi-Perspective)
- ✅ Meta-prompting per delegare
- ✅ Debugging sistematico
- ✅ Pattern avanzati per enterprise use cases

### **Dove Andare da Qui**

**Opzione 1: Pratica Immediata**
👉 **[Vai agli Esercizi Pratici →](../esercizi-pratici)**

Applica tutto ciò che hai imparato con esercizi hands-on guidati per il tuo ruolo.

**Opzione 2: Prepara Day 2**
👉 **[Preview Day 2: Claude Features →](/giorno-2-advanced-features)**

Scopri come Claude Projects, Output Styles, e Artifacts amplificano i pattern che hai appreso oggi.

---

## 🎓 Conclusione Modulo

Hai costruito una **foundation solida** in prompt engineering:
- Da prompt vaghi → prompt RACE strutturati
- Da singoli prompt → chain e workflow complessi
- Da conversazioni caotiche → multi-turn gestite
- Da output random → constrained generation precisa

Nel **Giorno 2**, vedrai come le features avanzate di Claude (Projects, Output Styles, Knowledge Base) rendono questi pattern ancora più potenti e automatizzati.

**Ottimo lavoro!** 🎉

---

:::tip 💡 Quick Reference

**Quando usare quale pattern?**
- Task complesso multi-step → **Prompt Chaining**
- Design iterativo, refinement → **Multi-Turn Management**
- Documenti lunghi, molti dati → **Context Optimization**
- Output formato rigido → **Constrained Generation**

:::
