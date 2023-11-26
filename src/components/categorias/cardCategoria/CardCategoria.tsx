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
        foto = "https://img.freepik.com/vetores-gratis/conjunto-isometrico-de-fast-food_1284-21631.jpg?size=626&ext=jpg&ga=GA1.1.98433698.1701005489&semt=sph";
    }

    return (

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">

            <header className="py-2 px-6 bg-maio-verde text-white font-bold text-2xl">
                Categoria
            </header>

            <p className="p-8 text-3xl bg-slate-200 h-full">
                {categoria.tipo}
            </p>

            <img src={foto} width="200" height="150" />


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
