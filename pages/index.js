import Layout from "../components/core/Layout";
import PageHeader from "../components/core/PageHeader";

const Home = () => {
  return (
    <section>
      <h1>Welcome to (Index)</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        explicabo itaque doloribus eos quasi dolor aliquid suscipit quas totam
        natus.
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHeader />
      {page}
    </Layout>
  );
};
