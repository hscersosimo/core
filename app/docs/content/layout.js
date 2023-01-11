const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;
