import {Request, Response} from 'express';
import {RemovePagamentoService} from '../../services/pagamentos/RemovePagamentoService';

class RemovePagamentoController{

    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const removePagamentos = new RemovePagamentoService();

        const pagamento = await removePagamentos.execute({
                id
        })

        return res.json(pagamento);

    }

}

export {RemovePagamentoController}