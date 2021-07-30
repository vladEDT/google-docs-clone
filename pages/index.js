import Icon from '@material-tailwind/react/Icon'
import Head from 'next/head'
import {getSession, useSession} from 'next-auth/client'
import Documents from '../components/Documents'
import Header from '../components/Header'
import StartDoc from '../components/StartDoc'
import Login from '../components/Login'

export default function Home() {
  const [session] = useSession()

  if (!session) return <Login />

  return (
    <div>
      <Head>
        <title>Gooogle Docs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <StartDoc />
        <Documents />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
