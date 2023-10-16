
const Button = ({link,text}) => {
  return (
    <a
      href={link}
      rel='noreferrer'
      target='_blank'
      className='flex items-center justify-center'
    >
      <div className='mr-4 rounded-lg px-6 md:px-8 py-2 bg-primary flex items-center justify-center'>
        <span className='text-base text-black font-semibold tracking-normal'>
          {text}
        </span>
      </div>
    </a>
  )
}

export default Button