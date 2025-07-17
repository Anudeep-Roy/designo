interface contentProps {
    title: string;
    dir?: string;
    type?: string;
    map?: React.ReactNode
    description: React.ReactNode;
    images?: {
        desktop: string;
        tablet: string;
        mobile: string;
    }
}

import Picture from "./picture";

export default function ContentBox({ images, title, dir, type, map, description }: contentProps) {
    
    return (
        <div className={`content-box ${dir} ${type}`}>
            <div className="box-left">
                {images && (
                    <Picture
                        title={title}
                        desktop={images.desktop}
                        tablet={images.tablet}
                        mobile={images.mobile}
                    />
                )}
                {map && map}
            </div>
            <div className="box-right">
                <h1>{title}</h1>
                {description}
            </div>
        </div>
    )
}