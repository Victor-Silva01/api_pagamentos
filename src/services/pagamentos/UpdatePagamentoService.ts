import prismaClient from "../../prisma";

interface PagamentoRequest{
    id: string;
    nometipopagamento : string;
    descricao: string;
    status: string;
    nomepessoacadastro: string;
    
}

class UpdatePagamentoService{

    async execute({id, nometipopagamento,descricao,status,nomepessoacadastro}:PagamentoRequest){
        
        const updatePagamento = await prismaClient.pagamentos.update({
            where:{
                id:  id
            },
            data:{
                nometipopagamento: nometipopagamento,
                descricao: descricao,
                status: status,
                nomepessoacadastro: nomepessoacadastro,
                update_at: new Date(),
            }
        })

        return updatePagamento;
        
    }
}

export{UpdatePagamentoService}