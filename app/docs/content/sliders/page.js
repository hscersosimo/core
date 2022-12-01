import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const Sliders = () => {
  return (
    <>
      <SectionHeader name="Sliders" icon="square-sliders" />
      <Container>
        <h5>Slider</h5>
        <div className="mb-3">
          <label htmlFor="customRange1" className="form-label">
            Example range
          </label>
          <input type="range" className="form-range" id="customRange1" />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledRange" className="form-label">
            Disabled range
          </label>
          <input
            type="range"
            className="form-range"
            id="disabledRange"
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customRange2" className="form-label">
            Min and Max
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            id="customRange2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
            Steps
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          />
        </div>
      </Container>
    </>
  );
};

export default Sliders;
