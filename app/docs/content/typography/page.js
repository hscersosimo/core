import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const TypographyPage = () => {
  return (
    <>
      <SectionHeader name="Typography" icon="book" />

      <Container
        title="Displays & headers"
        description="Documentation and examples for typography, including global settings, headings, body text, lists, and more."
      >
        <SubContainer>
          <p className="display-1 pb-3 mb-3 border-bottom">Display 1</p>
          <p className="display-2 pb-3 mb-3 border-bottom">Display 2</p>
          <p className="display-3 pb-3 mb-3 border-bottom">Display 3</p>
          <p className="display-4 pb-3 mb-3 border-bottom">Display 4</p>
          <p className="display-5 pb-3 mb-3 border-bottom">Display 5</p>
          <p className="display-6">Display 6</p>
        </SubContainer>
        <div className="mb-5 text-center">
          <h3>
            Fancy display heading
            <small className="fw-normal text-muted">
              {" "}
              with faded secondary text
            </small>
          </h3>
        </div>
        <SubContainer>
          <p className="h1 pb-3 mb-3 border-bottom">h1. Heading 1</p>
          <p className="h2 pb-3 mb-3 border-bottom">h2. Heading 2</p>
          <p className="h3 pb-3 mb-3 border-bottom">h3. Heading 3</p>
          <p className="h4 pb-3 mb-3 border-bottom">h4. Heading 4</p>
          <p className="h5 pb-3 mb-3 border-bottom">h5. Heading 5</p>
          <p className="h6 mb-0">h6. Heading 6</p>
        </SubContainer>
      </Container>

      <Container title="Paragraphs & font sizes" description="">
        <div className="mb-5">
          <h3>Lead paragraph</h3>
          <p className="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            amet distinctio hic omnis deleniti beatae libero corporis? Pariatur
            aut aliquam voluptas, cupiditate suscipit, dignissimos obcaecati
            officiis, nam magnam unde quis.
          </p>
        </div>

        <h3>Font sizes</h3>
        <SubContainer>
          {Array.from({ length: 7 }, (_, index) => {
            index = index + 1;
            var margin = "mb-5";
            if (index == 7) {
              margin = "mb-0";
            }

            return (
              <div key={index} className={margin}>
                <div className="border-top pt-3 mb-3">
                  <code>.fs-{index}</code> / font size {index}
                </div>
                <p className={"fs-" + index + " pb-3"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  quod at ipsum veniam ratione, eos repudiandae voluptas aliquam
                  quis cum maxime quidem, nobis esse quos placeat libero ducimus
                  dolorem? Architecto.
                </p>
              </div>
            );
          })}
          <div>
            <p className="mb-0">
              <strong>Note:</strong> You can use <code>lh-sm</code> to adjust
              the line height if needed. More details{" "}
              <a
                href="https://getbootstrap.com/docs/5.0/utilities/text/#line-height"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </SubContainer>
      </Container>

      <Container
        title="Quotes & lists"
        description="Quotes and lists are essential elements of any well-structured document. Quotes are used to emphasize or highlight a particular statement, while lists are a great way to break up text and make it easier to read. Quotes and lists can also be used to provide structure and context for the content, helping to make it more engaging and informative. With the right styling, quotes and lists can help to make a document more visually appealing and organized."
      >
        <h3>Quotes</h3>
        <SubContainer>
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </SubContainer>

        <h3>Lists</h3>
        <SubContainer>
          <h6>Unordered lists</h6>
          <div className="mb-5">
            <ul>
              <li>This is a regular unordered list</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Nested lists:
                <ul>
                  <li>Aliquam vero repellat velit possimus</li>
                  <li>Eveniet magnam qui consequatur earum harum assumenda</li>
                  <li>Repellendus aspernatur ipsum suscipit atque!</li>
                </ul>
              </li>
              <li>Consectetur adipisicing elit.</li>
            </ul>
          </div>

          <h6>Ordered lists</h6>
          <div className="mb-5">
            <ol>
              <li>This is a regular ordered list</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Nested lists:
                <ul>
                  <li>Aliquam vero repellat velit possimus</li>
                  <li>Eveniet magnam qui consequatur earum harum assumenda</li>
                  <li>Repellendus aspernatur ipsum suscipit atque!</li>
                </ul>
              </li>
              <li>Consectetur adipisicing elit.</li>
            </ol>
          </div>

          <h6>Unstyled lists</h6>
          <div className="mb-5">
            <ul className="list-unstyled">
              <li>This is a list.</li>
              <li>It appears completely unstyled.</li>
              <li>Structurally, it's still a list.</li>
              <li>
                However, this style only applies to immediate child elements.
              </li>
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
          </div>
          <h6>Inline lists</h6>
          <div className="">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">This is a list item.</li>
              <li className="list-inline-item">And another one.</li>
              <li className="list-inline-item">
                But they're displayed inline.
              </li>
            </ul>
          </div>
        </SubContainer>

        <h3>Description Lists</h3>
        <SubContainer>
          <dl className="row mb-0">
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
              This can be useful when space is tight. Adds an ellipsis at the
              end.
            </dd>
          </dl>
        </SubContainer>
      </Container>
    </>
  );
};

export default TypographyPage;
