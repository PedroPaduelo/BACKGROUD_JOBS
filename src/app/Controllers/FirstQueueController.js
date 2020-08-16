const crypto = require('crypto');
const db2 = require('../../database/connection')
const queue = require('../lib/Queue.js')

module.exports = {
    
    async Index(request, response){
        
        console.log("01 - Inicio da Rotina de dados!!!")

        console.log("02 - Inicio busca bases no bamco de dados!!!")

        const tbl_resultado = await db2('SORTEIOS');
        const tbl_fechamento = await db2('FECHAMENTO_4_CSV');

        console.log("03 - Fim busca bases no bamco de dados!!!")

        //await queue.fila.add(tbl_fechamento[1]);

        tbl_fechamento.map(async (tbl_fechamento) => {
            await queue.fila.add(tbl_fechamento);
        })

        console.log("04 - Fim ADD fila!!!")

        return response.json("users")
    }

};