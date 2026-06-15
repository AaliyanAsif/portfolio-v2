import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, Linkedin, Mail, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    title: "aaliyanasif@outlook.com",
    detail: "Best for project inquiries and collaboration discussions.",
    href: "mailto:aaliyanasif@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    title: "+92 31 7610355",
    detail: "Call for direct project discussions and follow-up.",
    href: "tel:+92317610355",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    title: "Professional Network",
    detail: "Connect for long-term opportunities and product conversations.",
    href: "https://www.linkedin.com/in/aaliyan-asif-67b090271",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    title: "Code Portfolio",
    detail: "Explore repositories, experiments, and practical builds.",
    href: "https://github.com/AaliyanAsif",
    external: true,
  },
  
];

const ContactCard = ({ card, index }) => {
  const Icon = card.icon;

  return (
    <motion.a
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      href={card.href}
      target={card.external ? "_blank" : undefined}
      rel={card.external ? "noreferrer" : undefined}
      className="contact-v2__info-card"
    >
      <div className="contact-v2__info-glow" aria-hidden="true" />
      <div className="contact-v2__info-icon-shell">
        <div className="contact-v2__info-icon-core">
          <Icon size={20} />
        </div>
      </div>
      <div className="contact-v2__info-content">
        <span className="contact-v2__info-label">{card.label}</span>
        <h3 className="contact-v2__info-title">{card.title}</h3>
        <p className="contact-v2__info-detail">{card.detail}</p>
      </div>
      <ArrowUpRight className="contact-v2__info-arrow" size={18} />
    </motion.a>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const mailSubject = encodeURIComponent(subject || `Project Inquiry from ${name || "Website Visitor"}`);
  const mailBody = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:aaliyanasif@outlook.com?subject=${mailSubject}&body=${mailBody}`;
};

const Contact = () => {
  return (
    <section id="contact" className="contact-v2 section-shell py-24 pb-28 lg:py-32 lg:pb-36">
      <div className="contact-v2__glow contact-v2__glow--one" aria-hidden="true" />
      <div className="contact-v2__glow contact-v2__glow--two" aria-hidden="true" />
      <div className="contact-v2__particles" aria-hidden="true">
        <span className="contact-v2__particle contact-v2__particle--one" />
        <span className="contact-v2__particle contact-v2__particle--two" />
        <span className="contact-v2__particle contact-v2__particle--three" />
      </div>

      <div className="section-inner contact-v2__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="contact-v2__header"
        >
          <span className="contact-v2__eyebrow">Contact</span>
          <h2 className="contact-v2__title">Let&apos;s Build Something Great Together</h2>
          <p className="contact-v2__subtitle">
            Have a project idea or need a reliable development partner? Let&apos;s discuss
            how we can turn your vision into a scalable digital solution.
          </p>
        </motion.div>

        <div className="contact-v2__layout">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="contact-v2__left"
          >
            <div className="contact-v2__intro-card">
              <div className="contact-v2__intro-badge">
                <Globe size={16} />
                <span>Open for collaboration</span>
              </div>
              <p className="contact-v2__intro-copy">
                Whether you need a product build, UI refinement, full-stack implementation,
                or long-term technical support, I can help turn clear product goals into
                polished digital experiences.
              </p>
            </div>

            <div className="contact-v2__info-grid">
              {contactCards.map((card, index) => (
                <ContactCard key={card.label} card={card} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="contact-v2__form-panel"
          >
            <div className="contact-v2__form-head">
              <span className="contact-v2__form-label">Quick Message</span>
              <h3 className="contact-v2__form-title">Tell me about your project</h3>
              <p className="contact-v2__form-copy">
                Share your goals, timeline, and requirements. I&apos;ll respond with a
                practical next step.
              </p>
            </div>

            <form className="contact-v2__form" onSubmit={handleSubmit}>
              <div className="contact-v2__field-grid">
                <label className="contact-v2__field">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="contact-v2__field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label className="contact-v2__field">
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Project discussion" required />
              </label>

              <label className="contact-v2__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your idea, goals, timeline, and anything important to know."
                  required
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="contact-v2__submit"
              >
                <span>Send Message</span>
                <ArrowUpRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
