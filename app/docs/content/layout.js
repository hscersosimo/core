import docsNavigation from "../../lib/docsNavigation";
import Link from "next/link";

const ContentLayout = ({ children }) => {
  // brings an array with the navigation info
  const docsNavigationArray = docsNavigation();
  let prevMain;

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div>{children}</div>
          </div>

          <div className="col-sm-3">
            <div className="shadow-sm rounded bg-white p-3">
              {docsNavigationArray.map((page, index) => {
                let prevMain = null;
                if (index > 0) {
                  prevMain = docsNavigationArray[index - 1].main;
                  <NavGroup main={page.main}>
                    {docsNavigationArray
                      .filter((p) => p.main === page.main)
                      .map((p) => (
                        <NavItem file={p.file} />
                      ))}
                  </NavGroup>;
                }
                if (prevMain !== page.main) {
                  return (
                    <NavGroup main={page.main}>
                      {docsNavigationArray
                        .filter((p) => p.main === page.main)
                        .map((p) => (
                          <NavItem file={p.file} name={p.name} desc={p.desc} />
                        ))}
                    </NavGroup>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;

const NavGroup = (props) => {
  return (
    <>
      <div className="mb-4">
        <div className="fw-bold fs-7 border-bottom text-capitalize mb-3">
          {props.main}
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

const NavItem = (props) => {
  return (
    <>
      <div className="mb-2">
        <Link href={"/docs/content/" + props.file}>{props.name}</Link>
        <div className="fs-7 text-light">{props.desc}</div>
      </div>
    </>
  );
};
