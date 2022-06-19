const Arrow:React.FC<{direction?: 'bg-arrow-left' | 'bg-arrow-right'}> = ({direction = 'bg-arrow-right'}) => {
    return (
        <span className={`inline-block w-60 md:w-80 h-15 ${direction} bg-no-repeat bg-center bg-contain ml-15 cursor-pointer`}></span>
    )
}

export default Arrow;