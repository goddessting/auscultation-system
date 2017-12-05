const express = require('express');
const app = new express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const router = require('./router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(__dirname + '/'));

const db = require('./index');


app.use(express.static(__dirname + '/'));

app.use('/',router );

app.use('/',router);
app.use('/',router);

// app.get("*", function (req, res) {
//     res.sendFile(path.resolve(__dirname, '', 'index.html'));
// });

app.listen(3000, () => {
    console.log('server start');
});