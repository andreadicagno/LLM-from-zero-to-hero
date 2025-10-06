---
title: Chain-of-Thought Prompting
description: Tecnica per migliorare ragionamento LLM mostrando passaggi step-by-step
sidebar_position: 3
tags: [prompt-engineering, chain-of-thought, CoT, ragionamento]
---

# 🔗 Chain-of-Thought Prompting

> ⏱️ **Durata**: 10 minuti
> 🎯 **Livello**: Intermedio

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Comprendere cos'è Chain-of-Thought (CoT) e perché funziona
- ✅ Applicare 3 pattern CoT efficaci
- ✅ Sapere quando usare CoT e quando evitarlo
- ✅ Creare template CoT per decisioni ricorrenti

---

## 📚 Cos'è Chain-of-Thought?

**Chain-of-Thought (CoT)** è una tecnica che richiede all'LLM di mostrare il ragionamento step-by-step prima di fornire la risposta finale.

**Analogia**: È come chiedere a un collega non solo la conclusione, ma anche "come ci sei arrivato?"

### **Perché Funziona?**

Gli LLM generano token sequenzialmente. Quando "pensano ad alta voce":
1. 🧠 **Elaborano meglio** problemi complessi
2. ✅ **Riducono errori logici** (catch mistakes early)
3. 🎯 **Producono ragionamenti verificabili** (puoi vedere se il processo è solido)
4. 📈 **Migliorano accuratezza** su task multi-step (fino a 40-50% in alcuni casi)

:::tip Real-World Impact
Studi dimostrano che CoT migliora significativamente performance su:
- Decisioni con trade-off complessi
- Analisi multi-criterio
- Problem solving strutturato
- Planning e prioritizzazione
:::

---

## 🎯 Quando Usare Chain-of-Thought

### ✅ **Usa CoT Quando**:

- **Problemi multi-step**: Decisioni che richiedono più passaggi logici
- **Trade-off complessi**: Analisi con pro/contro, costi/benefici
- **Decisioni critiche**: Quando errori sono costosi
- **Analisi strutturata**: Valutazioni con framework specifici
- **Prioritizzazione**: Ranking con criteri multipli

### ❌ **NON Usare CoT Quando**:

- Task semplici e diretti (es: "traduci questa frase")
- Serve risposta rapidissima (CoT aggiunge overhead)
- Output deve essere ultra-conciso
- Task creativo/brainstorming (non serve giustificazione)

**Regola pratica**: Se una decisione richiede >2 minuti a un umano per giustificarla, usa CoT.

---

## 🛠️ Pattern CoT Efficaci

### **Pattern 1: CoT Esplicito con Step Numerati**

Il più strutturato. Specifichi esattamente i passaggi del ragionamento.

**Template**:
```
[Il tuo prompt principale]

Approccio step-by-step:
1. [Prima analizza X]
2. [Poi valuta Y]
3. [Considera Z]
4. [Infine, concludi con raccomandazione]

Mostra il ragionamento per ogni step prima della risposta finale.
```

**Esempio PM - Scelta Architettura**:
```
Aiutami a scegliere architettura per nuovo CRM enterprise.

Opzioni: Microservizi vs Monolite

Contesto:
- Team: 8 developer, esperienza mista (junior + senior)
- Timeline: 9 mesi per MVP
- Scalabilità: potenziale crescita 10x utenti in 3 anni
- Maintenance: team interno long-term

Analizza step-by-step:
1. Elenca pro/contro di ciascuna architettura per QUESTO contesto specifico
2. Valuta risk assessment per entrambe le opzioni
3. Analizza effort implementazione vs benefici long-term
4. Considera skill team e timeline
5. Raccomandazione finale con rationale chiaro

Mostra ragionamento completo per ogni step.
```

**Output atteso**: Analisi strutturata → trade-off espliciti → decisione giustificata

---

### **Pattern 2: "Let's Think Step by Step"**

Il più semplice. Lasci l'LLM decidere i passaggi del ragionamento.

**Template**:
```
[Il tuo prompt]

Let's approach this step by step:
- First, let's...
- Then, we should...
- Finally, we can conclude...
```

**Esempio PMO - Portfolio Risk Assessment**:
```
Analizza rischi di questo portfolio progetti:

Portfolio:
- 15 progetti attivi, totale budget €12M
- 3 progetti Red, 5 Amber, 7 Green
- Settore: Digital transformation per finance
- Concern principale: concentrazione risorse su pochi key people

Let's think step by step:
1. Identificare pattern nei progetti Red/Amber
2. Analizzare dipendenze e rischi sistemici
3. Valutare impact se worst-case scenarios
4. Prioritizzare mitigazioni

Mostra analisi completa prima delle raccomandazioni.
```

---

### **Pattern 3: "Before Answering..." (Pre-Reasoning)**

Forza ragionamento preliminare prima della risposta.

**Template**:
```
[Il tuo prompt]

Before providing the final answer, please:
- Identify key factors
- Analyze trade-offs
- Consider implications
- Then give your recommendation
```

**Esempio Service Design - User Flow Prioritization**:
```
Devo decidere quale user flow testare nel prossimo sprint.

Opzioni:
A) Onboarding flow (critico ma complesso, 3+ settimane design+test)
B) Checkout flow (meno critico ma quick win, 1 settimana)
C) Profile management (richiesto da utenti, 2 settimane)

Vincoli:
- Solo 1 sprint disponibile (2 settimane)
- 5 partecipanti test confermati
- Stakeholder vuole risultati Q1

Before recommending, please:
1. Valuta ogni opzione su: user value, complexity, data quality
2. Considera vincoli tempo/risorse
3. Analizza trade-off quick win vs high impact
4. Considera alternative (es: test parziale opzione A)

Spiega ragionamento completo prima della raccomandazione.
```

---

## 💡 CoT per Task Ricorrenti - Template

Crea template CoT per le tue decisioni ricorrenti.

### **Template: Prioritizzazione Features**

```
Ho [N] features da prioritizzare per Q[X].

Features:
1. [Feature A - breve descrizione]
2. [Feature B - breve descrizione]
3. [Feature C - breve descrizione]

Criteri prioritizzazione:
- User value (1-10)
- Implementation effort (S/M/L)
- Strategic alignment
- Technical dependencies

Ragiona step-by-step:
1. Score ogni feature sui 4 criteri (con rationale)
2. Identifica dependencies critiche
3. Crea matrice value/effort
4. Applica strategic alignment come tie-breaker
5. Proponi roadmap prioritizzato

Mostra scoring dettagliato e giustificazioni.
```

---

### **Template: Stakeholder Communication Strategy**

```
Devo comunicare [news/change] a [stakeholder].

Situazione: [descrizione]
Stakeholder: [ruolo, concerns, influenza decision-making]
Obiettivo comunicazione: [cosa vuoi ottenere]

Pensa step-by-step:
1. Analizza reazione probabile stakeholder (best/worst case)
2. Identifica key concerns da addressare preventivamente
3. Prepara messaging per mitigare resistenza
4. Definisci ask specifico e timing ottimale
5. Draft comunicazione (email/talking points)

Spiega strategia comunicativa completa.
```

---

### **Template: Technical Debt vs Feature Trade-off**

```
Decisione: Allocare sprint a technical debt refactoring vs nuova feature.

Context:
- Technical debt: [descrizione, severity, area impattata]
- Feature request: [descrizione, stakeholder, urgenza]
- Team capacity: [X story points]
- Sprint goal: [obiettivo corrente]

Analizza step-by-step:
1. Quantifica costo non-azione su technical debt (risk, slowdown futuro)
2. Valuta opportunity cost ritardare feature (business impact)
3. Considera opzioni ibride (es: 70% debt / 30% feature)
4. Analizza long-term vs short-term trade-off
5. Raccomandazione con risk mitigation

Mostra analisi costi/benefici completa.
```

---

## ✏️ Esercizio Pratico

### **Parte 1: Without CoT (Baseline)**

1. Prendi una decisione complessa del tuo lavoro
2. Chiedi a Claude risposta diretta (no CoT)
3. Valuta: qualità, confidence, utilità

**Esempio prompt senza CoT**:
```
"Dovrei estendere la deadline del progetto X di 2 settimane o tagliare scope?"
```

---

### **Parte 2: With CoT (Comparison)**

1. Stessa decisione
2. Usa pattern CoT esplicito (step numerati)
3. Confronta con risultato Parte 1

**Esempio prompt CON CoT**:
```
"Decisione: Estendere deadline progetto X di 2 settimane (+€50K) o tagliare 30% scope.

Context: [inserisci contesto completo]

Analizza step-by-step:
1. Impact estensione timeline (costi, team, stakeholder)
2. Impact taglio scope (user value, MVP viability, debt tecnico)
3. Alternative options (es: scope ridotto ma meglio progettato)
4. Raccomandazione con risk assessment

Mostra ragionamento completo."
```

**Confronta**:
- Quale output ha più insights?
- Quale ti dà più confidence nella decisione?
- Quale processo è più verificabile?

---

### **Parte 3: Create Your CoT Template**

1. Identifica TUO tipo di decisione ricorrente
2. Definisci step di ragionamento sempre necessari
3. Crea template riutilizzabile
4. Testa su 2-3 casi reali
5. Raffina e salva

<details>
<summary>👉 Esempio Template Completato - Vendor Selection</summary>

```
Decisione: Selezione vendor per [servizio/tool].

Vendor options:
- Vendor A: [key characteristics]
- Vendor B: [key characteristics]
- Vendor C: [key characteristics]

Criteri valutazione:
1. Costo (setup + yearly)
2. Feature match con requirements
3. Integration effort
4. Vendor stability/reputation
5. Support & SLA

Ragiona step-by-step:
1. Score ogni vendor sui 5 criteri (1-10 con rationale)
2. Identifica must-have vs nice-to-have features
3. Calcola TCO (Total Cost of Ownership) 3 anni
4. Analizza risk per vendor (es: vendor lock-in, stability)
5. Peso criteri per priorità business
6. Raccomandazione finale (o top 2 con pros/cons)

Mostra scoring matrix e giustificazioni dettagliate.
```

**Beneficio**: Da decisione "gut feeling" → processo verificabile e ripetibile ✅
</details>

---

## 🔑 Key Takeaways

:::tip Punti Chiave da Ricordare

✨ **CoT = Reasoning Step-by-Step**: Far mostrare all'LLM il percorso logico, non solo la conclusione

✨ **Migliora Accuratezza**: Specialmente su decisioni complesse, analisi multi-criterio, trade-off

✨ **Pattern "Let's Think Step by Step" Funziona**: È semplice ma sorprendentemente efficace

✨ **Template per Decisioni Ricorrenti**: Crea CoT template per le tue decisioni frequenti

✨ **Non Sempre Necessario**: Task semplici non beneficiano di CoT (overhead inutile)

:::

---

## 🔗 Risorse Aggiuntive

**Paper Originale**:
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) (Google Research)

**Prossime Tecniche**:
- [Few-Shot Learning](./few-shot-learning) - Guidare con esempi per output consistente
- [Meta-Prompting](./meta-prompting) - Delegare creazione prompt a Claude

---

## ➡️ Prossimi Passi

Padroneggiato Chain-of-Thought! Ora impara a guidare l'LLM con esempi concreti.

👉 **[Continua con Few-Shot Learning →](./few-shot-learning)**

Few-Shot Learning ti permette di ottenere output formato esattamente come vuoi, mostrando 2-3 esempi.

