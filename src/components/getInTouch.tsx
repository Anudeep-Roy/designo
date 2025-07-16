import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className="get-in-touch">
            <div className="touch-left">
                <h2>{"Let's talk about your project"}</h2>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <div className="touch-right">
                <Link href={'/contact'} className="link light">get in touch</Link>
            </div>
        </div>
    )
}