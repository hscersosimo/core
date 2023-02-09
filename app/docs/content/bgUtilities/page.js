import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";
import Link from "next/link";

const BgUtilitiesPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("full");
  return (
    <>
      <Container
        title="Background utility classes"
        description="Background utility classes are used to quickly and easily apply background colors to elements. These classes provide developers with a convenient way to highlight different elements on the page without having to manually apply a style to each element."
      >
        <h3>Background</h3>
        <p>
          Use{" "}
          <code>
            .bg-<em>color</em>
          </code>{" "}
          to change the background color of an element. You can also use{" "}
          <code>
            .text-bg-<em>color</em>
          </code>{" "}
          to automatically modify the text color that will be applied on top of
          the background (for example, white text on top of a black background).
        </p>
        <div className="mb-5">
          {colorPaletteArray.map((color, i) => (
            <div
              key={i}
              className={"border rounded text-bg-" + color.class + " p-3 mb-2"}
            >
              <div>
                <span className="text-capitalize">{color.class}</span> with
                contrasting color. <strong>Bold text</strong> &{" "}
                <Link className={"link-" + color.link} href="#">
                  Anchor
                </Link>{" "}
                styles.
              </div>
              <div className="fs-7">
                <span className="me-3">.bg-{color.class}</span>
                <span>.text-bg-{color.class}</span>
              </div>
            </div>
          ))}
        </div>

        <h3>Background shades</h3>
        <p>
          You can call any of the colors presented in the color palette, by
          appliying a class following this format:{" "}
          <code>
            .bg-<em>color</em>-<em>number</em>
          </code>
          , for example: <code>.bg-secondary-200</code> or{" "}
          <code>.bg-orange-800</code>
        </p>
        <SubContainer padding="p-3">
          <div className="rounded bg-indigo-100 p-3 mb-2 text-black">
            Indigo-100. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-100</span>
            </div>
          </div>
          <div className="rounded bg-indigo-200 p-3 mb-2 text-black">
            Indigo-200. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-200</span>
            </div>
          </div>
          <div className="rounded bg-indigo-300 p-3 mb-2 text-black">
            Indigo-300. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-300</span>
            </div>
          </div>
          <div className="rounded bg-indigo-400 p-3 mb-2 text-black">
            Indigo-400. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-400</span>
            </div>
          </div>
        </SubContainer>

        <h3>Opacity</h3>
        <p>
          Use these utility classes to change the opacity of a container: .
          <code>bg-opacity-10</code>, <code>.bg-opacity-25</code>,{" "}
          <code>.bg-opacity-50</code>, <code>.bg-opacity-75</code>,{" "}
          <code>.bg-opacity-100</code>.
        </p>
        <SubContainer padding="p-3">
          <div className="bg-success p-3 text-white">
            This is default success background
          </div>
          <div className="bg-success p-3 text-white bg-opacity-75">
            This is 75% opacity success background
          </div>
          <div className="bg-success p-3 text-black bg-opacity-50">
            This is 50% opacity success background
          </div>
          <div className="bg-success p-3 text-black bg-opacity-25">
            This is 25% opacity success background
          </div>
          <div className="bg-success p-3 text-black bg-opacity-10">
            This is 10% opacity success background
          </div>
        </SubContainer>

        <h3>Gradients</h3>
        <p>
          Add depth and dimension with our gradient options. Our gradients
          provide a range of visual effects to enhance your design.
        </p>

        <SubContainer padding="p-3">
          {colorPaletteArray.map((color, i) => (
            <div
              key={i}
              className={
                "border rounded p-3 mb-2 bg-" +
                color.class +
                " bg-gradient text-white"
              }
            >
              .bg-{color.class} .bg-gradient
            </div>
          ))}
        </SubContainer>
      </Container>
    </>
  );
};

export default BgUtilitiesPage;
