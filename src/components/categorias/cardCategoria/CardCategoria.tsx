import Categoria from "../../../models/Categoria";
import data from "../../../assets/data/categorias.json";

const categorias_arquivo = data.categoria;

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    var categoria_selecionada = categorias_arquivo.filter(item => item.id == categoria.id);

    var foto: string;

    if (categoria_selecionada.length > 0) {
        foto = categoria_selecionada[0].foto;
    } else {
        foto = "https://img.freepik.com/fotos-gratis/arranjo-dos-frascos-de-alto-angulo_23-2148563195.jpg?size=626&ext=jpg&uid=R128029081&ga=GA1.1.1502328272.1700780875&semt=ais";
    }

    return (

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">

            <header className="py-2 px-6 bg-maio-verde text-white font-bold text-2xl">
                Categoria
            </header>

            <p className="p-8 text-3xl bg-slate-200 h-full">
                {categoria.tipo}
            </p>

            <img src={foto} width="200" height="100" />


            {/* <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className="w-full text-slate-100 bg-verde-leve hover:bg-green-800 flex items-center justify-center py-2">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`} className="text-slate-100 bg-castanha-profunda hover:bg-red-900 w-full flex items-center justify-center">
                    <button>Deletar</button>
                </Link>
            </div> */}
        </div>
    )
}

export default CardCategoria;
