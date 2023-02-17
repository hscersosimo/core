import Container from "../../../components/Container";
import SubContainer from "../../../components/SubContainer";
import colorPalette from "../../../lib/colorPalette";

const ListGroupColorPage = () => {
  // brings an array with the color palette
  const colorPaletteArray = colorPalette("all");
  return (
    <>
      <Container title="Color">
        <SubContainer margin="mb-0">
          <div className="list-group">
            {colorPaletteArray.map((color, i) => (
              <a
                key={i}
                href="#"
                className={"list-group-item list-group-item-" + color.class}
              >
                A {color.class} list group item
              </a>
            ))}
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default ListGroupColorPage;
