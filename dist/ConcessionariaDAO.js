"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'concenssionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (objeto) {
        console.log('logica de inserir os mano');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (objeto) {
        console.log('logica update');
        return true;
    };
    ;
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('logica remover');
        return new Concessionaria_1.default('', []);
    };
    ;
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('logica select');
        return new Concessionaria_1.default('', []);
    };
    ;
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('selecionar todos');
        return [new Concessionaria_1.default('', [])];
    };
    ;
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
