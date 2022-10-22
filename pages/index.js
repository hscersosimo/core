import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import NavCore from '../components/layout/nav_core';

const Home = () => {

  return(
      <section>
        <h1>Welcome to (Index)</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veritatis explicabo itaque doloribus eos quasi dolor aliquid suscipit quas totam natus.</p>
        <Link href={{
          pathname: '/design_system/main', 
          query: { title: 'Saraza' }
        }}>
        <a>Test</a>
        </Link>
      </section>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavCore />
      {page}
    </Layout>
  )
}