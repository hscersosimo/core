import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light mb-5"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Core
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar01"
            aria-controls="navbar01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar01">
            <Nav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
