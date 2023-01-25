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
      text: "View all brand styles.",
      url: "/docs/content/all_styles",
    },
    {
      title: "Fonts",
      text: "Standardized typeface options.",
      url: "/docs/content/fonts",
    },
    {
      title: "Icons",
      text: "Visual aids for UI elements.",
      url: "/docs/content/icons",
    },
    {
      title: "Colors",
      text: "Consistent color palette.",
      url: "/docs/content/color",
    },
  ];
  const pages_sections = [
    {
      title: "All Sections",
      text: "View all sections.",
      url: "/docs/content/all_sections",
    },
    {
      title: "Typography",
      text: "Text styling guidelines.",
      url: "/docs/content/typography",
    },
    {
      title: "Links",
      text: "Navigation and action elements.",
      url: "/docs/content/links",
    },
    {
      title: "Images",
      text: "Guidelines for using images.",
      url: "/docs/content/images",
    },
    {
      title: "Tables",
      text: "Structured data display.",
      url: "/docs/content/tables",
    },
    {
      title: "Forms",
      text: "Interactive data input.",
      url: "/docs/content/forms",
    },
    {
      title: "Checks & Radios",
      text: "Selection options for forms.",
      url: "/docs/content/checks_radios",
    },
    {
      title: "Select",
      text: "Dropdown options for forms.",
      url: "/docs/content/select",
    },
    {
      title: "Sliders",
      text: "Range selection inputs.",
      url: "/docs/content/sliders",
    },
    {
      title: "Validations",
      text: "Data input error handling.",
      url: "/docs/content/validations",
    },
    {
      title: "Cards",
      text: "Flexible content containers.",
      url: "/docs/content/cards",
    },
    {
      title: "Borders",
      text: "Design elements for layout.",
      url: "/docs/content/borders",
    },
  ];

  const pages_components = [
    {
      title: "All Components",
      text: "View all components.",
      url: "/docs/content/all_components",
    },
    {
      title: "Accordion",
      text: "Collapsible content sections.",
      url: "/docs/content/accordion",
    },
    {
      title: "Expand & collapse",
      text: "Toggling content visibility.",
      url: "/docs/content/expand_collapse",
    },
    {
      title: "Alerts",
      text: "Informational or warning messages.",
      url: "/docs/content/alerts",
    },
    {
      title: "Badges",
      text: "Small count or status indicators.",
      url: "/docs/content/badge",
    },
    {
      title: "Buttons",
      text: "Interactive UI elements.",
      url: "/docs/content/buttons",
    },
    {
      title: "Button group",
      text: "Grouped button options.",
      url: "/docs/content/button_group",
    },
    {
      title: "Dropdown",
      text: "Menu of options.",
      url: "/docs/content/dropdown",
    },
    {
      title: "Carousel",
      text: "Sliding image or content display.",
      url: "/docs/content/carousel",
    },
    {
      title: "List groups",
      text: "Structured lists of items.",
      url: "/docs/content/list_group",
    },
    {
      title: "Modals",
      text: "Pop-up content or dialogs.",
      url: "/docs/content/modal",
    },
    {
      title: "Navbar",
      text: "Website navigation header.",
      url: "/docs/content/navbar",
    },
    {
      title: "Tabs",
      text: "Navigation between content sections.",
      url: "/docs/content/tabs",
    },
    {
      title: "Offcanvas",
      text: "Hidden sidebar navigation.",
      url: "/docs/content/offcanvas",
    },
    {
      title: "Pagination",
      text: "Content split across multiple pages.",
      url: "/docs/content/pagination",
    },
    {
      title: "Popovers",
      text: "Small overlay content.",
      url: "/docs/content/popovers",
    },
    {
      title: "Tooltips",
      text: "Hover-triggered information.",
      url: "/docs/content/tootips",
    },
    {
      title: "Progress bars",
      text: "Visual representation of progress.",
      url: "/docs/content/progress",
    },
    {
      title: "Scroll spy",
      text: "Navigation based on scrolling position.",
      url: "/docs/content/scrollspy",
    },
    {
      title: "Spinners",
      text: "Loading indicators.",
      url: "/docs/content/spinners",
    },
    {
      title: "Toasts",
      text: "Non-blocking notifications.",
      url: "/docs/content/toasts",
    },
    {
      title: "Utilities",
      text: "Helper classes for layout and spacing.",
      url: "/docs/content/utilities",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="display-3 mb-3">Design System</div>
        <h5>Welcome to our design system website</h5>
        <p className="">
          Here, you'll find all the tools and resources you need to create
          cohesive and consistent designs that align with our brand guidelines.
          Our design system includes guidelines for color, typography, icons,
          and more. You can explore our curated selection of colors, typefaces,
          and icons, as well as learn about the best practices for using them in
          your designs. We hope this website will serve as a valuable resource
          for all designers and developers working on projects for our brand.
          Let's create beautiful and effective designs together!
        </p>
        <p className="mb-5">
          Created by the Design Team - IT Panel Products &amp; Platforms -
          Global Panels.
          <br />
          Got any questions? Contact us at{" "}
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
