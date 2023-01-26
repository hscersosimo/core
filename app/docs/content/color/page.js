"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import { useRef, useEffect, useState } from "react";
import rgbToHex from "../../../lib/rgbToHex";
import BootstrapColorClasses from "./BootstrapColorClasses";

const ColorPage = () => {
  // List of colors to be displayed
  const color_palette = [
    {
      name: "indigo",
      description: "Primary",
    },
    {
      name: "teal",
      description: "Secondary",
    },
    {
      name: "purple",
      description: "Tertiary",
    },
    {
      name: "cyan",
      description: "Info",
    },
    {
      name: "green",
      description: "Success",
    },
    {
      name: "orange",
      description: "Warning",
    },
    {
      name: "red",
      description: "Danger",
    },
  ];

  const [backgroundColor, setBackgroundColor] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <SectionHeader name="Color" icon="palette" />
      <p className="mb-5">
        Create a cohesive and visually appealing design with our robust color
        system. Our color palette has been carefully curated to provide a wide
        range of options for all your design needs. From bold accent colors to
        subtle shades, our color system has everything you need to make your
        design stand out.
      </p>

      <Container
        title="Color palette"
        description="Bring consistency and beauty to your design with our carefully chosen color choices. "
      >
        <div className="d-flex justify-content-start flex-wrap">
          {color_palette.map((color) => (
            <div className="p-2 mb-3 text-center">
              <div
                className={"bg-" + color.name + "-500 rounded"}
                style={{ height: "100px", width: "100px" }}
              ></div>
              <div>
                <div className="fw-bold text-capitalize mt-2">{color.name}</div>
                <div className="fs-7 text-dark">{color.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container
        title="Color scales"
        description="Our color scales provide a range of shades for each color, allowing you to create a cohesive and visually pleasing design. Click on a color to copy the HEX code to your clipboard."
      >
        <div className="row">
          {color_palette.map((color) => (
            <div key={color.name} className="col-sm-12 col-md-6 col-lg-4">
              <div className="text-center mb-1">
                <h5 className="text-capitalize mb-3">
                  {color.name} -{" "}
                  <span className="fw-normal text-black-50">
                    {color.description}
                  </span>
                </h5>

                <ColorScale
                  name={color.name}
                  backgroundColor={backgroundColor}
                  setBackgroundColor={setBackgroundColor}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
      <BootstrapColorClasses />
    </>
  );
};

export default ColorPage;

const ColorScale = (props) =>
  Array.from({ length: 11 }, (_, index) => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const elementRef = useRef(null);

    useEffect(() => {
      const computedStyles = window.getComputedStyle(elementRef.current);
      const color = computedStyles.getPropertyValue("background-color");
      setBackgroundColor(rgbToHex(color));
    }, []);

    // index starts from 1, since first color scale is 100
    //index = index + 1;
    const colorCode = props.name + "-" + index + "00";

    // define when we need additional styles, like rounded borders (top and bottom)
    var styles = "";
    if (index == 1 || index == 6) {
      //styles = "rounded-top ";
    } else if (index == 5) {
      //styles = "my-2";
    } else if (index == 9 || index == 4) {
      //styles = "rounded-bottom ";
    }

    var textColor = "text-white";
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
              "docs-color-cell mt-2 mb-2 p-4 py-5 bg-" + props.name + "-500"
            }
          >
            <ColorCell
              ref={elementRef}
              backgroundColor={backgroundColor}
              name={props.name}
              colorCode={props.name + "-500"}
              textColor={textColor}
            />
          </div>
        </div>
      );
    } else if (index == 10) {
      // Color cell for AA Text
      return (
        <div key={index}>
          <div
            ref={elementRef}
            className={
              "docs-color-cell mt-2 mb-5 p-4 bg-" + props.name + "-500"
            }
          >
            <ColorCell
              ref={elementRef}
              backgroundColor={backgroundColor}
              name="AA Text"
              colorCode={props.name + "-500"}
              textColor={textColor}
            />
          </div>
        </div>
      );
    } else if (index != 0 && index != 10) {
      // Color cell for everything else
      return (
        <div key={index}>
          <div
            ref={elementRef}
            className={"docs-color-cell p-4 " + styles + " bg-" + colorCode}
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
    <div>
      <a
        style={{ cursor: "pointer" }}
        // copyToClipboard the content of the (#targetDiv)
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
        </div>
      </a>

      {/* Styles and content for copied color alert */}
      {showAlert && (
        <div
          className="alert alert-light p-1 border shadow-sm rounded"
          role="alert"
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            margin: "0 auto",
            width: "490px",
          }}
        >
          <i class="fa-solid fa-circle-check text-success me-1"></i>{" "}
          <strong>
            {props.colorCode} - {props.backgroundColor}
          </strong>{" "}
          copied to your clipboard.
        </div>
      )}
    </div>
  );
};
