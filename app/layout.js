"use client";
import { useEffect } from "react";

// CSS Styles
import "../styles/styles.scss";
import "../public/fonts/fontawesome/css/fontawesome.min.css";
import "../public/fonts/fontawesome/css/light.min.css";

// Root layout (app/layout.js)
// - Applies to all routes
export default function RootLayout({ children }) {
  /* Load Bootstrap JS file */
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Design System Docs</title>
        <meta name="description" content="Design System Docs" key="desc" />
      </head>
      <body>{children}</body>
    </html>
  );
}
