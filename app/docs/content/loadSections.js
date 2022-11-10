import React from "react";
import Typography from "./typography/page";
import Images from "./images/page";
import Tables from "./tables/page";

const LoadSection = (props) => {
  // First we define our ListOfSections
  // Modify this list if you need to add/remove sections.
  const listOfSections = [
    { name: "Typography", component: <Typography /> },
    { name: "Images", component: <Images /> },
    { name: "Tables", component: <Tables /> },
  ];

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
