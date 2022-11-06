const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

const path = require('path');

const { engine } = require('express-handlebars')

// Static file
app.use(express.static(path.join(__dirname, "public")));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//template
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/test', (req, res) => {
    res.render('test');
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'))
// });

app.use(morgan('combined'))

app.get('/trangchu', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})