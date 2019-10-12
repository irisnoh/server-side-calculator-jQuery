console.log('im in javascript');

$(document).ready(function () {
    console.log('in jqeruy');
    $('.buttonOperator').on('click', onAllOperators)
    $('#clear').on('click', onClearClick)

    getMathResults() // keep whats in my mathResults on DOM when refreshed

});

function onAllOperators () {
    // $('.buttonOperator').on('click', 'button', function() {

    // }

    if ($('#subtract').on('click', onSubtractClick)) {
    }
    if ($('#multiply').on('click', onMultiplyClick)) {
    }
    if ($('#divide').on('click', onDivideClick)) {
    }
    };



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

    function onAddClick() {
        $('#add').toggleClass('clickedButton')

        $.ajax({
            type: 'POST',
            url: '/newadd',
            data: {
                add1: $('.numberDisplay').val(),
                //add2:$('.numberTwo').val()
            }
        }).then(function () {
            $(".myInputs").val('');
            getAddResults()
        })
    }

// function getAddResults () {
//     $.ajax({
//         type: 'GET',
//         url: '/add',
//     }).then function (response) {
//         $('appendMathHere').append(`
//         <li>${add1} + ${add2} = sum`)

//     }
// }



function getMathResults() {
    $.ajax({
        type: 'GET',
        url: '/results'
    }).then(function (response) {
        $('#appendMathHere').empty();
        for (let i = 0; i < response.length; i++) {
            let results = response[i];
            $('#appendMathHere').append(`
        <li>${results}</li>
        `)
        }
    })
}




function onSubtractClick() {
    // $('#subtract').toggleClass('clickedButton')
    $('#equal').on('click', onEqualClick)

    console.log('i/m subtracting in sub function');
}

function onMultiplyClick() {
    // $('#multiply').toggleClass('clickedButton')
    $('#equal').on('click', onEqualClick)
    console.log('i/m multiplying');
}

function onDivideClick() {
    // $('#divide').toggleClass('clickedButton')
    $('#equal').on('click', onEqualClick)
    console.log('i/m diving');
}

function onClearClick() {
    $('#clear').toggleClass('clickedButton')
    console.log('i/m clearing');
}
