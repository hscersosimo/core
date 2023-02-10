import InputsPage from "../inputs/page";
import ButtonsPage from "../buttons/page";
import DropdownsPage from "../dropdowns/page";
import ChecksRadiosPage from "../checksRadios/page";
import SelectsPage from "../selects/page";
import SlidersPage from "../sliders/page";
import InputGroupsPage from "../inputGroups/page";
import FormExamplesPage from "../formExamples/page";
import ValidationsPage from "../validations/page";

const AllForms = () => {
  return (
    <>
      <h1 className="mb-3">Forms</h1>
      <InputsPage />
      <ButtonsPage />
      <DropdownsPage />
      <ChecksRadiosPage />
      <SelectsPage />
      <SlidersPage />
      <InputGroupsPage />
      <FormExamplesPage />
      <ValidationsPage />
    </>
  );
};

export default AllForms;
