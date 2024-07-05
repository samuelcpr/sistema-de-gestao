const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log('Error: ' + err));