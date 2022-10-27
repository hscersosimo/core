const Select = () => {
    return ( 
        <>      
        <div className="row">
            <div className="col-sm-12 col-md-3 text-md-end mb-5">
                <i className="fa-light fa-list-dropdown fa-2xl mt-3"></i>
                <h3 className="mt-3">Select</h3>
            </div>
            <div className="col-sm-12 col-md-9">

            <h3 className="border-bottom">Default Select</h3>
            <div className="mb-5">

                <select className="form-select mb-3" aria-label="Default select example">
                    <option defaultValue>Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>

                <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option defaultValue>Open this select menu</option>
                        <option defaultValue="1">One</option>
                        <option defaultValue="2">Two</option>
                        <option defaultValue="3">Three</option>
                    </select>
                    <label htmlFor="floatingSelect">Floating Label works with selects</label>
                </div>

            </div>

            <h3 className="border-bottom">Sizing</h3>
            <div className="mb-5">
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option defaultValue>Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>

                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>          
            </div>  

            <h3 className="border-bottom">Disabled</h3>
            <div className="mb-5">
                <select className="form-select" aria-label="Disabled select example" disabled>
                    <option defaultValue>Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                </select>
            </div>              

            <h3 className="border-bottom">Custom Select</h3>
            <div className="mb-5">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    <select className="form-select" id="inputGroupSelect01">
                    <option defaultValue>Choose...</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                    </select>
                </div>
                
                <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                    <option defaultValue>Choose...</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                    </select>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                </div>
                
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                    <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option defaultValue>Choose...</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                    </select>
                </div>
                
                <div className="input-group">
                    <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option defaultValue>Choose...</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                    </select>
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>

            <h3 className="border-bottom">Datalists</h3>
            <div className="mb-5">
                <p>Datalists allow you to create a group of <code>options</code> that can be accessed (and autocompleted) from within an <code>input</code>. These are similar to <code>select</code> elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support htmlFor <code>datalist</code> elements, their styling is inconsistent at best.</p>
                <label htmlFor="exampleDataList" className="form-label">Datalist example</label>                
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                <datalist id="datalistOptions">
                    <option defaultValue="San Francisco"/>
                    <option defaultValue="New York"/>
                    <option defaultValue="Seattle"/>
                    <option defaultValue="Los Angeles"/>
                    <option defaultValue="Chicago"/>
                </datalist>
            </div>            

            </div>
        </div>
        </>
     );
}
 
export default Select;