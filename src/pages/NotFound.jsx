const NotFound = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center ">
      <h2 className="text-8xl font-bold">Error <span className="text-coral-red">404</span></h2>
      <p className="text-info text-slate-gray text-2xl">Sorry, something went wrong!</p>
    </section>
  )
}

export default NotFound;