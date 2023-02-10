const Container = (props) => {
  return (
    <>
      <div className="mb-5 rounded shadow-sm bg-white">
        <div className="border-bottom">
          <div className="px-4 pt-4 pb-2">
            <h2 className="mb-1">
              <i className="fa-solid fa-grip-lines-vertical text-tertiary me-1"></i>{" "}
              {props.title}
            </h2>
            <p className="text-light mt-3">{props.desc}</p>
          </div>
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </>
  );
};

export default Container;
