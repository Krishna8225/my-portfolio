import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Mail, Github, Linkedin, User } from "lucide-react";
import profile from "../assets/profile.png";
import krishna_profile from "../assets/krishna_profile.png";

const education = [
  {
    degree: "BE Computer Science & Engineering",
    institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V), Bhopal",
    duration: "2016 - 2020",
  },
];

const experience = [
  {
    role: "Package App Development Team Lead",
    company: "Accenture",
    duration: "Sep 2025 - Present",
    location: "Pune, Maharashtra, India",
  },  
  {
    role: "Software Engineer",
    company: "CDN Solutions Group",
    duration: "Mar 2024 - June 2025",
    location: "Indore, Madhya Pradesh, India",
  },
  {
    role: "Sr. React.js Developer",
    company: "Golden Eagle IT Technologies Pvt Ltd",
    duration: "Aug 2022 - Jan 2024",
    location: "Indore, Madhya Pradesh, India",
  },
  {
    role: "Software Developer",
    company: "TheRapidHire Pvt Ltd",
    duration: "Mar 2021 - June 2022",
    location: "Indore, Madhya Pradesh, India",
  },
  {
    role: "Software Developer",
    company: "Parxlab",
    duration: "Jan 2020 - Mar 2021",
    location: "Indore, Madhya Pradesh, India",
  },
];

const techStack = {
  frontend: [
    "React.js",
    "React Native",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "MySQL", "Firebase"],
  tools: ["Git", "GitHub", "Postman", "Figma"],
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-[#E0E7FF] p-8 md:p-16 font-sans selection:bg-cyan-600 selection:text-gray-100">
      {/* Hero: Photo + Intro */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-20"
      >
        <motion.div
          className="w-48 h-48 rounded-full border-4 border-cyan-500 bg-gray-850 shadow-[0_4px_30px_rgba(2,132,199,0.6)] overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src={krishna_profile}
            alt="Krishna Makwana"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <div>
          <h1 className="text-5xl font-extrabold mb-4 text-[#F0F4FF] drop-shadow-lg flex items-center gap-2">
            Krishna Makwana
            <span className="text-red-500 text-2xl leading-none">▲</span>
          </h1>

          <p className="text-2xl text-cyan-400 max-w-xl leading-relaxed tracking-wide">
            💻 MERN Stack Developer & React Native enthusiast building
            beautiful, scalable web and mobile apps.
          </p>
        </div>
      </motion.header>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl font-semibold mb-8 flex items-center gap-3 text-cyan-500 drop-shadow-md select-none">
          🎓 Education
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-850 p-6 rounded-xl shadow-lg border border-cyan-600 hover:shadow-cyan-500/60 hover:scale-[1.04] transition-transform duration-300 cursor-default"
              style={{ backgroundColor: "rgba(30, 41, 59, 0.85)" }}
            >
              <h3 className="text-2xl font-semibold text-[#F0F4FF]">
                {edu.degree}
              </h3>
              <p className="text-cyan-400 font-medium">{edu.institute}</p>
              <p className="text-gray-400">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl font-semibold mb-8 flex items-center gap-3 text-cyan-500 drop-shadow-md select-none">
          <Briefcase className="text-cyan-500" /> Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-850 p-6 rounded-xl shadow-lg border border-cyan-600 hover:shadow-cyan-500/60 hover:scale-[1.04] transition-transform duration-300 cursor-default"
              style={{ backgroundColor: "rgba(30, 41, 59, 0.85)" }}
            >
              <h3 className="text-2xl font-semibold text-[#F0F4FF]">
                {exp.role}
              </h3>
              <p className="text-cyan-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm tracking-wide">
                {exp.duration} | {exp.location}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl font-semibold mb-8 flex items-center gap-3 text-cyan-500 drop-shadow-md select-none">
          <Code2 className="text-cyan-500" /> Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          {Object.entries(techStack).map(([key, items]) => (
            <div
              key={key}
              className="bg-gray-850 p-6 rounded-xl shadow-lg border border-cyan-600 hover:shadow-cyan-500/60 hover:scale-[1.04] transition-transform duration-300 cursor-default"
              style={{ backgroundColor: "rgba(30, 41, 59, 0.85)" }}
            >
              <h3 className="font-semibold mb-4 capitalize text-[#F0F4FF] border-b border-cyan-600 pb-2">
                {key}
              </h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {items.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-700/40 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold shadow-sm cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-4xl mx-auto text-center border-t border-gray-700 pt-10 select-none"
      >
        <h3 className="text-3xl font-semibold mb-6 text-cyan-500 drop-shadow-md">
          Let's Connect
        </h3>
        <div className="flex justify-center space-x-16 text-cyan-400 text-4xl">
          <a
            href="mailto:krishnamakwana998@gmail.com"
            className="hover:text-cyan-300 transition-colors duration-300"
            title="Email"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a
            href="tel:+918225824260"
            className="hover:text-cyan-300 transition-colors duration-300 flex items-center text-lg font-medium tracking-wide"
            title="Call"
            aria-label="Call"
          >
            📞 8225824260
          </a>
          {/* <a
            href="https://github.com/yourusername"
            className="hover:text-cyan-300 transition-colors duration-300"
            title="GitHub"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a> */}
          <a
            href="https://www.linkedin.com/in/krishna-makwana-084959218"
            className="hover:text-cyan-300 transition-colors duration-300"
            title="LinkedIn"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500 select-none">
          © 2025 Krishna Makwana
        </p>
      </motion.footer>
    </div>
  );
}
