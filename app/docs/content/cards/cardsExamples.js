import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const CardsExamplesPage = () => {
  return (
    <>
      <Container
        title="Cards examples"
        desc="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
      >
        <SubContainer>
          <div className="row gy-2 mb-5">
            <div className="col-xs-12 col-sm-6">
              <div className="card">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="card">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image cap"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-2 mb-5">
            <div className="col-xs-12 col-sm-6">
              {" "}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle fw-normal fs-7 mb-2 text-muted">
                    This is a card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="card">
                <div className="card-header fs-7 fw-bold">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text text-light">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-header fs-7 fw-bold">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p className="mb-4">
                  A well-known quote, contained in a blockquote element.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="card text-center mb-0">
            <div className="card-header fs-7 fw-bold">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-light fs-7">2 days ago</div>
          </div>
        </SubContainer>

        <h4>Horizontal cards</h4>
        <SubContainer>
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <svg
                  className="bd-placeholder-img img-fluid rounded-start"
                  width="100%"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                </svg>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-light">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-light fs-7">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default CardsExamplesPage;
