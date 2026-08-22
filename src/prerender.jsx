import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function prerender() {
  const html = renderToString(<App />);
  return { html };
}
