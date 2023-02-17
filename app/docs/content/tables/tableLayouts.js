import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const TableLayoutsPage = () => {
  return (
    <>
      <Container title="Table layout">
        <h4>Nested tables</h4>
        <SubContainer>
          <table className="table table-striped table-bordered bg-white">
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
        </SubContainer>

        <h4>Sizing</h4>
        <p>
          Add <code>.table-sm</code> to make any <code>.table</code> more
          compact by cutting all cell padding in half.
        </p>
        <SubContainer>
          <table className="table bg-white table-sm mb-0">
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
        </SubContainer>

        <h4>Alignment</h4>
        <p>
          Table cells of <code>&lt;thead&gt;</code> are always vertical aligned
          to the bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their
          alignment from <code>&lt;table&gt;</code> and are aligned to the top
          by default. Use the vertical align classes to re-align where needed.
        </p>
        <SubContainer>
          <table className="table align-middle bg-white">
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
                  This cell inherits <code>vertical-align: middle;</code> from
                  the table
                </td>
                <td>
                  This cell inherits <code>vertical-align: middle;</code> from
                  the table
                </td>
                <td>
                  This cell inherits <code>vertical-align: middle;</code> from
                  the table
                </td>
                <td>
                  This here is some placeholder text, intended to take up quite
                  a bit of vertical space, to demonstrate how the vertical
                  alignment works in the preceding cells.
                </td>
              </tr>
              <tr className="align-bottom">
                <td>
                  This cell inherits <code>vertical-align: bottom;</code> from
                  the table row
                </td>
                <td>
                  This cell inherits <code>vertical-align: bottom;</code> from
                  the table row
                </td>
                <td>
                  This cell inherits <code>vertical-align: bottom;</code> from
                  the table row
                </td>
                <td>
                  This here is some placeholder text, intended to take up quite
                  a bit of vertical space, to demonstrate how the vertical
                  alignment works in the preceding cells.
                </td>
              </tr>
              <tr>
                <td>
                  This cell inherits <code>vertical-align: middle;</code> from
                  the table
                </td>
                <td>
                  This cell inherits <code>vertical-align: middle;</code> from
                  the table
                </td>
                <td className="align-top">This cell is aligned to the top.</td>
                <td>
                  This here is some placeholder text, intended to take up quite
                  a bit of vertical space, to demonstrate how the vertical
                  alignment works in the preceding cells.
                </td>
              </tr>
            </tbody>
          </table>
        </SubContainer>
        <h4>Responsive tables</h4>
        <p>
          Across every breakpoint, use <code>.table-responsive</code> for
          horizontally scrolling tables. Use <code>.table-responsive</code>
          <code>-sm | -md | -lg | -xl | -xxl</code> as needed to create
          responsive tables up to a particular breakpoint. From that breakpoint
          and up, the table will behave normally and not scroll horizontally.
        </p>
        <SubContainer>
          <div className="table-responsive bg-white">
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
        </SubContainer>
      </Container>
    </>
  );
};

export default TableLayoutsPage;
