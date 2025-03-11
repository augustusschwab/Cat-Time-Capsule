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

// const client = new Client({
//     user: 'your_username',
//     host: 'localhost',
//     database: 'your_database',
//     password: 'your_password',
//     port: 5432,
// });

// client.connect();

// app.get('/create-user', (_, res) => {
//     res.sendFile(path.join(__dirname, 'public/create-user.html'));
// });

// app.post('/api/users', async (req, res) => {
//     const { username, email, password } = req.body;

//     const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
//     try {
//         await client.query(query, [username, email, password]);
//         res.status(201).send('User created successfully');
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).send('Error creating user');
//     }
// });


app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  });