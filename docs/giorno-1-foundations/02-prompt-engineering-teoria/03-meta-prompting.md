---
title: Meta-Prompting
description: Far scrivere e ottimizzare prompt a Claude stesso - delega la creazione
sidebar_position: 3
tags: [prompt-engineering, meta-prompting, optimization, delegation]
---

# 🔄 Meta-Prompting: Far Scrivere Prompt a Claude

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Intermedio/Avanzato

---

## 🎯 Learning Objectives

- ✅ Comprendere cos'è meta-prompting
- ✅ Delegare creazione prompt all'LLM
- ✅ Ottimizzare prompt esistenti
- ✅ Usare clarifying questions per task complessi e ambigui
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

### **Esempio Funzionale/Service Design - Linee Guida Operative**

```
Devo creare documento di linee guida operative per nuovo processo aziendale.

Help me create effective prompt per strutturare queste linee guida.

Specs:
- Obiettivo: Documento operativo chiaro per team
- Input: Appunti processo + best practices + vincoli
- Output: Linee guida strutturate, formato markdown
- Sezioni: Scopo, Processo step-by-step, Ruoli, Eccezioni, FAQ
- Audience: Team operativo (mix seniority)
- Tone: Chiaro, procedurale, ma non troppo rigido

Genera prompt riutilizzabile con:
1. Role e context appropriati
2. Struttura sezioni linee guida
3. Template formato output
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

## 🔍 Pattern 4: Clarifying Questions (Interactive Elicitation)

### **Cos'è**

Invece di descrivere il task completo subito, chiedi all'LLM di **farti domande** per guidarti nella definizione dei requirements. Tecnica particolarmente utile quando sei incerto su come strutturare un prompt complesso o quali informazioni includere.

### **Quando Usare**

✅ **Task complesso** dove sei incerto su cosa specificare
✅ **Non sai quali informazioni** sono necessarie per un prompt efficace
✅ **Primo approccio** a dominio o task non familiare
✅ **Vuoi che l'LLM ti guidi** nel pensiero strutturato
✅ **Task ricorrente** che vuoi standardizzare ma non conosci tutti i dettagli

❌ **Non usare** per task semplici o urgentissimi (il ciclo domande/risposte aggiunge tempo)

### **Pattern Base**

```markdown
Devo [task generale/obiettivo].

Fammi domande per chiarire meglio:
- Obiettivo specifico e deliverable atteso
- Context e informazioni necessarie
- Formato output desiderato
- Vincoli e constraints da considerare
- Audience e tone appropriato

Dopo le mie risposte, genera prompt RACE ottimale riutilizzabile.
```

---

### **Esempio 1: PM - Design Sprint Planning**

**Scenario**: PM deve pianificare design sprint ma non sa come strutturare agenda

**User Prompt**:
```
Devo pianificare un design sprint ma non sono sicuro di come strutturarlo.

Fammi domande per chiarire:
- Obiettivi dello sprint
- Team composition
- Constraints (tempo, risorse)
- Output attesi
- Stakeholder da coinvolgere

Poi generami prompt template riutilizzabile per future sprint planning.
```

**Claude risponde con domande**:
```
1. Qual è il problema specifico o feature da esplorare nello sprint?
2. Durata dello sprint? (3-5 giorni tipicamente)
3. Quanti partecipanti? Ruoli rappresentati?
4. Ci sono decisori che devono approvare output?
5. Budget/risorse per prototipazione?
6. User testing è incluso nel timeline?
7. Deliverable finale: concept? prototipo? roadmap?
```

**User risponde**, poi Claude genera prompt strutturato ottimale ✅

---

### **Esempio 2: Service Design - User Research Planning**

**Scenario**: Service Designer deve fare user research ma scope non chiaro

**User Prompt**:
```
Devo pianificare user research per nuovo servizio digitale.

Non sono sicuro di scope e approccio. Fammi domande per chiarire:
- Metodo research appropriato (interviste? survey? test?)
- Sample size e recruitment
- Timeline e budget
- Research questions prioritarie
- Stakeholder requirements

Genera poi prompt per research plan completo.
```

**Claude fa domande**:
```
1. A che stadio è il servizio? (concept/prototype/live)
2. Obiettivo primario research: exploratory, evaluative, o validazione ipotesi?
3. Target users: quanti segmenti? demographics?
4. Timeline disponibile? (giorni/settimane/mesi)
5. Budget per incentivi partecipanti?
6. Output atteso: insights report? persona? journey map?
7. Stakeholder aspettative: qualitativo, quantitativo, o mix?
```

**User risponde** con specifiche → Claude genera research plan template ✅

---

### **Best Practices Clarifying Questions**

**✅ Quando Chiedere Domande**:
- Task nuovo/complesso dove non sai da dove iniziare
- Troppi requisiti possibili e non sai quali prioritizzare
- Vuoi standard riutilizzabile ma non conosci tutti casi d'uso
- Primo approccio a workflow aziendale specifico

**✅ Come Rispondere Efficacemente**:
- **Sii specifico** nelle risposte (evita "dipende", dai esempi concreti)
- **Fornisci contesto** anche se non richiesto esplicitamente
- **Chiarisci priorità** tra requirements (must-have vs nice-to-have)
- **Condividi esempi** di input/output se disponibili

**⏹️ Quando Fermarsi**:
- Quando hai informazioni sufficienti per prompt completo
- Tipicamente dopo **4-6 domande/risposte** (più = diminishing returns)
- Quando ulteriori domande sono troppo specifiche per caso singolo

**🔗 Workflow Completo**:
1. **Pattern 4 (questo)**: Clarifying questions → raccogli requirements
2. **Pattern 1**: Generate from Scratch → crea prompt strutturato con info raccolte
3. **Test** prompt generato
4. **Pattern 2**: Optimize se necessario

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
- Vago: "Genera prompt per recap mail clienti"
- Chiaro: "Genera prompt per trasformare thread email in recap strutturato 300 parole, formato: Decisioni/Action Items/Next Steps"

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

✨ **Clarifying Questions = Guida Interattiva**: LLM ti fa domande per chiarire requirements quando task è complesso o ambiguo

✨ **Pattern Iterativo**: describe → generate → test → refine

✨ **Template Library Veloce**: Genera templates per task ricorrenti

✨ **Iterazione è Chiave**: Primo tentativo raramente perfetto

:::

---

## ➡️ Prossimi Passi

👉 **[Continua con Debugging & Ottimizzazione →](./debugging)**

Impara a diagnosticare e fixare prompt inefficaci sistematicamente.

