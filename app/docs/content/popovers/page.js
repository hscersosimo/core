"use client";
import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content, including full HTML
      support. It's very{" "}
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
      >
        engaging
      </a>
      . right?
    </Popover.Body>
  </Popover>
);

const Popovers = () => {
  return (
    <>
      <SectionHeader name="Popovers" icon="message-middle" />
      <p>
        Check the{" "}
        <a href="https://getbootstrap.com/docs/5.2/components/popovers/">
          Bootstrap docs
        </a>{" "}
        to learn how to enable popovers in your project. If you are using the
        react-bootstrap library, more details{" "}
        <a href="https://react-bootstrap.github.io/components/overlays/#popovers">
          here
        </a>
        .
      </p>
      <Container>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
      </Container>
    </>
  );
};

export default Popovers;
