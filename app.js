const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("<script> alert('Hello World') </script>");
    console.log('Somebody opened the page!')
});

app.listen(3000, function () {
    console.log('Welcome to the port!');

});

