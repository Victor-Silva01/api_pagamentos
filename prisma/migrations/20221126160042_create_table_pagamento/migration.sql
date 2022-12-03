-- CreateTable
CREATE TABLE "pagamentos" (
    "id" TEXT NOT NULL,
    "codigo" VARCHAR(8) NOT NULL,
    "nometipopagamento" VARCHAR(50) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "nomepessoacadastro" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);
