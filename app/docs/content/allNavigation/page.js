import NavbarPage from "../navbar/page";
import OffcanvasPage from "../offcanvas/page";
import ListGroupsPage from "../listGroups/page";
import ExpandCollapsePage from "../expandCollapse/page";
import TabsPage from "../tabs/page";
import PaginationPage from "../pagination/page";
import ScrollSpyPage from "../scrollspy/page";

const AllNavigation = () => {
  return (
    <>
      <h1 className="mb-3">Navigation</h1>
      <NavbarPage />
      <OffcanvasPage />
      <ListGroupsPage />
      <ExpandCollapsePage />
      <TabsPage />
      <PaginationPage />
      <ScrollSpyPage />
    </>
  );
};

export default AllNavigation;
