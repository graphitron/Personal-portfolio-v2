
import { CoreProject, VisualProject } from './types';

export const CORE_PROJECTS: CoreProject[] = [
  {
    id: 'ailaysa',
    title: 'Ailaysa',
    tagline: 'Multilingual AI Content Platform',
    //description: 'Ailaysa is an AI-powered multilingual content platform used by individuals and enterprises to generate writing, translation, voice, and visuals in one seamless workflow.',
    roles: ['Product Design', 'UX/UI', 'Workflow Design', 'Interaction Design', 'Design System', 'AI Feature Collaboration'],
    badges: ['AI', 'SaaS', 'B2B', 'B2C', 'Enterprise UX'],
    metrics: [
      { value: '4×', label: 'Increase in daily active users', trend: 'up' },
      { value: '10+', label: 'AI modules designed across the platform', trend: 'up' }
    ],
    image: 'assets/blue-gredient-1.png', 
    gallery: [
       '/assets/ailaysa-1.png', // Dashboard
       'assets/ai_projects_main_3c8c4a17d2.svg', // Analytics
       'assets/ailaysa-bg-1.png'  // Code/System
    ],
    ctaText: 'Visit Product',
    //secondaryCta: 'Visit Product'
  },
  {
    id: 'chaireader',
    title: 'Chaireader',
    tagline: 'AI-Interactive Reading Platform',
    //description: 'Chaireader turns reading into a conversational experience, allowing users to explore stories interactively through AI-driven dialogue and dynamic storytelling.',
    roles: ['Product Design', 'UX/UI', 'Conversational Flows', 'Prototype Design', 'Visual System', 'Human-AI Interaction'],
    badges: ['AI', 'B2C', 'Conversational UX', 'Interaction Design'],
    metrics: [
      { value: '0 → Launch', label: 'Product Launch (From Scratch)', trend: 'up' },
      { value: '5+', label: 'Whitelabel Enterprise Clients', trend: 'up' }
    ],
    image: 'assets/cosmic-bg.png', 
    ctaText: 'View Case Study',
    gallery: [
       'assets/chaireader-bg-1.png', // Dashboard
       'assets/chaireader-bg-2.png', // Analytics
       'assets/chaireader-bg-3.png'  // Code/System
    ],
    //secondaryCta: 'Visit Product'
  }
];

export const VISUAL_PROJECTS: VisualProject[] = [
  {
    id: 'social-media-1',
    title: 'LinkedIn Carousel',
    description: 'Thought leadership styling.',
    tools: ['Figma', 'Photoshop'],
    tags: ['Social', 'Branding'],
    image: 'https://picsum.photos/id/180/1080/1080',
    size: 'social' // 1:1
  },
  {
    id: 'print-design',
    title: 'Event Poster',
    description: 'Tech conference A4.',
    tools: ['Illustrator', 'InDesign'],
    tags: ['Print', 'Layout'],
    image: 'https://picsum.photos/id/445/800/1131',
    size: 'a4' // 1:1.414
  },
  {
    id: 'presentation',
    title: 'Pitch Deck',
    description: 'Series A Funding Deck.',
    tools: ['Figma', 'Keynote'],
    tags: ['Presentation', 'Storytelling'],
    image: 'https://picsum.photos/id/435/1600/900',
    size: 'presentation' // 16:9
  },
  {
    id: 'landing-page-1',
    title: 'SaaS Landing Page',
    description: 'High-conversion hero section.',
    tools: ['Figma', 'Framer'],
    tags: ['Web UI', 'Conversion'],
    image: 'https://picsum.photos/id/119/1200/800',
    size: 'wide' // 3:2
  },
  {
    id: 'social-media-2',
    title: 'Instagram Story',
    description: 'Campaign highlight.',
    tools: ['Photoshop'],
    tags: ['Social', 'Mobile'],
    image: 'https://picsum.photos/id/250/1080/1920',
    size: 'a4' // Using vertical ratio
  },
  {
    id: 'illustration',
    title: 'Icon Set',
    description: 'System iconography.',
    tools: ['Illustrator'],
    tags: ['System', 'Vector'],
    image: 'https://picsum.photos/id/160/1000/1000',
    size: 'social'
  },
  {
    id: 'dashboard',
    title: 'Analytics Dash',
    description: 'Dark mode data viz.',
    tools: ['Figma', 'React'],
    tags: ['Product', 'Data'],
    image: 'https://picsum.photos/id/20/1600/900',
    size: 'presentation'
  }
];

export const ABOUT_NODES = [
  'AI-Powered Product Design',
  'UX/UI for B2B & B2C Platforms',
  'Design Systems & Prototyping',
  'Conversational Interaction',
  'Multilingual Workflows',
  'Enterprise Design'
];

// Using Simple Icons CDN for brands
export const TOOLS_LIST = [
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000000' },
  { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/000000' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/000000' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/000000' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'Linear', icon: 'https://cdn.simpleicons.org/linear/000000' },
  { name: 'Midjourney', icon: 'https://cdn.simpleicons.org/midjourney/000000' },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/000000' },
  { name: 'Anthropic', icon: 'https://cdn.simpleicons.org/anthropic/000000' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/000000' },
  { name: 'After Effects', icon: 'https://cdn.simpleicons.org/adobeaftereffects/000000' },
  { name: 'Illustrator', icon: 'https://cdn.simpleicons.org/adobeillustrator/000000' }
];

// Generating dummy LinkedIn posts
export const LINKEDIN_POSTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  image: `https://picsum.photos/seed/linkedin${i}/600/700`,
  caption: 'Exploring the future of AI interfaces...'
}));

export const EXPERIENCE_ITEMS = [
  {
    id: 1,
    role: 'Senior Product Designer',
    company: 'Innovate AI',
    period: '2023 — Present',
    description: 'Leading the design of enterprise-grade AI tools. Increased user adoption by 40% through intuitive workflow redesigns.'
  }
];
