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
      label: 'Giorno 2: Claude Features',
      collapsed: true,
      items: [
        'giorno-2-claude-features/index',
        {
          type: 'category',
          label: '01 - Projects & Output Styles',
          items: [
            'giorno-2-claude-features/projects-output-styles/index',
            'giorno-2-claude-features/projects-output-styles/claude-projects',
            'giorno-2-claude-features/projects-output-styles/custom-instructions',
            'giorno-2-claude-features/projects-output-styles/knowledge-base',
            'giorno-2-claude-features/projects-output-styles/output-styles',
            'giorno-2-claude-features/projects-output-styles/tools-mcp',
            'giorno-2-claude-features/projects-output-styles/pratica-integrata',
          ],
        },
        {
          type: 'category',
          label: '02 - Artifacts & Search',
          items: [
            'giorno-2-claude-features/artifacts-search/index',
            'giorno-2-claude-features/artifacts-search/artifacts',
            'giorno-2-claude-features/artifacts-search/deep-research',
            'giorno-2-claude-features/artifacts-search/file-processing',
            'giorno-2-claude-features/artifacts-search/challenge-finale',
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
