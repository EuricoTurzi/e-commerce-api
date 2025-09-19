import express from 'express';
import { UsersController } from '../controllers/user.controllers';

// Criar um roteador para as rotas de usuários
export const userRoutes = express.Router();

// Definir as rotas e associá-las aos métodos do controlador
userRoutes.get('/users', UsersController.getUsers);
userRoutes.get('/users/:id', UsersController.getUserById);
userRoutes.put('/users/:id', UsersController.updateUserById)
userRoutes.delete('/users/:id', UsersController.deleteUserById);
userRoutes.post('/users', UsersController.addUser);