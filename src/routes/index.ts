import express from 'express';
import { userRoutes } from './users.route';

// Função para registrar todas as rotas
export const routes = (app: express.Express) => {
    // Permitir que o express entenda JSON no body das requisições
    app.use(express.json()) 
    app.use(userRoutes);

}