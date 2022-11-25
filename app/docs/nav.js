import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item">
          <Link href="/docs" className="nav-link" aria-current="page">
            Design System
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdown03"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Styles
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown03">
            <li>
              <Link className="dropdown-item" href="/docs/content/all_styles">
                All Styles
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/fonts">
                Fonts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/icons">
                Icons
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdown03"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Components
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown03">
            <li>
              <Link
                className="dropdown-item"
                href="/docs/content/all_components"
              >
                All Components
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/typography">
                Typography
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/buttons">
                Buttons & Links
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/images">
                Images
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/tables">
                Tables
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/forms">
                Forms
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="/docs/content/checks_radios"
              >
                Checks &amp; Radios
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="/docs/content/select_dropdown"
              >
                Select &amp; Dropdowns
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/sliders">
                Sliders
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/validations">
                Validations
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </>
  );
};

export default Nav;
