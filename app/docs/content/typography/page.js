import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const Typography = () => {
  return (
    <>
      <SectionHeader name="Typography" icon="book" />

      <Container>
        <p className="display-1 pb-3 mb-3 border-bottom">Display 1</p>
        <p className="display-2 pb-3 mb-3 border-bottom">Display 2</p>
        <p className="display-3 pb-3 mb-3 border-bottom">Display 3</p>
        <p className="display-4 pb-3 mb-3 border-bottom">Display 4</p>
        <p className="display-5 pb-3 mb-3 border-bottom">Display 5</p>
        <p className="display-6">Display 6</p>
      </Container>

      <Container>
        <p className="h1 pb-3 mb-3 border-bottom">h1. Heading 1</p>
        <p className="h2 pb-3 mb-3 border-bottom">h2. Heading 2</p>
        <p className="h3 pb-3 mb-3 border-bottom">h3. Heading 3</p>
        <p className="h4 pb-3 mb-3 border-bottom">h4. Heading 4</p>
        <p className="h5 pb-3 mb-3 border-bottom">h5. Heading 5</p>
        <p className="h6">h6. Heading 6</p>
      </Container>

      <Container>
        <h3>
          Fancy display heading
          <small className="fw-normal text-muted">
            {" "}
            With faded secondary text
          </small>
        </h3>
      </Container>

      <Container>
        <p className="lead">
          This is a lead paragraph. It stands out from regular paragraphs.
        </p>
        <p>
          You can use the mark tag to <mark>highlight</mark> text.
        </p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins>
            This line of text is meant to be treated as an addition to the
            document.
          </ins>
        </p>
        <p>
          <u>This line of text will render as underlined.</u>
        </p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
          <strong>This line rendered as bold text.</strong>
        </p>
        <p>
          <em>This line rendered as italicized text.</em>
        </p>

        <h5 className="mt-5">Text decoration</h5>
        <p className="text-decoration-underline">
          This text has a line underneath it.
        </p>
        <p className="text-decoration-line-through">
          This text has a line going through it.
        </p>
        <a href="#" className="text-decoration-none">
          This link has its text decoration removed
        </a>
      </Container>

      <Container>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Container>

      <Container>
        <p className="fs-1 pb-3 mb-3 border-bottom">
          FontSize1. Lorem ipsum dolor sit.
        </p>
        <p className="fs-2 pb-3 mb-3 border-bottom">
          FontSize2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="fs-3 pb-3 mb-3 border-bottom">
          FontSize3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora repellat.
        </p>
        <p className="fs-4 pb-3 mb-3 border-bottom">
          FontSize4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque.
        </p>
        <p className="fs-5 pb-3 mb-3 border-bottom">
          FontSize5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque
          cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus
          dolore aliquam hic?
        </p>
        <p className="fs-6 pb-3 mb-3 border-bottom">
          FontSize6. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque
          cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus
          dolore aliquam hic?
        </p>
        <p className="fs-7 pb-3 mb-3 border-bottom">
          FontSize7. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora repellat, deleniti iste quibusdam a ratione dolorum id neque
          cum, tenetur eius soluta eligendi cumque dignissimos. Eius possimus
          dolore aliquam hic? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempora repellat, deleniti iste quibusdam a ratione dolorum id
          neque cum, tenetur eius soluta eligendi cumque dignissimos. Eius
          possimus dolore aliquam hic?
        </p>
        <p>
          <strong>Note:</strong> You can use <code>lh-sm</code> to adjust the
          line height if needed. More details{" "}
          <a
            href="https://getbootstrap.com/docs/5.0/utilities/text/#line-height"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Container>

      <Container>
        <h5 className="mb-4">Font weight and italics</h5>
        <table className="table mb-4">
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
                <code>fw-lighter</code>
              </td>
              <td>
                <span className="fw-lighter">
                  Lighter weight text (relative to the parent element).
                </span>
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
                <span className="fst-normal">Text with normal font style</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>
            <i className="fa-regular fa-triangle-exclamation"></i> Attention:
          </strong>
          <code> fw-lighter</code> should be avoided due to legibility/contrast
          issues.
        </p>
      </Container>

      <Container>
        <ul className="list-unstyled pb-3 mb-3 border-bottom">
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>Structurally, it's still a list.</li>
          <li>However, this style only applies to immediate child elements.</li>
          <li>
            Nested lists:
            <ul>
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ul>
          </li>
          <li>This may still come in handy in some situations.</li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">This is a list item.</li>
          <li className="list-inline-item">And another one.</li>
          <li className="list-inline-item">But they're displayed inline.</li>
        </ul>
      </Container>

      <Container>
        <dl className="row">
          <dt className="col-sm-3">Description lists</dt>
          <dd className="col-sm-9">
            A description list is perfect for defining terms.
          </dd>

          <dt className="col-sm-3">Term</dt>
          <dd className="col-sm-9">
            <p>Definition for the term.</p>
            <p>And some more placeholder definition text.</p>
          </dd>

          <dt className="col-sm-3">Another term</dt>
          <dd className="col-sm-9">
            This definition is short, so no extra paragraphs or anything.
          </dd>

          <dt className="col-sm-3 text-truncate">
            Truncated term is truncated
          </dt>
          <dd className="col-sm-9">
            This can be useful when space is tight. Adds an ellipsis at the end.
          </dd>
        </dl>
      </Container>
      <Container>
        <h5>Text truncation</h5>
        <p>Truncate long strings of text with an ellipsis.</p>
        <div className="row mb-1">
          <div className="col-2 text-truncate">
            Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
            facilis graecis per ad. In augue suavitate eos, integre deserunt
            assentior qui eu. Eum clita legere animal ea, no amet ullamcorper
            vim. In ludus periculis ius, malis aliquid id pri.
          </div>
        </div>
        <span
          className="d-inline-block text-truncate"
          style={{ maxWidth: "250px" }}
        >
          Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
          facilis graecis per ad. In augue suavitate eos, integre deserunt
          assentior qui eu. Eum clita legere animal ea, no amet ullamcorper vim.
          In ludus periculis ius, malis aliquid id pri.
        </span>
        <span
          className="d-inline-block text-truncate"
          style={{ maxWidth: "100%" }}
        >
          Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
          facilis graecis per ad. In augue suavitate eos, integre deserunt
          assentior qui eu. Eum clita legere animal ea, no amet ullamcorper vim.
          In ludus periculis ius, malis aliquid id pri.
        </span>
      </Container>
      <Container>
        <h5>Vertical rule</h5>

        <div className="d-flex my-5">
          <div className="vr me-3"></div>
          <div>
            Lorem ipsum dolor sit amet, an latine aperiam maluisset his, possit
            facilis graecis per ad. In augue suavitate eos, integre deserunt
            assentior qui eu. Eum clita legere animal ea, no amet ullamcorper
            vim. In ludus periculis ius, malis aliquid id pri.
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

      <Container>
        <h5>Color</h5>
        <div className="mb-5">
          <p className="text-primary">.text-primary</p>
          <p className="text-secondary">.text-secondary</p>
          <p className="text-success">.text-success</p>
          <p className="text-danger">.text-danger</p>
          <p className="text-warning bg-dark">.text-warning</p>
          <p className="text-info bg-dark">.text-info</p>
          <p className="text-light bg-dark">.text-light</p>
          <p className="text-dark">.text-dark</p>
          <p className="text-body">.text-body</p>
          <p className="text-muted">.text-muted</p>
          <p className="text-white bg-dark">.text-white</p>
        </div>

        <h5>Reset color</h5>
        <p>
          Reset a text or link’s color with <code>.text-reset</code>, so that it
          inherits the color from its parent.
        </p>
        <p className="text-muted">
          Muted text with a{" "}
          <a href="#" className="text-reset">
            reset link
          </a>
          .
        </p>

        <h5 className="mt-5">Opacity</h5>
        <div className="mb-5">
          <div className="text-primary">This is default primary text</div>
          <div className="text-primary text-opacity-75">
            This is 75% opacity primary text
          </div>
          <div className="text-primary text-opacity-50">
            This is 50% opacity primary text
          </div>
          <div className="text-primary text-opacity-25">
            This is 25% opacity primary text
          </div>
        </div>
      </Container>
      <Container>
        <h5>Monospace</h5>
        <p>
          Change a selection to our monospace font stack with{" "}
          <code>.font-monospace</code>.
        </p>
        <p className="font-monospace">This is in monospace</p>
      </Container>
    </>
  );
};

export default Typography;
