# Guida Formatore: Questionario Pre-Corso Giorno 1

> 🎯 **Obiettivo**: Raccogliere dati pre-corso per personalizzare contenuti Giorno 1 in base al livello reale dei partecipanti
>
> ⏱️ **Tempo Totale Processo**: ~30 minuti di lavoro formatore distributi su 7 giorni

---

## 📂 File in Questa Cartella

| File | Scopo | Quando Usarlo |
|------|-------|---------------|
| **README-formatore.md** (questo file) | Workflow completo e timeline | Inizio processo (T-7 giorni) |
| **questionario-google-forms-setup.md** | Guida setup Google Forms + domande copy-paste | Setup form (T-7 giorni, 10 min) |
| **analisi-questionari-prompt.md** | Prompt Claude per analisi CSV | Dopo raccolta (T-2 giorni, 5 min) |
| **questionario-content-reference.md** | Reference completo con rationale domande | Consultazione opzionale |

---

## 🗓️ Timeline Completa (7 Giorni Pre-Workshop)

### **T-7 giorni** - Setup e Invio

**Task**: Creare Google Form e inviare ai partecipanti
**Tempo**: 15 minuti

#### Step 1: Crea Google Form (10 min)
1. Apri `questionario-google-forms-setup.md`
2. Segui istruzioni setup rapido
3. Copia-incolla tutte le 25 domande nel form
4. Configura impostazioni (raccogli email, limita 1 risposta)
5. Testa form con compilazione prova

#### Step 2: Invia Link (5 min)
1. Click "Invia" in Google Forms → Copia link
2. Invia email ai partecipanti (template sotto)
3. Aggiungi reminder calendario per follow-up

**📧 Template Email Invio**:
```
Subject: [Action Required] Questionario Pre-Workshop LLM - Deadline [DATA T-2]

Ciao [Nome],

Il nostro workshop "LLM from 0 to Hero 🦸🏻‍♂️" è tra una settimana! 🚀

Per personalizzare i contenuti del Giorno 1 (08/10) in base al tuo livello e obiettivi,
ti chiedo di compilare questo breve questionario:

🔗 [LINK GOOGLE FORM]

⏰ Deadline: [DATA T-2] ore 18:00
⏱️ Tempo stimato: 15-20 minuti
🎯 Scopo: Adattare esempi, velocità, e approfondimenti alle tue esigenze

Non ci sono risposte giuste o sbagliate! L'obiettivo è rendere il workshop il più
utile possibile per te. Le tue risposte restano confidenziali.

Qualche suggerimento:
- Sii onesto/a sulla tua esperienza attuale (ci aiuta a partire dal livello giusto)
- Condividi esempi concreti di task che vorresti automatizzare (diventeranno casi pratici)
- Se usi già prompt, condividine uno (anche semplice) - ci aiuta tantissimo!

Grazie e a presto!
[Il tuo nome]

P.S. Se hai domande sul questionario, scrivimi pure!
```

**✅ Checklist T-7**:
- [ ] Google Form creato con tutte 25 domande
- [ ] Testato form personalmente (verifica UX)
- [ ] Email inviata a tutti gli 8 partecipanti
- [ ] Reminder calendario impostato per T-4 (follow-up) e T-2 (raccolta)

---

### **T-4 giorni** - Follow-Up Parziale

**Task**: Verifica tasso risposta e sollecita chi non ha compilato
**Tempo**: 5 minuti

#### Verifica Risposte
1. Apri Google Forms → Risposte
2. Conta quanti hanno risposto (target: almeno 5/8)
3. Identifica chi manca

#### Follow-Up Gentile (se <5 risposte)

**📧 Template Follow-Up**:
```
Subject: Reminder: Questionario Workshop LLM (Deadline [DATA T-2])

Ciao [Nome],

Quick reminder: mancano 2 giorni alla deadline per il questionario pre-workshop!

Se non l'hai ancora fatto, ti chiedo di compilarlo qui: [LINK]
Ci vogliono solo 15-20 minuti e ci aiuta tantissimo a personalizzare i contenuti.

Se hai problemi tecnici o domande, fammi sapere!

Grazie,
[Nome]
```

**✅ Checklist T-4**:
- [ ] Verificato tasso risposta (target 60%+)
- [ ] Inviato reminder a chi non ha compilato
- [ ] Risposto a eventuali domande partecipanti

---

### **T-2 giorni** - Raccolta e Analisi

**Task**: Chiudere raccolta, esportare dati, analizzare con Claude
**Tempo**: 10 minuti

#### Step 1: Esporta Dati (2 min)
1. Google Forms → Risposte → Icona foglio calcolo verde
2. Nel Google Sheet: File → Scarica → CSV (.csv)
3. Salva come `questionari-giorno1.csv`

#### Step 2: Analizza con Claude (5 min)
1. Apri [claude.ai](https://claude.ai)
2. Nuova conversazione
3. Allega il CSV (click 📎)
4. Apri `analisi-questionari-prompt.md`
5. Copia-incolla il prompt completo
6. Invia

⏱️ Claude genererà report in ~1-2 minuti

#### Step 3: Salva e Studia Report (3 min)
1. Copia report Claude in documento (Google Doc/Notion)
2. Leggi **Section 6: Raccomandazioni Fine-Tuning**
3. Annota le 3 azioni principali da prendere

**✅ Checklist T-2**:
- [ ] CSV esportato con tutte risposte (target 75%+ partecipanti)
- [ ] Analisi Claude completata e salvata
- [ ] Lette raccomandazioni fine-tuning
- [ ] Identificate top 3 modifiche necessarie

---

### **T-1 giorno** - Fine-Tuning Contenuti

**Task**: Applicare raccomandazioni analisi a materiali Giorno 1
**Tempo**: 15-20 minuti

#### Adattamenti Basati su Report Claude

**A) Timing Moduli** (5 min)
- [ ] Rivedi timeline Giorno 1 in base a raccomandazioni Claude
- [ ] Se classe beginner: aggiungi 10-15 min Modulo 1 (rallentare foundations)
- [ ] Se classe advanced: riduci 10 min Modulo 1, aggiungi a Modulo 2 (tecniche avanzate)
- [ ] Aggiorna slide con timing aggiornato

**B) Esempi e Use Case** (10 min)
- [ ] Identifica top 3 use case citati in E1 (es: status report, meeting notes, risk analysis)
- [ ] Prepara 1 template RACE pre-fatto per use case #1 (da mostrare come demo Modulo 2)
- [ ] Adatta esempi slide per includere use case citati (sostituisci generici)
- [ ] Se ruoli specifici dominano (es: 6 PM), enfatizza PM use case

**C) Demo e Interattività** (5 min)
- [ ] Identifica concetti con gap score <2.5 (da report Section 2)
- [ ] Prepara demo extra per questi (es: se Token score basso → tokenizer live demo)
- [ ] Se Claude familiarity bassa (<30% usato Claude) → aggiungi 5 min walkthrough UI inizio Giorno 1
- [ ] Bookmark tool necessari (OpenAI tokenizer, Claude Projects, etc.)

**D) Materiali Pre-Work** (opzionale, 5 min)
Se Claude raccomanda, invia email con:
- [ ] Link risorsa 5-10 min per concetto gap critico (es: video Token basics)
- [ ] Reminder portare esempi task quotidiani
- [ ] Chiarimenti su scope se aspettative non allineate (da Section 6)

**📧 Template Pre-Work** (se necessario):
```
Subject: Workshop LLM Giorno 1 - Preparazione Last Minute (5 min)

Ciao a tutti,

Domani iniziamo! Grazie a chi ha compilato il questionario - ci ha dato insights preziosi.

Per partire al meglio, vi chiedo 5 minuti di prep:

📚 Risorsa Veloce (opzionale ma utile):
[Link a articolo/video su concetto gap - es: "Cosa sono i Token in 5 minuti"]

📝 Porta con te:
- 2-3 esempi di task che fai regolarmente (es: status report, meeting notes)
- Se usi già LLM, un prompt che usi tipicamente (anche semplice)
- Laptop carico + browser aggiornato

🎯 Focus Giorno 1:
In base alle vostre risposte, dedicheremo tempo extra su:
- [Concetto/Framework X da raccomandazioni Claude]
- [Use case Y citato da molti]
- Template pronti per [task Z]

Ci vediamo domani alle 10:00!
[Nome]
```

**✅ Checklist T-1**:
- [ ] Timing moduli aggiornato
- [ ] Esempi personalizzati per top use case
- [ ] Demo extra preparate per gap critici
- [ ] Email pre-work inviata (se necessaria)
- [ ] Materiali finali pronti

---

### **T-0: Giorno Workshop** - Utilizzo Durante Sessione

**Durante il Workshop**:

#### Introduzione (10:00-10:15)
- [ ] **Riferimenti al questionario**: "Dai vostri questionari ho visto che molti vogliono..."
- [ ] **Allinea aspettative**: "So che alcuni si aspettano X, oggi copriremo Y perché..."
- [ ] **Rassicura livello**: "Non preoccupatevi se concetto X era nuovo - è normale, lo vediamo insieme"

#### Modulo 1-2-3
- [ ] **Usa esempi personalizzati** preparati (use case citati)
- [ ] **Monitora ritmo**: se classe beginner, rallenta; se vedi "già lo so" su volti, accelera
- [ ] **Check-in frequenti**: "Questo è chiaro o serve approfondire?" (specialmente su gap identificati)

#### Esercizi Pratici
- [ ] **Grouping intelligente**: usa profili da analisi Claude per pairing (beginner con intermediate)
- [ ] **Use case reali**: incoraggia usare task citati in E1 per esercizi
- [ ] **Quote prompt reali**: "Qualcuno ha condiviso questo prompt nel questionario - vediamo come ottimizzarlo"

#### Q&A e Wrap-Up
- [ ] **Recap**: "Oggi abbiamo coperto X che molti di voi hanno citato come priorità"
- [ ] **Next steps**: "Per Giorno 2, portate i template che create oggi e..."

---

## 📊 Metriche di Successo

**Tasso Risposta Questionario**:
- 🎯 Target: 75%+ (6/8 partecipanti)
- ✅ Ottimo: 100% (tutti)
- ⚠️ Minimo accettabile: 50% (4/8)

Se <50%: procedi con contenuti standard, nessun fine-tuning

**Qualità Risposte**:
- Domande aperte (B4, E1, F3) hanno dettagli concreti (non "N/A")
- Scale 1-5 mostrano variance (non tutti 3)

**Tempo Analisi**:
- Setup form: <15 min
- Analisi Claude: <5 min
- Fine-tuning: <20 min
- **Totale**: <40 min lavoro formatore

**ROI Workshop**:
- Partecipanti più engaged (vedono loro use case)
- Meno domande base (gap colmati proattivamente)
- Esercizi più rilevanti (task reali)

---

## 🔧 Troubleshooting Comuni

### Problema: Basso Tasso Risposta (<50%)

**Causa Possibile**:
- Email finita in spam
- Deadline troppo stretta
- Questionario percepito come troppo lungo

**Soluzione**:
- Follow-up personale (messaggio diretto Slack/WhatsApp)
- Estendi deadline di 1-2 giorni
- Rassicura: "Ci vogliono solo 15 min, nessuna risposta giusta/sbagliata"
- Se davvero impossibile: procedi con contenuti standard

---

### Problema: Risposte Troppo Vaghe (molti "N/A", scale tutte 3)

**Causa Possibile**:
- Partecipanti non capiscono valore questionario
- Domande poco chiare
- Compilazione frettolosa

**Soluzione**:
- Nella email invio, enfatizza: "Le tue risposte aiutano a personalizzare esempi per te"
- Aggiungi esempi di risposta buona nelle istruzioni Google Form
- Per future edizioni: semplifica domande o aggiungi placeholder text più chiari

---

### Problema: Claude Analisi Non Funziona Bene

**Causa Possibile**:
- CSV malformato
- Prompt non completo
- Poche risposte (<3) per analisi significativa

**Soluzione**:
- Verifica CSV apre correttamente in Excel/Numbers
- Assicurati di aver copiato TUTTO il prompt da `analisi-questionari-prompt.md`
- Se <3 risposte: analisi manuale, leggi risposte 1 per 1
- Riprova caricando CSV + prompt in nuova conversazione Claude

---

### Problema: Raccomandazioni Claude Troppo Drastiche

**Esempio**: "Rallenta Modulo 1 di 30 min" ma non hai tempo

**Soluzione**:
- Usa giudizio professionale: prendi suggerimenti come indicazioni, non prescrizioni
- Compromesso: rallenta +10 min invece di +30, ma aggiungi più esempi
- Focus su 1-2 modifiche chiave invece di implementare tutte le 10 raccomandazioni
- Remember: fine-tuning è optimizzazione, non revolution

---

### Problema: Classe Estremamente Eterogenea

**Scenario**: 2 principianti assoluti + 6 avanzati (o viceversa)

**Soluzione**:
- **Durante workshop**:
  - Considera track parallele in Modulo 3 (esercizi base vs advanced)
  - Assegna partecipanti avanzati come peer mentor
  - Prepara materiali bonus per chi finisce prima
- **Comunicazione pre-workshop**:
  - Email a outlier beginner: "Giorno 1 parte da zero, non preoccuparti"
  - Email a outlier advanced: "Ci saranno tecniche avanzate e sfide"

---

## 📚 Best Practices dal Campo

### ✅ Cosa Funziona Bene

**1. Personalizzazione Esempi**:
- Usare use case reali citati (E1) invece di generici → engagement +40%
- "Riconosco questo!" moment crea connessione

**2. Trasparenza Processo**:
- Intro Giorno 1: "Dai questionari ho visto che... quindi oggi focalizziamo..."
- Partecipanti apprezzano essere ascoltati

**3. Quote Anonime**:
- "Qualcuno ha scritto nel questionario: '[quote]' - è perfetto esempio di..."
- Crea senso di comunità ("non sono solo io")

**4. Pre-Work Mirato**:
- Se gap critico (es: nessuno sa cosa sono token) → 5 min video pre-work salva 15 min workshop

**5. Template Pre-Fatti**:
- Preparare 1 template completo per use case #1 citato → demo potente Modulo 2

### ⚠️ Cosa Evitare

**1. Over-Personalizzazione**:
- Non riscrivere interamente workshop per 1 outlier
- Focus su 80% classe, gestisci 20% con attenzioni individuali

**2. Analysis Paralysis**:
- Non passare 2 ore ad analizzare ogni risposta
- Claude report è 90% di ciò che serve, leggi + implementa top 3 raccomandazioni

**3. Promesse Non Mantenibili**:
- Se partecipante chiede use case ultra-specifico fuori scope → non promettere di coprirlo
- Gestisci aspettative: "Interessante! Non riusciamo a coprirlo Giorno 1, ma ecco risorsa..."

**4. Ignorare Red Flags**:
- Se 3+ partecipanti hanno aspettative fuori scope (es: "imparare Python") → DEVI allineare pre-workshop
- Email chiarificazione evita insoddisfazione

---

## 🎯 Checklist Master (Workflow Completo)

### Pre-Workshop

**T-7 giorni**:
- [ ] Google Form creato (questionario-google-forms-setup.md)
- [ ] Tutte 25 domande inserite correttamente
- [ ] Form testato personalmente
- [ ] Email invio inviata con deadline chiara
- [ ] Reminder calendario impostati (T-4 follow-up, T-2 raccolta)

**T-4 giorni**:
- [ ] Verificato tasso risposta (target 60%+)
- [ ] Inviato follow-up a chi non ha compilato
- [ ] Risposto a domande partecipanti

**T-2 giorni**:
- [ ] CSV esportato da Google Forms
- [ ] Analisi Claude completata (analisi-questionari-prompt.md)
- [ ] Report salvato e studiato
- [ ] Identificate top 3 azioni fine-tuning

**T-1 giorno**:
- [ ] Timing moduli aggiustato (se necessario)
- [ ] Esempi personalizzati preparati per top 3 use case
- [ ] Demo extra per gap critici (score <2.5)
- [ ] Template pre-fatto per use case #1 (demo Modulo 2)
- [ ] Email pre-work inviata (se raccomandato da Claude)
- [ ] Bookmark tool necessari (tokenizer, Claude, etc.)

### Durante Workshop (T-0)

**Introduzione**:
- [ ] Riferito a insights questionario ("Molti vogliono...")
- [ ] Allineate aspettative con contenuti reali
- [ ] Rassicurato su livello partenza

**Moduli 1-2-3**:
- [ ] Usati esempi personalizzati
- [ ] Monitorato ritmo (rallentare/accelerare in base a reazioni)
- [ ] Check-in frequenti su concetti gap

**Esercizi**:
- [ ] Grouping intelligente (beginner + intermediate)
- [ ] Incoraggiato uso task reali citati
- [ ] Condiviso prompt esempio dal questionario (anonimizzati)

**Wrap-Up**:
- [ ] Recap priorità coperte
- [ ] Next steps per Giorno 2

### Post-Workshop

- [ ] Note su cosa ha funzionato/non funzionato (per future edizioni)
- [ ] Aggiorna questionario per prossima edizione se necessario

---

## 🚀 Quick Start (TL;DR)

Se hai poco tempo, ecco i 4 step essenziali:

1. **T-7**: Apri `questionario-google-forms-setup.md` → Copia domande in Google Form → Invia link partecipanti (15 min)
2. **T-4**: Verifica risposte → Sollecita chi manca (5 min)
3. **T-2**: Esporta CSV → Carica su Claude con prompt da `analisi-questionari-prompt.md` → Leggi raccomandazioni (10 min)
4. **T-1**: Applica top 3 raccomandazioni a materiali Giorno 1 (15 min)

**Totale**: 45 minuti per personalizzazione significativa workshop.

---

## 📞 Supporto

**Problemi Tecnici Google Forms**:
- [Guida ufficiale Google Forms](https://support.google.com/docs/answer/6281888)

**Problemi Claude**:
- [Claude Documentation](https://docs.anthropic.com/claude/docs)
- Se CSV upload non funziona: prova convertire in TXT o incolla contenuto direttamente in chat

**Domande su Questionario Design**:
- Consulta `questionario-content-reference.md` per rationale ogni domanda
- Modifica domande se non adatte al tuo contesto (mantieni struttura A-F)

---

**Buona preparazione e ottimo workshop! 🚀**

_Ultimo aggiornamento: 2025-10-06_
