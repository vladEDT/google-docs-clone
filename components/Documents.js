import Icon from '@material-tailwind/react/Icon'
import DocumentRow from './DocumentRow'

function Documents({snapshot}) {
  return (
    <section className='bg-white max-w-3xl mx-auto px-10 md:px-0 py-8'>
      <div className=' text-sm text-gray-700'>
        <div className='flex items-center justify-between pb-5'>
          <h2 className='font-medium flex-grow'>My Documents</h2>
          <p className='mr-12'>Date Created</p>
          <Icon name='folder' size='3xl' color='gray' />
        </div>
      </div>

      {snapshot?.docs.map(doc => (
        <DocumentRow
          key={doc.id}
          date={doc.data().timestamp}
          id={doc.id}
          fileName={doc.data().fileName}
        />
      ))}
    </section>
  )
}

export default Documents
