import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
    data: string | number | Date;
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
    vendedor: string;
    foto: string;
    categorias: Categoria | null;
    usuario: Usuario | null;
}