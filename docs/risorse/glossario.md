---
title: Glossario
description: Termini chiave e definizioni per il workshop LLM
sidebar_position: 2
tags:
  - risorse
  - glossario
  - terminologia
---

# 📖 Glossario

> Definizioni chiare dei termini chiave utilizzati nel workshop

---

## A

### Alignment
**Definizione**: Processo per rendere gli LLM sicuri, utili e allineati ai valori umani, tipicamente attraverso RLHF (Reinforcement Learning from Human Feedback).

**Esempio**: Claude è stato "aligned" per rifiutare richieste dannose e fornire risposte etiche.

**Quando è rilevante**: Spiega perché a volte l'LLM è "troppo cauto" o rifiuta certe richieste.

---

## C

### Chain-of-Thought (CoT)
**Definizione**: Tecnica di prompt engineering che richiede all'LLM di mostrare il ragionamento step-by-step prima della risposta finale.

**Esempio**: "Analizza questo problema step-by-step: 1) Prima identifica..., 2) Poi valuta..., 3) Infine raccomanda..."

**Quando usarlo**: Per decisioni complesse, analisi multi-step, quando errori sono costosi.

**Related**: Prompt Engineering, RACE Framework

---

### Context Window
**Definizione**: La "memoria di lavoro" dell'LLM, misurata in token. Include system prompt, cronologia conversazione, file caricati e risposta in generazione.

**Dimensioni tipiche**:
- GPT-5: 400K token (~300K parole)
- Claude Sonnet 4: 1M token (~750K parole)
- Gemini 2.5 Pro: 1M token (~750K parole)

**Esempio pratico**: Un document di 50 pagine = ~40K token, ben dentro il context window di Claude.

**Quando è rilevante**: Quando lavori con documenti lunghi o conversazioni estese.

**Related**: Token, Knowledge Base

---

## F

### Few-Shot Learning
**Definizione**: Tecnica di prompt engineering che guida l'LLM fornendo 2-5 esempi input-output prima del task reale.

**Esempio**:
```
Trasforma feedback in insights.

Esempio 1:
Input: "Il checkout è troppo lungo"
Output: Theme: Checkout Friction | Impact: High

Esempio 2:
Input: "Mi piacciono le recensioni"
Output: Theme: Social Proof | Impact: Medium

Ora trasforma: "Non capisco se è in stock"
```

**Quando usarlo**: Per task ricorrenti che richiedono formato specifico e consistenza.

**Related**: Zero-Shot, Prompt Engineering

---

### Fine-Tuning
**Definizione**: Ri-addestrare un modello LLM esistente su dati specifici per ottimizzare performance su task particolare. Modifica i pesi del modello.

**Pro**: Performance ottimale per task specifico
**Contro**: Costoso, complesso, richiede expertise tecnico

**Regola pratica**: Inizia sempre con prompt engineering (99% dei casi). Solo se insufficiente, considera fine-tuning.

**Related**: Prompt Engineering, Training

---

## H

### Hallucination
**Definizione**: Quando un LLM genera informazioni plausibili ma false. L'LLM sembra confident anche quando sbaglia.

**Più frequente su**:
- Fatti specifici (date, numeri, citazioni)
- Informazioni recenti (post training cutoff)
- Domini ultra-specializzati

**Come mitigare**:
- ✅ Chiedi fonti esplicite
- ✅ Verifica fatti critici
- ✅ Usa "se non sai, dillo"
- ✅ Fornisci documenti come contesto
- ✅ Abilita web search per info recenti

**Esempio**: Chiedere "Chi ha vinto Oscar 2024?" a modello con cutoff 2023 → potrebbe inventare risposta.

**Related**: Knowledge Cutoff, Grounding

---

## I

### Inference
**Definizione**: Fase di "utilizzo" del modello, quando usiamo ChatGPT o Claude. Il modello applica la conoscenza appresa durante training per generare risposte in tempo reale.

**Analogia**: Se training è "studiare per anni all'università", inference è "rispondere a domanda d'esame".

**Related**: Training, Next Token Prediction

---

## K

### Knowledge Base
**Definizione**: Set di documenti caricati in un Claude Project che forniscono contesto persistente a tutte le conversazioni del project.

**Capacità**: Fino a 100 file o ~200MB di contenuto

**Uso pratico PM**: Carica project charter, requirements docs, status reports → Claude ha sempre contesto aggiornato.

**Related**: Claude Projects, Context Window

---

### Knowledge Cutoff
**Definizione**: Data limite del training del modello. L'LLM non ha conoscenza diretta di eventi successivi.

**Date attuali**:
- Claude Sonnet 4: Agosto 2025
- GPT-5: Settembre 2025
- Gemini 2.5: Marzo 2025

**Impatto**: Info post-cutoff → alto rischio hallucination

**Soluzione**: Web search o fornire documenti aggiornati

**Related**: Hallucination, Training

---

## L

### LLM (Large Language Model)
**Definizione**: Modello di intelligenza artificiale addestrato su enormi quantità di testo per comprendere e generare linguaggio naturale.

**Esempi**: GPT-5 (OpenAI), Claude (Anthropic), Gemini (Google)

**Come funziona**: Pattern matching statistico avanzato basato su architettura Transformer

**Non è**: Vera "intelligenza" o comprensione umana. È predizione statistica sofisticata.

**Related**: Token, Transformer, Training

---

## M

### Meta-Prompting
**Definizione**: Tecnica avanzata in cui chiedi all'LLM di scrivere o ottimizzare prompt per te.

**Esempio**:
```
"Sono un PM e devo creare weekly status reports.
Help me create an effective prompt per generare questi reports automaticamente.

Specificazioni:
- Output: Email professionale per C-level
- Formato: 3 sezioni (Progress, Risks, Next Steps)
- Tone: Data-driven, conciso
- Max 400 parole

Genera prompt riutilizzabile in formato RACE."
```

**Quando usarlo**: Task nuovo non familiare, vuoi ottimizzare prompt esistente, serve template riutilizzabile.

**Related**: RACE Framework, Prompt Engineering

---

### Multimodalità
**Definizione**: Capacità dell'LLM di processare non solo testo, ma anche immagini, audio, video.

**Vision capabilities** (immagini):
- Riconoscere oggetti e scene
- Estrarre testo (OCR)
- Analizzare grafici e diagrammi
- Descrivere layout e composizione

**Uso pratico**: Screenshot dashboard → estrai metrics; Foto whiteboard → trascrivi notes; Wireframe → genera requirements.

**Related**: Claude, GPT-5, Gemini

---

## N

### Next Token Prediction
**Definizione**: Meccanismo base del funzionamento LLM. Il modello calcola probabilità per ogni possibile token successivo e ne sceglie uno (influenzato da temperature).

**Processo**:
1. LLM riceve prompt
2. Calcola probabilità ogni token successivo
3. Sceglie token (con randomness controllata da temperature)
4. Aggiunge al testo e ripete

**Implicazione**: LLM non "pensa" o "capisce" come umani. Predice statisticamente.

**Related**: Token, Temperature, Inference

---

## P

### Prompt Engineering
**Definizione**: L'arte e scienza di scrivere input ottimali per ottenere output desiderati da LLM. Non modifica il modello, solo l'input.

**Pro**: Immediato, flessibile, no costi extra, accessibile a non-tecnici
**Contro**: Limiti di ciò che prompt può fare

**Core Framework**: RACE (Role, Action, Context, Expectations)

**Quando usarlo**: 99% dei casi per utenti business

**Related**: RACE, Chain-of-Thought, Few-Shot, Meta-Prompting

---

### Parametri
**Definizione**: Valori configurabili che controllano il comportamento del modello durante la generazione di testo. I parametri principali includono temperatura, top-p, max tokens, e frequency penalty.

**Parametri chiave**:
- **Temperature** (0.0-1.0): Controlla casualità/creatività dell'output
- **Max Tokens**: Limite lunghezza risposta generata
- **Top-p** (nucleus sampling): Alternativa a temperature per controllo variabilità
- **Frequency Penalty**: Riduce ripetizioni nel testo

**Dove configurarli**:
- API: Specificati nella richiesta
- ChatGPT: Settings → Model parameters (non sempre disponibile)
- Claude Web: Non esposti (usa default ottimali)
- Claude Code: Configurabili per task specifici

**Regola pratica per non-tecnici**: Nella maggior parte dei casi i default funzionano bene. Modifica solo se hai esigenze specifiche (es: brainstorming creativo → alta temperature; documentazione tecnica → bassa temperature).

**Related**: Temperature, LLM, Inference

---

## R

### RACE Framework
**Definizione**: Framework sistematico per costruire prompt efficaci.

**Componenti**:
- **R**ole: Chi deve essere l'LLM? (es: "Sei Senior PM con 10 anni esperienza")
- **A**ction: Task specifico da eseguire (es: "Analizza i rischi del progetto")
- **C**ontext: Background, vincoli, situazione (es: budget, timeline, stakeholder)
- **E**xpectations: Formato output, lunghezza, tone, audience

**Perché funziona**: Copre tutti gli elementi necessari per output preciso e utile.

**Related**: Prompt Engineering, Chain-of-Thought

---

### Role-Based Prompting
**Definizione**: Tecnica che assegna ruolo/persona specifica all'LLM per attivare pattern linguistici appropriati.

**Esempio semplice**: "Sei un CFO. Analizza questo business case." → Output focus su ROI, rischi finanziari

**Multi-Perspective**: Analizzare stesso problema da prospettive multiple (PM, CFO, Cliente) per decisioni complesse.

**Related**: RACE Framework, Meta-Prompting

---

## T

### Temperature
**Definizione**: Parametro che controlla "casualità" dell'output dell'LLM. Range tipico: 0.0 a 1.0

**Temperature Bassa** (0.0-0.3):
- Più deterministica e precisa
- Output ripetibili
- Usa per: analisi dati, documentazione tecnica, risposte fattuali

**Temperature Alta** (0.7-1.0):
- Più creativa e varia
- Output diversi ogni volta
- Usa per: brainstorming, content creation, idee innovative

**Nota**: Molti tool non espongono temperature (es: Claude web). Usa default appropriato.

**Related**: Next Token Prediction, LLM

---

### Token
**Definizione**: Unità minima di testo per un LLM. Può essere una parola, parte di parola, spazio, punteggiatura, emoji.

**Esempi**:
- "hello" = 1 token
- "antidisestablishmentarianism" = 4-5 token
- "🚀" = 1-2 token
- Spazi e punteggiatura contano

**Perché importa**:
- Costi API misurati in token
- Context window limitato in token
- Italiano usa ~1.3x token vs inglese

**Tool utile**: OpenAI Tokenizer (https://platform.openai.com/tokenizer)

**Related**: Context Window, LLM

---

### Training
**Definizione**: Fase di "apprendimento" dell'LLM. Il modello legge miliardi di testi per imparare pattern linguistici e creare "pesi" del modello.

**Caratteristiche**:
- Dura mesi
- Richiede datacenter enormi
- Crea il modello base
- Costosissimo (milioni di $)

**Analogia**: Studiare per anni all'università per acquisire conoscenza

**Related**: Inference, Fine-Tuning, Knowledge Cutoff

---

### Transformer
**Definizione**: Architettura di rete neurale alla base degli LLM moderni. Introdotta nel 2017 nel paper "Attention is All You Need".

**Componente chiave**: Attention mechanism (capacità di "prestare attenzione" a parti rilevanti del contesto)

**Per non-tecnici**: Non serve capirne i dettagli matematici. Basta sapere che è la "struttura base" di GPT, Claude, Gemini, etc.

**Related**: LLM, Attention, Training

---

## Z

### Zero-Shot Learning
**Definizione**: Chiedere all'LLM di eseguire task fornendo solo istruzioni, senza esempi.

**Esempio**: "Scrivi email formale per cliente" (no esempi di email)

**Pro**: Veloce, flessibile
**Contro**: Output più variabile, può non matchare aspettative

**Quando usarlo**: Task semplici o one-off. Per task ricorrenti preferire Few-Shot.

**Related**: Few-Shot Learning, Prompt Engineering

---

## 🔗 Risorse Correlate

- **[FAQ](/risorse/faq)** - Domande frequenti sul workshop
- **[Link Utili](/risorse/link-utili)** - Strumenti e documentazione
- **[Giorno 1](/giorno-1-foundations)** - Torna al corso

---

:::tip 💡 Come Usare il Glossario
- Usa Ctrl/Cmd+F per cercare termini specifici
- Ogni termine include esempi pratici contestualizzati
- "Related" ti aiuta a esplorare concetti collegati
- Torna a consultarlo quando incontri termini nuovi nel corso
:::
