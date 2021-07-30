import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import Head from 'next/head'
import {signIn} from 'next-auth/client'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Login</title>
      </Head>
      <Image
        src='https://www.dignited.com/wp-content/uploads/2020/04/Google-Docs-Header-1280x720-1-1024x576.png'
        height='300'
        width='550'
        objectFit='contain'
      />
      <Button
        className='w-44 mt-10'
        color='blue'
        buttonType='filled'
        ripple='light'
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  )
}

export default Login
