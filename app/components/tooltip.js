import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const TooltipComponent = (props) => {
  return (
    <>
      <OverlayTrigger
        trigger={props.trigger}
        placement={props.position}
        overlay={<Tooltip>{props.text}</Tooltip>}
      >
        <span>{props.children}</span>
      </OverlayTrigger>
    </>
  );
};

export default TooltipComponent;
