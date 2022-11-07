import Layout from "../../components/core/Layout";
import PageHeader from "../../components/core/PageHeader";
import Typography from "./content/typography";
import Images from "./content/images";
import Tables from "./content/tables";
import Forms from "./content/forms";
import Select from "./content/select";
import ChecksRadios from "./content/checksRadios";
import Range from "./content/range";
import Buttons from "./content/buttons";
import Dropdowns from "./content/dropDowns";
import Validations from "./content/validations";
import DsSubLayout from "./components/DsSubLayout";
import { useState } from "react";

const DesignSystem = () => {

  const options = [
    {value: '0', text: 'All', icon: '', path: '../content/typography'},
    {value: '1', text: 'Typography', icon: 'fa-book-font', path: '../content/typography'},
    {value: '2', text: 'Images', icon: 'fa-image', path: '../content/images'},
    {value: '3', text: 'Tables', icon: 'fa-table', path: '../content/tables'},
  ];

  const [target, setTarget] = useState(options[0].value);

  const handleChange = event => {
    setTarget(event.target.value);
    console.log(target);
  };

  

  return (
    <>
      <div className="container">
        <div className="my-6 py-6 px-6 text-center">
          <div className="display-3">Design System</div>
          <p className="lead mt-3">
            Based on Bootstrap v5.2 -{" "}
            <a href="https://getbootstrap.com/docs" target="_blank">
              Check the docs
            </a>
          </p>
        </div>

        <div>
          <select value={target} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>


        <div>
          {(() => {
            if (target === 0) {
              return (
                <>
                  <h1>All</h1>
                  Section: {options[target].text}<br />
                  Path {options[target].path}<br />
                </>
                )
            } else {
              return (
                <div>
                  <DsSubLayout 
                    section={options[target].text} 
                    icon={options[target].icon}
                    path={options[target].path}
                  />
                </div>
              )
            }
          })()}
        </div>

        {/* <DsSubLayout section="Typography" icon="fa-book-font">
          <Typography />
        </DsSubLayout>
        <DsSubLayout section="Images" icon="fa-image">
          <Images />
        </DsSubLayout>
        <DsSubLayout section="Tables" icon="fa-table">
          <Tables />
        </DsSubLayout>
        <DsSubLayout section="Forms" icon="fa-ballot-check">
          <Forms />
        </DsSubLayout>
        <DsSubLayout section="Select" icon="fa-list-dropdown">
          <Select />
        </DsSubLayout>
        <DsSubLayout section="Dropdowns" icon="fa-list-dropdown">
          <Dropdowns />
        </DsSubLayout>       
        <DsSubLayout section="Checks &amp; Radios" icon="fa-list-check">
          <ChecksRadios />
        </DsSubLayout>
        <DsSubLayout section="Sliders" icon="fa-square-sliders">
          <Range />
        </DsSubLayout>
        <DsSubLayout section="Buttons" icon="fa-standard-definition">
          <Buttons />
        </DsSubLayout>
        <DsSubLayout section="Validations" icon="fa-circle-exclamation">
          <Validations />
        </DsSubLayout> */}

      </div>
    </>
  );
};

export default DesignSystem;

DesignSystem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHeader />
      {page}
    </Layout>
  );
};
