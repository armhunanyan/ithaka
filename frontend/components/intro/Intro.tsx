import Section from "../section/Section";

interface IInputInterface {
    col: any;
    image: string;
}

export const Intro:React.FC<IInputInterface> = ({col, image}) => {
    return (
        <Section className='md:pt-0'>
            <div className='bg-gray-light'>
                <div className='grid md:grid-cols-25 items-center'>
                    <div className='md:col-span-13 px-20 py-25'>
                        {col}
                    </div>
                    <div className='md:col-span-12'>
                        <div className='aspect-w-9 aspect-h-10'>
                            <img className='object-cover object-center' src={image} />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}