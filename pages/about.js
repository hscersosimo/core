import Layout from "../components/core/Layout";
import PageHeader from "../components/core/PageHeader";

const About = () => {
  return <h1>This is the about page</h1>;
};
export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHeader />
      {page}
    </Layout>
  );
};
