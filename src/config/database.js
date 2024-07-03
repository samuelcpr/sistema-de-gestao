require("dotenv/config");

module.exports = {
    dialeto: 'postgres',
    host: process.env.DB_Host,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamp: true,
        undescored: true,
        undescoredAll: true
    }
}