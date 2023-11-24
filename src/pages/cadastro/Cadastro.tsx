import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'
import './Cadastro.css'
import { toastAlerta } from '../../utilis/toastAlerta'

function Cadastro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [confirmarSenha, setConfirmarSenha] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nomeCompleto: "",
        usuario: "",
        senha: "",
        foto: "",
        docIdentificador: "",
        cep: 0,
        numeroResidencial: "",
        dataNascimento: ""
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario)
                toastAlerta('Usuário cadastrado com sucesso', "sucesso")

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', "erro")
            }

        } else {
            toastAlerta('Erro ao cadastrar o Usuário', "erro")
            setUsuario({ ...usuario, senha: "" })
            setConfirmarSenha("")
        }

        setIsLoading(false)
    }
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold bg-casca-ovo py-4 h-screen'>
                <div className='fundoCadastro hidden lg:block'></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
                    <h2 className='font-poppins text-verde-leve text-5xl'>Cadastrar</h2>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='nomeCompleto'>Nome</label>
                        <input
                            type='text'
                            id='nomeCompleto'
                            name='nomeCompleto'
                            placeholder='(mínimo 5 caracteres e máximo 20)'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.nomeCompleto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='usuario'>Email</label>
                        <input
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='digite um email válido'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='docIdentificador'>Documento Identificador</label>
                        <input
                            type='text'
                            id='docIdentificador'
                            name='docIdentificador'
                            placeholder='Documento Identificador (mínimo 7 caracteres)'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.docIdentificador}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='cep'>CEP</label>
                        <input
                            id='cep'
                            name='cep'
                            placeholder='CEP'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.cep}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='numeroResidencial'>Número Residencial</label>
                        <input
                            type='text'
                            id='numeroResidencial'
                            name='numeroResidencial'
                            placeholder='digite um número válido'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.numeroResidencial}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='dataNascimento'>Data de Nascimento</label>
                        <input
                            type='text'
                            id='dataNascimento'
                            name='dataNascimento'
                            placeholder='Data de Nascimento (aaaa-mm-dd)'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.dataNascimento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    {/* <div className='flex flex-col w-full'>
                        <label htmlFor='foto'>Foto</label>
                        <input
                            type='text'
                            id='foto'
                            name='foto'
                            placeholder='Link da Foto'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div> */}

                    <div className='flex flex-col w-full'>
                        <label htmlFor='senha'>Senha</label>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            placeholder='Senha (mínimo 8 caracteres)'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='confirmarSenha'>Confirmar Senha</label>
                        <input
                            type='text'
                            id='confirmarSenha'
                            name='confirmarSenha'
                            placeholder='Confirmar Senha'
                            className='border-2 border-slate-700 rounded p-2'
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                            />
                    </div>

                    <div className='flex justify-around w-full gap-8'>
                        <button className='rounded text-white bg-castanha-profunda hover:bg-red-900 w-1/2 py-2' onClick={retornar}>
                            Cancelar
                        </button>

                        <button type='submit' className='rounded text-white bg-android-verde hover:bg-indigo-900 w-1/2
                        py-2 flex justify-center'>
                            {isLoading ? < RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='24'
                                visible={true}
                                /> :
                                <span>Cadastrar</span> }
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro