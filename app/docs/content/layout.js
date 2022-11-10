import Link from "next/link";

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="mt-5 mb-2 fs-7">
              <Link href="/docs">
                <i className="fa-solid fa-arrow-left"></i> Back to Docs
              </Link>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;
