interface bannerProps {
    title: string;
    subtitle: string;
}

export default function PageBanner({title, subtitle}: bannerProps) {
    return (
        <div className="page-banner">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}