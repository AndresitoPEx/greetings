import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center p-3">
                <h3 className="text-2xl font-bold text-white">
                    <Link href="/" className="font-bold text-3xl">My Tasks</Link>
                </h3>
                <ul className="flex gap-x-2 text-lg font-bold">
                    <li>
                        <Link href="/new" className=" ml-3 py-2 px-4 rounded-full text-slate-300 hover:text-slate-200 font-bold">Create Task</Link>
                    </li>
                    <li>
                        <Link href="/about"
                            className=" ml-3 py-2 px-4 rounded-full text-slate-300 hover:text-slate-200 font-bold">About</Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar