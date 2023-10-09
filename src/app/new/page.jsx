"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NewPage = ({ params }) => {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setDescription(data.description);
                })
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();

        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const json = await res.json();


        } else {


            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            const json = await res.json();
        }
        router.refresh();
        router.push('/');
    }


    return (
        <div className="text-white h-screen flex justify-center items-center">

            <form className="bg-gray-500 p-10 "
                onSubmit={onSubmit}
            >
                <div className="text-xl mb-5">Crear tarea</div>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        className="border border-gray-400 p-2 mb-4 w-full text-black"
                        id="title"
                        aria-describedby="emailHelp"
                        placeholder="Título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        className="border border-gray-400 p-2 mb-4 w-full text-black"
                        id="description"
                        placeholder="Descripción"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear
                    </button>

                    {
                        params.id && (
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                                onClick={async () => {
                                    await fetch(`/api/tasks/${params.id}`, {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                    router.refresh();
                                    router.push('/');
                                }}
                            >
                                Eliminar
                            </button>
                        )
                    }
                </div>

            </form>


        </div>
    )
}

export default NewPage