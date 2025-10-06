---
title: Contesto e Context Window
description: Padroneggia la gestione della memoria di lavoro dell'LLM per risultati ottimali
sidebar_position: 4
tags: [llm-foundations, context-window, memoria, gestione]
---

# Contesto e Context Window

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Comprendere cos'è il context window e come funziona
- [ ] Conoscere i limiti per ciascun modello (GPT, Claude, Gemini)
- [ ] Applicare strategie efficaci per gestire conversazioni e documenti lunghi

---

## 📚 Cos'è il Context Window

**Definizione semplice**: Il **context window** è la "memoria di lavoro" dell'LLM - la quantità massima di testo (misurata in token) che può processare in un'unica richiesta.

:::tip 💡 Analogia: Memoria RAM del Computer
- **RAM piccola**: computer lento, gestisce pochi programmi
- **RAM grande**: computer veloce, molti programmi contemporaneamente

Context window è simile:
- **Small**: 8K token = conversazioni brevi, documenti piccoli
- **Large**: 200K token = libri interi, conversazioni lunghissime
:::

---

### Cosa Include il Context Window

Il context window contiene **TUTTO** ciò che l'LLM "vede":

```
[Context Window = 200K token]
│
├─ System Prompt / Custom Instructions (~500-2K token)
├─ Cronologia Conversazione (~varia)
├─ File / Documenti caricati (~varia)
├─ Il tuo nuovo messaggio (~varia)
└─ Risposta che sta generando (~varia)

Totale: DEVE essere < 200K token (esempio Claude)
```

**Quando superi il limite**:
- Modello tronca (rimuove) parte del contesto (solitamente dall'inizio)
- Oppure da errore
- Risultati: perdita coerenza, informazioni "dimenticate"

---

## 📊 Limiti Context Window per Modello

### Tabella Comparativa

| Modello | Context Window | Equivalente | Best For |
|---------|----------------|-------------|----------|
| **GPT-5** | 400K token | ~300K parole (~1200 pagine) | Analisi documenti lunghi |
| **GPT-5 mini** | 400K token | ~300K parole (~1200 pagine) | Same context, costi ridotti |
| **Claude Sonnet 4** | 1M token | ~750K parole (~3000 pagine) | Codebase interi, contratti enormi |
| **Gemini 2.5 Pro** | 1M token | ~750K parole (~3000 pagine) | Dataset massivi multimodali |

:::info 💡 Conversione Approssimativa
- 1 token ≈ 0.75 parole (inglese)
- 1 token ≈ 0.65 parole (italiano, usa più token)
- 1 pagina ≈ 250-300 parole ≈ 350-400 token
:::

---

### Long Context (1M token): Il Game Changer

**Claude Sonnet 4** e **Gemini 2.5 Pro** con 1M token cambiano le regole:

✅ **Analisi Documenti Massivi**:
- 100+ status report simultaneamente (~3000 pagine)
- Interi codebase (75K+ linee di codice)
- Contratti, legal docs, compliance (centinaia di pagine)
- Research: decine di paper contemporaneamente

✅ **Conversazioni Multi-Session**:
- Settimane di discussioni senza perdere contesto
- Iterazioni infinite su progetti complessi
- Riferimenti precisi a info date giorni prima

✅ **Analysis Cross-Sistema**:
- Confronta documentazione tecnica + business + legal insieme
- Traceability requirements end-to-end
- Portfolio analysis su scale enterprise

---

## 💡 Come LLM Gestisce il Context

### Memoria di Lavoro, Non Permanente

:::warning ⚠️ Importante
**LLM NON ha memoria permanente tra sessioni diverse** (di default).

- **Durante una chat**: ricorda tutto nel context window
- **Chiudi e riapri**: ricomincia da zero (no memoria)
- **Nota**: Alcune piattaforme offrono feature per persistere contesto tra sessioni (vedremo nel Giorno 2)
:::

**Esempio**:

```
Chat 1:
Tu: "Mi chiamo Andrea, sono PM di progetto XYZ"
LLM: "Ciao Andrea! Come posso aiutarti con progetto XYZ?"

[Chiudi chat, riapri]

Chat 2:
Tu: "Come procede il mio progetto?"
LLM: "Di quale progetto parli?"
      ❌ Ha dimenticato tutto
```

**Mitigazione**: Fornisci contesto chiave all'inizio di ogni nuova sessione, oppure usa feature di memoria persistente (Giorno 2).

---

### Overflow: Cosa Succede Quando Superi il Limite

**Scenario**: Claude 200K, ma hai caricato 250K token

**Opzioni LLM**:

1. **Truncation (Troncamento)**:
   ```
   [Inizio conversazione] ← RIMOSSO
   [Parte media] ← RIMOSSO
   [Ultime 200K token] ← MANTENUTO
   ```
   → Perde contesto iniziale

2. **Error**:
   ```
   "Context window exceeded. Please reduce input."
   ```
   → Devi rimuovere contenuto

3. **Sliding Window** (alcuni modelli):
   - Mantiene parti più rilevanti
   - Rimuove parti meno importanti
   - Intelligente ma non perfetto

---

## 🎯 Strategie di Gestione Context

### 1. Summarize Periodicamente

**Quando**: Conversazione lunga (50+ messaggi)

**Come**:
```
"Riassumi la nostra conversazione finora in 5 bullet points.
Dopo il riassunto, ricominciamo la conversazione usando il summary come contesto."
```

**Beneficio**: Comprimi 50K token in 500 token, liberi spazio

---

### 2. Split Task Complessi in Subtask

❌ **Approccio Inefficiente**:
```
"Analizza questi 50 documenti e genera report completo con:
- Executive summary
- Trend analysis
- Risk assessment
- Recommendations
- Action plan"
```
→ Supera facilmente context, output scadente

✅ **Approccio Efficace**:
```
Task 1: "Analizza documenti 1-10, identifica top 3 trend"
Task 2: "Analizza documenti 11-20, identifica top 3 trend"
...
Task 6: "Sintetizza tutti i trend identificati nei task precedenti"
Task 7: "Genera executive summary basato sulla synthesis"
```
→ Divide e conquista, context gestibile

---

### 3. Organizza Documenti con Struttura Chiara

**Strategia**: Mantieni documenti organizzati e riferibili facilmente durante la conversazione.

**Come**:
- Carica documenti all'inizio della sessione con nomi descrittivi
- Usa una "master list" per tracciare cosa hai caricato
- Riferisci documenti per nome quando fai query

**Esempio PM**:

```
Tu: "Ho caricato questi documenti:
1. ProjectCharter_DigitalPlatform.pdf
2. TechArchitecture_v2.pdf
3. StakeholderMatrix.xlsx

Basandoti sul ProjectCharter, quali sono i KPI principali?"

LLM: [Accede al documento corretto, estrae KPI]

Successivamente:
Tu: "Confronta i KPI del Charter con i Deliverable in TechArchitecture"
LLM: [Usa entrambi i documenti già caricati]
```

**Beneficio**: Context organizzato, no ri-upload continui nella stessa sessione.

---

### 4. Batch Processing Intelligente

**Scenario PMO**: Analizzare 50 status report

❌ **Male**:
```
Carica tutti 50 report → 100K token → context overflow o troncato
```

✅ **Bene**:
```
Batch 1 (10 report): Estrai rischi critici
Batch 2 (10 report): Estrai rischi critici
...
Batch 5 (10 report): Estrai rischi critici

Finale: "Questi sono i rischi da batch 1-5: [...]. Genera summary."
```

**Beneficio**: Context sotto controllo, nessuna perdita info

---

### 5. Reference vs Copy

❌ **Male** (spreca context):
```
"Ecco il contenuto completo di 3 documenti da 50 pagine ciascuno:
[Incolla 150 pagine di testo]

Ora analizza..."
```
→ 60K+ token sprecati

✅ **Bene** (ottimizza context):
```
"Carica" i 3 documenti (upload file)

Poi: "Analizza i documenti caricati per..."
```
→ LLM legge direttamente, context risparmiato

---

## 💡 Esempi Pratici per Ruolo

### PM: Document-Heavy Analysis

**Scenario**: Analizzare Lessons Learned di 15 progetti passati (120 pagine totali)

**Strategia**:
```
1. Upload tutti i docs a Claude Project (Knowledge Base)
2. Query incrementali:
   - "Quali sono i top 5 rischi ricorrenti?"
   - "Quali mitigation hanno funzionato meglio?"
   - "Pattern di successo vs fallimento?"
3. Synthesis: "Genera playbook basato su questi insights"
```

**Context Usage**: ~5-10K token per query (efficiente)

---

### Service Designer: User Research Synthesis

**Scenario**: 30 interviste utente (250 pagine di transcript)

**Strategia**:
```
Batch 1 (10 interviste): "Identifica top themes"
Batch 2 (10 interviste): "Identifica top themes"
Batch 3 (10 interviste): "Identifica top themes"

Synthesis: "Ecco themes da batch 1-3:
[Lista themes]

Genera report con: frequency, severity, user quotes, recommendations"
```

---

### Funzionale: Requirements Traceability

**Scenario**: Verificare consistenza tra business requirements, technical specs, test cases

**Strategia**:
```
Project Knowledge Base:
- Business Requirements Document (BRD)
- Technical Design Document (TDD)
- Test Plan

Query:
"Per ogni requirement in BRD, verifica se:
1. Ha corrispondente spec in TDD
2. Ha test case in Test Plan
Genera traceability matrix."
```

Claude accede a tutti i docs senza overflow.

---

## ⚠️ Common Pitfalls

### ❌ Pitfall 1: Copiare Invece di Riferire

```
"Ecco tutti i nostri template:
[Incolla 50 template, 30K token]

Ora usa template X per..."
```

**Fix**: Upload template library, chiedi specifico quando serve

---

### ❌ Pitfall 2: Conversazione Infinita

Dopo 200+ messaggi:
- Context pieno
- LLM "dimentica" inizio
- Qualità degrada

**Fix**: Start new chat, porta forward summary

---

### ❌ Pitfall 3: Disorganizzazione Documenti

Caricare documenti senza struttura o nomi chiari:
```
Chat:
Tu: Upload "doc1.pdf", "file.xlsx", "temp_final_v2.pdf"
Poi: "Analizza il budget dal documento Excel"
LLM: "Quale documento Excel?" ❌
```

**Fix**: Nomi descrittivi + master list all'inizio sessione
```
Tu: "Documenti caricati:
- Budget2025_Q1.xlsx (colonna C = actual spend)
- ProjectCharter_Platform.pdf
Analizza actual spend da Budget2025_Q1.xlsx"
```

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Context Window**:
- "Memoria di lavoro" LLM, misurata in token
- Claude Sonnet 4 & Gemini 2.5 Pro: 1M token = ~3000 pagine = game changer
- GPT-5: 400K token = ~1200 pagine = ottimo per maggior parte use case
- Include: system prompt + chat history + docs + nuovi messaggi

**Limiti**:
- Superare context → troncamento o errore
- NO memoria permanente tra sessioni (di default)
- Più context ≠ sempre meglio (qualità può degradare se troppo pieno)

**Strategie**:
- **Summarize**: comprimi conversazioni lunghe periodicamente
- **Split**: divide task complessi in subtask gestibili
- **Organizza**: documenti con nomi chiari, master list
- **Batch**: processa grandi volumi in batch intelligenti
- **Reference**: upload file invece di copy-paste

**Best Practices**:
- Monitora qualità output (degrada? → sintetizza o nuovo context)
- Long context (1M) per analisi massive end-to-end
- Batch processing quando superi limiti
- Summary intermedi liberano spazio prezioso

**Regola d'Oro**:
- Context window grande = capability, non obbligo
- Usa efficacemente, non riempire solo perché puoi
- Qualità > Quantità di contesto

:::

---

## 🔗 Risorse Aggiuntive

**Tool**:
- 🔧 [OpenAI Tokenizer](https://platform.openai.com/tokenizer) - Conta token dei tuoi documenti
- 🔧 [Claude Context Calculator](https://docs.anthropic.com/claude/docs/context-window-management)

**Guide**:
- 📖 [Long Context Best Practices](https://www.anthropic.com/index/prompting-long-context) - Anthropic guide
- 📖 [GPT-5 Context Management](https://platform.openai.com/docs/guides/context-management) - OpenAI docs

---

## ➡️ Prossimi Passi

Ora che comprendi il context window:

1. **Calcola**: Quanti token usano i tuoi documenti tipici? (usa tokenizer)
2. **Sperimenta**: Prova batch processing su dataset reale
3. **Organizza**: Crea naming convention per i tuoi documenti ricorrenti
4. **Continua**: [Multimodalità](multimodalita) - Sfrutta vision capabilities

---

:::info 💬 Discussione
**Domande da considerare**:
- Hai mai avuto l'impressione che LLM "dimenticasse" info date prima?
- Quali tuoi workflow beneficerebbero da context window 1M token?
- Come organizzeresti i tuoi documenti per massimizzare efficienza context?
:::
