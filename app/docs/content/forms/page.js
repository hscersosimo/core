import Container from "../_ui/Container";
import SectionHeader from "../_ui/SectionHeader";

const Forms = () => {
  return (
    <>
      <SectionHeader name="Forms" icon="ballot-check" />
      <Container>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-auto">
              <input
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>

      <Container>
        <h5>Readonly</h5>
        <div className="mb-5">
          <p>
            Add the <code>readonly</code> boolean attribute on an input to
            prevent modification of the input’s value.
          </p>
          <input
            className="form-control"
            type="text"
            defaultValue="Readonly input here..."
            aria-label="readonly input example"
            readOnly
          />
        </div>

        <h5>Readonly plain text</h5>
        <div>
          <p>
            If you want to have <code>input readonly</code> elements in your
            form styled as plain text, use the{" "}
            <code>.form-control-plaintext</code> className to remove the default
            form field styling and preserve the correct margin and padding.
          </p>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                defaultValue="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
        </div>
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="staticEmail2" className="visually-hidden">
              Email
            </label>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail2"
              defaultValue="email@example.com"
            />
          </div>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>
      </Container>

      <Container>
        <h5>Disabled</h5>
        <p>
          Add the <code>disabled</code> boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        </p>
        <div className="mb-5">
          <input
            className="form-control mb-2"
            type="text"
            defaultValue="Disabled readonly input"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </div>
        <form className="mb-3">
          <fieldset disabled>
            <legend>Disabled fieldset example</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Disabled input
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label">
                Disabled select menu
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label
                  className="form-check-label"
                  htmlFor="disabledFieldsetCheck"
                >
                  Can't check this
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </Container>
      <Container>
        <h5>Accessibility</h5>
        <p>
          Ensure that all form controls have an appropriate accessible name so
          that their purpose can be conveyed to users of assistive technologies.
          The simplest way to achieve this is to use a <code>label</code>{" "}
          element, or—in the case of buttons—to include sufficiently descriptive
          text as part of the <code>button.../button</code> content.
        </p>
        <p>
          For situations where it’s not possible to include a visible{" "}
          <code>label</code> or appropriate text content, there are alternative
          ways of still providing an accessible name, such as:
        </p>
        <ul>
          <li>
            <code>label</code> elements hidden using the{" "}
            <code>.visually-hidden</code> className
          </li>
          <li>
            Pointing to an existing element that can act as a label using{" "}
            <code>aria-labelledby</code>
          </li>
          <li>
            Providing a <code>title</code> attribute
          </li>
          <li>
            Explicitly setting the accessible name on an element using{" "}
            <code>aria-label</code>
          </li>
        </ul>
        <p>
          If none of these are present, assistive technologies may resort to
          using the placeholder attribute as a fallback for the accessible name
          on <code>input</code> and <code>textarea</code> elements. The examples
          in this section provide a few suggested, case-specific approaches.
        </p>
        <p>
          While using visually hidden content (<code>.visually-hidden</code>,{" "}
          <code>aria-label</code>, and even <code>placeholder</code> content,
          which disappears once a form field has content) will benefit assistive
          technology users, a lack of visible label text may still be
          problematic for certain users. Some form of visible label is generally
          the best approach, both for accessibility and usability.
        </p>
      </Container>
      <Container>
        <h5>Sizing</h5>
        <div className="mb-5">
          <input
            className="form-control form-control-lg mb-2"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
            aria-label=".form-control-sm example"
          />
        </div>
      </Container>
      <Container>
        <h5>File input</h5>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Multiple files input example
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileDisabled" className="form-label">
            Disabled file input example
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileDisabled"
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileSm" className="form-label">
            Small file input example
          </label>
          <input
            className="form-control form-control-sm"
            id="formFileSm"
            type="file"
          />
        </div>
        <div>
          <label htmlFor="formFileLg" className="form-label">
            Large file input example
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>
      </Container>
      <Container>
        <h5>Color picker</h5>
        <label htmlFor="exampleColorInput" className="form-label">
          Color picker
        </label>
        <input
          type="color"
          className="form-control form-control-color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
      </Container>
    </>
  );
};

export default Forms;
