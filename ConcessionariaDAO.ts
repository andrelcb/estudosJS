import { InterfaceDAO } from './interfaceDAO';
import Concessionaria from './Concessionaria';

export class ConcessionariaDAO implements InterfaceDAO{
    nomeTabela: string = 'concenssionaria';

    inserir(objeto: Concessionaria): boolean{
        console.log('logica de inserir os mano');
        return true
    }
    atualizar(objeto: Concessionaria):boolean{
        console.log('logica update');
        return true;
    };
    remover(id: number): Concessionaria{
        console.log('logica remover');
        return new Concessionaria('', []);
    };
    selecionar(id: number): Concessionaria{
        console.log('logica select')
        return new Concessionaria('', []);
    };
    selecionarTodos(): [any] {
        console.log('selecionar todos');
        return [new Concessionaria('', [])];
    };
}