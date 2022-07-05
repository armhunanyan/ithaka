import { IAbout } from "../../interfaces/about";

const AboutItem:React.FC<{about: IAbout}> = ({about}) => {
    return (
        <div className="mb-30 md:mb-60">
            <img className="inline-block w-full mb-15 md:mb-50" src={about.image}/>
            <p className="text-base md:text-lg font-medium mb-15 md:mb-25">{about.title}</p>
            <p>{about.description}</p>
        </div>
    )
}

export default AboutItem;