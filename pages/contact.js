import Layout from "../components/layout/layout";
import NavCore from "../components/layout/nav_core";

const Contact = () => {
    return ( 
        <h1>Contact Us</h1>
     );
}
 
export default Contact;

Contact.getLayout = function getLayout(page){
    return (
        <Layout>
            <NavCore />
            {page}
        </Layout>
    )
}