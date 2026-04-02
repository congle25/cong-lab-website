export const softwareTools = [
  {
    name: 'LabOS',
    tagline: 'The AI-XR Co-Scientist That Sees and Works With Humans',
    description:
      'An AI operating system for scientific laboratories that unites computational reasoning with physical experimentation. LabOS links self-evolving multi-agent AI with XR smart glasses and robotics, enabling real-time human-AI collaboration at the bench.',
    status: 'bioRxiv, 2025',
    github: 'https://github.com/zaixizhang/LabOS',
    website: 'https://ai4labos.com/',
    tags: ['AI Agents', 'XR', 'Lab Automation', 'Multi-modal'],
    image: `${import.meta.env.BASE_URL}images/labos-overview.jpg`,
    imageCaption: 'LabOS: AR/XR-guided human-AI collaboration at the bench — bioRxiv 2025',
  },
  {
    name: 'LabClaw',
    tagline: 'Skill Library for Biomedical AI Agents',
    description:
      'A curated library of 240+ production-ready skills powering dry-lab reasoning, protocol composition, and agentic workflows. LabClaw covers biology, pharmacy, medicine, data science, literature research, and vision/XR — designed to close the loop with LabOS wet-lab execution.',
    status: 'Publicly available',
    github: 'https://github.com/wu-yc/LabClaw',
    tags: ['AI Agents', 'Skill Library', 'Biomedical', 'OpenClaw'],
    image: null,
    imageCaption: null,
  },
  {
    name: 'CRISPR-GPT',
    tagline: 'Agentic AI for Gene Editing Experiments',
    description:
      'An agentic automation system that leverages large language models to design, plan, and guide CRISPR gene editing experiments. Supports knockout, base editing, prime editing, and epigenetic editing (CRISPRa/i).',
    status: 'Nature Biomedical Engineering, 2025',
    github: 'https://github.com/cong-lab/crispr-gpt-pub',
    tags: ['AI', 'CRISPR', 'Automation'],
    image: `${import.meta.env.BASE_URL}images/crispr-gpt-fig1.png`,
    imageCaption: 'Fig. 1 — Overview of the CRISPR-GPT multi-agent system',
  },
  {
    name: 'CLOVER',
    tagline: 'CRISPR Learning and Optimization via Variants Exploration with Regression',
    description:
      'Interactive web application for gene editing optimization. CLOVER uses machine learning to help researchers select the best guide RNAs and editing conditions for their experiments.',
    status: 'Publicly available',
    demo: 'https://cong-lab-clover-streamlit-clover-streamlit-ventjp.streamlit.app/',
    tags: ['Machine Learning', 'Gene Editing', 'Optimization'],
    image: `${import.meta.env.BASE_URL}images/daisy-fig1.jpg`,
    imageCaption: 'Fig. 1 — ML-optimized Cas12a barcoding pipeline (Molecular Cell, 2022)',
  },
]
