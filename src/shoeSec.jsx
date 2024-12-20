/* eslint-disable react/prop-types */
const ShoeSec = (props) => {
  return (
    <>
      <section className='w-full' >
        <div className="continer">
          <div className="raw">
            <h2 className='heading text-2xl font-bold my-6 justify-center' >{props.heading}</h2>
          </div>
          <div className="raw ">
            {props.children}
          </div>
        </div>

        <div className="flex flex-row justify-between">

        </div>

      </section>
    </>
  )
}
export default ShoeSec;