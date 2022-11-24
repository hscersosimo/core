import Link from "next/link";

const Docs = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="display-3 my-5">Design System</div>
            <p className="">
              A design system is a set of standards to manage design at scale by
              reducing redundancy while creating a shared language and visual
              consistency across different pages and channels.
            </p>
            <p className="">
              Created by the Design Team - IT Panel Products &amp; Platforms -
              Global Panels. Got any questions? Contact us at{" "}
              <a href="mailto:iis-design@ipsos.com">iis-design@ipsos.com</a>
            </p>
            <div className="row my-5">
              <div className="col">
                <div className="text-center p-4 border">
                  <div className="fs-1">
                    <i class="fa-light fa-palette"></i>
                  </div>
                  <Link className="fs-3" href="/docs/content/all_styles">
                    Styles
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="text-center p-4 border">
                  <div className="fs-1">
                    <i class="fa-light fa-list"></i>
                  </div>
                  <Link className="fs-3" href="/docs/content/all_components">
                    Components
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
