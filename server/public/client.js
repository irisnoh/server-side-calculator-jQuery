console.log('im in javascript');

$(document).ready(function () {
    console.log('in jqeruy');
    $('.buttonOperator').on('click', onAllOperators)
    // $('#clear').on('click', onClearClick)

    // getMathResults() // keep whats in my mathResults on DOM when refreshed  //call the function to display calculation history at each browser refresh
    
    {
        operator = $(this).html();
        //change button color when clicked by user
        $(this).addClass('operatorClicked');
    })
    //add click event listener to the submit button to get input fields value 
    //and do the calculation
    $('#submitButton').on('click', getInputValueAndCalculate);
    //add click event listener to the clear button to clear the input fields
    $('#clearButton').on('click', clearInput);
    //add click event listener to the <li> to get a specific entry from history
    $('#historyUl').on('click', 'li', retrieveHistory);
    //add click event listener to the clear history button to clear history
    $('#clearHistory').on('click', clearHistory);

}

});
//if what i click equals this

// setter for operator & symbol

function onAllOperators() {
    let myOperator = $(this).html();

    if ($('.subtract').on('click', '#subtract', onSubtractClick) == myOperator)  {
        $(this).on('click', '#subtract', onSubtractClick)
        onSubtractClick();
        // $('#appendMathHere').append('subtracting')
        // $('#equal').on('click', onEqualClick)
        console.log('subtractinginAll');
    }
    else if ($(this).attr('#multiply') === '#multiply') {
        $('#appendMathHere').append('multiplying')
        // $('#equal').on('click', onEqualClick)
        console.log('multiplyinginAll');
    }

    // $('.buttonOperator').on('click', '.buttonOperator', function () {
    //     $(this).parent().click();
    // })
    // if ('#subtract' === '#subtract') {
    //     $('#appendMathHere').append('subtracting')
    //     console.log('i/m subtracting in sub function')
    //     $('#equal').on('click', onEqualClick);
    // }

    // if ($('#multiply').on('click')) { console.log('um'); }
    // {
    //     $('#equal').on('click', onEqualClick)
    //     console.log('i/m multiplying')
    //     $('#appendMathHere').append('mult');

    // }
    // if 
    // $('#divide').on('click', onDivideClick)
    // {
    //     console.log('i/m diviing')
    //     $('#appendMathHere').append('divide')
    // }

};

function onSubtractClick() {
    // $('#subtract').toggleClass('clickedButton')
    // 
    $('#appendMathHere').append('subtract');
    console.log('subtract');

}

function onMultiplyClick() {
    // $('#multiply').toggleClass('clickedButton')
    $('#appendMathHere').append('multiply');
    console.log('multipy');

}

function onDivideClick() {
    // $('#divide').toggleClass('clickedButton')
    // $('#equal').on('click', onEqualClick)
    $('#appendMathHere').append('divide');
    console.log('divide');
}







function onEqualClick() { // this will display result onto DOM

    console.log('i display result on DOM');
}

let operator =
    //what operator is being clicked and move to server
    // all math on server side only
    // client.js is just the middle NO MATH
    // all client side pushes to DOM and pushes info to DOM to server

    // function onEqualClick () {
    //     if ($('#add').on('click', onAddClick)) {
    //         $('#equal').toggleClass('clickedButton');
    //         console.log('i/m totaling');
    //     }
    // }

    // function onEqualClick() {
    //     if () {
    //         $('#equal').toggleClass('clickedButton')

    //     }

    //    ;


    //     //  if () // put everything all on one function

    //     //     $.ajax({
    //     //         type: 'POST',
    //     //         url: '/newresults',
    //     //         data: {
    //     //             results: 'resultshere'
    //     //         }
    //     //     })
    //     getMathResults()


    // }

    // function onAddClick() {
    //     $('#add').toggleClass('clickedButton')

    //     $.ajax({
    //         type: 'POST',
    //         url: '/newadd',
    //         data: {
    //             add1: $('.numberDisplay').val(),
    //             //add2:$('.numberTwo').val()
    //         }
    //     }).then(function () {
    //         $(".myInputs").val('');
    //         getAddResults()
    //     })
    // }

    // function getAddResults () {
    //     $.ajax({
    //         type: 'GET',
    //         url: '/add',
    //     }).then function (response) {
    //         $('appendMathHere').append(`
    //         <li>${add1} + ${add2} = sum`)

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
