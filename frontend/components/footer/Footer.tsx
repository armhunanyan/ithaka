const FooterItem:React.FC<{name:string; href?: string}> = ({href, name}) => {
    return (
        <li className="text-white font-light mb-15">
            {name}
        </li>
    )
}


const Footer = () => {
    return (
        <footer className="bg-gray-dark py-20">
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    <div>
                        <img src="/images/logo-light.png"></img>
                    </div>
                    <div className="mt-30">
                        <span className="inline-block text-white border-b border-white mb-15">Servies</span>
                        <ul>
                            <FooterItem name="Architectual solutions" />
                            <FooterItem name="Interior design" />
                            <FooterItem name="Urban solutions" />
                            <FooterItem name="Monuments conservation" />
                            <FooterItem name="Landscape design" />
                            <FooterItem name="Land development" />
                            <FooterItem name="Customer function" />
                            {/* <FooterItem name="Cunsultation and researches related to the architecture field" /> */}
                        </ul>
                    </div>
                    <div className="mt-30 ml-60">
                        <span className="inline-block text-white border-b border-white mb-15">About</span>
                        <ul>
                            <FooterItem name="Architectual solutions" />
                            <FooterItem name="Interior design" />
                            <FooterItem name="Urban solutions" />
                        </ul>
                    </div>
                    <div className="mt-30 ml-60">
                        <span className="inline-block text-white border-b border-white mb-15">Projects</span>
                        <ul>
                            <FooterItem name="Architectual solutions" />
                            <FooterItem name="Interior design" />
                            <FooterItem name="Urban solutions" />
                            <FooterItem name="Monuments conservation" />
                        </ul>
                    </div>
                    <div className="mt-30 ml-60">
                        <span className="inline-block text-white border-b border-white mb-15">Blog & News</span>
                        <ul>
                            <FooterItem name="Architectual solutions" />
                            <FooterItem name="Interior design" />
                    
                        </ul>
                    </div>
                    <div className="mt-30 ml-60">
                        <span className="inline-block text-white border-b border-white mb-15">Contact</span>
                        <ul>
                            <FooterItem name="Architectual solutions" />
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;