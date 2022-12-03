import {Request, Response} from 'express';
import {UpdatePagamentoService} from '../../services/pagamentos/UpdatePagamentoService';

class UpdatePagamentoController{

    async handle(req: Request, res: Response){

        const {id, nometipopagamento,descricao,status,nomepessoacadastro} = req.body;

        const updatePagamento = new UpdatePagamentoService();

        const pagamento = await updatePagamento.execute({
                id,
                nometipopagamento,
                descricao,
                status,
                nomepessoacadastro,
                
        })

        return res.json(pagamento);

    }

}

export {UpdatePagamentoController}