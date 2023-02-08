import Link from "next/link";
import docsNavigation from "../lib/docsNavigation";

const Docs = () => {
  // brings an array with the navigation info
  const docsNavigationArray = docsNavigation();
  let prevMain;
  return (
    <>
      <div className="container">
        <div className="display-1 mb-3">Design System</div>
        <div className="border-top pt-4 mb-4">
          <h2 className="m-0">
            Welcome to the <span className="text-secondary">Ipsos Design</span>{" "}
            website
          </h2>
          <p className="text-dark mt-1 mb-0">
            Created and maintained by the <strong>Design Team</strong> - IT
            Panel Products &amp; Platforms - Global Panels.
          </p>
        </div>
        <div className="mb-5">
          <p>
            Here, you'll find all the tools and resources you need to create
            cohesive and consistent designs that align with our brand
            guidelines. You can explore our curated selection of colors,
            typefaces, and icons, as well as learn about the best practices for
            using them in your designs.
          </p>
          <p>
            Got any questions? Contact us at{" "}
            <a href="mailto:iis-design@ipsos.com">iis-design@ipsos.com</a>
          </p>
        </div>

        <div>
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
      </div>
      {/* Container */}
    </>
  );
};

export default Docs;

const NavGroup = (props) => {
  const originGroup = props.group;
  // Replacing " " (space) to "" empty space
  const group = originGroup.replace(/ /g, "");

  return (
    <>
      <h5 className="text-capitalize">
        <i className="fa-solid fa-slash-forward text-secondary me-1"></i>
        {props.group}
      </h5>
      <div className="row mb-5">{props.children}</div>
    </>
  );
};

const NavItem = (props) => {
  return (
    <div
      key={props.title}
      className="col-sm-6 col-md-3 g-2 d-flex align-items-stretch"
    >
      <div className="rounded shadow-sm bg-white w-100 p-3">
        <h6 className="mb-1">
          <Link
            className="text-decoration-none"
            href={"/docs/content/" + props.file}
          >
            <i className="fa-solid fa-grip-lines-vertical text-tertiary me-1"></i>
            {props.name}
          </Link>
        </h6>
        <div className="fs-7 text-light">{props.desc}</div>
      </div>
    </div>
  );
};
