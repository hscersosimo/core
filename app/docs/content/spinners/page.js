import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

const SpinnersPage = () => {
  return (
    <>
      <SectionHeader name="Spinners" icon="spinner" />
      <Container>
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </Container>
      <Container>
        <h5 className="mt-5">Colors</h5>
        <div className="spinner-border text-primary mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-secondary mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-success mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-danger mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-warning mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-info mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-light mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-dark mx-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="mt-5">Size</h5>
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="mt-5">Buttons</h5>
        <button className="btn btn-primary me-2" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </button>
        <button className="btn btn-primary mx-2" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </Container>
    </>
  );
};

export default SpinnersPage;
