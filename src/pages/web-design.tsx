import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import PageBanner from "@/components/pageBanner"
import Templates from "@/components/templates"
import Courses from "@/components/courses"

export default function WebDesign() {
    return (
        <div className="web-design">
            <div className="container">
                <Header />
            </div>
            <div className="container home">
                <PageBanner
                    title={'web design'}
                    subtitle={'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}
                />
            </div>
            <div className="container">
                <Templates />
                <Courses />
            </div>
            <FooterContainer />
        </div>
    )
}