interface IServiceProps {
    title: string;
    image: string;
    orientation?: 'vertical' | 'horizontal'
}

const Service:React.FC<IServiceProps> = ({title, image}) => {
    return (
        <div className="relative aspect-w-3 aspect-h-7">
            <div className="flex flex-col justify-end">
                <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000 ease-out" style={{backgroundImage: `url("${image}")`}}></div>
                <div className="absolute bottom-15 left-5 right-5 flex justify-center items-center" style={{
                    height: '72px',
                    background: 'rgba(207, 207, 207, 0.05)',
                    backdropFilter: 'blur(10px)',
                }}>
                    <p className="text-white text-center text-base md:text-lg font-bold">{title}</p>
                </div> 
            </div>                 
        </div>
    )
}

export default Service;