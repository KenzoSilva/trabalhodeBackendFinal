const express = require('express');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Rotas
app.use('/api/products', require('./routes/products'));
app.use('/api/carts', require('./routes/carts'));
app.use('/', require('./routes/viewsRouter'));

// Iniciar servidor
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
});
