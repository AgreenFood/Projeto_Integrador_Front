export default interface UsuarioLogin {
    id: number;
    nomeCompleto: string;
    usuario: string;
    senha: string;
    docIdentificador: string;
    cep: number;
    numeroResidencial: string;
    dataNascimento: string;
    foto: string;
    token: string;
}