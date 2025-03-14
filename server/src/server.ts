import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
// import { Client } from 'pg';
import routes from './routes/index.js';
import sequelize from './config/connection.js';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(express.json()); 
app.use(routes);
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
})

app.use(bodyParser.json());

sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });