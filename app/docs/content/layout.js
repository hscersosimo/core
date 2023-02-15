import DocsSideNav from "./_local/DocsSideNav";
import Image from "next/image";
import Link from "next/link";

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <div className="sticky-top" style={{ alignSelf: "start" }}>
              <div className="pt-4 mb-4">
                <Link href="/docs">
                  <Image
                    width={125}
                    height={94}
                    alt="Design System Logo"
                    src="/images/logos/logo_designsystem.png"
                  />
                </Link>
              </div>
              <DocsSideNav />
            </div>
          </div>
          <div className="col-sm-9 mt-5">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;
