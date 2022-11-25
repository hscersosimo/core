import Link from "next/link";

const SectionHeader = (props) => {
  const name = props.name;
  const icon = "fa-light fa-" + props.icon;

  return (
    <>
      <h5 className="mb-4 pb-1 border-bottom">
        <i className={icon}></i> {name}
      </h5>
    </>
  );
};

export default SectionHeader;
