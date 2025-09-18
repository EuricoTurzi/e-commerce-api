import express from 'express'; 

const app = express(); 

app.get('/', (req, res)=>{
    res.send('Teste de servidor node com express - Com o TSCWatch')
})

app.listen(3333, ()=>{
    console.log('Server ativo na porta 3333')
})

