import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";

const TableExamplesPage = () => {
  return (
    <>
      <Container
        title="Table types"
        desc="Tables are a fundamental user interface component used to display information in a structured and organized way. They provide a way to present large amounts of data or information in a compact and readable format. In this section, you'll find information on the various types of tables available in our design system, including their styles, layouts, and best practices for usage. You'll also learn how to effectively use tables in your designs to create clear and informative content that is easy for users to understand and interact with."
      >
        <SubContainer margin="mb-3">
          <div className="bg-white">
            <table className="table table-hover table-striped mb-0">
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
          </div>
        </SubContainer>
        <p>
          Use <code>.table-striped-columns</code> to add zebra-striping to any
          table column.
        </p>
        <SubContainer margin="mb-3">
          <div className="bg-white">
            <table className="table table-hover table-striped-columns mb-0">
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
          </div>
        </SubContainer>

        <p>
          Add <code>.table-bordered</code> for borders on all sides of the table
          and cells. Border color utilities can be added to change colors.
        </p>
        <SubContainer>
          <div className="bg-white">
            <table className="table table-bordered mb-0">
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
          </div>
        </SubContainer>

        <SubContainer margin="mb-3">
          <div className="bg-white">
            <table className="table table-borderless mb-0">
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
          </div>
        </SubContainer>

        <p>
          A <code>caption</code> functions like a heading for a table. It helps
          users with screen readers to find a table and understand what it’s
          about and decide if they want to read it. You can also put the{" "}
          <code>caption</code> on the top of the table with{" "}
          <code>.caption-top</code>.
        </p>
        <SubContainer margin="mb-3">
          <div className="bg-white p-3">
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
          </div>
        </SubContainer>

        <p>
          Add a thicker border, darker between table groups—
          <code>thead, tbody, and tfoot</code>—with{" "}
          <code>.table-group-divider</code>. Customize the color by changing the{" "}
          <code>border-top-color</code>.
        </p>
        <SubContainer>
          <table className="table bg-white">
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
        </SubContainer>
      </Container>
    </>
  );
};

export default TableExamplesPage;
