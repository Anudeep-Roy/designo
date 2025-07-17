import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import PageBanner from "@/components/pageBanner"
import Template from "@/components/template"
import Course from "@/components/course"

export default function GraphicDesign() {
    return (
        <div className="graphic-design">
            <div className="container">
                <Header />
            </div>
            <div className="container home">
                <PageBanner
                    title={'graphic design'}
                    subtitle={'We deliver eye-catching branding materials that are tailored to meet your business objectives.'}
                />
            </div>
            <div className="container">
                <div className="templates">
                    <Template
                        image={'/assets/graphic-design/desktop/image-change.jpg'}
                        title={'TIM BROWN'}
                        description={"A book cover designed for Tim Brown's new release, 'Change'"}
                    />
                    <Template
                        image={'/assets/graphic-design/desktop/image-boxed-water.jpg'}
                        title={'BOXED WATER'}
                        description={'A simple packaging concept made for Boxed Water'}
                    />
                    <Template
                        image={'/assets/graphic-design/desktop/image-science.jpg'}
                        title={'SCIENCE!'}
                        description={'A poster made in collaboration with the Federal Art Project'}
                    />
                </div>
                <div className="home-courses page-courses">
                    <div className="course-left">
                        <Course
                            image={'/assets/home/desktop/image-app-design.jpg'}
                            title={'app Design'}
                            link={'/app-design'}
                        />
                    </div>
                    <div className="course-right">
                        <Course
                            image={'/assets/home/desktop/image-web-design-large.jpg'}
                            title={'web Design'}
                            link={'/web-design'}
                        />
                    </div>
                </div>
            </div>
            <FooterContainer />
        </div>
    )
}