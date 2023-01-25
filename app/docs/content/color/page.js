"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import { useRef, useEffect, useState } from "react";
import rgbToHex from "../../../lib/rgbToHex";

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

  // useEffect(() => {
  //   const computedStyles = window.getComputedStyle(elementRef.current);
  //   const color = computedStyles.getPropertyValue("background-color");
  //   setBackgroundColor(rgbToHex(color));
  // }, []);

  return (
    <>
      <SectionHeader name="Color" icon="palette" />
      <p className="mb-5">
        Welcome to the color palette section of our design system. Here, you'll
        find a curated selection of colors that have been carefully chosen to
        represent our brand and create a cohesive visual experience. These
        colors can be used across all digital and print mediums to create a
        consistent look and feel for our products and services.
      </p>
      <Container>
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
    </>
  );
};

export default ColorPage;

const ColorScale = (props) =>
  Array.from({ length: 10 }, (_, index) => {
    const [backgroundColor, setBackgroundColor] = useState("");
    const elementRef = useRef(null);

    useEffect(() => {
      const computedStyles = window.getComputedStyle(elementRef.current);
      const color = computedStyles.getPropertyValue("background-color");
      setBackgroundColor(rgbToHex(color));
    }, []);

    // index starts from 1, since first color scale is 100
    index = index + 1;
    const colorCode = props.name + "-" + index + "00";

    // define when we need additional styles, like rounded borders (top and bottom)
    var styles;
    if (index == 1 || index == 6) {
      styles = "rounded-top";
    } else if (index == 5) {
      styles = "rounded my-1";
    } else if (index == 9 || index == 4) {
      styles = "rounded-bottom";
    }

    var textColor = "text-white";
    if (index < 5) {
      textColor = "text-dark";
    }

    if (index != 10) {
      return (
        <div key={index}>
          <div
            ref={elementRef}
            className={styles + " px-3 " + " bg-" + colorCode}
            style={{
              height: "44px",
              lineHeight: "44px",
            }}
          >
            <ShowAndCopyColor
              ref={elementRef}
              backgroundColor={backgroundColor}
              name={colorCode}
              colorCode={colorCode}
              textColor={textColor}
            />
          </div>
        </div>
      );
    } else {
      return (
        // AA Text
        <div key={index}>
          <div
            ref={elementRef}
            className={"rounded mt-1 px-3 mb-5 " + " bg-" + props.name + "-500"}
            style={{
              height: "44px",
              lineHeight: "44px",
            }}
          >
            <ShowAndCopyColor
              ref={elementRef}
              backgroundColor={backgroundColor}
              name="AA Text"
              colorCode={props.name + "-500"}
              textColor={textColor}
            />
          </div>
        </div>
      );
    }
  });

const ShowAndCopyColor = (props) => {
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
        <div className={"d-flex justify-content-between " + props.textColor}>
          <div className="fw-bold">{props.name}</div>
          <div id={props.colorCode} className="fw-normal fs-7">
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
