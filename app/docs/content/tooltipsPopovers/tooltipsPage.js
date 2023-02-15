"use client";

import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import TooltipComponent from "../../../components/TooltipComponent";
import { Button } from "react-bootstrap";

const TooltipsPage = () => {
  return (
    <>
      <Container
        title="Tooltips"
        desc="Tooltips are a type of user interface component used to display additional information when the user hovers over or clicks on a particular element, such as a button or link. They provide a way to provide context or clarify functionality without cluttering the interface. "
      >
        <p>
          Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/components/tooltips/"
            target="_blank"
          >
            Bootstrap docs
          </a>{" "}
          for more details on how to enable tooltips in your project, or{" "}
          <a
            href="https://react-bootstrap.github.io/components/overlays/#tooltips"
            target="_blank"
          >
            here
          </a>{" "}
          if you are using the bootstrap-react library.
        </p>

        <SubContainer>
          Hover{" "}
          <TooltipComponent text="Some tooltip content">
            <a href="#">this element</a>
          </TooltipComponent>{" "}
          to see a tooltip. Lorem ipsum dolor sit{" "}
          <TooltipComponent text="More tooltip content" position="bottom">
            <a href="#">with position bottom</a>
          </TooltipComponent>{" "}
          (top by default) amet consectetur adipisicing elit. Sunt doloremque ex
          similique praesentium suscipit quos neque rerum laborum, ut, vel error
          inventore corporis eligendi enim soluta debitis harum quae dolor?
        </SubContainer>

        <h4>Trigger by click</h4>
        <SubContainer margin="mb-0">
          <TooltipComponent
            text="Tooltip triggered with a click (good for mobile devices)"
            trigger="click"
            position="right"
          >
            <Button>Click me to see</Button>
          </TooltipComponent>
        </SubContainer>
      </Container>
    </>
  );
};

export default TooltipsPage;
