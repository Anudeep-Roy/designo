import Link from "next/link"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <Link href="/">
                            <img src={"./assets/logo.svg"} alt="logo" />
                            <img src={"./assets/company-dark.svg"} alt="company" />
                        </Link>
                    </div>
                    <nav className="footer-top-right">
                        <Link href={'/about'}>Our Company</Link>
                        <Link href={'/locations'}>Locations</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <div className="address">
                            <p><b>Designo Central Office</b></p>
                            <p>3886 Wellington Street</p>
                            <p>Toronto, Ontario M9C 3J5</p>
                        </div>
                        <div className="address">
                            <p><b>Contact Us (Central Office)</b></p>
                            <p><b>P : +1 253-863-8967</b></p>
                            <p><b>M : contact@designo.co</b></p>
                        </div>
                    </div>
                    <nav className="footer-bottom-right">
                        <a href="javascript:void(0)">
                            <img src={'/assets/shared/desktop/icon-facebook.svg'} alt="facebook"/>
                        </a>
                        <a href="javascript:void(0)">
                            <img src={'/assets/shared/desktop/icon-youtube.svg'} alt="youtube"/>
                        </a>
                        <a href="javascript:void(0)">
                            <img src={'/assets/shared/desktop/icon-twitter.svg'} alt="twitter"/>
                        </a>
                        <a href="javascript:void(0)">
                            <img src={'/assets/shared/desktop/icon-pinterest.svg'} alt="pinterest"/>
                        </a>
                        <a href="javascript:void(0)">
                            <img src={'/assets/shared/desktop/icon-instagram.svg'} alt="instagram"/>
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}