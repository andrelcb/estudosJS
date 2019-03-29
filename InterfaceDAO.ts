export interface InterfaceDAO<tipo> {
    nomeTabela :string;

    inserir(objeto: tipo): boolean;
    atualizar(objeto: tipo):boolean;
    remover(id: number): tipo;
    selecionar(id: number): tipo;
    selecionarTodos(): [tipo];
}