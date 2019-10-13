console.log('im in javascript');

//what operator is being clicked and move to server
// all math on server side only
// client.js is just the middle NO MATH
// all client side pushes to DOM and pushes info to DOM to server
let operator = "";

$(document).ready(function () {
    console.log('in jquery');
    $('.buttonOperator').on('click', onAllOperators)
    $('#clear').on('click', handleClearButton)
    $('#equal').on('click', postMathResults);
    getMathResults() // keep whats in my mathResults on DOM when refreshed  //call the function to display calculation history at each browser refresh
})


function onAllOperators() {
    // gets the content of whatever is between the operator button opening and closing tags.
    operator = $(this).attr('id');
    console.log(operator);
    if (operator == "add") {
        // reassign your global operator variable to the operator that was clicked
        operator = '+';
        // see if it worked
        console.log(operator);
    }
    else if (operator == "subtract") {
        operator = '-';
        console.log(operator);
    }
    else if (operator == "multiply") {
        operator = '*';
        console.log(operator);
    }
    else if (operator == "divide") {
        operator = '/';
        console.log(operator);
    }
}




function postMathResults() { //ajax post call to server, number from DOM to server
    $.ajax({
        type: 'POST',
        url: '/results',
        data: {
            firstNumber: $('#numberOne').val(),
            operator: operator,
            secondNumber: $('#numberTwo').val(),
            result: ''
        }
    }).then(function () {
        console.log ('inpostmath');
        $('#appendMathHere').empty();
        getMathResults();
        $('.myInputs').val('');
        


    }
    )
}

function getMathResults() { //ajax gets number from the server to DOM
    $.ajax({
        type: 'GET',
        url: '/results'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let results = response[i];
            $('#appendMathHere').append(` 
        <li>${results.firstNumber}${results.operator}${results.secondNumber} = ${results.result}
        </li>
        `)
        $('#numberDisplay').text(`${results.result}`)
       
        }
    })
}



function handleClearButton() {
    console.log('i/ll delete everything');
    if (confirm('are you sure? this will delete ALL history')) {
        $.ajax({
            type: 'POST',
            url: '/clear-games',
        }).then(function () {
            getMathResults();
        })
    } else {
        console.log('they said no');
    }
}



