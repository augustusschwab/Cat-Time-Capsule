import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
// import { Client } from 'pg';
import routes from './routes/index.js';
import sequelize from './config/connection.js';

const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.json()); 
app.use(routes);

app.use(bodyParser.json());

sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });