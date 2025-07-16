interface contentProps {
    image: string;
    title: string;
    dir?: string;
    type?: string;
    description: React.ReactNode;
}

export default function ContentBox({image, title, dir, type, description}: contentProps) {
    return (
        <div className={`content-box ${dir} ${type}`}>
            <div className="box-left">
                <img alt={title} src={image} />
            </div>
            <div className="box-right">
                <h1>{title}</h1>
                {description}
            </div>
        </div>
    )
}