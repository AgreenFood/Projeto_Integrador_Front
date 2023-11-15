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
                       {/* AQUI FICA OS CARDS */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home