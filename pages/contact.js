import Layout from "../components/core/Layout";
import PageHeader from "../components/core/PageHeader";

const Contact = () => {
    return ( 
        <h1>Contact Us</h1>
     );
}
 
export default Contact;

Contact.getLayout = function getLayout(page){
    return (
        <Layout>
            <PageHeader />
            {page}
        </Layout>
    )
}