import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader";
import SubContainer from "../../../components/SubContainer";
const ModalsPage = () => {
  return (
    <>
      <SectionHeader name="Modals" icon="list-dropdown" />

      <Container
        title="Modals"
        desc="Modals are a type of user interface component used to display content, alerts, or forms on top of the current page, while also blocking out other interactions on the page. They provide a clean and focused way to present information or gather user input, without distracting the user from their current task."
      >
        <SubContainer>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">Modal Body Content</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Launch static backdrop modal
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Modal Body Content - Static Backdrop
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SubContainer>

        <h4 className="mt-5">Scrolling long content</h4>
        <SubContainer>
          <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex="-1"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLongTitle">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body" style={{ minHeight: "1500px" }}>
                  <p>
                    This is some placeholder content to show the scrolling
                    behavior for modals. Instead of repeating the text the
                    modal, we use an inline style set a minimum height, thereby
                    extending the length of the overall modal and demonstrating
                    the overflow scrolling. When content becomes longer than the
                    height of the viewport, scrolling will move the modal as
                    needed.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalLong"
          >
            Launch long content modal
          </button>

          <div
            className="modal fade"
            id="exampleModalScrollable"
            tabIndex="-1"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="exampleModalScrollableTitle"
                  >
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    This is some placeholder content to show the scrolling
                    behavior for modals. We use repeated line breaks to
                    demonstrate how content can exceed minimum inner height,
                    thereby showing inner scrolling. When content becomes longer
                    than the predefined max-height of modal, content will be
                    cropped and scrollable within the modal.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    This content should appear at the bottom after you scroll.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
          >
            Launch demo modal
          </button>
        </SubContainer>

        <h4 className="mt-5">Vertically centered</h4>
        <SubContainer>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalCenterTitle">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>This is a vertically centered modal.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModalCenteredScrollable"
            tabIndex="-1"
            aria-labelledby="exampleModalCenteredScrollableTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="exampleModalCenteredScrollableTitle"
                  >
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    This is some placeholder content to show a vertically
                    centered modal. We've added some extra copy here to show how
                    vertically centering the modal works when combined with
                    scrollable modals. We also use some repeated line breaks to
                    quickly extend the height of the content, thereby triggering
                    the scrolling. When content becomes longer than the
                    predefined max-height of modal, content will be cropped and
                    scrollable within the modal.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>Just like that.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
          >
            Vertically centered modal
          </button>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenteredScrollable"
          >
            Vertically centered scrollable modal
          </button>
        </SubContainer>

        <h4 className="mt-5">Tooltips & Popovers</h4>
        <div
          className="modal fade"
          id="exampleModalPopovers"
          tabIndex="-1"
          aria-labelledby="exampleModalPopoversLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalPopoversLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2 className="fs-5">Popover in a modal</h2>
                <p>
                  This{" "}
                  <a
                    href="#"
                    role="button"
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    data-bs-content="Popover body content is set in this attribute."
                    data-bs-container="#exampleModalPopovers"
                    data-bs-original-title="Popover title"
                  >
                    button
                  </a>{" "}
                  triggers a popover on click.
                </p>
                <hr />
                <h2 className="fs-5">Tooltips in a modal</h2>
                <p>
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-container="#exampleModalPopovers"
                    data-bs-original-title="Tooltip"
                  >
                    This link
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-container="#exampleModalPopovers"
                    data-bs-original-title="Tooltip"
                  >
                    that link
                  </a>{" "}
                  have tooltips on hover.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="alert alert-danger">
          To be reviewed. Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/components/modal/"
            target="_blank"
          >
            Bootstrap Docs
          </a>{" "}
          for more examples.
        </div>
        <SubContainer>
          <button
            type="button"
            className="btn btn-primary my-1 me-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalPopovers"
          >
            Launch demo modal
          </button>
        </SubContainer>
      </Container>
    </>
  );
};

export default ModalsPage;
