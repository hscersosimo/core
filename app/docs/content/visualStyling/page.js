import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";

const VisualStylingPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette();
  const arrayLoop = [...Array(6)];

  return (
    <>
      <Container
        title="Visual styling classes"
        description="This module provides an overview of the Visual Styling Classes, which are used to quickly and easily apply various visual styles to elements, such as shadows and borders."
      >
        <h3>Shadows</h3>
        <SubContainer padding="p-3">
          <div className="shadow-none p-3 mb-3 bg-white rounded">No shadow</div>
          <div className="shadow-sm p-3 mb-3 bg-white rounded">
            Small shadow
          </div>
          <div className="shadow p-3 mb-3 bg-white rounded">Regular shadow</div>
          <div className="shadow-lg p-3 bg-white rounded">Larger shadow</div>
        </SubContainer>
        <h3>Borders</h3>
        <p>
          Use border utilities to add or remove an element’s borders. Choose
          from all borders or one at a time.
        </p>
        <h4>Additive</h4>
        <SubContainer padding="p-3">
          <div className="text-center" style={{ boxSizing: "border-box" }}>
            <span
              className="border bg-white me-2 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border-top bg-white me-2 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border-end bg-white me-2 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border-bottom bg-white me-2 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border-start bg-white me-2 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
          </div>
        </SubContainer>
        <h4>Substractive</h4>
        <SubContainer padding="p-3">
          <div className="text-center" style={{ boxSizing: "border-box" }}>
            <span
              className="border bg-white me-2 border-0 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border bg-white me-2 border-top-0 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border bg-white me-2 border-end-0 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border bg-white me-2 border-bottom-0 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
            <span
              className="border bg-white me-2 border-start-0 border-5"
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
              }}
            ></span>
          </div>
        </SubContainer>
        <h4>Color</h4>
        <div className="text-center mb-5" style={{ boxSizing: "border-box" }}>
          {colorPaletteArray.map((color, i) => (
            <span
              key={i}
              className={
                "border rounded me-2 border-" + color.class + " border-5"
              }
              style={{ display: "inline-block", width: "5rem", height: "5rem" }}
            ></span>
          ))}
        </div>
        <h4>Border width</h4>
        <SubContainer padding="p-3">
          <div className="text-center" style={{ boxSizing: "border-box" }}>
            {arrayLoop.map((_, i) => (
              <span
                key={i}
                className={"border bg-white me-2 border-" + i}
                style={{
                  display: "inline-block",
                  width: "5rem",
                  height: "5rem",
                }}
              ></span>
            ))}
          </div>
        </SubContainer>
        <h4>Border opacity</h4>
        <SubContainer padding="p-3">
          <div className="border border-success text-bg-white p-2 mb-2">
            This is default success border
          </div>
          <div className="border border-success text-bg-white p-2 mb-2 border-opacity-75">
            This is 75% opacity success border
          </div>
          <div className="border border-success text-bg-white p-2 mb-2 border-opacity-50">
            This is 50% opacity success border
          </div>
          <div className="border border-success text-bg-white p-2 mb-2 border-opacity-25">
            This is 25% opacity success border
          </div>
          <div className="border border-success text-bg-white p-2 border-opacity-10">
            This is 10% opacity success border
          </div>
        </SubContainer>

        <h4>Border radius</h4>
        <p>Add classes to an element to easily round its corners.</p>
        <SubContainer padding="p-3">
          <svg
            className="bd-placeholder-img rounded me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-top me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example top rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example top rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-end me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example right rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example right rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-bottom me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example bottom rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example bottom rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-start me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example left rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example left rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-circle me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Completely round image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Completely round image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-pill me-2"
            width="150"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Rounded pill image: 150x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Rounded pill image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
        </SubContainer>

        <h4>Border sizes</h4>
        <p>
          Use the scaling classes for larger or smaller rounded corners. Sizes
          range from 0 to 3, and can be configured by modifying the utilities
          API.
        </p>
        <SubContainer padding="p-3">
          <svg
            className="bd-placeholder-img rounded-0 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example non-rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example non-rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-1 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example small rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example small rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-2 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example default rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example default rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-3 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example large rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example large rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-4 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example larger rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example larger rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <svg
            className="bd-placeholder-img rounded-5 me-2"
            width="75"
            height="75"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Example extra large rounded image: 75x75"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Example extra large rounded image</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
        </SubContainer>

        <h4>Border examples</h4>
        <SubContainer padding="p-3" margin="mb-0">
          <div className="rounded bg-white p-5 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control border border-tertiary border-2 bg-purple-100"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="rounded bg-white p-5">
            <div className="h4 pb-2 mb-4 text-info border-bottom border-info">
              Info heading
            </div>
            <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
              Changing border color and width
            </div>
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default VisualStylingPage;
