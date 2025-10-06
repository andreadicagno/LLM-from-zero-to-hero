# 📁 Workshop Planning Documentation

> **Directory di Pianificazione del Progetto LLM from 0 to Hero**
>
> Questa cartella contiene tutta la documentazione necessaria per sviluppare il sito Docusaurus del workshop "LLM from 0 to Hero 🦸🏻‍♂️".

---

## 📋 Contenuti di questa Directory

### 📄 File di Pianificazione

#### 1. `structure.md`
**Cosa contiene**: Struttura dettagliata completa del sito Docusaurus
- Architettura directory `docs/`
- Organizzazione per giorni e moduli
- Sidebar configuration dettagliata
- File count summary

**Quando usarlo**: Per avere la visione d'insieme della struttura del progetto

---

#### 2. `content-outline.md`
**Cosa contiene**: Outline punto-per-punto di TUTTI i contenuti
- Giorno 1: 17 moduli completi con outline dettagliato
- Giorno 2: 11 moduli con contenuti specifici
- Giorno 3: 15 moduli per Claude Code
- Risorse: Template, glossario, FAQ
- Learning objectives, esempi, esercizi per ogni modulo

**Quando usarlo**:
- Quando scrivi contenuti (usa come checklist)
- Per vedere cosa deve essere coperto in ogni sezione
- Come reference durante sviluppo

---

#### 3. `config-changes.md`
**Cosa contiene**: Tutte le modifiche necessarie ai file di configurazione
- `docusaurus.config.ts` - modifiche complete
- `sidebars.ts` - sidebar strutturata
- Plugin opzionali da installare
- Custom CSS suggestions
- Homepage personalizzazione

**Quando usarlo**:
- Fase di setup/configurazione Docusaurus
- Quando applichi modifiche ai config files
- Reference per struttura navbar/footer

---

### 📂 Templates Directory

#### `module-template.md`
**Template per**: Moduli standard di contenuto

**Sezioni incluse**:
- Frontmatter completo
- Learning objectives
- Contenuto principale con esempi
- Best practices & common pitfalls
- Pratica guidata
- Caso d'uso real-world
- Key takeaways
- Risorse aggiuntive
- Note facilitatore

**Usa per**: Creare nuovi moduli di teoria/contenuto

---

#### `exercise-template.md`
**Template per**: Esercizi pratici

**Sezioni incluse**:
- Setup esercizio (tempo, modalità, deliverable)
- Scenario & brief
- Step-by-step guide
- Varianti per ruolo (PM/PMO/Service Design/Funzionali)
- Soluzione guidata
- Peer review instructions
- Bonus challenges
- Reflection prompts

**Usa per**: Creare esercizi hands-on per i partecipanti

---

#### `index-template.md`
**Template per**: Pagine overview/index di sezioni

**Sezioni incluse**:
- Overview sezione/giorno
- Timeline e struttura
- Moduli overview
- Deliverables attesi
- Da dove parti vs dove arrivi
- Checklist progressione
- Q&A frequenti
- Note facilitatore

**Usa per**: Creare pagine index per giorno-1, giorno-2, giorno-3, risorse, etc.

---

## 🚀 Come Usare Questa Documentazione

### Workflow di Sviluppo Consigliato

#### Fase 1: Setup Iniziale
1. Leggi `structure.md` per capire architettura completa
2. Applica modifiche da `config-changes.md` a Docusaurus config
3. Crea struttura directory vuota seguendo `structure.md`

#### Fase 2: Sviluppo Contenuti
1. Per ogni modulo da creare:
   - Apri `content-outline.md` per vedere cosa coprire
   - Copia template appropriato (`module-template.md` o `exercise-template.md`)
   - Compila template usando outline come guida
   - Verifica di aver coperto tutti i punti chiave

2. Per pagine index:
   - Usa `index-template.md`
   - Personalizza per la sezione specifica

#### Fase 3: Iterazione & Refinement
1. Testa build: `npm run build`
2. Verifica navigation e links
3. Review contenuti per consistenza
4. Update tracking in `../TODO.md`

---

## 📊 Tracking Progressi

### Usa il TODO.md principale
Il file `TODO.md` nella root del progetto traccia avanzamento generale.

### File di questa directory sono REFERENCE
- Non modificare questi file durante sviluppo
- Sono il "source of truth" per struttura e contenuti
- Se cambi struttura, aggiorna questi file per mantenere sync

---

## 🎯 Quick Reference

### Creare un Nuovo Modulo Teoria

```bash
# 1. Copia template
cp .workshop-plan/templates/module-template.md docs/[path]/nuovo-modulo.md

# 2. Apri content-outline.md per vedere cosa coprire

# 3. Compila template sostituendo [PLACEHOLDER]

# 4. Aggiungi a sidebars.ts
```

### Creare un Esercizio

```bash
# 1. Copia template
cp .workshop-plan/templates/exercise-template.md docs/[path]/esercizio-X.md

# 2. Reference content-outline.md per obiettivi esercizio

# 3. Customizza per il task specifico
```

### Creare Pagina Index

```bash
# 1. Copia template
cp .workshop-plan/templates/index-template.md docs/[sezione]/index.md

# 2. Personalizza overview

# 3. Aggiungi link ai moduli della sezione
```

---

## 📝 Best Practices

### Consistenza
- ✅ Usa sempre i template forniti
- ✅ Segui struttura definita in `structure.md`
- ✅ Rispetta outline in `content-outline.md`
- ✅ Mantieni stesso tone/style in tutti i docs

### Qualità
- ✅ Ogni esempio deve essere contestualizzato (PM/PMO/Service Design/Funzionali)
- ✅ Linguaggio accessibile, no jargon eccessivo
- ✅ Focus pratico > teoria
- ✅ Esercizi applicabili al lavoro reale

### Manutenibilità
- ✅ File piccoli e focalizzati
- ✅ Cross-reference chiari
- ✅ Frontmatter completo
- ✅ Tags appropriati

---

## 🔄 Aggiornamenti Futuri

### Quando Aggiungi Nuovi Contenuti

1. **Update `structure.md`** se cambi architettura
2. **Update `content-outline.md`** se aggiungi/modifichi moduli
3. **Update `config-changes.md`** se modifichi config
4. **Crea nuovo template** se serve pattern diverso

### Versioning

Questi file di pianificazione dovrebbero essere versionati:
- Aggiungi date di update
- Documenta major changes
- Mantieni history delle decisioni

---

## 💡 Tips

### Per Scrivere Velocemente
1. Non partire da zero: usa sempre template
2. Reference outline per non dimenticare punti chiave
3. Scrivi prima struttura, poi riempi dettagli
4. Esempi reali > esempi inventati

### Per Mantenere Qualità
1. Review checklist in `content-outline.md`
2. Self-review con criteria:
   - Learning objectives chiari?
   - Esempi pratici inclusi?
   - Esercizi actionable?
   - Key takeaways presenti?

### Per Collaboration
1. Questi file sono la documentazione condivisa
2. Se lavori in team, tutti devono seguire questi template
3. Discussioni su struttura → aggiorna questi docs

---

## 🆘 Troubleshooting

### "Non so da dove iniziare"
→ Leggi `structure.md` per big picture, poi `content-outline.md` per dettagli

### "Ho dubbi su cosa includere in un modulo"
→ `content-outline.md` ha checklist dettagliata per ogni modulo

### "Non so come configurare Docusaurus"
→ `config-changes.md` ha step-by-step per tutte le modifiche

### "Template non si adatta al mio contenuto"
→ Template è linea guida, adatta pure se necessario (ma mantieni sezioni chiave)

---

## 📞 Support

Se hai domande o suggerimenti su questi file di pianificazione:
- Apri issue su GitHub repo
- Contatta facilitatore corso
- Proponi modifiche via PR

---

## 🎯 Obiettivo Finale

Questa documentazione esiste per:
- ✅ Accelerare sviluppo contenuti
- ✅ Garantire consistenza e qualità
- ✅ Permettere ripresa lavoro in qualsiasi momento
- ✅ Facilitare collaboration se team

**Usa questi file come guida, non come vincolo rigido. L'obiettivo è creare un workshop efficace!**

---

**Last Updated**: 2025-10-05
**Maintained by**: [Nome]
**Version**: 1.0
