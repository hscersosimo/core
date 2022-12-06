import Link from "next/link";

const NavSections = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="dropdown03"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sections
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdown03">
          <li>
            <Link className="dropdown-item" href="/docs/content/all_sections">
              All Sections
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
            <Link className="dropdown-item" href="/docs/content/checks_radios">
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
    </>
  );
};

export default NavSections;
