import Link from "next/link";

const NavStyles = () => {
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
          Brand Styles
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
    </>
  );
};

export default NavStyles;
