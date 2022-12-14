import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const Badge = () => {
  return (
    <>
      <SectionHeader name="Badges" icon="badge" />
      <Container>
        <h1>
          Example heading <span className="badge bg-secondary">New</span>
        </h1>
        <h2>
          Example heading <span className="badge bg-secondary">New</span>
        </h2>
        <h3>
          Example heading <span className="badge bg-secondary">New</span>
        </h3>
        <h4>
          Example heading <span className="badge bg-secondary">New</span>
        </h4>
        <h5>
          Example heading <span className="badge bg-secondary">New</span>
        </h5>
        <h6>
          Example heading <span className="badge bg-secondary">New</span>
        </h6>
      </Container>
      <Container>
        <button type="button" className="btn btn-primary me-3">
          Notifications <span className="badge bg-secondary">4</span>
        </button>
        <button
          type="button"
          className="btn btn-primary position-relative me-3"
        >
          Profile
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </button>
        <button type="button" className="btn btn-primary position-relative">
          Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Container>
      <Container>
        <div className="mb-3">
          <span className="badge bg-primary">Primary</span>&nbsp;
          <span className="badge bg-secondary">Secondary</span>&nbsp;
          <span className="badge bg-success">Success</span>&nbsp;
          <span className="badge bg-danger">Danger</span>&nbsp;
          <span className="badge bg-warning text-dark">Warning</span>&nbsp;
          <span className="badge bg-info text-dark">Info</span>&nbsp;
          <span className="badge bg-light text-dark">Light</span>&nbsp;
          <span className="badge bg-dark">Dark</span>
        </div>
        <div>
          <span className="badge rounded-pill bg-primary">Primary</span>&nbsp;
          <span className="badge rounded-pill bg-secondary">Secondary</span>
          &nbsp;
          <span className="badge rounded-pill bg-success">Success</span>&nbsp;
          <span className="badge rounded-pill bg-danger">Danger</span>&nbsp;
          <span className="badge rounded-pill bg-warning text-dark">
            Warning
          </span>
          &nbsp;
          <span className="badge rounded-pill bg-info text-dark">Info</span>
          &nbsp;
          <span className="badge rounded-pill bg-light text-dark">Light</span>
          &nbsp;
          <span className="badge rounded-pill bg-dark">Dark</span>
        </div>
      </Container>
    </>
  );
};

export default Badge;
