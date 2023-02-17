import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const ExpandCollapse = () => {
  return (
    <>
      <SectionHeader name="Expand/Collapse" />
      <Container
        title="Expand/Collapse"
        desc="Expand/Collapse are a user interface component used to hide and reveal additional information or content, providing users with control over what they want to see. They provide a way to present more information in a compact format that is easy for users to scan and interact with."
      >
        <SubContainer>
          <a
            className="btn btn-primary me-2"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-bs-target
          </button>

          <div className="collapse" id="collapseExample">
            <div className="card card-body mt-2">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </SubContainer>

        <h4>Multiple targets</h4>
        <SubContainer>
          <a
            className="btn btn-primary me-2 mb-2"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Toggle first element
          </a>
          <button
            className="btn btn-primary me-2 mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Toggle second element
          </button>
          <button
            className="btn btn-tertiary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            Toggle both elements
          </button>
          <div className="row mt-2">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  Some placeholder content for the first collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body">
                  Some placeholder content for the second collapse component of
                  this multi-collapse example. This panel is hidden by default
                  but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </SubContainer>

        <h4 className="mt-5">Accessibility</h4>
        <div>
          <p>
            Be sure to add <code>aria-expanded</code> to the control element.
            This attribute explicitly conveys the current state of the
            collapsible element tied to the control to screen readers and
            similar assistive technologies.
          </p>
          <p>
            If the collapsible element is closed by default, the attribute on
            the control element should have a value of{" "}
            <code>aria-expanded="false"</code>. If you’ve set the collapsible
            element to be open by default using the
            <code>show</code> class, set <code>aria-expanded="true"</code> on
            the control instead. The plugin will automatically toggle this
            attribute on the control based on whether or not the collapsible
            element has been opened or closed (via JavaScript, or because the
            user triggered another control element also tied to the same
            collapsible element). If the control element’s HTML element is not a
            button (e.g., an <code>a</code> or <code>div</code>), the attribute{" "}
            <code>role="button"</code> should be added to the element.
          </p>
          <p>
            If your control element is targeting a single collapsible element –
            i.e. the <code>data-bs-target</code> attribute is pointing to an{" "}
            <code>id</code> selector – you should add the{" "}
            <code>aria-controls</code> attribute to the control element,
            containing the <code>id</code> of the collapsible element. Modern
            screen readers and similar assistive technologies make use of this
            attribute to provide users with additional shortcuts to navigate
            directly to the collapsible element itself.
          </p>

          <p>
            Note that Bootstrap’s current implementation does not cover the
            various optional keyboard interactions described in the{" "}
            <a
              target="_blank"
              href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion"
            >
              WAI-ARIA Authoring Practices 1.1 accordion pattern
            </a>{" "}
            - you will need to include these yourself with custom JavaScript.
          </p>
        </div>
      </Container>
    </>
  );
};

export default ExpandCollapse;
