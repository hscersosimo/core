import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import TextClasses from "./TextClasses";
import BackgroundClasses from "./BackgroundClasses";
import HelperClasses from "./HelperClasses";
import VisualStylingClasses from "./VisualStylingClasses";

const UtilitiesPage = () => {
  return (
    <>
      <SectionHeader name="Utilities" icon="book" />

      <TextClasses />
      <BackgroundClasses />
      <HelperClasses />
      <VisualStylingClasses />
    </>
  );
};

export default UtilitiesPage;
