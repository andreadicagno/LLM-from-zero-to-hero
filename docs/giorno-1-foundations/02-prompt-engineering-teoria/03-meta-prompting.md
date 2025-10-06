---
title: Meta-Prompting
description: Far scrivere e ottimizzare prompt a Claude stesso - delega la creazione
sidebar_position: 3
tags: [prompt-engineering, meta-prompting, optimization, delegation]
---

# 🔄 Meta-Prompting: Far Scrivere Prompt a Claude

> ⏱️ **Durata**: 10 minuti
> 🎯 **Livello**: Intermedio/Avanzato

---

## 🎯 Learning Objectives

- ✅ Comprendere cos'è meta-prompting
- ✅ Delegare creazione prompt all'LLM
- ✅ Ottimizzare prompt esistenti
- ✅ Creare template library rapidamente

---

## 📚 Cos'è Meta-Prompting?

**Definizione**: Chiedere all'LLM di scrivere/ottimizzare prompt per te

**Quando usare**:
- ✅ Non sicuro come strutturare prompt complesso
- ✅ Vuoi ottimizzare prompt esistente
- ✅ Task nuovo e non familiare
- ✅ Serve template riutilizzabile

**Workflow**:
1. Descrivi task in linguaggio naturale
2. LLM genera prompt strutturato
3. Testi prompt generato
4. Iteri e raffini

---

## 🛠️ Pattern 1: Generate from Scratch

```
Sono [ruolo] e devo [task].

Help me create effective prompt for this.

Specs:
- Obiettivo: [cosa vuoi ottenere]
- Context: [situazione]
- Output: [formato/tipo]
- Constraints: [vincoli]

Genera prompt strutturato riutilizzabile.
```

### **Esempio PM - Status Reports**

```
Sono PM e devo creare weekly status reports per executive committee.

Help me create effective prompt per questi reports.

Specs:
- Obiettivo: Report conciso ma completo per C-level
- Input: Notes team + metrics da dashboard
- Output: Email professionale, max 400 parole
- Sezioni: Progress, Risks, Next Steps
- Tone: Professionale, data-driven

Genera prompt riutilizzabile con:
1. Role e context
2. Struttura input-output
3. Template formato
```

**Claude genera** prompt completo pronto all'uso ✅

---

## 🔧 Pattern 2: Optimize Existing Prompt

```
Ho questo prompt ma risultati non ottimali:

[Tuo prompt attuale]

Problemi:
- [Issue 1]
- [Issue 2]

Ottimizza per:
1. [Fix issue 1]
2. [Fix issue 2]
3. Migliora [aspetto]

Spiega modifiche.
```

### **Esempio - Prompt Weak → Strong**

```
Ho questo prompt ma output troppo generico:

"Analizza rischi progetto e dimmi cosa fare."

Problemi:
- Output vago, non actionable
- No struttura
- Non specifica quali rischi prioritizzare

Ottimizza per generare risk analysis utile per PM.
```

**Claude ottimizza** →

```
Conduci risk analysis seguendo framework:

SCOPE:
- Progetto: [nome]
- Fase: [milestone]
- Timeline remaining: [settimane]
- Budget remaining: [€]

ANALISI per ogni rischio:
1. Descrizione (1 frase)
2. Category: [Tech/Org/External/Financial]
3. Probability: [H/M/L] + rationale
4. Impact: [H/M/L] + quantifica
5. Status: [New/Existing/Mitigated]

PRIORITIZATION: Ordina per (Probability × Impact)

MITIGATION per top 3:
- Strategy (specifica)
- Owner
- Deadline
- Trigger points

OUTPUT: Tabella + raccomandazioni sponsor
```

Molto più strutturato! ✅

---

## 📚 Pattern 3: Create Template Library

```
Sono [ruolo] con questi task ricorrenti:
1. [Task A]
2. [Task B]
3. [Task C]

Per ciascuno, crea prompt template:
- Framework RACE
- Placeholder per variabili
- Copy-paste ready

Output: 3 templates + usage guide
```

**Claude genera** library completa con istruzioni d'uso

---

## 🔄 Meta-Prompting Iterativo

**Step 1**: Chiedi primo prompt
```
Genera prompt per: [task description]
```

**Step 2**: Testa su caso reale

**Step 3**: Feedback
```
Ho testato:
[prompt generato]

Funziona per [aspetti +]
Ma problemi su [aspetti -]

Raffina per:
- [Improvement 1]
- [Improvement 2]
```

**Step 4**: Ri-testa versione raffinata

**Step 5**: Ripeti fino a soddisfacente

→ Co-creation del prompt perfetto

---

## ✏️ Esercizio: Build Prompt Library

**Task 1: Generate**
- Identifica 3 task ricorrenti
- Usa meta-prompting per template
- Testa su dati reali

**Task 2: Optimize**
- Prendi tuo prompt abituale
- Chiedi ottimizzazione a Claude
- Confronta old vs new

**Task 3: Iterate**
- Genera per task complesso nuovo
- Testa
- Chiedi refinement
- Ripeti 2-3 volte
- Documenta versione finale

**Deliverable**: Library 5+ templates ottimizzati

---

## 📐 Best Practices

### **Quando Chiedi a Claude di Generare**:

**✅ Sii Specifico su Obiettivo**
- Vago: "Genera prompt per status report"
- Chiaro: "Genera prompt per trasformare notes in executive email 300 parole, formato [X]"

**✅ Fornisci Esempio Input/Output**
- Mostra esempio input che darai
- Mostra esempio output che vuoi
- Claude creerà prompt per mapping

**✅ Specifica Constraints**
- Lunghezza, formato, tone, audience
- Più dettagli = prompt migliore

**✅ Chiedi Explanations**
- "Spiega perché hai strutturato così"
- Impari prompt engineering

**⚠️ Non Fidarti Ciecamente**
- Sempre testa prompt generato
- Primo tentativo raramente perfetto
- Itera

---

## 🔑 Key Takeaways

:::tip Punti Chiave

✨ **Meta-Prompting = Delegare Creazione**: LLM scrive prompt per te

✨ **Utile per Task Nuovi**: Quando non sai da dove iniziare

✨ **Pattern Iterativo**: describe → generate → test → refine

✨ **Template Library Veloce**: Genera templates per task ricorrenti

✨ **Iterazione è Chiave**: Primo tentativo raramente perfetto

:::

---

## ➡️ Prossimi Passi

👉 **[Continua con Debugging & Ottimizzazione →](./debugging)**

Impara a diagnosticare e fixare prompt inefficaci sistematicamente.

