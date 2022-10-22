import Layout from "../components/layout/layout";
import NavCore from "../components/layout/nav_core";

const About = () => {
    return ( 
        <h1>This is the about page</h1>
     );
} 
export default About;

About.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavCore />
        {page}
      </Layout>
    )
  }