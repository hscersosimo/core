const SectionHeader = (props) => {
  const name = props.name;
  const icon = "fa-light fa-" + props.icon;

  return (
    <>
      <h1 className="mb-4">
        <i className={icon}></i> {name}
      </h1>
    </>
  );
};

export default SectionHeader;
