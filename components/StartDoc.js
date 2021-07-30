function StartDoc() {
  return (
    <section className='bg-[#f8f9fa] pb-10 px-10'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-center justify-between py-6'>
          <h2 className='text-gray-700 text-lg'>Create a new document</h2>
          <Button
            color='gray'
            buttonType='outline'
            iconOnly={true}
            ripple='dark'
            rounded='full'
            className='border-0'
          >
            <Icon name='more_vert' size='3xl' />
          </Button>
        </div>

        <div>
          <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700'>
            <Image
              src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
              layout='fill'
            />
          </div>
          <p className='ml-2 mt-5 font-semibold text-sm text-gray-700'>Blank</p>
        </div>
      </div>
    </section>
  )
}

export default StartDoc
