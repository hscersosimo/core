import Layout from "../components/core/Layout";
import Header from "../components/core/Header";

const Contact = () => {
    return ( 
        <h1>Contact Us</h1>
     );
}
 
export default Contact;

Contact.getLayout = function getLayout(page){
    return (
        <Layout>
            <Header />
            {page}
        </Layout>
    )
}