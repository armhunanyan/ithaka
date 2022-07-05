import type { NextPage } from 'next'
import axios from 'axios';
import Section from '../../../components/section/Section'
import { IExhibition } from '../../../interfaces/exhibition';
import Exhibition from '../../../components/exhibition/Exhibition';
import LightButton from '../../../components/light-button/LightButton';
import Link from 'next/link';
import SectionTitle from '../../../components/texting/SectionTitle';
import Back from '../../../components/back/Back';

const Exhibitions: NextPage<{exhibitions: IExhibition[]}> = ({exhibitions}) => {
  return (
    <main className='overflow-hidden'>
      <Section titleLine={false}>
        <div className='flex justify-between items-center'>
          <SectionTitle text="Exhibitions & awards" line={false} />
          <Back href="/about" />
        </div>

        {exhibitions?.map(exhibition => {
          return (
            <div className='mb-120' key={exhibition.id}>
              <Exhibition exhibition={exhibition} />
            </div>
          )
        })}

        <div className='flex justify-center'>
          <LightButton href="/about">
            Close
          </LightButton>
        </div>
      </Section>
    </main>
  )
}

export async function getServerSideProps(context: any) {
  const exhibitions = await axios({
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      url: `http://localhost:3000/api/exhibitions`
  });

  return {
    props: {
      exhibitions: exhibitions.data
    }
  }
}

export default Exhibitions
