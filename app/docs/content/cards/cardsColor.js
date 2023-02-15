import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";

const CardsColorPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("all");
  return (
    <>
      <Container title="Color & backgrounds">
        <div className="row gy-2 mb-5">
          {colorPaletteArray.map((color, i) => (
            <div className="col-xs-12 col-sm-6">
              <div key={i} className={"card text-bg-" + color.class + " mb-3"}>
                <div className="card-header fs-7 fw-bold">
                  {color.desc} card header
                </div>
                <div className="card-body">
                  <h5 className="card-title">{color.desc} card title</h5>
                  <p className="card-text fs-7">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4>Outline</h4>
        <SubContainer margin="mb-0">
          <div className="card border-info text-info">
            <div className="card-header text-bg-info border-info fw-bold fs-7">
              Header
            </div>
            <div className="card-body">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer bg-white border-info">Footer</div>
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default CardsColorPage;
