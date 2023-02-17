import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const ListGroupExamplesPage = () => {
  return (
    <>
      <Container title="Examples">
        <SubContainer>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </SubContainer>

        <SubContainer>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A second list item
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A third list item
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          </ul>
        </SubContainer>

        <SubContainer margin="mb-0">
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </a>
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default ListGroupExamplesPage;
