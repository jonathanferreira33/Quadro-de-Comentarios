
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


// Config
    //Template Engine:
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
// Body Parser:
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())




// Rotas
    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('formulario', {posts: posts})
        })
    });

    app.post('/post', function(req, res){
        
        Post.create({
           conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(err){
            res.send('Houve o erro: ' + err)
        })
        
    });

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/')
        }).catch(function(err){
            res.send('Postagem inexistente!')
        })
    });


app.listen(8081, function(){
    console.log("Servidor executando na url http://localhost:8081");
});