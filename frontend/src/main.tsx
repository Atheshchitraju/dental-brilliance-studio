import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;
  history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
