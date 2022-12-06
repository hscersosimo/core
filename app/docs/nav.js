import Link from "next/link";
import NavStyles from "./_nav/nav_styles";
import NavSections from "./_nav/nav_sections";

const Nav = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Core
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/docs" className="nav-link" aria-current="page">
                  Design System
                </Link>
              </li>

              <NavStyles></NavStyles>
              <NavSections></NavSections>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
