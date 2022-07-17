import axios from 'axios';
import { NextPage } from 'next';
import Section from '../../components/section/Section';
import { IProject } from '../../interfaces/project';
import { newsPath, projectByIdPath } from '../../lib/api';

const Project: NextPage<{project: IProject}> = ({project}) => {
    console.log(project.content);
    const textSections = project.content.split('\n\n');
    const images = project.images;
    const rows = Math.min(textSections.length, images.length);
    const getRows = () => {
        const elements: JSX.Element[] = [];
        for (let i = 0; i < rows; i++) {
            elements.push((
                <div className="grid grid-cols-2 gap-60 items-center">
                    <div className={i % 2 === 0 ? 'order-1' : 'order-2'}>
                        <p>{textSections[i]}</p>
                    </div>
                    <div className={i % 2 === 0 ? 'order-2' : 'order-1'}>
                        <img className="w-full" src={images[i]} />
                    </div>
                </div>
            ))
        }
        return elements;
    }
    return (
        <div>
            <Section className='md:pt-0'>
                <div>
                    <p className="text-2xl font-bold mb-25">{project.title}</p>
                    <div className='aspect-w-12 aspect-h-5'>
                        <img className='object-cover object-center' src={project.image} />
                    </div>
                </div>
                <div className="mt-100">
                    <div className="grid gap-60">
                        {getRows()}
                    </div>
                </div>
                <div className="mt-60">
                    {textSections.slice(rows, textSections.length).map(text => {
                        return <p>{text}</p>
                    })}
                    <div className="grid grid-cols-2 gap-60">
                        {images.slice(rows, images.length).map(image => {
                            return (
                                <div className='aspect-w-3 aspect-h-2'>
                                    <img className='object-cover object-center' src={image} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
};

export async function getServerSideProps(context: any) {
    const project = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: projectByIdPath(context.query.id)
    });

    return {
      props: {
        project: project.data,
      }
    }
}

export default Project
