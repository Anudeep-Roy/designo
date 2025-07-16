interface aboutProps {
    title: string;
    description: string;
    image?: string;
    form?: React.ReactNode;
    type?: string
}

export default function AboutBanner({title, description, image, form, type}: aboutProps) {
    return (
        <div className={`about-banner ${type}`}>
            <div className="banner-left">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="banner-right">
                {image && <img alt={title} src={image} />}
                {form && form}
            </div>
        </div>
    )
}