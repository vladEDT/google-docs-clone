import Icon from '@material-tailwind/react/Icon'
import Head from 'next/head'
import Documents from '../components/Documents'
import Header from '../components/Header'
import StartDoc from '../components/StartDoc'

export default function Home() {
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
