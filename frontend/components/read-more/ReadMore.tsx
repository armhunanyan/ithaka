import Arrow from "../arrow/Arrow";

const ReadMore:React.FC<{onClick: any}> = ({onClick}) => {
    return (
        <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer" onClick={onClick}>
            <span>Read More</span>
            <Arrow/>
        </p>
    )
}

export default ReadMore;