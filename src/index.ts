import express from 'express'; 
import { routes } from './routes/index';

// Criar uma instância do express
const app = express(); 

// Usar as rotas definidas
routes(app);

// Iniciar o servidor
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})

