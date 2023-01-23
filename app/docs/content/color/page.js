import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";

const ColorPage = (props) => {
  const color_palette = ["indigo", "teal"];
  return (
    <>
      <SectionHeader name="Color" icon="book" />

      <Container>
        <div className="row">
          <div className="col">
            {color_palette.map((color) => (
              <div className="mb-5">
                <h5 className="text-capitalize">{color}</h5>
                {[...Array(10)].map((e, index) => (
                  <div
                    className={
                      "d-flex justify-content-between px-3 " +
                      " bg-" +
                      color +
                      "-" +
                      index +
                      "00"
                    }
                    style={{
                      height: "44px",
                      lineHeight: "44px",
                    }}
                    key={index}
                  >
                    {color}-{index}00
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ColorPage;
