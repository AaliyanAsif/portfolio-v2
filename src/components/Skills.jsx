import { motion } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Zap } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Zap,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Authentication Systems",
      "Backend Architecture",
    ],
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS S3"],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS Amplify",
      "AWS Lambda",
      "AWS Step Functions",
      "AWS SQS",
      "Docker",
      "Git/GitHub",
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="skills-v2__category-card"
    >
      <div className="skills-v2__category-header">
        <div className="skills-v2__category-icon">
          <Icon size={24} />
        </div>
        <h3 className="skills-v2__category-title">{category.title}</h3>
      </div>

      <div className="skills-v2__skills-list">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
            className="skills-v2__skill-badge"
          >
            <span className="skills-v2__skill-dot" />
            <span className="skills-v2__skill-name">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="skills-v2 section-shell py-24 lg:py-32"
    >
      <div className="skills-v2__glow skills-v2__glow--one" aria-hidden="true" />
      <div className="skills-v2__glow skills-v2__glow--two" aria-hidden="true" />

      <div className="section-inner skills-v2__inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="skills-v2__header"
        >
          <span className="skills-v2__eyebrow">Technical Skills</span>
          <h2 className="skills-v2__title">Technical Expertise</h2>
          <p className="skills-v2__subtitle">
            Technologies and tools I use to build scalable, modern applications with
            clean architecture and high performance.
          </p>
        </motion.div>

        <div className="skills-v2__grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
