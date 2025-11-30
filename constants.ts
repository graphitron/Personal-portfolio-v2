
import { CoreProject, VisualProject } from './types';

export const CORE_PROJECTS: CoreProject[] = [
  {
    id: 'ailaysa',
    title: 'Ailaysa',
    tagline: 'Multilingual AI Content Platform',
    //description: 'Ailaysa is an AI-powered multilingual content platform used by individuals and enterprises to generate writing, translation, voice, and visuals in one seamless workflow.',
    roles: ['Product Design', 'UX/UI', 'Workflow Design', 'Interaction Design', 'Design System', 'AI Feature Collaboration'],
    badges: ['AI | ', 'SaaS | ', 'B2B | ', 'Enterprise UX'],
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
    ctaText: 'Visit Product Live',
    caseStudyUrl: 'https://ailaysa.com', // REPLACE WITH YOUR LINK
    //secondaryCta: 'Visit Product'
    productUrl: 'https://ailaysa.com' // REPLACE WITH YOUR LINK
  },
  {
    id: 'chaireader',
    title: 'Chaireader',
    tagline: 'AI-Interactive Reading Platform',
    //description: 'Chaireader turns reading into a conversational experience, allowing users to explore stories interactively through AI-driven dialogue and dynamic storytelling.',
    roles: ['Product Design', 'UX/UI', 'Conversational Flows', 'Prototype Design', 'Visual System', 'Human-AI Interaction'],
    badges: ['AI | ', 'B2C | ', 'Conversational UX | ', 'Interaction Design'],
    metrics: [
      { value: '0 → Launch', label: 'End-to-End Product Creation & Launch', trend: 'up' },
      { value: '5+', label: 'Whitelabel Enterprise Clients', trend: 'up' }
    ],
    image: 'assets/cosmic-bg.png', 
    gallery: [
       'assets/chaireader-bg-1.png', // Dashboard
       'assets/chaireader-bg-2.png', // Analytics
       'assets/chaireader-bg-3.png'  // Code/System
    ],
    ctaText: 'Visit Product Live',
    caseStudyUrl: 'https://chaireader.com', // REPLACE WITH YOUR LINK
    //secondaryCta: 'Visit Product'
    productUrl: 'https://ailaysa.com' // REPLACE WITH YOUR LINK
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
  // { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/000000' },
  // { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer/000000' },
  // { name: 'React', icon: 'https://cdn.simpleicons.org/react/000000' },
  // { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/000000' },
  // { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/000000' },
  // { name: 'Linear', icon: 'https://cdn.simpleicons.org/linear/000000' },
  // { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/000000' },
  // { name: 'Anthropic', icon: 'https://cdn.simpleicons.org/anthropic/000000' },
  // { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/000000' },
  { name: 'Figma', icon: 'public/assets/figma logo.png' },
  { name: 'Framer', icon: 'public/assets/Framer-icon.png' },
  { name: 'Photoshop', icon: 'public/assets/photoshop logo.png'},
  { name: 'Illustrator', icon: 'public/assets/illustrator logo.png' },
  { name: 'Indesign', icon: 'public/assets/indesign logo.png' },
  { name: 'Canva', icon: 'public/assets/canva logo.jpeg' }
];

// MANUAL LINKEDIN POSTS - REPLACE URLS HERE
export const LINKEDIN_POSTS = [
  { id: 1, image: 'assets/AI Human love.png', caption: 'AI Human Love' },
  { id: 2, image: 'assests/20 Habits That Show  Youre Leveling Up as a Designer.avif', caption: '6 Things That Confuse Users More Than You Think' },
  { id: 3, image: 'assets/20 Habits That Show  Youre Leveling Up as a Designer.png', caption: '20 Habits That Show  Youre Leveling Up as a Designer' },
  { id: 4, image: 'assets/Design Principles That Dont Always Work.png', caption: 'Design Principles That Don’t Always Work' },
  { id: 5, image: 'assets/Escape hatches.png', caption: 'Escape Hatches' },
  { id: 6, image: 'assets/experience universe.png', caption: 'Experience Universe' },
  { id: 7, image: 'assets/How to Design a Life That Feels Like Yours.png', caption: 'How to Design a Life That Feels Like Yours' },
  { id: 8, image: 'assets/open ai first rebrand.png', caption: 'Open AI First Rebrand' },
  { id: 9, image: 'assets/shapes speak are you listening.png', caption: 'Shapes Speak are you Listening' },
  { id: 10, image: 'assets/There No Final Version in UX.png', caption: 'There No Final Version  in UX' },
  { id: 11, image: 'assets/Time  is part of UX.png', caption: 'Time  is part of UX' },
  { id: 12, image: 'assets/What If All  AI Tools Vanished Tomorrow.png', caption: 'What If All  AI Tools Vanished Tomorrow' },
];

export const EXPERIENCE_ITEMS = [
  {
    id: 1,
    role: 'Senior Product Designer',
    company: 'Innovate AI',
    period: '2023 — Present',
    description: 'Leading the design of enterprise-grade AI tools. Increased user adoption by 40% through intuitive workflow redesigns.'
  }
];
