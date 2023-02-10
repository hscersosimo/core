import colorPalette from "../../../lib/colorPalette";

const ExtraColors = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("extra");
  return (
    <>
      <div className="d-flex justify-content-start flex-wrap">
        {colorPaletteArray.map((color, i) => {
          return (
            <div key={i} className="p-2 mb-3 text-center">
              <div
                className={"rounded bg-" + color.class}
                style={{ height: "100px", width: "100px" }}
              ></div>
              <div>
                <div className="fw-bold text-capitalize mt-2">{color.name}</div>
                <div className="fs-7 text-dark"> {color.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExtraColors;
