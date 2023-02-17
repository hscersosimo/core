import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import TableExamplesPage from "./tableExamples";
import TableColorsPage from "./tableColors";
import TableLayoutsPage from "./tableLayouts";

const Tables = () => {
  return (
    <>
      <SectionHeader name="Tables" />
      <TableExamplesPage />
      <TableLayoutsPage />
      <TableColorsPage />
    </>
  );
};

export default Tables;
