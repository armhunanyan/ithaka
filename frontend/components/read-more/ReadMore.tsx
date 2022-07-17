import Link from "next/link";
import Arrow from "../arrow/Arrow";

interface IReadMoreProps {
    onClick?: any;
    href?: string;
    text?: string;
}

const ReadMore:React.FC<IReadMoreProps> = ({onClick, href, text = 'Read more'}) => {
    const element =  (
        <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer" onClick={onClick}>
            <span>{text}</span>
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