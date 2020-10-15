const express = require('express')
const app = express()
const port = 3000

const tarefas = [
    {
        'id': 1,
        'descrição': 'Fazer Atividade de PW2',
        'concluída': false
    },
    {
        'id': 2,
        'descrição': 'Ler tutorial de Javascript',
        'concluída': false
    }
]

app.use(express.json())

app.use(express.static('public'));

app.get('/tarefas', function(req, res) {
    res.json(tarefas)
})

app.get('/tarefas/:id', function(req, res) {
    const { id } = req.params
    const tarefa = tarefas.find(t => t.id == id);
    res.json(tarefa);
})

app.post('/tarefas', function(req, res) {
    const tarefa = req.body
    tarefas.push(tarefa)
    res.json(tarefa)
})

app.put('/tarefas', function(req, res) {
    const tarefa_alterada = req.body
    const tarefa = tarefas.find(t => t.id == tarefa_alterada.id);
    tarefa.descrição = tarefa_alterada.descrição
    tarefa.concluída = tarefa_alterada.concluída
    res.json(tarefa)
})

app.delete('/tarefas', function(req, res) {
    const { id } = req.body
    tarefas.splice(tarefas.indexOf(t => t.id == id), 1)
    res.json(id)
})

// app.get('/exemplo', function(req, res) {
//     res.json({'mensagem' : 'Olá Mundo'})
// })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})