import { useState } from "react";
import Link from "next/link"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenu() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return ( 
        <>
        <header className="header">
            <div className="header-left">
                <Link href="/">
                    <img src={"/assets/logo.svg"} alt="logo" />
                    <img src={"/assets/company.svg"} alt="company" />
                </Link>
            </div>
            <div className="header-right">
                <nav className="desk-menu">
                    <Link href="/about">Our Company</Link>
                    <Link href="/locations">Locations</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <div className="mobile-menu">
                    <button className="mobile-menu-button link" onClick={handleMenu}>
                        {menuOpen ? <img src={'/assets/shared/mobile/icon-close.svg'} /> : <img src={'/assets/shared/desktop/mobile-menu.svg'} />}
                    </button>
                </div>
            </div>
            </header>
            {menuOpen && (
                <div className="menubar">
                    <nav>
                        <Link href="/about">Our Company</Link>
                        <Link href="/locations">Locations</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            )}
        </>
    )
}