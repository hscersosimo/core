const AlertsPage = () => {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        A simple primary alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>

      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
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
    </>
  );
};

export default AlertsPage;
