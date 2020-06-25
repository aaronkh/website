import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// @source: https://reacttraining.com/react-router/web/guides/scroll-restoration
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
