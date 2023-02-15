import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";

const BadgesPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("all");
  return (
    <>
      <SectionHeader name="Badges" />
      <Container
        title="Badges"
        desc="Badges are small visual elements that display information, such as status, category, or count, and are commonly used to draw the user's attention to specific content. They provide a quick and easy way to communicate important information without taking up too much space."
      >
        <SubContainer>
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
        </SubContainer>

        <h4>Background colors</h4>
        <div className="border rounded text-center p-3 mb-5">
          {colorPaletteArray.map((color, i) => (
            <span
              key={i}
              className={"badge text-bg-" + color.class + " me-2 mb-2"}
            >
              {color.desc}
            </span>
          ))}
        </div>

        <h4>Pill badges </h4>
        <p>
          Use the <code>.rounded-pill</code> utility class to make badges more
          rounded with a larger <code>border-radius</code>.
        </p>
        <div className="border rounded text-center p-3 mb-5">
          {colorPaletteArray.map((color, i) => (
            <span
              key={i}
              className={
                "badge  rounded-pill text-bg-" + color.class + " me-2 mb-2"
              }
            >
              {color.desc}
            </span>
          ))}
        </div>

        <h4>Badge examples</h4>
        <SubContainer>
          <button type="button" className="btn btn-primary me-3">
            Notifications <span className="badge text-bg-white ms-1">4</span>
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
        </SubContainer>
      </Container>
    </>
  );
};

export default BadgesPage;
