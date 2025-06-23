import { Project } from '../types';

export const projects = [
  {
    id: '1',
    title: 'BMTI Internal System',
    description: 'A web-based internal management platform for BMTI with user roles, asset tracking, and reporting.',
    longDescription: 'An advanced Laravel-based system designed for internal operations of BMTI, including user roles, asset logs, maintenance tracking, and reporting. Built with responsive design and secure authentication.',
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Laravel', 'MySQL', 'REST API'],
    category: 'Web Application',
    teamMembers: ['1', '2'],
    demoUrl: 'https://demo.bmti.devapps.io',
    githubUrl: '',
    featured: true
  },
  {
    id: '2',
    title: 'Smart LMS',
    description: 'An online learning platform with course modules and user analytics.',
    longDescription: 'Smart LMS provides instructors and students with a seamless experience in managing learning modules, tracking progress, and conducting evaluations. Includes dashboards and role-based access.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL'],
    category: 'LMS',
    teamMembers: ['1', '3', '4'],
    demoUrl: 'https://demo.lms.devapps.io',
    githubUrl: '',
    featured: false
  },
  {
    id: '3',
    title: 'QA Test Report Portal',
    description: 'Dashboard for automated test case logs and QA metrics.',
    longDescription: 'This portal connects to test runners like Katalon and Selenium to display execution logs, success/failure rates, and automated reports for dev and QA teams.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Katalon', 'Chart.js', 'Express.js'],
    category: 'QA Tool',
    teamMembers: ['1', '6'],
    demoUrl: 'https://demo.qareport.devapps.io',
    githubUrl: '',
    featured: false
  },
  {
    id: '4',
    title: 'Project Tracker',
    description: 'Track progress, assignments, and status updates across teams.',
    longDescription: 'A project management tool for small teams to manage tasks, assign deadlines, and get real-time updates. Built with React and MongoDB.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Project Management',
    teamMembers: ['3', '4', '5'],
    demoUrl: 'https://demo.projecttracker.devapps.io',
    githubUrl: '',
    featured: false
  },
  {
    id: '5',
    title: 'E-Commerce Backend API',
    description: 'Backend API for a scalable e-commerce system with payment support.',
    longDescription: 'RESTful API using Laravel for managing products, orders, users, and secure payments. JWT-based auth with Stripe integration.',
    image: 'https://images.pexels.com/photos/5702206/pexels-photo-5702206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    technologies: ['Laravel', 'JWT', 'Stripe'],
    category: 'API',
    teamMembers: ['1', '2'],
    demoUrl: 'https://demo.ecommerce.devapps.io',
    githubUrl: '',
    featured: false
  }
];
