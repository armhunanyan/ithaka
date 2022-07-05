import type { NextPage } from 'next'
import Head from 'next/head';
import Contacts from '../../components/contacts/Contacts';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
          <title>Contact | {process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Contacts/>
    </>
  )
}

export default Contact
