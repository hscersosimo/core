import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
const Dropdown = () => {
  return (
    <>
      <SectionHeader name="Dropdown" icon="list-dropdown" />

      <Container>
        <h5>Dropdown</h5>

        <div className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <h6 className="dropdown-header">Dropdown-header</h6>
            </li>
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
        </div>

        <div className="mb-3">
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Primary
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Secondary
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Success
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Info
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Warning
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group me-2 mb-2">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Danger
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <h5>Sizing</h5>
        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Large button
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group mb-2 me-2">
          <button type="button" className="btn btn-lg btn-secondary">
            Large split button
          </button>
          <button
            type="button"
            className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="bd-example">
          <div className="btn-group mb-2 me-2">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Small button
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group mb-2 me-2">
            <button type="button" className="btn btn-sm btn-secondary">
              Small split button
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <h5>Dark dropdowns</h5>
        <p>
          Opt into darker dropdowns to match a dark navbar or custom style by
          adding <code>.dropdown-menu-dark</code> onto an existing{" "}
          <code>.dropdown-menu</code>. No changes are required to the dropdown
          items.
        </p>
        <div className="dropdown mb-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item active" href="#">
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
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="navbar-collapse collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
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
                    <ul className="dropdown-menu dropdown-menu-dark">
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Container>
      <Container>
        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Right-aligned menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Left-aligned, right-aligned lg
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Right-aligned, left-aligned lg
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group dropstart mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropstart
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group dropend mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropend
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group dropup mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropup
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>
        <h5 className="mt-3">Centered</h5>
        <p>
          Make the dropdown menu centered below the toggle with{" "}
          <code>.dropdown-center</code>
          on the parent element.
        </p>
        <div className="dropdown-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Centered dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Action two
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Action three
              </a>
            </li>
          </ul>
        </div>
        <h5 className="mt-3">Menu alignment</h5>
        <div className="bd-example">
          <div className="btn-group mb-2 me-2">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Right-aligned menu example
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>

        <h5 className="mt-3">Responsive alignment</h5>
        <p>
          If you want to use responsive alignment, disable dynamic positioning
          by adding the <code>data-bs-display="static"</code> attribute and use
          the responsive variation classes. To align right the dropdown menu
          with the given breakpoint or larger, add <code>.dropdown-menu</code>{" "}
          -sm | -md | -lg | -xl | -xxl-end.
        </p>
        <div className="btn-group mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Left-aligned but right aligned when large screen
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
        <div className="btn-group mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Right-aligned but left aligned when large screen
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>

        <h5 className="mt-3">Dropup</h5>
        <div className="btn-group dropup mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropup
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group dropup mb-2 me-2">
          <button type="button" className="btn btn-secondary">
            Split dropup
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>

        <h5 className="mt-3">Dropend</h5>
        <div className="btn-group dropend mb-2 me-2">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropend
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-group dropend mb-2 me-2">
          <button type="button" className="btn btn-secondary">
            Split dropend
          </button>
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropend</span>
          </button>
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
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <h5 className="mt-3">Dropstart</h5>
        <div className="bd-example">
          <div className="btn-group dropstart mb-2 me-2">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropstart
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group dropstart mb-2 me-2">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropstart</span>
            </button>
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
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-secondary">
              Split dropstart
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <h5>Forms</h5>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle show"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            data-bs-auto-close="outside"
          >
            Dropdown form
          </button>
          <form
            className="dropdown-menu p-4"
            data-popper-placement="bottom-start"
          >
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleDropdownFormPassword2"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck2"
                />
                <label className="form-check-label" htmlFor="dropdownCheck2">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>

        <h5 className="mt-3">Autoclose behavior</h5>
        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="true"
            aria-expanded="false"
          >
            Default dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Clickable outside
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            Clickable inside
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-group mb-2 me-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="false"
            aria-expanded="false"
          >
            Manual close
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Dropdown;
