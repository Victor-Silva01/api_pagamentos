import {Request, Response} from 'express';
import {ListarByPagamentosService} from '../../services/pagamentos/ListarByPagamentosService';

class ListarByPagamentosController{

    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const listByPagamentos = new ListarByPagamentosService();

        const pagamento = await listByPagamentos.execute({
            id
        })

        return res.json(pagamento);

    }

}

export {ListarByPagamentosController}