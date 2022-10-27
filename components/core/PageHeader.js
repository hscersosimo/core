import Link from "next/link";

const appName = 'Core App';

const PageHeader = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-sm navbar-light" aria-label="Third navbar example">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{appName}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar01" aria-controls="navbar01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar01">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                    <li className="nav-item">
                        <Link href="/design-system/DesignSystem"><a className="nav-link" aria-current="page">Docs</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown03">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            </div>
        </nav>
        </>
    );
}

export default PageHeader;