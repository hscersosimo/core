"use client";
import { useState } from "react";

const SubContainer = (props) => {
  const initialPadding = props?.padding || "p-5";
  const [paddingState, setPadding] = useState(initialPadding);

  const initialMargin = props?.margin || "mb-5";
  const [marginState, setMargin] = useState(initialMargin);

  return (
    <>
      <div
        className={"bg-gray-100 rounded " + paddingState + " " + marginState}
      >
        {props.children}
      </div>
    </>
  );
};

export default SubContainer;
