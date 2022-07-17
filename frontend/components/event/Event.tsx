import dayjs from "../../lib/dayjs";
import { IEvent } from "../../interfaces/event";
import { truncate } from "../../lib/utils";
import Link from "next/link";

const EventItem:React.FC<{event: IEvent}> = ({event}) => {
    return (
        <Link href={`/events/${event.id}`}>
            <a>
                <div className="flex flex-col md:flex-row">
                    <div className="md:hidden w-120 h-[1px] -ml-20 mb-30 bg-black"></div>
                    <div className="mr-20">
                        <div className="flex md:flex-col items-center justify-center w-100 h-40 md:h-100 mb-10 md:mb-0 bg-gray-light">
                            <span className="md:text-md font-bold mr-5 md:mr-0">{dayjs.utc(event.createdAt).format('DD')}</span>
                            <span className="md:text-md font-bold">
                                <span className="hidden md:inline-block">{dayjs.utc(event.createdAt).format('MMMM')}</span>
                                <span className="md:hidden">{dayjs.utc(event.createdAt).format('MMM')}</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className="text-base md:text-lg font-medium mb-10">{event.title}</p>
                        <p>{truncate(event.content, 80)}</p>
                    </div>
                </div>
            </a>
        </Link>
       
    )
}

export default EventItem;