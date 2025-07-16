interface valueProps  {
    image: string;
    title?: string;
    description?: string;
    buttonText?: string;
}
import Link from "next/link";

export default function Value({image, title, description, buttonText}:valueProps) {
    return (
        <div className="value">
            <img src={image} alt={`value-${title}`} />
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {buttonText && <Link href="/locations" className="link primary">{buttonText}</Link>}
        </div>
    )
}