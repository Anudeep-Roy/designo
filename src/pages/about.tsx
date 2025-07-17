import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import AboutBanner from "@/components/aboutBanner"
import ContentBox from "@/components/contentBox"
import Branches from "@/components/branches"

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <Header />
            </div>
            <div className="container home">
                <AboutBanner
                    title={'About Us'}
                    description={"Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."}
                    images={{
                        desktop: "/assets/about/desktop/image-about-hero.jpg",
                        tablet: "/assets/about/tablet/image-about-hero.jpg",
                        mobile: "/assets/about/mobile/image-about-hero.jpg"
                    }}
                />
                <ContentBox
                    images={{
                        desktop: '/assets/about/desktop/image-world-class-talent.jpg',
                        tablet: '/assets/about/tablet/image-world-class-talent.jpg',
                        mobile: '/assets/about/mobile/image-world-class-talent.jpg'
                    }}
                    title={'World-class talent'}
                    description={
                        <>
                            <p>{"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."}</p>
                            <p>{"Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulate their brand&apos;s story and mission."}</p>
                        </>
                    }
                />
            </div>
            <div className="container">
                <Branches />
            </div>
            <div className="container home">
                <ContentBox
                    images={{
                        desktop: '/assets/about/desktop/image-real-deal.jpg',
                        tablet: '/assets/about/tablet/image-real-deal.jpg',
                        mobile: '/assets/about/mobile/image-real-deal.jpg'
                    }}
                    title={'The real deal'}
                    dir={'reverse'}
                    description={
                        <>
                            <p>{"As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."}</p>
                            <p>{"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."}</p>
                        </>
                    }
                />
            </div>
            <FooterContainer />
        </div>
    )
}