import Section from "../section/Section";
import ReadMore from "../read-more/ReadMore";
import { useContext } from "react";
import { InitialDataContext } from "../../contexts/initial-data/InitialDataContext";
import { useRouter } from "next/router";

const AboutSection:React.FC = () => {
    const {aboutInfo} = useContext(InitialDataContext);
    const Router = useRouter();
    return (
        aboutInfo ? (
            <Section title='About Us'>
                <div className='grid md:grid-cols-2 gap-20 md:gap-70 items-center'>
                    <div>
                        <img src={aboutInfo.image}></img>
                    </div>
                    <div>
                        <p className='text-md md:text-lg mb-15 md:mb-20 font-medium'>{aboutInfo.title}</p>
                        <p className='text-xs md:text-base font-light mb-15 md:mb-20'>{aboutInfo.content}</p>
                        <ReadMore onClick={() => Router.push('/about')} />
                    </div>
                </div>
            </Section>
        ) : (null)
        
    )
}

export default AboutSection;