import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import NavCore from "../../components/layout/nav_core";

const Main = () => {

    const router = useRouter();
    //const pageTitle = router.query['title'];

    return ( 
        <>
            <h1>Works!</h1>
            <Link href="/">Back</Link>
        </>
     );
}
 
export default Main;

Main.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavCore />
        {page}
      </Layout>
    )
  }