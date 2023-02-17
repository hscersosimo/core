import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const Navbar = () => {
  return (
    <>
      <SectionHeader name="Navbar" />
      <Container
        title="Navbar"
        desc="Navbars are a critical user interface component used to provide users with easy access to the most important areas of a website or application. They provide a way to navigate through the content and features of the system and offer a consistent experience across the site."
      >
        <div className="mb-5">
          <p>
            Navbars come with built-in support for a handful of sub-components.
            Choose from the following as needed:
          </p>
          <ul>
            <li>
              <code>.navbar-brand</code> for your company, product, or project
              name.
            </li>
            <li>
              <code>.navbar-nav</code> for a full-height and lightweight
              navigation (including support for dropdowns).
            </li>
            <li>
              <code>.navbar-toggler</code> for use with our collapse plugin and
              other <a href="#responsive-behaviors">navigation toggling</a>{" "}
              behaviors.
            </li>
            <li>
              Flex and spacing utilities for any form controls and actions.
            </li>
            <li>
              <code>.navbar-text</code> for adding vertically centered strings
              of text.
            </li>
            <li>
              <code>.collapse.navbar-collapse</code> for grouping and hiding
              navbar contents by a parent breakpoint.
            </li>
            <li>
              Add an optional <code>.navbar-scroll</code> to set a{" "}
              <code>max-height</code> and{" "}
              <a href="#scrolling">scroll expanded navbar content</a>.
            </li>
          </ul>
          <p>
            See details about placement, scrolling and more in the&nbsp;
            <a href="https://getbootstrap.com/docs/5.2/components/navbar/">
              Bootstrap Docs
            </a>
            .
          </p>
        </div>
        <SubContainer padding="p-3">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
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
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3">
          <nav className="navbar bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top me-1"
                />
                Bootstrap
              </a>
            </div>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3">
          <nav className="navbar bg-white">
            <form className="container-fluid justify-content-start">
              <span className="navbar-text me-2">
                Navbar text with an inline element
              </span>
              <button className="btn btn-outline-success me-2" type="button">
                Main button
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
              >
                Smaller button
              </button>
            </form>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar w/ text
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
                <span className="navbar-text">
                  Navbar text with an inline element
                </span>
              </div>
            </div>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </SubContainer>
        <SubContainer padding="p-3" margin="mb-0">
          <nav className="navbar navbar-expand-lg text-bg-info">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor03"
                aria-controls="navbarColor03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-dark" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </SubContainer>
      </Container>
    </>
  );
};

export default Navbar;
