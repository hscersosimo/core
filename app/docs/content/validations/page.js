"use client";
import { useState } from "react";
import Container from "../_ui/Container";
import SectionHeader from "../_ui/SectionHeader";

function handleClick() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}

const Validations = () => {
  return (
    <>
      <SectionHeader name="Validations" icon="circle-exclamation" />
      <p>
        For custom Bootstrap form validation messages, you’ll need to add the
        novalidate boolean attribute to your <code>form</code>. This disables
        the browser default feedback tooltips, but still provides access to the
        form validation APIs in JavaScript.
      </p>
      <Container>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              defaultValue="Mark"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              defaultValue="Otto"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option defaultChecked disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              required
              minLength="6"
              maxLength="6"
            />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleClick}>
              Submit form
            </button>
          </div>
        </form>
      </Container>
      <Container>
        <form className="was-validated">
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">
              Textarea
            </label>
            <textarea
              className="form-control is-invalid"
              id="validationTextarea"
              placeholder="Required example textarea"
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="validationFormCheck1"
              required
            />
            <label className="form-check-label" htmlFor="validationFormCheck1">
              Check this checkbox
            </label>
            <div className="invalid-feedback">
              Example invalid feedback text
            </div>
          </div>

          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="validationFormCheck2"
              name="radio-stacked"
              required
            />
            <label className="form-check-label" htmlFor="validationFormCheck2">
              Toggle this radio
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              id="validationFormCheck3"
              name="radio-stacked"
              required
            />
            <label className="form-check-label" htmlFor="validationFormCheck3">
              Or toggle this other radio
            </label>
            <div className="invalid-feedback">
              More example invalid feedback text
            </div>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              required
              aria-label="select example"
            >
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="invalid-feedback">
              Example invalid select feedback
            </div>
          </div>

          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              aria-label="file example"
              required
            />
            <div className="invalid-feedback">
              Example invalid form file feedback
            </div>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary" disabled>
              Submit form
            </button>
          </div>
        </form>
      </Container>
      <Container>
        <h5>Tooltips</h5>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              defaultValue="Mark"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              defaultValue="Otto"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span
                className="input-group-text"
                id="validationTooltipUsernamePrepend"
              >
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">
                Please choose a unique and valid username.
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="validationTooltip03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationTooltip04" required>
              <option defaultChecked disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-tooltip">Please select a valid state.</div>
          </div>
          <div className="col-md-3 position-relative">
            <label htmlFor="validationTooltip05" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip05"
              required
            />
            <div className="invalid-tooltip">Please provide a valid zip.</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleClick}>
              Submit form
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Validations;
