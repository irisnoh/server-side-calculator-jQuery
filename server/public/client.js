console.log('im in javascript');

$(document).ready(onReady);

function onReady() {
    console.log('in jqeruy');
    $('#equal').on('click', onEqualClick)
    $('#add').on('click', onAddClick)
    $('#subtract').on('click', onSubtractClick)
    $('#multiply').on('click', onMultiplyClick)
    $('#divide').on('click', onDivideClick)
    $('#clear').on('click', onClearClick)
    getMathResults() // keep whats in my mathResults on DOM when refreshed
}

function onEqualClick() {
    console.log('i/m totaling');
    $.ajax({
        type: 'POST',
        url: '/newresults',
        data: {
            results: 'resultshere'
        }
    })
    
   getMathResults()
}


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


function onAddClick() {
    console.log('i/m adding');
}

function onSubtractClick() {
    console.log('i/m subtracting');
} 

function onMultiplyClick() {
    console.log('i/m multiplying');
}

function onDivideClick() {
    console.log('i/m diving');
}

function onClearClick() {
    console.log('i/m clearing');
}
