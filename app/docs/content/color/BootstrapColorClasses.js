import Container from "../_ui/Container";

const BootstrapColorClasses = () => {
  return (
    <>
      <Container
        title="Bootstrap Colors"
        description="Easily add color and visual interest to your website with Bootstrap's color classes. With a wide range of pre-defined colors and flexible options, you can quickly and easily create a polished and visually appealing design."
      >
        <h3>Backgrounds</h3>
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
          <div className="text-bg-primary p-3 mb-2">
            Primary with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-primary</span>
              <span>.text-bg-primary</span>
            </div>
          </div>
          <div className="text-bg-secondary p-3 mb-2">
            Secondary with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-secondary</span>
              <span>.text-bg-secondary</span>
            </div>
          </div>
          <div className="text-bg-success p-3 mb-2">
            Success with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-success</span>
              <span>.text-bg-success</span>
            </div>
          </div>
          <div className="text-bg-danger p-3 mb-2">
            Danger with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-danger</span>
              <span>.text-bg-danger</span>
            </div>
          </div>
          <div className="text-bg-warning p-3 mb-2">
            Warning with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-warning</span>
              <span>.text-bg-warning</span>
            </div>
          </div>
          <div className="text-bg-info p-3 mb-2">
            Info with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-info</span>
              <span>.text-bg-info</span>
            </div>
          </div>
          <div className="text-bg-light p-3 mb-2">
            Light with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-light</span>
              <span>.text-bg-light</span>
            </div>
          </div>
          <div className="text-bg-white p-3 mb-2 border">
            White with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-white</span>
              <span>.text-bg-white</span>
            </div>
          </div>
          <div className="text-bg-dark p-3 mb-2">
            Dark with contrasting color. <strong>Bold text</strong> &{" "}
            <a href="#">Anchor</a> styles.
            <div className="fs-7">
              <span className="me-3">.bg-dark</span>
              <span>.text-bg-dark</span>
            </div>
          </div>
          <div className="text-bg-transparent p-3 mb-2 border">
            <div>
              Transparent with contrasting color. <strong>Bold text</strong> &{" "}
              <a href="#">Anchor</a> styles.
            </div>
            <div className="fs-7">
              <span className="me-3">.bg-transparent</span>
              <span>.text-bg-transparent</span>
            </div>
          </div>
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
        <div className="mb-5">
          <div className="bg-indigo-100 p-3 mb-2 text-black">
            Indigo-100. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-100</span>
            </div>
          </div>
          <div className="bg-indigo-200 p-3 mb-2 text-black">
            Indigo-200. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-200</span>
            </div>
          </div>
          <div className="bg-indigo-300 p-3 mb-2 text-black">
            Indigo-300. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-300</span>
            </div>
          </div>
          <div className="bg-indigo-400 p-3 mb-2 text-black">
            Indigo-400. <strong>Bold text</strong> &{" "}
            <a href="#" className="text-black">
              Anchor
            </a>{" "}
            styles.
            <div className="fs-7">
              <span className="me-3">.bg-indigo-400</span>
            </div>
          </div>
        </div>

        <h3>Opacity</h3>
        <p>
          Use these utility classes to change the opacity of a container: .
          <code>bg-opacity-10</code>, <code>.bg-opacity-25</code>,{" "}
          <code>.bg-opacity-50</code>, <code>.bg-opacity-75</code>,{" "}
          <code>.bg-opacity-100</code>.
        </p>
        <div className="mb-5">
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
        </div>

        <h3>Gradients</h3>
        <p>
          Add depth and dimension with our gradient options. Our gradients
          provide a range of visual effects to enhance your design.
        </p>
        <div className="p-3 mb-2 bg-primary bg-gradient text-white">
          .bg-primary .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-secondary bg-gradient text-white">
          .bg-secondary .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-success bg-gradient text-white">
          .bg-success .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-danger bg-gradient text-white">
          .bg-danger .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-warning bg-gradient text-white">
          .bg-warning .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-info bg-gradient text-white">
          .bg-info .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-light bg-gradient text-black">
          .bg-light .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-dark bg-gradient text-white">
          .bg-dark .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-body bg-gradient text-dark">
          .bg-body .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-white bg-gradient text-dark">
          .bg-white .bg-gradient
        </div>
        <div className="p-3 mb-2 bg-transparent bg-gradient text-dark">
          .bg-transparent .bg-gradient
        </div>
      </Container>
    </>
  );
};

export default BootstrapColorClasses;
