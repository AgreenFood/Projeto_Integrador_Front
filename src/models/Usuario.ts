import Produto from "./Produto";

export default interface Usuario {
    id: number;
    nomeCompleto: string;
    usuario: string;
    senha: string;
    docIdentificador: string;
    cep: number;
    numeroResidencial: string;
    dataNascimento: string;
    foto: string;
    produto?: Produto | null;
}