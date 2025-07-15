import Link from "next/link"

export default function Header() {
    return ( 
        <div className="header">
            <div className="header-left">
                <Link href="/">
                    <img src={"./assets/logo.svg"} alt="logo" />
                    <img src={"./assets/company.svg"} alt="company" />
                </Link>
            </div>
            <div className="header-right">
                <Link href="/about">Our Company</Link>
                <Link href="/locations">Locations</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}