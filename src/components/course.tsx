interface CourseProps {
    title: string;
    link: string;
    images: {
        title: string;
        desktop: string;
        tablet: string;
        mobile: string;
    }
}
import Link from "next/link";
import Picture from "./picture";

export default function Course({title, images, link} : CourseProps) {
    return (
        <div className="course">
            <Picture
                title={images.title}
                desktop={images?.desktop}
                tablet={images?.tablet}
                mobile={images?.mobile}
            />
            <h2>{title}</h2>
            <Link href={link}>
                view projects
                <img src={'/assets/shared/desktop/icon-right-arrow.svg'} />
            </Link>
        </div>
    )
}