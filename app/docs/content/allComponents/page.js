import TypographyPage from "../typography/page";
import AlertsToastsPage from "../alertsToasts/page";
import BadgesPage from "../Badges/page";
import CardsPage from "../Cards/page";
import CarouselPage from "../Carousel/page";
import ModalsPage from "../Modals/page";
import ProgressBarsPage from "../ProgressBars/page";
import SpinnersPage from "../Spinners/page";
import TooltipsPopoversPage from "../TooltipsPopovers/page";

const AllComponents = () => {
  return (
    <>
      <h1 className="mb-3">Components</h1>
      <TypographyPage />
      <AlertsToastsPage />
      <BadgesPage />
      <CardsPage />
      <CarouselPage />
      <ModalsPage />
      <ProgressBarsPage />
      <SpinnersPage />
      <TooltipsPopoversPage />
    </>
  );
};

export default AllComponents;
