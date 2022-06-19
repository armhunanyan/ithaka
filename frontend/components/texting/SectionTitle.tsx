interface ISectionTitleProps {
    text: String;
    line?: boolean;
}
const SectionTitle:React.FC<ISectionTitleProps> = ({text, line = true}) => {
    return (
        <div className="relative text-lg md:text-2xl text-black font-bold mb-25 ">
          <span>{text}</span>
          {line && (
            <div className="absolute left-3/4 top-0 w-full bg-black/90" style={{height: '0.5px'}}></div>
          )}
        </div>
    )
}

export default SectionTitle;