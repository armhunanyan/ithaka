import type { NextPage } from 'next'
import axios from 'axios';
import Section from '../../../components/section/Section'
import { IAbout } from '../../../interfaces/about';
import AboutItem from '../../../components/about-item/AboutItem';
import Back from '../../../components/back/Back';
import { aboutItemsPath } from '../../../lib/api';

const AboutInfo: NextPage<{aboutItems: IAbout[]}> = ({aboutItems}) => {
  return (
    <main className='overflow-hidden'>
      <Section title='About us' titleLine={false} className='md:pt-0'>
        {aboutItems?.map(aboutItem => <AboutItem key={aboutItem.id} about={aboutItem} />)}
        <Back href="/about" />
      </Section>
      
    </main>
  )
}

export async function getServerSideProps(context: any) {
  const aboutItems = await axios({
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      url: aboutItemsPath
  });

  return {
    props: {
      aboutItems: aboutItems.data
    }
  }
}

export default AboutInfo
