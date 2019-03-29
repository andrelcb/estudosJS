import {InterfaceConcessionaria} from "./InterfaceConcessionaria";
import Carro from "./Carro";
export default class Concessionaria implements InterfaceConcessionaria{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
    
    public fornecerHorariosDeFuncionamento(): string {
        return "De segunda a sexta das 8:00 as 16:00"
    }
}