import React from "react";
import Fonts from "./fonts/page";
import Icons from "./icons/page";
import Typography from "./typography/page";
import Images from "./images/page";
import Tables from "./tables/page";
import Buttons from "./buttons/page";
import ButtonGroup from "./button_group/page";
import Dropdown from "./dropdown/page";
import Forms from "./forms/page";
import ChecksRadios from "./checks_radios/page";
import Select from "./select/page";
import Sliders from "./sliders/page";
import Validations from "./validations/page";
import Accordion from "./accordion/page";
import Alerts from "./alerts/page";
import Badge from "./badge/page";
import Cards from "./cards/page";
import Carousel from "./carousel/page";
import Masonry from "./masonry/page";
import ExpandCollapse from "./expand_collapse/page";
import ListGroups from "./list_group/page";
import Modal from "./modal/page";

const LoadSection = (props) => {
  // First we define our ListOfSections
  // Modify this list if you need to add/remove sections.
  const type = props.type;

  let listOfSections = [];
  if (type === "styles") {
    // List of sections for the 'Styles' group
    listOfSections = [
      { name: "Fonts", component: <Fonts /> },
      { name: "Icons", component: <Icons /> },
    ];
  } else if (type === "sections") {
    // List of sections for the 'Sections' group
    listOfSections = [
      { name: "Typography", component: <Typography /> },
      { name: "Buttons", component: <Buttons /> },
      { name: "Images", component: <Images /> },
      { name: "Tables", component: <Tables /> },
      { name: "Forms", component: <Forms /> },
      { name: "Checks & Radios", component: <ChecksRadios /> },
      { name: "Select", component: <Select /> },
      { name: "Sliders", component: <Sliders /> },
      { name: "Validations", component: <Validations /> },
      { name: "Cards", component: <Cards /> },
    ];
  } else {
    // List of sections for the 'Components' group
    listOfSections = [
      { name: "Accordion", component: <Accordion /> },
      { name: "Expand/Collapse", component: <ExpandCollapse /> },
      { name: "Alerts", component: <Alerts /> },
      { name: "Badge", component: <Badge /> },
      { name: "Buttons", component: <Buttons /> },
      { name: "Button Group", component: <ButtonGroup /> },
      { name: "Dropdown", component: <Dropdown /> },
      { name: "Carousel", component: <Carousel /> },
      { name: "List Group", component: <ListGroups /> },
      { name: "Modal", component: <Modal /> },
      { name: "Masonry", component: <Masonry /> },
    ];
  }

  // We receive a section name to be displayed
  const targetSection = props.targetSection;
  return fetchSection(targetSection, listOfSections);
};

// Function to fetch the section's content
const fetchSection = (targetSection, listOfSections) => {
  return (
    <>
      {/* First we go through the entire list/array of sections */}
      {listOfSections.map((section) => {
        if (section.name === targetSection || targetSection === "All") {
          // If section name = the target section (OR if we need to display all sections)
          // Then we render that element from the array
          return <div key={section.name}>{section.component}</div>;
        }
      })}
    </>
  );
};

export default LoadSection;
