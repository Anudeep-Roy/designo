

export default function Header() {
    return ( 
        <div className="header">
            <div className="header-left">
                <img src={"./assets/logo.svg"} alt="logo" />
                <img src={"./assets/company.svg"} alt="company" />
            </div>
            <div className="header-right">
                <a href="javascript:void(0)">Our Company</a>
                <a href="javascript:void(0)">Locations</a>
                <a href="javascript:void(0)">Contact</a>
            </div>
        </div>
    )
}