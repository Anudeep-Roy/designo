interface templateProps {
    image: string;
    title: string;
    description: string;
}

export default function Template({image, title, description}: templateProps) {
    return (
        <div className="template">
            <div className="image-container">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}