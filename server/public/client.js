console.log('im in javascript');

$(document).ready(onReady);

let operator = 

function onReady() {
    console.log('in jqeruy');
    $('#equal').on('click', onEqualClick)
    
    $('#clear').on('click', onClearClick)
  
    getMathResults() // keep whats in my mathResults on DOM when refreshed
}
//what operator is being clicked and move to server
// all math on server side only
// client.js is just the middle NO MATH
// all client side pushes to DOM and pushes info to DOM to server
function onEqualClick() {
    $('#add').on('click', onAddClick)
    $('#subtract').on('click', onSubtractClick)
    $('#multiply').on('click', onMultiplyClick)
    $('#divide').on('click', onDivideClick)
    $('#equal').toggleClass('clickedButton')
    console.log('i/m totaling');
if () // put everything all on one function

    $.ajax({
        type: 'POST',
        url: '/newresults',
        data: {
            results: 'resultshere'
        }
    })
   getMathResults()


}
function onAddClick() {
    $('#add').toggleClass('clickedButton')

    $.ajax({
        type: 'POST',
        url: '/newadd',
        data: {
            add1:$('.numberDisplay').val(),
            //add2:$('.numberTwo').val()
        }
    }).then(function() {
        $(".myInputs").val('');
        getAddResults ()
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
    $('#subtract').toggleClass('clickedButton')
    console.log('i/m subtracting');
} 

function onMultiplyClick() {
    $('#multiply').toggleClass('clickedButton')
    console.log('i/m multiplying');
}

function onDivideClick() {
    $('#divide').toggleClass('clickedButton')
    console.log('i/m diving');
}

function onClearClick() {
    $('#clear').toggleClass('clickedButton')
    console.log('i/m clearing');
}
