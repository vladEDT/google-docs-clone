import Head from 'next/head'
import {getSession, useSession} from 'next-auth/client'
import Documents from '../components/Documents'
import Header from '../components/Header'
import StartDoc from '../components/StartDoc'
import Login from '../components/Login'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import {useState} from 'react'
import Button from '@material-tailwind/react/Button'
import {db} from '../firebaseConfig'
import firebase from 'firebase'
import {useCollectionOnce} from 'react-firebase-hooks/firestore'

export default function Home() {
  const [session] = useSession()

  if (!session) return <Login />

  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState('')

  const [snapshot] = useCollectionOnce(
    db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .orderBy('timestamp', 'desc')
  )

  const createDocument = () => {
    if (!input) return

    db.collection('userDocs').doc(session.user.email).collection('docs').add({
      fileName: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
    setShowModal(false)
  }

  const modal = (
    <Modal size='sm' active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type='text'
          className='outline-none w-full'
          placeholder='Enter name of document'
          onKeyDown={e => e.key === 'Enter' && createDocument()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color='blue'
          buttonType='link'
          onClick={() => setShowModal(false)}
          ripple='dark'
        >
          Cancel
        </Button>

        <Button color='blue' ripple='light' onClick={createDocument}>
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      <Head>
        <title>Gooogle Docs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {modal}

      <main>
        <StartDoc setShowModal={setShowModal} />
        <Documents snapshot={snapshot} />
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
