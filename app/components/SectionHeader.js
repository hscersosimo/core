const SectionHeader = (props) => {
  const name = props.name;

  return (
    <>
      <h1 className="mb-4 pb-1">
        <i className="fa-solid fa-slash-forward text-secondary"></i>{" "}
        <span>{name}</span>
      </h1>
    </>
  );
};

export default SectionHeader;
