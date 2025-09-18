import express from 'express';
import { Request, Response } from 'express';

export const userRoutes = express.Router();

// Definir o tipo de dado User
type User = {
    id: number,
    name: string,
    email: string
}

// Array para armazenar os usuários (em memória)
let id = 0
let users: User[] = []

// Endpoint para retornar uma lista de usuários (Teste de endpoint com Postman)
userRoutes.get('/users', (req: Request, res: Response)=>{
    res.send(users)
});

// Endpoint para retornar um usuário específico pelo ID (Teste de endpoint com Postman)
userRoutes.get('/users/:id', (req: Request, res: Response)=>{
    let userId = Number(req.params.id)
    let user = users.find(user => user.id === userId)
    res.send(user)
});


// Endpoint para atualizar um usuário específico pelo ID (Teste de endpoint com Postman)
userRoutes.put('/users/:id', (req: Request, res: Response)=>{
    let userId = Number(req.params.id)
    let user = req.body
    let index = users.findIndex(user => user.id === userId)
    users[index].name = user.name
    users[index].email = user.email
    res.send({
        message: "Usuário atualizado com sucesso",
    })
})

// Endpoint para deletar um usuário específico pelo ID (Teste de endpoint com Postman)
userRoutes.delete('/users/:id', (req: Request, res: Response)=>{
    let userId = Number(req.params.id)
    users = users.filter(user => user.id !== userId)
    res.send({
        message: "Usuário deletado com sucesso",
    })
});

// Endpoint para adicionar um novo usuário (Teste de endpoint com Postman)
userRoutes.post('/users', (req: Request, res: Response)=>{
    let user = req.body
    user.id = ++id;
    users.push(user)
    res.send({
        message: "Usuário adicionado com sucesso",
    })
})