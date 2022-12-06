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
        <div className="mb-3">
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
        <div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Small
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Default
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Large
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="col-form-label-sm"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="colFormLabel"
              placeholder="col-form-label"
            />
          </div>
        </div>
        <div className="row">
          <label
            htmlFor="colFormLabelLg"
            className="col-sm-2 col-form-label col-form-label-lg"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
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

      <Container>
        <h5>Input groups</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>

        <label htmlFor="basic-url" className="form-label">
          Your vanity URL
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Server"
            aria-label="Server"
          />
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">With textarea</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            />
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with radio button"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" className="form-control" />
          <input type="text" aria-label="Last name" className="form-control" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <span className="input-group-text">$</span>
          <span className="input-group-text">0.00</span>
        </div>
      </Container>
      <Container>
        <h5>Buttons & dropdowns</h5>
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>

        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with two button addons"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username with two button addons"
          />
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>

        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
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
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
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

        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action before
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action before
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
          <input
            type="text"
            className="form-control"
            aria-label="Text input with 2 dropdown buttons"
          />
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
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

        <div className="input-group mb-3">
          <button type="button" className="btn btn-outline-secondary">
            Action
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
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
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <button type="button" className="btn btn-outline-secondary">
            Action
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
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
      </Container>

      <Container>
        <h5>Custom forms</h5>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Options
          </label>
          <select className="form-select" id="inputGroupSelect01">
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <select className="form-select" id="inputGroupSelect02">
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Options
          </label>
        </div>

        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option defaultValue>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button className="btn btn-outline-secondary" type="button">
            Button
          </button>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">
            Upload
          </label>
          <input type="file" className="form-control" id="inputGroupFile01" />
        </div>

        <div className="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>

        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon03"
          >
            Button
          </button>
          <input
            type="file"
            className="form-control"
            id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03"
            aria-label="Upload"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
        </div>
      </Container>

      <Container>
        <h5>Floating labels</h5>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <form className="form-floating mb-3">
          <input
            type="email"
            className="form-control is-invalid"
            id="floatingInputInvalid"
            placeholder="name@example.com"
            defaultValue="test@example.com"
          />
          <label htmlFor="floatingInputInvalid">Invalid input</label>
        </form>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label htmlFor="floatingSelect">Works with selects</label>
        </div>

        <div className="row g-2">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                defaultValue="mdo@example.com"
              />
              <label htmlFor="floatingInputGrid">Email address</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option defaultValue>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label htmlFor="floatingSelectGrid">Works with selects</label>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <h5>Form Layout</h5>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </Container>
      <Container>
        <h5>Horizontal form</h5>
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  First radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Second radio
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="gridRadios3">
                  Third disabled radio
                </label>
              </div>
            </div>
          </fieldset>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </Container>
      <Container>
        <h5>Auto-sizing</h5>
        <form className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingSelect">
              Preference
            </label>
            <select className="form-select" id="autoSizingSelect">
              <option defaultValue>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-auto">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Forms;
