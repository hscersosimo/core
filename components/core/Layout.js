import Head from "next/head";

const Layout = ({ children }) => {
  const pageTitle = "Layout Core";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
