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
                    <img
                            src="https://img.freepik.com/vetores-premium/design-de-icone-de-vetor-de-carrinho-de-supermercado-de-supermercado-icone-plano_462371-2312.jpg?size=626&ext=jpg&uid=R128029081&ga=GA1.1.1502328272.1700780875&semt=ais"
                            alt="Carrinho Eco"
                            width="75rem"
                        />

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
                                <li>
                                    <Link to="/home" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Home</Link>
                                </li>
                            ) : (<li>
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Home</Link>
                            </li>)}
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
                            
                            {usuario.token !== "" ? (
                                <li>
                                    <Link to='' onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Sair</Link>
                                </li>
                            ) : (<li>
                                <Link to='/login' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold'>Login</Link>
                            </li>)}

                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar