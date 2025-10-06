---
title: Anatomia di un Prompt Efficace
description: I building blocks fondamentali per scrivere prompt che generano risultati precisi e utilizzabili
sidebar_position: 1
tags: [prompt-engineering, anatomia, componenti, best-practices]
---

# 🔬 Anatomia di un Prompt Efficace

> ⏱️ **Durata**: 10 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- ✅ Identificare i 6 componenti essenziali di un prompt efficace
- ✅ Riconoscere prompt deboli e capire cosa manca
- ✅ Applicare la struttura ottimale per i tuoi prompt
- ✅ Trasformare un prompt generico in uno specifico e actionable

---

## 📚 Componenti Essenziali di un Prompt

Un prompt efficace è come un brief chiaro dato a un collaboratore: più dettagli rilevanti fornisci, migliore sarà il risultato.

### 1️⃣ **Ruolo/Persona** (Opzionale ma Potente)

**Cosa**: Definisci chi deve "essere" l'LLM

**Perché è utile**: Attiva pattern linguistici e prospettive appropriate per il task

**Come scrivere**:
```
"Sei un [professione] [livello seniority] con esperienza in [dominio specifico]"
```

**Esempi per ruolo**:
- 👔 **PM**: "Sei un Senior Project Manager certificato PMP con 10 anni di esperienza in progetti Agile enterprise"
- 📊 **PMO**: "Sei un PMO Director esperto in portfolio management e governance per organizzazioni Fortune 500"
- 🎨 **Service Design**: "Sei un Service Design Lead con 8 anni di esperienza in digital transformation per il settore finanziario"
- 📋 **Funzionale**: "Sei un Business Analyst senior specializzato in requirements elicitation per progetti enterprise"

:::tip Quando Usare il Ruolo
Il ruolo è particolarmente utile quando:
- Il task richiede expertise specifica
- Vuoi un certo tone/stile (es: "esperto" vs "educativo")
- Stai generando contenuto per audience specifica
:::

---

### 2️⃣ **Task/Azione** (Obbligatorio)

**Cosa**: L'azione specifica che l'LLM deve eseguire

**Perché è cruciale**: Senza un task chiaro, l'LLM non sa cosa fare

**Verbi efficaci**:
- 🔍 **Analisi**: Analizza, Valuta, Confronta, Esamina
- ✍️ **Creazione**: Genera, Scrivi, Crea, Sviluppa
- 📝 **Sintesi**: Riassumi, Sintetizza, Estrai, Distilla
- 💡 **Raccomandazioni**: Suggerisci, Raccomanda, Proponi, Consiglia

**Confronto Task Vago vs Chiaro**:

❌ **Vago**: "Dimmi del progetto"
✅ **Chiaro**: "Analizza i rischi critici del progetto e prioritizzali per impact"

❌ **Vago**: "Aiutami con i requirements"
✅ **Chiaro**: "Trasforma i business requirements allegati in user stories formato Agile"

---

### 3️⃣ **Contesto** (Fondamentale)

**Cosa**: Background, vincoli, situazione specifica

**Perché è fondamentale**: L'LLM non "sa" il tuo contesto. Devi fornirlo esplicitamente.

**Cosa includere**:
- 🎯 Background progetto/situazione
- 💰 Vincoli (tempo, budget, risorse)
- 👥 Stakeholder rilevanti
- 📄 Documenti/dati disponibili
- ⚠️ Problemi/challenge specifiche
- 🎪 Contesto organizzativo (industry, dimensione company, etc.)

**Esempio Contesto Completo (PM)**:
```
Contesto:
- Progetto: Core Banking System Migration
- Cliente: Banca nazionale, settore finance, 2M clienti
- Budget: €5M | Timeline: 12 mesi (siamo al mese 7)
- Team: 15 persone (8 dev, 3 BA, 2 QA, 1 PM, 1 architect)
- Status attuale: 55% completato, leggero ritardo (1 settimana)
- Issue critica emersa: legacy system ha API non documentate
- Challenge: possibili altri "unknown unknowns" nel legacy code
```

:::warning Errore Comune
Non assumere che l'LLM "capisca" il contesto implicito. Se è rilevante, esplicitalo.

❌ "Analizza il problema" → Quale problema?
✅ "Analizza il problema di performance emerso nello sprint 5..."
:::

---

### 4️⃣ **Formato Output** (Molto Utile)

**Cosa**: La struttura specifica che vuoi per la risposta

**Perché è utile**: Evita iterazioni per "riformattare". Output pronto all'uso.

**Opzioni formato**:
- 📊 **Tabella**: con colonne specificate
- 📝 **Lista**: numerata, bullet points, checklist
- 📧 **Email**: subject + body strutturato
- 📄 **Documento**: sezioni, paragrafi, abstract
- 💻 **JSON/Code**: per integrazione in sistemi
- 📈 **Report**: executive summary, dettaglio, appendici

**Esempio Formato Specifico**:
```
Formato output:
- Tabella markdown con 4 colonne: Rischio | Probabilità (H/M/L) | Impact (H/M/L) | Mitigation
- Ordinata per (Probabilità × Impact) decrescente
- Massimo 10 righe (top rischi)
- Sotto la tabella: 1 paragrafo con raccomandazione prioritaria
```

---

### 5️⃣ **Esempi** (Quando Serve)

**Cosa**: Esempi input-output per chiarire aspettative

**Quando usare**:
- ✅ Formato particolare che vuoi rispettato esattamente
- ✅ Tone/style difficile da descrivere a parole
- ✅ Task ricorrente dove vuoi consistenza
- ❌ Task semplice e auto-esplicativo

**Pattern**:
```
Esempio:
Input: [il tuo esempio input]
Output desiderato: [come vuoi sia formattato]
```

:::info Few-Shot Learning
Fornire esempi è una tecnica chiamata "Few-Shot Learning". Approfondiremo nella sezione dedicata.
:::

---

### 6️⃣ **Tone/Style** (Opzionale)

**Cosa**: Il "come" dire, non solo il "cosa"

**Opzioni comuni**:
- 🎩 **Formale**: per executive, board, clienti enterprise
- 💬 **Casual**: per team interno, brainstorming
- 🔬 **Tecnico**: per audience tech, detailed
- 📚 **Educativo**: per training, onboarding
- 💼 **Business-friendly**: evita jargon, focus ROI/value

**Esempio**:
```
Tone: Professionale ma accessibile
Audience: C-level stakeholder non tecnico
Evita: Jargon tecnico, acronimi non spiegati
Usa: Analogie business, focus su impact finanziario
```

---

## 🏗️ Struttura Ottimale

La formula base per un prompt efficace:

```
[RUOLO] + [TASK] + [CONTESTO] + [FORMATO] + [VINCOLI/NOTE]
```

**Perché in quest'ordine?**
1. **Ruolo**: Imposta la "mentalità"
2. **Task**: Chiarisce subito l'obiettivo
3. **Contesto**: Fornisce info necessarie
4. **Formato**: Definisce l'output
5. **Vincoli**: Dettagli finali (lunghezza, tone, etc.)

---

## 💡 Esempio Completo: Prompt Debole → Forte

### ❌ Prompt Debole (Inefficace)

```
"Scrivi un report sul progetto"
```

**Problemi**:
- No contesto (quale progetto?)
- Task vago (che tipo di report?)
- No formato (email? presentazione? documento?)
- No audience (chi lo legge?)
- No vincoli (lunghezza? sezioni?)

**Risultato**: Output generico di 2 paragrafi vaghi, inutilizzabile ❌

---

### ✅ Prompt Forte (Efficace)

```
Sei un Project Manager esperto in progetti IT enterprise.

Scrivi un executive summary del progetto "Digital Transformation Platform" per il CFO.

Contesto:
- Cliente: ABC Corp (Fortune 500, settore retail)
- Budget: €2M | Timeline: 9 mesi
- Status: 60% completato, 2 settimane ritardo
- Team: 15 persone
- Milestone recente: Migration fase 1 completata con successo
- Risk principale: integrazione con legacy ERP più complessa del previsto
- Prossimi step: Deployment fase 2 in Q1 2025

Formato:
- Massimo 300 parole
- 3 sezioni obbligatorie:
  * 📊 Progress (milestone + % completion)
  * ⚠️ Risks & Issues (top 2 con mitigation plan)
  * ➡️ Next Steps (priority actions + timeline)
- Usa bullet points
- Tone: conciso, business-oriented, data-driven

Focus su impatto finanziario e tempistiche.
No jargon tecnico (audience non IT).
```

**Risultato**: Email executive di 280 parole, pronta per invio, formato perfetto ✅

---

## ✏️ Esercizio Pratico

### 🎯 Task: Trasforma un Tuo Prompt

**Step 1**: Pensa a un prompt che usi abitualmente
*(Es: "riassumi questo documento", "genera idee per...", "scrivi email per...")*

**Step 2**: Analizza cosa manca
- [ ] Ruolo definito?
- [ ] Task specifico?
- [ ] Contesto sufficiente?
- [ ] Formato output chiaro?
- [ ] Tone/audience specificato?

**Step 3**: Riscrivi con tutti i componenti

**Step 4**: Testa entrambe le versioni con Claude e confronta risultati

<details>
<summary>👉 Esempio Soluzione</summary>

**Prompt Originale**:
```
"Riassumi questo meeting transcript"
```

**Prompt Migliorato**:
```
Sei un Executive Assistant esperto in meeting synthesis.

Estrai action items e decisioni chiave dal meeting transcript allegato.

Contesto:
- Meeting: Sprint Planning per Q1 2025
- Partecipanti: PM, Tech Lead, 3 sviluppatori, Product Owner
- Durata: 90 minuti
- Topic: Planning rilascio feature X e Y

Formato output:
1. Decisioni Chiave (max 3 bullet points)
2. Action Items:
   - Owner: [nome]
   - Task: [descrizione]
   - Deadline: [data]
   - Priority: [H/M/L]
3. Open Questions (da follow-up)

Tone: Chiaro, actionable
Max 250 parole
Ordina action items per priority (High → Low)
```

**Differenza**: Da riassunto generico di 150 parole → Lista actionable di decisioni e task pronti per tracking ✅
</details>

---

## ⚠️ Errori Comuni da Evitare

### 1. Prompt Troppo Vago
❌ "Aiutami con questa cosa"
❌ "Fai qualcosa con questi dati"
✅ "Analizza questo dataset CSV e identifica i top 5 trend emergenti nell'ultimo quarter"

### 2. Prompt Troppo Lungo e Non Strutturato
❌ Muro di testo di 500 parole senza separazioni, tutto insieme, context mescolato con task...
✅ Sezioni chiare: Ruolo | Task | Contesto | Formato (usa spazi bianchi!)

### 3. Assumere Contesto Implicito
❌ "Analizza il problema" (quale problema?)
❌ "Come al solito" (l'LLM non sa il "solito")
✅ Esplicita sempre il contesto necessario

### 4. Non Specificare Formato
❌ "Dammi un report" → Ottieni formato random
✅ "Report formato: 1) Executive Summary, 2) Dettaglio, 3) Raccomandazioni. Max 2 pagine."

### 5. Usare Riferimenti Temporali Ambigui
❌ "Dati di ieri", "la settimana scorsa"
✅ "Dati del 2025-01-05", "dati dal 2024-12-28 al 2025-01-03"

---

## 🔑 Key Takeaways

:::tip Punti Chiave da Ricordare

✨ **6 Componenti Essenziali**: Ruolo, Task, Contesto, Formato, Esempi, Tone
*(Non tutti sempre necessari, ma considera ciascuno)*

✨ **Specificità &gt; Genericità**: "Analizza rischi tecnici del progetto X nel mese 7" &gt; "Dimmi dei rischi"

✨ **Struttura Chiara**: Usa spazi bianchi, sezioni, bullet points. Non muro di testo.

✨ **Formato = Tempo Risparmiato**: Specificare formato output evita iterazioni per riformattare

✨ **Testa e Itera**: Il prompt perfetto al primo tentativo è raro. Raffina basandoti sui risultati.

:::

---

## 🔗 Risorse Aggiuntive

**Approfondimenti**:
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) - Guida ufficiale Claude
- [OpenAI Prompt Engineering Best Practices](https://platform.openai.com/docs/guides/prompt-engineering) - Best practices GPT

**Template Riutilizzabili**:
Nella sezione [Framework RACE](./framework-race) troverai template strutturati pronti all'uso per i ruoli più comuni.

---

## ➡️ Prossimi Passi

Ora che conosci i building blocks, è tempo di applicare un framework sistematico.

👉 **[Continua con Framework RACE →](./framework-race)**

Il Framework RACE ti darà un metodo step-by-step per costruire prompt efficaci ogni volta, con template riutilizzabili per PM, PMO, Service Design e Funzionali.

