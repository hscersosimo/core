"use client";
import { useState } from "react";

const SubContainer = (props) => {
  const [padding, setPadding] = useState(props.padding || "p-5");
  const [margin, setMargin] = useState(props.margin || "mb-5");

  return (
    <>
      <div className={"bg-gray-100 rounded " + padding + " " + margin}>
        {props.children}
      </div>
    </>
  );
};

export default SubContainer;
