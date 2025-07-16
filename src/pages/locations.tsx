import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import ContentBox from "@/components/contentBox"

export default function Locations() {
    return (
        <div className="locations">
            <div className="container">
                <Header />
                <ContentBox
                    image={'/assets/locations/desktop/image-map-canada.png'}
                    title={'Canada'}
                    type={'location'}
                    dir={'reverse'}
                    description={
                        <div className="addresses">
                            <div className="address">
                                <p><b>Designo Central Office</b><br/>3886 Wellington Street<br/> Toronto, Ontario M9C 3J5</p>
                            </div>
                            <div className="address">
                                <p><b>Contact</b><br/>P : +1 253-863-8967<br/> M : contact@designo.co</p>
                            </div>
                        </div>
                    }
                />
                <ContentBox
                    image={'/assets/locations/desktop/image-map-australia.png'}
                    title={'Australia'}
                    type={'location'}
                    description={
                        <div className="addresses">
                            <div className="address">
                                <p><b>Designo AU Office</b><br/>19 Balonne Street<br/> New South Wales 2443</p>
                            </div>
                            <div className="address">
                                <p><b>Contact</b><br/>P : (02) 6720 9092<br/> M : contact@designo.au</p>
                            </div>
                        </div>
                    }
                />
                <ContentBox
                    image={'/assets/locations/desktop/image-map-united-kingdom.png'}
                    title={'United Kingdom'}
                    type={'location'}
                    dir={'reverse'}
                    description={
                        <div className="addresses">
                            <div className="address">
                                <p><b>Designo UK Office</b><br/>13  Colorado Way<br/> Rhyd-y-fro SA8 9GA</p>
                            </div>
                            <div className="address">
                                <p><b>Contact</b><br/>P : 078 3115 1400<br/> M : contact@designo.uk</p>
                            </div>
                        </div>
                    }
                />
            </div>
            <FooterContainer />
        </div>
    )
}