const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
let mathResults = [ {
    results:'something'
}];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/results', (req,res) => {
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
