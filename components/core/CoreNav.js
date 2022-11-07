import Link from "next/link";

const CoreNav = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item">
          <Link href="/designSystem/designSystem" className="nav-link" aria-current="page">
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
            Apps
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdown03">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
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

export default CoreNav;
