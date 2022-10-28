const Forms = () => {
    return ( 
        <>      
        <div className="row">
            <div className="col-sm-12 col-md-3 text-md-end mb-5">
                <i className="fa-light fa-ballot-check fa-2xl mt-3"></i>
                <h3 className="mt-3">Forms</h3>
            </div>
            <div className="col-sm-12 col-md-9">

            <h3 className="border-bottom">Form Elements &amp; Layout</h3>
            <form className="panel mt-3">
                <h5 className="mt-3 mb-4">Form Title</h5>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                    <div id="passwordHelp" className="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control"  placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Example textarea</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="mt-3 mb-4 row g-3 align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" />
                </div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                    </span>
                </div>
            </div>

            <form className="panel mb-5">
                <h5 className="mt-3 mb-4">Horizontal Form</h5>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"/>
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option1" defaultChecked/>
                            <label className="form-check-label">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2"/>
                            <label className="form-check-label">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option3" disabled/>
                            <label className="form-check-label">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox"/>
                    <label className="form-check-label">
                        Example checkbox
                    </label>
                    </div>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>




            <h3 className="border-bottom">Floating Labels</h3>
            <div className="mt-3 mb-5">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Password"/>
                    <label>Password</label>
                </div>
                <form className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="name@example.com" defaultValue="test@example.com"/>
                    <label>Input with defaultValue</label>
                </form>
                <form className="form-floating mb-3">
                    <input type="email" className="form-control is-invalid" placeholder="name@example.com" defaultValue="test@example.com"/>
                    <label>Invalid input</label>
                </form>

                <div className="form-floating mb-3">
                    <input type="email" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" readOnly className="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" defaultValue="name@example.com"/>
                    <label htmlFor="floatingPlaintextInput">Input with defaultValue</label>
                </div>             

                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username"/>
                    <label htmlFor="floatingInputGroup1">Username</label>
                    </div>
                </div>   
                <div className="input-group has-validation mb-3">
                    <span className="input-group-text">@</span>
                    <div className="form-floating is-invalid">
                        <input type="text" className="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required/>
                        <label htmlFor="floatingInputGroup2">Username</label>
                    </div>
                    <div className="invalid-feedback">
                    Please choose a username.
                    </div>
                </div>                
                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" defaultValue="mdo@example.com"/>
                            <label htmlFor="floatingInputGrid">Email address</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid">
                                <option defaultValue>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option defaultValue="2">Two</option>
                                <option defaultValue="3">Three</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Works with selects</label>
                        </div>
                    </div>
                </div>                

            </div>



            <h3 className="border-bottom">Input-Groups</h3>
            <div className="mt-3 mb-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                
                <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>
                
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
                </div>
                
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
                </div>
                
                <div className="input-group mb-3">
                    <span className="input-group-text">With textarea</span>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
 
                <label htmlFor="" className="form-label">Multiple Inputs</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>

                <label htmlFor="" className="form-label">Multiple addons</label>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
                
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                </div>

            </div>



            <div>
                <h3 className="border-bottom">Disabled</h3>
                <p>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing</p>

                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled/>
                </div>
                <div className="mb-5">
                    <input className="form-control" type="text" defaultValue="Disabled readOnly input" aria-label="Disabled input example" disabled readOnly/>
                </div>
            </div>

            <div className="mb-5">
            <form>
                <fieldset disabled>
                    <legend>Disabled fieldset example</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                        <select id="disabledSelect" className="form-select">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                            Can't check this
                        </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            </div>

            <h3 className="border-bottom">Sizing</h3>
            <div className="mb-5">
                <p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>

                <div className="mb-3">
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
                </div>
                <div className="mb-3">
                    <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
                </div>
                <div className="mb-3">
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>            
            </div>


            <h3 className="border-bottom">readOnly</h3>
            <div className="mb-5">

            <div className="my-3">
                <input className="form-control" type="text" defaultValue="readOnly input here... (you cannot change this text)" aria-label="readOnly input example" readOnly/>
            </div>

            <p>If you want to have <code>input readOnly</code> elements in your form styled as plain text, replace <code>.form-control</code> with <code>.form-control-plaintext</code> to remove the default form field styling and preserve the correct margin and padding.</p>

            <div className="row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com"/>
                </div>
            </div>
            </div>


            <h3 className="border-bottom">File Input</h3>
            <div className="mb-5">
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileDisabled" className="form-label">Disabled file input example</label>
                    <input className="form-control" type="file" id="formFileDisabled" disabled/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                </div>
                <div>
                    <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
            </div>

            <h3 className="border-bottom">Custom File Input</h3>
            <div className="mb-5">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01"/>
                </div>
                
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02"/>
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
                
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                    <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"/>
                </div>
                
                <div className="input-group">
                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                    <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                </div>

            </div>


        </div>
        </div>
        </>
     );
}
 
export default Forms;