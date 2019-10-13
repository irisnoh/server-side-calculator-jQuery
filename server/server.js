const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
let mathResults = [ {
    firstNumber: '' ,
    operator: '',
    secondNumber: '',
    result: ''
}];

// let addResults = [100,40,10];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/clear-games', (req,res) => {
    mathResults = [];
    res.sendStatus(200);
}
);


app.get('/add', (req,res) => {
    res.send(mathResults)
});

app.post('/newadd', (req,res) => {
    mathResults.push(req.body);
 let sum = (Number(req.body.add1) + Number(req.body.add2))
    res.sendStatus(200);
    return sum
});

app.post('/newadd', (req,res) => {
    mathResults.add.push(req.body);
    res.sendStatus(200);
}
);

app.post('/results', (req,res) => {
    res.send(mathResults);
});

app.post('/newresults', (req,res) => {
    mathResults.push(req.body);
    res.sendStatus(200);
}
);

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});

// function mathResults(calc) {
//     var x = parseInt(calc.numOne);
//     var y = parseInt(calc.numTwo);
//     var operation = calc.operator;
//     var result;
  
//     switch (operation) {
//       case 'add':
//         result = x + y;
//         break;
//       case 'subtract':
//         result = x - y;
//         break;
//       case 'multiply':
//         result = x * y;
//         break;
//       case 'divide':
//         result = x / y;
//         break;
//       default:
//         result = "calculator temporarily out of order";
//     }
//     return result;
//   }