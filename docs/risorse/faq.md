---
title: FAQ
description: Domande frequenti sul workshop LLM
sidebar_position: 3
tags:
  - risorse
  - faq
  - supporto
---

# ❓ FAQ - Domande Frequenti

> Risposte alle domande più comuni sul workshop

---

## 📋 Sul Workshop

### Chi dovrebbe partecipare a questo workshop?
Il workshop è progettato per **professionisti non-tecnici** che vogliono sfruttare gli LLM nel loro lavoro quotidiano:
- Project Managers
- PMO
- Service Designers
- Business Analyst / Funzionali
- Chiunque lavori con documenti, analisi, comunicazione

**Non serve** esperienza di programmazione o background tecnico.

---

### Quali sono i prerequisiti?
**Minimi**:
- ✅ Esperienza base con ChatGPT o simili (anche solo provato qualche volta)
- ✅ Laptop con browser moderno (Chrome, Firefox, Safari, Edge)
- ✅ Account Claude.ai (gratuito, crearlo prima del workshop)
- ✅ Connessione internet stabile

**Consigliati ma non obbligatori**:
- Account ChatGPT o Google Gemini (per confronti)
- Familiarità con documenti di lavoro tipici del tuo ruolo

---

### Devo installare software?
Per **Giorno 1 e 2**: NO, tutto via browser web (Claude.ai)

Per **Giorno 3** (Claude Code): SÌ, installeremo Claude Code desktop app
- Disponibile per macOS, Windows, Linux
- Gratuito con account Claude
- Guida installazione fornita nella lezione

---

### Quanto costa partecipare?
Dettagli organizzativi e costi vanno verificati con il facilitatore. Il materiale didattico (questo sito) è accessibile gratuitamente.

**Costi esterni**:
- Account Claude Free: €0 (sufficiente per il workshop)
- Account Claude Pro: €20/mese (opzionale, più capacity e features)

---

## 🎯 Sui Contenuti

### Devo seguire l'ordine dei moduli?
**Sì, fortemente consigliato** per Giorno 1. I contenuti sono progressivi:
- Giorno 1 → fondamentali necessari per tutto il resto
- Giorno 2 → usa concetti del Giorno 1
- Giorno 3 → applica tutto ciò che hai imparato

Puoi rivedere moduli specifici in seguito come reference.

---

### Posso usare ChatGPT invece di Claude?
**Sì, parzialmente**. La maggior parte dei concetti di prompt engineering (Giorno 1) funziona su qualsiasi LLM.

**Però**: Giorno 2 e 3 sono specifici per Claude features (Projects, Output Styles, Claude Code) che non esistono su ChatGPT.

**Consiglio**: Segui con Claude per massimizzare l'apprendimento, poi applica le tecniche anche su altri LLM.

---

### Quanto tempo richiede completare tutto il workshop?
**In sessione live**: 3 giorni × 5 ore = 15 ore totali

**In self-paced** (usando questo sito):
- Giorno 1: 4-5 ore (teoria + esercizi)
- Giorno 2: 4-5 ore (pratica con features)
- Giorno 3: 4-5 ore (progetti applicativi)
- **Totale**: ~12-15 ore

**Best practice**: Distribuisci su più sessioni (2-3 ore per volta) invece di tutto insieme.

---

### I materiali rimangono accessibili dopo il workshop?
**Sì!** Questo sito rimane disponibile permanentemente. Puoi:
- ✅ Consultare contenuti quando serve
- ✅ Rivedere esercizi
- ✅ Scaricare template
- ✅ Condividere link con colleghi (se policy aziendale lo permette)

---

## 💡 Sull'Uso degli LLM

### Gli LLM possono sostituire il mio lavoro?
**No**. Gli LLM sono **strumenti di augmentation**, non replacement.

**Cosa fanno**:
- ✅ Automatizzano task ripetitivi
- ✅ Accelerano draft e bozze
- ✅ Forniscono diverse prospettive
- ✅ Aiutano con analisi e synthesis

**Cosa NON fanno**:
- ❌ Sostituire giudizio umano
- ❌ Prendere decisioni strategiche
- ❌ Capire contesto politico/aziendale
- ❌ Gestire stakeholder

**Risultato**: Più tempo per lavoro ad alto valore, meno su task meccanici.

---

### Posso caricare documenti aziendali confidenziali?
**Dipende dalle policy aziendali**. Considera:

**Claude (Anthropic)**:
- Dati NON usati per training (policy ufficiale)
- Enterprise tier: controllo dati avanzato
- Ma documenti viaggiano su server Anthropic

**Best Practice**:
- ✅ Usa documenti pubblici o anonimi per esercizi workshop
- ✅ Verifica policy aziendali prima di usare dati sensibili
- ✅ Se dubbio, anonimizza/redact info sensibili
- ❌ Mai dati personali (GDPR) o IP critici senza approval

---

### Come verifico se l'output è accurato?
**Sempre verificare output su informazioni critiche**. LLM possono "allucinare" (inventare informazioni plausibili ma false).

**Tecniche di verifica**:
1. **Fact-check critico**: Verifica date, numeri, citazioni
2. **Cross-reference**: Confronta con documenti originali
3. **Chiedi fonti**: "Quali documenti hai usato per questa risposta?"
4. **Usa come draft**: Considera output come prima bozza, non finale
5. **Domain expertise**: Usa la tua conoscenza per sanity check

**Regola d'oro**: LLM = assistente molto capace ma che può sbagliare. Tu sei sempre il decision maker finale.

---

## 🛠️ Problemi Tecnici

### Claude non risponde come mi aspetto. Cosa faccio?
**Debugging checklist**:

1. **Prompt troppo vago?** → Aggiungi contesto e specifiche (usa RACE)
2. **Output inconsistente?** → Usa few-shot examples
3. **Ignora parti del prompt?** → Prompt troppo lungo, semplifica
4. **Inventa informazioni?** → Fornisci documenti come contesto, chiedi fonti
5. **Tono inappropriato?** → Specifica audience e style esplicitamente

Rivedi il modulo **Debugging Prompt** nel Giorno 1 per guida dettagliata.

---

### Ho raggiunto il limite di messaggi. Cosa faccio?
**Account Free**: ~50 messaggi ogni 5 ore (varia per modello)

**Soluzioni**:
- ⏱️ Aspetta reset (5 ore)
- 💳 Upgrade a Claude Pro (€20/mese, 5x capacity)
- 🔄 Usa account alternativo (ChatGPT, Gemini) temporaneamente per continuare esercizi Giorno 1

**Tip**: Scrivi prompt più completi in una volta sola (invece di 10 messaggi brevi) per usare meno capacity.

---

### Il build del sito non funziona localmente. Help?
**Prerequisiti**:
- Node.js 18+ installato
- npm o yarn

**Comandi**:
```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build production
npm run build
```

**Errori comuni**:
- Port 3000 già in uso → Cambia port o killa processo
- Node version vecchia → Update a Node 18+
- Dependencies mancanti → Riesegui `npm install`

---

## 🎓 Post-Workshop

### Come continuo a imparare dopo il workshop?
**Risorse consigliate**:
1. **Pratica quotidiana**: Usa LLM su 1-2 task reali ogni giorno
2. **Template library**: Crea e espandi la tua collezione di prompt
3. **Anthropic Blog**: Segui updates su nuove features
4. **Community**: r/ClaudeAI su Reddit, LinkedIn groups
5. **Corso avanzato**: Anthropic Prompt Engineering course (online)

**Key**: Consistenza > intensità. 15 min/giorno > 3 ore una volta al mese.

---

### Posso condividere template e prompt con il mio team?
**Sì!** Anzi, **incoraggiato**.

**Best practice per condivisione**:
- 📝 Documenta prompt con uso e variabili
- 🔄 Versiona template (v1.0, v1.1, etc.)
- 💬 Raccogli feedback da colleghi
- 📊 Misura tempo risparmiato
- 🎯 Crea repository team (Notion, Confluence, SharePoint)

**Benefit**: Team più efficiente, standardizzazione, cross-learning.

---

### Riceverò un certificato?
Dipende dall'organizzazione del workshop. Verifica con il facilitatore.

**Per self-paced**: Questo è materiale open educational, no certificazione formale. Ma puoi:
- ✅ Menzionare completamento su LinkedIn
- ✅ Aggiungere skills apprese al CV
- ✅ Mostrare deliverable (template, projects) in portfolio

---

### Come do feedback sul workshop?
**Apprezziamo molto il feedback!**

- 📧 Email al facilitatore (se workshop live)
- 💬 Discussioni nel gruppo workshop
- 🐛 Issues GitHub (per bug/typo nel sito)
- ⭐ Suggerimenti per miglioramenti futuri

Il tuo feedback aiuta a migliorare il workshop per i prossimi partecipanti!

---

## 🔗 Risorse Correlate

- **[Glossario](/risorse/glossario)** - Definizioni termini chiave
- **[Link Utili](/risorse/link-utili)** - Strumenti e documentazione
- **[Giorno 1](/giorno-1-foundations)** - Inizia il corso

---

:::tip 💡 Non trovi risposta?
Se hai una domanda non coperta qui:
1. Usa la funzione search del sito (Ctrl/Cmd+K)
2. Consulta il [Glossario](/risorse/glossario) per termini tecnici
3. Contatta il facilitatore del workshop
:::
