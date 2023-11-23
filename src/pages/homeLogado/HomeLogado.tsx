import { Link } from "react-router-dom"
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"

function Home() {

    return (
        <>
            <div className="bg-casca-ovo flex justify-center h-[100vh]">
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

                    <div className="flex justify-center items-center mt-40">

                        <Link to="/CadastroCategoria">
                            <button className="h-20 m-10 my-10 border rounded-2xl bg-android-verde hover:bg-green-900 text-white font-montserrat font-bold uppercase">
                                <p className="mx-4">Nova Categoria</p>
                            </button>
                        </Link>

                        <Link to="/cadastroProduto">
                            <button className="h-20 m-10 border rounded-2xl bg-android-verde hover:bg-green-900 text-white font-montserrat font-bold uppercase">
                                <p className="mx-4">Novo Produto</p>
                            </button>
                        </Link>

                    </div>

                </div>
            </div>

            <ListaProdutos />
        </>
    )
}

export default Home