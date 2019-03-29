import { InterfaceDAO } from "./interfaceDAO";

export class DAO<tipo> implements InterfaceDAO<tipo>{
    nomeTabela: string = '';

    inserir(objeto: tipo): boolean{
        console.log('logica de inserir os mano');
        return true
    }
    atualizar(objeto: tipo):boolean{
        console.log('logica update');
        return true;
    };
    remover(id: number): tipo{
        console.log('logica remover');
        return Object();
    };
    selecionar(id: number): tipo{
        console.log('logica select')
        return Object();
    };
    selecionarTodos(): [any] {
        console.log('selecionar todos');
        return Object();
    };
}