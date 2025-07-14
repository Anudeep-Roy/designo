import GetInTouch from "./getInTouch"
import Footer from "./footer"

export default function FooterContainer() {
    return ( 
        <div className="footer-container">
            <div className="container">
                <GetInTouch />
            </div>
            <Footer />
        </div>
    )
}