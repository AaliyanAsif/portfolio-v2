// import GlitchText from "./Text/GlitchText";
import ScrollFloat from "./Text/ScrollFloat";
import ScrollReveal from "./Text/ScrollReveal";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className=" p-8 md:min-h-[calc(100vh-96px)] bg-neutral-800 scroll-mt-[96px] "
    >
      {/* <GlitchText enableOnHover={false } className="text-5xl">
        About Me
      </GlitchText> */}
      <ScrollFloat
        containerClassName="text-center"
        // stagger={6}
        // animationDuration={5}
        scrollEnd="bottom bottom-=60%"
        textClassName="mb-8 text-2xl font-semibold  xs:text-3xl md:text-5xl text-[#6c63ff] lg:text-7xl"
      >
        About Me
      </ScrollFloat>

      <div className="grid items-center grid-cols-1 gap-4 text-center xl:text-left xl:grid-cols-2 justify-items-center ">
        <div className="order-2 lg:order-1 ">
          <ScrollReveal
            baseOpacity={0}
            baseRotation={7}
            blurStrength={7}
            textClassName="text-slate-300 xs:text-sm sm:text-lg lg:text-2xl xl:text-3xl"
          >
            I’m all about building cool stuff, solving problems💡, and writing
            clean, efficient code 💻, blending clean UI with powerful backend
            logic. From dynamic web apps to sleek landing pages, I love making
            things work seamlessly. Always learning, always building—let’s
            connect! 🚀
          </ScrollReveal>
        </div>

        {/* <div id="illustration" className="flex justify-center animate-[float_4s_ease-in-out_infinite] opacity-0 translate-y-5 transition-all duration-1000 ease-in-ou ">
          <img src="/code.svg" className="w-1/2" />
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.img
            src="/code.svg"
            alt="Coding Illustration"
            className="w-full md:w-3/4 xl:w-full"
            animate={{
              y: [0, -5, 0], // Floating effect
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity, // Loop animation
            }}
          />
        </motion.div>

        {/* <img src="/code2.svg" /> */}
        {/* <img src="/code3.svg" /> */}
        {/* <img src="/code4.svg" /> */}
        {/* <img src="/code.svg" /> */}
      </div>
    </div>
  );
};

export default About;
