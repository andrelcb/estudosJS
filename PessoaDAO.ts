import { InterfaceDAO } from './interfaceDAO';
import Pessoa from './Pessoa';

export class PessoaDAO implements InterfaceDAO{
    nomeTabela: string = 'pessoa';

    inserir(objeto: Pessoa): boolean{
        console.log('logica de inserir os mano');
        return true
    }
    atualizar(objeto: Pessoa):boolean{
        console.log('logica update');
        return true;
    };
    remover(id: number): Pessoa{
        console.log('logica remover');
        return new Pessoa('','');
    };
    selecionar(id: number): Pessoa{
        console.log('logica select')
        return new Pessoa('','');
    };
    selecionarTodos(): [any] {
        console.log('selecionar todos');
        return [new Pessoa('','')];
    };
}