import {
  Boxes, Brain, Braces, Cloud, Code2, Coffee, Cpu, Database, FileCode, GitBranch, Github,
  Globe, HardDrive, Layers, ListTree, Network, Palette, Server, ShieldAlert, Table2, Terminal, type LucideIcon,
} from 'lucide-react';

/* ============ EDIT THESE PLACEHOLDERS ============ */
export const LINKS = {
  github: 'https://github.com/prathmeshlinge415-commits',
  linkedin: 'https://www.linkedin.com/in/prathmesh-linge45/',
  email: 'prathmeshlinge415@gmail.com',
  resume: '/resume/Prathmesh_Ravindra_Linge_Resume.pdf',
};
/** Returns a safe href: real links pass through, placeholders become "#". */
export const isReal = (v: string) => /^(https?:\/\/|mailto:|\/)/.test(v) || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
export const toHref = (v: string, mail = false) =>
  isReal(v) ? (mail && !v.startsWith('mailto:') ? `mailto:${v}` : v) : '#';
/* ================================================ */

export const PROFILE = {
  name: 'Prathmesh Ravindra Linge',
  role: 'Aspiring Software Developer | Java | Web | AI',
  headline: 'Building Practical Software Solutions with Java, Web & AI.',
  intro:
    'Computer Science student focused on Java, web development and AI. I enjoy building practical applications and solving real-world problems through code.',
  college: 'Yashoda Technical Campus, Satara',
  location: 'Satara, Maharashtra, India',
  graduation: '2027',
};

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_BADGES = [
  { label: 'Java' }, { label: 'Web Development' }, { label: 'SQL' },
  { label: 'AI/ML', learning: true }, { label: 'React', learning: true }, { label: 'Spring Boot', learning: true },
];

export interface Skill { name: string; icon: LucideIcon; learning?: boolean }
export interface SkillCategory { title: string; skills: Skill[] }

export const SKILL_CATEGORIES: SkillCategory[] = [
  { title: 'Programming', skills: [
    { name: 'Java', icon: Coffee }, { name: 'C', icon: Cpu }, { name: 'JavaScript', icon: Braces }, { name: 'Python', icon: Code2, learning: true } ] },
  { title: 'Computer Science', skills: [
    { name: 'OOP', icon: Boxes }, { name: 'Basic DSA', icon: Network }, { name: 'SQL', icon: Table2 }, { name: 'DBMS', icon: Database },
    { name: 'Java Collections', icon: ListTree }, { name: 'Exception Handling', icon: ShieldAlert } ] },
  { title: 'Web Development', skills: [
    { name: 'HTML', icon: FileCode }, { name: 'CSS', icon: Palette }, { name: 'JavaScript', icon: Globe },
    { name: 'React', icon: Layers, learning: true }, { name: 'Spring Boot', icon: Server, learning: true } ] },
  { title: 'Database', skills: [
    { name: 'MySQL', icon: HardDrive }, { name: 'SQL', icon: Table2 } ] },
  { title: 'Tools', skills: [
    { name: 'Git', icon: GitBranch }, { name: 'GitHub', icon: Github }, { name: 'VS Code', icon: Terminal } ] },
  { title: 'AI / Cloud', skills: [
    { name: 'AI/ML Fundamentals', icon: Brain }, { name: 'AWS / Cloud', icon: Cloud, learning: true } ] },
];

export const CURRENT_SKILLS = ['Java', 'C Programming', 'OOP', 'Java Collections', 'Exception Handling', 'Basic DSA', 'SQL', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Web Development Fundamentals'];
export const LEARNING_SKILLS = ['Spring Boot', 'React', 'Advanced DSA', 'Python', 'AI/ML', 'AWS / Cloud'];

export interface Project {
  id: 'edutrack' | 'sanjeevani' | 'healthcare' | 'design-agent';
  name: string; fullName: string; category: string; description: string;
  features: string[]; tech: string[]; featured?: boolean;
  /** Optional honesty note shown on the card (e.g. prototype / not clinically validated). */
  note?: string;
  /** Replace 'PROJECT_GITHUB_URL' with the real repo URL. Until then the button shows as "coming soon". */
  githubUrl: string;
  /** Replace with a real demo URL, or set to null if the project has no live demo (hides the button). */
  liveUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: 'edutrack', name: 'EduTrack-AI', fullName: 'AI-Based Student Attendance & Placement Monitoring System',
    category: 'Academic / Personal Project', featured: true,
    description: 'A student monitoring platform designed to help educational institutions track student attendance and placement preparation progress in one system.',
    features: ['Student management', 'Attendance monitoring', 'Company and internship tracking', 'Placement drive monitoring', 'Eligibility checking',
      'Aptitude, GD, Coding and HR round tracking', 'Placement progress monitoring', 'Student/parent communication', 'Notifications and audit tracking'],
    tech: ['Java', 'React', 'MySQL', 'AI features'], githubUrl: 'PROJECT_GITHUB_URL', liveUrl: 'PROJECT_LIVE_URL',
  },
  {
    id: 'sanjeevani', name: 'Sanjeevani Care', fullName: 'Integrated Hospital ERP System', category: 'Final Year / Healthcare Project', featured: true,
    description: 'An integrated hospital ERP system designed to connect patient registration, clinical records, pharmacy, laboratory, inventory, billing and administration in one platform.',
    features: ['Patient registration', 'Patient and clinical record management', 'Doctor appointments', 'Prescription management', 'Pharmacy management',
      'Laboratory management', 'Inventory and medicine expiry tracking', 'Billing', 'Hospital administration', 'Role-based access', 'Audit logging',
      'AI-assisted analytics', 'Patient record insights'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'AI/ML'],
    note: 'Advanced AI features are prototype/learning-focused and are not clinically validated.',
    githubUrl: 'PROJECT_GITHUB_URL', liveUrl: 'PROJECT_LIVE_URL',
  },
  {
    id: 'healthcare', name: 'AI Healthcare System', fullName: 'AI-Based Healthcare Assistant', category: 'Academic / AI Project',
    description: 'An educational AI healthcare assistant that provides general health information through a conversational interface. It is not intended to diagnose medical conditions or replace professional medical advice.',
    features: ['Conversational AI', 'General health information', 'User-friendly interface', 'Accessible interaction'],
    tech: ['AI/ML', 'Python', 'Web', 'API integration'], githubUrl: 'PROJECT_GITHUB_URL', liveUrl: 'PROJECT_LIVE_URL',
  },
  {
    id: 'design-agent', name: 'Design Agent', fullName: 'AI-Based Interior & Floor Plan Design Agent', category: 'AI / Personal Project',
    description: 'An AI-based design system that helps generate room layout concepts based on user requirements such as room dimensions and furniture needs.',
    features: ['Room dimension input', 'Furniture requirement input', 'AI-generated design concepts', '2D floor-plan generation', 'AI image generation / API integration'],
    tech: ['Java', 'Web frontend', 'AI image generation', 'API integration'], githubUrl: 'PROJECT_GITHUB_URL', liveUrl: 'PROJECT_LIVE_URL',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  certificateUrl?: string;
}

/**
 * Add ONLY certifications you have actually earned. The section shows a placeholder until this list has items.
 * Example (copy, then fill with real details):
 *   { name: 'Certification Name', issuer: 'Organization', date: 'Month Year', description: 'Short description' },
 */
export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Java Full Stack Development Virtual Internship',
    issuer: 'EduSkills',
    date: 'June 2025',
    description: 'Virtual internship focused on Java Full Stack Development.',
    certificateUrl: '/certificates/EduSkills-Java-Full-Stack-Certificate.pdf',
  },
];

export const LEARNING_STAGES = [
  { title: 'Core Programming', items: ['Java', 'OOP', 'Collections', 'Exception Handling'], status: 'done' },
  { title: 'Problem Solving', items: ['Arrays', 'Strings', 'Searching', 'Sorting', 'Stack', 'Queue', 'Basic DSA'], status: 'done' },
  { title: 'Database', items: ['SQL', 'MySQL', 'DBMS'], status: 'done' },
  { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React'], status: 'learning' },
  { title: 'Backend', items: ['Spring Boot', 'REST APIs'], status: 'learning' },
  { title: 'AI / ML', items: ['Python', 'AI/ML fundamentals'], status: 'learning' },
  { title: 'Cloud', items: ['AWS / Cloud fundamentals'], status: 'learning' },
] as const;

export const SERVICES = [
  { title: 'Java Applications', text: 'Console and desktop-style Java programs built on solid OOP.', icon: Coffee },
  { title: 'Student Management Systems', text: 'Record-keeping tools for students, attendance and results.', icon: Database },
  { title: 'CRUD Applications', text: 'Create, read, update and delete workflows backed by a database.', icon: Table2 },
  { title: 'Database-Based Applications', text: 'Apps designed around SQL and MySQL data models.', icon: Server },
  { title: 'Basic Web Applications', text: 'Responsive pages using HTML, CSS and JavaScript.', icon: Globe },
  { title: 'AI-Powered Academic Projects', text: 'Learning-focused projects that use AI/ML and APIs.', icon: Brain },
  { title: 'Project UI Development', text: 'Clean, responsive interfaces for project front ends.', icon: Palette },
  { title: 'College Project Assistance', text: 'Helping with planning, structure and implementation.', icon: Layers },
];
