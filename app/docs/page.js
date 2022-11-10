import LoadSections from "./content/LoadSections";

const Docs = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="mt-5">Welcome to Docs</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              explicabo itaque doloribus eos quasi dolor aliquid suscipit quas
              totam natus.
            </p>
            <div>
              <LoadSections targetSection="All" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
