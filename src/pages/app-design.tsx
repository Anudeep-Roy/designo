import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import PageBanner from "@/components/pageBanner"
import Template from "@/components/template"
import Course from "@/components/course"

export default function AppDesign() {
    return (
        <div className="app-design">
            <div className="container">
                <Header />
            </div>
            <div className="container home">
                <PageBanner
                    title={'app design'}
                    subtitle={'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}
                />
            </div>
            
            <div className="container">
                <div className="templates">
                    <Template
                        image={'/assets/app-design/desktop/image-airfilter.jpg'}
                        title={'AIRFILTER'}
                        description={"Solving the problem of poor indoor air quality by filtering the air"}
                    />
                    <Template
                        image={'/assets/app-design/desktop/image-eyecam.jpg'}
                        title={'EYECAM'}
                        description={'Product that lets you edit your favorite photos and videos at any time'}
                    />
                    <Template
                        image={'/assets/app-design/desktop/image-faceit.jpg'}
                        title={'FACEIT'}
                        description={'Get to meet your favorite internet superstar with the faceit app'}
                    />
                    <Template
                        image={'/assets/app-design/desktop/image-todo.jpg'}
                        title={'TODO'}
                        description={'A todo app that features cloud sync with light and dark mode'}
                    />
                    <Template
                        image={'/assets/app-design/desktop/image-loopstudios.jpg'}
                        title={'LOOPSTUDIOS'}
                        description={'A VR experience app made for Loopstudios'}
                    />
                </div>
                <div className="home-courses page-courses">
                    <div className="course-left">
                        <Course
                            image={'/assets/home/desktop/image-web-design-large.jpg'}
                            title={'web Design'}
                            link={'/web-design'}
                        />
                    </div>
                    <div className="course-right">
                        <Course
                            image={'/assets/home/desktop/image-graphic-design.jpg'}
                            title={'graphic Design'}
                            link={'/graphic-design'}
                        />
                    </div>
                </div>
            </div>
            <FooterContainer />
        </div>
    )
}