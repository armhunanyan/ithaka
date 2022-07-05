import Link from "next/link";
import Arrow from "../arrow/Arrow";

const Back:React.FC<{onClick?: any; href?: string}> = ({onClick, href}) => {

    const element = (
        <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer" onClick={onClick}>
            <span>Back</span>
            <Arrow direction="bg-arrow-left"/>
        </p>
    )

    if (href) {
        return <Link href={href}>{element}</Link>
    }

    return (element);
}

export default Back;