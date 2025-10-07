# LLM from 0 to Hero 🦸🏻‍♂️

> **Workshop educativo completo su LLM per professionisti non-tecnici**

Un corso hands-on in 3 giorni che trasforma professionisti PM, PMO, Service Design e Funzionali in esperti di LLM e AI tools, con approccio provider-agnostic (Claude, ChatGPT, Gemini) e focus su applicazioni pratiche.

---

## 📊 Stato Progetto

**Progresso Totale**: 65% Completo

- ✅ **Giorno 1 - LLM Foundations & Prompt Engineering**: 100% Completo (~8,700 righe, 20 file)
- 🏗️ **Giorno 2 - Advanced LLM Features (Provider-Agnostic)**: Struttura Completa (19 placeholder, outline dettagliato)
- 🚧 **Giorno 3 - Claude Code**: In Pianificazione
- ✅ **Sezione Risorse**: Completa (Glossario, FAQ, Link Utili)

**Ultima Sessione**: 2025-10-07 | **Prossima Milestone**: Sviluppo contenuti Giorno 2

---

## 🎯 Workshop Overview

### Target Audience
**8 partecipanti** con profili non-STEM:
- Project Managers
- PMO Specialists
- Service Designers
- Ruoli Funzionali

### Date & Formato
**3 Mercoledì**: 8/10, 15/10, 22/10 2025
**Orario**: 10:00-15:00 (5 ore/giorno)
**Modalità**: Workshop pratico (60% pratica, 40% teoria)

### Cosa Impareranno
- Fondamenti LLM (token, context window, multimodalità)
- Prompt Engineering avanzato (RACE, Chain-of-Thought, Few-Shot)
- Workspace persistenti & context management (Claude/ChatGPT/Gemini)
- Content generation avanzato (Artifacts/Canvas/multimodal outputs)
- Research & analysis professionale (web search, multi-doc, verification)
- Integration concepts (APIs, plugins/extensions, workflow automation)
- Template e workflow riutilizzabili

---

## 🛠️ Tech Stack

Questo progetto è costruito con:

- **[Docusaurus 3.9.1](https://docusaurus.io/)** - Static site generator
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Plugin**:
  - `@easyops-cn/docusaurus-search-local` - Ricerca locale offline (italiano/inglese)
  - Google Analytics 4 - Tracking con GDPR compliance

**Requisiti**:
- Node.js ≥ 20.0
- Yarn (package manager)

---

## 🚀 Quick Start

### Installazione

```bash
# Clona il repository
git clone https://github.com/andreadicagno/LLM-from-zero-to-hero.git
cd LLM-from-zero-to-hero

# Installa dipendenze
yarn
```

### Comandi Sviluppo

```bash
# Avvia server di sviluppo con hot reload
yarn start
# Apre http://localhost:3000 nel browser

# Build per produzione
yarn build
# Genera static content in `build/` directory

# Serve build localmente (testa prima di deploy)
yarn serve

# Type checking TypeScript
yarn typecheck

# Pulisci cache Docusaurus
yarn clear
```

---

## 📁 Struttura Progetto

```
LLM-from-zero-to-hero/
├── .workshop-plan/          # 📋 Pianificazione e documentazione
│   ├── structure.md          # Architettura completa sito
│   ├── content-outline.md    # ⭐ Outline dettagliato tutti i moduli
│   ├── config-changes.md     # Guide configurazione Docusaurus
│   └── templates/            # Template riutilizzabili (module, exercise, index)
│
├── docs/                     # 📚 Contenuti educativi
│   ├── index.md              # Homepage corso
│   │
│   ├── giorno-1-foundations/
│   │   ├── 01-llm-foundations/        # ✅ Token, anatomia, ragionamento, contesto
│   │   ├── 02-prompt-engineering-teoria/  # ✅ RACE, CoT, Few-Shot, Meta-Prompting
│   │   └── 03-esercizi-pratici/       # ✅ 2 esercizi hands-on
│   │
│   ├── giorno-2-advanced-features/    # 🏗️ Workspace, Content Gen, Research, Integration
│   ├── giorno-3-claude-code/          # 🚧 Documentation, Research, Progetto Finale
│   │
│   └── risorse/              # ✅ Glossario, FAQ, Link Utili, Template
│
├── blog/                     # 📢 Annunci e Aggiornamenti
├── src/                      # ⚛️ React components (homepage, navbar, footer)
├── static/                   # 🖼️ Assets statici (immagini, favicon)
│
├── docusaurus.config.ts      # ⚙️ Configurazione Docusaurus
├── sidebars.ts               # 📑 Sidebar manuale strutturata
├── CLAUDE.md                 # 🤖 Istruzioni per Claude Code
└── TODO.md                   # ✅ Tracking progressi dettagliato
```

**Per struttura dettagliata**: Vedi `.workshop-plan/structure.md`

---

## 📋 Documentazione di Pianificazione

Questo progetto include documentazione estensiva per facilitare sviluppo e manutenzione:

### File Chiave

#### `.workshop-plan/content-outline.md` ⭐
**Il documento più importante**: Contiene outline punto-per-punto di TUTTI i contenuti del corso (56+ file).
- Learning objectives per ogni modulo
- Esempi pratici da includere
- Esercizi da sviluppare
- Usa come checklist durante scrittura

#### `.workshop-plan/structure.md`
Architettura completa del sito:
- Directory tree dettagliata
- Sidebar configuration
- File count e organizzazione

#### `.workshop-plan/config-changes.md`
Guide step-by-step per modifiche Docusaurus:
- docusaurus.config.ts
- sidebars.ts
- Plugin da installare

#### `.workshop-plan/templates/`
Template riutilizzabili per velocizzare sviluppo:
- `module-template.md` - Per moduli teoria
- `exercise-template.md` - Per esercizi pratici
- `index-template.md` - Per pagine overview

#### `TODO.md`
Tracking progressi dettagliato:
- 10+ sessioni di lavoro documentate
- Metriche per ogni modulo (righe, file, features)
- Roadmap completa 3 giorni
- Storico decisioni architetturali

#### `CLAUDE.md`
Istruzioni per Claude Code quando lavora su questo repository.

### Come Usare la Documentazione

**Per creare nuovo contenuto**:
1. Apri `.workshop-plan/content-outline.md` → vedi cosa coprire
2. Copia template da `.workshop-plan/templates/` → sviluppa velocemente
3. Check `TODO.md` quando completo → aggiorna stato

**Per modifiche configurazione**:
- Reference `.workshop-plan/config-changes.md` → patterns e best practices

---

## ✍️ Content Guidelines

### Standard Contenuti

**Linguaggio & Tone**:
- 🇮🇹 Italiano chiaro e accessibile
- 🤝 Professionale ma friendly
- 🎓 Educativo, non prescrittivo

**Target**:
- 👥 Non-STEM backgrounds
- 💡 Esperienza base ChatGPT
- 🎯 Focus pratico > teoria (60/40)

**Ogni Modulo Deve Includere**:
- ✅ **Frontmatter completo** (title, description, sidebar_position, tags)
- ✅ **Learning objectives** chiari
- ✅ **Esempi pratici** contestualizzati per PM/PMO/Service Design/Funzionali
- ✅ **Best practices** e common pitfalls (con Docusaurus admonitions)
- ✅ **Key takeaways** riassuntivi
- ✅ **Esercizi hands-on** (dove applicabile)
- ✅ **Next steps** con link interni

**Admonitions Docusaurus**:
```markdown
:::tip Suggerimento
Usa questo pattern quando...
:::

:::warning Attenzione
Evita questo errore comune...
:::

:::info Info
Per approfondire, vedi...
:::
```

### Template Usage

Per mantenere consistenza, usa sempre i template forniti:

```bash
# Nuovo modulo teoria
cp .workshop-plan/templates/module-template.md docs/[path]/nuovo-modulo.md

# Nuovo esercizio
cp .workshop-plan/templates/exercise-template.md docs/[path]/esercizio-X.md

# Nuova pagina index
cp .workshop-plan/templates/index-template.md docs/[sezione]/index.md
```

---

## 🏗️ Build & Quality Checks

### Test Build Localmente

```bash
# Build completo
yarn build

# Se successful:
# ✅ Exit code 0
# ✅ "Success! Generated static files in build/"

# Warning accettabili:
# ⚠️ Broken anchors a glossario (se sezioni target esistono)
```

### Quality Criteria

**Successful Build Requirements**:
- ✅ `yarn build` completa con exit code 0
- ✅ Zero errori MDX syntax
- ✅ Tutti link interni risolvono correttamente
- ✅ Frontmatter valido in tutti i file markdown
- ✅ Sidebar navigation funzionante

**Common Build Issues**:
- ❌ MDX syntax errors → Usa HTML entities (`&lt;`, `&gt;`, `&amp;`)
- ❌ Broken links → Rimuovi prefissi numerici da slug (usa `/token` non `/01-token`)
- ❌ Missing frontmatter → Tutti file `.md` devono avere title, description, sidebar_position

---

## 👥 Contributing

### Workflow Consigliato

1. **Read Planning Docs**: Familiarizza con `.workshop-plan/` e `TODO.md`
2. **Check Outline**: Reference `.workshop-plan/content-outline.md` per cosa sviluppare
3. **Use Templates**: Copia template appropriato da `.workshop-plan/templates/`
4. **Write Content**: Segui content guidelines e quality standard di Giorno 1
5. **Test Build**: Run `yarn build` per verificare
6. **Update TODO.md**: Traccia progressi

### Branch Strategy

- **main**: Branch principale (anche target per PR)
- Usa conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`

### Quality Standard

Il **Giorno 1** (~8,700 righe) è il reference per qualità:
- Esempi pratici contestualizzati
- Esercizi con soluzioni guidate
- Admonitions per tips/warnings
- Key takeaways riassuntivi
- Cross-references interni

---

## 🔗 Links & Resources

### Project Links
- **GitHub**: [github.com/andreadicagno/LLM-from-zero-to-hero](https://github.com/andreadicagno/LLM-from-zero-to-hero)
- **Docusaurus Docs**: [docusaurus.io/docs](https://docusaurus.io/docs)
- **Claude Docs**: [docs.anthropic.com](https://docs.anthropic.com/)

### Internal Documentation
- [TODO.md](./TODO.md) - Tracking progressi dettagliato
- [CLAUDE.md](./CLAUDE.md) - Claude Code instructions
- [.workshop-plan/](./.workshop-plan/) - Planning documentation completa

---

## 📝 License & Contact

**Maintained by**: Andrea Di Cagno
**Last Updated**: 2025-10-06
**Version**: 1.0 (Giorno 1 Complete)

---

**🎯 Obiettivo**: Creare un workshop educativo eccellente che trasformi professionisti non-tecnici in power users di LLM moderni (provider-agnostic).

**📈 Progress**: 65% completo | **🎉 Next Milestone**: Sviluppo contenuti Giorno 2 - Advanced LLM Features
