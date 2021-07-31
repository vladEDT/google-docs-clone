import {db} from '../../firebaseConfig'
import {useDocumentOnce} from 'react-firebase-hooks/firestore'
import Icon from '@material-tailwind/react/Icon'
import Login from '../../components/Login'
import {getSession, useSession, signOut} from 'next-auth/client'
import Button from '@material-tailwind/react/Button'
import {useRouter} from 'next/dist/client/router'
import TextEditor from '../../components/TextEditor'
import Head from 'next/head'

function Doc() {
  const [session] = useSession()

  if (!session) return <Login />

  const router = useRouter()
  const {id} = router.query
  const [snapshot, loading] = useDocumentOnce(
    db.collection('userDocs').doc(session.user.email).collection('docs').doc(id)
  )

  const fileName = snapshot?.data()?.fileName

  if (!loading && !fileName) {
    router.replace('/')
  }

  return (
    <div>
      <Head>
        <title>{fileName}</title>
      </Head>
      <header className='flex justify-between items-center p-3 pb-1'>
        <span onClick={() => router.push('/')} className='cursor-pointer'>
          <Icon name='description' size='5xl' color='blue' />
        </span>

        <div className='flex-grow px-2'>
          <h2>{fileName}</h2>
          <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
            <p className='option'>File</p>
            <p className='option'>Edit</p>
            <p className='option'>View</p>
            <p className='option'>Insert</p>
            <p className='option'>Format</p>
            <p className='option'>Tools</p>
          </div>
        </div>

        <Button
          color='lightBlue'
          buttonType='filled'
          size='regular'
          className='hidden md:!inline-flex h-10'
          rounded={false}
          block={false}
          iconOnly={false}
          ripple='light'
        >
          <Icon name='people' size='md' /> SHARE
        </Button>

        <img
          className='rounded-full cursor-pointer h-10 w10 ml-2'
          loading='lazy'
          src={session.user.image}
          alt='profile'
        />
      </header>

      <TextEditor />
    </div>
  )
}

export default Doc

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
