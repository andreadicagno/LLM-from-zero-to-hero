---
title: Tecniche Avanzate di Prompting
description: Chain-of-Thought, Few-Shot Learning e Multi-Perspective per casi d'uso complessi
sidebar_position: 2
tags: [prompt-engineering, chain-of-thought, few-shot, role-based, tecniche-avanzate]
---

# 🚀 Tecniche Avanzate di Prompting

> ⏱️ **Durata**: 25 minuti
> 🎯 **Livello**: Intermedio/Avanzato
> 📚 **Prerequisiti**: Aver completato [Framework RACE](./framework-race)

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Applicare Chain-of-Thought per problemi con ragionamento multi-step
- ✅ Utilizzare Few-Shot Learning per output consistente e formato preciso
- ✅ Creare analisi multi-prospettiva con Role-Based prompting avanzato
- ✅ Sapere quale tecnica usare per ogni situazione
- ✅ Creare template avanzati riutilizzabili

---

## 💡 Introduzione: Oltre il Framework Base

Hai padroneggiato RACE - il framework essenziale per il 90% dei casi d'uso. Ora è tempo di esplorare **tecniche avanzate** per situazioni specifiche:

- 🔗 **Chain-of-Thought**: Per decisioni complesse che richiedono ragionamento esplicito
- 🎯 **Few-Shot Learning**: Per output ultra-consistente con formato specifico
- 👥 **Multi-Perspective**: Per analisi ricche da angoli complementari

**Quando usare tecniche avanzate?**
- Task standard → RACE base è sufficiente ✅
- Task complesso/specifico → Aggiungi tecnica avanzata appropriata 🚀

---

# 🔗 Chain-of-Thought Prompting

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
[Il tuo prompt RACE base]

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

## 💡 Template CoT Riutilizzabili

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

# 🎯 Few-Shot Learning

## 📚 Zero-Shot vs Few-Shot vs Many-Shot

### **Zero-Shot** (Nessun Esempio)
- Solo istruzioni testuali
- Pro: veloce, flessibile
- Contro: output variabile, può non matchare aspettative

```
"Scrivi email formale per cliente"
→ Output: formato imprevedibile
```

### **Few-Shot** (2-5 Esempi) ⭐ **Optimal**
- Istruzioni + alcuni esempi input-output
- Pro: output consistente, formato preciso
- Contro: usa più token

```
"Scrivi email formale. Esempio 1: [...] Esempio 2: [...]"
→ Output: match formato esempi ✅
```

### **Many-Shot** (10+ Esempi)
- Istruzioni + molti esempi
- Pro: massima consistenza
- Contro: context window usage alto

---

## 🎯 Quando Usare Few-Shot

✅ **Usa Few-Shot quando**:
- Formato output specifico richiesto
- Task ricorrente (standardizzazione)
- Stile/tone particolare difficile da descrivere
- Zero-shot non dà risultati desiderati

❌ **Evita Few-Shot quando**:
- Task semplice auto-esplicativo
- Serve massima creatività/variazione
- Context window limitato

---

## 🛠️ Pattern Few-Shot Efficace

**Struttura Base**:
```
[Task description con RACE]

Formato atteso: [descrizione]

Esempio 1:
Input: [esempio input 1]
Output: [esempio output desiderato 1]

Esempio 2:
Input: [esempio input 2]
Output: [esempio output desiderato 2]

Ora applica lo stesso formato a:
Input: [tuo input reale]
Output:
```

---

## 💡 Esempi Pratici per Ruolo

### **Esempio 1: PMO - Status Report Standardization**

```
Trasforma status update informali in formato standard executive.

Formato:
- Status: [RAG]
- Progress: [% e milestone]
- Risks: [top 2]
- Next: [prossimi step]

Esempio 1:
Input: "Tutto ok, testing fatto. Ancora bug minori. Deploy settimana prossima."

Output:
Status: 🟢 Green
Progress: 85% - Testing completato, deployment prep in corso
Risks: (1) Bug minori in QA - mitigation attiva, (2) Nessuno critico
Next: Production deployment settimana 23

Esempio 2:
Input: "Indietro 2 settimane. Cliente cambiato requirements. Deadline a rischio."

Output:
Status: 🔴 Red
Progress: 40% - 2 settimane ritardo per requirement changes
Risks: (1) Scope creep - volatilità requirements, (2) Deadline at risk - rebaseline necessario
Next: Scope review con sponsor, piano rivisto entro venerdì

Ora trasforma:
Input: "Migration quasi finita. Problema database risolto. Manca documentazione."

Output:
```

---

### **Esempio 2: Service Design - User Feedback Synthesis**

```
Trasforma raw feedback in insights strutturati.

Formato:
- Theme: [categoria]
- User quote: "[citazione]"
- Insight: [sintesi]
- Impact: [H/M/L]

Esempio 1:
Input: "Checkout troppo lungo, ho abbandonato. Troppe info richieste."

Output:
Theme: Checkout Friction
User quote: "Troppe info richieste"
Insight: Form fields eccessivi causano cart abandonment
Impact: H

Esempio 2:
Input: "Le recensioni aiutano. Vorrei foto prodotti da clienti."

Output:
Theme: Social Proof Enhancement
User quote: "Vorrei foto prodotti da clienti"
Insight: Richiesta user-generated photo content
Impact: M

Ora applica:
Input: "Non capisco se prodotto in stock. Ordino e poi dicono non c'è."

Output:
```

---

### **Esempio 3: Funzionale - Requirements → User Stories**

```
Trasforma requirements in user stories Agile.

Formato:
As a [user type]
I want to [action]
So that [benefit]

Acceptance Criteria:
- [criterio 1]
- [criterio 2]

Esempio 1:
Requirement: "Sistema deve permettere export report in PDF"

User Story:
As a Manager
I want to export reports in PDF format
So that I can share with stakeholders without system access

Acceptance Criteria:
- PDF include tutti i dati visibili
- Export completa in <10 secondi (report fino 50 pagine)
- PDF formato A4 print-ready

Esempio 2:
Requirement: "Admin devono disattivare utenti"

User Story:
As an Administrator
I want to deactivate user accounts
So that I can revoke access preservando dati storici

Acceptance Criteria:
- User disattivati non possono login
- Dati rimangono in sistema (soft delete)
- Riattivazione possibile
- Audit log registra azione

Ora trasforma:
Requirement: "Clienti ricevono notifica quando ordine spedito"

User Story:
```

---

## 📐 Best Practices Few-Shot

### **1. Qualità > Quantità**
- 2-3 esempi ben scelti > 10 mediocri
- Ogni esempio deve essere rappresentativo

### **2. Diversità**
- Copri casi tipici diversi
- Include edge case se rilevante
- Es: caso semplice + caso complesso

### **3. Chiarezza**
- Esempi cristallini, zero ambiguità
- Input-output separati esplicitamente
- Formato consistente tra esempi

### **4. Rappresentatività**
- Esempi simili a use case reale
- Evita esempi toy/semplificati

### **5. Progressive Complexity**
- Primo esempio: semplice
- Esempi successivi: più elaborati

---

# 👥 Role-Based Multi-Perspective

## 🔄 Multi-Perspective Prompting Avanzato

Hai già visto l'importanza del "Role" nel framework RACE. Ora esploriamo **tecniche avanzate** per ottenere analisi ricche da prospettive complementari.

:::info Differenza da RACE Base
Nel framework RACE usi UN ruolo per dare expertise appropriata. Multi-Perspective usa MULTIPLI ruoli sequenzialmente o simultaneamente per esplorare un problema da angoli diversi.
:::

---

## 🎯 Quando Usare Multi-Perspective

✅ **Usa quando**:
- Decisioni complesse con stakeholder multipli
- Trade-off non ovvi
- Serve consensus building
- Vuoi identificare blind spots

❌ **Non usare quando**:
- Task straightforward con una sola prospettiva
- Urgenza massima (multi-perspective = più tempo)

---

## 🛠️ Pattern Multi-Perspective

### **Pattern 1: Sequenziale**

```
Analizza [problema] da 3 prospettive:

1. Come [Ruolo A]: [focus area]
   [analisi]

2. Come [Ruolo B]: [focus area]
   [analisi]

3. Come [Ruolo C]: [focus area]
   [analisi]

Poi sintetizza: raccomandazione integrando tutte le prospettive
```

### **Pattern 2: Panel Discussione** ⭐ **Advanced**

```
Simula panel con:
- [Esperto A]: [specialty]
- [Esperto B]: [specialty]
- [Esperto C]: [specialty]

Topic: [domanda]

Ogni esperto argomenta posizione, poi dibattito e consensus
```

---

## 💡 Esempio Multi-Perspective - PM Decision

```
Decidere: Estendere deadline 1 mese (+€200K) o tagliare scope?

Analizza da 3 prospettive:

**1. Come Project Manager**:
- Focus: delivery, team, quality
- Considera: morale team, technical debt risk, reputazione
- Raccomandazione + rationale

**2. Come CFO**:
- Focus: finanzials, ROI, budget
- Considera: costi extra, opportunità cost, cash flow
- Raccomandazione + rationale

**3. Come Product Owner**:
- Focus: user value, market timing, feature completeness
- Considera: must-have vs nice-to-have, competitor moves
- Raccomandazione + rationale

**Synthesis**:
Integra le 3 prospettive, raccomanda decisione con trade-off chiari
```

---

## 👨‍💼 Esempio Expert Panel - Service Design

```
Simula panel UX per discutere:
"Ridisegnare onboarding da zero o iterare su esistente?"

Panel:
- **UX Researcher**: Data-driven, focus user insights
- **Interaction Designer**: Usability, design patterns
- **Business Analyst**: Costi, timeline, business impact

Formato:
1. Ogni esperto presenta posizione (2-3 para)
2. Risposte a concerns altri (1 para ciascuno)
3. Voto finale e consensus (o minority report)

Mostra dibattito completo
```

**Risultato**: Esplorazione ricca del problema da angoli complementari ✅

---

## 📢 Multi-Perspective per Generazione Contenuti

**Use Case**: Stesso contenuto, audience diverse

**Scenario**: Comunicare "Digital Transformation Initiative"

```
Topic: Digital Transformation Initiative lanciata

Genera 3 comunicazioni diverse:

1. **Per CEO (C-Level)**:
   Role: Chief Communication Officer
   Format: Email all-hands
   Tone: Visionary, inspiring
   Focus: Strategic vision, long-term value
   Length: 400 parole
   Evita: Technical jargon

2. **Per Tech Team (Developer)**:
   Role: Engineering Manager
   Format: Email team
   Tone: Pragmatic, technical
   Focus: Architettura, stack, roadmap, skill development
   Length: 500 parole
   Include: Technical details, learning resources

3. **Per Manager (Stakeholder)**:
   Role: Change Management Lead
   Format: FAQ
   Tone: Supportive, reassuring
   Focus: Team impact, training, support
   Format: Q&A (10 domande)
   Include: Handling resistance, practical steps
```

---

## 📐 Best Practices Multi-Perspective

### **Scelta Ruoli**:
- ✅ Expertise complementare (non sovrapposta)
- ✅ Include dissenting voices (non solo chi è d'accordo)
- ✅ 3-4 ruoli ottimale (più = confuso)
- ❌ Ruoli troppo simili (redundante)

### **Descrizione Ruolo**:
- Specifico: "UX Researcher focus accessibility" > "UX person"
- Include bias/priorità: "CFO risk-averse, focus ROI short-term"

### **Synthesis Essenziale**:
- Sempre concludi integrando prospettive
- Highlight trade-off e raccomandazione finale
- Non lasciare solo opinioni separate senza conclusione

---

## ⚠️ Limitazioni Multi-Perspective

**❌ LLM Non Ha Vera Expertise**
- "Esperto" = pattern linguistico, non conoscenza reale
- Sempre verifica su domini critici

**❌ Può Generare Stereotipi**
- "CFO" → sempre risk-averse (non sempre vero in realtà)
- Consapevolezza: sono simulazioni, non sostituti di veri esperti

**✅ Usa Per**:
- Esplorare prospettive e identificare blind spots
- Structured thinking
- Preparare discussioni con veri stakeholder
- **Non** sostituire veri esperti su decisioni business-critical

---

## 🔑 Key Takeaways Tecniche Avanzate

:::tip Punti Chiave da Ricordare

✨ **Chain-of-Thought = Reasoning Verificabile**: Far mostrare step logici, non solo conclusione. Essenziale per decisioni complesse.

✨ **Few-Shot = Consistenza Output**: 2-3 esempi ben scelti garantiscono formato perfetto ogni volta. Quality over quantity.

✨ **Multi-Perspective = Analisi Ricca**: 3-4 ruoli complementari esplorano problema da angoli diversi. Sempre concludi con synthesis.

✨ **Scegli Tecnica Appropriata**:
- Task standard → RACE base
- Decisione complessa → CoT
- Formato specifico → Few-Shot
- Stakeholder multipli → Multi-Perspective

✨ **Combinabili**: Puoi usare CoT + Few-Shot, o RACE + Multi-Perspective insieme per massimo impatto

:::

---

## ✏️ Esercizio: Crea Template Avanzati

**Task 1: CoT Template**
- Identifica decisione ricorrente complessa nel tuo lavoro
- Definisci step ragionamento sempre necessari
- Crea template CoT riutilizzabile
- Testa su 2 casi reali

**Task 2: Few-Shot Template**
- Scegli task che richiede formato specifico
- Crea 2-3 esempi rappresentativi
- Costruisci template few-shot
- Valida consistenza output

**Task 3: Multi-Perspective**
- Identifica decisione dove serve input stakeholder multipli
- Definisci 3 ruoli complementari
- Crea prompt panel discussione
- Simula decisione e valuta richezza analisi

---

## 🔗 Risorse Aggiuntive

**Paper Originali**:
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) (Google Research)
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) (OpenAI GPT-3)

---

## ➡️ Prossimi Passi

Padroneggiato le tecniche avanzate! Ora impara a delegare la creazione di prompt a Claude stesso.

👉 **[Continua con Meta-Prompting →](./meta-prompting)**

Scopri come far scrivere e ottimizzare prompt a Claude, risparmiando tempo e creando template library rapidamente.
