import express from 'express';
import http from 'http';
import api from './routes/api';

const app = express();
const httpServer = http.createServer(app);

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