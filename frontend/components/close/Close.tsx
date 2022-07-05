const Close:React.FC<{onClick: any}> = ({onClick}) => {
    return (
        <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer" onClick={onClick}>
            <span>Close</span>
        </p>
    )
}

export default Close;