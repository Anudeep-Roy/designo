interface valueProps  {
    image: string;
    title?: string;
    description?: string;
    buttonText?: string;
    page?: string;
}
import Link from "next/link";

export default function Value({image, title, description, buttonText, page}:valueProps) {
    return (
        <div className={`value ${page}`}>
            <img src={image} alt={`value-${title}`} />
            <div className="info">
                {title && <h3>{title}</h3>}
                {description && <p>{description}</p>}
            </div>
            {buttonText && <Link href="/locations" className="link primary">{buttonText}</Link>}
        </div>
    )
}