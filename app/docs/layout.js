import Header from "./header"
import Footer from "./footer"

// Root layout (app/layout.js)
// - Applies to all routes
export default function RootLayout({ children }) {
    return (
        <>
          <Header />
          {children}
          <Footer />
        </>
    )
    }