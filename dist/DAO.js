"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.inserir = function (objeto) {
        console.log('logica de inserir os mano');
        return true;
    };
    DAO.prototype.atualizar = function (objeto) {
        console.log('logica update');
        return true;
    };
    ;
    DAO.prototype.remover = function (id) {
        console.log('logica remover');
        return Object();
    };
    ;
    DAO.prototype.selecionar = function (id) {
        console.log('logica select');
        return Object();
    };
    ;
    DAO.prototype.selecionarTodos = function () {
        console.log('selecionar todos');
        return Object();
    };
    ;
    return DAO;
}());
exports.DAO = DAO;
