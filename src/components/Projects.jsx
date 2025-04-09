import { useNavigate } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projects";
import SpotlightCard from "./SpotlightCrad";
import SplitText from "./Text/SplitText";
import TrueFocus from "./Text/TrueFocus";

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const link = title.split(" ").join("-").toLowerCase();
    console.log("link =", link);

    navigate(`/case-study/${link}`);
  };

  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-96px)] p-4 md:p-8 text-indigo-600 flex flex-col items-center gap-4 bg-neutral-800"
    >
      <div>
        <TrueFocus
          sentence="Crafted Code"
          manualMode={false}
          blurAmount={4}
          borderColor="#4f39f6"
          textClassName={" text-3xl lg:text-5xl text-slate-300 my-4 lg:p-1"}
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      <SplitText
        textAlign="center"
        className="text-base lg:text-2xl text-slate-300"
        delay={50}
        text="A mix of passion, problem-solving, and way too much coffee."
      />

      <div className="grid items-stretch w-full grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-3 h-3/4 ">
        {PROJECTS_DATA?.map((project, index) => {
          return (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(79, 57, 246, 0.2)"
              // spotlightColor="rgba(14, 165, 233, 0.2)"
              className="flex flex-col w-full gap-4 text-white "
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <img
                className="relative aspect-video rounded-2xl hover:opacity-95 "
                src={project.img}
              />

              <div className="flex flex-col justify-between h-full gap-4 ">
                <p className="mt-2 text-slate-300">{project.body}</p>

                <div className="flex justify-center">
                  <button
                    onClick={() => handleClick(project.title)}
                    className="px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg md:px-6 md:py-3 hover:bg-indigo-700 hover:cursor-pointer"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
