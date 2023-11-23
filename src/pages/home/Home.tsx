import { Link } from "react-router-dom"
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"

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
                                src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT
                                "
                                alt="Imagem da Home"
                                width='400px'
                            />
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">



                    </div>

                </div>
            </div>

        </>
    )
}

export default Home