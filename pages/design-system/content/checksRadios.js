const ChecksRadios = () => {
    return ( 
        <>      
        <div className="row">
            <div className="col-sm-12 col-md-3 text-md-end mb-5">
                <i className="fa-light fa-list-check fa-2xl mt-3"></i>
                <h3 className="mt-3">Checks &amp; Radios</h3>
            </div>
            <div className="col-sm-12 col-md-9">


            <h3 className="border-bottom">Checkboxes</h3>
            <div className="mb-5">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        defaultChecked checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled/>
                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                    Disabled checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" defaultChecked disabled/>
                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                    Disabled defaultChecked checkbox
                    </label>
                </div>
            </div>

            <h3 className="border-bottom">Radios</h3>
            <div className="mb-5">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Default radio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Default defaultChecked radio
                    </label>
                </div>
            </div>
            <div className="mb-5">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                        Disabled radio
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked disabled/>
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        Disabled defaultChecked radio
                    </label>
                </div>
            </div>

            <h3 className="border-bottom">Switches</h3>
            <div className="mb-5">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">defaultChecked switch checkbox input</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled defaultChecked switch checkbox input</label>
                </div>
            </div>

            <h3 className="border-bottom">Inline</h3>
            <div className="">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                </div>
            </div>
            <div className="mb-5">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                </div>
            </div>

            <h3 className="border-bottom">Reverse</h3>
            <div className="mb-5">
                <div className="form-check form-check-reverse">
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"/>
                    <label className="form-check-label" htmlFor="reverseCheck1">
                    Reverse checkbox
                    </label>
                </div>
                <div className="form-check form-check-reverse">
                    <input className="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled/>
                    <label className="form-check-label" htmlFor="reverseCheck2">
                    Disabled reverse checkbox
                    </label>
                </div>
                
                <div className="form-check form-switch form-check-reverse">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse switch checkbox input</label>
                </div>
            </div>

            <h3 className="border-bottom">Integration w/ input-groups</h3>
            <div className="mb-5">
                <div className="input-group my-3">
                    <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox htmlFor following text input"/>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with checkbox"/>
                </div>
                
                <div className="input-group">
                    <div className="input-group-text">
                    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button htmlFor following text input"/>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button"/>
                </div>
            </div>


            <h3 className="border-bottom">Checkbox Toggle Buttons</h3>
            <p>Create button-like checkboxes and radio buttons by using .btn styles rather than .form-check-label on the <code>label</code> elements. These toggle buttons can further be grouped in a button group if needed.</p>
            <div className="mb-5">
                <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off"/>
                <label className="btn btn-primary mx-1" htmlFor="btn-check">Single toggle</label>

                <input type="checkbox" className="btn-check" id="btn-check-2" defaultChecked autoComplete="off"/>
                <label className="btn btn-primary mx-1" htmlFor="btn-check-2">defaultChecked</label>

                <input type="checkbox" className="btn-check" id="btn-check-3" autoComplete="off" disabled/>
                <label className="btn btn-primary mx-1" htmlFor="btn-check-3">Disabled</label>
            </div>

            <h3 className="border-bottom">Radio Toggle Buttons</h3>
            <div className="mb-5">
                <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked/>
                <label className="btn btn-secondary mx-1" htmlFor="option1">defaultChecked</label>

                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"/>
                <label className="btn btn-secondary mx-1" htmlFor="option2">Radio</label>

                <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" disabled/>
                <label className="btn btn-secondary mx-1" htmlFor="option3">Disabled</label>

                <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"/>
                <label className="btn btn-secondary mx-1" htmlFor="option4">Radio</label>
            </div>
            
            <h3 className="border-bottom">Outlined styles variants</h3>
            <div className="mb-5">
                <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off"/>
                <label className="btn btn-outline-primary mx-1" htmlFor="btn-check-outlined">Single toggle</label>

                <input type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked autoComplete="off"/>
                <label className="btn btn-outline-secondary mx-1" htmlFor="btn-check-2-outlined">defaultChecked</label>

                <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" defaultChecked/>
                <label className="btn btn-outline-success mx-1" htmlFor="success-outlined">defaultChecked success radio</label>

                <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off"/>
                <label className="btn btn-outline-danger mx-1" htmlFor="danger-outlined">Danger radio</label>
            </div>

        </div>







        </div>
        </>
     );
}
 
export default ChecksRadios;