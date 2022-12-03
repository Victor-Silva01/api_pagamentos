import prismaClient from "../../prisma";


interface PagamentoRequest{
    codigo : string;
    nometipopagamento : string;
    descricao: string;
    status: string;
    nomepessoacadastro: string;
}

class CreatePagamentoService{

    async execute({codigo, nometipopagamento,descricao,status,nomepessoacadastro}: PagamentoRequest){

        
          //BUSCAR SE EXISTE ALGUM CODIGO NA TALELA PAGAMENTO
          const codigoexite = await prismaClient.pagamentos.findFirst({
              where:{
                  codigo: codigo
              }
          })

          if(codigoexite){
              throw new Error("Este codigo ja exite");
          }

          //CADASTRAR UMA NOVA PESSOA
          const pagamento = await prismaClient.pagamentos.create({
            data: {
                codigo: codigo, 
                nometipopagamento: nometipopagamento,
                descricao: descricao,
                status: status,
                nomepessoacadastro: nomepessoacadastro
            }
        })

        return pagamento;
    }

}

export {CreatePagamentoService}