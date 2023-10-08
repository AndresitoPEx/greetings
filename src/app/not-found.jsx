import Link from "next/link"

function NotFound() {
  return (
    <section className="text-white h-[calc(100vh-7rem)] justify-center items-center flex">
        <div className="text-center">
            <h1 className="text-9xl uppercase font-black">
            404-NOT FOUND
            </h1>
            <Link href="/" className="text-2xl font-bold text-white hover:text-slate-200 hover:cursor-pointer">
                Go Back Home
            </Link>
        </div>
    </section>
  )
}

export default NotFound