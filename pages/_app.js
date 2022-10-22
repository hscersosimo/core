// This App component is the top-level component which will be common across all the different pages. 
// You can use this App component to keep state when navigating between pages, for example.

// Import Global Styles
import '../styles/styles.scss';
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {

  // Method for making Bootstrap's JS file
  // work with Next JS
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;