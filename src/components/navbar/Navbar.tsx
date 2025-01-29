import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmácia</Link>

                    <div className='flex gap-5'>
                        <div><Link to='/categorias' className='hover:underline'>Categorias</Link></div>
                        <div><Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar/Atualizar</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar