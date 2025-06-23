import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoTrack - Sustainability Dashboard',
    description: 'A comprehensive platform for tracking and managing environmental impact across organizations.',
    longDescription: 'EcoTrack is a full-featured sustainability management platform that helps organizations monitor their carbon footprint, track renewable energy usage, and implement green initiatives. Built with React and Node.js, it features real-time analytics, automated reporting, and integration with IoT sensors.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'AWS'],
    category: 'Web Application',
    teamMembers: ['1', '2', '3'],
    demoUrl: 'https://ecotrack-demo.example.com',
    githubUrl: 'https://github.com/team/ecotrack',
    featured: true
  },
  {
    id: '2',
    title: 'FinanceFlow - Personal Finance Manager',
    description: 'Mobile-first financial management app with AI-powered insights and budget optimization.',
    longDescription: 'FinanceFlow revolutionizes personal finance management with intelligent categorization, predictive analytics, and personalized financial advice. The app features bank integration, bill reminders, investment tracking, and AI-powered spending insights.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['React Native', 'Python', 'TensorFlow', 'MongoDB', 'Stripe API', 'Firebase'],
    category: 'Mobile Application',
    teamMembers: ['1', '4'],
    demoUrl: 'https://financeflow-demo.example.com',
    githubUrl: 'https://github.com/team/financeflow',
    featured: true
  },
  {
    id: '3',
    title: 'CollabSpace - Remote Team Platform',
    description: 'All-in-one collaboration platform designed for remote teams with integrated project management.',
    longDescription: 'CollabSpace combines video conferencing, project management, file sharing, and team communication in one seamless platform. Built for remote teams, it features real-time collaboration tools, automated workflows, and advanced analytics.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Vue.js', 'Django', 'WebRTC', 'Redis', 'WebSocket', 'Docker'],
    category: 'Web Application',
    teamMembers: ['2', '3'],
    demoUrl: 'https://collabspace-demo.example.com',
    githubUrl: 'https://github.com/team/collabspace',
    featured: false
  },
  {
    id: '4',
    title: 'HealthHub - Telemedicine Platform',
    description: 'Secure telemedicine platform connecting patients with healthcare providers.',
    longDescription: 'HealthHub is a HIPAA-compliant telemedicine platform that enables secure video consultations, appointment scheduling, prescription management, and health record sharing. Features include real-time chat, file sharing, and integration with health monitoring devices.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Encryption', 'HIPAA'],
    category: 'Healthcare',
    teamMembers: ['1', '2', '3', '4'],
    demoUrl: 'https://healthhub-demo.example.com',
    githubUrl: 'https://github.com/team/healthhub',
    featured: true
  },
  {
    id: '5',
    title: 'EduLearn - Online Learning Platform',
    description: 'Interactive e-learning platform with gamification and progress tracking.',
    longDescription: 'EduLearn transforms online education with interactive courses, gamification elements, progress tracking, and social learning features. The platform supports multiple content types, assessments, and provides detailed analytics for both learners and instructors.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Next.js', 'Prisma', 'GraphQL', 'MySQL', 'Video.js', 'Stripe'],
    category: 'Education',
    teamMembers: ['1', '2', '4'],
    githubUrl: 'https://github.com/team/edulearn',
    featured: false
  },
  {
    id: '6',
    title: 'RetailPro - E-commerce Analytics',
    description: 'Advanced analytics dashboard for e-commerce businesses with AI-powered insights.',
    longDescription: 'RetailPro provides comprehensive analytics for e-commerce businesses, featuring customer behavior analysis, inventory optimization, sales forecasting, and marketing campaign performance tracking. The platform uses machine learning to provide actionable insights.',
    image: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Angular', 'Python', 'FastAPI', 'ClickHouse', 'TensorFlow', 'D3.js'],
    category: 'Analytics',
    teamMembers: ['3', '4'],
    demoUrl: 'https://retailpro-demo.example.com',
    githubUrl: 'https://github.com/team/retailpro',
    featured: false
  }
];