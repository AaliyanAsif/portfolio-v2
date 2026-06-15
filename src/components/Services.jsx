import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  DatabaseZap,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable, responsive, and high-performance web applications using modern frontend and backend technologies.",
    icon: Code2,
  },
  {
    title: "Backend Architecture & API Development",
    description:
      "Designing secure, scalable backend systems, APIs, authentication flows, and efficient server-side solutions.",
    icon: DatabaseZap,
  },
  {
    title: "Frontend Development",
    description:
      "Creating clean, interactive, and user-focused interfaces with modern frameworks and responsive design.",
    icon: PanelsTopLeft,
  },
  {
    title: "Cloud & AWS Solutions",
    description:
      "Building reliable cloud-based applications using AWS services, serverless architecture, and scalable infrastructure.",
    icon: Cloud,
  },
  {
    title: "Database & System Design",
    description:
      "Designing optimized database structures and solutions that support growing business requirements.",
    icon: Database,
  },
  {
    title: "Application Optimization & Maintenance",
    description:
      "Improving performance, fixing issues, and maintaining production-ready applications.",
    icon: Wrench,
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="services-v2__card"
    >
      <div className="services-v2__card-glow" aria-hidden="true" />

      <div className="services-v2__icon-shell">
        <div className="services-v2__icon-core">
          <Icon size={24} />
        </div>
      </div>

      <h3 className="services-v2__card-title">{service.title}</h3>
      <p className="services-v2__card-description">{service.description}</p>
    </motion.article>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-v2 section-shell py-24 lg:py-32">
      <div className="services-v2__glow services-v2__glow--one" aria-hidden="true" />
      <div className="services-v2__glow services-v2__glow--two" aria-hidden="true" />
      <div className="services-v2__particles" aria-hidden="true">
        <span className="services-v2__particle services-v2__particle--one" />
        <span className="services-v2__particle services-v2__particle--two" />
        <span className="services-v2__particle services-v2__particle--three" />
      </div>

      <div className="section-inner services-v2__inner">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="services-v2__header"
        >
          <span className="services-v2__eyebrow">Services</span>
          <h2 className="services-v2__title">Services</h2>
          <p className="services-v2__subtitle">
            I help businesses build scalable digital solutions with modern technologies,
            clean architecture, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="services-v2__grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
