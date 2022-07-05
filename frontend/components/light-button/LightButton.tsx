import Link from "next/link";

interface IButtonProps {
    className?: string;
    href: string;
    children: any;
}

const LightButton:React.FC<IButtonProps> = ({children, href, className = ''}) => {
    return (
        <Link href={href}>
            <a className={`inline-block bg-white text-black text-xs md:text-base font-medium md:font-bold px-10 md:px-100 py-10 border border-black ${className}`}>
                {children}
            </a>
        </Link>
    )
}

export default LightButton;