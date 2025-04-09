import ScrollFloat from "./Text/ScrollFloat";
import ScrollReveal from "./Text/ScrollReveal";

import AnimatedButton from "./AnimatedButton";
import ShinyText from "./Text/ShinnyText";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotlightCard from "./SpotlightCrad";
import RotatingText from "./Text/RotatingText";

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, -100]);

  return (
    <div
      id="contact"
      className=" p-8 md:min-h-[calc(100vh-96px)] bg-neutral-900 scroll-mt-[96px] "
    >
      <ScrollFloat
        containerClassName="text-center"
        // stagger={6}
        // animationDuration={5}
        scrollEnd="bottom bottom-=60%"
        textClassName=" text-4xl font-semibold   md:text-5xl text-[#6c63ff] lg:text-7xl"
      >
        Contact Me
      </ScrollFloat>

      <div className="grid items-center grid-cols-1 gap-4 text-center xl:text-left xl:grid-cols-2 justify-items-center ">
        <div className="items-center order-1 xs:flex sm:block ">
          <SpotlightCard
            spotlightColor="rgba(79, 57, 246, 0.2)"
            className="flex flex-col items-center gap-4 text-white min-w-1/2 md:w-full md:flex-row md:justify-between "
          >
            <div className="flex flex-col items-center w-full gap-4 md:items-start">
              <div className="flex items-center gap-2 max-w-fit">
                <h3 className="text-lg font-bold md:text-3xl ">Say</h3>
                <RotatingText
                  texts={["Hi!", "Hello!", "Hey!"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-600 md:text-3xl text-white text-lg font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <a href="tel:+923317610355">
                <motion.div
                  ref={ref}
                  style={{ opacity, x }}
                  className="transition-transform duration-500 ease-out"
                >
                  <p className="font-semibold text-indigo-400 hover:text-indigo-600 xs:text-sm sm:text-lg lg:text-2xl xl:text-3xl">
                    +92 331 7610 355
                  </p>
                </motion.div>
              </a>
              <a href="mailto:aaliyanasif@outlook.com">
                <motion.div
                  ref={ref}
                  style={{ opacity, x }}
                  className="transition-transform duration-500 ease-out"
                >
                  <p className="font-semibold text-indigo-400 hover:text-indigo-500 xs:text-sm sm:text-lg lg:text-2xl xl:text-3xl">
                    aaliyanasif@outlook.com
                  </p>
                </motion.div>
              </a>
            </div>

            <div className="min-w-fit">
              <AnimatedButton
                link={"mailto:aaliyanasif@outlook.com"}
                className={"md:py-4 md:px-6 text-xs  md:text-lg"}
                newtab
              >
                <div className="hidden lg:block">
                  <ShinyText text={"Send Me a Message"} className="font-bold" />
                </div>

                <p className="font-bold text-white lg:hidden">
                  Send Me a Message
                </p>
              </AnimatedButton>
            </div>
          </SpotlightCard>

          <ScrollReveal
            baseOpacity={0}
            baseRotation={3}
            blurStrength={7}
            textClassName="text-slate-300 xs:text-sm min-w-1/2 sm:text-lg lg:text-2xl xl:text-3xl"
          >
            Have an idea? Le&apos;s discuss it over a game of chess. I believe
            great code, like chess♟️, is all about smart moves and strong
            strategy. So let&apos;s connect, collaborate, and create something
            powerful.
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.img
            src="/code2.svg"
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
      </div>
    </div>
  );
};

export default Contact;
