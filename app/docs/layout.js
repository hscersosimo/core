import Header from "./header";
import Footer from "./footer";

// Root layout (app/layout.js)
// - Applies to all routes
export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ paddingTop: "90px" }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
