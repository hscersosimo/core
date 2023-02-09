import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

const ButtonGroup = () => {
  return (
    <>
      <SectionHeader name="Button Group" icon="layer-group" />
      <Container>
        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              Left
            </button>
            <button type="button" className="btn btn-primary">
              Middle
            </button>
            <button type="button" className="btn btn-primary">
              Right
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div className="btn-group">
            <a href="#" className="btn btn-primary active" aria-current="page">
              Active link
            </a>
            <a href="#" className="btn btn-primary">
              Link
            </a>
            <a href="#" className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger">
              Left
            </button>
            <button type="button" className="btn btn-warning">
              Middle
            </button>
            <button type="button" className="btn btn-success">
              Right
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-primary">
              Left
            </button>
            <button type="button" className="btn btn-outline-primary">
              Middle
            </button>
            <button type="button" className="btn btn-outline-primary">
              Right
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            <input
              type="checkbox"
              className="btn-check"
              id="btncheck1"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck1">
              Checkbox 1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck2">
              Checkbox 2
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="btncheck3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btncheck3">
              Checkbox 3
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Radio 1
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Radio 2
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Radio 3
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-primary">
              1
            </button>
            <button type="button" className="btn btn-primary">
              2
            </button>

            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h5>Vertical variation</h5>

        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
        >
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <div className="btn-group" role="group">
            <button
              id="btnGroupVerticalDrop1"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="btnGroupVerticalDrop1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <button type="button" className="btn btn-primary">
            Button
          </button>
          <div className="btn-group" role="group">
            <button
              id="btnGroupVerticalDrop2"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="btnGroupVerticalDrop2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupVerticalDrop3"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="btnGroupVerticalDrop3"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupVerticalDrop4"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="btnGroupVerticalDrop4"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <h5>Button toolbar</h5>
        <div className="mb-3">
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-primary">
                1
              </button>
              <button type="button" className="btn btn-primary">
                2
              </button>
              <button type="button" className="btn btn-primary">
                3
              </button>
              <button type="button" className="btn btn-primary">
                4
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary">
                5
              </button>
              <button type="button" className="btn btn-secondary">
                6
              </button>
              <button type="button" className="btn btn-secondary">
                7
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-info">
                8
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h5>Sizing</h5>
        <div className="mb-3">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Large button group"
          >
            <button type="button" className="btn btn-outline-dark">
              Left
            </button>
            <button type="button" className="btn btn-outline-dark">
              Middle
            </button>
            <button type="button" className="btn btn-outline-dark">
              Right
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Default button group"
          >
            <button type="button" className="btn btn-outline-dark">
              Left
            </button>
            <button type="button" className="btn btn-outline-dark">
              Middle
            </button>
            <button type="button" className="btn btn-outline-dark">
              Right
            </button>
          </div>
        </div>
        <div className="mb-3">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Small button group"
          >
            <button type="button" className="btn btn-outline-dark">
              Left
            </button>
            <button type="button" className="btn btn-outline-dark">
              Middle
            </button>
            <button type="button" className="btn btn-outline-dark">
              Right
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ButtonGroup;
