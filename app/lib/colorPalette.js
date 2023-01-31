function colorPalette(mode) {
  // List of colors to be displayed in the
  const colorsArray = [
    {
      name: "indigo",
      description: "Primary",
      class: "primary",
      link: "white",
    },
    {
      name: "teal",
      description: "Secondary",
      class: "secondary",
      link: "white",
    },
    {
      name: "purple",
      description: "Tertiary",
      class: "tertiary",
      link: "white",
    },
    {
      name: "cyan",
      description: "Info",
      class: "info",
      link: "white",
    },
    {
      name: "green",
      description: "Success",
      class: "success",
      link: "white",
    },
    {
      name: "orange",
      description: "Warning",
      class: "warning",
      link: "white",
    },
    {
      name: "red",
      description: "Danger",
      class: "danger",
      link: "white",
    },
    {
      name: "gray",
      description: "Warm gray",
      class: "gray",
      link: "primary",
    },
  ];

  if (mode == "full") {
    const fullColorsArray = [...colorsArray]; // create a copy of the array
    fullColorsArray.push(
      {
        name: "body",
        description: "body",
        class: "body",
        link: "primary",
      },
      {
        name: "muted",
        description: "muted",
        class: "muted",
        link: "primary",
      },
      {
        name: "light",
        description: "light",
        class: "light",
        link: "primary",
      },
      {
        name: "dark",
        description: "dark",
        class: "dark",
        link: "white",
      },
      {
        name: "black",
        description: "black",
        class: "black",
        link: "white",
      },
      {
        name: "white",
        description: "white",
        class: "white",
        link: "primary",
      }
    );
    return fullColorsArray; // return the fullColorsArray
  }

  return colorsArray;
}

export default colorPalette;
