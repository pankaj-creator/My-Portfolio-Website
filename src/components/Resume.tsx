import React, { useEffect, useRef, useState } from 'react';
import { Download, Mail, Phone, Globe, MapPin, Linkedin, Award, FileText, Book, Eye, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResumeSectionHeading = ({ title }: { title: string }) => (
  <div className="mb-3 sm:mb-4 flex items-center">
    <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wider">{title}</h2>
    <div className="ml-3 sm:ml-4 flex-1 h-0.5 bg-blue-600"></div>
  </div>
);

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Resume
          </motion.h1>
          <motion.div 
            className="h-1 w-16 sm:w-24 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive overview of my professional experience, skills, and accomplishments.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 px-4">
            <motion.a
              href="/Pankaj_Kumar_Gond_Resume.pdf"
              download="Pankaj_Kumar_Gond_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2 flex-shrink-0" />
              <span className="text-center">Download ATS-Friendly PDF</span>
            </motion.a>
            <motion.a
              href="/resume-ats.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-blue-600 text-sm sm:text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} className="mr-2 flex-shrink-0" />
              <span className="text-center">View Online Resume</span>
            </motion.a>
          </div>
          
          <motion.div 
            className="text-center mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center mb-2">
              <Award size={18} className="text-blue-600 mr-2 flex-shrink-0" />
              <span className="font-semibold text-blue-800 text-sm sm:text-base">ATS-Optimized Resume</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-700 px-2">
              This resume is specifically formatted for Applicant Tracking Systems (ATS) with clean formatting, 
              proper keyword placement, and machine-readable structure to ensure maximum compatibility with hiring systems.
            </p>
          </motion.div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="p-4 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">PANKAJ KUMAR GOND</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 mt-4 text-gray-600">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <a href="mailto:pankajvk211@gmail.com" className="hover:text-blue-600 transition-colors text-sm sm:text-base break-all">pankajvk211@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <a href="tel:+916307386578" className="hover:text-blue-600 transition-colors text-sm sm:text-base">+91 6307386578</a>
              </div>
              <div className="flex items-center">
                <Globe size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <a href="https://erpankaj.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-sm sm:text-base break-all">erpankaj.netlify.app</a>
              </div>
              <div className="flex items-center">
                <Linkedin size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <a href="https://linkedin.com/in/pankaj-kumar-gond" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors text-sm sm:text-base">LinkedIn</a>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">New Delhi, India</span>
              </div>
            </div>
          </div>

          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-4 sm:p-8"
          >
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6 lg:space-y-8 order-2 lg:order-1">
              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="SKILLS" />
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">Frontend</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['React.js', 'Redux Toolkit', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">Backend & Database</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Java', 'Spring Boot', 'Python', 'Node.js', 'SQL', 'MongoDB', 'MySQL', 'IBM DB2'].map((skill) => (
                        <span key={skill} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">AI/ML & Data Science</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Neural Networks', 'Data Mining', 'OpenAI API'].map((skill) => (
                        <span key={skill} className="bg-pink-50 text-pink-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['AWS', 'GCP', 'Azure', 'Jenkins', 'GitLab CI/CD', 'Docker', 'SonarQube'].map((skill) => (
                        <span key={skill} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'Postman', 'Jira', 'Agile'].map((skill) => (
                        <span key={skill} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="EDUCATION" />
                <div className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900">Bachelor of Technology</h3>
                  <p className="text-gray-700">Information Technology</p>
                  <p className="text-gray-600">Dr. A.P.J Abdul Kalam Technical University</p>
                  <p className="text-gray-600">2018 – 2022</p>
                  <p className="text-gray-600">CGPA: 7.62/10</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="CERTIFICATIONS" />
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Award size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span>AWS Certified Cloud Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <Award size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Microsoft Azure Fundamentals (AZ-900)</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="ACHIEVEMENTS" />
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Award size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Best Team Award, TCS</span>
                  </li>
                  <li className="flex items-start">
                    <Award size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Golden Developer Certificate, IIT Kanpur</span>
                  </li>
                  <li className="flex items-start">
                    <Award size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <span>On-The-Spot Awards (x2), TCS</span>
                  </li>
                  <li className="flex items-start">
                    <FileText size={18} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <span>Published research papers on Association Rule Mining:</span>
                      <div className="ml-6 mt-1 space-y-1">
                        <div>
                          <a 
                            href="https://www.ijraset.com/research-paper/association-rule-mining-using-fp-growth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                          >
                            • IJRASET (2022) - FP-Growth & ANN Techniques
                          </a>
                        </div>
                        <div>
                          <a 
                            href="https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770227667C9.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline text-sm"
                          >
                            • River Publishers (2022) - Advanced ARM Techniques
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column (Professional Summary, Experience, Projects) */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8 order-1 lg:order-2">
              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="PROFESSIONAL SUMMARY" />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Full Stack Developer with 3+ years at TCS, specializing in AI integration, cloud technologies, and scalable web applications. 
                  Expert in React.js, Java, Spring Boot, AWS, and CI/CD pipelines. Published researcher in AI-powered data mining with 2 peer-reviewed papers. 
                  Proven track record of building intelligent applications, reducing system downtime by 25%, and leading cross-functional teams. 
                  Passionate about creating exceptional user experiences with cutting-edge technologies and modern architectures.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <ResumeSectionHeading title="PROFESSIONAL EXPERIENCE" />
                <div className="relative border-l-2 border-blue-600 pl-6 sm:pl-8 pb-2 ml-1 sm:ml-2">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">System Engineer</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 mb-2 text-sm sm:text-base">
                    <span className="font-medium">Tata Consultancy Services (TCS)</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="text-sm sm:text-base">July 2022 – Present</span>
                  </div>
                  <p className="text-blue-600 italic mb-3 sm:mb-4 text-sm">React.js, Java, Spring Boot, MySQL, AWS, GCP, GitLab, Redux, Axios, Git</p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>Developed full-stack applications with optimized RESTful APIs, reducing response latency by 20%.</li>
                    <li>Built a modular notification engine that supports multiple delivery channels using React.js, Redux, and REST APIs.</li>
                    <li>Integrated services with AWS (S3, Lambda, SQS), enabling scalable, event-driven microservices.</li>
                    <li>Automated CI/CD pipelines using GCP, improving deployment efficiency and reducing release cycles by 30%.</li>
                    <li>Collaborated with cross-functional teams in agile workflows to meet functional and quality standards.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <ResumeSectionHeading title="PROJECTS" />

                <div className="relative border-l-2 border-blue-600 pl-6 sm:pl-8 pb-4 sm:pb-6 ml-1 sm:ml-2">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">FocusBuddy – AI-Powered Productivity Platform</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 mb-1 text-sm">
                    <span className="font-medium">Full-Stack Developer & Project Lead</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>Personal Project</span>
                  </div>
                  <p className="text-blue-600 italic mb-2 text-xs sm:text-sm">React.js, TypeScript, Spring Boot, Python, FastAPI, OpenAI API, Gemini AI, Chrome Extension, JWT, MongoDB</p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>Built scalable microservices architecture with AI service integration for intelligent task management.</li>
                    <li>Developed Chrome extension with Manifest V3 for cross-platform functionality and smart distraction blocking.</li>
                    <li>Implemented dual AI personality modes for personalized user coaching and real-time progress tracking.</li>
                  </ul>
                </div>

                <div className="relative border-l-2 border-blue-600 pl-6 sm:pl-8 pb-4 sm:pb-6 ml-1 sm:ml-2">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Government e-Marketplace (GeM 2.0)</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 mb-1 text-sm">
                    <span className="font-medium">React Developer</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>Ministry of Commerce, Government of India</span>
                  </div>
                  <p className="text-blue-600 italic mb-2 text-xs sm:text-sm">React.js, Redux, REST APIs, GitLab</p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>Built notification module supporting multiple delivery channels using React.js and Redux Toolkit.</li>
                    <li>Integrated secure and optimized REST APIs; collaborated with cross-functional teams in Agile environment.</li>
                  </ul>
                </div>

                <div className="relative border-l-2 border-blue-600 pl-6 sm:pl-8 pb-4 sm:pb-6 ml-1 sm:ml-2">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">NYSDOL UI Modernization</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 mb-1 text-sm">
                    <span className="font-medium">Full Stack Developer</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>New York State Department of Labor, USA</span>
                  </div>
                  <p className="text-blue-600 italic mb-2 text-xs sm:text-sm">Java, React.js, Spring Boot, MySQL, Jenkins, IBM DB2</p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>Contributed to modernization of New York's Labor portal using Angular, Spring Boot, and MySQL.</li>
                    <li>Led proactive debugging and code review efforts, reducing system downtime by 25%.</li>
                  </ul>
                </div>

                <div className="relative border-l-2 border-blue-600 pl-6 sm:pl-8 pb-2 ml-1 sm:ml-2">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full -left-[7px] sm:-left-[9px] top-1"></div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Virtual Lab Development</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-700 mb-1 text-sm">
                    <span className="font-medium">Frontend Developer</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span>Ministry of Education, India (AKTU/IIT Kanpur)</span>
                  </div>
                  <p className="text-blue-600 italic mb-2 text-xs sm:text-sm">Html, Css, JavaScript</p>
                  <ul className="list-disc pl-3 sm:pl-4 space-y-1 text-gray-700 text-xs sm:text-sm">
                    <li>Developed React-based virtual labs used by 10,000+ students across India during COVID-19.</li>
                    <li>Received Gold Developer Certificate for national contribution under IIT Kanpur & Ministry of Education.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
