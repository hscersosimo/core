import Link from "next/link";
import NavStyles from "./_nav/nav_styles";
import NavSections from "./_nav/nav_sections";
import NavComponents from "./_nav/nav_components";

const Nav = () => {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/docs" className="nav-link" aria-current="page">
            Design System
          </Link>
        </li>

        {/* <NavStyles />
        <NavSections />
        <NavComponents /> */}
      </ul>
    </>
  );
};

export default Nav;
