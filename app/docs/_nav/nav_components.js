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
        </ul>
      </li>
    </>
  );
};

export default NavComponents;
