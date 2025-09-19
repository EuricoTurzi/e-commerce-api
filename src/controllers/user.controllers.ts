import { Request, Response } from 'express';
const { getFirestore } = require('firebase-admin/firestore');

// Definir o tipo de dado User
type User = {
    id: number,
    name: string,
    email: string
}

// Array para armazenar os usuários (em memória)
let users: User[] = []

// Controlador para gerenciar as operações relacionadas aos usuários
export class UsersController {
    // Método para retornar a lista de usuários
    static async getUsers(req: Request, res: Response){
       const snapshot = await getFirestore().collection("users").get()
       const usersList = snapshot.docs.map((doc: { id: any; data: () => any; }) => {
        return {
            id: doc.id,
            ...doc.data()
        }
       });
       res.send(usersList);
    }

    // Método para retornar um usuário específico pelo ID
    static getUserById(req: Request, res: Response){
        let userId = Number(req.params.id)
        let user = users.find(user => user.id === userId)
        res.send(user)
    }

    // Método para atualizar um usuário específico pelo ID
    static updateUserById(req: Request, res: Response){
        let userId = Number(req.params.id)
        let user = req.body
        let index = users.findIndex(user => user.id === userId)
        users[index].name = user.name
        users[index].email = user.email
        res.send({
            message: "Usuário atualizado com sucesso",
        })
    }

    // Método para deletar um usuário específico pelo ID
    static deleteUserById(req: Request, res: Response){
        let userId = Number(req.params.id)
        users = users.filter(user => user.id !== userId)
        res.send({
            message: "Usuário deletado com sucesso",
        })
    }

    // Método para adicionar um novo usuário
    static async addUser(req: Request, res: Response){
        let user = req.body
        await getFirestore().collection('users').add(user)
        
        res.send({
            message: "Usuário adicionado com sucesso",
        })
    }
}