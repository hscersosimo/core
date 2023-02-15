import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
const ListGroups = () => {
  return (
    <>
      <SectionHeader name="List Groups" icon="list-dropdown" />

      <Container>
        <h5>List groups</h5>
        <div className="card">
          <div className="card-header">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-footer">Card footer</div>
        </div>
      </Container>
      <Container>
        <ul className="list-group mb-5">
          <li className="list-group-item active">An active item</li>
          <li className="list-group-item disabled" aria-disabled="true">
            A disabled item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>

        <div className="list-group mb-5">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            The current link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A second link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A third link item
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            A fourth link item
          </a>
          <a className="list-group-item list-group-item-action disabled">
            A disabled link item
          </a>
        </div>

        <ul className="list-group list-group-flush mb-5">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>

        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            A simple default list group item
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-primary"
          >
            A simple primary list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-secondary"
          >
            A simple secondary list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-success"
          >
            A simple success list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-danger"
          >
            A simple danger list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-warning"
          >
            A simple warning list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-info"
          >
            A simple info list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-light"
          >
            A simple light list group item
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-dark"
          >
            A simple dark list group item
          </a>
        </div>
      </Container>

      <Container>
        <ol className="list-group list-group-numbered mb-5">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
        </ol>

        <ul className="list-group mb-5">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A second list item
            <span className="badge bg-primary rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A third list item
            <span className="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
        <div className="list-group mb-5">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
        </div>
      </Container>

      <Container>
        <h5>Checkboxes & Radios</h5>
        <ul className="list-group mb-5">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckbox"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="firstCheckbox"
            >
              First checkbox
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="secondCheckbox"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="secondCheckbox"
            >
              Second checkbox
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="thirdCheckbox"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="thirdCheckbox"
            >
              Third checkbox
            </label>
          </li>
        </ul>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="firstRadio"
              defaultChecked
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="firstRadio"
            >
              First radio
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="secondRadio"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="secondRadio"
            >
              Second radio
            </label>
          </li>
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              id="thirdRadio"
            />
            <label
              className="form-check-label stretched-link"
              htmlFor="thirdRadio"
            >
              Third radio
            </label>
          </li>
        </ul>
      </Container>
      <Container>
        <h5>Horizontal</h5>
        <p>
          Add <code>.list-group-horizontal</code> to change the layout of list
          group items from vertical to horizontal across all breakpoints.
          Alternatively, choose a responsive variant{" "}
          <code>.list-group-horizontal</code>- sm | md | lg | xl | xxl to make a
          list group horizontal starting at that breakpoint’s
          <code>min-width</code>. Currently horizontal list groups cannot be
          combined with flush list groups.
          <br />
          <strong>ProTip</strong>: Want equal-width list group items when
          horizontal? Add <code>.flex-fill</code> to each list group item.
        </p>
        <ul className="list-group list-group-horizontal mb-3">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm mb-3">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-md mb-3">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-lg mb-3">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xl mb-3">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <ul className="list-group list-group-horizontal-xxl">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </Container>
    </>
  );
};

export default ListGroups;
