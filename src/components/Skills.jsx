import { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import BlurText from "./Text/BlurText";
// import SplitText from "./Text/SplitText";

const items = [
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white ">HTML 5</p>
        <img src="/html.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white ">CSS</p>
        <img src="/css.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white ">Javascript</p>
        <img src="/js.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">React</p>
        <img src="/react.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white ">Next JS</p>
        <img src="/nextjs-icon.svg" width={50} height={50} />
      </div>
    ),
  },

  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Typescript</p>
        <img src="/typescript.svg" width={50} height={50} />
      </div>
    ),
  },

  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white ">Tailwind</p>
        <img src="/tailwind.svg" width={50} height={50} />
      </div>
    ),
  },

  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">MUI</p>
        <img src="/material-ui.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">React Query</p>
        <img src="/react-query.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Redux Toolkit</p>
        <img src="/redux.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">React Hook Form</p>
        <img src="/rhf.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Socket IO</p>
        <img src="/socket-io.svg" width={50} height={50} />
      </div>
    ),
  },

  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Node JS</p>
        <img src="/nodejs.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Express JS</p>
        <img src="/express.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">MongoDB</p>
        <img src="/mongodb.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    content: (
      <div className="flex items-center gap-4 ">
        <p className="text-white">Git and Version Control</p>
        <img src="/git.svg" width={50} height={50} />
      </div>
    ),
  },
];

const Skills = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    // Add a small delay after text animation to ensure it settles
    setTimeout(() => {
      setIsAnimationComplete(true);
    }, 200); // 500ms delay after text animation; adjust as needed
  };
  return (
    <div
      id="skills"
      className="h-[calc(100vh-96px)] p-4 md:p-8 bg-neutral-900 scroll-mt-[96px] "
    >
      <div className="flex flex-col items-center justify-center mb-12 text-center ">
        <BlurText
          text="My Versatile Toolkit"
          delay={0}
          animateBy="words"
          direction="top"
          //   onAnimationComplete={handleAnimationComplete}
          className="mb-8 text-2xl font-semibold text-white capitalize xs:text-3xl md:text-4xl lg:text-5xl "
        />
        <BlurText
          text="Crafting Solutions with Every Tool I Master"
          delay={30}
          animateBy="letters"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="mb-8 text-xs font-semibold capitalize xs:text-sm md:text-lg lg:text-xl text-slate-300 "
        />
      </div>

      <div
        className={`transition-opacity h-[70%] duration-[2000ms] ease-out ${
          isAnimationComplete ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: isAnimationComplete ? 1 : 0 }} // Ensure initial state
      >
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={isAnimationComplete ? true : false}
          autoplaySpeed={0.9}
          autoplayDirection="up"
          pauseOnHover={true}
          itemMinHeight={100}
          maxHeight="100%"
          width="40%"
          negativeMargin="-2rem"
        />
      </div>
    </div>
  );
};

export default Skills;
