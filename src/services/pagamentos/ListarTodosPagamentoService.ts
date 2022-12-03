import prismaClient from "../../prisma";

class ListarTodosPagamentoService{

    async execute(){

        const pagamento = await prismaClient.pagamentos.findMany({
            select:{
                id:true,
                codigo:true,
                nomepessoacadastro:true,
                descricao:true,
                status:true,
                nometipopagamento: true,
                created_at: true
            }
        })
        return pagamento;
    }
}

export {ListarTodosPagamentoService}