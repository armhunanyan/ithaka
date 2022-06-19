import Arrow from "../arrow/Arrow";
import { Input } from "../form/Form";
import Section from "../section/Section";
import SectionTitle from "../texting/SectionTitle";

const Contacts:React.FC = () => {
    return (
        <Section titleLine={false} className="bg-gray-light bg-contacts bg-no-repeat bg-bottom md:bg-right bg-[length:auto_40%] md:bg-[length:50%_auto]">
            <div className="grid md:grid-cols-2 gap-30 md:gap-120 items-center">
                <div>
                    <SectionTitle text="Contact Us" line={false} />
                    <div className="grid md:grid-cols-2 gap-20 md:gap-x-60 md:gap-y-30">
                        <div>
                            <Input label="First name" name="firstName" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <Input label="Last name" name="lastName" placeholder="Enter your last name"/>
                        </div>
                        <div>
                            <Input label="Email" name="email" placeholder="Enter your email"/>
                        </div>
                        <div>
                            <Input label="Phone number" name="phone" placeholder="Enter your phone number"/>
                        </div>
                        <div className="md:col-span-2">
                            <Input label="Message" name="message" placeholder="Enter your message"/>
                        </div>
                        <div className="md:col-span-2">
                            <p className="flex items-center text-base md:text-md text-black font-medium cursor-pointer">
                                <span>Submit</span>
                                <Arrow/>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-40 py-100 md:py-0">
                        <p className="text-lg mb-20 font-medium">Studio in yerevan</p>
                        <p className="font-light mb-10">0070, Yerevan, Aygestan 5th street, 6 “ITHAKE666” LLC</p>
                        <p className="font-light mb-15">Phone: + 374 77 71 19 33</p>
                        <p className="font-light mb-20">Email: info@ithakastudio.com</p>
                        <p className="text-md font-medium cursor-pointer">Vew on map</p>
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default Contacts;