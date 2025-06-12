import { usePageTransition } from "../../context/TransitionContext";

export const TransitionOverlay = () => {
  const { isTransitioning, transitionPhase } = usePageTransition();

  return (
    <>
      {isTransitioning && (
        <div
          className={`
          fixed inset-0 bg-black z-[9999] 
          transition-opacity duration-500 ease-in-out
          ${
            transitionPhase === "fadeIn"
              ? "opacity-100 animate-glitch"
              : "opacity-0"
          }
        `}
        />
      )}
    </>
  );
};
