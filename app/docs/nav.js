import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/docs" className="nav-link" aria-current="page">
            Design System
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
