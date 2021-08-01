import React, {useRef} from 'react'
import Popover from '@material-tailwind/react/Popover'
import PopoverContainer from '@material-tailwind/react/PopoverContainer'
import PopoverHeader from '@material-tailwind/react/PopoverHeader'
import PopoverBody from '@material-tailwind/react/PopoverBody'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import {db} from '../firebaseConfig'
import {useSession} from 'next-auth/client'

export default function Pop({id}) {
  const buttonRef = useRef()
  const [session] = useSession()

  const removeDocument = id => {
    db.collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .doc(id)
      .delete()
  }

  return (
    <>
      <Button
        color='gray'
        buttonType='outline'
        iconOnly={true}
        ripple='dark'
        rounded={true}
        className='border-0'
        ref={buttonRef}
      >
        <Icon name='more_vert' size='3xl' />
      </Button>

      <Popover placement='left' ref={buttonRef}>
        <PopoverContainer>
          <PopoverHeader>Available Actions</PopoverHeader>
          <PopoverBody>
            <div
              className='p-2 text-center text-black rounded-lg text-base cursor-pointer hover:bg-red-500'
              onClick={() => removeDocument(id)}
            >
              Delete
            </div>
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  )
}
