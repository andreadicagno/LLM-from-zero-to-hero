---
title: Few-Shot Learning
description: Guidare l'LLM con esempi concreti per output consistente e formato perfetto
sidebar_position: 4
tags: [prompt-engineering, few-shot, esempi, consistenza]
---

# 🎯 Few-Shot Learning: Guidare con Esempi

> ⏱️ **Durata**: 15 minuti
> 🎯 **Livello**: Base/Intermedio

---

## 🎯 Learning Objectives

- ✅ Comprendere Zero-shot vs Few-shot vs Many-shot
- ✅ Applicare pattern Few-Shot efficaci
- ✅ Selezionare esempi di qualità
- ✅ Creare template Few-Shot riutilizzabili

---

## 📚 Zero-Shot vs Few-Shot vs Many-Shot

### **Zero-Shot** (Nessun Esempio)
- Solo istruzioni testuali
- Pro: veloce, flessibile
- Contro: output variabile, può non matchare aspettative

```
"Scrivi email formale per cliente"
→ Output: formato imprevedibile
```

### **Few-Shot** (2-5 Esempi)
- Istruzioni + alcuni esempi input-output
- Pro: output consistente, formato preciso
- Contro: usa più token

```
"Scrivi email formale. Esempio 1: [...] Esempio 2: [...]"
→ Output: match formato esempi ✅
```

### **Many-Shot** (10+ Esempi)
- Istruzioni + molti esempi
- Pro: massima consistenza
- Contro: context window usage alto

---

## 🎯 Quando Usare Few-Shot

✅ **Usa Few-Shot quando**:
- Formato output specifico richiesto
- Task ricorrente (standardizzazione)
- Stile/tone particolare
- Zero-shot non dà risultati desiderati

❌ **Evita Few-Shot quando**:
- Task semplice auto-esplicativo
- Serve massima creatività/variazione
- Context window limitato

---

## 🛠️ Pattern Few-Shot Efficace

**Struttura Base**:
```
[Task description]

Formato atteso: [descrizione]

Esempio 1:
Input: [esempio input 1]
Output: [esempio output desiderato 1]

Esempio 2:
Input: [esempio input 2]
Output: [esempio output desiderato 2]

Ora applica lo stesso formato a:
Input: [tuo input reale]
Output:
```

---

## 💡 Esempi Pratici per Ruolo

### **Esempio 1: PMO - Status Report Standardization**

```
Trasforma status update informali in formato standard executive.

Formato:
- Status: [RAG]
- Progress: [% e milestone]
- Risks: [top 2]
- Next: [prossimi step]

Esempio 1:
Input: "Tutto ok, testing fatto. Ancora bug minori. Deploy settimana prossima."

Output:
Status: 🟢 Green
Progress: 85% - Testing completato, deployment prep in corso
Risks: (1) Bug minori in QA - mitigation attiva, (2) Nessuno critico
Next: Production deployment settimana 23

Esempio 2:
Input: "Indietro 2 settimane. Cliente cambiato requirements. Deadline a rischio."

Output:
Status: 🔴 Red
Progress: 40% - 2 settimane ritardo per requirement changes
Risks: (1) Scope creep - volatilità requirements, (2) Deadline at risk - rebaseline necessario
Next: Scope review con sponsor, piano rivisto entro venerdì

Ora trasforma:
Input: "Migration quasi finita. Problema database risolto. Manca documentazione."

Output:
```

**Risultato**: Formato consistente automatico ✅

---

### **Esempio 2: Service Design - User Feedback Synthesis**

```
Trasforma raw feedback in insights strutturati.

Formato:
- Theme: [categoria]
- User quote: "[citazione]"
- Insight: [sintesi]
- Impact: [H/M/L]

Esempio 1:
Input: "Checkout troppo lungo, ho abbandonato. Troppe info richieste."

Output:
Theme: Checkout Friction
User quote: "Troppe info richieste"
Insight: Form fields eccessivi causano cart abandonment
Impact: H

Esempio 2:
Input: "Le recensioni aiutano. Vorrei foto prodotti da clienti."

Output:
Theme: Social Proof Enhancement
User quote: "Vorrei foto prodotti da clienti"
Insight: Richiesta user-generated photo content
Impact: M

Ora applica:
Input: "Non capisco se prodotto in stock. Ordino e poi dicono non c'è."

Output:
```

---

### **Esempio 3: Funzionale - Requirements → User Stories**

```
Trasforma requirements in user stories Agile.

Formato:
As a [user type]
I want to [action]
So that [benefit]

Acceptance Criteria:
- [criterio 1]
- [criterio 2]

Esempio 1:
Requirement: "Sistema deve permettere export report in PDF"

User Story:
As a Manager
I want to export reports in PDF format
So that I can share with stakeholders without system access

Acceptance Criteria:
- PDF include tutti i dati visibili
- Export completa in <10 secondi (report fino 50 pagine)
- PDF formato A4 print-ready

Esempio 2:
Requirement: "Admin devono disattivare utenti"

User Story:
As an Administrator
I want to deactivate user accounts
So that I can revoke access preservando dati storici

Acceptance Criteria:
- User disattivati non possono login
- Dati rimangono in sistema (soft delete)
- Riattivazione possibile
- Audit log registra azione

Ora trasforma:
Requirement: "Clienti ricevono notifica quando ordine spedito"

User Story:
```

---

## 📐 Best Practices Selezione Esempi

### **1. Qualità > Quantità**
- 2-3 esempi ben scelti > 10 mediocri
- Ogni esempio deve essere rappresentativo

### **2. Diversità**
- Copri casi tipici diversi
- Include edge case se rilevante
- Es: caso semplice + caso complesso

### **3. Chiarezza**
- Esempi cristallini, zero ambiguità
- Input-output separati esplicitamente
- Formato consistente tra esempi

### **4. Rappresentatività**
- Esempi simili a use case reale
- Evita esempi toy/semplificati

### **5. Progressive Complexity**
- Primo esempio: semplice
- Esempi successivi: più elaborati

---

## ✏️ Esercizio: Crea Template Few-Shot

**Step 1**: Identifica task ricorrente
- Es: Meeting notes → action items

**Step 2**: Definisci formato output
```
Action Item:
- Owner: [nome]
- Task: [descrizione]
- Deadline: [data]
- Priority: [H/M/L]
```

**Step 3**: Crea 2-3 esempi da casi reali

**Step 4**: Testa template con nuovo input

**Step 5**: Raffina e salva

---

## ⚠️ Common Pitfalls

**❌ Esempi Inconsistenti**
- Esempio 1 formato A, Esempio 2 formato B
- → LLM confuso

**❌ Troppo Pochi per Task Complesso**
- Task elaborato, solo 1 esempio
- → Output non affidabile

**❌ Esempi Non Rappresentativi**
- Esempi toy vs use case reale complesso
- → Risultati deludenti su dati veri

**✅ Fix**: Esempi consistenti, numero adeguato, rappresentativi

---

## 🔑 Key Takeaways

:::tip Punti Chiave

✨ **Few-Shot = Guidare con Esempi**: Mostra non solo dire

✨ **2-3 Esempi Ben Scelti Bastano**: Quality over quantity

✨ **Formato Input-Output Chiaro**: Separazione esplicita essenziale

✨ **Template Riutilizzabili**: Per task ricorrenti = massima efficienza

✨ **Consistenza è il Beneficio**: Output standardizzato automaticamente

:::

---

## ➡️ Prossimi Passi

👉 **[Continua con Role-Based Prompting →](./role-based)**

Impara a cambiare prospettiva dell'LLM e creare "panel di esperti" virtuali.

