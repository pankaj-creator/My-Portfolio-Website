import React, { useEffect, useRef } from 'react';
import { Download, Mail, Phone, Globe, MapPin, Linkedin, Award, FileText, Book } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResumeSectionHeading = ({ title }: { title: string }) => (
  <div className="mb-4 flex items-center">
    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">{title}</h2>
    <div className="ml-4 flex-1 h-0.5 bg-blue-600"></div>
  </div>
);

const Resume = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Resume
          </motion.h1>
          <motion.div 
            className="h-1 w-24 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive overview of my professional experience, skills, and accomplishments.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.a
              href="/Pankaj_Kumar_Gond_Resume.pdf"
              download="Pankaj_Kumar_Gond_Resume.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Download ATS-Friendly PDF
            </motion.a>
            <motion.a
              href="/resume-ats.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} className="mr-2" />
              View Online Resume
            </motion.a>
          </div>
          
          <motion.div 
            className="text-center mt-6 p-4 bg-blue-50 rounded-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center mb-2">
              <Award size={20} className="text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">ATS-Optimized Resume</span>
            </div>
            <p className="text-sm text-blue-700">
              This resume is specifically formatted for Applicant Tracking Systems (ATS) with clean formatting, 
              proper keyword placement, and machine-readable structure to ensure maximum compatibility with hiring systems.
            </p>
          </motion.div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900">PANKAJ KUMAR GOND</h2>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-600" />
                <a href="mailto:pankajvk211@gmail.com" className="hover:text-blue-600 transition-colors">pankajvk211@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-600" />
                <a href="tel:+916307386578" className="hover:text-blue-600 transition-colors">+91 6307386578</a>
              </div>
              <div className="flex items-center">
                <Globe size={18} className="mr-2 text-blue-600" />
                <a href="https://erpankaj.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">erpankaj.netlify.app</a>
              </div>
              <div className="flex items-center">
                <Linkedin size={18} className="mr-2 text-blue-600" />
                <a href="https://linkedin.com/in/pankaj-kumar-gond" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-600" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8"
          >
            {/* Left Column */}
            <div className="md:col-span-1 space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="SKILLS" />
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Redux', 'Angular', 'JavaScript (ES6+)', 'HTML', 'CSS'].map((skill) => (
                        <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'Spring Boot', 'Node.js'].map((skill) => (
                        <span key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MySQL', 'IBM DB2', 'Amazon RDS'].map((skill) => (
                        <span key={skill} className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'GCP', 'Jenkins', 'GitLab CI/CD', 'SonarQube', 'Fortify'].map((skill) => (
                        <span key={skill} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
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
            <div className="md:col-span-2 space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <ResumeSectionHeading title="PROFESSIONAL SUMMARY" />
                <p className="text-gray-700 leading-relaxed">
                  Experienced Full-Stack Developer with 3+ years at Tata Consultancy Services, delivering high-impact government and enterprise platforms. Specialized in React.js, Java, Spring Boot, AWS, and CI/CD. Proven track record in building modular, event-driven systems and driving architectural improvements. Recognized for reducing release cycles by 30%, improving API performance by 20%, and leading cross-functional initiatives.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <ResumeSectionHeading title="PROFESSIONAL EXPERIENCE" />
                <div className="relative border-l-2 border-blue-600 pl-8 pb-2 ml-2">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">System Engineer</h3>
                  <div className="flex items-center text-gray-700 mb-2">
                    <span className="font-medium">Tata Consultancy Services (TCS)</span>
                    <span className="mx-2">•</span>
                    <span>July 2022 – Present</span>
                  </div>
                  <p className="text-blue-600 italic mb-4">React.js, Java, Spring Boot, MySQL, AWS, GCP, GitLab, Redux, Axios, Git</p>
                  <ul className="list-disc pl-4 space-y-2 text-gray-700">
                    <li>Developed full-stack applications with optimized RESTful APIs, reducing response latency by 20%.</li>
                    <li>Built a modular notification engine that supports multiple delivery channels using React.js, Redux, and REST APIs.</li>
                    <li>Integrated services with AWS (S3, Lambda, SQS), enabling scalable, event-driven microservices.</li>
                    <li>Automated CI/CD pipelines using GCP, improving deployment efficiency and reducing release cycles by 30%.</li>
                    <li>Collaborated with cross-functional teams in agile workflows to meet functional and quality standards.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <ResumeSectionHeading title="PROJECTS" />

                <div className="relative border-l-2 border-blue-600 pl-8 pb-6 ml-2">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Government e-Marketplace (GeM 2.0)</h3>
                  <div className="flex items-center text-gray-700 mb-1">
                    <span className="font-medium">React Developer</span>
                    <span className="mx-2">•</span>
                    <span>Ministry of Commerce, Government of India</span>
                  </div>
                  <p className="text-blue-600 italic mb-2">React.js, Redux, REST APIs, GitLab</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li>Built notification module supporting multiple delivery channels using React.js and Redux Toolkit.</li>
                    <li>Integrated secure and optimized REST APIs; collaborated with cross-functional teams in Agile environment.</li>
                  </ul>
                </div>

                <div className="relative border-l-2 border-blue-600 pl-8 pb-6 ml-2">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">NYSDOL UI Modernization</h3>
                  <div className="flex items-center text-gray-700 mb-1">
                    <span className="font-medium">Full Stack Developer</span>
                    <span className="mx-2">•</span>
                    <span>New York State Department of Labor, USA</span>
                  </div>
                  <p className="text-blue-600 italic mb-2">Java, React.js, Spring Boot, MySQL, Jenkins, IBM DB2</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li>Contributed to modernization of New York's Labor portal using Angular, Spring Boot, and MySQL.</li>
                    <li>Led proactive debugging and code review efforts, reducing system downtime by 25%.</li>
                  </ul>
                </div>

                <div className="relative border-l-2 border-blue-600 pl-8 pb-2 ml-2">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Virtual Lab Development</h3>
                  <div className="flex items-center text-gray-700 mb-1">
                    <span className="font-medium">Frontend Developer</span>
                    <span className="mx-2">•</span>
                    <span>Ministry of Education, India (AKTU/IIT Kanpur)</span>
                  </div>
                  <p className="text-blue-600 italic mb-2">React.js, JavaScript</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
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
