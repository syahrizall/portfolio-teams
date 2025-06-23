import React from 'react';
import { Target, Users, Zap, Globe, Code, Award } from 'lucide-react';
import Card from '../components/UI/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve amazing results.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a positive difference in the world and society.'
    }
  ];

  const technologies = [
    { name: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', techs: ['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI', 'GraphQL'] },
    { name: 'Mobile', techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic', 'Expo'] },
    { name: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ClickHouse', 'Firebase'] },
    { name: 'Cloud & DevOps', techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx'] },
    { name: 'Tools & Others', techs: ['Git', 'Jest', 'Cypress', 'Figma', 'Adobe XD', 'Agile'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About DevApps
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are more than just a development team – we're innovators, problem-solvers, 
            and passionate creators dedicated to building the future of technology.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <Card className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  DevApps was born from a shared vision: to create a development team that 
                  combines technical excellence with creative innovation. What started as a group 
                  of passionate developers working on side projects has evolved into a full-service 
                  development team capable of tackling complex challenges across industries.
                </p>
                <p className="mb-6">
                  Our journey began in 2022 when we realized that the best solutions come from 
                  diverse perspectives and collaborative effort. Each member of our team brings 
                  unique skills and experiences, creating a synergy that allows us to approach 
                  problems from multiple angles and deliver exceptional results.
                </p>
                <p>
                  Today, we're proud to have worked on projects spanning healthcare, education, 
                  finance, and sustainability. Our commitment to quality, innovation, and client 
                  satisfaction has been the driving force behind our growth and success.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We stay current with the latest technologies and tools to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Recognition and milestones that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Best Team Collaboration</h3>
                <p className="text-blue-100">Awarded for outstanding teamwork and project delivery</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-bold mb-2">100% Project Success Rate</h3>
                <p className="text-blue-100">All projects delivered on time and within budget</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-blue-100">5-star average rating from all our clients</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Mission Statement */}
        <section>
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses and individuals with innovative digital solutions that drive growth, 
              enhance user experiences, and create positive impact. We are committed to delivering 
              exceptional quality while fostering a collaborative environment where creativity and 
              technical excellence thrive.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;