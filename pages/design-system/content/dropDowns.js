const Dropdowns = () => {
    return ( 
        <>      
        <div className="row">
            <div className="col-sm-12 col-md-3 text-md-end mb-5">
                <i className="fa-light fa-list-dropdown fa-2xl mt-3"></i>
                <h3 className="mt-3">Dropdowns</h3>
            </div>
            <div className="col-sm-12 col-md-9">
                
                <h3 className="border-bottom">Addons</h3>
                <div className="mt-3 mb-5">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="input-group">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action before</a></li>
                            <li><a className="dropdown-item" href="#">Another action before</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons"/>
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>


                    <div className="mt-3 mb-5">

                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-secondary">Action</button>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                    </div>
                    
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                        <button type="button" className="btn btn-outline-secondary">Action</button>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                    </div>



                </div>



            </div>
        </div>
        </>
     );
}
 
export default Dropdowns;



