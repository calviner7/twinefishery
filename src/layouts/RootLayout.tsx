import { Outlet } from "react-router-dom";
import { TransitionProvider } from "../context/TransitionContext";
import { TransitionOverlay } from "../components/TransitionOverlay";

export default function RootLayout() {
  return (
    <TransitionProvider>
      <TransitionOverlay />
      <Outlet />
    </TransitionProvider>
  );
}
