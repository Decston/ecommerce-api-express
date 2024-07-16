require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Errors = require("./src/middlewares/handle404error");
const handleError = require('./src/middlewares/handleError');
const app = express();

const orderRoute = require('./src/routes/order');
const userRoute = require('./src/routes/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/orders', orderRoute);
app.use('/api/users', userRoute);
app.use(handle404Errors);
app.use(handleError);

app.listen(process.env.PORTA, () => { console.log("Api Ecommerce rodando na porta 3000...") })