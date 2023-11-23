import { ReactNode, createContext, useState } from "react";

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../assets/utilis/toastAlerta";



interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}


interface AuthProviderProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nomeCompleto: "",
        usuario: "",
        senha: "",
        docIdentificador: "",
        cep: 0,
        numeroResidencial: "",
        dataNascimento: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            await login(`/usuario/logar`, userLogin, setUsuario)
            toastAlerta("Usuario logado com sucesso", 'sucesso')
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nomeCompleto: "",
            usuario: "",
            senha: "",
            docIdentificador: "",
            cep: 0,
            numeroResidencial: "",
            dataNascimento: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}