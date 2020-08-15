const db2 = require('../../database/connection');

module.exports = {
    key: 'ImportInLot',
    async handle(base_final_11)  {
        await db2('teste').insert(base_final_11);
    },
};