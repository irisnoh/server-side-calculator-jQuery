const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); // express as a function
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let mathResultsArray = [{
    firstNumber: "",
    operator: '',
    secondNumber: '',
    result: ''
}];

app.delete('/results', (req, res) => { 
    mathResultsArray = []; //reassign array as an empty array
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

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});