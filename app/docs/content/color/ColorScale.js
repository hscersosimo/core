import { useRef, useEffect, useState } from "react";
import rgbToHex from "../../../lib/rgbToHex";

const ColorScale = (props) =>
  Array.from({ length: 11 }, (_, index) => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const elementRef = useRef(null);

    useEffect(() => {
      const computedStyles = window.getComputedStyle(elementRef.current);
      const color = computedStyles.getPropertyValue("background-color");
      setBackgroundColor(rgbToHex(color));
    }, []);

    const colorCode = props.name + "-" + index + "00";

    var textColor = "text-white";
    var colorValue = "500";
    // Changing colorValue bg indicator for gray
    if (props.name == "gray") {
      colorValue = "600";
    }
    if (index < 5 && index > 0) {
      // Change the text color to dark when
      // color code is between 100 and 500
      textColor = "text-black";
    }

    if (index == 0) {
      // Color cell for main color
      return (
        <div key={index}>
          <div
            ref={elementRef}
            className={
              "docs-color-cell mt-2 mb-2 p-4 py-5 bg-" +
              props.name +
              "-" +
              colorValue
            }
          >
            <ColorCell
              ref={elementRef}
              backgroundColor={backgroundColor}
              name={props.name}
              colorCode={props.name + colorValue}
              textColor={textColor}
            />
          </div>
        </div>
      );
    } else if (index == 10) {
      return (
        <div key={index}>
          <div
            ref={elementRef}
            className={
              "docs-color-cell mt-2 p-4 bg-" + props.name + "-" + colorValue
            }
          >
            <ColorCell
              ref={elementRef}
              backgroundColor={backgroundColor}
              name="AA Text"
              colorCode={props.name + colorValue}
              textColor={textColor}
            />
          </div>
        </div>
      );
    } else if (index != 0 && index != 10) {
      // Color cell for everything else
      return (
        <div key={index}>
          {/*copyToClipboard the content of the (#targetDiv)*/}

          <div
            ref={elementRef}
            className={"docs-color-cell p-4 bg-" + colorCode}
          >
            <ColorCell
              ref={elementRef}
              backgroundColor={backgroundColor}
              name={colorCode}
              colorCode={colorCode}
              textColor={textColor}
            />
          </div>
        </div>
      );
    }
  });

export default ColorScale;

const ColorCell = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = (elementId) => {
    const textArea = document.createElement("textarea");
    const div = document.getElementById(elementId);
    textArea.value = div.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1250);
  };

  return (
    <>
      <a
        style={{ cursor: "pointer" }}
        onClick={() => copyToClipboard(props.colorCode)}
      >
        {/* Styles and content for color cell */}
        <div
          className={"d-flex justify-content-between fs-7 " + props.textColor}
        >
          <div className="fw-bold">{props.name}</div>
          <div id={props.colorCode} className="fw-normal">
            {props.backgroundColor}
          </div>
        </div>{" "}
      </a>

      {/* Styles and content for copied color alert */}
      {showAlert && (
        <div
          className="alert bg-white p-3 border shadow-sm rounded"
          role="alert"
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            margin: "0 auto",
            width: "400px",
          }}
        >
          <i class="fa-solid fa-circle-check text-success me-1"></i>{" "}
          <strong>
            {props.colorCode} - {props.backgroundColor}
          </strong>{" "}
          copied to your clipboard.
        </div>
      )}
    </>
  );
};
