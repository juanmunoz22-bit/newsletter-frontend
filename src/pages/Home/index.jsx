const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">
        Stori Newsletters
      </h1>
      <div className="flex items-center justify-center gap-4 px-56 mt-14">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">

          <img
            alt=""
            src="https://images.unsplash.com/photo-1592781959445-63e59ba0666d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <a href="/info">
              <h3 className="mt-0.5 text-lg text-gray-900">Email template creator</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Engine to create email templates
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">

          <img
            alt=""
            src="https://images.unsplash.com/photo-1577563820627-bc12aa2139de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">

            <a href="/sender">
              <h3 className="mt-0.5 text-lg text-gray-900">Sender</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Send email templates
            </p>
          </div>
        </article>
      </div>
    </>
  )
}

export default Home