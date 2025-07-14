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
                <HomeBanner />
                <HomeCourses />
                <Values />
            </div>
            <FooterContainer />
        </>
    )
}