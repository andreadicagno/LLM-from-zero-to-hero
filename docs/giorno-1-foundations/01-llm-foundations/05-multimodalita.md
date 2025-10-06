---
title: Capacità Visive e Multimodalità
description: Sfrutta le capacità multimodali degli LLM moderni per use case pratici
sidebar_position: 5
tags: [llm-foundations, multimodalità, vision, immagini, ocr]
---

# Capacità Visive e Multimodalità

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Comprendere cosa significa "multimodale" e quali capacità offre
- [ ] Sfruttare le vision capabilities degli LLM per analisi immagini
- [ ] Identificare use cases pratici per il tuo ruolo (PM, PMO, Service Design, Funzionali)

---

## 📚 Cosa Significa "Multimodale"

**Definizione**: Un LLM **multimodale** può processare e comprendere più tipi di input oltre al solo testo.

### Input Modalities

| Modalità | Esempio | LLM che la supporta |
|----------|---------|---------------------|
| **Testo** | Prompt scritti | Tutti (GPT-5, Claude Sonnet 4, Gemini 2.5 Pro) |
| **Immagini** | Screenshot, foto, diagrammi | GPT-5, Claude Sonnet 4, Gemini 2.5 Pro |
| **Audio** | File MP3, registrazioni | GPT-5 (con Whisper), Gemini 2.5 Pro nativo |
| **Video** | File MP4, analisi frame | Gemini 2.5 Pro (nativo), GPT-5 (frame extraction) |
| **Documenti** | PDF, Word, Excel | Tutti con parsing avanzato |

:::tip 💡 Focus del Workshop
In questo modulo ci concentriamo su **Vision (immagini)** perché è la capability multimodale più utile e accessibile per ruoli non-tecnici.
:::

---

## 👁️ Vision Capabilities: Cosa LLM "Vede"

### 1. Riconoscimento Oggetti e Scene

LLM può identificare:
- **Oggetti**: laptop, whiteboard, post-it, grafici, tabelle
- **Persone** (senza riconoscimento facciale per privacy)
- **Scene**: meeting room, ufficio, outdoor
- **Layout**: composizione visiva, disposizione elementi

**Esempio**:

```
Input: Foto whiteboard con post-it colorati

LLM identifica:
- Board bianco con marker notes
- Post-it organizzati in colonne (Kanban-style)
- Colori diversi (probabilmente categorie)
- Arrows tra alcune note
- Handwritten text (leggibile se chiaro)
```

---

### 2. OCR (Optical Character Recognition)

LLM può **leggere testo** in immagini:

✅ **Funziona bene con**:
- Screenshot di documenti
- Slide presentations
- Email screenshots
- Handwritten text (se leggibile)
- Tabelle e spreadsheet

❌ **Limiti**:
- Testo molto piccolo o sfocato
- Calligrafia illeggibile
- Sovrapposizioni complesse

**Esempio PM**:

```
Input: Screenshot email cliente

LLM estrae:
- Mittente e destinatari
- Subject line
- Corpo email
- Date e orari
- Action items impliciti

Output: "Email da Mario Rossi (CEO cliente) del 03/10.
Richiesta urgente: cambio scope per feature X.
Action items:
1. Valutare impatto timeline
2. Rispondere entro venerdì
3. ..."
```

---

### 3. Analisi Grafici e Diagrammi

LLM può interpretare:
- **Grafici**: bar chart, line graph, pie chart
- **Diagrammi**: flowchart, org chart, sequence diagram
- **Gantt charts**
- **Wireframe e mockup**

**Esempio PMO**:

```
Input: Dashboard KPI screenshot (grafici Excel)

LLM analizza:
- Trend linee (crescita, declino, stabilità)
- Outlier e anomalie
- Comparazioni tra metriche
- Red flags visibili

Output: "Dashboard mostra:
- Revenue: +15% YoY (green)
- Customer satisfaction: -5% (red flag)
- Team capacity: 85% utilizzo (yellow)
Raccomandazione: Investigate CS drop, potenziale issue qualità."
```

---

### 4. Layout e Composizione

LLM comprende **struttura visiva**:
- Gerarchia informazioni
- Sezioni e raggruppamenti
- Relazioni spaziali

**Esempio Service Design**:

```
Input: Wireframe app mobile (sketch carta)

LLM identifica:
- Navigation pattern (bottom tab bar)
- Main content area (feed-like)
- CTA button positioning
- Information hierarchy

Output: "Wireframe mostra pattern standard mobile:
- Primary nav: bottom (5 icons)
- Content: vertical scroll feed
- CTA: floating button lower right
- Standard ma effective per e-commerce."
```

---

## 💡 Use Cases Pratici per Ruolo

### 🔹 Project Manager (PM)

**1. Gantt Chart Analysis**

```
Scenario: Cliente invia Gantt chart via screenshot

Action:
1. Upload screenshot a Claude
2. Prompt: "Analizza questo Gantt chart. Identifica:
   - Critical path
   - Task con ritardi
   - Dependencies problematiche
   - Milestone a rischio"

Output: Task list + critical path + risks
```

---

**2. Whiteboard Brainstorming → Structured Doc**

```
Scenario: Foto whiteboard dopo brainstorming session

Action:
1. Upload foto
2. Prompt: "Trascrivi contenuto whiteboard e organizza in:
   - Themes identificati
   - Ideas per theme
   - Priority (se indicato)
   - Action items"

Output: Documento strutturato pronto per share
```

---

**3. Email Screenshot → Action Items**

```
Scenario: Screenshot email thread lungo (forwarding multipli)

Action:
1. Upload screenshot
2. Prompt: "Estrai da questa email thread:
   - Decisioni prese
   - Action items (owner, deadline)
   - Open questions
   - Next steps"

Output: Checklist actionable
```

---

### 🔹 PMO

**1. Dashboard KPI → Trend Analysis**

```
Scenario: Screenshot dashboard progetti multipli

Action:
1. Upload dashboard screenshot
2. Prompt: "Analizza trend e identifica:
   - Progetti on-track vs at-risk
   - Metriche fuori target
   - Patterns ricorrenti
   - Raccomandazioni prioritarie"

Output: Executive summary + action plan
```

---

**2. Org Chart → Analysis**

```
Scenario: Org chart immagine (legacy format)

Action:
1. Upload immagine
2. Prompt: "Converti org chart in formato testo.
   Identifica:
   - Reporting lines
   - Span of control (quanti report per manager)
   - Potential bottleneck (manager overloaded)"

Output: Testo + analysis + reorg suggestions
```

---

### 🔹 Service Designer

**1. Wireframe → Requirements**

```
Scenario: Sketch wireframe UI nuova feature

Action:
1. Upload foto sketch
2. Prompt: "Genera requirements da questo wireframe:
   - Component list
   - Interactions
   - States (default, hover, error)
   - Accessibility considerations"

Output: Requirements doc pronto per dev handoff
```

---

**2. User Journey Map (foto) → Digital Version**

```
Scenario: Journey map creato su poster fisico

Action:
1. Upload foto
2. Prompt: "Trascrivi questo journey map in formato Markdown:
   - Phases
   - Touchpoint per phase
   - User emotions (se indicato)
   - Pain points
   - Opportunities"

Output: Markdown document (facile da editare/share)
```

---

**3. Competitor Screenshot → Feature Comparison**

```
Scenario: Screenshots di app competitor (5 app diverse)

Action:
1. Upload tutti gli screenshot
2. Prompt: "Confronta queste UI competitor:
   - Features uniche per ciascuno
   - UX patterns comuni
   - Best practices da adottare
   - Gaps nella nostra app"

Output: Comparative analysis + recommendations
```

---

### 🔹 Funzionale (Business Analyst)

**1. Mockup UI → User Stories**

```
Scenario: Mockup UI da designer

Action:
1. Upload mockup
2. Prompt: "Genera user stories da questo mockup:
   Formato: As a [user], I want to [action], so that [benefit]
   Includi acceptance criteria per ogni story."

Output: Backlog-ready user stories
```

---

**2. Error Screenshot → Troubleshooting**

```
Scenario: Screenshot error message da QA

Action:
1. Upload screenshot
2. Prompt: "Analizza questo error:
   - Error message completo
   - Context visibile (URL, stato app)
   - Possibili root cause
   - Step per reproduce
   - Severity assessment"

Output: Bug report strutturato
```

---

**3. Data Visualization → Insights**

```
Scenario: Screenshot grafici analytics dashboard

Action:
1. Upload screenshot
2. Prompt: "Estrai insights da questi grafici:
   - Trend principali
   - Anomalie
   - Correlazioni visibili
   - Raccomandazioni data-driven"

Output: Insights report
```

---

## ⚠️ Limitazioni da Conoscere

### 1. Privacy e Riconoscimento Facciale

:::warning 🔒 Privacy
LLM **non riconosce volti** (by design per privacy).

- ✅ Può dire "ci sono 3 persone"
- ❌ Non può dire "questa è Maria Rossi"

**Implicazione**: Non caricare foto con info personali identificabili se sensibile.
:::

---

### 2. Qualità Immagine

**Impact sulla Precisione**:

| Qualità | OCR Accuracy | Analysis Quality |
|---------|--------------|------------------|
| Alta risoluzione, chiara | ~98% | Ottima |
| Media (screenshot standard) | ~90% | Buona |
| Bassa (sfocata, piccola) | ~60% | Mediocre |
| Molto bassa | &lt;30% | Scarsa |

**Best Practice**: Screenshot alta risoluzione quando possibile

---

### 3. Formato File

✅ **Supportati bene**:
- PNG, JPG, JPEG
- WebP
- PDF (con immagini)

⚠️ **Limitati**:
- GIF (solo primo frame)
- TIFF (supporto parziale)

❌ **Non supportati**:
- Formati proprietari esotici
- Immagini corrotte

---

### 4. Dimensione File

**Limiti tipici**:
- Claude: max 5MB per immagine (fino a 5 immagini/messaggio)
- GPT-4V: max 20MB totale per richiesta

**Se superi**: Comprimi immagine (mantenendo leggibilità)

---

## ✏️ Esercizio Pratico

### Task 1: Screenshot Analysis

1. **Prendi screenshot** di un tuo deliverable:
   - PM: Gantt chart, status dashboard
   - PMO: Portfolio view, KPI dashboard
   - Service Designer: Wireframe, journey map
   - Funzionale: Requirements doc, mockup

2. **Upload a Claude** con prompt:
   ```
   Analizza questo [tipo documento].

   Estrai:
   - Informazioni chiave
   - Pattern o trend visibili
   - Potential issues
   - Raccomandazioni

   Format: Bullet points concisi
   ```

3. **Valuta**:
   - Accuratezza OCR/recognition
   - Utilità insights
   - Cosa ha "visto" e cosa ha perso

---

### Task 2: Whiteboard → Documentation

1. **Next meeting**: Foto whiteboard/flip chart

2. **Post-meeting**:
   ```
   Upload foto

   Prompt: "Trascrivi e organizza contenuto di questo whiteboard:
   - Themes
   - Key points per theme
   - Decisions
   - Action items
   - Questions"
   ```

3. **Compare** con appunti manuali: quanto tempo risparmiato?

---

<details>
<summary>👉 Use Case Avanzato: Multi-Image Analysis</summary>

**Scenario**: Analizzare evoluzione UI in 5 iterazioni design

```
Upload: 5 screenshot (v1, v2, v3, v4, v5)

Prompt: "Analizza evoluzione di questa UI attraverso 5 iterazioni.

Per ogni iterazione, descrivi:
1. Changes rispetto a precedente
2. Rationale possibile per changes
3. UX improvement o regression

Poi:
- Overall trajectory (miglioramento?)
- Best elements da ciascuna versione
- Raccomandazione per v6"

Output: Comparative evolution analysis
```

**Risparmio Tempo**: Ore di analysis manuale → 2 minuti

</details>

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Multimodalità**:
- LLM moderni processano testo + immagini (+ audio/video per alcuni)
- Vision = capability più utile per lavoro quotidiano
- Claude, GPT-4V, Gemini hanno vision capabilities

**Vision Can**:
- ✅ OCR (leggere testo in immagini)
- ✅ Analizzare grafici, diagrammi, wireframe
- ✅ Estrarre struttura e layout
- ✅ Identificare oggetti e scene

**Vision Cannot**:
- ❌ Riconoscere volti (privacy)
- ❌ Leggere testo molto sfocato/piccolo
- ❌ "Vedere" meglio di immagine fornita (garbage in, garbage out)

**Use Cases Potenti**:
- Screenshot → structured data
- Whiteboard foto → documentation
- Mockup/wireframe → requirements
- Dashboard → insights
- Email screenshot → action items

**Best Practices**:
- Alta risoluzione quando possibile
- Screenshot chiari, ben illuminati
- PNG/JPG preferred
- Verifica accuratezza su info critiche
- Combina vision + text prompt per risultati migliori

**Regola d'Oro**:
- Vision non sostituisce human review su decisioni critiche
- Ma accelera massivamente data extraction e analysis
- Time saved: 60-90% su task compatibili

:::

---

## 🔗 Risorse Aggiuntive

**Guide**:
- 📖 [Claude Vision Capabilities](https://docs.anthropic.com/claude/docs/vision) - Docs ufficiali
- 📖 [GPT-4V Best Practices](https://platform.openai.com/docs/guides/vision) - OpenAI guide

**Examples**:
- 🎨 [Vision Use Cases Library](https://www.anthropic.com/index/vision-use-cases) - Esempi pratici
- 🎨 [Prompt Examples for Images](https://cookbook.openai.com/examples/gpt_with_vision_for_video_understanding)

---

## ➡️ Prossimi Passi

Ora che comprendi le capacità multimodali:

1. **Prova**: Esercizio screenshot analysis con un tuo documento
2. **Identifica**: 3 use case vision per il tuo lavoro quotidiano
3. **Sperimenta**: Next meeting, foto whiteboard → auto-documentation
4. **Continua**: [Concetti Essenziali](concetti-chiave) - Temperature, hallucinations, limiti

---

:::info 💬 Discussione
**Domande da riflettere**:
- Quali screenshot/immagini gestisci regolarmente che LLM potrebbe analizzare?
- Quanto tempo passi trascrivendo/analizzando contenuto visivo?
- Come integreresti vision capabilities nel tuo workflow?
:::
