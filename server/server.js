const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
let mathResultsArray = [{
    firstNumber: "",
    operator: '',
    secondNumber: '',
    result: ''
}];

// let addResults = [100,40,10];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.delete('/results', (req, res) => {
    mathResultsArray = [];
    res.sendStatus(200);
});


app.post('/results', (req, res) => {
    mathResultsArray.push(req.body) //use req.body to take place of data
    let numberOne = req.body.firstNumber;
    let numberTwo = req.body.secondNumber;

    if (req.body.operator == '+') {
        req.body.result = Number(numberOne) + Number(numberTwo)
    }
    else if (req.body.operator == '-') {
        req.body.result = Number(numberOne) - Number(numberTwo)
    }
    else if (req.body.operator == '*') {
        req.body.result = Number(numberOne) * Number(numberTwo)

    }
    else if (req.body.operator == '/') {
        req.body.result = Number(numberOne) / Number(numberTwo)
    }
    res.send(mathResultsArray);
});



app.get('/results', (req, res) => {
    res.send(mathResultsArray);
}
);


// function mathResults(calc) {
//     var x = parsInt(calc.firstNumber);
//     var y = parsInt(calc.secondNumber);
//     var operation = calc.operator;
//     var result;

//     switch (operation) {
//         case 'add':
//             result = x + y;
//             break;
//         case 'subtract':
//             result = x - y;
//             break;
//         case 'multiply':
//             result = x * y;
//             break;
//         case 'divide':
//             result = x / y;
//             break;
//         default:
//             result = "calculator out of order";
//     }
// }




app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});