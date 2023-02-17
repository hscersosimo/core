"use client";
import docsNavigation from "../../../lib/docsNavigation";
import Link from "next/link";
import { useState } from "react";

const DocsSideNav = () => {
  // brings an array with the navigation info
  const docsNavigationArray = docsNavigation();
  const [expandedGroup, setExpandedGroup] = useState(null);

  return (
    <>
      {docsNavigationArray.map((page, index) => {
        let prevMain = null;
        if (index > 0) {
          prevMain = docsNavigationArray[index - 1].group;
          <SideNavGroup
            key={index}
            group={page.group}
            setExpandedGroup={setExpandedGroup}
          >
            {docsNavigationArray
              .filter((p) => p.group === page.group)
              .map((p) => (
                <SideNavItem key={p.file} file={p.file} />
              ))}
          </SideNavGroup>;
        }
        if (prevMain !== page.group) {
          return (
            <SideNavGroup
              key={index}
              group={page.group}
              setExpandedGroup={setExpandedGroup}
            >
              {docsNavigationArray
                .filter((p) => p.group === page.group)
                .map((p) => (
                  <SideNavItem
                    key={p.file}
                    file={p.file}
                    name={p.name}
                    desc={p.desc}
                  />
                ))}
            </SideNavGroup>
          );
        }
        return null;
      })}
    </>
  );
};

export default DocsSideNav;

const SideNavGroup = (props) => {
  const originGroup = props.group;
  // Replacing " " (space) to "" empty space
  const group = originGroup.replace(/ /g, "");
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
    props.setExpandedGroup(expanded ? null : props.group);
  };

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
            onClick={toggleExpanded}
          >
            <i
              className={
                "fa-solid fa-caret-" + (expanded ? "down" : "right") + " me-1"
              }
            ></i>{" "}
            {props.group}
          </a>
        </div>
        <div
          className={"collapse" + (expanded ? " show" : "")}
          id={"collapseNav" + group}
        >
          <div className="mt-2 ms-3">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const SideNavItem = (props) => {
  return (
    <div>
      <Link
        className="fw-normal text-body"
        href={"/docs/content/" + props.file}
      >
        {props.name}
      </Link>
    </div>
  );
};
