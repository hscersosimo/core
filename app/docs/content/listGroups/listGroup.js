import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const ListGroupExamplesPage = () => {
  return (
    <>
      <Container
        title="List groups"
        desc="List groups are a user interface component used to display a collection of items, such as links or text, in a compact and organized way. They provide a way to present information or actions in a structured format that is easy for users to scan and interact with. "
      >
        <SubContainer>
          <div className="card">
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-footer">Card footer</div>
          </div>
        </SubContainer>
        <h4>Active/Disabled items</h4>
        <SubContainer>
          <ul className="list-group">
            <li className="list-group-item active">An active item</li>
            <li className="list-group-item disabled" aria-disabled="true">
              A disabled item
            </li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </SubContainer>

        <h4>Links</h4>
        <SubContainer>
          <div className="list-group ">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              The current link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              A second link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              A third link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              A fourth link item
            </a>
            <a className="list-group-item list-group-item-action disabled">
              A disabled link item
            </a>
          </div>
        </SubContainer>

        <h4>Flush</h4>
        <p>
          Add <code>.list-group-flush</code> to remove some borders and rounded
          corners to render list group items edge-to-edge in a parent container
          (e.g., cards).
        </p>
        <SubContainer margin="mb-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </SubContainer>
      </Container>
    </>
  );
};

export default ListGroupExamplesPage;
