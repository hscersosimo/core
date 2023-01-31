import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";
import Link from "next/link";

const HelperClasses = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("full");
  return (
    <>
      <Container
        title="Helper classes"
        description="The Helper classes section contains a variety of utility classes that can be used to quickly and easily apply various styles to elements, such as borders, shadows, flex, floats, etc."
      >
        <h3>Display utilities</h3>
        <p>
          Display utility classes that apply to all breakpoints, from{" "}
          <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation
          in them. This is because those classes are applied from{" "}
          <code>min-width: 0;</code> and up, and thus are not bound by a media
          query. The remaining breakpoints, however, do include a breakpoint
          abbreviation. As such, the classes are named using the format:
        </p>
        <ul>
          <li>
            <code>
              .d-<i>value</i>
            </code>{" "}
            for <code>xs</code>
          </li>
          <li>
            <code>
              .d-<i>breakpoint</i>-<i>value</i>
            </code>{" "}
            for <code>sm</code>, <code>md</code>, <code>lg</code>,{" "}
            <code>xl</code>, and <code>xxl</code>.
          </li>
        </ul>
        <p>
          Where <em>value</em> is one of:
        </p>
        <ul>
          <li>
            <code>none</code>
          </li>
          <li>
            <code>inline</code>
          </li>
          <li>
            <code>inline-block</code>
          </li>
          <li>
            <code>block</code>
          </li>
          <li>
            <code>grid</code>
          </li>
          <li>
            <code>table</code>
          </li>
          <li>
            <code>table-cell</code>
          </li>
          <li>
            <code>table-row</code>
          </li>
          <li>
            <code>flex</code>
          </li>
          <li>
            <code>inline-flex</code>
          </li>
        </ul>
        <p>Display inline & display block:</p>
        <SubContainer>
          <div className="border-bottom pb-5 mb-5">
            <div className="d-inline p-2 text-bg-primary me-1">d-inline</div>
            <div className="d-inline p-2 text-bg-dark">d-inline</div>
          </div>
          <div>
            <span className="d-block p-2 text-bg-primary">d-block</span>
            <span className="d-block p-2 text-bg-dark">d-block</span>
          </div>
        </SubContainer>

        <h3>Flex</h3>
        <p>
          Apply display utilities to create a flexbox container and transform
          direct children elements into flex items. Flex containers and items
          are able to be modified further with additional flex properties.{" "}
        </p>
        <p>
          Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/flex/"
            target="_blank"
          >
            Bootstrap Docs
          </a>{" "}
          for more details.
        </p>

        <SubContainer padding="p-3">
          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-start</code>
          </div>
          <div className="d-flex justify-content-start mb-3 bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>

          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-end</code>
          </div>
          <div className="d-flex justify-content-end mb-3 bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>

          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-center</code>
          </div>
          <div className="d-flex justify-content-center mb-3 bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>

          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-between</code>
          </div>
          <div className="d-flex justify-content-between mb-3 bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>

          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-around</code>
          </div>
          <div className="d-flex justify-content-around mb-3 bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>

          <div className="fs-7 mb-1 text-center">
            <code>.justify-content-evenly</code>
          </div>
          <div className="d-flex justify-content-evenly bg-white text-white">
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
            <div className="p-2 bg-primary border">Flex item</div>
          </div>
        </SubContainer>

        <h3>Float</h3>
        <p>
          Toggle floats on any element, across any breakpoint, using our
          responsive float utilities. Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/float/"
            target="_blank"
          >
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>
        <SubContainer padding="p-3">
          <div className="float-start text-bg-primary shadow-sm p-2 rounded">
            Float start on all viewport sizes
          </div>
          <br />
          <div className="float-end text-bg-secondary shadow-sm p-2 rounded">
            Float end on all viewport sizes
          </div>
          <br />
          <div className="float-none text-bg-tertiary shadow-sm p-2 rounded">
            Don't float on all viewport sizes
          </div>
        </SubContainer>

        <h3>Position</h3>
        <p>
          Use these shorthand utilities for quickly configuring the position of
          an element. Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/position/"
            target="_blank"
          >
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>
        <SubContainer padding="p-3">
          <div className="position-relative" style={{ height: "200px" }}>
            <div
              className="position-absolute top-0 start-0 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
            <div
              className="position-absolute top-0 end-0 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
            <div
              className="position-absolute top-50 start-50 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
            <div
              className="position-absolute bottom-50 end-50 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
            <div
              className="position-absolute bottom-0 start-0 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
            <div
              className="position-absolute bottom-0 end-0 bg-primary rounded-1"
              style={{ height: "2rem", width: "2rem" }}
            ></div>
          </div>
        </SubContainer>
        <h4>Position examples</h4>
        <div className="p-5">
          <div className="position-relative m-4">
            <div className="progress" style={{ height: "2px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Progress"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <button
              type="button"
              className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
              style={{ width: "2rem", height: "2rem" }}
            >
              1
            </button>
            <button
              type="button"
              className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
              style={{ width: "2rem", height: "2rem" }}
            >
              2
            </button>
            <button
              type="button"
              className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-dark rounded-pill"
              style={{ width: "2rem", height: "2rem" }}
            >
              3
            </button>
          </div>
        </div>

        <SubContainer>
          <button
            type="button"
            className="btn btn-primary position-relative me-4"
          >
            Mails{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-tertiary">
              +99 <span className="visually-hidden">unread messages</span>
            </span>
          </button>

          <button type="button" className="btn btn-dark position-relative me-4">
            Marker{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="position-absolute top-100 start-50 translate-middle mt-1"
              fill="#6e707c"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>

          <button type="button" className="btn btn-primary position-relative">
            Alerts{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </SubContainer>

        <h3>Overflow</h3>
        <SubContainer padding="p-3">
          <div className="d-md-flex">
            <div
              className="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-white"
              style={{ maxWidth: "260px", maxHeight: "100px" }}
            >
              This is an example of using <code>.overflow-auto</code> on an
              element with set width and height dimensions. By design, this
              content will vertically scroll.
            </div>
            <div
              className="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-white"
              style={{ maxWidth: "260px", maxHeight: "100px" }}
            >
              This is an example of using <code>.overflow-hidden</code> on an
              element with set width and height dimensions.
            </div>
            <div
              className="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-white"
              style={{ maxWidth: "260px", maxHeight: "100px" }}
            >
              This is an example of using <code>.overflow-visible</code> on an
              element with set width and height dimensions.
            </div>
            <div
              className="overflow-scroll p-3 bg-white"
              style={{ maxWidth: "260px", maxHeight: "100px" }}
            >
              This is an example of using <code>.overflow-scroll</code> on an
              element with set width and height dimensions.
            </div>
          </div>
        </SubContainer>

        <h3>Sizing</h3>
        <p>
          Includes support for <code>25%</code>, <code>50%</code>,{" "}
          <code>75%</code>, <code>100%</code>, and <code>auto</code> by default.
        </p>
        <SubContainer padding="p-3">
          <div className="mb-3">
            <div className="w-25 p-3 text-bg-primary mb-1">Width 25%</div>
            <div className="w-50 p-3 text-bg-primary mb-1">Width 50%</div>
            <div className="w-75 p-3 text-bg-primary mb-1">Width 75%</div>
            <div className="w-100 p-3 text-bg-primary mb-1">Width 100%</div>
            <div className="w-auto p-3 text-bg-primary">Width auto</div>
          </div>
          <div
            className="border rounded text-center bg-white mb-3"
            style={{ height: "100px" }}
          >
            <div
              className="h-25 d-inline-block text-bg-secondary text-center me-1"
              style={{ width: "120px" }}
            >
              Height 25%
            </div>
            <div
              className="h-50 d-inline-block text-bg-secondary text-center me-1"
              style={{ width: "120px" }}
            >
              Height 50%
            </div>
            <div
              className="h-75 d-inline-block text-bg-secondary text-center me-1"
              style={{ width: "120px" }}
            >
              Height 75%
            </div>
            <div
              className="h-100 d-inline-block text-bg-secondary text-center me-1"
              style={{ width: "120px" }}
            >
              Height 100%
            </div>
            <div
              className="h-auto d-inline-block text-bg-secondary text-center"
              style={{ width: "120px" }}
            >
              Height auto
            </div>
          </div>{" "}
          <p>
            You can also use <code>max-width: 100%;</code> and{" "}
            <code>max-height: 100%;</code> utilities as needed.
          </p>
        </SubContainer>

        <h3>Visibility</h3>
        <p>
          Apply <code>.visible</code> or <code>.invisible</code> as needed.
        </p>
      </Container>
    </>
  );
};

export default HelperClasses;
