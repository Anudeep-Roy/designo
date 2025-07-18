import Course from "./course"

export default function HomeCourses() {
    return (
        <div className="home-courses">
            <div className="course-left">
                <Course
                    images={{
                        title: 'web-design',
                        desktop: '/assets/home/desktop/image-web-design-large.jpg',
                        tablet: '/assets/home/tablet/image-web-design.jpg',
                        mobile: '/assets/home/mobile/image-web-design.jpg'
                    }}
                    title={'web design'}
                    link={'/web-design'}
                />
            </div>
            <div className="course-right">
                <Course
                    images={{
                        title: 'app-design',
                        desktop: '/assets/home/desktop/image-app-design.jpg',
                        tablet: '/assets/home/tablet/image-app-design.jpg',
                        mobile: '/assets/home/mobile/image-app-design.jpg'
                    }}
                    title={'app Design'}
                    link={'/app-design'}
                />
                <Course
                    images={{
                        title: 'graphic-design',
                        desktop: '/assets/home/desktop/image-graphic-design.jpg',
                        tablet: '/assets/home/tablet/image-graphic-design.jpg',
                        mobile: '/assets/home/mobile/image-graphic-design.jpg'
                    }}
                    title={'graphic Design'}
                    link={'/graphic-design'}
                />
            </div>
        </div>
    )
}