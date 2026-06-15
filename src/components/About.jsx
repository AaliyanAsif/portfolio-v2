import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "+", label: "Years Experience" },
];

function useCountUp(target, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const duration = 1200;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const nextValue = Math.round(target * progress);
      setCount(nextValue);

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, frameDuration);

    return () => window.clearInterval(timer);
  }, [active, target]);

  return count;
}

const StatCard = ({ stat, active, delay }) => {
  const count = useCountUp(stat.value, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay }}
      className="about-v2__stat-card"
    >
      <div className="about-v2__stat-value">
        <span>{count}</span>
        <span className="about-v2__stat-suffix">{stat.suffix}</span>
      </div>
      <p className="about-v2__stat-label">{stat.label}</p>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: true });

  return (
    <section id="about" ref={sectionRef} className="about-v2 section-shell py-24 lg:py-32">
      <div className="about-v2__glow about-v2__glow--one" aria-hidden="true" />
      <div className="about-v2__glow about-v2__glow--two" aria-hidden="true" />

      <div className="section-inner about-v2__inner">
        <motion.div
          className="about-v2__content-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="about-v2__eyebrow">Profile</span>
          <h2 className="about-v2__title">
            About Me
          </h2>
          <p className="about-v2__description">
            I build scalable digital products by transforming ideas into reliable, user-focused applications.
With experience across eCommerce, HRMS, POS, and healthcare platforms, I create solutions that deliver real business value through clean code, modern technologies, and strong engineering practices.

          </p>

          <div className="about-v2__stats-grid">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} active={isInView} delay={0.15 + index * 0.08} />
              ))}

          </div>

          <div className="about-v2__note">
            <Sparkles size={16} />
            <span>Modern, maintainable, and built for premium product experiences.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
