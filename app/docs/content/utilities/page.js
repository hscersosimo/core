import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const UtilitiesPage = () => {
  return (
    <>
      <SectionHeader name="Utilities" icon="book" />

      <Container>
        <h5>Display utilities</h5>
        <p>
          Display utility classes that apply to all breakpoints, from{" "}
          <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation
          in them. This is because those classes are applied from{" "}
          <code>min-width: 0;</code> and up, and thus are not bound by a media
          query. The remaining breakpoints, however, do include a breakpoint
          abbreviation. As such, the classes are named using the format:
        </p>
        <ul>
          <li>
            <code>
              .d-<i>value</i>
            </code>{" "}
            for <code>xs</code>
          </li>
          <li>
            <code>
              .d-<i>breakpoint</i>-<i>value</i>
            </code>{" "}
            for <code>sm</code>, <code>md</code>, <code>lg</code>,{" "}
            <code>xl</code>, and <code>xxl</code>.
          </li>
        </ul>
        <p>
          Where <em>value</em> is one of:
        </p>
        <ul>
          <li>
            <code>none</code>
          </li>
          <li>
            <code>inline</code>
          </li>
          <li>
            <code>inline-block</code>
          </li>
          <li>
            <code>block</code>
          </li>
          <li>
            <code>grid</code>
          </li>
          <li>
            <code>table</code>
          </li>
          <li>
            <code>table-cell</code>
          </li>
          <li>
            <code>table-row</code>
          </li>
          <li>
            <code>flex</code>
          </li>
          <li>
            <code>inline-flex</code>
          </li>
        </ul>
        <div className="mt-5">
          <div className="d-inline p-2 text-bg-primary me-1">d-inline</div>
          <div className="d-inline p-2 text-bg-dark">d-inline</div>
        </div>
        <div className="mt-5">
          <span className="d-block p-2 text-bg-primary">d-block</span>
          <span className="d-block p-2 text-bg-dark">d-block</span>
        </div>
      </Container>
      <Container>
        <h5>Flex</h5>
        <p>
          Apply display utilities to create a flexbox container and transform
          direct children elements into flex items. Flex containers and items
          are able to be modified further with additional flex properties.{" "}
        </p>
        <p>
          Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/flex/"
            target="_blank"
          >
            Bootstrap Docs
          </a>{" "}
          for more details.
        </p>
      </Container>
      <Container>
        <h5>Float</h5>
        <p>
          Toggle floats on any element, across any breakpoint, using our
          responsive float utilities.
        </p>
        <p>
          {" "}
          Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/float/"
            target="_blank"
          >
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>

        <h5 className="mt-5">Position</h5>
        <p>
          Use these shorthand utilities for quickly configuring the position of
          an element.
        </p>
        <p>
          {" "}
          Check the{" "}
          <a
            href="https://getbootstrap.com/docs/5.2/utilities/position/"
            target="_blank"
          >
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>
      </Container>
      <Container>
        <h5>Text selection</h5>
        <p>
          Change the way in which the content is selected when the user
          interacts with it.
        </p>
        <p className="border p-3 user-select-all">
          This paragraph will be entirely selected when clicked by the user.
        </p>
        <p className="border p-3 user-select-auto">
          This paragraph has default select behavior.
        </p>
        <p className="border p-3 user-select-none">
          This paragraph will not be selectable when clicked by the user.
        </p>

        <h5 className="mt-5">Pointer events</h5>
        <p>
          Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code>{" "}
          classes to prevent or add element interactions.
        </p>
        <p className="border p-3">
          <a href="#" className="pe-none" tabindex="-1" aria-disabled="true">
            This link
          </a>{" "}
          can not be clicked.
        </p>
        <p className="border p-3">
          <a href="#" className="pe-auto">
            This link
          </a>{" "}
          can be clicked (this is default behavior).
        </p>
        <p className="border p-3 pe-none">
          <a href="#" tabindex="-1" aria-disabled="true">
            This link
          </a>{" "}
          can not be clicked because the <code>pointer-events</code> property is
          inherited from its parent. However,{" "}
          <a href="#" className="pe-auto">
            this link
          </a>{" "}
          has a <code>pe-auto</code> className and can be clicked.
        </p>
        <p>
          The <code>.pe-none</code> className (and the{" "}
          <code>pointer-events</code> CSS property it sets) only prevents
          interactions with a pointer (mouse, stylus, touch). Links and controls
          with <code>.pe-none</code> are, by default, still focusable and
          actionable for keyboard users. To ensure that they are completely
          neutralized even for keyboard users, you may need to add further
          attributes such as <code>tabindex="-1"</code> (to prevent them from
          receiving keyboard focus) and <code>aria-disabled="true"</code> (to
          convey the fact they are effectively disabled to assistive
          technologies), and possibly use JavaScript to completely prevent them
          from being actionable.
        </p>
      </Container>
      <Container>
        <h5>Opacity</h5>
        <div className="bd-example d-sm-flex">
          <div className="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">
            100%
          </div>
          <div className="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">
            75%
          </div>
          <div className="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">
            50%
          </div>
          <div className="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">
            25%
          </div>
        </div>
      </Container>
      <Container>
        <h5>Overflow</h5>
        <div className="bd-example d-md-flex">
          <div
            className="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light"
            style={{ maxWidth: "260px", maxHeight: "100px" }}
          >
            This is an example of using <code>.overflow-auto</code> on an
            element with set width and height dimensions. By design, this
            content will vertically scroll.
          </div>
          <div
            className="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light"
            style={{ maxWidth: "260px", maxHeight: "100px" }}
          >
            This is an example of using <code>.overflow-hidden</code> on an
            element with set width and height dimensions.
          </div>
          <div
            className="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light"
            style={{ maxWidth: "260px", maxHeight: "100px" }}
          >
            This is an example of using <code>.overflow-visible</code> on an
            element with set width and height dimensions.
          </div>
          <div
            className="overflow-scroll p-3 bg-light"
            style={{ maxWidth: "260px", maxHeight: "100px" }}
          >
            This is an example of using <code>.overflow-scroll</code> on an
            element with set width and height dimensions.
          </div>
        </div>
      </Container>
      <Container>
        <h5>Shadows</h5>
        <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
        <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
        <div className="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
      </Container>
      <Container>
        <h5>Sizing</h5>
        <p>
          Includes support for <code>25%</code>, <code>50%</code>,{" "}
          <code>75%</code>, <code>100%</code>, and <code>auto</code> by default.
        </p>
        <div className="border p-3 text-white">
          <div className="w-25 p-3 bg-primary mb-1">Width 25%</div>
          <div className="w-50 p-3 bg-primary mb-1">Width 50%</div>
          <div className="w-75 p-3 bg-primary mb-1">Width 75%</div>
          <div className="w-100 p-3 bg-primary mb-1">Width 100%</div>
          <div className="w-auto p-3 bg-primary">Width auto</div>
        </div>
        <div className="border p-3 mt-3">
          <div style={{ height: "100px" }}>
            <div
              className="h-25 d-inline-block bg-secondary me-1"
              style={{ width: "120px" }}
            >
              Height 25%
            </div>
            <div
              className="h-50 d-inline-block bg-secondary me-1"
              style={{ width: "120px" }}
            >
              Height 50%
            </div>
            <div
              className="h-75 d-inline-block bg-secondary me-1"
              style={{ width: "120px" }}
            >
              Height 75%
            </div>
            <div
              className="h-100 d-inline-block bg-secondary me-1"
              style={{ width: "120px" }}
            >
              Height 100%
            </div>
            <div
              className="h-auto d-inline-block bg-secondary"
              style={{ width: "120px" }}
            >
              Height auto
            </div>
          </div>
        </div>
        <p className="mt-3">
          You can also use <code>max-width: 100%;</code> and{" "}
          <code>max-height: 100%;</code> utilities as needed.
        </p>
      </Container>
      <Container>
        <h5>Text alignment</h5>
        <p>
          Easily realign text to components with text alignment classes. For
          start, end, and center alignment, responsive classes are available
          that use the same viewport width breakpoints as the grid system.
        </p>
        <div className="border p-3">
          <p className="text-start">
            Start aligned text on all viewport sizes.
          </p>
          <p className="text-center">
            Center aligned text on all viewport sizes.
          </p>
          <p className="text-end">End aligned text on all viewport sizes.</p>

          <p className="text-sm-start">
            Start aligned text on viewports sized SM (small) or wider.
          </p>
          <p className="text-md-start">
            Start aligned text on viewports sized MD (medium) or wider.
          </p>
          <p className="text-lg-start">
            Start aligned text on viewports sized LG (large) or wider.
          </p>
          <p className="text-xl-start">
            Start aligned text on viewports sized XL (extra-large) or wider.
          </p>
        </div>

        <h5 className="mt-5">Text wrapping and overflow</h5>
        <p>
          Wrap text with a <code>.text-wrap</code> className.
        </p>
        <div
          className="badge bg-primary text-wrap mb-3"
          style={{ width: "6rem" }}
        >
          This text should wrap.
        </div>
        <div
          className="text-nowrap bg-light border mb-5"
          style={{ width: "8rem" }}
        >
          This text should overflow the parent.
        </div>

        <h5>Word break</h5>
        <p>
          Prevent long strings of text from breaking your components’ layout by
          using <code>.text-break</code> to set{" "}
          <code>word-wrap: break-word</code> and{" "}
          <code>word-break: break-word</code>. We use <code>word-wrap</code>{" "}
          instead of the more common <code>overflow-wrap</code> for wider
          browser support, and add the deprecated{" "}
          <code>word-break: break-word</code> to avoid issues with flex
          containers.
        </p>
        <p className="text-break">
          mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </p>

        <h5 className="mt-5">Text transform</h5>
        <p className="text-lowercase">Lowercased text.</p>
        <p className="text-uppercase">Uppercased text.</p>
        <p className="text-capitalize">CapiTaliZed text.</p>
        <p>
          Note how <code>.text-capitalize</code> only changes the first letter
          of each word, leaving the case of any other letters unaffected.
        </p>
      </Container>
      <Container>
        <h5>Vertical alignment</h5>
        <p>
          Change the alignment of elements with the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
            <code>vertical-alignment</code>
          </a>{" "}
          utilities. Please note that vertical-align only affects inline,
          inline-block, inline-table, and table cell elements.
        </p>
        <p>
          Choose from <code>.align-baseline</code>, <code>.align-top</code>,{" "}
          <code>.align-middle</code>, <code>.align-bottom</code>,{" "}
          <code>.align-text-bottom</code>, and <code>.align-text-top</code> as
          needed.
        </p>
        <p>
          To vertically center non-inline content (like <code>&lt;div&gt;</code>
          s and more), use the{" "}
          <a href="https://getbootstrap.com/docs/5.2/utilities/flex/#align-items">
            flex box utilities
          </a>
          .
        </p>
        <div className="border p-3">
          <span className="align-baseline">baseline</span>
          <span className="align-top">top</span>
          <span className="align-middle">middle</span>
          <span className="align-bottom">bottom</span>
          <span className="align-text-top">text-top</span>
          <span className="align-text-bottom">text-bottom</span>
        </div>
        <div className="border p-3 mt-5">
          <table style={{ height: "100px" }}>
            <tbody>
              <tr>
                <td className="align-baseline">baseline</td>
                <td className="align-top">top</td>
                <td className="align-middle">middle</td>
                <td className="align-bottom">bottom</td>
                <td className="align-text-top">text-top</td>
                <td className="align-text-bottom">text-bottom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <Container>
        <h5>Visibility</h5>
        <p>
          Apply <code>.visible</code> or <code>.invisible</code> as needed.
        </p>
      </Container>
    </>
  );
};

export default UtilitiesPage;
