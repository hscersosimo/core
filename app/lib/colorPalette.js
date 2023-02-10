function colorPalette(mode) {
  // List of colors to be displayed in the
  const mainColorsArray = [
    {
      name: "indigo",
      desc: "Primary",
      class: "primary",
      link: "white",
    },
    {
      name: "teal",
      desc: "Secondary",
      class: "secondary",
      link: "white",
    },
    {
      name: "purple",
      desc: "Tertiary",
      class: "tertiary",
      link: "white",
    },
    {
      name: "cyan",
      desc: "Info",
      class: "info",
      link: "white",
    },
    {
      name: "green",
      desc: "Success",
      class: "success",
      link: "white",
    },
    {
      name: "orange",
      desc: "Warning",
      class: "warning",
      link: "white",
    },
    {
      name: "red",
      desc: "Danger",
      class: "danger",
      link: "white",
    },
    {
      name: "gray",
      desc: "Warm gray",
      class: "gray",
      link: "primary",
    },
  ];

  const extraColorsArray = [
    {
      name: "body",
      desc: "Background",
      class: "body",
      link: "primary",
    },
    {
      name: "body",
      desc: "Text",
      class: "body-text",
      link: "white",
    },
    {
      name: "muted",
      desc: "Muted",
      class: "muted",
      link: "primary",
    },
    {
      name: "light",
      desc: "Light",
      class: "light",
      link: "primary",
    },
    {
      name: "dark",
      desc: "Dark",
      class: "dark",
      link: "white",
    },
    {
      name: "black",
      desc: "Black",
      class: "black",
      link: "white",
    },
    {
      name: "white",
      desc: "White",
      class: "white",
      link: "primary",
    },
  ];

  if (mode == "all") {
    const allColorsArray = [...mainColorsArray]; // create a copy of the array
    allColorsArray.push(...extraColorsArray);
    return allColorsArray;
  }
  if (mode == "extra") {
    return extraColorsArray;
  }

  // If no mode is defined, we return the main colors array
  return mainColorsArray;
}

export default colorPalette;
