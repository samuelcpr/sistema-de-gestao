require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

module.exports = {
    development: {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'secret',
        database: process.env.DB_NAME || 'develop',
        define: {
            timestamps: true, // Corrigido de 'timestamp' para 'timestamps'
            underscored: true, // Corrigido de 'undescored' para 'underscored'
            underscoredAll: true, // Corrigido de 'undescoredAll' para 'underscoredAll'
        },
    },
};