// import Squares from "./components/Squares";

// import GlitchText from "./components/Text/GlitchText";
import Particles from "./components/Particles";
import RotatingText from "./components/Text/RotatingText";
import ShinyText from "./components/Text/ShinnyText";
import TiltedCard from "./components/TitledCard";

function App() {
  return (
    <div className="h-screen bg-neutral-900 relative ">
      {/* <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      /> */}

      <Particles
        particleColors={["#ffffff", "#4f39f6 "]}
        particleCount={250}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={120}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      >
        <div className="h-full flex justify-center items-center text-indigo-600 ">
          <div className="grid grid-cols-2 w-full">
            <div className="flex justify-center">
              <TiltedCard
                imageSrc="../public/me.png"
                altText="Aaliyan Picture"
                captionText="Web Developer"
                containerHeight="800px"
                containerWidth="600px"
                imageHeight="800px"
                imageWidth="600px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <ShinyText
                    text="Aaliyan Asif"
                    disabled={false}
                    speed={3}
                    className="p-4 text-4xl"
                  />
                  // <GlitchText
                  //   speed={1.5}
                  //   enableShadows={true}
                  //   enableOnHover={false}
                  //   className="text-4xl"
                  // >
                  //   Aaliyan Asif
                  // </GlitchText>
                  // <div className="inline-block text-2xl bg-neutral-500/70 text-white font-semibold px-4 py-2 rounded-full shadow-md backdrop-blur-md">
                  //   Aaliyan Asif
                  // </div>
                }
              />
            </div>

            <div className="flex gap-4 items-center ">
              <h1 className="text-8xl text-slate-300 ">I like</h1>
              <RotatingText
                texts={["Coding", "Games", "Chess"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-600 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-4 text-8xl font-semibold text-white "
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>
      </Particles>
    </div>
  );
}

export default App;
