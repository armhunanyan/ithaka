import type { GetServerSideProps, NextPage } from 'next'
import axios from 'axios';
import Contacts from '../../../components/contacts/Contacts';
import Head from 'next/head';
import { categoryByIdPath, projectByCategoryPath } from '../../../lib/api';
import Clients from '../../../components/clients/Clients';
import { ICategory } from '../../../interfaces/category';
import { IProject } from '../../../interfaces/project';
import Project from '../../../components/project/Project';
import Section from '../../../components/section/Section';
import SectionTitle from '../../../components/texting/SectionTitle';
import Link from 'next/link';

interface IProjectsProps {
    category: ICategory;
    projects: IProject[];
}

const ProjectsByCategory: NextPage<IProjectsProps> = ({category, projects}) => {
    return (
        <main className='overflow-hidden'>
            <Head>
                <title>Projects | {process.env.NEXT_PUBLIC_TITLE}</title>
            </Head>

            <Section titleLine={false}>
                <div className='flex justify-between items-center'>
                    <SectionTitle text={`Projects | ${category.title}`} line={false} />
                    <div className='hidden md:block'>
                        <Link href="/projects">
                            <a className='font-medium'>Close</a>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-25">
                    {projects.map((project, index) => {
                        return(
                            <Project key={index} project={project} />
                        )
                    })}
                </div>
            </Section>

            <Clients />
            <Contacts/>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const categoryId:any = context.query.id;
    const category = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: categoryByIdPath(categoryId)
    });
    const projects = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: projectByCategoryPath(categoryId)
    });

    return {
      props: {
        category: category.data,
        projects: projects.data
      }
    }
}

export default ProjectsByCategory
