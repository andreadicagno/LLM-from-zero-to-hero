# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based educational workshop site titled "LLM from 0 to Hero 🦸🏻‍♂️" - a comprehensive 3-day Italian-language course teaching non-technical professionals (PM, PMO, Service Design, Functional roles) how to master LLMs with a provider-agnostic approach.

**Workshop Structure**:
- **Day 1**: LLM Foundations & Prompt Engineering (✅ Complete - 8,700 lines)
- **Day 2**: Advanced LLM Features - Provider-Agnostic (🏗️ Structure complete - 19 placeholders)
- **Day 3**: Claude Code for non-developers (placeholder)
- **Resources**: Glossary, FAQ, templates, useful links (✅ Complete)

**Target Audience**: 8 participants, non-STEM backgrounds, basic ChatGPT experience
**Workshop Dates**: 3 Wednesdays (Oct 8, 15, 22, 2025), 10:00-15:00

## Essential Commands

### Development
```bash
# Install dependencies
yarn

# Start local development server (hot reload)
yarn start

# Build site for production
yarn build

# Serve production build locally
yarn serve

# Type checking
yarn typecheck

# Clear cache
yarn clear
```

### Git Workflow
The repository uses conventional commits and includes pre-built documentation. Currently on `main` branch which is both the working and target branch for PRs.

## Architecture & Key Concepts

### Content Organization Philosophy

**Three-Tier Structure**:
1. **Day Index Pages** (`docs/giorno-X/index.md`): Comprehensive overviews with timeline, learning objectives, deliverables, pre-requisites
2. **Module Index Pages** (`docs/giorno-X/modulo-Y/index.md`): Minimal quick-navigation pages pointing to lessons (NOT redundant with day-level content)
3. **Lesson Pages**: Detailed educational content with examples, exercises, and takeaways

**Anti-Pattern**: Avoid duplicating learning objectives, checklists, or key concepts between day-level and module-level index pages. Module indexes should be concise navigation aids.

### Documentation System

**Context Preservation** - ALWAYS read these files when resuming work:
- `TODO.md`: Detailed progress tracking, session history, current status
- `.workshop-plan/` directory: Complete planning documentation

**Planning Directory** (`.workshop-plan/`):
- `structure.md`: Complete site architecture and file tree
- `content-outline.md`: ⭐ KEY DOCUMENT - Detailed outline of ALL modules with learning objectives, examples, exercises
- `config-changes.md`: Docusaurus configuration guide
- `templates/`: Reusable templates for modules, exercises, and index pages
- `README.md`: Guide for using planning documentation

**Tracking Progress** (`TODO.md`):
- Always read and update this file to maintain context between sessions
- Contains detailed session history, metrics, and current status
- Day 1 is 100% complete (~8,700 lines), Days 2-3 are placeholders
- Includes 10+ completed sessions with deliverables and metrics

**Workflow**: Always reference `.workshop-plan/content-outline.md` when creating new content to ensure coverage of planned topics.

### Docusaurus Configuration

**Key Customizations**:
- **Language**: Italian (`i18n.defaultLocale: 'it'`)
- **Routing**: Docs at root (`routeBasePath: '/'`), not `/docs/`
- **Search**: Local search plugin (`@easyops-cn/docusaurus-search-local`) with Italian/English support, offline-ready
- **Sidebar**: Manually configured with 3 main categories (Day 1, Day 2, Day 3, Resources)
- **Blog**: Repurposed as "Annunci e Aggiornamenti" (Announcements)
- **Navbar**: Dropdown for 3 days, direct links to Resources and Announcements

**Important Files**:
- `docusaurus.config.ts`: Main configuration
- `sidebars.ts`: Manual sidebar structure (no auto-generation)
- `src/components/HomepageFeatures/`: Custom homepage day cards with emoji icons

### Content Standards

**Every Module Should Include**:
- Frontmatter: `title`, `description`, `sidebar_position`, `tags`
- Learning objectives section
- Practical examples contextualized for PM/PMO/Service Design/Functional roles
- Best practices and common pitfalls (using Docusaurus admonitions)
- Key takeaways summary
- Hands-on exercises where applicable
- Next steps with internal links

**Writing Guidelines**:
- Italian language, professional but friendly tone
- Accessible to non-STEM audience
- 60% practice / 40% theory ratio
- Real-world examples from consulting firms (Accenture, EY, Deloitte style)
- Use Docusaurus admonitions: `:::tip`, `:::warning`, `:::info`, `:::danger`

**MDX Considerations**:
- HTML entities must be used for special characters (e.g., `&lt;` not `<` in text)
- Numeric prefixes in file names (e.g., `01-token.md`) are stripped for slug generation
- Internal links should use relative paths without numeric prefixes

## Common Development Tasks

### Creating New Module Content

```bash
# 1. Copy appropriate template
cp .workshop-plan/templates/module-template.md docs/[path]/new-module.md

# 2. Reference content-outline.md for what to cover

# 3. Fill in template, following Day 1 examples for quality standard

# 4. Add to sidebars.ts if not auto-detected

# 5. Test build
yarn build
```

### Creating New Exercise

```bash
# 1. Copy exercise template
cp .workshop-plan/templates/exercise-template.md docs/[path]/exercise-X.md

# 2. Create variants for all 4 target roles (PM, PMO, Service Design, Functional)

# 3. Include detailed solutions and peer review workflow
```

### Updating Configuration

Before modifying `docusaurus.config.ts` or `sidebars.ts`, reference `.workshop-plan/config-changes.md` for architectural decisions and patterns.

## Build & Quality Checks

**Successful Build Criteria**:
- `yarn build` completes with exit code 0
- Warnings about broken anchors (e.g., links to `glossario#term`) are acceptable if target sections exist
- All internal links between docs must resolve correctly
- MDX syntax must be valid (no HTML syntax errors)

**Common Build Issues**:
- **MDX Syntax**: Use HTML entities for special chars (`&lt;`, `&gt;`, `&amp;`)
- **Broken Links**: Use slug names without numeric prefixes (e.g., `/token` not `/01-token`)
- **Missing Frontmatter**: All `.md` files need title, description, sidebar_position

## Project Status

**Current State** (as of 2025-10-06):
- ✅ Day 1 complete: 20 files, ~8,700 lines of high-quality educational content
- ✅ Resources section complete: Glossary (25+ terms), FAQ (15+ questions), useful links
- ✅ Homepage with day navigation cards
- ✅ Global search functionality integrated
- ⏳ Day 2 & 3: Index pages with "Coming Soon" messaging, placeholder content files

**Completion**: ~60% of total project (1 of 3 days fully developed)

## Important Notes

- **Context Preservation**: Always read `TODO.md` and `.workshop-plan/` directory when resuming work
- **Quality Standard**: Day 1 modules set the quality bar - maintain consistency in depth, examples, and structure
- **Template Usage**: Always use provided templates to ensure consistency
- **No Premature Content**: Don't create Day 2/3 content until explicitly requested - respect the phased development approach
- **Build Testing**: Run `yarn build` after any structural changes or new content addition

## Node Version

Requires Node.js >= 20.0 (specified in package.json engines)
