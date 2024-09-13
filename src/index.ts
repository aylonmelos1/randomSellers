import express from 'express';
import http from 'http';
import api from './routes/api';

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());

// Adicionar o uso do roteador
app.use('/api', api);

httpServer.listen(3387, () => {
    console.log(`Aplicação rodando na porta 3387`);
});