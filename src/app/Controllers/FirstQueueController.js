const crypto = require('crypto');
const connection = require('../../database/connection')


module.exports = {
    
    async Index(request, response){

        
        const users = await connection('users').select('*');
        return response.json(users)



    }
};