interface pictureProps {
    title: string;
    desktop: string;
    tablet: string;
    mobile: string;
}

export default function Picture({title, desktop, tablet, mobile}: pictureProps) {
    return (
        <picture>
            <source media="(min-width: 992px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <img src={mobile} alt={title} />
        </picture>
    )
}