interface contentProps {
    image: string;
    title: string;
    dir: string
    description: React.ReactNode;
}

export default function ContentBox({image, title, dir, description}: contentProps) {
    return (
        <div className={`content-box ${dir}`}>
            <div className="box-left">
                <img src={image} />
            </div>
            <div className="box-right">
                <h1>{title}</h1>
                {description}
            </div>
        </div>
    )
}