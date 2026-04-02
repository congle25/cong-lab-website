export const researchAreas = [
  {
    id: 'gene-editing',
    title: 'AI-driven Gene Editing',
    subtitle: 'CRISPR & Foundation Models',
    description:
      'We develop and apply CRISPR and non-CRISPR gene-editing technologies alongside RNA-modulating technologies. We leverage foundation models and intelligent AI agents to design, optimize, and automate gene editing experiments at scale.',
    details: [
      'CRISPR and base editing technologies',
      'RNA-modulating tools',
      'Foundation models for genome biology',
      'Intelligent AI agents for experimental design',
    ],
    color: 'navy',
    image: `${import.meta.env.BASE_URL}images/crispr-gpt-fig1.png`,
    imageCaption: 'CRISPR-GPT: LLM-powered agentic system for gene editing — Nature Biomedical Engineering, 2025',
  },
  {
    id: 'stem-cells',
    title: 'Stem Cell Engineering',
    subtitle: 'Single-Cell & Rejuvenation',
    description:
      'We study stem cell behavior using single-cell tracking, transcriptomic, and proteomics analysis. Our work spans understanding fundamental stem cell biology and developing rejuvenation strategies for anti-aging applications.',
    details: [
      'Single-cell tracking and transcriptomics',
      'Proteomics of stem cell states',
      'Stem cell fate decisions',
      'Rejuvenation and anti-aging strategies',
    ],
    color: 'sage',
    image: `${import.meta.env.BASE_URL}images/daisy-fig1.jpg`,
    imageCaption: 'DAISY: ML-optimized Cas12a barcoding for single-cell lineage recovery — Molecular Cell, 2022',
  },
  {
    id: 'neuro-immune',
    title: 'Neuro-immune Diseases',
    subtitle: 'Cancer & Neurodegeneration',
    description:
      'We apply our genome editing and AI tools to cancer immunology and neurodegenerative diseases including Alzheimer\'s and Parkinson\'s disease. We also collaborate on cardiovascular research, lung disease, and broader neuroscience.',
    details: [
      'Cancer immunology',
      'Alzheimer\'s and Parkinson\'s disease',
      'Immune cell programming',
      'Collaborative neuroscience and cardiovascular research',
    ],
    color: 'coral',
    image: `${import.meta.env.BASE_URL}images/rgc-neuron-fig1.jpg`,
    imageCaption: 'Single-cell transcriptome analysis of regenerating RGCs reveals glaucoma neural repair genes — Neuron, 2022',
  },
]
