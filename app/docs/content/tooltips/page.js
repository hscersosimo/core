"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

import TooltipComponent from "../../../components/tooltip";
import { Button } from "react-bootstrap";

const Tooltips = () => {
  return (
    <>
      <SectionHeader name="Tooltips" icon="comment-middle" />
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
      <Container>
        <div>
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
        </div>

        <TooltipComponent
          text="Tooltip triggered with a click (good for mobile devices)"
          trigger="click"
          position="right"
        >
          <Button className="my-3">Click me to see</Button>
        </TooltipComponent>
      </Container>
    </>
  );
};

export default Tooltips;
