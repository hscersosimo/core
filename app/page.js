import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="mt-5">Intro</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              explicabo itaque doloribus eos quasi dolor aliquid suscipit quas
              totam natus.
            </p>
            <Link href="/docs/">Docs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
