
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
  { name: 'Midjourney', icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Ik1pZGpvdXJuZXktLVN0cmVhbWxpbmUtU3ZnLUxvZ29zIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiPgogIDxkZXNjPgogICAgTWlkam91cm5leSBTdHJlYW1saW5lIEljb246IGh0dHBzOi8vc3RyZWFtbGluZWhxLmNvbQogIDwvZGVzYz4KICA8cGF0aCBmaWxsPSIjMWEyMjJkIiBkPSJNMjIuMzYwMTc1IDE3LjE2NDk1YzAuMDYwODI1IDAuMTU3Nzc1IDAuMDEwOTUgMC4yODk4NzUgLTAuMTIzODI1IDAuMzk4MzUgLTEuMjYyNiAxLjAxNjM1IC0yLjU4Nzg1IDEuOTM4MjI1IC00LjAzMDM1IDIuNjg0MjVsLTEuMjA0NCAwLjYyMTkyNWMwLjI0ODQ3NSAwLjE5ODQ1IDAuNTI4ODc1IDAuMjU0MjI1IDAuODI2NTI1IDAuMjQzMSAwLjMyNTgyNSAtMC4wMTIyMjUgMC41OTg4MjUgLTAuMTYxNzc1IDAuODUxIC0wLjM1NDE1IDAuMzAxMjUgLTAuMjI5ODUgMC41ODYyNSAtMC40ODQxMjUgMC45MDI4IC0wLjY5MDE3NSAwLjc2NjUgLTAuNDk4OTc1IDEuNTkyNjUgLTAuNDUzODUgMi4zMTc3IDAuMTA4NzUgMC4zMDc5NzUgMC4yMzkgMC41OTEwNzUgMC41MTIgMC45MTA2IDAuNzMzMjUgMC4xNTQ1NSAwLjEwNyAwLjM1MjM3NSAwLjE2NTMgMC41NDIwMjUgMC4yMDcybDAuMDQxOTc1IDAuMDA5MDVjMC4yMzAxMjUgMC4wNDg0NzUgMC4zNyAwLjE2NDQgMC4zNTQ2MjUgMC4zNjMxIC0wLjAxNTIyNSAwLjE5NzE3NSAtMC4xNzE0MjUgMC4zMTIzNzUgLTAuNDA3MzUgMC4yOTcxMjUgLTAuNDk5ODI1IC0wLjAzMjI1IC0wLjg5MTY1IC0wLjI5MDEyNSAtMS4yNTg4NSAtMC42MDE4IC0wLjIyOTI3NSAtMC4xOTQ2IC0wLjQ1MDc1IC0wLjQwMjA1IC0wLjY5ODE3NSAtMC41NzA4NSAtMC40NTg4NSAtMC4zMTI5NzUgLTAuOTQ1OCAtMC4zMjIxIC0xLjQxMzI1IC0wLjAyMTY1IC0wLjI3NTU1IDAuMTc3MSAtMC41MjYwNSAwLjM5MzcyNSAtMC43ODM5IDAuNTk3NSAtMC40MTU1NzUgMC4zMjg0IC0wLjg2NDA1IDAuNTcwMjI1IC0xLjQxMTI3NSAwLjU3ODQ3NSAtMC42MDAyIDAuMDA5MDI1IC0xLjA4MzE3NSAtMC4yNjAyMjUgLTEuNTI1NyAtMC42MzAzIC0wLjE1ODIyNSAtMC4xMzIzNSAtMC4zMTQ5NzUgLTAuMjY2NjUgLTAuNDc2MiAtMC4zOTUyNzUgLTAuNjA0NjI1IC0wLjQ4MjMgLTEuMjI0IC0wLjQ4MjA1IC0xLjgzMDcgMC4wMDAzNSAtMC4wNzA3IDAuMDU2MiAtMC4xNDA2NSAwLjExMzM1IC0wLjIxMDQ1IDAuMTcwNzI1bC0wLjEzOTUgMC4xMTQ4MjVjLTAuMTE2MzUgMC4wOTU1NSAtMC4yMzMyNSAwLjE5MDM3NSAtMC4zNTMzIDAuMjgxMDc1IC0wLjc0MjY3NSAwLjU2MTMgLTEuNTkzMTUgMC41ODgwNzUgLTIuMzYyNzI1IDAuMDYyNSAtMC4yOCAtMC4xOTEyMjUgLTAuNTM1MjI1IC0wLjQxODcyNSAtMC44MDIyNzUgLTAuNjI5MDc1IC0wLjYwNjc3NSAtMC40Nzc4NzUgLTEuMTEwMzc1IC0wLjQ3NjQgLTEuNzI3OTc1IC0wLjAwMjAyNWwtMC4wNTA1IDAuMDM4ODc1IC0wLjE1MTQ1IDAuMTE3MDVjLTAuMjAyMDUgMC4xNTYwNSAtMC40MDUzIDAuMzEwNzI1IC0wLjYxODY3NSAwLjQ0OTQ1IC0wLjgwNDIyNSAwLjUyMjg3NSAtMS42MjI3MjUgMC41MDEwMjUgLTIuNDIxOTc1IC0wLjAwNDM1IC0wLjMzMDc1IC0wLjIwOTEgLTAuNjMyNyAtMC40NjM3MjUgLTAuOTQ2IC0wLjcwMDVsLTAuMDQ3MDc1IC0wLjAzNTM3NWMtMC4xMjUwNSAtMC4wOTMzNzUgLTAuMjQ4NTc1IC0wLjE4OSAtMC4zNzY5NSAtMC4yNzc2IC0wLjE3OTA3NSAtMC4xMjM1NSAtMC4zNzE4IC0wLjE1ODEyNSAtMC41NjU2NSAtMC4wNDA0IC0wLjM0MjU3NSAwLjIwOCAtMC42ODExMjI1IDAuNDIyNTc1IC0xLjAyMDQwNzUgMC42MzU5MjUgLTAuMzIwNjQgMC4yMDE2IC0wLjYzMDQ2NSAwLjQyMzE3NSAtMC45NjM4OTI1IDAuNjAwNTUgLTAuMTgwNjA3NSAwLjA5NjA3NSAtMC4zOTc2NyAwLjE0MDc1IC0wLjYwMzU4MjUgMC4xNjcwNzUgLTAuMTkxNjIgMC4wMjQ0MjUgLTAuMzIzNDUyNSAtMC4xMTc4NzUgLTAuMzMwNzUgLTAuMjk3Mzc1IC0wLjAwNzE5Mjc1IC0wLjE3Njg1IDAuMTA4Mjk1IC0wLjI4Nzk1IDAuMjg3NzUyNSAtMC4zMzg5MjVsMC4wMTA0MjUgLTAuMDAyODc1YzAuMTkwODE1IC0wLjA1MTA1IDAuMzg3MjkgLTAuMTE1OCAwLjU1Mjc5NzUgLTAuMjE5ODc1IDAuNDY3MDMyNSAtMC4yOTM2IDAuOTE5NTM1IC0wLjYxMDMgMS4zNzcyOTUgLTAuOTE4NjI1IDAuMDEyOTU1IC0wLjAwODc1IDAuMDIwNTIgLTAuMDI1Mzc1IDAuMDM2MDYyNSAtMC4wNDUzMjVsLTAuMjg0MTc1IC0wLjUzNzMyNWMtMC4wOTQ4MyAtMC4xNzkzNSAtMC4xODk2MSAtMC4zNTg5NzUgLTAuMjgzODY1IC0wLjUzODg1IC0wLjE2NTM0IC0wLjMxNTYyNSAtMC4wNTc3NDc1IC0wLjUyNzMyNSAwLjI5NzE0IC0wLjU1MjcgMC45NTY3NSAtMC4wNjgzMjUgMS45MTQyMjUgLTAuMTI3MDI1IDIuODcxNDUgLTAuMTg4Nmw1LjUwOTY3NSAtMC4zNTM2MjVjMS4zMDIzMjUgLTAuMDgzNzUgMi42MDQ1MjUgLTAuMTY4Mzc1IDMuOTA2OCAtMC4yNTI0MjUgMS44MzY1MjUgLTAuMTE4NSAzLjY3MzA1IC0wLjIzNjgyNSA1LjUwOTU3NSAtMC4zNTUxNzUgMC40ODgzNSAtMC4wMzE0NSAwLjk3Njc1IC0wLjA2MjE1IDEuNDY1MDUgLTAuMDk0MDVsMC40ODgyNzUgLTAuMDMyNGMwLjE2ODIyNSAtMC4wMTEzNSAwLjMwMzIyNSAwLjAzOTQ3NSAwLjM2NTYgMC4yMDEyWm0tMS4zOTcxNzUgMC41NTggLTAuMDE2MzUgLTAuMDQwMDc1IC0xOC4yMzE1MjUgMS4xNzM3NzUgMC4wNDUwMjUgMC4wODQwNzVjMC4xMTgyIDAuMjIxNDUgMC4yMjI4IDAuNDIxNDUgMC4zMzcxNSAwLjYxNTY3NSAwLjAxMDU1IDAuMDE3ODc1IDAuMDQ3NCAwLjAyMTUyNSAwLjA4NjAyNSAwLjAyMjgyNWwwLjAzOTQ3NSAwLjAwMDk3NWMwLjAwNDA1IDAuMDAwMTI1IDAuMDA4IDAuMDAwMjc1IDAuMDExODUgMC4wMDA0NWwwLjAxMTIgMC4wMDA2NWMwLjE1ODQyNSAwLjAxMTcgMC4zMzE2NSAtMC4wMTYyIDAuNDcyMyAwLjAzOTMgMC4yMjQ2IDAuMDg4NjUgMC40MzkxNSAwLjIxNTY1IDAuNjM3MTc1IDAuMzU1ODI1IDAuMzU0MzUgMC4yNTA4MjUgMC42ODIxMjUgMC41Mzk4NzUgMS4wNDA5NSAwLjc4MzU1IDAuNjM3NTUgMC40MzI5NSAxLjIzODAyNSAwLjQyMDA1IDEuODY1MjI1IC0wLjAxODkyNSAwLjI2NDcyNSAtMC4xODUyNSAwLjUxNTc3NSAtMC4zODk5IDAuNzc3OTc1IC0wLjU3ODgyNSAwLjgxOTk3NSAtMC41OTA3NSAxLjU5Njc1IC0wLjU3ODQ3NSAyLjM5NzE3NSAwLjAzODI3NSAwLjIzMzkgMC4xODAyNSAwLjQ1NjgyNSAwLjM3NDcyNSAwLjY5MDMyNSAwLjU1NTUgMC41ODU0MjUgMC40NTMyMjUgMS4xNzk0IDAuNDU0ODc1IDEuNzYxOSAwLjAwNDY1IDAuMTkzOTUgLTAuMTQ5OTUgMC4zNzg2NzUgLTAuMzExODUgMC41NjkwMjUgLTAuNDY2NSAwLjg2MzQyNSAtMC43MDE0NzUgMS43Mzg2NzUgLTAuNzY5MSAyLjU4NzcgLTAuMTQzNTVsMC4wMjU3MjUgMC4wMTkxNzVjMC4yNzE3NzUgMC4yMDQ4NSAwLjQ3NCAwLjE5NDUyNSAwLjc0NDggMC4wNTk1MjVsMC4xMzE4MjUgLTAuMDY1OTI1YzEuMjA3NzUgLTAuNjA1NTUgMi4zOTI2NSAtMS4yNDkwMjUgMy40ODY2NSAtMi4wNDg3MjUgMC4xNzcgLTAuMTI5Mzc1IDAuMzUyMyAtMC4yNjEwNzUgMC41Mjg0IC0wLjM5MTdaTTQuMDMzNjc1IDIuMjczOTU3NUM2LjAwNjk1IDMuMTY0MiA3Ljc3OSA0LjM2MTc1IDkuMzg5NTUgNS44MDExNWMyLjAwNDAyNSAxLjc5MTEyNSAzLjU4MzQgMy45MDYxNSA0Ljc0OTk1IDYuMzI1MSAwLjYxMzk3NSAxLjI3MzIyNSAxLjA5MTUgMi41OTU2NSAxLjMxMDgyNSAzLjk5OTcyNWwwLjAxMDU1IDAuMDY4ODUgMC4wMTU5MjUgMC4xMDk5NWMwLjAwMDMgMC4yNzE3IC0wLjIxNzM3NSAwLjQzMTM3NSAtMC40NDQyNSAwLjMzOTcyNSAtMS4xMjY1NSAtMC40NTUyMjUgLTIuMjg5OCAtMC43NzA5NSAtMy40OTE4NzUgLTAuOTUxMjUgLTEuNTg4NiAtMC4yMzgyNzUgLTMuMTU3MTc1IC0wLjE3OTAyNSAtNC43MDE2MjUgMC4yODYgLTEuMDI0MTc1IDAuMzA4Mzc1IC0xLjk5ODM3NSAwLjcyOTA1IC0yLjkwMzcyNSAxLjMwMzA1IC0wLjE2NzE1IDAuMTA1OTc1IC0wLjM0NDM3NSAwLjA4NzUgLTAuNDUzNSAtMC4wNDIyMjUgLTAuMTEzMzUgLTAuMTM0NzUgLTAuMTEzMiAtMC4yOTcyNzUgMC4wMTc3NSAtMC40Mzk0NzUgMC45NDU4MjUgLTEuMDI2OTI1IDEuNDk2MTI1IC0yLjI2MDE3NSAxLjg2MTAyNSAtMy41ODYzMjUgMC4zNTY0NzUgLTEuMjk1Njc1IDAuNDg2NjUgLTIuNjE5Njc1IDAuNDA2OCAtMy45NTkxNSAtMC4wNiAtMS4wMDY3NzUgLTAuMzAxNDUgLTEuOTgwOSAtMC42MTc0IC0yLjkzNzIgLTAuNDA4NzI1IC0xLjIzNzEyNSAtMC45MzkxNSAtMi40MTk2NzUgLTEuNTc4Njc1IC0zLjU1NDA3NSAtMC4xMDQ0NzUgLTAuMTg1MzUgLTAuMTAyNTI1IC0wLjMyOTc3NSAwLjAwMzEgLTAuNDQ4NDE1IDAuMTA5MzI1IC0wLjEyMjc5MjUgMC4yNTAxMjUgLTAuMTM1ODUgMC40NTkyNSAtMC4wNDE0Nzc1Wm02LjA4MzQgMi4zMTI0OTI1YzAuMTgyOTc1IDAuMDUzMzc1IDAuNDI5NDI1IDAuMTA2MDI1IDAuNjYxMjUgMC4xOTYyNSAwLjkyNTYyNSAwLjM2MDI3NSAxLjcyMzA3NSAwLjkzMTg3NSAyLjQ4Mjc3NSAxLjU1NjM1IDEuMjM0NjUgMS4wMTQ5MjUgMi4zNjUxNzUgMi4xMzc0NzUgMy4zNzYxNzUgMy4zNzU1NSAwLjcwMzY1IDAuODYxNzI1IDEuMjgwOTI1IDEuODA5NTc1IDEuODA3MTc1IDIuNzg4MDI1IDAuNTk2NzI1IDEuMTA5NTI1IDEuMTEwNiAyLjI1NjUyNSAxLjU0NjggMy40MzgxNWwwLjAzMDMgMC4wODI1YzAuMDExNSAwLjAzMTQgMC4wMjMzNSAwLjA2MjY1IDAuMDMzOTc1IDAuMDk0Mzc1IDAuMDQ1OTUgMC4xMzY2IDAuMDQwMjI1IDAuMjY4NzUgLTAuMDY2OCAwLjM3MzE1IC0wLjEwOTMgMC4xMDY2IC0wLjI0MDMgMC4xMTM2MjUgLTAuMzc4NjUgMC4wNTk1MjVsLTAuMDA5NjUgLTAuMDAzODc1Yy0wLjE5ODMgLTAuMDgxNSAtMC4zOTkyNSAtMC4xNTY3MjUgLTAuNTk3MiAtMC4yMzkwMjVsLTAuMDg0NjI1IC0wLjAzNTcyNWMtMC41NTY4MjUgLTAuMjM5MDI1IC0xLjEyOTA3NSAtMC4yODY4MjUgLTEuNzE4NDI1IC0wLjE1MjkyNSAtMC4wNTQzMjUgMC4wMTIzNSAtMC4xMDk0MjUgMC4wMjE3IC0wLjE2NDUgMC4wMzAxNzUgLTAuMjE4NjI1IDAuMDMzNjc1IC0wLjM1NTE1IC0wLjA1MTc3NSAtMC40MTQ4NSAtMC4yNjM1NSAtMC41NzQwMjUgLTIuMDM2NSAtMS4zODMzIC0zLjk3NTc3NSAtMi40MDc4NSAtNS44MjZsLTAuMDUxMjc1IC0wLjA5MjFjLTAuNjYwNTI1IC0xLjE4MDMyNSAtMS40MTY3NzUgLTIuMjkwMiAtMi4zOTk1NSAtMy4yMzMyMjUgLTAuNTgwMjUgLTAuNTU2ODI1IC0xLjE5MDg3NSAtMS4wNzU5NzUgLTEuODY1MyAtMS41MTY5IC0wLjE1NjI1IC0wLjEwMjE1IC0wLjIxNDggLTAuMjQzOTI1IC0wLjE2MzM1IC0wLjM5ODcgMC4wNTA2NSAtMC4xNTIyNSAwLjE2ODgyNSAtMC4yMTIgMC4zODM1NzUgLTAuMjMyMDI1Wm0tNS40OTM0IC0xLjI5MjNjMC4wMDE5IDAuMDUxNTI1IDAuMDE1NyAwLjA5MTc3NSAwLjAzNDQyNSAwLjEyOTUyNSAwLjQyODg1IDAuODY0OTc1IDAuODAxNzc1IDEuNzUzNCAxLjEwNDY3NSAyLjY3MDE3NSAwLjI4NzM1IDAuODY5NyAwLjUwNzcyNSAxLjc1NjEyNSAwLjYxMzIyNSAyLjY2NzYgMC4xMTgxNSAxLjAyMDMgMC4wNjk1NSAyLjAzNzkgLTAuMDcwNDI1IDMuMDUyNyAtMC4xODQzIDEuMzM2MzUgLTAuNTU0OSAyLjYxNDUyNSAtMS4xOTQxNzUgMy44MDgzMjVsLTAuMDc0MzUgMC4xMzkxMjVjLTAuMDM3MjI1IDAuMDY5Nzc1IC0wLjA3NDY1IDAuMTQwMDI1IC0wLjExMjcyNSAwLjIxMTM1IDAuMDIzNiAwLjAwNjM3NSAwLjAzNTU1IDAuMDE0MDI1IDAuMDQzMjUgMC4wMTA5NzUgMC4wNjczMjUgLTAuMDI2NiAwLjEzNDMyNSAtMC4wNTQxMjUgMC4yMDA2IC0wLjA4MzIyNSAxLjM1Njc3NSAtMC41OTU1NSAyLjc3MDU1IC0wLjk1NTIgNC4yNTU0IC0wLjk5MjE3NSAxLjY5NTU1IC0wLjA0MjIgMy4zMzc3NzUgMC4yNjM0MjUgNC45NDE1IDAuNzk1ODI1bDAuMTA5NDc1IDAuMDM2Mzc1YzAuMDc5MzI1IDAuMDI2MDI1IDAuMTYzOTc1IDAuMDUyODc1IDAuMjczNiAwLjA4ODM3NSAtMC42NDk3IC0yLjg0MzcgLTEuOTk2NDI1IC01LjI4NzkyNSAtMy44MTE2NSAtNy40ODY2NzUgLTEuNzQ5OSAtMi4xMTk1NzUgLTMuODc4Mjc1IC0zLjc3NTc1IC02LjMxMjgyNSAtNS4wNDgyNzVabTguMDU2NDI1IDMuNDQ3OCAwLjAyMTQ3NSAwLjAyNDMgMC4wNDI3IDAuMDQ3NmMwLjAxNjQ3NSAwLjAxODU1IDAuMDMxNSAwLjAzNjAyNSAwLjA0NTUyNSAwLjA1NDIyNSAwLjA5OTUyNSAwLjEyODk1IDAuMjAxMjUgMC4yNTY0NSAwLjMwMzQ1IDAuMzgzNjc1bDAuMTY2OTI1IDAuMjA3NjI1YzAuMjUwODI1IDAuMzEyNSAwLjQ5ODQgMC42MjcxIDAuNzE2MiAwLjk2MTE1IDEuMzc3NDI1IDIuMTEyNiAyLjM5MDI3NSA0LjM5NjkyNSAzLjEyODY3NSA2LjgwNDI3NWwwLjAyMjI3NSAwLjA3M2MwLjAzODM1IDAuMTI2MDc1IDAuMDkxMDUgMC4xNjE0NzUgMC4yMTM5IDAuMTQyOTI1bDAuMDA4NSAtMC4wMDEzNWMwLjU1MjM1IC0wLjA5MiAxLjA5MjE3NSAtMC4wNDQyIDEuNjE1Njc1IDAuMTU3NDI1bDAuMDI3MDUgMC4wMTA1NWMwLjA1MDAyNSAwLjAxOTgyNSAwLjEwMzQ3NSAwLjAzMDg3NSAwLjIwMDQyNSAwLjA1OTE1IC0wLjcwOTE3NSAtMS43NjkzMjUgLTEuNTQ3Mjc1IC0zLjQxNjMyNSAtMi42MDc4IC00Ljk1MTYyNSAtMC45MTcwNzUgLTEuMzI3NjUgLTMuMzcyNzI1IC0zLjY4NDcgLTMuOTA0OTc1IC0zLjk3MjkyNVoiIHN0cm9rZS13aWR0aD0iMC4yNSI+PC9wYXRoPgo8L3N2Zz4=` },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/000000' },
  { name: 'Anthropic', icon: 'https://cdn.simpleicons.org/anthropic/000000' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/000000' },
  { name: 'After Effects', icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNjUuNzVhMy45IDMuOSAwIDAgMC0zLjkgMy45djE0LjdhMy45IDMuOSAwIDAgMCAzLjkgMy45aDE0LjdhMy45IDMuOSAwIDAgMCAzLjktMy45VjQuNjVhMy45IDMuOSAwIDAgMC0zLjktMy45em0tMi40IDMuOWEyLjQgMi40IDAgMCAxIDIuNC0yLjRoMTQuN2EyLjQgMi40IDAgMCAxIDIuNCAyLjR2MTQuN2EyLjQgMi40IDAgMCAxLTIuNCAyLjRINC42NWEyLjQgMi40IDAgMCAxLTIuNC0yLjR6bTEuMjYyIDExLjgyMmwzLjE5NC05LjEyOHYtLjY2aDIuNTVsMy41MzQgOS43ODhIMTAuNmwtLjgzMi0yLjI4N0g2LjMwOWwtLjc3NSAyLjI4N3ptMy4zNDUtNC4yMzNIOS4yTDguMDMgOC40MjJ6TTE5LjMyOSAxNC42djEuN2MtLjM0Ny4xNC0xLjMwOC40MTctMi4zODEuNDE3Yy0xLjM0MiAwLTMuNzgtLjY0My0zLjc4LTMuOTg4YzAtMi45NDggMi4xNzQtMy43OTggMy43OC0zLjc5OGMxLjQzNiAwIDMuMDQyIDEuMDU4IDMuMDQyIDMuMDh2MS4zMjNoLTQuNjQ4Yy4xMzIuNTM1LjY5MSAxLjYwNiAxLjg3IDEuNjA2czEuOTAzLS4yMjcgMi4xMTctLjM0bS0zLjk2OS0yLjY4M2gyLjcwM2MtLjAzMi0uNDY2LS4zNC0xLjM5OS0xLjMyMy0xLjM5OXMtMS4zMy45MzItMS4zOCAxLjM5OSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+` },
  { name: 'Illustrator', icon: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS43NSA0LjY1YTMuOSAzLjkgMCAwIDEgMy45LTMuOWgxNC43YTMuOSAzLjkgMCAwIDEgMy45IDMuOXYxNC43YTMuOSAzLjkgMCAwIDEtMy45IDMuOUg0LjY1YTMuOSAzLjkgMCAwIDEtMy45LTMuOXptMy45LTIuNGEyLjQgMi40IDAgMCAwLTIuNCAyLjR2MTQuN2EyLjQgMi40IDAgMCAwIDIuNCAyLjRoMTQuN2EyLjQgMi40IDAgMCAwIDIuNC0yLjRWNC42NWEyLjQgMi40IDAgMCAwLTIuNC0yLjR6bTExLjc5OCA2LjQyMmExIDEgMCAxIDAgMC0yYTEgMSAwIDAgMCAwIDJtMSA4LjNWOS43NDloLTJ2Ny4yMjN6TTguMDcgNy44NDRsLTMuMTk0IDkuMTI4aDIuMDIybC43NzUtMi4yODdoMy40NThsLjgzMiAyLjI4N2gyLjE5MkwxMC42MiA3LjE4M0g4LjA3em0yLjQ5NCA0Ljg5NUg4LjIyMWwxLjE3Mi0zLjgxN3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==` }
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
