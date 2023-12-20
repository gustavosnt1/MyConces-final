export class Carro  {

    constructor(
        public marca: string, 
        public modelo: string, 
        public cor: string, 
        public anoFabricacao: string,
        public quilometragem: string, 
        public preco: number, 
        public categoria: string, 
        public qtdDisponivel: number, 
        public id?: string, 
       ){

        }
}