import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const container = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);