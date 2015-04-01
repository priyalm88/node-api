var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Add routes
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'it works!'});
});

// Register our routes
app.use('/api', router);

app.listen(port);
console.log('Your express server is running on ' + port);
