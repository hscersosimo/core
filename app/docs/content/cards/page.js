import SectionHeader from "../../../components/SectionHeader";
import CardsExamplesPage from "./cardsExamples";
import CardsColorPage from "./cardsColor";
import CardsLayoutPage from "./cardsLayout";

const CardsPage = () => {
  return (
    <>
      <SectionHeader name="Cards" />
      <CardsExamplesPage />
      <CardsColorPage />
      <CardsLayoutPage />
    </>
  );
};

export default CardsPage;
