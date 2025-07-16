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
                <AboutBanner />
                <ContentBox
                    image={'/assets/about/desktop/image-world-class-talent.jpg'}
                    title={'World-class talent'}
                    dir={''}
                    description={
                        <>
                            <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                            <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulate their brand&apos;s story and mission.</p>
                        </>
                    }
                />
                <Branches />
                <ContentBox
                    image={'/assets/about/desktop/image-real-deal.jpg'}
                    title={'The real deal'}
                    dir={'reverse'}
                    description={
                        <>
                            <p>As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                            <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                        </>
                    }
                />
            </div>
            <FooterContainer />
        </div>
    )
}