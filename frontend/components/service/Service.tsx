import Link from "next/link";
import { IService, ServiceOrientation } from "../../interfaces/service";
import Button from "../button/Button";

interface IServiceProps {
    service: IService;
    orientation?: ServiceOrientation
    isActive?: boolean;
    onClickHandeler?: any;
}

const Service:React.FC<IServiceProps> = ({service, orientation = 'vertical', isActive = false, onClickHandeler}) => {
    const onServiceClickHandeler = () => {
        onClickHandeler?.(service.id);
    }
    return (
        <div className={`relative cursor-pointer aspect-w-3 aspect-h-7 ${orientation == ServiceOrientation.horizontal ? 'md:aspect-w-4 md:aspect-h-1' : ''}`} onClick={onServiceClickHandeler}>
            <div className="flex flex-col justify-end">
                <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000 ease-out" style={{backgroundImage: `url("${service.image}")`}}></div>
                <div className="absolute bottom-15 left-5 right-5 flex justify-center items-center" style={{
                    height: !isActive ? '72px' : 'auto',
                    background: 'rgba(207, 207, 207, 0.05)',
                    backdropFilter: 'blur(10px)',
                    padding: !isActive ? '0 5px' : '20px 5px',
                }}>
                    <div className="text-white text-center">
                        <p className="text-base md:text-lg font-bold">{service.title}</p>
                        {isActive && (
                            <>
                                <p className="text-xs md:text-base mt-10">{service.content}</p>
                                {service.hasSurvey && (
                                    <div className="mt-10 md:mt-20" onClick={(e) => e.stopPropagation()}>
                                        <Button className="w-full">
                                            <Link href="/services/survey">
                                                Take a survey
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div> 
            </div>                 
        </div>
    )
}

export default Service;