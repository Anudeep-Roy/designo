interface CourseProps {
    title: string;
    image: string;
    link: string
}
import Link from "next/link";

export default function Course({title, image, link} : CourseProps) {
    return (
        <div className="course">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <Link href={link}>
                view projects
                <img src={'/assets/shared/desktop/icon-right-arrow.svg'} />
            </Link>
        </div>
    )
}