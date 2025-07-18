import Course from "./course";

export default function Courses() {
    return (
        <div className="home-courses page-courses">
            <div className="course-left">
                <Course
                    images={{
                        desktop: '/assets/home/desktop/image-app-design.jpg',
                        tablet: '/assets/home/tablet/image-app-design.jpg',
                        mobile: '/assets/home/mobile/image-app-design.jpg',
                        title: 'app-design'
                    }}
                    title={'app Design'}
                    link={'/app-design'}
                />
            </div>
            <div className="course-right">
                <Course
                    images={{
                        desktop: '/assets/home/desktop/image-graphic-design.jpg',
                        tablet: '/assets/home/tablet/image-graphic-design.jpg',
                        mobile: '/assets/home/mobile/image-graphic-design.jpg',
                        title: 'graphic-design'
                    }}
                    title={'graphic Design'}
                    link={'/graphic-design'}
                />
            </div>
        </div>
    )
}