import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import AboutBanner from "@/components/aboutBanner"
import ContentBox from "@/components/contentBox"
import Branches from "@/components/branches"

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <Header />
                <AboutBanner
                    title={'Contact Us'}
                    description={"Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."}
                    type={'contact'}
                    form={
                        <div className="contact-form">
                            <input type="text" name="name" placeholder="Name" autoComplete="true"/>
                            <input type="text" id="email" name="email" placeholder="Email Address" autoComplete="true"/>
                            <input type="text" id="phone" name="phone" placeholder="Phone" autoComplete="true"/>
                            <textarea id="message" name="message" placeholder="Your Message" autoComplete="true"></textarea>
                            <div className="btn-container">
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    }
                />
                <Branches />
            </div>
            <FooterContainer />
        </div>
    )
}