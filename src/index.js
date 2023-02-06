const express = require('express')
const {engine,create} = require('express-handlebars')


const app = express()

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

const produtos = new Array(10).fill('').map((item, index) => ({nome: `Produto ${index}`, preco: Math.random().toString().substring(0,5)}))

app.get('/', (req, res) => {
    console.table(produtos)
    let sprodutos = produtos.map((produto, index) => {
        
        return {
            nome: `Produto ${index + 1}`,
            preco: produto.preco
        }
    })
    res.render('index', {
        layout: false,
        showtitle: 'AQUIII',
        novo: {
            p1 : 1,
            p2 : 2
        },
        lista: [
            'Item1',
            'Item2',
            'Item3',
            'Item4',
            'Item5',
        ],
        helpers: {
            teste() {
                return 'TESTE conteudo!'
            }
        },
        produtos: sprodutos
    })
})

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        layout:false,
        link: {
            
        }
    })
})

app.listen(80, () => {
    console.log('Conectado!')
})
