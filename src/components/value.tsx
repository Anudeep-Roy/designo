interface valueProps  {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

export default function Value({image, title, description, buttonText}:valueProps) {
    return (
        <div className="value">
            <img src={image} alt={title} />
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
            {buttonText && <button className="primary">{buttonText}</button>}
        </div>
    )
}