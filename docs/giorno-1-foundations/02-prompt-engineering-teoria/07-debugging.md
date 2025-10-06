---
title: Debugging e Ottimizzazione Prompt
description: Diagnosi sistematica e troubleshooting per prompt inefficaci
sidebar_position: 7
tags: [prompt-engineering, debugging, optimization, troubleshooting]
---

# 🔧 Debugging e Ottimizzazione Prompt

> ⏱️ **Durata**: 18 minuti
> 🎯 **Livello**: Intermedio/Avanzato

---

## 🎯 Learning Objectives

- ✅ Riconoscere segnali prompt debole
- ✅ Diagnosticare problemi specifici
- ✅ Applicare tecniche troubleshooting
- ✅ Iterare verso prompt ottimale

---

## 🚩 Segnali di Prompt Debole

### **Red Flags - Output Problems**:

**1. Output Generico/Vago**
- Non specifico per tuo contesto
- Usa placeholder [INSERISCI QUI]
- Applicabile a qualsiasi situazione

**2. Output Inconsistente**
- Stesso prompt, risultati diversi
- Formato varia ogni volta
- Tone non uniforme

**3. Output Incompleto**
- Mancano sezioni richieste
- Troppo breve
- Non risponde alla domanda

**4. Output Off-Topic**
- LLM fraintende task
- Risponde a domanda diversa
- Focus sbagliato

**5. Troppe Iterazioni Necessarie**
- Follow-up continui
- Ogni volta devi correggere
- = Prompt inefficiente

---

## 🔍 Diagnosi Sistematica

### **Troubleshooting Table**

| Sintomo | Probabile Causa | Fix |
|---------|-----------------|-----|
| Output vago | Prompt troppo generico | Aggiungi contesto, esempi |
| Formato sbagliato | Expectations poco chiare | Specifica formato, usa few-shot |
| Tone inappropriato | No role/style definito | Aggiungi role, tone/audience |
| Troppo lungo/corto | No constraint lunghezza | Specifica word/char count |
| Info inventate | No fonti, oltre capability | Fornisci documenti, web search |
| Ignora parti prompt | Troppo lungo/complesso | Semplifica, split in sub-tasks |

---

## 💡 Esempio Debugging - Caso Reale

### **v1 - Prompt Originale (Weak)**
```
"Scrivi un report sul progetto"
```
**Output**: 2 paragrafi vaghi, inutilizzabile ❌

**Diagnosi**:
- ❌ No contesto
- ❌ No formato
- ❌ No audience
- ❌ Task vago

---

### **v2 - Aggiungi Contesto**
```
"Scrivi report su Digital Platform per ABC. 60% complete."
```
→ Meglio ma ancora vago su formato

---

### **v3 - Aggiungi Formato**
```
"Scrivi executive summary Digital Platform (ABC, 60% complete).

Formato:
- Progress
- Risks
- Next Steps
Max 300 parole"
```
→ Molto meglio, ma tone non preciso

---

### **v4 - Refine Complete (Strong)**
```
Sei Senior PM esperto executive communication.

Scrivi executive summary Digital Platform per CFO.

Context:
- Cliente: ABC Corp (Fortune 500)
- Budget: €2M
- Status: 60% complete, on track
- Win: migration fase 1 completata
- Next: deployment Q1

Format:
📊 Progress: [milestone + %]
⚠️ Risks: [top 2]
➡️ Next: [priority actions]

Tone: Confident, data-driven, conciso
Max 300 parole
No jargon tecnico
```
→ Output professional, pronto! ✅

---

## ☑️ Checklist Debugging Prompt

Quando output non soddisfa, verifica:

### **☐ ROLE**
- [ ] Ruolo/expertise specificato?
- [ ] Appropriato per task?

### **☐ ACTION**
- [ ] Task chiaro e specifico?
- [ ] Verbo azione preciso?

### **☐ CONTEXT**
- [ ] Contesto sufficiente?
- [ ] Vincoli esplicitati?
- [ ] Background incluso?

### **☐ EXPECTATIONS**
- [ ] Formato definito?
- [ ] Lunghezza specificata?
- [ ] Tone/style indicato?
- [ ] Audience chiara?

### **☐ EXAMPLES**
- [ ] Servono esempi (few-shot)?
- [ ] Esempi rappresentativi?

### **☐ LENGTH**
- [ ] Prompt chiaro non verboso?
- [ ] Info essenziale vs nice-to-have?

---

## 🧪 Technique: Prompt Ablation

**Cos'è**: Aggiungere/rimuovere componenti uno alla volta per vedere impatto

**Esempio**:
```
Baseline:
"Analizza rischi progetto X. Mese 5/12, 40% complete."

Test 1 - Aggiungi Role:
"Sei PMO Risk Specialist. Analizza rischi..."
→ Output più strutturato ✅

Test 2 - Aggiungi Format:
"...Formato: Tabella rischio, likelihood, impact"
→ Output actionable ✅

Test 3 - Aggiungi Examples:
[+ few-shot]
→ Formato perfettamente consistente ✅
```

Così capisci quale componente ha più impatto.

---

## 🔧 Common Fixes - Cheat Sheet

**Problema: Output Troppo Generico**
```
❌ "Dammi suggerimenti progetto"
✅ "Sei PM. Suggerisci 3 azioni concrete per recuperare 2 settimane ritardo progetto [X]. Focus: re-prioritization scope."
```

**Problema: Formato Non Rispettato**
```
❌ "Scrivi in tabella"
✅ "Output markdown table:
| Colonna A | Colonna B | Colonna C |
[+ few-shot example]"
```

**Problema: Tone Sbagliato**
```
❌ [no mention]
✅ "Tone: Professionale accessibile, audience non-tecnica. Evita jargon, usa analogie business."
```

**Problema: Troppo Lungo/Corto**
```
❌ [no constraint]
✅ "Exactly 3 bullet points, max 50 parole ciascuno"
```

**Problema: Hallucinations**
```
❌ "Dammi statistiche su [topic recente]"
✅ "Analizza SOLO dati da documenti allegati. Se info non presente: dichiara 'Non disponibile'"
```

---

## 📊 Advanced: Prompt Versioning

**Strategy**: Mantieni changelog

```
## Status Report Prompt

### v1.0 (2025-01-15)
"Scrivi status report"
→ Issue: troppo generico

### v2.0 (2025-01-16)
+ Added: Role, Format
→ Issue: tone non C-level

### v3.0 (2025-01-17)
+ Added: Audience (CFO), Tone, Length
→ Working well!

### v3.1 (2025-01-20)
+ Refined: Emoji sections
→ CURRENT VERSION
```

**Benefici**:
- Traccia evoluzione
- Puoi tornare a versione precedente
- Condivisibile con team
- Impari cosa funziona

---

## ⏹️ When to Stop Optimizing

### **✅ Prompt è "Good Enough" Quando**:
- Output soddisfa 80%+ delle volte
- Necessita &lt;2 follow-up
- Saving tempo significativo
- ROI positivo (tempo saved > tempo optimization)

### **❌ Don't Over-Optimize**:
- Perfetto è nemico del buono
- Prompt 20-parole funzionante > 500-parole 5% meglio
- Marginal gains non sempre valgono effort

**Regola 80/20**: 20% effort optimization → 80% miglioramento. Ulteriore = diminishing returns.

---

## ✏️ Esercizio Debugging Workflow

### **Parte 1: Audit Tuo Prompt**
1. Prompt che usi regolarmente
2. Usa checklist sopra
3. Identifica mancanze
4. Crea v2 migliorata
5. Test side-by-side

### **Parte 2: Fix Broken Prompt**
Prompt: "Help me with stakeholder communication for project issue"

Task:
1. Identifica tutti problemi
2. Scrivi diagnosi
3. Crea versione ottimizzata
4. Spiega ogni modifica

### **Parte 3: Ablation Testing**
1. Parti da prompt minimo
2. Aggiungi 1 componente alla volta
3. Documenta impatto
4. Identifica elementi critici vs opzionali

---

## 🔑 Key Takeaways

:::tip Punti Chiave

✨ **Output Problematico = Prompt Migliorabile**: Non è mai "colpa" dell'LLM

✨ **Diagnosi Sistematica > Trial-and-Error**: Usa checklist RACE

✨ **Ablation Testing = Identifica Essenziale**: Cosa ha veramente impatto

✨ **Versioning Aiuta**: Traccia miglioramenti nel tempo

✨ **"Good Enough" > Perfetto**: 80/20 rule, non over-optimize

✨ **Debugging è Skill Iterativa**: Migliori con pratica

:::

---

## 🎓 Conclusione Modulo Prompt Engineering

**Congratulazioni!** Hai completato il modulo Prompt Engineering.

**Cosa hai imparato**:
- ✅ Anatomia prompt efficace (6 componenti)
- ✅ Framework RACE sistematico
- ✅ Chain-of-Thought per problemi complessi
- ✅ Few-Shot per output consistente
- ✅ Role-Based & Multi-Perspective
- ✅ Meta-Prompting per delegare
- ✅ Debugging sistematico

**Prossimi Step**:
1. Applica tecniche al tuo lavoro quotidiano
2. Crea library prompt template
3. Condividi best practices con team
4. Itera e migliora continuamente

---

## ➡️ Dove Andare da Qui

👉 **[Vai agli Esercizi Pratici →](../esercizi-pratici)**

Metti in pratica tutto ciò che hai imparato con esercizi hands-on guidati!

