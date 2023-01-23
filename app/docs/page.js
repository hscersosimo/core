import Link from "next/link";

const CardItem = (props) => {
  return (
    <>
      <div
        key={props.title}
        className="col-sm-6 col-md-3 col-lg-2 g-2 d-flex align-items-stretch"
      >
        <div className="border rounded p-3 w-100 bg-white">
          <h6 className="mb-1">
            <Link className="text-decoration-none" href={props.url}>
              {props.title}
            </Link>
          </h6>
          <div className="fs-7">{props.text}</div>
        </div>
      </div>
    </>
  );
};

const Docs = () => {
  const pages_style = [
    {
      title: "All Styles",
      text: "Check all brand style pages at once.",
      url: "/docs/content/all_styles",
    },
    {
      title: "Fonts",
      text: "Everything about the font(s) family.",
      url: "/docs/content/all_styles",
    },
    {
      title: "Icons",
      text: "Details about the icons pack, sizes, options, alignment.",
      url: "/docs/content/all_styles",
    },
    {
      title: "Colors",
      text: "Color palette plus accessibility guidelines (contrast ratios).",
      url: "/docs/content/all_styles",
    },
  ];
  const pages_sections = [
    {
      title: "All Sections",
      text: "Lorem ipsum",
      url: "/docs/content/all_sections",
    },
    {
      title: "Typography",
      text: "Lorem ipsum",
      url: "/docs/content/typography",
    },
    {
      title: "Links",
      text: "Lorem ipsum",
      url: "/docs/content/links",
    },
    {
      title: "Images",
      text: "Lorem ipsum",
      url: "/docs/content/images",
    },
    {
      title: "Tables",
      text: "Lorem ipsum",
      url: "/docs/content/tables",
    },
    {
      title: "Forms",
      text: "Lorem ipsum",
      url: "/docs/content/forms",
    },
    {
      title: "Checks & Radios",
      text: "Lorem ipsum",
      url: "/docs/content/checks_radios",
    },
    {
      title: "Select",
      text: "Lorem ipsum",
      url: "/docs/content/select",
    },
    {
      title: "Sliders",
      text: "Lorem ipsum",
      url: "/docs/content/sliders",
    },
    {
      title: "Validations",
      text: "Lorem ipsum",
      url: "/docs/content/validations",
    },
    {
      title: "Cards",
      text: "Lorem ipsum",
      url: "/docs/content/cards",
    },
    {
      title: "Borders",
      text: "Lorem ipsum",
      url: "/docs/content/borders",
    },
  ];

  const pages_components = [
    {
      title: "All Styles",
      text: "Check all brand style pages at once.",
      url: "/docs/content/all_styles",
    },
    {
      title: "Fonts",
      text: "Everything about the font(s) family.",
      url: "/docs/content/all_styles",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="display-3 mb-3">Design System</div>
        <p className="">
          A design system is a set of standards to manage design at scale by
          reducing redundancy while creating a shared language and visual
          consistency across different pages and channels.
        </p>
        <p className="mb-5">
          Created by the Design Team - IT Panel Products &amp; Platforms -
          Global Panels. Got any questions? Contact us at{" "}
          <a href="mailto:iis-design@ipsos.com">iis-design@ipsos.com</a>
        </p>

        <h2 className="border-bottom mb-0 pb-2">Brand styles</h2>
        <div className="row">
          {pages_style.map((page) => (
            <CardItem title={page.title} text={page.text} url={page.url} />
          ))}

          <h2 className="border-bottom mt-5 mb-0 pb-2">Sections</h2>
          <div className="row">
            {pages_sections.map((page) => (
              <CardItem title={page.title} text={page.text} url={page.url} />
            ))}
          </div>
          {/* Row */}

          <h2 className="border-bottom mt-5 mb-0 pb-2">Components</h2>
          <div className="row">
            {pages_components.map((page) => (
              <CardItem title={page.title} text={page.text} url={page.url} />
            ))}
          </div>
          {/* Row */}
        </div>
      </div>
      {/* Container */}
    </>
  );
};

export default Docs;
