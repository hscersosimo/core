"use client";
import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

const ToastsPage = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <SectionHeader name="Toasts" icon="spinner" />
      <p>
        See more information about toasts in the{" "}
        <a
          href="https://getbootstrap.com/docs/5.2/components/toasts/"
          target="_blank"
        >
          Bootstrap docs
        </a>{" "}
        or{" "}
        <a
          href="https://react-bootstrap.github.io/components/toasts/"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <Container>
        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </Container>

      <Container>
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Container>

      <Container></Container>
    </>
  );
};

export default ToastsPage;
