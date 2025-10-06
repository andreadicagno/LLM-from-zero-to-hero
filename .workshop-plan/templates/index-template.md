# Template: Index/Overview Pages

> **Last Updated**: 2025-10-05 (Sessione 4)
> **Strategy**: Differenziare Giorno Index vs Modulo Index per eliminare ridondanze

---

## 📌 Index Pages Strategy

**Problema**: Ridondanze tra overview Giorno e overview Moduli causano frustrazione (stesse info ripetute 2-3 volte).

**Soluzione**:
- **Giorno Index** (`giorno-X/index.md`): Master document completo (~180-200 righe) con TUTTI i dettagli
- **Modulo Index** (`giorno-X/0X-modulo/index.md`): Quick navigation page (~70-100 righe), NO ridondanze

**Vedi** `.workshop-plan/content-outline.md` per dettagli completi strategy.

---

## 🎯 Quale Template Usare?

### Template A: Giorno Index
**Usa per**: `docs/giorno-X/index.md` (es: `giorno-1-foundations/index.md`)
- Include: Learning objectives completi, timeline, checklist, deliverables, prerequisites, key concepts
- Lunghezza target: ~180-200 righe
- Vedi template completo sotto

### Template B: Modulo Index (SNELLITO)
**Usa per**: `docs/giorno-X/0X-modulo/index.md` (es: `01-llm-foundations/index.md`)
- Include SOLO: Intro brevissima + lista argomenti compatta + CTA
- Lunghezza target: ~70-100 righe
- Vedi template snellito sotto

---

# TEMPLATE A: Giorno Index (Master Document)

---
title: [TITOLO SEZIONE/GIORNO]
description: [Descrizione overview della sezione]
sidebar_position: [NUMERO]
slug: /[slug-url]
tags: [overview, [giorno-X], [altro tag]]
---

# [TITOLO SEZIONE/GIORNO]

> 📅 **Data**: [Data workshop - se applicabile]
> ⏱️ **Durata totale**: [X ore]
> 🎯 **Livello**: [Base/Intermedio/Avanzato]

---

## 📖 Overview

[Paragrafo introduttivo che spiega cosa copre questa sezione/giorno]

[Paragrafo su perché è importante e cosa imparerai]

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

✅ [Obiettivo macro 1]
✅ [Obiettivo macro 2]
✅ [Obiettivo macro 3]
✅ [Obiettivo macro 4 - opzionale]

---

## 📚 Struttura della Giornata/Sezione

### 🗓️ Timeline

| Orario | Modulo | Durata | Tipo |
|--------|--------|--------|------|
| [HH:MM] | [Nome Modulo 1] | [X min] | 📚 Teoria |
| [HH:MM] | [Nome Modulo 2] | [X min] | 💡 Esempi |
| [HH:MM] | ☕ Pausa | [X min] | - |
| [HH:MM] | [Nome Modulo 3] | [X min] | ✏️ Pratica |
| [HH:MM] | [Nome Modulo 4] | [X min] | 🚀 Challenge |

**Totale**: [X] ore ([Y]% teoria, [Z]% pratica)

---

## 🧩 Moduli

### Modulo 1: [Nome Modulo]

**📍 Cosa imparerai**:
- [Topic 1]
- [Topic 2]
- [Topic 3]

**⏱️ Durata**: [X] min

**🔗 Link**: [Vai al modulo →](./[path-to-module])

---

### Modulo 2: [Nome Modulo]

**📍 Cosa imparerai**:
- [Topic 1]
- [Topic 2]
- [Topic 3]

**⏱️ Durata**: [X] min

**🔗 Link**: [Vai al modulo →](./[path-to-module])

---

### Modulo 3: [Nome Modulo - Esercizi]

**📍 Cosa farai**:
- [Esercizio 1 - descrizione breve]
- [Esercizio 2 - descrizione breve]

**⏱️ Durata**: [X] min

**📦 Deliverable**: [Cosa produrrai]

**🔗 Link**: [Vai agli esercizi →](./[path-to-exercises])

---

[Ripeti per tutti i moduli...]

---

## 🎯 Deliverables Attesi

Al termine di questa sezione avrai creato:

✅ **[Deliverable 1]**: [Descrizione]
- 📄 [Formato/tipo]
- 🎯 [Utilizzo/scopo]

✅ **[Deliverable 2]**: [Descrizione]
- 📄 [Formato/tipo]
- 🎯 [Utilizzo/scopo]

✅ **[Deliverable 3]**: [Descrizione]
- 📄 [Formato/tipo]
- 🎯 [Utilizzo/scopo]

---

## 📋 Prerequisiti

**Conoscenze necessarie**:
- [ ] [Prerequisito 1]
- [ ] [Prerequisito 2]
- [ ] [Prerequisito 3]

**Materiali da preparare**:
- [ ] [Tool/software installato]
- [ ] [Account creato]
- [ ] [File scaricati]

**Moduli da aver completato** (se applicabile):
- [Link modulo prerequisito 1]
- [Link modulo prerequisito 2]

---

## 🚀 Da Dove Partiamo vs Dove Arriviamo

### ❌ Prima (Stato Iniziale)

**Cosa sai/sai fare**:
- [Skill/knowledge level attuale]
- [Limitations/gaps attuali]

**Pain Points**:
- [Problema 1 che hai]
- [Problema 2 che hai]

---

### ✅ Dopo (Stato Finale)

**Cosa saprai/saprai fare**:
- [Nuova skill/knowledge 1]
- [Nuova skill/knowledge 2]
- [Nuova skill/knowledge 3]

**Capacità acquisite**:
- [Capacità 1 - con esempio concreto]
- [Capacità 2 - con esempio concreto]

---

## 💡 Perché Questo è Importante

### Per il Tuo Ruolo

**Per Project Manager**:
[Come i contenuti di questa sezione aiuteranno PM nel lavoro quotidiano]

**Per PMO**:
[Come aiuterà PMO]

**Per Service Designer**:
[Come aiuterà Service Design]

**Per Funzionali/BA**:
[Come aiuterà BA/Funzionali]

---

### ROI Atteso

**Tempo risparmiato**:
- [Task che richiede X ore → diventa Y minuti]

**Qualità migliorata**:
- [Aspetto 1 del lavoro che migliora]
- [Aspetto 2 del lavoro che migliora]

**Nuove capacità**:
- [Cosa potrai fare che prima non potevi]

---

## 🔑 Concetti Chiave

I concetti fondamentali che esplorerai in questa sezione:

### [Concetto 1]
[Breve spiegazione 2-3 righe]

### [Concetto 2]
[Breve spiegazione 2-3 righe]

### [Concetto 3]
[Breve spiegazione 2-3 righe]

[Aggiungi altri concetti chiave...]

---

## 📊 Mappa Concettuale

```mermaid
graph TD;
    A[Punto Partenza] --> B[Concetto 1];
    A --> C[Concetto 2];
    B --> D[Applicazione Pratica];
    C --> D;
    D --> E[Deliverable Finale];
    E --> F[Competenza Acquisita];
```

*[Opzionale - se usi Mermaid plugin, altrimenti rimuovi]*

---

## ✏️ Checklist Progressione

Usa questa checklist per tracciare il tuo avanzamento:

### Modulo 1: [Nome]
- [ ] Completato contenuto teorico
- [ ] Praticato esempi
- [ ] Compreso concetti chiave

### Modulo 2: [Nome]
- [ ] Completato contenuto teorico
- [ ] Praticato esempi
- [ ] Compreso concetti chiave

### Modulo 3: [Nome]
- [ ] Completato esercizio 1
- [ ] Completato esercizio 2
- [ ] Creato deliverable

### Modulo 4: [Nome]
- [ ] [Checkpoint 1]
- [ ] [Checkpoint 2]

**Overall Progress**: ___% completato

---

## 🎓 Metodologia Didattica

Questa sezione segue l'approccio:

**📚 60% Pratica, 40% Teoria**
- Maggior focus su hands-on learning
- Teoria solo ciò che serve per pratica efficace

**🎯 Real-World Focus**
- Tutti esempi contestualizzati a [industry/ruolo]
- Casi d'uso applicabili immediatamente

**🔄 Iterazione & Feedback**
- Pratica → Feedback → Refinement
- Apprendimento by doing

---

## 💬 Q&A Frequenti

<details>
<summary><strong>Quanto tempo serve per completare questa sezione?</strong></summary>

[Risposta: tempo stimato, variazioni possibili]

</details>

<details>
<summary><strong>Devo completare tutto in ordine?</strong></summary>

[Risposta: sì/no e perché]

</details>

<details>
<summary><strong>Cosa fare se rimango bloccato?</strong></summary>

[Risposta: risorse di supporto, troubleshooting]

</details>

<details>
<summary><strong>[Altra domanda frequente]</strong></summary>

[Risposta]

</details>

---

## 🔗 Risorse per Questa Sezione

**Template & File**:
- 📄 [Template 1 - link]
- 📄 [Template 2 - link]
- 📁 [File esercizi - link download]

**Tool Necessari**:
- 🔧 [Tool 1 - con link setup]
- 🔧 [Tool 2 - con link setup]

**Letture Complementari** (opzionale):
- 📚 [Articolo/docs correlato 1]
- 📚 [Articolo/docs correlato 2]

---

## 🗺️ Navigazione

### 👈 Sezione Precedente
[Link sezione precedente se applicabile]

### 👉 Prossima Sezione
[Link prossima sezione se applicabile]

### 🏠 Torna alla Home
[Link alla home del corso]

---

## 🚀 Inizia Ora!

:::tip Pronto per iniziare?
Procedi con il primo modulo di questa sezione:

**👉 [Vai al Modulo 1: [Nome] →](./[path-to-first-module])**
:::

---

## 📝 Note per il Facilitatore

:::note Solo per Facilitatori

**Preparazione Aula**:
- [ ] [Setup necessario 1]
- [ ] [Setup necessario 2]
- [ ] [Materiali da stampare/preparare]

**Timing Flessibilità**:
- Se gruppo veloce: [Opzioni bonus/avanzate]
- Se gruppo lento: [Cosa skippare/semplificare]

**Punti di Attenzione**:
- [Concetto tipicamente difficile da capire]
- [Dove fare pausa/break]

**Varianti per Audience**:
- Gruppo principalmente PM: [Focus su X, esempi Y]
- Gruppo misto: [Approccio bilanciato]
- Gruppo con background tecnico: [Accelerare su Z]

**Success Metrics**:
- [Come misurare se obiettivi raggiunti]
- [Feedback da raccogliere]

**Troubleshooting**:
- Problema comune 1: [Soluzione]
- Problema comune 2: [Soluzione]

:::

---

## 📊 Feedback & Miglioramento

:::info Il Tuo Feedback è Prezioso
Dopo aver completato questa sezione, aiutaci a migliorare:

**Cosa ha funzionato bene?**
[Form/link feedback]

**Cosa può essere migliorato?**
[Form/link feedback]

**Domande non risolte?**
[Contact/forum]
:::

---

**[Fine Template A: Giorno Index]**

---
---
---

# TEMPLATE B: Modulo Index (Quick Navigation Page - SNELLITO)

> ⚠️ **IMPORTANTE**: Questo template è MOLTO più snello del Template A
> - NO learning objectives dettagliati (già nel Giorno Index parent)
> - NO checklist (già nel parent)
> - NO key concepts (già nel parent)
> - NO deliverables (già nel parent)
> - NO timeline dettagliata (già nel parent)

---

```markdown
---
title: Modulo [N] - [NOME MODULO]
description: [Descrizione breve 1 frase]
sidebar_position: [N]
---

# Modulo [N]: [NOME MODULO]

> 🎯 **Obiettivo**: [1 frase obiettivo macro]
>
> ⏱️ **Durata**: [X] minuti | **Livello**: [Base/Intermedio/Avanzato]

---

## 📖 Introduzione

[Paragrafo 1: Cosa copre questo modulo - max 3-4 righe]

[Paragrafo 2: Perché è importante - max 3-4 righe]

:::tip 💡 [Tip Rilevante]
[1 tip breve e utile - max 2 righe]
:::

---

## 📚 Argomenti del Modulo

### 1. [EMOJI] [Titolo Argomento 1](link-relativo)
⏱️ [X] min | [Descrizione super compatta - max 15 parole]

---

### 2. [EMOJI] [Titolo Argomento 2](link-relativo)
⏱️ [X] min | [Descrizione super compatta - max 15 parole]

---

### 3. [EMOJI] [Titolo Argomento 3](link-relativo)
⏱️ [X] min | [Descrizione super compatta - max 15 parole]

---

### 4. [EMOJI] [Titolo Argomento 4](link-relativo)
⏱️ [X] min | [Descrizione super compatta - max 15 parole]

---

[... aggiungi altri argomenti se necessario ...]


```

---

**[Fine Template B: Modulo Index]**

---

## 📊 Confronto Template A vs B

| Elemento | Template A (Giorno) | Template B (Modulo) |
|----------|---------------------|---------------------|
| **Lunghezza** | ~180-200 righe | ~70-100 righe |
| **Intro** | Completa (2-3 paragrafi) | Brevissima (2 paragrafi max) |
| **Learning Objectives** | ✅ Dettagliati | ❌ NO (già nel parent) |
| **Timeline** | ✅ Tabella completa | ❌ NO (già nel parent) |
| **Lista Argomenti** | Lista descrittiva | Cards compatte (emoji + durata + 1 frase) |
| **Key Concepts** | ✅ Sezione dedicata | ❌ NO (già nel parent) |
| **Checklist** | ✅ Progressione completa | ❌ NO (già nel parent) |
| **Deliverables** | ✅ Lista completa | ❌ NO (già nel parent) |
| **Prerequisites** | ✅ Dettagliati | ❌ NO (già nel parent) |
| **Metodologia** | ✅ Spiegata | ❌ NO |
| **CTA Finale** | ✅ Presente | ✅ Presente |

---

## 💡 Tips per Usare i Template

### Per Template A (Giorno Index):
- Investi tempo nel rendere learning objectives chiari e ispiranti
- Timeline deve essere realistica (include pause!)
- Checklist progressione aiuta studenti a tracciare avanzamento
- Key concepts devono essere veramente "chiave" (max 6-8)

### Per Template B (Modulo Index):
- **Regola oro**: Se è già nel Giorno Index parent, NON ripeterlo
- Descrizioni argomenti: massimo 15 parole (forza sintesi)
- Intro deve essere <100 parole totali
- Focus su velocità navigazione, non su dettagli

---

## 📝 Checklist Pre-Publish

### Template A (Giorno Index):
- [ ] Learning objectives coprono TUTTI i moduli del giorno
- [ ] Timeline somma = durata totale dichiarata
- [ ] Ogni modulo ha link funzionante
- [ ] Checklist allineata con learning objectives
- [ ] Deliverables sono concreti e misurabili

### Template B (Modulo Index):
- [ ] Intro < 100 parole
- [ ] Ogni argomento ha: emoji + titolo + durata + descrizione ≤15 parole
- [ ] NO sezioni ridondanti con parent (no learning obj, checklist, etc)
- [ ] CTA link funzionante
- [ ] File totale < 100 righe

---

**[Fine Templates]**
