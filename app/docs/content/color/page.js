"use client";
import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import { useState } from "react";
import ColorScale from "./ColorScale";
import colorPalette from "../../../lib/colorPalette";

const ColorPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette();

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
        description="Bring consistency and beauty to your design with our carefully chosen color choices."
      >
        <div className="d-flex justify-content-start flex-wrap">
          {colorPaletteArray.map((color) => {
            var colorValue = "500";
            // Changing colorValue bg indicator for gray
            if (color.name == "gray") {
              colorValue = "600";
            }
            return (
              <div key={color} className="p-2 mb-3 text-center">
                <div
                  className={"bg-" + color.name + "-" + colorValue + " rounded"}
                  style={{ height: "100px", width: "100px" }}
                ></div>
                <div>
                  <div className="fw-bold text-capitalize mt-2">
                    {color.name}
                  </div>
                  <div className="fs-7 text-dark">{color.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <Container
        title="Color scales"
        description="Our color scales provide a range of shades for each color, allowing you to create a cohesive and visually pleasing design. Click on a color to copy the HEX code to your clipboard."
      >
        <div className="row">
          {colorPaletteArray.map((color) => (
            <div key={color.name} className="col-sm-12 col-md-6 col-lg-4 my-4">
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

        <div className="d-flex">
          <div className="vr me-3"></div>
          <div>
            <div className="mb-3">
              AA Text values ensure that the contrast ratio between foreground
              and background colors is at least 4.5:1. In most cases, the
              color-500 class is AA compliant (except for the Gray color, where
              the gray-600 class should be used instead). These contrast ratios
              help to ensure that the text is legible for people with low vision
              or color blindness, and that the website is accessible to all
              users. You can use a tool like{" "}
              <a target="_blank" href="https://contrast-ratio.com/">
                this one
              </a>{" "}
              to check contrast ratio values.
            </div>
            <div className="fs-7">
              WCAG 2.1 contrast ratios are standards set by the{" "}
              <a
                target="_blank"
                href="https://www.w3.org/TR/WCAG/#contrast-minimum"
              >
                World Wide Web Consortium (W3C)
              </a>{" "}
              to ensure that web content is accessible to people with visual
              impairments. The contrast ratio measures the difference in
              luminosity between the foreground and background of an element on
              a website, and the ratio must be at least 4.5:1 for regular text
              and 3:1 for large text. The goal of these contrast ratios is to
              ensure that the text is legible for people with low vision or
              color blindness. The higher the contrast ratio, the easier it is
              for people with visual impairments to read the text.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ColorPage;
