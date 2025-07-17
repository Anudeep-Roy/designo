import Header from "@/components/header"
import HomeBanner from "@/components/homeBanner"
import HomeCourses from "@/components/homeCourses"
import Values from "@/components/values"
import FooterContainer from "@/components/footerContainer"

export default function Homepage() {
    return (
        <>
            <div className="container">
                <Header />
            </div>
            <div className="container home">
                <HomeBanner />
            </div>
            <div className="container">
                <HomeCourses />
                <Values />
            </div>
            <FooterContainer />
        </>
    )
}