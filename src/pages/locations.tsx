import Header from "@/components/header"
import FooterContainer from "@/components/footerContainer"
import ContentBox from "@/components/contentBox"

export default function Locations() {
    return (
        <div className="locations">
            <div className="container">
                <Header />
                <ContentBox
                    title={'Canada'}
                    type={'location'}
                    dir={'reverse'}
                    map={
                        <>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88728.42149785088!2d-79.51222181626682!3d43.64516455558326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2a51e3fb1d%3A0x2f5294e2fb501d29!2sCentreville%20Amusement%20Park!5e0!3m2!1sen!2sin!4v1752657807619!5m2!1sen!2sin"
                                height={'100%'}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">    
                            </iframe>
                        </>
                    }
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
                    title={'Australia'}
                    type={'location'}
                    map={
                        <>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62432.38961848193!2d151.29839489820597!3d-33.824545966494426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac8b60edc427%3A0xf017d68f9f13080!2sGap%20Park!5e0!3m2!1sen!2sin!4v1752657894979!5m2!1sen!2sin"
                                height={'100%'}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">    
                            </iframe>
                        </>
                    }
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
                    title={'United Kingdom'}
                    type={'location'}
                    dir={'reverse'}
                    map={
                        <>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.288961640868!2d-0.09030793729654334!3d51.50791446054768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon%20Bridge!5e0!3m2!1sen!2sin!4v1752657975897!5m2!1sen!2sin"
                                height={'100%'}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">    
                            </iframe>
                        </>
                    }
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