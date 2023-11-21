import { Link } from "react-router-dom"

function Navbar() {



    return (
        <>
            <div className="w-full bg-hunter-green text-white flex justify-around py-4">

                <div className="container flex justify-between text-lg">
                    <Link to={`/Home`}>
                        <img
                            src="..\..\src\assets\img\logo.svg"
                            alt=""
                            width="75rem"
                        />
                    </Link>
                </div>

                <div className="py-4">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-android-verde hover:bg-maio-verde-800 focus:ring-4 focus:outline-none focus:ring-maio-verde-300 font-poppins font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-android-verde dark:hover:bg-maio-verde-700 dark:focus:ring-maio-verde-800" type="button"> MENU <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className="z-10 hidden bg-android-verde divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
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
                                <Link to="/sobre" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Contato</Link>
                            </li>
                            <li>
                                <Link to="/equipe" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-montserrat font-bold"> Equipe</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar