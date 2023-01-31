import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

const ProgressBars = () => {
  return (
    <>
      <SectionHeader name="Progress bars" icon="bars-progress" />
      <Container>
        <div className="progress my-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Example with label"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            25%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            50%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            75%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            100%
          </div>
        </div>

        <p className="mt-5">
          Bootstrap provides a handful of{" "}
          <a href="https://getbootstrap.com/docs/5.2/utilities/sizing/">
            utilities for setting width
          </a>
          . Depending on your needs, these may help with quickly configuring
          progress.
        </p>

        <div className="progress">
          <div
            className="progress-bar w-75"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <h5 className="mt-5">Bar height</h5>
        <div className="progress my-2" style={{ height: "5px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Example 1px high"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress" style={{ height: "40px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Example 20px high"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            25%
          </div>
        </div>

        <h5 className="mt-5">Backgrounds</h5>
        <div className="progress my-2">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-label="Success example"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            25%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-label="Info example"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            50%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-label="Warning example"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            75%
          </div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-label="Danger example"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            100%
          </div>
        </div>

        <h5 className="mt-5">Multiple Bars</h5>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Segment one"
            style={{ width: "15%" }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            15%
          </div>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-label="Segment two"
            style={{ width: "30%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            30%
          </div>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-label="Segment three"
            style={{ width: "20%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            20%
          </div>
        </div>

        <h5 className="mt-5">Striped Bars</h5>
        <div className="progress my-2">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-label="Default striped example"
            style={{ width: "10%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            aria-label="Success striped example"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            aria-label="Info striped example"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            aria-label="Warning striped example"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress my-2">
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            aria-label="Danger striped example"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <h5 className="mt-5">Animated Bars</h5>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
      </Container>
    </>
  );
};

export default ProgressBars;
