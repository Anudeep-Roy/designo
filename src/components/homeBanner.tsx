export default function HomeBanner() {
    return ( 
        <div className="home-banner">
            <div className="banner-left">
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button className="light">Learn More</button>
            </div>
            <div className="banner-right">
                <img src={"/assets/home/desktop/image-hero-phone.png"} alt="home-banner"/>
            </div>
        </div>
    )
}