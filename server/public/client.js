console.log('im in javascript');

//what operator is being clicked and move to server
// all math on server side only
// client.js is just the middle NO MATH
// all client side pushes to DOM and pushes info to DOM to server
let operator = "";

$(document).ready(function () {
    getMathResults(); // keep whats in my mathResults on DOM when refreshed  //call the function to display calculation history at each browser refresh
    console.log('in jquery');
    $('.buttonOperator').on('click', onAllOperators); 
    $('#clear').on('click', handleClearButton);
    $('#equal').on('click', postMathResults);
    $('#delete').on('click', handleDeleteButton)
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
   let firstNumber = $('#numberOne').val();
   let secondNumber = $('#numberTwo').val();

   // not appending math now though
    if(firstNumber === '' || secondNumber === '' || operator === '') {
        alert('fields can not be empty');
       }
    else {
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
        console.log('inpostmath');
        getMathResults()
    
    }
    )
}
}

function getMathResults() { //ajax gets number from the server to DOM
    $.ajax({
        type: 'GET',
        url: '/results'
    }).then(function (response) {
        $('#appendMathHere').empty();
        for (let i = 1; i < response.length; i++) {
            let results = response[i]; 
            $('#appendMathHere').append(` 
        <li>${results.firstNumber}${results.operator}${results.secondNumber}=${results.result}
        </li>
        `) // append results onto the DOM
            $('#numberDisplay').text(`${results.result}`)
        }
    })
}

function handleClearButton() { // clears input values on DOM
    $('.myInputs').val('');
}

function handleDeleteButton() { // deletes history on DOM
    if (confirm('This will delete all history, are you sure?')) // pop to confirm deletion 
    $.ajax({
        type: 'DELETE',
        url: '/results',
    }).then(function () {
        getMathResults();
        console.log('this will delete all history');
    }
    )};

