"use client";

import Container from "../../../components/Container";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import SubContainer from "../../../components/SubContainer";

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

const PopoversPage = () => {
  return (
    <>
      <Container
        title="Popovers"
        desc="Popovers are a type of user interface component used to display additional information or functionality in a small, floating box that appears on top of the content. They provide a way to present contextually relevant information or actions to the user without disrupting their flow."
      >
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
        <SubContainer>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="tertiary">Click me to see</Button>
          </OverlayTrigger>
        </SubContainer>
      </Container>
    </>
  );
};

export default PopoversPage;
