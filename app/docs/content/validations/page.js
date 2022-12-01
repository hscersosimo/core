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
    </>
  );
};

export default Validations;
