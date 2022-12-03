import {Request, Response} from 'express';
import {ListarTodosPagamentoService} from '../../services/pagamentos/ListarTodosPagamentoService';

class ListarTodosPagamentoController{

    async handle(req: Request, res: Response){

        const listaTodosPagamento = new ListarTodosPagamentoService();
        const pagamento = await listaTodosPagamento.execute();

        return res.json(pagamento);
    }
}

export{ListarTodosPagamentoController}