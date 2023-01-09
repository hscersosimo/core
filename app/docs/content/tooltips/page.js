"use client";
import SectionHeader from "../_ui/SectionHeader";
import Container from "../_ui/Container";
import { useEffect } from "react";

const Tooltips = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  });

  return (
    <>
      <SectionHeader name="Tooltips" icon="sidebar-flip" />
      <Container>
        <div className="container p-5">
          <button
            type="button"
            className="btn btn-secondary me-2"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          >
            Tooltip on top
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Tooltip on right"
          >
            Tooltip on right
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tooltip on bottom"
          >
            Tooltip on bottom
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Tooltip on left"
          >
            Tooltip on left
          </button>
        </div>
      </Container>
    </>
  );
};

export default Tooltips;
