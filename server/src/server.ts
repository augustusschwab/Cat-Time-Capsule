//const forceDatabaseRefresh = false;
import express from 'express';
//import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express(); //Create the express server.
const PORT = process.env.PORT || 3001; //Listen on PORT 3001.

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json()); //Read JSON data from requests.
app.use(routes);

// sequelize.sync({force: forceDatabaseRefresh}).then(() => {
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
// });
