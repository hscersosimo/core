import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item">
          <Link href="/docs" className="nav-link" aria-current="page">
            Docs
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
            Sections
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown03">
            <li>
              <Link className="dropdown-item" href="/docs/content/typography">
                Typography
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/docs/content/images">
                Images
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
