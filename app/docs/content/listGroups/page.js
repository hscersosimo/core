import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import ListGroupPage from "./listGroup";
import ListGroupExamplesPage from "./listGroupExamples";
import ListGroupColorPage from "./listGroupColor";
import ListGroupAlignmentPage from "./listGroupAlignment";

const ListGroups = () => {
  return (
    <>
      <SectionHeader name="List Groups" />
      <ListGroupPage />
      <ListGroupColorPage />
      <ListGroupExamplesPage />
      <ListGroupAlignmentPage />
    </>
  );
};

export default ListGroups;
