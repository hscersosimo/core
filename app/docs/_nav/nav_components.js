import Link from "next/link";

const NavComponents = () => {
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
          Components
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdown03">
          <li>
            <Link className="dropdown-item" href="/docs/content/all_components">
              All Components
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/accordion">
              Accordion
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              href="/docs/content/expand_collapse"
            >
              Expand/Collapse
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/alerts">
              Alerts
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/badge">
              Badges
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/buttons">
              Buttons
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/button_group">
              Button group
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/dropdown">
              Dropdown
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/carousel">
              Carousel
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/list_group">
              List Groups
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/modal">
              Modals
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/navbar">
              Navbar
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/tabs">
              Tabs
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/offcanvas">
              Offcanvas
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/pagination">
              Pagination
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/popovers">
              Popovers
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="/docs/content/tooltips">
              Tooltips
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default NavComponents;
