import Course from "./course";

export default function Courses() {
    return (
        <div className="home-courses page-courses">
            <div className="course-left">
                <Course
                    image={'/assets/home/desktop/image-app-design.jpg'}
                    title={'app Design'}
                    link={'/app-design'}
                />
            </div>
            <div className="course-right">
                <Course
                    image={'/assets/home/desktop/image-graphic-design.jpg'}
                    title={'graphic Design'}
                    link={'/graphic-design'}
                />
            </div>
        </div>
    )
}