import { ConcessionariaDAO } from './ConcessionariaDAO';
import Concessionaria from './Concessionaria';

import { PessoaDAO } from './pessoaDAO';
import Pessoa from './Pessoa';
import { DAO } from './DAO';
// let daoConcenssonaria: ConcessionariaDAO = new ConcessionariaDAO;
// let daoPessoa: PessoaDAO = new PessoaDAO;

let pessoa: Pessoa = new Pessoa('','');
let concessionaria = new Concessionaria('', []);

let daoConcessioaria: DAO<Concessionaria> = new DAO<Concessionaria>();
let daoPessoa: DAO<Pessoa> = new DAO<Pessoa>();

daoConcessioaria.inserir(concessionaria);

daoPessoa.remover(5);