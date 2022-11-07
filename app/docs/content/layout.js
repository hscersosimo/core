import ContentSidebar from "./sidebar";

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ContentSidebar />
          </div>
          <div className="col-9">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;
