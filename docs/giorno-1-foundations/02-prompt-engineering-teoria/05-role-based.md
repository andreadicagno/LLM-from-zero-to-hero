---
title: Role-Based & Multi-Perspective Prompting
description: Cambiare prospettiva LLM e creare panel di esperti virtuali per analisi ricche
sidebar_position: 5
tags: [prompt-engineering, role-based, multi-perspective, expert-panel]
---

# 👥 Role-Based & Multi-Perspective Prompting

> ⏱️ **Durata**: 12 minuti
> 🎯 **Livello**: Intermedio

---

## 🎯 Learning Objectives

- ✅ Padroneggiare role-based prompting
- ✅ Usare multi-perspective per analisi complesse
- ✅ Creare "panel di esperti" virtuali
- ✅ Comprendere limitazioni della tecnica

---

## 📚 Role-Based Prompting - Base

**Cos'è**: Assegnare ruolo/persona specifica all'LLM

**Perché funziona**: Attiva pattern linguistici e prospettive appropriate

**Esempio - Stesso Problema, Ruoli Diversi**:

```
Scenario: "App mobile crashha spesso"

Role: Developer
→ Focus: stack trace, memory leaks, debugging code-level

Role: Product Manager
→ Focus: user impact, churn risk, priorità fix vs features

Role: Customer Support
→ Focus: comunicazione utenti, workaround, FAQ, escalation
```

→ Stesso problema, 3 prospettive complementari

---

## 🔄 Multi-Perspective Prompting

**Cos'è**: Chiedere multipli ruoli sequenzialmente o simultaneamente

### **Pattern 1: Sequenziale**

```
Analizza [problema] da 3 prospettive:

1. Come [Ruolo A]: [analisi]
2. Come [Ruolo B]: [analisi]
3. Come [Ruolo C]: [analisi]

Poi sintetizza: raccomandazione integrando tutte le prospettive
```

### **Pattern 2: Panel Discussione**

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

**Beneficio**: Decisione più robusta considerando angoli diversi ✅

---

## 👨‍💼 Esempio Panel Esperti - Service Design

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

**Risultato**: Esplorazione ricca del problema da angoli complementari

---

## 📢 Role-Based per Generazione Contenuti

**Use Case**: Stesso contenuto, audience diverse

**Scenario**: Comunicare "Digital Transformation Initiative"

**Role: CEO (C-Level)**:
```
Sei Chief Communication Officer.
Email CEO all-hands su Digital Transformation.

Tone: Visionary, inspiring
Focus: Strategic vision, long-term value
Lunghezza: 400 parole
Evita: Technical jargon
```

**Role: Tech Lead (Team)**:
```
Sei Engineering Manager.
Email team dev su Digital Transformation.

Tone: Pragmatic, technical
Focus: Architettura, stack, roadmap, skill development
Lunghezza: 500 parole
Include: Technical details, learning resources
```

**Role: Change Manager (Stakeholder)**:
```
Sei Change Management Lead.
FAQ per manager su Digital Transformation.

Tone: Supportive, reassuring
Focus: Team impact, training, support
Formato: Q&A (10 domande)
Include: Handling resistance, practical steps
```

---

## 📐 Best Practices

### **Scelta Ruoli**:
- ✅ Expertise complementare
- ✅ Include dissenting voices
- ✅ 3-4 ruoli ottimale (più = confuso)
- ❌ Ruoli troppo simili (redundante)

### **Descrizione Ruolo**:
- Specifico: "UX Researcher focus accessibility" > "UX person"
- Include bias/priorità: "CFO risk-averse, focus ROI short-term"

### **Synthesis**:
- Sempre concludi integrando prospettive
- Highlight trade-off e raccomandazione
- Non lasciare solo opinioni separate

---

## ⚠️ Limitazioni

**❌ LLM Non Ha Vera Expertise**
- "Esperto" = pattern linguistico, non conoscenza reale
- Sempre verifica su domini critici

**❌ Può Generare Stereotipi**
- "CFO" → sempre risk-averse (non sempre vero)
- Consapevolezza: sono simulazioni

**✅ Usa Per**:
- Esplorare prospettive
- Identificare blind spots
- Structured thinking
- **Non** sostituire veri esperti su decisioni critiche

---

## 🔑 Key Takeaways

:::tip Punti Chiave

✨ **Role-Based = Cambiare Prospettiva**: Stessa info, lenti diverse

✨ **Multi-Perspective = Analisi Ricca**: 3-4 ruoli complementari ottimale

✨ **Expert Panel = Explore Trade-off**: Dibattito strutturato

✨ **Synthesis Essenziale**: Integra prospettive, non listarle solo

✨ **È Simulazione**: Utile ma non sostituisce vera expertise

:::

---

## ➡️ Prossimi Passi

👉 **[Continua con Meta-Prompting →](./meta-prompting)**

Delega la creazione e ottimizzazione prompt a Claude stesso!

