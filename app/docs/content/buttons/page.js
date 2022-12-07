import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const Buttons = () => {
  return (
    <>
      <SectionHeader name="Buttons & Links" icon="standard-definition" />
      <Container>
        <div className="mb-3">
          <h5>Buttons</h5>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          &nbsp;
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          &nbsp;
          <button type="button" className="btn btn-success">
            Success
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          &nbsp;
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          &nbsp;
          <button type="button" className="btn btn-light">
            Light
          </button>
          &nbsp;
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          &nbsp;
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
        <div className="mb-3">
          <h5>Outline Buttons</h5>
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-success">
            Success
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-danger">
            Danger
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-warning">
            Warning
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-info">
            Info
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-light">
            Light
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
        </div>
      </Container>
      <Container>
        <h5>Sizes</h5>
        <div className="mb-3">
          <button type="button" className="btn btn-primary btn-lg">
            Large button
          </button>
          &nbsp;
          <button type="button" className="btn btn-secondary btn-lg">
            Large button
          </button>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary btn-sm">
            Small button
          </button>
          &nbsp;
          <button type="button" className="btn btn-secondary btn-sm">
            Small button
          </button>
        </div>
      </Container>
      <Container>
        <h5>Disabled</h5>
        <div className="mb-3">
          <button type="button" className="btn btn-lg btn-primary" disabled>
            Primary button
          </button>
          &nbsp;
          <button type="button" className="btn btn-secondary btn-lg" disabled>
            Button
          </button>
        </div>
        <div className="mb-3">
          <div>
            Disabled buttons using the <code>a</code> element behave a bit
            different:
            <ul>
              <li>
                Anchors don’t support the disabled attribute, so you must add
                the <code>.disabled</code> className to make it visually appear
                disabled.
              </li>
              <li>
                Some future-friendly styles are included to disable all
                <code>pointer-events</code> on anchor buttons.
              </li>
              <li>
                Disabled buttons should include the{" "}
                <code>aria-disabled="true"</code> attribute to indicate the
                state of the element to assistive technologies.
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="btn btn-primary btn-lg disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Primary link
          </a>
          &nbsp;
          <a
            href="#"
            className="btn btn-secondary btn-lg disabled"
            tabIndex="-1"
            role="button"
            aria-disabled="true"
          >
            Link
          </a>
        </div>
      </Container>
      <Container>
        <h5>Block buttons</h5>
        <div className="d-grid gap-2 mb-3">
          <button className="btn btn-primary" type="button">
            Button
          </button>
          <button className="btn btn-primary" type="button">
            Button
          </button>
        </div>
        <p>
          Here we create a responsive variation, starting with vertically
          stacked buttons until the md breakpoint, where{" "}
          <code>.d-md-block</code> replaces the <code>.d-grid</code> className,
          thus nullifying the <code>gap-2</code> utility. Resize your browser to
          see them change.
        </p>
        <div className="d-grid gap-2 d-md-block mb-3">
          <button className="btn btn-primary me-md-1" type="button">
            Button
          </button>
          <button className="btn btn-primary" type="button">
            Button
          </button>
        </div>
        <p>
          You can adjust the width of your block buttons with grid column width
          classes. For example, for a half-width “block button”, use .col-6.
          Center it horizontally with .mx-auto, too.
        </p>
        <div className="d-grid gap-2 col-6 mx-auto mb-3">
          <button className="btn btn-primary" type="button">
            Button
          </button>
          <button className="btn btn-primary" type="button">
            Button
          </button>
        </div>
        <p>
          Additional utilities can be used to adjust the alignment of buttons
          when horizontal. Here we’ve taken our previous responsive example and
          added some flex utilities and a margin utility on the button to right
          align the buttons when they’re no longer stacked.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">
            Button
          </button>
          <button className="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </Container>
      <Container>
        <h5>Toggle states</h5>
        <p>
          Add <code>data-bs-toggle="button"</code> to toggle a button’s{" "}
          <code>active</code> state. If you’re pre-toggling a button, you must
          manually add the <code>.active</code> class and{" "}
          <code>aria-pressed="true"</code> to ensure that it is conveyed
          appropriately to assistive technologies.
        </p>
        <button
          type="button"
          className="btn btn-primary me-1"
          data-bs-toggle="button"
          autoComplete="off"
        >
          Toggle button
        </button>
        <button
          type="button"
          className="btn btn-primary active me-1"
          data-bs-toggle="button"
          autoComplete="off"
          aria-pressed="true"
        >
          Active toggle button
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled
          data-bs-toggle="button"
          autoComplete="off"
        >
          Disabled toggle button
        </button>
      </Container>
    </>
  );
};

export default Buttons;
