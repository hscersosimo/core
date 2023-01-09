"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Tooltips = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <>
      <SectionHeader name="Tooltips" icon="sidebar-flip" />
      <Container>
        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </Container>

      <Container>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
      </Container>
    </>
  );
};

export default Tooltips;
