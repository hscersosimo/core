import Link from "next/link";
import CoreNav from "./CoreNav";

const appName = 'Core App';

const PageHeader = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-sm navbar-light" aria-label="Third navbar example">
            <div className="container-fluid">

                <Link href="/"><a className="navbar-brand">{appName}</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar01" aria-controls="navbar01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar01">
                    <CoreNav />
                </div>
            </div>
        </nav>
        </>
    );
}

export default PageHeader;