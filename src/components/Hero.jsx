import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Download, Sparkles } from "lucide-react";

const floaters = [
  { id: "left-bracket", text: "<dev/>", className: "hero-v2__float hero-v2__float--left" },
  { id: "right-bracket", text: "{ API }", className: "hero-v2__float hero-v2__float--right" },
  { id: "bottom-bracket", text: "const build = quality", className: "hero-v2__float hero-v2__float--bottom" },
];

const Hero = () => {
  return (
    <section id="home" className="hero-v2">
      <div className="hero-v2__bg" aria-hidden="true">
        <div className="hero-v2__glow hero-v2__glow--warm" />
        <div className="hero-v2__glow hero-v2__glow--cool" />
        <div className="hero-v2__mesh" />
        <div className="hero-v2__particles">
          <span className="hero-v2__particle hero-v2__particle--one" />
          <span className="hero-v2__particle hero-v2__particle--two" />
          <span className="hero-v2__particle hero-v2__particle--three" />
          <span className="hero-v2__particle hero-v2__particle--four" />
        </div>
      </div>

      <div className="hero-v2__inner">
        <motion.div
          className="hero-v2__content"
          initial={{ opacity: 0, x: -44 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-v2__hello">Hello.</p>
          <h1 className="hero-v2__name">
            I&apos;m <span>Aaliyan Asif</span>
          </h1>
          <h2 className="hero-v2__role">Full Stack Developer</h2>
          <p className="hero-v2__description">
            Building scalable web applications with modern technologies and clean user
            experiences.
          </p>

          <motion.div
            className="hero-v2__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            <motion.a
              href="#contact"
              className="hero-v2__button hero-v2__button--primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let&apos;s Work Together
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1rEm5-uG8wJxUvBLthrC3CZFltRaZN36c/view?usp=sharing"
              className="hero-v2__button hero-v2__button--secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <Download size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-v2__visual"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-v2__profile-stage">
            <div className="hero-v2__shape hero-v2__shape--diamond" aria-hidden="true" />
            <div className="hero-v2__shape hero-v2__shape--dot" aria-hidden="true" />

            <div className="hero-v2__frame" aria-hidden="true" />
            <div className="hero-v2__photo-shell">
              <img src="/finalme.png" alt="Aaliyan Asif portrait" className="hero-v2__photo" />
            </div>

            {floaters.map((floater, index) => (
              <motion.div
                key={floater.id}
                className={floater.className}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Braces size={15} />
                <span>{floater.text}</span>
              </motion.div>
            ))}

            <motion.div
              className="hero-v2__status"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <Sparkles size={16} />
              <span>Available for full-stack product work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
