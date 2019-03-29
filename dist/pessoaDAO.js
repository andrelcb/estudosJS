"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'pessoa';
    }
    PessoaDAO.prototype.inserir = function (objeto) {
        console.log('logica de inserir os mano');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (objeto) {
        console.log('logica update');
        return true;
    };
    ;
    PessoaDAO.prototype.remover = function (id) {
        console.log('logica remover');
        return new Pessoa_1.default('', '');
    };
    ;
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('logica select');
        return new Pessoa_1.default('', '');
    };
    ;
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('selecionar todos');
        return [new Pessoa_1.default('', '')];
    };
    ;
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
