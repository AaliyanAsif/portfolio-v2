const AnimatedButton = ({ children, link, className, newtab = false }) => {
  return (
    <a
      href={link}
      target={newtab ? "_blank" : ""}
      className={`relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-full shadow-md group  ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease `}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform bg-indigo-600 lg:bg-neutral-900 text-slate-300 group-hover:translate-x-full ease">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </a>
  );
};

export default AnimatedButton;
