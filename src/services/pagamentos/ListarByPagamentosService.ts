import prismaClient from "../../prisma";

interface PagamentoRequest{
    id: string;
}

class ListarByPagamentosService
{
    async execute({id}:PagamentoRequest){

        const findbyPagamento = await prismaClient.pagamentos.findMany({
            where:{
                id: id
            }
        })

        return findbyPagamento;
        
    }
}

export {ListarByPagamentosService}