import SectionTitle from "../texting/SectionTitle";

interface ISectionProps {
    title?: string;
    titleLine?: boolean;
    background?: string;
    className?: string;
    children: any
}

const Section:React.FC<ISectionProps> = ({title, background = '', className = '', titleLine, children}) => {
    return (
        <section className={`px-10 py-30 md:px-0 md:py-60 ${background} ${className}`}>
            <div className="container">
                {title && <SectionTitle text={title} line={titleLine} />}
                {children}
            </div>
        </section>
    )
}

export default Section;