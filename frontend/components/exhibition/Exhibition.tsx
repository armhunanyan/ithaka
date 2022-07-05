import { useState } from "react";
import { IExhibition } from "../../interfaces/exhibition";
import { truncate } from "../../lib/utils";
import Close from "../close/Close";
import ReadMore from "../read-more/ReadMore";

const Exhibition:React.FC<{exhibition: IExhibition}> = ({exhibition}) => {
    const [show, setShow] = useState<boolean>(false);

    const onReadMore = () => {
        setShow(true);
    }
    const onClose = () => {
        setShow(false);
    }

    return (
        <div className="grid md:grid-cols-3 items-center gap-20">
            <div className="text-center md:text-left">
                <img className="inline-block w-full max-w-[170px] " src={exhibition.image}/>
                <p className="text-base md:text-lg font-medium mt-5 md:mt-10">{exhibition.companyName}</p>
            </div>
            <div className="md:col-span-2">
                <p className="text-base md:text-lg font-medium mb-10 md:mb-20">{exhibition.title}</p>
                <p>{show ? exhibition.description : truncate(exhibition.description, 200) }</p>
                <div className="mt-10 md:mt-20">
                    {show ? <Close onClick={onClose}/> : <ReadMore onClick={onReadMore}/>}
                </div>
            </div>
        </div>
    )
}

export default Exhibition;