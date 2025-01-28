function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-5'>
                        <div>Listar Categorias</div>
                        <div>Cadastrar/Atualizar</div>
                        <div>Deletar</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar