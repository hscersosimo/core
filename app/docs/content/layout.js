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
          <div className="col-sm-3">
            {docsNavigationArray.map((page, index) => {
              let prevMain = null;
              if (index > 0) {
                prevMain = docsNavigationArray[index - 1].group;
                <NavGroup key={index} group={page.group}>
                  {docsNavigationArray
                    .filter((p) => p.group === page.group)
                    .map((p) => (
                      <NavItem key={p.file} file={p.file} />
                    ))}
                </NavGroup>;
              }
              if (prevMain !== page.group) {
                return (
                  <NavGroup key={index} group={page.group}>
                    {docsNavigationArray
                      .filter((p) => p.group === page.group)
                      .map((p) => (
                        <NavItem
                          key={p.file}
                          file={p.file}
                          name={p.name}
                          desc={p.desc}
                        />
                      ))}
                  </NavGroup>
                );
              }
              return null;
            })}
          </div>
          <div className="col-sm-9">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLayout;

const NavGroup = (props) => {
  const originGroup = props.group;
  // Replacing " " (space) to "" empty space
  const group = originGroup.replace(/ /g, "");

  return (
    <>
      <div className="border-top py-3">
        <div className="text-capitalize">
          <a
            className="text-dark"
            data-bs-toggle="collapse"
            href={"#collapseNav" + group}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="fa-solid fa-caret-right me-1"></i> {props.group}
          </a>
        </div>
        <div className="collapse" id={"collapseNav" + group}>
          <div className="mt-2 ms-3">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const NavItem = (props) => {
  return (
    <div>
      <Link
        className="fw-normal text-body"
        href={"/docs/content/" + props.file}
      >
        {props.name}
      </Link>
      {/* <div className="fs-7 text-light">{props.desc}</div> */}
    </div>
  );
};
