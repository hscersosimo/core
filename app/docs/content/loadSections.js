"use client";
import React from "react";
import { useState } from "react";
import Typography from "./typography/page";
import Images from "./images/page";
import Tables from "./tables/page";

// Load sections
// If the module gets a parameter,
// we load that specific section.
// Otherwise we load ALL by default.

const LoadSection = (props) => {
  // First we define our ListOfSections
  // Modify this list if you need to add/remove sections.
  const listOfSections = [<Typography />, <Images />, <Tables />];
  // const listOfSections = [
  //   { section: "Typography", component: <Typography /> },
  //   { section: "Images", component: <Images /> },
  //   { section: "Tables", component: <Tables /> },
  // ];

  // We receive a props.section and do something with it
  const section = props.section;
  if (section == "All") {
    // If section = ALL we load everything
    // We also pass an array with the entire list of sections to the function
    return listOfSections;
  } else {
    // Otherwise we load a specific one
    return loadSpecificSection(section, listOfSections);
  }
};

// Function to load a specific section
const loadSpecificSection = (props) => {
  console.log(section);
};

export default LoadSection;
