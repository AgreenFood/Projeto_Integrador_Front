import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <div className="bg-casca-ovo flex justify-center h-[80vh]">
                <div className="container grid grid-cols-2 font-poppins text-verde-leve">

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Bem-vindes ao</h2>
                        <h2 className="text-5xl font-bold">AGreenFood!</h2>
                        <p className="text-xl font-montserrat font-bold me-0">Do campo direto para a sua mesa!</p>

                        <div className="flex justify-center">
                            <img
                                src="..\..\src\assets\img\farmer.gif"
                                alt="Imagem da Home"
                                width='400px'
                            />
                        </div>

                    </div>

                    <div className="flex justify-center items-center">
                        <Link to={`/login`}>
                        <button className="h-24 w-5/6 m-10 border rounded-2xl bg-android-verde hover:bg-green-900 text-white font-montserrat font-bold uppercase">Login</button>
                        </Link>
                        <Link to={`/cadastro`}>
                        <button className="h-24 w-2/4 m-20 border rounded-2xl bg-android-verde hover:bg-green-900 text-white font-montserrat font-bold uppercase">Cadastrar</button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home