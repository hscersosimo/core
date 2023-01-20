import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const ColorPage = () => {
  return (
    <>
      <SectionHeader name="Color" icon="book" />

      <Container>
        <div className="text-bg-primary p-3">
          Primary with contrasting color
        </div>
        <div className="text-bg-secondary p-3">
          Secondary with contrasting color
        </div>
        <div className="text-bg-success p-3">
          Success with contrasting color
        </div>
        <div className="text-bg-danger p-3">Danger with contrasting color</div>
        <div className="text-bg-warning p-3">
          Warning with contrasting color
        </div>
        <div className="text-bg-info p-3">Info with contrasting color</div>
        <div className="text-bg-light p-3">Light with contrasting color</div>
        <div className="text-bg-dark p-3">Dark with contrasting color</div>

        <div className="mt-3">
          <span className="badge text-bg-primary me-2">Primary</span>
          <span className="badge text-bg-info">Info</span>
        </div>
        <div className="mt-3">
          <div
            className="card text-bg-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div className="p-3 mb-2 bg-info text-dark">.bg-info</div>
        <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div className="p-3 mb-2 bg-body text-dark">.bg-body</div>
        <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
        <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
      </Container>
      <Container>
        <div className="p-3 mb-2 bg-primary bg-gradient text-white">
          .bg-primary.bg-gradient
        </div>
        <div className="p-3 mb-2 bg-secondary bg-gradient text-white">
          .bg-secondary
        </div>
        <div className="p-3 mb-2 bg-success bg-gradient text-white">
          .bg-success
        </div>
        <div className="p-3 mb-2 bg-danger bg-gradient text-white">
          .bg-danger
        </div>
        <div className="p-3 mb-2 bg-warning bg-gradient text-dark">
          .bg-warning
        </div>
        <div className="p-3 mb-2 bg-info bg-gradient text-dark">.bg-info</div>
        <div className="p-3 mb-2 bg-light bg-gradient text-dark">.bg-light</div>
        <div className="p-3 mb-2 bg-dark bg-gradient text-white">.bg-dark</div>
        <div className="p-3 mb-2 bg-body bg-gradient text-dark">.bg-body</div>
        <div className="p-3 mb-2 bg-white bg-gradient text-dark">.bg-white</div>
        <div className="p-3 mb-2 bg-transparent bg-gradient text-dark">
          .bg-transparent
        </div>
      </Container>
      <Container>
        <h5>Opacity</h5>
        <div className="bg-success p-2 text-white">
          This is default success background
        </div>
        <div className="bg-success p-2 text-white bg-opacity-75">
          This is 75% opacity success background
        </div>
        <div className="bg-success p-2 text-dark bg-opacity-50">
          This is 50% opacity success background
        </div>
        <div className="bg-success p-2 text-dark bg-opacity-25">
          This is 25% opacity success background
        </div>
        <div className="bg-success p-2 text-dark bg-opacity-10">
          This is 10% opacity success background
        </div>
      </Container>
    </>
  );
};

export default ColorPage;
