import dynamic from 'next/dynamic'
import { Suspense } from 'react';

const DsSubLayout = (props) => {

  // Import should be a variable
  const DynamicComponent = dynamic(() => import('../content/typography'), {
    suspense: true,
  })
  console.log(props.path)

  return (
    <>
      <div className="row mb-6 gx-5">
        <div className="col-sm-12 col-md-3 text-md-end mb-5">
          <i className={"fa-light " + props.icon + " fa-2xl mt-3"}></i>
          <h2 className="mt-3">{props.section}</h2>
        </div>
        <div className="col-sm-12 col-md-9">
          <Suspense fallback={`Loading...`}>
            <DynamicComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default DsSubLayout;
