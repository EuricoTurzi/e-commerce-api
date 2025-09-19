import express from 'express'; 
import { initializeApp } from 'firebase-admin/app';
import { routes } from './routes/index';


initializeApp(); // Inicializar o Firebase Admin SDK
const app = express(); 

// Usar as rotas definidas
routes(app);

// Iniciar o servidor
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})

