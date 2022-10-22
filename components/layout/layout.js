import Head from "next/head";

const Layout = ({ children }) => {

    const pageTitle = 'Layout Core';

    return ( 
        <>
        <Head>
            <title>{ pageTitle }</title>
        </Head>
        <main>{ children }</main>
        </>
     );
}
 
export default Layout;