import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

type TransitionContextType = {
  isTransitioning: boolean;
  transitionPhase: "idle" | "fadeIn" | "fadeOut";
  transitionElement: ReactNode | null;
  startPageTransition: (path: string, element: ReactNode) => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<
    "idle" | "fadeIn" | "fadeOut"
  >("idle");
  const [transitionElement, setTransitionElement] = useState<ReactNode | null>(
    null
  );
  const [nextPath, setNextPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const startPageTransition = (path: string, element: ReactNode) => {
    setTransitionElement(element);
    setIsTransitioning(true);
    setTransitionPhase("fadeIn");

    setNextPath(path);
  };

  // when nextPath is ready → navigate
  useEffect(() => {
    if (nextPath) {
      navigate(nextPath);
    }
  }, [nextPath, navigate]);

  // when location changes, trigger fadeOut
  useEffect(() => {
    if (isTransitioning && transitionPhase === "fadeIn") {
      setTransitionPhase("fadeOut");
    }
  }, [location, isTransitioning, transitionPhase]);

  // finish transition after fadeOut
  useEffect(() => {
    if (transitionPhase === "fadeOut") {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setTransitionPhase("idle");
        setTransitionElement(null);
        setNextPath(null);
      }, 400); // fadeOut time
      return () => clearTimeout(timeout);
    }
  }, [transitionPhase]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        transitionPhase,
        transitionElement,
        startPageTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used inside a TransitionProvider"
    );
  }
  return context;
};
