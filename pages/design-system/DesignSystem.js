import { useRouter } from "next/router";
import Layout from "../../components/core/Layout";
import Header from "../../components/core/PageHeader";
import Typography from "./Typography";
import Images from "./Images";
import Tables from "./Tables";
import Forms from "./Forms";
import Select from "./Select";
import ChecksRadios from "./ChecksRadios";
import Range from "./Range";
import Buttons from "./Buttons";
import Dropdowns from "./Dropdowns";
import Validations from "./Validations";

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
        <Header />
        {page}
      </Layout>
    )
  }