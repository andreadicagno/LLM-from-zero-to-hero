import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },

    // Giorno 1
    {
      type: 'category',
      label: 'Giorno 1: Foundations',
      collapsed: true,
      items: [
        'giorno-1-foundations/index',
        {
          type: 'category',
          label: '01 - LLM Foundations',
          items: [
            'giorno-1-foundations/llm-foundations/index',
            'giorno-1-foundations/llm-foundations/token',
            'giorno-1-foundations/llm-foundations/anatomia-llm',
            'giorno-1-foundations/llm-foundations/ragionamento',
            'giorno-1-foundations/llm-foundations/contesto',
            'giorno-1-foundations/llm-foundations/multimodalita',
            'giorno-1-foundations/llm-foundations/concetti-chiave',
          ],
        },
        {
          type: 'category',
          label: '02 - Prompt Engineering',
          items: [
            'giorno-1-foundations/prompt-engineering-teoria/index',
            'giorno-1-foundations/prompt-engineering-teoria/framework-race',
            'giorno-1-foundations/prompt-engineering-teoria/tecniche-avanzate',
            'giorno-1-foundations/prompt-engineering-teoria/meta-prompting',
            'giorno-1-foundations/prompt-engineering-teoria/debugging',
            'giorno-1-foundations/prompt-engineering-teoria/advanced-patterns',
          ],
        },
        {
          type: 'category',
          label: '03 - Esercizi Pratici',
          items: [
            'giorno-1-foundations/esercizi-pratici/index',
            'giorno-1-foundations/esercizi-pratici/esercizio-1-ottimizzazione',
            'giorno-1-foundations/esercizi-pratici/esercizio-2-template',
          ],
        },
      ],
    },

    // Giorno 2
    {
      type: 'category',
      label: 'Giorno 2: Advanced Features',
      collapsed: true,
      items: [
        'giorno-2-advanced-features/index',
        {
          type: 'category',
          label: '01 - Workspace & Context',
          items: [
            'giorno-2-advanced-features/workspace-context/index',
            'giorno-2-advanced-features/workspace-context/workspace-concepts',
            'giorno-2-advanced-features/workspace-context/custom-instructions',
            'giorno-2-advanced-features/workspace-context/knowledge-base',
            'giorno-2-advanced-features/workspace-context/context-optimization',
            'giorno-2-advanced-features/workspace-context/hands-on-workspace',
          ],
        },
        {
          type: 'category',
          label: '02 - Content Generation',
          items: [
            'giorno-2-advanced-features/content-generation/index',
            'giorno-2-advanced-features/content-generation/interactive-outputs',
            'giorno-2-advanced-features/content-generation/structured-outputs',
            'giorno-2-advanced-features/content-generation/content-generation',
            'giorno-2-advanced-features/content-generation/workshop-pratico',
          ],
        },
        {
          type: 'category',
          label: '03 - Research & Analysis',
          items: [
            'giorno-2-advanced-features/research-analysis/index',
            'giorno-2-advanced-features/research-analysis/web-search-llm',
            'giorno-2-advanced-features/research-analysis/multi-document-analysis',
            'giorno-2-advanced-features/research-analysis/verification-strategies',
            'giorno-2-advanced-features/research-analysis/deep-research-challenge',
          ],
        },
        {
          type: 'category',
          label: '04 - Integration & Automation',
          items: [
            'giorno-2-advanced-features/integration-automation/index',
            'giorno-2-advanced-features/integration-automation/api-automation-basics',
            'giorno-2-advanced-features/integration-automation/plugins-extensions',
            'giorno-2-advanced-features/integration-automation/workflow-design',
          ],
        },
      ],
    },

    // Giorno 3
    {
      type: 'category',
      label: 'Giorno 3: Claude Code',
      collapsed: true,
      items: [
        'giorno-3-claude-code/index',
        {
          type: 'category',
          label: '01 - Introduzione',
          items: [
            'giorno-3-claude-code/introduzione/index',
            'giorno-3-claude-code/introduzione/overview',
            'giorno-3-claude-code/introduzione/capabilities-non-dev',
            'giorno-3-claude-code/introduzione/setup',
          ],
        },
        {
          type: 'category',
          label: '02 - Documentation',
          items: [
            'giorno-3-claude-code/documentation/index',
            'giorno-3-claude-code/documentation/creare-documentazione',
            'giorno-3-claude-code/documentation/standardizzare',
            'giorno-3-claude-code/documentation/knowledge-base',
            'giorno-3-claude-code/documentation/workshop-pratico',
          ],
        },
        {
          type: 'category',
          label: '03 - Research & Analysis',
          items: [
            'giorno-3-claude-code/research-analysis/index',
            'giorno-3-claude-code/research-analysis/analisi-repository',
            'giorno-3-claude-code/research-analysis/estrazione-insights',
            'giorno-3-claude-code/research-analysis/synthesis',
          ],
        },
        {
          type: 'category',
          label: '04 - Progetto Finale',
          items: [
            'giorno-3-claude-code/progetto-finale/index',
            'giorno-3-claude-code/progetto-finale/brief',
            'giorno-3-claude-code/progetto-finale/presentazioni',
            'giorno-3-claude-code/progetto-finale/wrap-up',
          ],
        },
      ],
    },

    // Risorse
    {
      type: 'category',
      label: 'Risorse',
      collapsed: true,
      items: [
        'risorse/index',
        'risorse/template-prompt',
        'risorse/glossario',
        'risorse/link-utili',
        'risorse/faq',
      ],
    },
  ],
};

export default sidebars;
