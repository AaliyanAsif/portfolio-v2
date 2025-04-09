import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner
  }, [pathname]);

  return null; // this component doesn’t render anything
};

export default ScrollToTop;
