import Link from "next/link";
import Image from "next/image";
import docsNavigation from "../lib/docsNavigation";

const Docs = () => {
  // brings an array with the navigation info
  const docsNavigationArray = docsNavigation();
  let prevMain;
  return (
    <>
      <div className="bg-white py-5">
        <div className="container">
          <div className="mb-4">
            <Image
              width={125}
              height={94}
              alt="Design System Logo"
              src="/images/logos/logo_designsystem.png"
            />
          </div>

          <h1>
            Welcome to the Ipsos{" "}
            <span className="text-secondary">Design System</span> website
          </h1>
          <div>
            <p className="fs-5">
              Created and maintained by the <strong>Design Team</strong> - IT
              Panel Products &amp; Platforms - Global Panels.
            </p>
            <p>
              Here, you'll find all the tools and resources you need to create
              cohesive and consistent designs that align with our brand
              guidelines. You can explore our curated selection of colors,
              typefaces, and icons, as well as learn about the best practices
              for using them in your designs.
            </p>
            <p className="mb-0">
              Got any questions? Contact us at{" "}
              <a href="mailto:iis-design@ipsos.com">iis-design@ipsos.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
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
      <div className="bg-white shadow-sm p-5 mb-3">
        <h4 className="text-capitalize mb-3">
          <i className="fa-solid fa-slash-forward text-secondary me-1"></i>
          {props.group}
        </h4>
        <div>{props.children}</div>
      </div>
    </>
  );
};

const NavItem = (props) => {
  return (
    <div key={props.title} className="p-3 border-top">
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
  );
};
