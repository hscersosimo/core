import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const LinksPage = () => {
  return (
    <>
      <SectionHeader name="Links" icon="book" />

      <Container>
        <div className="mb-5">
          <a href="#" className="link-primary">
            Primary link
          </a>
          &nbsp;
          <a href="#" className="link-secondary">
            Secondary link
          </a>
          &nbsp;
          <a href="#" className="link-success">
            Success link
          </a>
          &nbsp;
          <a href="#" className="link-danger">
            Danger link
          </a>
          &nbsp;
          <a href="#" className="link-warning">
            Warning link
          </a>
          &nbsp;
          <a href="#" className="link-info">
            Info link
          </a>
          &nbsp;
          <a href="#" className="link-light">
            Light link
          </a>
          &nbsp;
          <a href="#" className="link-dark">
            Dark link
          </a>
        </div>
      </Container>

      <Container>
        <h5>Stretched links</h5>
        <p>
          Check the{" "}
          <a href="https://getbootstrap.com/docs/5.2/helpers/stretched-link/">
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>
        <div className="card mb-5" style={{ width: "18rem" }}>
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Card image cap"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Card image cap</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>

          <div className="card-body">
            <h5 className="card-title">Card with stretched link</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary stretched-link">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="border p-4">
          <div className="d-flex position-relative">
            <svg
              className="bd-placeholder-img flex-shrink-0 me-3"
              width="144"
              height="144"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Generic placeholder image"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Generic placeholder image</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>

            <div>
              <h5 className="mt-0">Custom component with stretched link</h5>
              <p>
                This is some placeholder content for the custom component. It is
                intended to mimic what some real-world content would look like,
                and we're using it here to give the component a bit of body and
                size.
              </p>
              <a href="#" className="stretched-link">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LinksPage;
