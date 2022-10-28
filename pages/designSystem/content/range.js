const Range = () => {
    return ( 
        <>
        <div className="row">
        <div className="col-sm-12 col-md-3 text-md-end mb-5">
            <i className="fa-light fa-square-sliders fa-2xl mt-3"></i>
            <h3 className="mt-3">Range</h3>
        </div>
        <div className="col-sm-12 col-md-9">
            <h3 className="border-bottom mb-4">Overview</h3>
            <div className="mb-5">
                <label htmlFor="customRange1" className="form-label">Example range</label>
                <input type="range" className="form-range" id="customRange1" />

                <label htmlFor="disabledRange" className="form-label">Disabled range</label>
                <input type="range" className="form-range" id="disabledRange" disabled/>

                <label htmlFor="customRange2" className="form-label">Min &amp; Max</label>
                <input type="range" className="form-range" min="0" max="5" id="customRange2"/>

                <label htmlFor="customRange3" className="form-label">Steps</label>
                <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>                
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Range;