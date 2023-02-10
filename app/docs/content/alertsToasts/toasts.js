"use client";
import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";

const ToastsPage = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <Container
        title="Toasts"
        desc="Toasts are brief, non-interruptive notifications that provide feedback to the user on an action they have performed. They are used to display success messages, confirmations, and other important information without taking the user away from their current task."
      >
        <SubContainer margin="mb-3">
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
        </SubContainer>
        <div className="">
          <p>
            See more information about toasts in the{" "}
            <a
              href="https://getbootstrap.com/docs/5.2/components/toasts/"
              target="_blank"
            >
              Bootstrap docs
            </a>
            , or{" "}
            <a
              href="https://react-bootstrap.github.io/components/toasts/"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="">
          <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </div>
        <ToastContainer
          className="p-3"
          containerPosition="fixed"
          position="top-end"
        >
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">Design System</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </>
  );
};

export default ToastsPage;
