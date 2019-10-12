console.log('im in javascript');

//what operator is being clicked and move to server
// all math on server side only
// client.js is just the middle NO MATH
// all client side pushes to DOM and pushes info to DOM to server
let operator = "";

$(document).ready(function () {
    console.log('in jqeruy');
    $('.buttonOperator').on('click', onAllOperators)
    // $('#clear').on('click', onClearClick)

    // getMathResults() // keep whats in my mathResults on DOM when refreshed  //call the function to display calculation history at each browser refresh
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
}

// function onEqualClick() { // this will display result onto DOM

//     console.log('i display result on DOM');
// }


// function onEqualClick () {
//     if ($('#add').on('click', onAddClick)) {
//         $('#equal').toggleClass('clickedButton');
//         console.log('i/m totaling');
//     }
// }


// function getMathResults() {
//     $.ajax({
//         type: 'GET',
//         url: '/results'
//     }).then(function (response) {
//         $('#appendMathHere').empty();
//         for (let i = 0; i < response.length; i++) {
//             let results = response[i];
//             $('#appendMathHere').append(`
//         <li>${results}</li>
//         `)
//         }
//     })
// }

function onClearClick() {
    $('#clear').toggleClass('clickedButton')
    console.log('i/m clearing');
}
