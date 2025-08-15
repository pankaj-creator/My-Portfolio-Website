import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Building2, Github, FileText, Globe, Award, Eye } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ModalView from './ModalView';

interface ProjectLink {
  type: 'github' | 'paper' | 'demo' | 'view' | 'Certificate' | 'Award';
  url: string;
  label: string;
}

interface Project {
  title: string;
  period: string;
  company: string;
  role: string;
  techStack: string[];
  description: string;
  keyImpacts: string[];
  metrics: string;
  status: string;
  highlight?: boolean;
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    title: 'FocusBuddy – AI-Powered Productivity Platform',
    period: 'July 2024 – Present',
    company: 'Personal Project',
    role: 'Full-Stack Developer & Project Lead',
    techStack: ['React.js', 'TypeScript', 'Spring Boot', 'Python', 'FastAPI', 'OpenAI API', 'Gemini AI', 'Chrome Extension', 'JWT', 'MongoDB'],
    description: '🚀 FEATURED PROJECT: Comprehensive AI-powered productivity platform with intelligent task management and smart distraction blocking.',
    keyImpacts: [
      'Built scalable microservices architecture with AI service integration',
      'Developed Chrome extension with Manifest V3 for cross-platform functionality',
      'Implemented dual AI personality modes for personalized user coaching',
      'Created real-time progress tracking with advanced analytics dashboard',
      'Designed secure JWT-based authentication with Spring Security'
    ],
    metrics: 'Full-Stack • AI Integration • Cross-Platform',
    status: 'Under Development',
    highlight: true
  },
  {
    title: 'Neural-ARM: AI-Powered Association Rule Mining',
    period: 'Jan 2021 – Jun 2022',
    company: 'Academic Research Project - AKTU',
    role: 'Lead Researcher & Developer',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Jupyter', 'Neural Networks', 'Data Mining'],
    description: 'Developed an innovative ANN-based approach for accelerated Association Rule Mining with denoising autoencoders, significantly outperforming traditional algorithms.',
    keyImpacts: [
      'Achieved significant execution time reduction vs traditional ARM algorithms',
      'Published 2 peer-reviewed research papers in international journals',
      'Implemented novel denoising autoencoder architecture for pattern mining',
      'Maintained high-quality association rules while improving processing speed'
    ],
    metrics: '2 Research Publications • Novel Algorithm • Academic Excellence',
    status: 'Published',
    links: [
      {
        type: 'github',
        url: 'https://github.com/pankaj-creator/Neural-ARM',
        label: 'View Code'
      },
      {
        type: 'paper',
        url: 'https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth',
        label: 'IJRASET Paper'
      },
      {
        type: 'paper',
        url: 'certificates/RP_9788770227667C9.pdf',
        // downloadUrl: 'https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf',
        label: 'River Publishers'
      }
    ]
  },
  {
    title: 'GeM 2.0 – Government e-Marketplace',
    period: 'Dec 2024 – Present',
    company: 'TCS',
    role: 'Senior UI Developer',
    techStack: ['React.js', 'Redux Toolkit', 'GitLab', 'Jenkins', 'CI/CD'],
    description: 'Leading UI development for India national procurement platform serving millions of users.',
    keyImpacts: [
      'Built real-time notification system for government procurement',
      'Implemented CI/CD pipelines reducing deployment time by 50%',
      'Achieved 99.9% uptime with robust error handling'
    ],
    metrics: '10M+ users • High-volume transactions',
    status: 'Development'
  },
  {
    title: 'Tulip Manufacturing Platform',
    period: 'Jan 2024 – Nov 2024',
    company: 'TCS',
    role: 'Full Stack Developer',
    techStack: ['Tulip', 'Python', 'API Integration', 'Automation'],
    description: 'Digitized pharmaceutical manufacturing workflows with custom automation solutions.',
    keyImpacts: [
      'Reduced production processing time by 20%',
      'Automated 70% of manual tasks with Python scripts',
      'Integrated 5+ manufacturing systems seamlessly'
    ],
    metrics: '30% less downtime • 5 systems integrated',
    status: 'Completed',
    links: [{
      type: 'Award',
      url: '/certificates/On_The_Spot_Award_Bayer.pdf',
      label: 'On-the-Spot Award'
    }
    ]
  },
  {
    title: 'NY State Department of Labor Portal',
    period: 'Aug 2022 – Dec 2023',
    company: 'TCS',
    role: 'Frontend Lead',
    techStack: ['Angular', 'Spring Boot', 'GCP', 'IBM DB2'],
    description: 'Led modernization of state government portal improving accessibility and performance.',
    keyImpacts: [
      'Boosted frontend performance by 40%',
      'Led UI module team of 10 developers',
      'Delivered releases 15% ahead of schedule'
    ],
    metrics: '2x On-the-Spot Awards • 40% performance gain',
    status: 'Completed',
    links: [{
      type: 'Award',
      url: '/certificates/On_The_Spot_Award_NYSDOL.pdf',
      label: 'On-the-Spot Award'
    }
    ]
  },
  {
    title: 'Virtual Lab Development',
    period: 'July 2020 – Sept 2020',
    company: 'Academic Project - IIT Kanpur',
    role: 'Web Application Developer',
    techStack: ['Html/css', 'JavaScript', 'GitHub Pages', 'Interactive UI'],
    description: 'Built online laboratory experiments during COVID-19 for remote engineering education.',
    keyImpacts: [
      'Supported 10,000+ students during pandemic',
      'Developed 3 interactive queue algorithm labs',
      'Deployed using GitHub Pages for scalability'
    ],
    metrics: '10K+ students • Gold Certificate',
    status: 'Live',
    links: [
      {
        type: 'github',
        url: 'https://github.com/pankaj-creator/Virtual_Lab_Development',
        label: 'View Code'
      },
      {
        type: 'view',
        url: 'https://virtuallabsdev.netlify.app/',
        label: 'Click to View'
      },
      {
        type: 'Award',
        url: '/certificates/GOLD_DEVELOPER_CERTIFICATE_eB3.png',
        label: 'Gold Developer Certificate'
      }
    ]
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<{
    title: string;
    content: {
      type: 'pdf' | 'image' | 'link';
      url: string;
      description?: string;
    };
    details?: {
      organization?: string;
      year?: string;
      description?: string;
    };
  } | null>(null);

  const openModal = (link: ProjectLink, projectTitle: string) => {
    let contentType: 'pdf' | 'image' | 'link' = 'link';

    if (link.url.endsWith('.pdf')) {
      contentType = 'pdf';
    } else if (link.url.endsWith('.png') || link.url.endsWith('.jpg') || link.url.endsWith('.jpeg')) {
      contentType = 'image';
    }

    setSelectedModal({
      title: `${projectTitle} - ${link.label}`,
      content: {
        type: contentType,
        url: link.url,
        description: `${link.label} for ${projectTitle}`
      },
      details: {
        description: `This is ${link.label.toLowerCase()} related to the ${projectTitle} project.`
      }
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedModal(null);
  };
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            High-impact projects showcasing full-stack development, team leadership, and measurable business results
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${project.highlight ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' : ''
                  }`}
              >
                {project.highlight && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2">
                    <span className="text-sm font-semibold">⭐ FEATURED PROJECT ⭐</span>
                  </div>
                )}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${project.highlight ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Building2 size={14} className="mr-1" />
                        <span className="font-medium">{project.company}</span>
                        <span className="mx-2">•</span>
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        {project.period}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Production' ? 'bg-green-100 text-green-800' :
                      project.status === 'Development' ? 'bg-orange-100 text-orange-800' :
                        project.status === 'Live' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'Published' ? 'bg-purple-100 text-purple-800' :
                              project.status === 'Under Development' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                      }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-blue-900">
                      📊 Impact: {project.metrics}
                    </p>
                  </div>

                  {/* Key Impacts */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.keyImpacts.map((impact, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className={project.links ? "mb-4" : ""}>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  {project.links && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Links:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, i) => (
                          <div key={i}>
                            {(link.type === 'Award' || link.type === 'Certificate' ||
                              (link.url.endsWith('.pdf') || link.url.endsWith('.png') ||
                                link.url.endsWith('.jpg') || link.url.endsWith('.jpeg'))) ? (
                              <motion.button
                                onClick={() => openModal(link, project.title)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${link.type === 'Award' || link.type === 'Certificate'
                                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                                  : 'bg-purple-600 text-white hover:bg-purple-700'
                                  }`}
                              >
                                <Eye size={12} className="mr-1" />
                                View {link.label}
                              </motion.button>
                            ) : (
                              <motion.a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${link.type === 'github'
                                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                                  : link.type === 'paper'
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-green-600 text-white hover:bg-green-700'
                                  }`}
                              >
                                {link.type === 'github' && <Github size={12} className="mr-1" />}
                                {link.type === 'view' && <Globe size={12} className="mr-1" />}
                                {link.type === 'paper' && <FileText size={12} className="mr-1" />}
                                {link.type === 'demo' && <ExternalLink size={12} className="mr-1" />}
                                {link.label}
                              </motion.a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Interested in seeing more projects or discussing potential opportunities?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Connect
              <ExternalLink size={16} className="ml-2" />
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Modal View for Certificates and Documents */}
        {selectedModal && (
          <ModalView
            isOpen={modalOpen}
            onClose={closeModal}
            title={selectedModal.title}
            content={selectedModal.content}
            details={selectedModal.details}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
