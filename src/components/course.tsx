interface CourseProps {
    title: string;
    image: string;
}

export default function Course({title, image} : CourseProps) {

    return (
        <div className="course">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <a href="javascript:void(0)">view projects</a>
        </div>
    )
}