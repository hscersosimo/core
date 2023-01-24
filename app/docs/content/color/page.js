"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import { useRef, useEffect, useState } from "react";

const ColorPage = () => {
  // List of colors to be displayed
  const color_palette = [
    {
      name: "indigo",
      description: "Primary",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "teal",
      description: "Secondary",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "purple",
      description: "Tertiary",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "cyan",
      description: "Info",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "green",
      description: "Success",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "orange",
      description: "Warning",
      contrast: "#5C6AC1", // background color for white text
    },
    {
      name: "red",
      description: "Danger",
      contrast: "#5C6AC1", // background color for white text
    },
  ];

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
            <>
              <div key={color.name} className="col-sm-12 col-md-6">
                <div className="text-center mb-3">
                  <h5 className="text-capitalize mb-0">{color.name}</h5>
                  <p className="text-black-50">{color.description}</p>
                  <div className="text-white fw-bold">
                    <ColorScale name={color.name} />
                  </div>
                </div>
                <div className="mb-5">
                  <h6 className="text-center">AA text</h6>
                  <div className="text-white fw-bold">
                    {
                      <ColorUsability
                        name={color.name}
                        contrast={color.contrast}
                      />
                    }
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ColorPage;

const ColorScale = (props) =>
  Array.from({ length: 9 }, (_, index) => {
    // index starts from 1, since first color scale is 100
    index = index + 1;
    const color = props.name;
    const [backgroundColor, setBackgroundColor] = useState("");

    const elementRef = useRef(null);
    useEffect(() => {
      const computedStyles = window.getComputedStyle(elementRef.current);
      const color = computedStyles.getPropertyValue("background-color");
      //console.log(backgroundColor);
      setBackgroundColor(rgbToHex(color));
    }, []);

    // define when we need styles, like rounded borders (top and bottom)
    var styles;
    if (index == 1 || index == 6) {
      styles = "rounded-top";
    } else if (index == 5) {
      styles = "rounded my-1";
    } else if (index == 9 || index == 4) {
      styles = "rounded-bottom";
    }
    return (
      <div key={index}>
        <div
          ref={elementRef}
          className={
            "d-flex justify-content-between " +
            styles +
            " px-3 " +
            " bg-" +
            color +
            "-" +
            index +
            "00"
          }
          style={{
            height: "44px",
            lineHeight: "44px",
          }}
        >
          {color}-{index}00
          <div>{backgroundColor}</div>
        </div>
      </div>
    );
  });

const ColorUsability = (props) => {
  // Component that displays background color for white text (AAA contrast)
  const bg_color = props.contrast;
  return (
    <>
      <div
        className={"d-flex rounded justify-content-between px-3"}
        style={{
          height: "44px",
          lineHeight: "44px",
          backgroundColor: bg_color,
        }}
      >
        {bg_color}
      </div>
    </>
  );
};

function rgbToHex(rgb) {
  // Extract the three RGB values
  const [r, g, b] = rgb
    .replace(/^(rgb|rgba)\(/, "")
    .replace(/\)$/, "")
    .replace(/\s/g, "")
    .split(",")
    .map(Number);

  // Convert the RGB values to hex codes
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Return the concatenated hex code
  return `#${hexR}${hexG}${hexB}`;
}
