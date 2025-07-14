import Course from "./course"

export default function HomeCourses() {
    return (
        <div className="home-courses">
            <div className="course-left">
                <Course
                    image={'/assets/home/desktop/image-web-design-large.jpg' }
                    title={'web design'}
                />
            </div>
            <div className="course-right">
                <Course
                    image={'/assets/home/desktop/image-app-design.jpg'}
                    title={'app Design'}
                />
                <Course
                    image={'/assets/home/desktop/image-graphic-design.jpg'}
                    title={'graphic Design'}
                />
            </div>
        </div>
    )
}