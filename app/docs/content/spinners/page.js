import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const SpinnersPage = () => {
  return (
    <>
      <SectionHeader name="Spinners" />
      <Container
        title="Spinners & loading animations"
        desc="Spinners are a type of user interface component used to indicate that a process or task is currently in progress. They provide visual feedback to the user and let them know that the system is working on their request."
      >
        <SubContainer>
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </SubContainer>

        <h4>Colors</h4>
        <SubContainer>
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
        </SubContainer>

        <h4>Size</h4>
        <SubContainer>
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </SubContainer>

        <h4>Buttons</h4>
        <SubContainer>
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
        </SubContainer>
      </Container>
    </>
  );
};

export default SpinnersPage;
