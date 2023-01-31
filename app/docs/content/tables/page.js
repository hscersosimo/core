import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";

const Tables = () => {
  return (
    <>
      <SectionHeader name="Tables" icon="table" />
      <Container>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <p>
          Use <code>.table-striped-columns</code> to add zebra-striping to any
          table column.
        </p>
        <table className="table table-hover table-striped-columns">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>The Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <p>
          Add <code>.table-bordered</code> for borders on all sides of the table
          and cells. Border color utilities can be added to change colors.
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <p>
          A <code>caption</code> functions like a heading for a table. It helps
          users with screen readers to find a table and understand what it’s
          about and decide if they want to read it. You can also put the{" "}
          <code>caption</code> on the top of the table with{" "}
          <code>.caption-top</code>.
        </p>
        <table className="table">
          <caption>List of users</caption>

          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Footer</td>
              <td>Footer</td>
              <td>Footer</td>
              <td>Footer</td>
            </tr>
          </tfoot>
        </table>
      </Container>
      <Container>
        <table className="table table-dark table-hover table-striped table-borderless">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">className</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Default</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>

            <tr className="table-primary">
              <th scope="row">Primary</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">Secondary</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-success">
              <th scope="row">Success</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-danger">
              <th scope="row">Danger</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">Warning</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-info">
              <th scope="row">Info</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-light">
              <th scope="row">Light</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr className="table-dark">
              <th scope="row">Dark</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <table className="table table-primary table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <table className="table table-secondary table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <Container>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td colSpan="4">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                      <th scope="col">Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">A</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                    <tr>
                      <th scope="row">B</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                    <tr>
                      <th scope="row">C</th>
                      <td>First</td>
                      <td>Last</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <p>
          Add <code>.table-sm</code> to make any <code>.table</code> more
          compact by cutting all cell padding in half.
        </p>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <p>
          Add a thicker border, darker between table groups—
          <code>thead, tbody, and tfoot</code>—with{" "}
          <code>.table-group-divider</code>. Customize the color by changing the{" "}
          <code>border-top-color</code> (which we don’t currently provide a
          utility className for at this time).
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <p>
          Table cells of <code>&lt;thead&gt;</code> are always vertical aligned
          to the bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their
          alignment from <code>&lt;table&gt;</code> and are aligned to the top
          by default. Use the vertical align classes to re-align where needed.
        </p>
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col" className="w-25">
                Heading 1
              </th>
              <th scope="col" className="w-25">
                Heading 2
              </th>
              <th scope="col" className="w-25">
                Heading 3
              </th>
              <th scope="col" className="w-25">
                Heading 4
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                This cell inherits <code>vertical-align: middle;</code> from the
                table
              </td>
              <td>
                This cell inherits <code>vertical-align: middle;</code> from the
                table
              </td>
              <td>
                This cell inherits <code>vertical-align: middle;</code> from the
                table
              </td>
              <td>
                This here is some placeholder text, intended to take up quite a
                bit of vertical space, to demonstrate how the vertical alignment
                works in the preceding cells.
              </td>
            </tr>
            <tr className="align-bottom">
              <td>
                This cell inherits <code>vertical-align: bottom;</code> from the
                table row
              </td>
              <td>
                This cell inherits <code>vertical-align: bottom;</code> from the
                table row
              </td>
              <td>
                This cell inherits <code>vertical-align: bottom;</code> from the
                table row
              </td>
              <td>
                This here is some placeholder text, intended to take up quite a
                bit of vertical space, to demonstrate how the vertical alignment
                works in the preceding cells.
              </td>
            </tr>
            <tr>
              <td>
                This cell inherits <code>vertical-align: middle;</code> from the
                table
              </td>
              <td>
                This cell inherits <code>vertical-align: middle;</code> from the
                table
              </td>
              <td className="align-top">This cell is aligned to the top.</td>
              <td>
                This here is some placeholder text, intended to take up quite a
                bit of vertical space, to demonstrate how the vertical alignment
                works in the preceding cells.
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <p>
          Across every breakpoint, use <code>.table-responsive</code> for
          horizontally scrolling tables. Use <code>.table-responsive</code>
          <code>-sm | -md | -lg | -xl | -xxl</code> as needed to create
          responsive tables up to a particular breakpoint. From that breakpoint
          and up, the table will behave normally and not scroll horizontally.
        </p>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default Tables;
