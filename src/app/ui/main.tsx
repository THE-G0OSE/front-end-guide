import { createRoot } from "react-dom/client";
import App from "./App";
import "../style/index.css"
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
