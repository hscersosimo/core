"use client";
import { useEffect } from "react";

// CSS Styles
import "../styles/styles.scss";
import "../public/fonts/fontawesome/css/all.min.css";
//import * as bootstrap from "bootstrap";

// Root layout (app/layout.js)
// - Applies to all routes
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
    //window.bootstrap = bootstrap;
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Design System Docs</title>
        <meta name="description" content="Design System Docs" key="desc" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>

      <body>{children}</body>
    </html>
  );
}
