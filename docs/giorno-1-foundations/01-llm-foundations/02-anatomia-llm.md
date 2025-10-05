---
title: Anatomia di un LLM
description: Comprendi come funziona un LLM sotto il cofano, senza tecnicismi eccessivi
sidebar_position: 2
tags: [llm-foundations, architettura, training, inference]
---

# Come Funziona un LLM

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Comprendere l'architettura base di un LLM (transformer) senza matematica
- [ ] Distinguere chiaramente Training da Inference
- [ ] Confrontare modelli (GPT, Claude, Gemini) e scegliere per il tuo use case

---

## 📚 Architettura LLM Semplificata

:::tip 💡 Analogia: LLM come Super-Calcolatrice Linguistica
Un LLM è essenzialmente una **calcolatrice di probabilità** incredibilmente sofisticata che:
- Prende testo in input
- Calcola quale parola/token viene probabilmente dopo
- Ripete il processo per generare risposte complete
:::

---

### Componenti Base (No Matematica!)

**1. Input Layer - Trasformazione Testo → Numeri**

```
Testo: "Il gatto è"
   ↓
Tokenizzazione
   ↓
Token: ["Il", " gatto", " è"]
   ↓
Embeddings (numeri che rappresentano significato)
   ↓
[0.23, -0.45, 0.89, ...] (vettori)
```

Gli LLM non "capiscono" il testo come noi. Tutto diventa numeri (vettori) che rappresentano significati.

---

**2. Transformer Layers - Elaborazione**

Il cuore dell'LLM: decine/centinaia di "strati" neurali che:
- Analizzano relazioni tra parole
- Identificano pattern linguistici
- Calcolano contesto e significato

:::info 🔬 Quanto è Grande?
- **GPT-5**: Sistema unificato multi-modello (dimensione non dichiarata)
- **Claude Sonnet 4**: Non dichiarato ufficialmente (stimato ~500+ miliardi)
- **Gemini 2.5 Pro**: Non dichiarato (stimato ~1+ trilione)

**Parametri** = i "pesi" che determinano come il modello elabora informazioni. I modelli 2025 usano architetture più efficienti, quindi dimensione non è tutto.
:::

**Analogia**: Pensa ai parametri come alle connessioni sinaptiche nel cervello umano. Più connessioni = più "conoscenza" potenziale.

---

**3. Output Layer - Probabilità Next Token**

```
Input: "Il gatto è seduto sul..."

LLM calcola probabilità:
- "tappeto" → 45%
- "divano" → 30%
- "tavolo" → 15%
- "tetto" → 8%
- altro → 2%

Scelta (influenzata da temperature):
→ "tappeto"
```

L'LLM **non sta pensando**. Sta calcolando statisticamente quale token è più probabile basandosi su:
- Pattern visti durante training
- Contesto fornito
- Parametri del modello

---

## 🏋️ Training vs Inference

### Training: Creare il Modello

**Cos'è**: La fase di "apprendimento" (mesi, datacenter enormi)

**Processo**:
1. **Raccolta Dati**: Miliardi di testi da internet, libri, codice
2. **Training**: Il modello "legge" tutto e impara pattern linguistici
3. **Aggiustamento Pesi**: Parametri vengono ottimizzati per predire correttamente
4. **Fine-Tuning**: Raffinamento su compiti specifici
5. **Alignment (RLHF)**: Addestramento per sicurezza e utilità

**Chi lo fa**: OpenAI, Anthropic, Google (non gli utenti!)

**Costi**: Milioni di dollari, mesi di tempo, datacenter enormi

:::warning 💡 Importante
Come utente, **NON fai training**. Usi modelli già addestrati.

Training = studiare all'università per 5 anni
:::

---

### Inference: Usare il Modello

**Cos'è**: La fase di "utilizzo" (quando usiamo ChatGPT/Claude)

**Processo**:
1. Scrivi prompt
2. LLM applica conoscenza appresa
3. Genera risposta token-by-token
4. Ti mostra risultato

**Chi lo fa**: Tu, ogni volta che usi ChatGPT/Claude

**Costi**: Centesimi per richiesta (o €20/mese subscription)

:::tip ✅ Questo È Inference
Ogni volta che:
- Chiedi a ChatGPT qualcosa
- Claude scrive codice per te
- Generi un'immagine con DALL-E

Stai facendo **inference**, non training.
:::

---

### Confronto Training vs Inference

| Aspetto | Training | Inference |
|---------|----------|-----------|
| **Quando** | Una volta (per creare modello) | Ogni volta che lo usi |
| **Chi** | Aziende AI (OpenAI, Anthropic) | Tu (utente finale) |
| **Costi** | Milioni $ | Centesimi |
| **Tempo** | Settimane/Mesi | Secondi |
| **Hardware** | Datacenter, 1000+ GPU | 1 computer/server |
| **Cosa fa** | Impara pattern dai dati | Applica conoscenza appresa |

---

## 🤖 Confronto tra Modelli

### GPT-5 (OpenAI)

**Famiglia**: GPT-5, GPT-5 mini, GPT-5 nano

**Architettura**: Sistema unificato con router intelligente che sceglie automaticamente tra modelli fast e deep reasoning

**Punti di Forza**:
- ✅ Performance eccezionale su math (94.6% AIME), coding (74.9% SWE-bench)
- ✅ Context window 400K token (~300K parole, ~1200 pagine)
- ✅ 45% meno hallucinations con web search attivo
- ✅ Integrazioni robuste (API, plugin, ecosystem maturo)
- ✅ Varianti economiche (mini, nano) per task più semplici

**Punti di Debolezza**:
- ❌ Context più limitato vs Claude/Gemini (400K vs 1M)
- ❌ Pricing più alto per modello principale
- ❌ A volte ancora "verbose"

**Usa GPT-5 quando**:
- Coding complesso e debugging
- Matematica e reasoning quantitativo
- Hai bisogno integrazioni API consolidate
- Task con budget ottimizzato (usa mini/nano)

---

### Claude Sonnet 4 (Anthropic)

**Famiglia**: Claude Sonnet 4 (modello principale 2025)

**Context Window**: 1M token (1 milione!) = ~750K parole, ~3000 pagine

**Punti di Forza**:
- ✅ Context window più grande sul mercato (1M token)
- ✅ Precisione e affidabilità eccezionale
- ✅ Ideale per analisi documenti massivi (codebase interi, contratti, research)
- ✅ Sicurezza e alignment top-tier
- ✅ Vision capabilities avanzate
- ✅ Prompt caching per ridurre costi su context lunghi

**Punti di Debolezza**:
- ❌ Pricing più alto oltre 200K context ($6/1M vs $3/1M)
- ❌ Community più piccola vs OpenAI
- ❌ A volte troppo "cauto" su task borderline

**Usa Claude Sonnet 4 quando**:
- Analisi documenti enormi (100+ pagine, codebase completi)
- Conversazioni multi-session complesse
- Precisione assoluta richiesta (legal, compliance, medical)
- Budget disponibile per long context (con prompt caching)

---

### Gemini 2.5 (Google)

**Famiglia**: Gemini 2.5 Pro, Flash, Flash-Lite

**Context Window**: 1M token + Deep Think reasoning mode

**Punti di Forza**:
- ✅ Multimodalità nativa avanzata (testo, audio, immagini, video, code)
- ✅ Context window 1M token (pari a Claude)
- ✅ Deep Think mode per reasoning complesso
- ✅ Integrazione totale Google Workspace (Gmail, Drive, Calendar, Meet)
- ✅ Web search nativo sempre attivo
- ✅ Varianti ottimizzate (Flash per velocità, Flash-Lite per costi)
- ✅ 20-30% più efficiente su token usage

**Punti di Debolezza**:
- ❌ Ancora in evoluzione vs GPT/Claude (meno maturo)
- ❌ Community più piccola, meno risorse
- ❌ Adoption enterprise più limitata

**Usa Gemini 2.5 quando**:
- Ecosystem Google Workspace centrale nel workflow
- Multimodalità critica (video, audio nativi)
- Serve web search real-time integrato
- Budget optimization con Flash/Flash-Lite

---

## 💡 Come Scegliere il Modello

### Decision Tree

```
Hai documenti enormi da analizzare? (>100 pagine, codebase completi)
├─ SÌ → Claude Sonnet 4 (1M context) o Gemini 2.5 Pro
└─ NO → ↓

Fai principalmente coding/math complesso?
├─ SÌ → GPT-5 (94.6% AIME, 74.9% SWE-bench)
└─ NO → ↓

Usi Google Workspace come hub centrale?
├─ SÌ → Gemini 2.5 (integrazione nativa Gmail, Drive, Meet)
└─ NO → ↓

Budget limitato ma serve qualità?
├─ SÌ → GPT-5 mini/nano (ottimo rapporto qualità/prezzo)
└─ NO → ↓

Precisione assoluta critica? (legal, medical, compliance)
├─ SÌ → Claude Sonnet 4
└─ NO → GPT-5 o Gemini 2.5 (generale)
```

---

### Esempi per Ruolo

**PM/PMO**:
- **Analisi portfolio documenti massicci**: Claude Sonnet 4 (1M context)
- **Quick status updates**: GPT-5 nano (veloce, economico $0.05/1M)
- **Risk analysis complessa con math**: GPT-5 (reasoning superiore)

**Service Designer**:
- **User research synthesis (100+ interviste)**: Claude Sonnet 4 o Gemini 2.5
- **Brainstorming features creative**: GPT-5 o Gemini 2.5 Flash
- **Analisi competitor screens multimodali**: Gemini 2.5 (video/immagini native)

**Funzionale**:
- **Requirements → User Stories (grandi volumi)**: Claude Sonnet 4
- **Test case generation con logic**: GPT-5 (94% math accuracy)
- **Documentation analysis cross-sistema**: Claude Sonnet 4 (context enorme)

---

## 🔬 Parametri Modello: Più Grande = Migliore?

**Risposta breve**: No, non sempre.

### Dimensione vs Capability

| Modello | Architettura | Use Case Ottimale |
|---------|--------------|-------------------|
| GPT-5 | Sistema unificato multi-model | Task complessi, reasoning, coding |
| GPT-5 mini | Modello ottimizzato | Balance qualità/velocità/costo |
| GPT-5 nano | Modello lightweight | Task semplici, alte volume, budget |
| Claude Sonnet 4 | Modello unificato | Documenti massivi, precisione |
| Gemini 2.5 Pro | Deep Think enabled | Reasoning complesso, multimodale |
| Gemini 2.5 Flash | Ottimizzato velocità | Processing alto volume |

**Trade-off 2025**:
- Modelli flagship: più capability, context enorme, costi più alti
- Modelli ottimizzati (mini, Flash): velocità, costi bassi, qualità ancora buona
- Architetture moderne: efficienza migliorata (dimensione ≠ tutto)

:::tip 💡 Regola Pratica
Usa il **modello giusto** per il task (non sempre il più grande).

- Task routine (emails, summaries) → Modelli economici (GPT-5 nano, Gemini Flash-Lite)
- Task complessi (analysis, coding) → Flagship (GPT-5, Claude Sonnet 4, Gemini 2.5 Pro)
- Documenti enormi (>500 pagine) → Long context (Claude Sonnet 4: 1M tokens)
- Budget ottimizzato → GPT-5 mini (ottimo rapporto qualità/prezzo)
:::

---

## ⚠️ Common Misconceptions

### ❌ Mito 1: "LLM Capisce come un Umano"

**Realtà**: LLM fa **pattern matching statistico**. Non ha:
- Vera comprensione
- Coscienza
- Modello del mondo reale
- Intenzionalità

**Implicazione**: Può fare errori logici che un bambino non farebbe.

---

### ❌ Mito 2: "Posso Addestrare GPT sui Miei Dati"

**Realtà**: Come utente, **non puoi fare training** (troppo costoso).

Puoi fare:
- ✅ **Prompt Engineering**: ottimizzare input
- ✅ **Fine-Tuning** (OpenAI API): leggero re-training ($$$)
- ✅ **RAG** (Retrieval Augmented Generation): fornire documenti nel contesto

Per 99% use case: **Prompt Engineering è sufficiente**.

---

### ❌ Mito 3: "LLM Ha Accesso a Internet"

**Realtà**: Dipende dal modello e configurazione:
- GPT-5 (ChatGPT): SÌ, con web browsing attivato
- Claude Sonnet 4: SÌ, se abiliti web search (beta)
- Gemini 2.5: SÌ, web search nativo sempre attivo
- API GPT-5/Claude (base): NO (solo training data)

**Knowledge Cutoff**: Modelli hanno data limite training:
- GPT-5: settembre 2025
- Claude Sonnet 4: agosto 2025
- Gemini 2.5 Pro: marzo 2025 (ma web search compensa)

Post-cutoff: usa web search o fornisci documenti aggiornati.

---

## 💡 Esempio Pratico: Document Analysis

**Scenario PM**: Devi analizzare 50 status report (200 pagine totali)

### Scelta Modello

**Calcolo Token**:
- 200 pagine × 300 parole/pagina = 60,000 parole
- ~80,000 token

**Opzioni**:

✅ **GPT-5** (400K context):
- 80K token < 400K → OK
- Funziona bene, costo ~$0.90 per analysis

✅ **Claude Sonnet 4** (1M context):
- 80K token < 1M → AMPIO MARGINE
- Context enorme, ideale per aggiungere context addizionale
- Costo: $0.24 (sotto 200K threshold)
- **Scelta ottimale per long context**

✅ **Gemini 2.5 Pro** (1M context):
- 80K token < 1M → OK
- Se hai già workspace Google, integrazione nativa
- Costo competitivo

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Architettura**:
- LLM = calcolatrice probabilità linguistica (transformer)
- Input testo → numeri → elaborazione → output probabilità token

**Training vs Inference**:
- **Training**: creare modello (aziende AI, milioni $, mesi)
- **Inference**: usare modello (tu, centesimi, secondi)
- Come utente: fai solo inference, non training

**Scegliere Modello**:
- **Claude Sonnet 4**: documenti enormi (1M context), precisione massima, compliance
- **GPT-5**: coding/math avanzati, reasoning, integrazioni API mature
- **Gemini 2.5**: Google Workspace, multimodalità nativa, web search integrato
- **Budget**: GPT-5 mini/nano, Gemini Flash/Flash-Lite

**Parametri**:
- Più grande ≠ sempre migliore
- Usa modello più piccolo che risolve il problema
- Trade-off: capability vs velocità vs costo

**Misconceptions**:
- LLM non "capisce" veramente
- Non puoi fare training (troppo costoso)
- Knowledge cutoff esiste → usa web search per info recenti

:::

---

## 🔗 Risorse Aggiuntive

**Approfondimenti**:
- 📖 [Transformer Architecture Explained](https://jalammar.github.io/illustrated-transformer/) - Visualizzazione interattiva
- 📖 [GPT vs Claude Comparison](https://www.anthropic.com/claude) - Docs ufficiali
- 📖 [Glossario - Parametri](/docs/risorse/glossario#parametri) - Definizione tecnica

**Tool**:
- 🔧 [Artificial Analysis](https://artificialanalysis.ai) - Confronto performance modelli
- 🔧 [LLM Benchmarks](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) - Ranking community

---

## ➡️ Prossimi Passi

Ora che comprendi come funzionano gli LLM:

1. **Rifletti**: Quale modello usi di solito? È il più adatto ai tuoi task?
2. **Sperimenta**: Prova lo stesso prompt su GPT-4 vs Claude, confronta risultati
3. **Continua**: [Come "Ragionano" gli LLM](ragionamento) - Next token prediction

---

:::info 💬 Discussione
**Domande da considerare**:
- Hai mai notato differenze di qualità tra GPT e Claude?
- Quando ti serve context window grande vs quando basta uno piccolo?
- Per i tuoi use case, quale modello sarebbe ottimale?
:::
