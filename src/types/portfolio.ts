export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Frameworks'
  | 'Tools'
  | 'Other';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory | string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  color?: string; // tailwind color name or hex
  tags?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string; // ISO or human-readable
  endDate?: string; // optional or 'Present'
  location?: string;
  description?: string;
  responsibilities?: string[];
  tech?: string[];
  website?: string;
}

export interface Project {
  id: string;
  name: string;
  image?: string; // public path
  shortDescription: string;
  detailedDescription?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  date?: string;
  features?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  grade?: string;
  coursework?: string[];
}

export interface Hobby {
  id: string;
  name: string;
  description?: string;
  icon?: string; // emoji or public path
}

export type ActivityType = 'club' | 'leadership' | 'certification' | 'award' | 'other';

export interface Activity {
  id: string;
  title: string;
  type?: ActivityType;
  organization?: string;
  date?: string;
  details?: string;
}

export interface ContactInfo {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  whatsapp?: string; // full phone or whatsapp link
  github?: string;
  linkedin?: string;
  permanentAddress?: string;
  currentLocation?: string;
}
