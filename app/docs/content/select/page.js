import Container from "../_ui/Container";
import SectionHeader from "../_ui/SectionHeader";
const Select = () => {
  return (
    <>
      <SectionHeader name="Select" icon="list-dropdown" />

      <Container>
        <h5>Select</h5>
        <div className="mb-5">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <h5>Sizing</h5>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <p>
            The <code>multiple</code> and <code> size</code> attributes are also
            supported:
          </p>
          <select
            className="form-select"
            size="3"
            aria-label="size 3 select example"
          >
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </Container>
      <Container>
        <h5>Disabled</h5>
        <select
          className="form-select"
          aria-label="Disabled select example"
          disabled
        >
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Container>
    </>
  );
};

export default Select;
