import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Produto from "../../../models/Produto";
import CardProdutos from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utilis/toastAlerta";

function ListaProdutos() {

    const navigate = useNavigate();

    const [produto, setProduto] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProduto, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'erro')
                handleLogout()
            }
        }
    }

    // useEffect(() => {
    //     if (token === '') {
    //         toastAlerta('VocÃª precisa estar logado', 'erro')
    //         navigate('/login')
    //     }
    // }, [token])

    useEffect(() => {
        buscarProdutos()
    }, [produto.length])

    return (
        <>
            {produto.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper mx-auto"
                    wrapperStyle={{}}
                    />
            )}
            <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {produto.map((produto) => (
                    <CardProdutos key={produto.id} post={produto} />
                ))}
            </div>
        </>
    )
}

export default ListaProdutos