const express = require('express');
const cors = require('cors');
const bullbord = require('bull-board');
const fila = require('./app/lib/Queue.js')


const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/adimin', bullbord.UI);
app.use(routes);

bullbord.setQueues(fila.fila);
const port = process.env.PORT || 3005;
app.listen(port);





