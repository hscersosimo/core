import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const ListGroupAlignmentPage = () => {
  return (
    <>
      <Container title="Alignment">
        <p>
          Add <code>.list-group-horizontal</code> to change the layout of list
          group items from vertical to horizontal across all breakpoints.
          Alternatively, choose a responsive variant{" "}
          <code>.list-group-horizontal</code>- sm | md | lg | xl | xxl to make a
          list group horizontal starting at that breakpoint’s
          <code>min-width</code>. Currently horizontal list groups cannot be
          combined with flush list groups.
          <br />
          <strong>ProTip</strong>: Want equal-width list group items when
          horizontal? Add <code>.flex-fill</code> to each list group item.
        </p>
        <SubContainer margin="mb-0">
          <ul className="list-group list-group-horizontal mb-3">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-sm mb-3">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-md mb-3">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-lg mb-3">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-xl mb-3">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-xxl">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </SubContainer>
      </Container>
    </>
  );
};

export default ListGroupAlignmentPage;
