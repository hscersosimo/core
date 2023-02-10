import Container from "../../../components/Container";
import colorPalette from "../../../lib/colorPalette";
import Link from "next/link";

const AlertsPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("all");
  return (
    <>
      <Container
        title="Alerts"
        desc="Alerts are an essential component of any user interface, serving as a way to communicate important messages and draw the user's attention to specific information. "
      >
        {colorPaletteArray.map((color, i) => (
          <div key={i} className={"alert alert-" + color.class} role="alert">
            A simple {color.class} alert with{" "}
            <Link className="alert-link" href="#">
              an example link
            </Link>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        ))}
      </Container>

      <Container
        title="Alert examples"
        desc="The following examples showcase the various types of alerts available in our design system and how they can be used in different contexts."
      >
        <div className="mb-5">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </div>

          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <i className="fa-solid fa-circle-info"></i> &nbsp;
            <div>An example alert with an icon</div>
          </div>
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            <i className="fa-solid fa-circle-check"></i>&nbsp;
            <div>An example success alert with an icon</div>
          </div>
          <div
            className="alert alert-warning d-flex align-items-center"
            role="alert"
          >
            <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;
            <div>An example warning alert with an icon</div>
          </div>
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <i className="fa-solid fa-circle-xmark"></i>&nbsp;
            <div>An example danger alert with an icon</div>
          </div>
        </div>

        <h3>Dismissing</h3>
        <p>
          Using the alert JavaScript plugin, it’s possible to dismiss any alert
          inline. Here’s how:
        </p>
        <ul>
          <li>
            Be sure you’ve loaded the alert plugin, or the compiled Bootstrap
            JavaScript.
          </li>
          <li>
            Add a <a href="/docs/5.0/components/close-button/">close button</a>{" "}
            and the <code>.alert-dismissible</code> class, which adds extra
            padding to the right of the alert and positions the close button.
          </li>
          <li>
            On the close button, add the <code>data-bs-dismiss="alert"</code>{" "}
            attribute, which triggers the JavaScript functionality. Be sure to
            use the <code>&lt;button&gt;</code> element with it for proper
            behavior across all devices.
          </li>
          <li>
            To animate alerts when dismissing them, be sure to add the{" "}
            <code>.fade</code> and <code>.show</code> classes.
          </li>
        </ul>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </Container>
    </>
  );
};

export default AlertsPage;
