interface aboutProps {
    title: string;
    description: string;
    image?: string;
    form?: React.ReactNode;
    type?: string
    images?: {
        desktop: string;
        tablet: string;
        mobile: string;
    }
}
import Picture from "./picture";

export default function AboutBanner({title, description, images, form, type}: aboutProps) {
    return (
        <div className={`about-banner ${type}`}>
            <div className="banner-left">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="banner-right">
                {images && (
                    <Picture
                        title={title}
                        desktop={images.desktop}
                        tablet={images.tablet}
                        mobile={images.mobile}
                    />
                )}
                {form && form}
            </div>
        </div>
    )
}