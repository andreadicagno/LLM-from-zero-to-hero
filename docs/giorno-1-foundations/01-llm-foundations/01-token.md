---
title: Token - L'Alfabeto degli LLM
description: Comprendi cos'è un token e perché è fondamentale per usare gli LLM efficacemente
sidebar_position: 1
tags: [llm-foundations, token, ottimizzazione, costi]
---

# Token: l'Alfabeto degli LLM

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base

---

## 🎯 Learning Objectives

Al termine di questa sezione sarai in grado di:

- [ ] Spiegare cos'è un token e come funziona la tokenizzazione
- [ ] Riconoscere come i token impattano costi e context window
- [ ] Applicare tecniche di ottimizzazione dei token nei tuoi prompt

---

## 📚 Cos'è un Token?

**Definizione semplice**: Un **token** è l'unità minima di testo che un LLM può processare.

:::tip 💡 Analogia Utile
Immagina un LLM come una persona che legge un libro. Per noi umani, l'unità minima è la **lettera**, ma per l'LLM è il **token**.

Un token può essere:
- Una parola intera (`"ciao"` = 1 token)
- Parte di una parola (`"anticostituzionalmente"` = 4+ token)
- Un carattere speciale (`"!"` = 1 token)
- Uno spazio (sì, anche gli spazi contano!)
:::

---

## 📖 Come Funziona la Tokenizzazione

La **tokenizzazione** è il processo di dividere il testo in token.

### Esempi Pratici

**Parole Comuni** (frequenti in training data):
```
"hello" → 1 token
"world" → 1 token
"ciao" → 1 token
```

**Parole Rare o Lunghe**:
```
"antidisestablishmentarianism" → 6 token
"elettroencefalografista" → 7 token
```

**Spazi e Punteggiatura**:
```
"Hello, world!" → 4 token
  │      │   │
  │      │   └─ "!" (1 token)
  │      └───── " world" (1 token - spazio incluso)
  └──────────── "Hello" (1 token)
              └─ "," (1 token)
```

**Emoji**:
```
"🚀" → 1 token
"😀" → 1 token
"👍🏼" → 2 token (emoji + modificatore tono pelle)
```

**Codice**:
```python
"def hello():" → 5 token
# "def", " hello", "(", ")", ":"
```

---

## 🌍 Differenze tra Lingue

:::warning ⚠️ Italiano usa PIÙ Token dell'Inglese
Gli LLM moderni sono principalmente addestrati su testo inglese. Questo significa:

- **Inglese**: parole comuni = 1 token
- **Italiano**: stessa parola potrebbe essere 2-3 token

**Esempio**:
- `"project"` (inglese) = 1 token
- `"progetto"` (italiano) = 2 token
:::

**Impatto Pratico**:
- Costi API: prompt in italiano costa di più
- Context window: stessa quantità di informazioni "pesa" di più in italiano
- Velocità: generazione leggermente più lenta

---

## 🔧 Tool per Visualizzare Token

### OpenAI Tokenizer

Lo strumento online più utile: **[OpenAI Tokenizer](https://platform.openai.com/tokenizer)**

**Come usarlo**:
1. Vai su https://platform.openai.com/tokenizer
2. Incolla il tuo testo
3. Vedi quanti token usa (con colori diversi per ogni token)

💡 **Esercizio Rapido**:
- Vai al tokenizer
- Incolla: "Scrivi un status report del progetto per il cliente"
- Quanti token conta? (Risposta: ~10-12 token)

---

## 💰 Perché i Token Importano

### 1. **Costi API**

Se usi API come GPT-5 o Claude, paghi **per token**:

| Modello | Costo (per 1M token input) | Costo (per 1M token output) |
|---------|---------------------------|----------------------------|
| GPT-5 | $1.25 | $10 |
| Claude Sonnet 4 | $3 (fino 200K), $6 (oltre) | $15 |
| GPT-5 mini | $0.25 | $2 |
| GPT-5 nano | $0.05 | $0.40 |

**Esempio Concreto PM**:
- Status report settimanale: ~800 parole ≈ 1000 token input + ~500 token output
- Ripetuto 50 volte/anno = 50K input + 25K output token
- Con GPT-5: ~$0.31/anno (trascurabile)
- Ma 10 PM che lo fanno = ~$3/anno (accettabile)

:::tip 💡 Quando Preoccuparsi dei Costi
Per utenti individuali con ChatGPT/Claude subscription: **non preoccuparti**.

Quando importa:
- API usage massivo (100+ richieste/giorno)
- Prompt enormi (10K+ token ripetuti)
- Enterprise con molti utenti
:::

---

### 2. **Context Window**

Il **context window** (la "memoria" dell'LLM) è misurato in token.

| Modello | Context Window |
|---------|----------------|
| GPT-5 | 400,000 token (~300,000 parole) |
| Claude Sonnet 4 | 1,000,000 token (~750,000 parole) |
| Gemini 2.5 Pro | 1,000,000 token (~750,000 parole) |

**Esempio PMO**:
Vuoi analizzare 10 status report contemporaneamente:
- 10 report × 800 parole ≈ 10,000 token
- OK per tutti i modelli moderni (GPT-5: 400K, Claude Sonnet 4: 1M)

➡️ Approfondiremo context window in [Sezione 4 - Contesto](contesto)

---

## 🎯 Ottimizzazione Token

### Quando Ottimizzare

✅ **Ottimizza quando**:
- Vicino al limite context window
- Uso API massivo (costi)
- Prompt molto lunghi (>1000 token)

❌ **Non ottimizzare quando**:
- Prompt occasionali
- Chiarezza > brevità
- Subscription plan (non API pay-per-token)

---

### Tecniche di Ottimizzazione

**1. Rimuovi Ripetizioni**

❌ **Prima** (inefficiente):
```
Analizza i rischi del progetto. I rischi del progetto sono molto importanti.
Voglio che tu mi dica quali rischi del progetto sono critici.
```
→ ~25 token

✅ **Dopo** (ottimizzato):
```
Analizza e identifica i rischi critici del progetto.
```
→ ~8 token (risparmio: 70%)

---

**2. Sii Conciso ma Chiaro**

❌ **Prima**:
```
Mi piacerebbe se tu potessi gentilmente considerare la possibilità di scrivere
per me un riassunto del documento che ho allegato.
```
→ ~20 token

✅ **Dopo**:
```
Riassumi il documento allegato.
```
→ ~5 token

:::warning ⚠️ Non Sacrificare la Chiarezza
```
❌ TROPPO conciso: "doc summ"
✅ Giusto equilibrio: "Riassumi il documento allegato"
```
:::

---

**3. Evita Parole Non Necessarie**

**Rimuovi**:
- "per favore", "gentilmente" (LLM non è permaloso!)
- "vorrei che tu", "mi piacerebbe se"
- Introduzioni lunghe

❌ **Prima**:
```
Buongiorno! Spero tu stia bene. Vorrei chiederti se potresti aiutarmi
con un task. Mi piacerebbe se tu potessi analizzare...
```

✅ **Dopo**:
```
Analizza...
```

---

**4. Usa Abbreviazioni (quando chiare)**

**Nel contesto PM/PMO**:
- PM, PMO, BA (se nel tuo dominio)
- Q1, Q2, KPI, ROI
- Attenzione: solo se LLM le conosce dal contesto

❌ **Non inventare abbreviazioni oscure**: "STKREP" per status report

---

## 💡 Esempi Pratici per Ruolo

### PM - Status Report

❌ **Non ottimizzato** (~50 token):
```
Ciao! Mi aiuteresti per favore a scrivere uno status report professionale
per il mio progetto che sto gestendo? Vorrei includere progress, risks e next steps.
Grazie mille!
```

✅ **Ottimizzato** (~15 token):
```
Scrivi status report con: progress, risks, next steps.

[Dati progetto qui]
```

**Risparmio**: 70% token

---

### Service Designer - User Research Synthesis

❌ **Non ottimizzato** (~40 token):
```
Ho condotto delle interviste con alcuni utenti e ho raccolto molte note.
Mi piacerebbe se tu potessi aiutarmi a organizzare tutti questi insights
che ho raccolto in modo strutturato.
```

✅ **Ottimizzato** (~12 token):
```
Sintetizza insights dalle interviste utente:

[Note interviste qui]
```

---

### Funzionale - User Stories

❌ **Non ottimizzato** (~35 token):
```
Per cortesia, potresti trasformare questi requirements di business che
il cliente mi ha fornito in user stories seguendo il formato agile standard?
```

✅ **Ottimizzato** (~10 token):
```
Trasforma requirements in user stories formato Agile:

[Requirements qui]
```

---

## ✏️ Esercizio Pratico

**Task**: Ottimizza questo prompt

```
Buongiorno! Spero che tu possa aiutarmi con un compito importante.
Ho un meeting molto importante domani mattina con il mio capo e devo
presentare i risultati del progetto. Potresti per favore aiutarmi a
scrivere una presentazione che sia chiara e professionale? Vorrei che
includesse una panoramica del progetto, i risultati ottenuti, le sfide
che abbiamo affrontato e i prossimi passi. Sarebbe fantastico se potessi
rendere tutto molto chiaro e conciso. Grazie mille per il tuo aiuto!
```

**Quanti token?** Usa il [tokenizer](https://platform.openai.com/tokenizer) per scoprirlo.

<details>
<summary>👉 Clicca per la soluzione ottimizzata</summary>

**Versione Ottimizzata** (~15 token vs ~85 originali):

```
Scrivi presentazione progetto per C-level meeting:
- Overview progetto
- Risultati ottenuti
- Sfide affrontate
- Prossimi passi

Tone: professionale, conciso.
```

**Tecniche applicate**:
1. Rimossi saluti e ringraziamenti
2. Eliminato "vorrei che tu", "mi piacerebbe"
3. Struttura bullet per chiarezza
4. Formato diretto

**Risultato**: Stessa chiarezza, 82% token in meno!

</details>

---

## 🔑 Key Takeaways

:::tip ✨ Punti Chiave da Ricordare

**Cos'è un Token**:
- Unità minima di testo per LLM (≠ parola)
- Una parola comune = 1 token, parola rara = multipli token

**Perché Importa**:
- Determina **costi** API (pay-per-token)
- Consuma **context window** (memoria limitata)
- Influenza **velocità** di generazione

**Come Ottimizzare**:
- Rimuovi ripetizioni e parole superflue
- Sii conciso MA chiaro
- Usa strutture (bullet, sezioni) per chiarezza

**Regola d'Oro**:
- Chiarezza > Brevità
- Ottimizza solo quando ha senso (API massive, context limits)
- 1 parola inglese ≈ 1 token | 1 parola italiana ≈ 1.3 token

:::

---

## 🔗 Risorse Aggiuntive

**Tool**:
- 🔧 [OpenAI Tokenizer](https://platform.openai.com/tokenizer) - Visualizza token in real-time
- 🔧 [Anthropic Token Counter](https://docs.anthropic.com/claude/reference/token-counting) - Per Claude

**Approfondimenti**:
- 📖 [Token Economics](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) - Guida OpenAI
- 📖 [Glossario - Token](/docs/risorse/glossario#token) - Definizione completa

---

## ➡️ Prossimi Passi

Ora che comprendi i token:

1. **Pratica**: Analizza 2-3 tuoi prompt tipici con il tokenizer
2. **Ottimizza**: Prova a ridurre token del 30-50% mantenendo chiarezza
3. **Continua**: [Anatomia di un LLM](anatomia-llm) - Scopri come LLM usa i token

---

:::info 💬 Hai Domande?
**Q: Devo sempre contare i token manualmente?**
A: No! Solo quando lavori vicino ai limiti. Per uso normale, non serve.

**Q: Meglio scrivere in inglese per risparmiare token?**
A: Se sei comfortable con l'inglese, sì (risparmio 20-30%). Ma chiarezza conta di più.

**Q: Quanto costa in media un prompt?**
A: Con subscription ChatGPT/Claude: €0. Con API GPT-4: ~$0.01-0.05 per conversazione tipica.
:::
