// import DatePill from "../common/DatePill"
import Button from "../common/Button"

const Projects = () => {
  return (
    <section className='mt-20 mb-10'>
    <div className="text-center flex flex-col gap-y-2 mb-10">
        <h1 className="text-darkTextPrimary text-5xl font-bold">Projects</h1>
        <p className=" font-semibold text-darkTextPrimary text-base">
        Most Recent Work 
        </p>
      </div>

      <div>
          <div className='mb-4'>
            <h2 className='text-xl font-bold text-darkTextPrimary'>
            Blog App
            </h2>
          </div>
          <div>
            <p className='mb-2 text-darkTextSecondary font-semibold'>
              A web app for managing documents. Feature rich and simple. Enables
              users to create, save and update documents. Has a rich text editor
              complete with multiple styles. Authentication has been done using
              jwt tokens and Authorization is also set up for keeping users'
              documents safe.
            </p>
            <p className='mb-2 text-darkTextSecondary font-semibold'>
              A lot of focus has been given to collaboration between users. Live
              notifications along with notification badges have been implemented
              using socket.io
            </p>

            <p className='mb-4 text-darkTextSecondary font-semibold'>
              Tech Stack:{' '}
              <span className='font-bold text-textPrimary dark:text-darkTextPrimary'>
                React Context API, Slatejs, Authentication, Authorization,
                Socket.io
              </span>
            </p>

            <div className='flex'>
              <Button
                text='View Project'
                link='https://simple-docs.onrender.com/'
              />
              <Button
                text='GitHub'
                link='https://github.com/pandeymangg/simple-docs'
              />
            </div>
          </div>
        </div>

      
   </section>
  )
}

export default Projects