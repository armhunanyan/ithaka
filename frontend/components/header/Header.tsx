import Link from "next/link";

const MenuItem:React.FC<{name:string; href: string}> = ({href, name}) => {
    return (
        <li className="pl-60">
            <Link href={href}>
                <a className="text-black p-10 md:p-0 font-light">
                    <span>{name}</span>
                </a>
            </Link>
        </li>
    )
}

const Header = () => {
    return (
        <header>
            <div className="container">
                <div id="mobile-menu"
                    className="fixed md:relative flex flex-col md:flex-row items-center justify-center md:block w-screen h-screen md:w-auto md:h-auto left-full md:left-auto top-0 transition duration-500 transform px-25 py-50 md:p-0 bg-white md:bg-transparent z-20 ">
                    <div className="w-full h-full flex flex-row items-center justify-between px-20 md:px-0">
                        <div className="w-full flex justify-between md:hidden text-22">
                            <p>Logo</p>
                            <p id="close-mobile-menu">X</p>
                        </div>
                        <div>
                            <Link href="/">
                                <a>
                                    <img src="/images/logo.png" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <nav className="w-full">
                                <ul className="flex flex-col md:flex-row justify-evenly wide:justify-between">
                                    <MenuItem href="/" name="Home" />
                                    <MenuItem href="" name="Services" />
                                    <MenuItem href="/about" name="About" />
                                    <MenuItem href="" name="Projects" />
                                    <MenuItem href="" name="Blog & News" / >
                                    <MenuItem href="/contact" name="Contact" />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;