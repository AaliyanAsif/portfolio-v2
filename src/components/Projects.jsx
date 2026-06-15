import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Github, Globe, Layers3 } from "lucide-react";
import { PROJECTS_CASE_STUDY_DATA, PROJECTS_DATA } from "../data/projects";

const slugifyTitle = (title) => title.split(" ").join("-").toLowerCase();

const getProjectStack = (projectCaseStudy) => {
  if (!projectCaseStudy?.technologies) {
    return [];
  }

  return projectCaseStudy.technologies
    .flatMap((group) => group.body.split(","))
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);
};

const buildProjects = () => {
  const caseStudyMap = new Map(
    PROJECTS_CASE_STUDY_DATA.map((project) => [project.id, project])
  );

  return PROJECTS_DATA.map((project) => {
    const slug = slugifyTitle(project.title);
    const caseStudy = caseStudyMap.get(slug);

    return {
      ...project,
      slug,
      stack: getProjectStack(caseStudy),
      liveDemo: caseStudy?.link,
      github: caseStudy?.github,
    };
  });
};

const ProjectCard = ({ project, index, onCaseStudy }) => {
  const hasExternalActions = Boolean(project.liveDemo || project.github);

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="projects-v2__card"
    >
      <div className="projects-v2__card-glow" aria-hidden="true" />

      <div className="projects-v2__media-wrap">
        <div className="projects-v2__media-badge">
          <Layers3 size={14} />
          <span>{hasExternalActions ? "Featured Build" : "Case Study"}</span>
        </div>

        <div className="projects-v2__media-frame">
          <img src={project.img} alt={project.title} className="projects-v2__media" />
        </div>
      </div>

      <div className="projects-v2__content">
        <div className="projects-v2__content-top">
          <h3 className="projects-v2__card-title">{project.title}</h3>
          <p className="projects-v2__card-description">{project.body}</p>
        </div>

        {project.stack.length > 0 && (
          <div className="projects-v2__stack">
            {project.stack.map((item, stackIndex) => (
              <motion.span
                key={`${project.slug}-${item}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: 0.12 + index * 0.08 + stackIndex * 0.04 }}
                className="projects-v2__stack-badge"
              >
                {item}
              </motion.span>
            ))}
          </div>
        )}

        <div className="projects-v2__actions">
          {project.liveDemo && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="projects-v2__button projects-v2__button--primary"
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </motion.a>
          )}

          {project.github && (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="projects-v2__button projects-v2__button--secondary"
            >
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
          )}

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCaseStudy(project.title)}
            className={`projects-v2__button ${hasExternalActions ? "projects-v2__button--secondary" : "projects-v2__button--primary"}`}
          >
            <ArrowUpRight size={16} />
            <span>Case Study</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const projects = buildProjects();

  const handleCaseStudy = (title) => {
    navigate(`/case-study/${slugifyTitle(title)}`);
  };

  return (
    <section id="projects" className="projects-v2 section-shell py-24 lg:py-32">
      <div className="projects-v2__glow projects-v2__glow--one" aria-hidden="true" />
      <div className="projects-v2__glow projects-v2__glow--two" aria-hidden="true" />
      <div className="projects-v2__particles" aria-hidden="true">
        <span className="projects-v2__particle projects-v2__particle--one" />
        <span className="projects-v2__particle projects-v2__particle--two" />
        <span className="projects-v2__particle projects-v2__particle--three" />
      </div>

      <div className="section-inner projects-v2__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="projects-v2__header"
        >
          <span className="projects-v2__eyebrow">Featured Projects</span>
          <h2 className="projects-v2__title">Featured Projects</h2>
          <p className="projects-v2__subtitle">
            Real-world applications built with modern technologies, scalable architecture,
            and user-focused experiences.
          </p>
        </motion.div>

        <div className="projects-v2__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onCaseStudy={handleCaseStudy}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="projects-v2__footer"
        >
          <div>
            <p className="projects-v2__footer-title">
              More experiments, UI work, and implementation details live on GitHub.
            </p>
            <p className="projects-v2__footer-text">
              Explore additional repositories, learning builds, and front-end experiments.
            </p>
          </div>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/AaliyanAsif"
            target="_blank"
            rel="noreferrer"
            className="projects-v2__button projects-v2__button--secondary"
          >
            <Github size={16} />
            <span>Visit GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
