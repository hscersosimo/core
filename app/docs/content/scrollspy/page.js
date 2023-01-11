import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const ScrollSpyPage = () => {
  return (
    <>
      <SectionHeader name="Scroll Spy" icon="bars-progress" />
      <div className="alert alert-danger">
        This is not working properly yet, since a page reload is required for
        the full functionality to be enabled.
      </div>
      <Container>
        <h5 className="border-bottom pb-1 mb-3">Navbar</h5>
        <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">
                First
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                Second
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading3">
                    Third
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading4">
                    Fourth
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#scrollspyHeading5">
                    Fifth
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example p-3 rounded-2"
          tabIndex="0"
          style={{ height: "200px", overflow: "auto" }}
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>
      </Container>

      <Container>
        <h5 className="border-bottom pb-1 mb-3">Nested nav</h5>
        <div className="row">
          <div className="col-4">
            <nav
              id="navbar-example3"
              className="h-100 flex-column align-items-stretch pe-4 border-end"
            >
              <nav className="nav nav-pills flex-column">
                <a className="nav-link" href="#item-1">
                  Item 1
                </a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ms-3 my-1" href="#item-1-1">
                    Item 1-1
                  </a>
                  <a className="nav-link ms-3 my-1" href="#item-1-2">
                    Item 1-2
                  </a>
                </nav>
                <a className="nav-link" href="#item-2">
                  Item 2
                </a>
                <a className="nav-link" href="#item-3">
                  Item 3
                </a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ms-3 my-1" href="#item-3-1">
                    Item 3-1
                  </a>
                  <a className="nav-link ms-3 my-1" href="#item-3-2">
                    Item 3-2
                  </a>
                </nav>
              </nav>
            </nav>
          </div>

          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabindex="0"
              style={{ height: "400px", overflow: "auto" }}
            >
              <div id="item-1">
                <h4>Item 1</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-1-1">
                <h5>Item 1-1</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-1-2">
                <h5>Item 1-2</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>
              </div>
              <div id="item-2">
                <h4>Item 2</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>{" "}
              </div>
              <div id="item-3">
                <h4>Item 3</h4>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>{" "}
              </div>
              <div id="item-3-1">
                <h5>Item 3-1</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>{" "}
              </div>
              <div id="item-3-2">
                <h5>Item 3-2</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note
                  that as you scroll down the page, the appropriate navigation
                  link is highlighted. It's repeated throughout the component
                  example. We keep adding some more example copy here to
                  emphasize the scrolling and highlighting.
                </p>
                <p>
                  Keep in mind that the JavaScript plugin tries to pick the
                  right element among all that may be visible. Multiple visible
                  scrollspy targets at the same time may cause some issues.
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <h5 className="border-bottom pb-1 mb-3">List group</h5>

        <div className="row">
          <div className="col-4">
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                Item 1
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Item 2
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Item 3
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-4"
              >
                Item 4
              </a>
            </div>
          </div>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabIndex="0"
              style={{ height: "200px", overflow: "auto" }}
            >
              <h4 id="list-item-1">Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h4 id="list-item-2">Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
              <h4 id="list-item-3">Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
              <h4 id="list-item-4">Item 4</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <h5 className="border-bottom pb-1 mb-3">Simple anchors</h5>
        <div className="row">
          <div className="col-4">
            <div
              id="simple-list-example"
              className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
            >
              <a className="p-1 rounded" href="#simple-list-item-1">
                Item 1
              </a>
              <a className="p-1 rounded" href="#simple-list-item-2">
                Item 2
              </a>
              <a className="p-1 rounded" href="#simple-list-item-3">
                Item 3
              </a>
              <a className="p-1 rounded" href="#simple-list-item-4">
                Item 4
              </a>
              <a className="p-1 rounded" href="#simple-list-item-5">
                Item 5
              </a>
            </div>
          </div>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#simple-list-example"
              data-bs-offset="0"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabIndex="0"
              style={{ height: "250px", overflow: "auto" }}
            >
              <h4 id="simple-list-item-1">Item 1</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
              <h4 id="simple-list-item-2">Item 2</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
              <h4 id="simple-list-item-3">Item 3</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
              <h4 id="simple-list-item-4">Item 4</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
              <h4 id="simple-list-item-5">Item 5</h4>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>{" "}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ScrollSpyPage;
