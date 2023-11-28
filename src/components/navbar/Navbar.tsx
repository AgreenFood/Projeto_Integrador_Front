import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { toastAlerta } from "../../utilis/toastAlerta"


function Navbar() {

    const navigate = useNavigate()
    const { handleLogout, usuario } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }



    return (
        <>
            <div className="w-full bg-hunter-green text-white flex justify-around py-4">

                <div className="container flex justify-between text-lg">
                    <Link to={`/Home`}>
                        <img
                            src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT"
                            alt="Logo AgreenFood"
                            width="75rem"
                        />
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>

                </div>

                <div className="py-4 mx-4">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-android-verde 
                        hover:bg-maio-verde-800 focus:ring-4 focus:outline-none focus:ring-maio-verde-300 font-poppins 
                        font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-android-verde 
                        dark:hover:bg-maio-verde-700 dark:focus:ring-maio-verde-800" type="button"> MENU <svg className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>


                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className="z-10 hidden bg-android-verde divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            {usuario.token !== "" ? (
                                <>
                                    <li>
                                        <Link to="/home" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/categorias" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Categoria</Link>
                                    </li>
                                    <li>
                                        <Link to="/produtos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Produto</Link>
                                    </li>
                                    <li>
                                        <Link to="/contato" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Contato</Link>
                                    </li>
                                    <li>
                                        <Link to="/equipe" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Equipe</Link>
                                    </li>
                                    <li>
                                        <Link to='' onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Sair</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Home</Link>
                                    </li>
                                    {/*
        A linha abaixo será renderizada apenas se o token do usuário for diferente de vazio
        */}
                                    {usuario.token !== "" && (
                                        <li>
                                            <Link to="/categorias" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Categoria</Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link to="/produtos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Produto</Link>
                                    </li>
                                    <li>
                                        <Link to="/contato" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Contato</Link>
                                    </li>
                                    <li>
                                        <Link to="/equipe" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Equipe</Link>
                                    </li>
                                    <li>
                                        <Link to='/login' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold'>Login</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Navbar