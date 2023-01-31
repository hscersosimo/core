import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";
import Link from "next/link";

const TextClasses = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("full");
  return (
    <>
      <Container
        title="Text utility classes"
        description="Text utility classes are used to stylize text based on the importance
    of the text according to markdown formatting. These classes allow
    developers to quickly and easily highlight text based on its
    importance, without having to manually apply a style to each element."
      >
        <div className="mb-5">
          <p>
            You can use the mark tag to <mark>highlight</mark> text. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
            <del>This line of text is meant to be treated as deleted text</del>.
          </p>
          <p>
            Mollitia doloribus ipsum et,{" "}
            <s>
              this line of text is meant to be treated as no longer accurate
            </s>{" "}
            aspernatur, quia animi qui ut quam quibusdam, facere aperiam eos?{" "}
          </p>
          <p>
            Facere velit magnam distinctio similique quasi voluptates omnis
            facilis laboriosam, voluptatum minus ducimus repudiandae. Animi,
            laboriosam commodi!{" "}
            <ins>
              This line of text is meant to be treated as an addition to the
              document.
            </ins>
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sint
              animi non eveniet, odit aut consectetur voluptatum.
            </small>
          </p>
        </div>

        <h3>Text decoration</h3>
        <div className="mb-3">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <code>fw-bold</code>
                </td>
                <td>
                  <span className="fw-bold">Bold text.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>fw-bolder</code>
                </td>
                <td>
                  <span className="fw-bolder">
                    Bolder weight text (relative to the parent element).
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>fw-normal</code>
                </td>
                <td>
                  <span className="fw-normal">Normal weight text.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>fw-light</code>
                </td>
                <td>
                  <span className="fw-light">Light weight text.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>fst-italic</code>
                </td>
                <td>
                  <span className="fst-italic">Italic text.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>fst-normal</code>
                </td>
                <td>
                  <span className="fst-normal">
                    Text with normal font style
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          In some cases, you may need to apply styles to text in multiple ways.
          You can use HTML tags, or you can use one of Bootstrap's utility
          classes. Take a look at the code below to see both approaches in
          action.
        </p>
        <SubContainer margin="mb-5">
          <p>
            <u>This line of text will render as underlined.</u>{" "}
            <span className="text-decoration-underline">Underline text.</span>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>{" "}
            <span className="fw-bold">Bold text.</span>
          </p>
          <p>
            <em>This line rendered as italicized text.</em>{" "}
            <span className="fst-italic">Italic text.</span>
          </p>
          <p className="text-decoration-line-through">
            This text has a line going through it.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              This link has its text decoration removed
            </a>
          </p>
        </SubContainer>

        <h3 className="mt-5">Text transform</h3>
        <p>
          Transform text in components with text capitalization classes:{" "}
          <code>.text-lowercase</code>, <code>.text-uppercase</code> &{" "}
          <code>.text-capitalize</code>.
        </p>
        <SubContainer>
          <p className="text-lowercase">
            <strong>Lowercased text</strong> - Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias obcaecati, reiciendis
            ducimus illo eius atque similique iusto? Rem odit reiciendis, illum
            repellat saepe, corrupti cum quos deserunt alias hic ullam.
          </p>
          <p className="text-uppercase">
            <strong>Uppercased text</strong> - Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eveniet ullam quidem labore corporis
            quos odio quo natus quasi odit debitis nostrum, dicta, similique
            consequatur aliquam voluptate in, delectus numquam eligendi.
          </p>
          <p className="text-capitalize">
            <strong>CapiTaliZed text</strong> - Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Maiores est eum esse quo sunt odio
            laboriosam commodi molestias nostrum asperiores, quasi temporibus
            fugit repellendus iste hic quas labore, tempore officia?
          </p>
          <p className="border-top pt-3">
            Note how <code>.text-capitalize</code> only changes the first letter
            of each word, leaving the case of any other letters unaffected.
          </p>
        </SubContainer>

        <h3>Text color</h3>
        <SubContainer padding="p-3">
          {colorPaletteArray.map((color) => (
            <div
              key={color}
              className={`border rounded mb-3 p-3 text-${color.class} ${
                // if color = white, add a dark background
                color.class === "white" ? "bg-dark" : "bg-white"
              }`}
            >
              <h6>
                <span className="text-capitalize me-3">{color.class}</span>
                <span>/.text-{color.class}</span>
              </h6>

              <p className="fs-7 mb-0">
                <strong>Lorem ipsum dolor sit amet</strong> consectetur
                adipisicing elit. Sed porro velit nulla vitae nam labore fuga
                reprehenderit quod ad, ab fugiat eveniet rerum nihil ut minus
                quisquam. Minus, veniam expedita? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sed porro velit nulla vitae nam
                labore fuga reprehenderit quod ad, ab fugiat eveniet rerum nihil
                ut minus quisquam. Minus, veniam expedita?
              </p>
            </div>
          ))}
        </SubContainer>

        <h3>Links</h3>
        <SubContainer padding="p-3">
          <div className="bg-white p-3">
            <table className="table">
              <tbody>
                {colorPaletteArray.map((color) => (
                  <tr key={color}>
                    <td className="py-3">
                      <code>link-{color.class}</code>
                    </td>
                    <td
                      className={`py-3 ${
                        // if color = white, add a dark background
                        color.class === "white" ? "text-bg-dark" : ""
                      }`}
                    >
                      Lorem ipsum dolor{" "}
                      <a href="#" class={"link-" + color.class}>
                        this is a {color.name} link
                      </a>{" "}
                      excepturi vero impedit corporis iure blanditiis.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SubContainer>

        <h3>Light/Dark color combinations</h3>
        <div>
          <p>
            Lorem ipsum is a <strong>pseudo-Latin (text-body)</strong> text used
            in web design, typography, layout, and printing in place of English
            to{" "}
            <strong className="text-dark">
              emphasise design elements (text-dark)
            </strong>{" "}
            over <strong className="text-black">content (text-black)</strong>.
            It's also called placeholder (or filler) text. It's a{" "}
            <strong className="text-light">
              convenient tool for mock-ups (text-light)
            </strong>
            . It helps to outline the visual elements of a document or
            presentation, eg{" "}
            <Link href="/docs/content/typography">
              typography, font (links)
            </Link>
            , or layout. Lorem ipsum is mostly a part of a Latin text by the{" "}
            <strong className="text-muted">
              classical author and philosopher Cicero (text-muted)
            </strong>
            .
          </p>
          <div className="rounded text-bg-light p-3 mb-3">
            <p className="mb-0">
              <strong>Container w/ .text-bg-light class</strong>. Its words and
              letters have been changed by addition or removal, so to
              deliberately render its content nonsensical; it's not genuine ,
              correct, or comprehensible Latin anymore. While lorem ipsum's
              still resembles classical Latin, it actually has no meaning
              whatsoever.
            </p>
          </div>
        </div>
        <div>
          <p>
            As Cicero's text doesn't contain the letters K, W, or Z, alien to
            latin, these, and others are{" "}
            <Link href="" className="fw-normal text-decoration-underline">
              often inserted randomly (underlined, fw-normal link)
            </Link>{" "}
            to mimic the typographic appearence of European languages, as are
            digraphs not to be found in the original.
          </p>
        </div>
        <div className="rounded text-bg-dark p-3 mb-3">
          <p className="mb-0">
            <strong>Container w/ .text-bg-dark class</strong>. In a professional
            context it often happens that private or corporate clients corder a
            publication to be made and presented with the actual content still
            not being ready.
          </p>
        </div>
        <div>
          <p className="fs-7 text-light">
            <strong>Smaller, text-light paragraph.</strong> Think of a news blog
            that's filled with content hourly on the day of going live. However,
            reviewers tend to be distracted by comprehensible content, say, a
            random text copied from a newspaper or the internet. The are likely
            to focus on the text, disregarding the layout and its elements.
            Besides, random text risks to be unintendedly humorous or offensive,
            an unacceptable risk in corporate environments. Lorem ipsum and its
            many variants have been employed since the early 1960ies, and quite
            likely since the sixteenth century.
          </p>
        </div>

        <h3 className="mt-5">Pointer events</h3>
        <p>
          Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code>{" "}
          classes to prevent or add element interactions.
        </p>
        <SubContainer padding="p-3">
          <div className="bg-white rounded border p-3 mb-3">
            <a href="#" className="pe-none" tabindex="-1" aria-disabled="true">
              This link
            </a>{" "}
            can not be clicked.
          </div>
          <div className="bg-white rounded border p-3 mb-3">
            {" "}
            <a href="#" className="pe-auto">
              This link
            </a>{" "}
            can be clicked (this is default behavior).
          </div>
          <div className="bg-white rounded border p-3 mb-3 pe-none">
            {" "}
            <a href="#" tabindex="-1" aria-disabled="true">
              This link
            </a>{" "}
            can not be clicked because the <code>pointer-events</code> property
            is inherited from its parent. However,{" "}
            <a href="#" className="pe-auto">
              this link
            </a>{" "}
            has a <code>.pe-auto</code> class and can be clicked.
          </div>
          <p>
            The <code>.pe-none</code> class (and the <code>pointer-events</code>{" "}
            CSS property it sets) only prevents interactions with a pointer
            (mouse, stylus, touch). Links and controls with{" "}
            <code>.pe-none</code> are, by default, still focusable and
            actionable for keyboard users. To ensure that they are completely
            neutralized even for keyboard users, you may need to add further
            attributes such as <code>tabindex="-1"</code> (to prevent them from
            receiving keyboard focus) and <code>aria-disabled="true"</code> (to
            convey the fact they are effectively disabled to assistive
            technologies), and possibly use JavaScript to completely prevent
            them from being actionable.
          </p>
        </SubContainer>

        <h3>Stretched links</h3>
        <p>
          Make any HTML element clickable by “stretching” a nested link via CSS.
          Check the{" "}
          <a href="https://getbootstrap.com/docs/5.2/helpers/stretched-link/">
            Bootstrap docs
          </a>{" "}
          for more details.
        </p>
        <SubContainer padding="p-3" margin="mb-3">
          <div className="card mb-5" style={{ width: "18rem" }}>
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Card image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Card image cap</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>

            <div className="card-body">
              <h5 className="card-title">Card with stretched link</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary stretched-link">
                Go somewhere
              </a>
            </div>
          </div>
        </SubContainer>

        <SubContainer padding="p-3">
          <div className="border bg-white p-4">
            <div className="d-flex position-relative">
              <svg
                className="bd-placeholder-img flex-shrink-0 me-3"
                width="144"
                height="144"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Generic placeholder image"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Generic placeholder image</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
              </svg>

              <div>
                <h5 className="mt-0">Custom component with stretched link</h5>
                <p>
                  This is some placeholder content for the custom component. It
                  is intended to mimic what some real-world content would look
                  like, and we're using it here to give the component a bit of
                  body and size.
                </p>
                <a href="#" className="stretched-link">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </SubContainer>

        <h3 className="mt-5">Opacity</h3>
        <div className="mb-5">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <code>default</code>
                </td>
                <td className="text-primary">This is default primary text</td>
              </tr>
              <tr>
                <td>
                  <code>text-opacity-75</code>
                </td>
                <td className="text-primary text-opacity-75">
                  This is 75% opacity primary text
                </td>
              </tr>
              <tr>
                <td>
                  <code>text-opacity-50</code>
                </td>
                <td className="text-primary text-opacity-50">
                  This is 50% opacity primary text
                </td>
              </tr>{" "}
              <tr>
                <td>
                  <code>text-opacity-25</code>
                </td>
                <td className="text-primary text-opacity-25">
                  This is 25% opacity primary text
                </td>
              </tr>
            </tbody>
          </table>
          <div className="fs-7">
            <strong>
              <i class="fa-solid fa-triangle-exclamation"></i> Attention!
            </strong>{" "}
            Lowering the opacity of characters can lead to legibility and
            contrast issues, negatively impacting the usability and
            accessibility of your designs. It is important to ensure that your
            opacity levels are within the recommended range to ensure the best
            user experience.
          </div>
        </div>

        <h3>Text truncation</h3>
        <p>Truncate long strings of text with an ellipsis.</p>
        <SubContainer>
          <div className="row mb-1">
            <div className="col-2 text-truncate">
              Lorem ipsum dolor sit amet, an latine aperiam maluisset his,
              possit facilis graecis per ad. In augue suavitate eos, integre
              deserunt assentior qui eu. Eum clita legere animal ea, no amet
              ullamcorper vim. In ludus periculis ius, malis aliquid id pri.
            </div>
          </div>
          <span
            className="d-inline-block text-truncate"
            style={{ maxWidth: "250px" }}
          >
            Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
            facilis graecis per ad. In augue suavitate eos, integre deserunt
            assentior qui eu. Eum clita legere animal ea, no amet ullamcorper
            vim. In ludus periculis ius, malis aliquid id pri.
          </span>
          <span
            className="d-inline-block text-truncate"
            style={{ maxWidth: "100%" }}
          >
            Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
            facilis graecis per ad. In augue suavitate eos, integre deserunt
            assentior qui eu. Eum clita legere animal ea, no amet ullamcorper
            vim. In ludus periculis ius, malis aliquid id pri.
          </span>
        </SubContainer>

        <h3 className="mt-5">Text wrapping and overflow</h3>
        <p>
          Wrap text with a <code>.text-wrap</code> className.
        </p>
        <SubContainer>
          <div
            className="badge bg-primary text-wrap mb-3"
            style={{ width: "6rem" }}
          >
            This text should wrap.
          </div>
          <div
            className="text-nowrap bg-white border"
            style={{ width: "8rem" }}
          >
            This text should overflow the parent.
          </div>
        </SubContainer>

        <h3>Word break</h3>
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
        <SubContainer>
          <p className="text-break mb-0">
            mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </p>
        </SubContainer>

        <h3>Text selection</h3>
        <p>
          Change the way in which the content is selected when the user
          interacts with it.
        </p>
        <SubContainer padding="p-3">
          <div className="border p-3 user-select-all bg-white rounded mb-3">
            This paragraph will be entirely selected when clicked by the user.
          </div>
          <div className="border p-3 user-select-auto bg-white rounded mb-3">
            This paragraph has default select behavior.
          </div>
          <div className="border p-3 user-select-none bg-white rounded mb-3">
            This paragraph will not be selectable when clicked by the user.
          </div>
        </SubContainer>

        <h3>Text alignment</h3>
        <p>
          Easily realign text to components with text alignment classes. For
          start, end, and center alignment, responsive classes are available
          that use the same viewport width breakpoints as the grid system.
        </p>
        <SubContainer>
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
        </SubContainer>

        <h4>Vertical alignment</h4>
        <p>
          Change the alignment of elements with the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
            <code>vertical-alignment</code>
          </a>{" "}
          utilities. Please note that vertical-align only affects inline,
          inline-block, inline-table, and table cell elements. Choose from{" "}
          <code>.align-baseline</code>, <code>.align-top</code>,{" "}
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
        <SubContainer padding="p-3">
          <div className="text-bg-white rounded border p-3 mb-3">
            <span className="align-baseline">baseline</span>
            <span className="align-top">top</span>
            <span className="align-middle">middle</span>
            <span className="align-bottom">bottom</span>
            <span className="align-text-top">text-top</span>
            <span className="align-text-bottom">text-bottom</span>
          </div>
          <div className="text-bg-white rounded border p-3">
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
        </SubContainer>

        <h3>Vertical rule</h3>
        <p>
          The vertical line is a versatile element that can be used in a variety
          of ways. It can be used to add emphasis or highlight a particular
          statement, create visual separation between elements, or provide
          structure and context for the content. It can also be used to make a
          document more visually appealing and organized, helping to make it
          easier to read and understand.
        </p>
        <div className="d-flex my-5">
          <div className="vr me-3"></div>
          <div>
            <em>
              Lorem ipsum dolor sit amet, an latine aperiam maluisset his,
              possit facilis graecis per ad. In augue suavitate eos, integre
              deserunt assentior qui eu. Eum clita legere animal ea, no amet
              ullamcorper vim. In ludus periculis ius, malis aliquid id pri.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aut id
              repellendus adipisci quaerat atque accusantium, nam voluptate
              veritatis! Natus possimus atque iste rem exercitationem, provident
              sit ex. Non, temporibus.
            </em>
          </div>
        </div>

        <p>They can also be used as separators in stacks:</p>
        <div className="border p-2 hstack gap-3">
          <div>First item</div>
          <div className="ms-auto">Second item</div>
          <div className="vr"></div>
          <div>Third item</div>
        </div>
      </Container>
    </>
  );
};

export default TextClasses;
