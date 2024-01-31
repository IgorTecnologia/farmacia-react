import Categoria from "./Categoria";

export default interface Produto{
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    laboratorio: string;
    preco: string;
    foto: string;
    categoria: Categoria | null;
}