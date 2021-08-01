import Icon from '@material-tailwind/react/Icon'
import {useRouter} from 'next/dist/client/router'
import Pop from './Pop'

const DocumentRow = ({id, fileName, date}) => {
  const router = useRouter()

  return (
    <div className='flex items-center p-4 rounded-lg  hover:bg-gray-100 text-gray-700 text-sm'>
      <div
        className='flex items-center cursor-pointer flex-grow'
        onClick={() => router.push(`/doc/${id}`)}
      >
        <Icon name='article' size='3xl' color='blue' />
        <p className='flex-grow pl-5 w-10 pr-10 truncate'>{fileName}</p>
        <p className='pr-5 text-sm'>{date?.toDate().toLocaleDateString()}</p>
      </div>

      <Pop id={id} />
    </div>
  )
}

export default DocumentRow
