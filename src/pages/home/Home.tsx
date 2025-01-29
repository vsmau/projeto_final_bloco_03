
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center min-h-[75vh]">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Remédios de A a Z
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Categoria
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn-icons-png.freepik.com/512/4320/4320337.png"
                            alt="Imagem Página Home"
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home