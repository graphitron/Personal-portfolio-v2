export interface ProjectMetric {
  value: string;
  label: string;
  trend?: 'up' | 'neutral';
}

export interface CoreProject {
  id: string;
  title: string;
  tagline: string;
  //description: string;
  roles: string[];
  badges?: string[];
  metrics?: ProjectMetric[]; // New field for success metrics
  image: string;
  gallery?: string[]; // New field for multiple scrolling images
  ctaText: string;
  //secondaryCta?: string;
}

export interface VisualProject {
  id: string;
  title: string;
  description: string;
  tools: string[];
  tags?: string[];
  image: string;
  gallery?: string[]; // New field for multiple scrolling images
  linkText?: string;
  link?: string;
  size?: 'social' | 'a4' | 'presentation' | 'wide'; // New field for aspect ratios
}

export interface ExperimentItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface SkillSet {
  category: string;
  items: string[];
}