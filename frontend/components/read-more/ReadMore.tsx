import Link from "next/link";
import Arrow from "../arrow/Arrow";

const ReadMore:React.FC<{onClick?: any; href?: string}> = ({onClick, href}) => {
    const element =  (
        <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer" onClick={onClick}>
            <span>Read More</span>
            <Arrow/>
        </p>
    )

    if (href) {
        return (
            <Link href={href}>
                <a>{element}</a>
            </Link>
        )
    }

    return (element);
}

export default ReadMore;