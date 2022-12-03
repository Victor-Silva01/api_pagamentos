import { Request, Response } from "express";
import {CreatePagamentoService} from '../../services/pagamentos/CreatePagamentoService';

class CreatePagamentoController{

    async handle(req: Request, res: Response){
        
        const {codigo, nometipopagamento,descricao,status,nomepessoacadastro} = req.body;

        const createPagamentoService = new CreatePagamentoService();

        const pagamento =  await createPagamentoService.execute({
            codigo, 
            nometipopagamento,
            descricao,
            status,
            nomepessoacadastro
          });
    
          return res.json(pagamento)  
        
    }
}

export {CreatePagamentoController}