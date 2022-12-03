import { Router } from "express";
import {CreatePagamentoController} from './controllers/pagamento/CreatePagamentoController';
import {ListarTodosPagamentoController} from './controllers/pagamento/ListarTodosPagamentoController';
import {ListarByPagamentosController} from './controllers/pagamento/ListarByPagamentosController';
import {RemovePagamentoController} from './controllers/pagamento/RemovePagamentoController';
import { UpdatePagamentoController } from "./controllers/pagamento/UpdatePagamentoController";

const router = Router();

//ROTAS DE PAGAMENTO
router.post('/create_pagamento', new CreatePagamentoController().handle); // Rota para criar pagamento
router.get('/all_pagamentos', new ListarTodosPagamentoController().handle); // Rota para lista todos pagamento
router.get('/pagamentos/id', new ListarByPagamentosController().handle); // Rota para lista apenas um pagamento com base no codigo
router.delete('/pagamento/remove', new RemovePagamentoController().handle); // Rota para deleta o pagamento
router.put('/pagamento/update', new UpdatePagamentoController().handle); // Rota para atualizar pagamento


export {router};