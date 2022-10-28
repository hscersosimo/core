import { useRouter } from "next/router";
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

const DesignSystem = () => {

    const router = useRouter();
    //const pageTitle = router.query['title'];

    return ( 
        <>
        <div className="container">
          <div className="my-6 py-6 px-6 text-center">
              <div className="display-3">Design System</div>
              <p className="lead mt-3">
                  Based on Bootstrap v5.2 - <a href="https://getbootstrap.com/docs" target="_blank">Check the docs</a>
              </p>
          </div>
        
          <div className="mb-6">
            <Typography />
          </div>
          <div className="mb-6">
            <Images />
          </div>
          <div className="mb-6">
            <Tables />
          </div>
          <div className="mb-6">
            <Forms />
          </div>
          <div className="mb-6">
            <Select />
          </div>      
          <div className="mb-6">
            <ChecksRadios />
          </div>
          <div className="mb-6">
            <Range />
          </div>
          <div className="mb-6">
            <Buttons />
          </div>
          <div className="mb-6">
            <Dropdowns />
          </div>
          <div className="mb-6">
            <Validations />
          </div>


        </div>
        </>
     );
}
 
export default DesignSystem;

DesignSystem.getLayout = function getLayout(page) {
    return (
      <Layout>
        <PageHeader />
        {page}
      </Layout>
    )
  }