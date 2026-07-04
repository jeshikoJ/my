import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Global error overlay for easy debugging of blank screen issues
if (typeof window !== "undefined") {
  window.onerror = function (message, source, lineno, colno, error) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.backgroundColor = "#ff0000";
    div.style.color = "#ffffff";
    div.style.padding = "20px";
    div.style.zIndex = "999999";
    div.style.fontFamily = "monospace";
    div.style.fontSize = "14px";
    div.style.whiteSpace = "pre-wrap";
    div.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    div.innerHTML = `<strong>🚨 Runtime Error:</strong><br>${message}<br>at ${source}:${lineno}:${colno}<br><br>${error ? error.stack : ""}`;
    document.body.appendChild(div);
    return false;
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);