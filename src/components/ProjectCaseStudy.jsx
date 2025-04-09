import { useLocation } from "react-router-dom";
import { PROJECTS_CASE_STUDY_DATA } from "../data/projects";
import ScrollToTop from "./ScrollToTop";

const ProjectCaseStudy = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  const currentProject = PROJECTS_CASE_STUDY_DATA.filter((project) =>
    pathname.includes(project.id)
  ).at(0);
  console.log(currentProject);

  return (
    <div className=" min-h-screen bg-neutral-900 mt-[90px]">
      <ScrollToTop />
      {/* <img src="code.svg" /> */}
      <div className="flex flex-col gap-8 p-10 ">
        <h1 className="my-10 text-4xl font-semibold text-center text-slate-300 ">
          {currentProject.title}
        </h1>

        <div className="flex justify-between text-2xl font-bold text-slate-300 ">
          {currentProject.link && (
            <a
              href={currentProject.link}
              target="_blank"
              className="cursor-pointer hover:text-indigo-600"
            >
              Live Site
            </a>
          )}
          {currentProject.github && (
            <a
              target="_blank"
              href={currentProject.github}
              className="cursor-pointer hover:text-indigo-600"
            >
              GitHub Repository
            </a>
          )}
        </div>

        {/* <RollingGallery autoplay pauseOnHover /> */}

        <div className="flex justify-center">
          <img
            src={currentProject.img}
            alt="Project Image"
            className="w-1/2 "
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-semibold text-slate-300">Overview</h3>
          <p className="text-base text-white">{currentProject.overview}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-semibold text-slate-300">My Role</h3>
          <p className="text-base text-white">{currentProject.myRole}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-slate-300">
            Key Features
          </h2>
          <ul className="space-y-2 text-base text-white list-disc list-inside">
            {currentProject.keyFeatures.map((feat) => {
              return (
                <li key={feat.title}>
                  <span className="font-medium">{feat.title}s</span> –{" "}
                  {feat.body}
                </li>
              );
            })}
            {/* <li>
              <span className="font-medium">Stock Management</span> – Real-time
              stock tracking for efficient inventory control.
            </li>
            <li>
              <span className="font-medium">Expense Module</span> – Fully
              customizable expense tracking with categories, filtering, and
              summaries.
            </li>
            <li>
              <span className="font-medium">Search & Filtering</span> – Advanced
              search functionality for sales, expenses, and stock records.
            </li> */}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-semibold text-slate-300">
            Challenges & Solutions
          </h3>
          <p className="text-base text-white">{currentProject.challenges}</p>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-slate-300">
            Technologies Used
          </h2>
          <ul className="space-y-2 text-base text-white list-disc list-inside">
            {currentProject.technologies.map((tech) => {
              return (
                <li key={tech.title}>
                  <span className="font-medium">{tech.title}:</span> {tech.body}
                </li>
              );
            })}
            {/* <li>
              <span className="font-medium">Backend:</span> Node.js, Express,
              MongoDB, Mongoose
            </li>
            <li>
              <span className="font-medium">Other:</span> React Hook Form, MUI
              Select, Middleware-based architecture
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
