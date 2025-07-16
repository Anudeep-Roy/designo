interface contentProps {
    image?: string;
    title: string;
    dir?: string;
    type?: string;
    map?: React.ReactNode
    description: React.ReactNode;
}

export default function ContentBox({image, title, dir, type, map, description}: contentProps) {
    return (
        <div className={`content-box ${dir} ${type}`}>
            <div className="box-left">
                {image && <img alt={title} src={image} />}
                {map}
            </div>
            <div className="box-right">
                <h1>{title}</h1>
                {description}
            </div>
        </div>
    )
}