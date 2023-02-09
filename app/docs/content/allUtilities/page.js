import TextUtilitiesPage from "../textUtilities/page";
import BgUtilitiesPage from "../bgUtilities/page";
import HelperClassesPage from "../helperClasses/page";
import VisualStylingPage from "../visualStyling/page";

const AllUtilities = () => {
  return (
    <>
      <h1 className="mb-3">Utility classes</h1>
      <TextUtilitiesPage />
      <BgUtilitiesPage />
      <HelperClassesPage />
      <VisualStylingPage />
    </>
  );
};

export default AllUtilities;
