const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
let mathResults = [{
    firstNumber: "",
    operator: '',
    secondNumber: '',
    result: ''
}];

// let addResults = [100,40,10];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/clear-games', (req, res) => {
    mathResults = [];
    res.sendStatus(200);
}
);

app.post('/results', (req, res) => {
    mathResults(calc);
    res.send(mathResults);
});

function mathResults(calc) {
    var x = parsInt(calc.firstNumber);
    var y = parsInt(calc.secondNumber);
    var operation = calc.operator;
    var result;

    switch (operation) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            result = "calculator out of order";
    }
}


app.get('/newresults', (req, res) => {
    mathResults.push(req.body);
    res.sendStatus(200);
}
);

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});