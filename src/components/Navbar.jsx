import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const navigationItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

const NavLink = ({ item, index, isActive, isScrolled }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link
      smooth
      to={item.link}
      className="navbar-v2__link"
      style={{
        color: isActive ? "#ff8a61" : isScrolled ? "#ffffff" : "#e0e6f1",
      }}
    >
      <span>{item.name}</span>
      {isActive && (
        <motion.div
          className="navbar-v2__link-underline"
          layoutId="navbar-underline"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </Link>
  </motion.div>
);

const MobileNavLink = ({ item, index, isActive, onClose }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -16 }}
    transition={{ duration: 0.3, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link
      smooth
      to={item.link}
      onClick={onClose}
      className={`navbar-v2__mobile-link ${isActive ? "active" : ""}`}
    >
      {item.name}
      {isActive && <span className="navbar-v2__mobile-link-dot" />}
    </Link>
  </motion.div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const sections = navigationItems.map((item) => item.link.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`navbar-v2 ${isScrolled ? "navbar-v2--scrolled" : ""}`}
    >
      <div className="navbar-v2__inner">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="navbar-v2__logo"
        >
          <Link smooth to="#home" className="navbar-v2__logo-link">
            <span className="navbar-v2__logo-icon">AA</span>
            <div>
              <span className="navbar-v2__logo-name">Aaliyan Asif</span>
              <span className="navbar-v2__logo-title">Full-Stack Developer</span>
            </div>
          </Link>
        </motion.div>

        <div className="navbar-v2__desktop-menu">
          {navigationItems.map((item, index) => (
            <NavLink
              key={item.name}
              item={item}
              index={index}
              isActive={activeSection === item.link.replace("#", "")}
              isScrolled={isScrolled}
            />
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="navbar-v2__cta"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight size={16} />
        </motion.a>

        <motion.button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="navbar-v2__mobile-toggle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="navbar-v2__mobile-menu"
          >
            <div className="navbar-v2__mobile-links">
              {navigationItems.map((item, index) => (
                <MobileNavLink
                  key={item.name}
                  item={item}
                  index={index}
                  isActive={activeSection === item.link.replace("#", "")}
                  onClose={() => setIsOpen(false)}
                />
              ))}
            </div>
            <motion.a
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="navbar-v2__mobile-cta"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
