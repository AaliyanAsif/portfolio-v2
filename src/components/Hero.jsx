import { useState } from "react";
import Particles from "./Particles";
import SplitText from "./Text/SplitText";
import TiltedCard from "./TitledCard";
import AnimatedButton from "./AnimatedButton";
import ShinyText from "./Text/ShinnyText";

const Hero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isSecondAnimationComplete, setIsSecondAnimationComplete] =
    useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const handleSecondAnimarionComplete = () => {
    setIsSecondAnimationComplete(true);
  };

  return (
    <div id="home" className="relative h-screen max-w-screen ">
      <Particles
        particleColors={["#ffffff", "#4f39f6 "]}
        particleCount={450}
        particleSpread={12}
        speed={0.1}
        particleBaseSize={120}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      >
        <div className="flex items-center justify-center h-full text-indigo-600 ">
          <div className="flex justify-center w-full lg:grid lg:grid-cols-2">
            <div className="justify-center hidden lg:flex cursor-none ">
              <TiltedCard
                imageSrc="/me.png"
                altText="Aaliyan Picture"
                captionText="Software Engineer"
                containerHeight="100%"
                containerWidth="30vw"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="flex flex-col items-center justify-center ">
              <SplitText
                text="Hi, I'm Aaliyan"
                className="p-4 text-4xl font-semibold text-center bg-neutral-900 text-slate-300 sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl "
                delay={30}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <div className="flex flex-col items-center justify-center gap-4">
                {isAnimationComplete ? (
                  <SplitText
                    text="Crafting Scalable & Seamless Web Experiences!"
                    className="p-4 text-lg font-semibold text-center bg-neutral-900 text-slate-300 sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl "
                    delay={30}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleSecondAnimarionComplete}
                  />
                ) : (
                  <p className="p-4 text-lg font-semibold text-center bg-neutral-900 text-slate-300 sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl ">
                    .
                  </p>
                )}

                <div
                  className={`transition-opacity duration-[1000ms] ease-out ${
                    isSecondAnimationComplete ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <AnimatedButton
                    link={
                      "https://drive.google.com/file/d/1btL2kV77t5KlAgKaHrg8ygdUbixP0pfe/view?usp=sharing"
                    }
                    newtab
                  >
                    <div className="hidden lg:block">
                      <ShinyText
                        text={"Download Resume"}
                        className="font-bold"
                      />
                    </div>

                    <p className="font-bold text-white lg:hidden ">
                      Download Resume
                    </p>
                  </AnimatedButton>

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <a
                      href="https://www.linkedin.com/in/aaliyan-asif-67b090271"
                      target="_blank"
                    >
                      <button className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white rounded-lg hover:cursor-pointer group">
                        <svg
                          className="transition-all duration-300 rounded-md group-hover:scale-120"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z"
                            fill="#006699"
                            className="lg:[fill:#c8d4da] lg:group-hover:[fill:#006699]"
                          />
                        </svg>
                      </button>
                    </a>

                    <a href="https://github.com/AaliyanAsif" target="_blank">
                      <button className="flex items-center justify-center w-10 h-10 overflow-hidden transition-all duration-300 bg-white rounded-lg hover:cursor-pointer group">
                        <svg
                          className="transition-all duration-300 rounded-md group-hover:scale-120"
                          xmlns="http://www.w3.org/2000/svg"
                          width="28" // Match LinkedIn's size for consistency
                          height="28"
                          viewBox="0 0 72 72" // Reset to original viewBox
                          fill="none"
                        >
                          <g transform="translate(5, 0)">
                            {" "}
                            {/* Shift the path right to center it */}
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#000000"
                              className="lg:[fill:#c8d4da]  lg:group-hover:[fill:#000000]"
                              d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
                            />
                          </g>
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Particles>
    </div>
  );
};

export default Hero;
