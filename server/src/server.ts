import express from 'express';
import routes from './routes/index.js';

const app = express(); 
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));

app.use(express.json()); 
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

