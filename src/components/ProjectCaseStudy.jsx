import { ArrowUpRight, Github, Globe, Layers3 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { PROJECTS_CASE_STUDY_DATA } from "../data/projects";
import ScrollToTop from "./ScrollToTop";

const ProjectCaseStudy = () => {
  const { pathname } = useLocation();
  const currentProject = PROJECTS_CASE_STUDY_DATA.find((project) =>
    pathname.includes(project.id)
  );

  if (!currentProject) {
    return (
      <div className="section-shell min-h-screen pt-32">
        <div className="section-inner">
          <div className="premium-card text-center">
            <h1 className="text-3xl font-semibold text-white">Project not found</h1>
            <p className="mt-4 text-slate-300">
              The requested case study could not be located.
            </p>
            <a href="/#projects" className="btn-primary mt-8 inline-flex">
              Back to Projects
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-shell min-h-screen pt-28 pb-24 lg:pt-32 lg:pb-32">
      <ScrollToTop />
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section className="premium-card">
            <span className="eyebrow">Case Study</span>
            <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
              {currentProject.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {currentProject.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {currentProject.link && (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Globe className="h-4 w-4" />
                  Live Site
                </a>
              )}
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  Repository
                </a>
              )}
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/8 bg-slate-950/40">
              <img
                src={currentProject.img}
                alt={currentProject.title}
                className="h-full w-full object-cover"
              />
            </div>
          </section>

          <aside className="grid gap-6">
            <div className="glass-panel px-6 py-6">
              <p className="soft-label">My Role</p>
              <p className="mt-3 text-base leading-8 text-slate-300">
                {currentProject.myRole}
              </p>
            </div>
            <div className="glass-panel px-6 py-6">
              <p className="soft-label">Build Focus</p>
              <p className="mt-3 text-base leading-8 text-slate-300">
                Product thinking, reusable UI structure, and practical full-stack implementation.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="card-hover">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-sky-300" />
              <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {currentProject.keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                >
                  <p className="text-base font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{feature.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card-hover">
            <h2 className="text-2xl font-semibold text-white">Challenges & Solutions</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              {currentProject.challenges}
            </p>
          </section>
        </div>

        <section className="mt-6 card-hover">
          <h2 className="text-2xl font-semibold text-white">Technologies Used</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {currentProject.technologies.map((tech) => (
              <div key={tech.title} className="glass-panel px-5 py-5">
                <div className="flex items-center gap-2 text-white">
                  <ArrowUpRight className="h-4 w-4 text-amber-300" />
                  <p className="font-semibold">{tech.title}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{tech.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
