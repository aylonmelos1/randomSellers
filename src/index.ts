import express from 'express';
import http from 'http';
import api from './routes/api';
import cors from 'cors'; // Importe o pacote CORS

const app = express();
const httpServer = http.createServer(app);

app.use(cors({
    origin: '*', // Permitir apenas o domínio do frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Permite o envio de cookies, se necessário
}));

app.use(express.json());

// Adicionar o uso do roteador
app.use('/api', api);

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "RandomSellers, está rodando!",
        "version": "1.0.0",
        "endpoint": "http://localhost:3387/randomSellers",
        "method": "GET"});
});

httpServer.listen(3387, () => {
    console.log(`Aplicação rodando na porta 3387`);
});