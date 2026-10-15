import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../styles/base.css";
import { BusinessPage } from "./BusinessPage";
import { PaymentsPage } from "./PaymentsPage";

// Reference build of both pages, hand assembled from the coded components.
// Use it to compare against what you build in ExO.
function App() {
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route.startsWith("#/business/payments") ? <PaymentsPage /> : <BusinessPage />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
