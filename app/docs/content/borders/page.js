import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const BordersPage = () => {
  return (
    <>
      <SectionHeader name="Borders" icon="book" />

      <Container>
        <h5>Additive</h5>
        <div className="mb-5" style={{ boxSizing: "border-box" }}>
          <span
            className="border bg-light me-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border-top bg-light me-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border-end bg-light me-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border-bottom bg-light me-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border-start bg-light me-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
        </div>

        <h5>Substractive</h5>
        <div className="mb-5" style={{ boxSizing: "border-box" }}>
          <span
            className="border bg-light me-2 border-0"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-top-0"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-end-0"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-bottom-0"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-start-0"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
        </div>

        <h5>Color</h5>
        <div className="mb-5" style={{ boxSizing: "border-box" }}>
          <span
            className="border bg-light me-2 border-primary"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-secondary"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-success"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-danger"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-warning"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-info"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-light"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-dark"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-white"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
        </div>
      </Container>
      <Container>
        <div className="mb-4">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control border-success"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger">
          Dangerous heading
        </div>

        <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-5">
          Changing border color and width
        </div>

        <h5>Border opacity</h5>
        <div className="border border-success p-2 mb-2">
          This is default success border
        </div>
        <div className="border border-success p-2 mb-2 border-opacity-75">
          This is 75% opacity success border
        </div>
        <div className="border border-success p-2 mb-2 border-opacity-50">
          This is 50% opacity success border
        </div>
        <div className="border border-success p-2 mb-2 border-opacity-25">
          This is 25% opacity success border
        </div>
        <div className="border border-success p-2 border-opacity-10 mb-5">
          This is 10% opacity success border
        </div>

        <h5>Border width</h5>
        <div className="mb-5" style={{ boxSizing: "border-box" }}>
          <span
            className="border bg-light me-2 border-1"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-2"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-3"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-4"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
          <span
            className="border bg-light me-2 border-5"
            style={{ display: "inline-block", width: "5rem", height: "5rem" }}
          ></span>
        </div>
      </Container>
      <Container>
        <h5>Radius</h5>
        <div className="mb-5">
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
        </div>

        <h5>Sizes</h5>
        <div className="bd-example bd-example-rounded-utils">
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
        </div>
      </Container>
    </>
  );
};

export default BordersPage;
