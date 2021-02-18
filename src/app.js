const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();

app.set('views', __dirname +'/views/');
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static(__dirname + '/public/')); //quando colocar essa pasta como static, usa apenas o caminho apartir daqui
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.render('pages/home');
});
app.get('/telefone', (req, res) =>{
    res.render('pages/telefone');
});

app.listen(process.env.PORT || 3000);