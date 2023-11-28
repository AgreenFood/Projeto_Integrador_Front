import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import data from "../../../assets/data/categorias.json";

interface CardProdutosProps {
    post: Produto
}

const categorias_arquivo = data.categoria;

function CardProdutos({ post }: CardProdutosProps) {
    const { usuario } = useContext(AuthContext)

    var categoria_selecionada = categorias_arquivo.filter(item => item.tipo == post.categorias?.tipo);

    var foto: string;

    if (categoria_selecionada.length > 0) {
        foto = categoria_selecionada[0].foto;
    } else {
        foto = "https://img.freepik.com/vetores-gratis/conjunto-isometrico-de-fast-food_1284-21631.jpg?size=626&ext=jpg&ga=GA1.1.98433698.1701005489&semt=sph";
    }

    return (
        <div className="border-slate-900 flex flex-col roundend overflow-hidden justify-between">
            <div>
                <div className="flex w-full bg-verde-leve py-2 px-4 items-center gap-4">
                    <img src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT" className="h-12 rounded-full" alt="Imagem do usuário" />
                    <h3 className="text-lg font-bold text-center uppercase">{post.usuario?.nomeCompleto}:</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
                    <p>{post.descricao}:</p>
                    <p>{post.valor}</p>
                    <p>{post.quantidade}</p>
                    <p>{post.vendedor}</p>
                    <p>Categoria: {post.categorias?.tipo} </p>
                    <img src={foto} width="200" height="150" />
                </div>
            </div>
            {usuario.id === post.usuario?.id ? (
                <div className="flex">
                    <Link to={`/editarProduto/${post.id}`} className="w-full text-white bg-verde-leve hover:bg-maio-verde flex items-center justify-center py-2">
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarProduto/${post.id}`} className="text-white bg-castanha-profunda hover:bg-red-700 w-full flex items-center justify-center py-2">
                        <button>Deletar</button>
                    </Link>
                </div>
            ) : (<div className="text-slate-100 bg-castanha-profunda hover:bg-red-900 w-full flex items-center justify-center">
                <button>Comprar</button>
            </div>)}

        </div>
    )
}

export default CardProdutos