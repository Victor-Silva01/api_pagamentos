import prismaClient from "../../prisma";

interface PagamentoRequest{
    id: string;
}

class RemovePagamentoService{

    async execute({id}:PagamentoRequest){

        const removePagamento = await prismaClient.pagamentos.delete({
            where:{
                id:  id
            }
        })
        return removePagamento;
        
    }
}
export{RemovePagamentoService}