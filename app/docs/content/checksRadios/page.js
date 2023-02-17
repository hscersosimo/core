import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
const ChecksRadios = () => {
  return (
    <>
      <SectionHeader name="Checkboxes & Radio buttons" icon="list-check" />
      <Container>
        <h5>Checks</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDisabled"
            disabled
          />
          <label className="form-check-label" htmlFor="flexCheckDisabled">
            Disabled checkbox
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckCheckedDisabled"
            defaultChecked
            disabled
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckCheckedDisabled"
          >
            Disabled checked checkbox
          </label>
        </div>
      </Container>
      <Container>
        <h5>Radios</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioDisabled"
            disabled
          />
          <label className="form-check-label" htmlFor="flexRadioDisabled">
            Disabled radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioCheckedDisabled"
            defaultChecked
            disabled
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioCheckedDisabled"
          >
            Disabled checked radio
          </label>
        </div>
      </Container>
      <Container>
        <h5>Switches</h5>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDisabled"
            disabled
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
            Disabled switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckCheckedDisabled"
            defaultChecked
            disabled
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckCheckedDisabled"
          >
            Disabled checked switch checkbox input
          </label>
        </div>
      </Container>
      <Container>
        <h5>Inline</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox1">
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineCheckbox2">
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            disabled
          />
          <label className="form-check-label" htmlFor="inlineCheckbox3">
            3 (disabled)
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
            disabled
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            3 (disabled)
          </label>
        </div>
      </Container>
      <Container>
        <h5>Toggle buttons</h5>
        <p>
          Create button-like checkboxes and radio buttons by using{" "}
          <code>.btn</code> styles rather than <code>.form-check-label</code> on
          the <code>label</code> elements. These toggle buttons can further be
          grouped in a button group if needed.
        </p>

        <input
          type="checkbox"
          className="btn-check"
          id="btn-check"
          autoComplete="off"
        />
        <label className="btn btn-primary me-1" htmlFor="btn-check">
          Single toggle
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-2"
          defaultChecked
          autoComplete="off"
        />
        <label className="btn btn-primary me-1" htmlFor="btn-check-2">
          Checked
        </label>

        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-3"
          autoComplete="off"
          disabled
        />
        <label className="btn btn-primary" htmlFor="btn-check-3">
          Disabled
        </label>
      </Container>
      <Container>
        <h5>Radio toggle buttons</h5>
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
          defaultChecked
        />
        <label className="btn btn-secondary me-1" htmlFor="option1">
          Checked
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option2"
          autoComplete="off"
        />
        <label className="btn btn-secondary me-1" htmlFor="option2">
          Radio
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option3"
          autoComplete="off"
          disabled
        />
        <label className="btn btn-secondary me-1" htmlFor="option3">
          Disabled
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option4"
          autoComplete="off"
        />
        <label className="btn btn-secondary" htmlFor="option4">
          Radio
        </label>
      </Container>
      <Container>
        <h5>Outlined styles</h5>
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-outlined"
          autoComplete="off"
        />
        <label
          className="btn btn-outline-primary mb-1"
          htmlFor="btn-check-outlined"
        >
          Single toggle
        </label>
        <br />

        <input
          type="checkbox"
          className="btn-check"
          id="btn-check-2-outlined"
          defaultChecked
          autoComplete="off"
        />
        <label
          className="btn btn-outline-secondary mb-1"
          htmlFor="btn-check-2-outlined"
        >
          Checked
        </label>
        <br />

        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="success-outlined"
          autoComplete="off"
          defaultChecked
        />
        <label
          className="btn btn-outline-success me-1"
          htmlFor="success-outlined"
        >
          Checked success radio
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="danger-outlined"
          autoComplete="off"
        />
        <label className="btn btn-outline-danger" htmlFor="danger-outlined">
          Danger radio
        </label>
      </Container>

      <h4>List groups</h4>
      <ul className="list-group mb-5">
        <li className="list-group-item">
          <input
            className="form-check-input me-2"
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
            className="form-check-input me-2"
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
            className="form-check-input me-2"
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
            className="form-check-input me-2"
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
            className="form-check-input me-2"
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
            className="form-check-input me-2"
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
    </>
  );
};

export default ChecksRadios;
