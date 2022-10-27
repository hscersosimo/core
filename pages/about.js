import Layout from "../components/core/Layout";
import Header from "../components/core/Header";

const About = () => {
    return ( 
        <h1>This is the about page</h1>
     );
} 
export default About;

About.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Header />
        {page}
      </Layout>
    )
  }