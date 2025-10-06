# Questionario Pre-Corso Giorno 1 - Setup Google Forms

> 📋 **Scopo**: Valutare il livello dei partecipanti prima del Giorno 1 per personalizzare contenuti e esempi
>
> ⏱️ **Tempo compilazione**: 15-20 minuti | **Deadline**: 3-5 giorni prima del workshop

---

## 🚀 Setup Rapido Google Forms (10 minuti)

### Step 1: Crea Nuovo Form
1. Vai su [forms.google.com](https://forms.google.com)
2. Click **"+ Vuoto"** per nuovo form
3. Titolo: **"LLM from 0 to Hero - Questionario Pre-Corso Giorno 1"**
4. Descrizione:
   ```
   Benvenuto/a al workshop "LLM from 0 to Hero 🦸🏻‍♂️"!

   Questo breve questionario (15-20 min) ci aiuterà a personalizzare i contenuti del Giorno 1
   in base al tuo livello attuale e ai tuoi obiettivi. Non ci sono risposte giuste o sbagliate!

   Le tue risposte sono confidenziali e usate solo per fine-tuning didattico.
   ```

### Step 2: Copia-Incolla Domande
- Usa le domande nelle sezioni A-F qui sotto
- Per ogni domanda è specificato il **tipo** (scelta multipla, scala, testo)
- Copia testo domanda + opzioni (se presenti)

### Step 3: Impostazioni Consigliate
- ✅ **Raccogli indirizzi email**: ON (per follow-up personalizzato)
- ✅ **Limita a 1 risposta**: ON (se usi account Google aziendale)
- ✅ **Mostra barra progresso**: ON (migliora UX)
- ❌ **Consenti modifica dopo invio**: OFF (evita confusione)

### Step 4: Invio
- Click **"Invia"** → Copia link
- Invia via email/Slack ai partecipanti con subject: **"[Action Required] Questionario Pre-Workshop - Deadline [DATA]"**

---

## 📋 Domande da Inserire in Google Forms

### SEZIONE A: Il Tuo Profilo

#### A1. Nome e Cognome
- **Tipo**: Risposta breve (testo)
- **Obbligatoria**: ✅

---

#### A2. Email
- **Tipo**: Risposta breve (testo)
- **Obbligatoria**: ✅

---

#### A3. Qual è il tuo ruolo principale?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Project Manager (PM)
  - PMO (Project Management Office)
  - Service Designer / UX Designer
  - Functional / Business Analyst
  - Altro (specificare): _______

---

#### A4. Quanti anni di esperienza hai nel tuo ruolo attuale?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - 0-2 anni
  - 3-5 anni
  - 6-10 anni
  - Oltre 10 anni

---

#### A5. Il tuo background formativo è prevalentemente STEM (Scienze, Tecnologia, Ingegneria, Matematica)?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Sì, ho una laurea/esperienza in ambito STEM
  - No, provengo da ambito umanistico/economico/altro
  - Background misto

---

### SEZIONE B: La Tua Esperienza con LLM

#### B1. Con quale frequenza usi attualmente strumenti LLM (ChatGPT, Claude, etc.)?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Mai o quasi mai (meno di 1 volta/mese)
  - Occasionalmente (1-3 volte/mese)
  - Regolarmente (1-3 volte/settimana)
  - Frequentemente (quasi tutti i giorni)
  - Costantemente (più volte al giorno)

---

#### B2. Quali strumenti LLM hai usato almeno una volta? (selezione multipla)
- **Tipo**: Caselle di controllo (selezione multipla)
- **Obbligatoria**: ✅
- **Opzioni**:
  - ChatGPT (OpenAI)
  - Claude (Anthropic)
  - Gemini (Google)
  - Microsoft Copilot
  - Altri (specificare): _______
  - Nessuno

---

#### B3. Per quali attività usi principalmente gli LLM? (selezione multipla)
- **Tipo**: Caselle di controllo
- **Obbligatoria**: ✅
- **Opzioni**:
  - Scrivere email/comunicazioni
  - Riassumere documenti/meeting notes
  - Generare idee/brainstorming
  - Analisi dati/informazioni
  - Scrivere documentazione (report, status, requirements)
  - Risolvere problemi/troubleshooting
  - Imparare nuovi concetti
  - Coding/task tecnici
  - Altro (specificare): _______
  - Non li uso ancora

---

#### B4. Condividi un esempio di prompt che usi tipicamente (anche semplice). Questo ci aiuta a capire il tuo livello di partenza.
- **Tipo**: Paragrafo (testo lungo)
- **Obbligatoria**: ❌ (opzionale)
- **Placeholder**: "Esempio: 'Riassumi questo documento', oppure 'Sei un PM esperto. Analizza i rischi del progetto X considerando...'"

---

### SEZIONE C: Conoscenze Fondamentali LLM

**Istruzioni**: Per ciascun concetto, indica la tua familiarità attuale su scala 1-5:
- 1 = Mai sentito / Non so cosa sia
- 2 = Ne ho sentito parlare, ma concetto vago
- 3 = Comprensione di base
- 4 = Buona comprensione, lo uso/applico
- 5 = Comprensione profonda, potrei spiegarlo ad altri

---

#### C1. Token (l'unità base di testo per gli LLM)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

#### C2. Context Window (la "memoria di lavoro" dell'LLM)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

#### C3. Temperature (controllo creatività/casualità nelle risposte)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

#### C4. Hallucinations (quando LLM "inventa" informazioni)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

#### C5. Training vs Inference (differenza tra fase di apprendimento e uso del modello)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

#### C6. Multimodalità (capacità LLM di lavorare con immagini, non solo testo)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Esperto)

---

### SEZIONE D: Prompt Engineering

#### D1. Hai mai sentito parlare di "Prompt Engineering" (l'arte di ottimizzare i prompt per LLM)?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - No, è la prima volta
  - Sì, ne ho sentito parlare ma non l'ho mai applicato
  - Sì, ho provato qualche tecnica base
  - Sì, lo applico regolarmente con framework specifici

---

#### D2. Conosci/usi framework per strutturare prompt? (es: RACE, Chain-of-Thought, Few-Shot)
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Mai sentito) → 5 (Li uso regolarmente)

---

#### D3. Quanto spesso ottimizzi/raffini un prompt che non ha dato buoni risultati?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Mai, accetto il primo risultato
  - Raramente, solo se veramente insoddisfacente
  - A volte, faccio 1-2 iterazioni
  - Spesso, itero fino a risultato soddisfacente (3+ tentativi)
  - Sistematicamente, applico tecniche di debugging

---

#### D4. Hai mai creato template/prompt riutilizzabili per task ricorrenti (es: weekly status report)?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - No, uso sempre prompt nuovi
  - L'ho pensato ma non l'ho mai fatto
  - Sì, ho 1-2 template salvati
  - Sì, ho una piccola libreria (3-5 template)
  - Sì, ho una libreria estesa (5+ template) e la aggiorno regolarmente

---

### SEZIONE E: Use Cases e Priorità

#### E1. Quali task del tuo lavoro quotidiano vorresti automatizzare/ottimizzare con LLM? (elenco prioritario)
- **Tipo**: Paragrafo
- **Obbligatoria**: ✅
- **Istruzioni**: "Elenca 3-5 task concreti in ordine di priorità. Esempio: 1) Generare weekly status report, 2) Sintetizzare meeting notes, 3) Analizzare rischi progetto..."

---

#### E2. Qual è il principale ostacolo che ti impedisce di usare LLM più efficacemente nel lavoro?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Non so come scrivere prompt efficaci
  - I risultati sono troppo generici/poco utilizzabili
  - Non conosco le funzionalità avanzate degli strumenti
  - Manca tempo per sperimentare
  - Policy aziendali limitano l'uso
  - Non vedo casi d'uso concreti per il mio ruolo
  - Altro (specificare): _______

---

#### E3. C'è un task specifico o un tipo di documento che vorresti imparare a generare/ottimizzare durante il workshop?
- **Tipo**: Paragrafo
- **Obbligatoria**: ❌ (opzionale)
- **Placeholder**: "Esempio: Imparare a trasformare requirements vaghi in user stories strutturate, oppure generare risk analysis actionable..."

---

### SEZIONE F: Auto-Valutazione e Aspettative

#### F1. Come valuti il tuo livello attuale nell'uso di LLM?
- **Tipo**: Scelta multipla
- **Obbligatoria**: ✅
- **Opzioni**:
  - Principiante assoluto (ho usato LLM pochissime volte)
  - Principiante consapevole (uso base, voglio migliorare)
  - Intermedio (uso regolare, ma risultati inconsistenti)
  - Avanzato (uso efficace, cerco tecniche più sofisticate)
  - Esperto (padronanza framework, cerco casi d'uso avanzati)

---

#### F2. Quanto ti senti sicuro/a nell'usare LLM per task lavorativi critici (es: documenti per C-level)?
- **Tipo**: Scala lineare
- **Obbligatoria**: ✅
- **Range**: 1-5
- **Etichette**: 1 (Per nulla sicuro, sempre verifica) → 5 (Molto sicuro, minima revisione)

---

#### F3. Qual è la tua aspettativa principale dal Giorno 1 del workshop?
- **Tipo**: Paragrafo
- **Obbligatoria**: ✅
- **Placeholder**: "Cosa speri di saper fare meglio dopo il Giorno 1? Sii specifico/a."

---

#### F4. C'è qualcosa di specifico che vorresti NON fosse coperto (es: troppo tecnico, già lo conosco bene)?
- **Tipo**: Paragrafo
- **Obbligatoria**: ❌ (opzionale)
- **Placeholder**: "Aiutaci ad evitare contenuti ridondanti o non rilevanti per te."

---

## ✅ Checklist Post-Setup

Dopo aver creato il form:

- [ ] Tutte le 25 domande inserite
- [ ] Domande obbligatorie marcate correttamente (A1-A5, B1-B3, C1-C6, D1-D4, E1-E2, F1-F3)
- [ ] Impostato "Raccogli indirizzi email"
- [ ] Impostato "Limita a 1 risposta"
- [ ] Testato form con compilazione test
- [ ] Link condiviso con partecipanti
- [ ] Deadline comunicata chiaramente (suggerito: 3-5 giorni prima del workshop)

---

## 📊 Dopo la Raccolta

1. **Esporta risposte**: Google Forms → Risposte → Icona Excel verde → Crea foglio di lavoro
2. **Download CSV**: Da Google Sheets → File → Scarica → CSV (.csv)
3. **Usa prompt di analisi**: Carica CSV su Claude con il prompt in `analisi-questionari-prompt.md`

---

## 💡 Pro Tips

**Comunicazione Invio**:
```
Subject: [Action Required] Questionario Pre-Workshop LLM - Deadline [DATA]

Ciao [Nome],

Tra pochi giorni iniziamo il workshop "LLM from 0 to Hero 🦸🏻‍♂️"! 🚀

Per personalizzare i contenuti del Giorno 1 in base al tuo livello e obiettivi,
ti chiedo di compilare questo breve questionario (15-20 minuti max):

🔗 [LINK GOOGLE FORM]

⏰ Deadline: [DATA]
⏱️ Tempo stimato: 15-20 minuti

Non ci sono risposte giuste o sbagliate, e le informazioni restano confidenziali.
L'obiettivo è rendere il workshop il più utile possibile per te!

Grazie e a presto!
[Il tuo nome]
```

**Follow-up** (se qualcuno non compila entro 2 giorni dalla deadline):
- Messaggio diretto Slack/email: "Ciao! Manca poco al workshop. Hai avuto modo di compilare il questionario? Lo trovi qui: [LINK]. Ci bastano 15 minuti! 🙏"

---

**🎯 Prossimo Step**: Dopo raccolta, vai a `analisi-questionari-prompt.md` per analizzare i risultati con Claude.
