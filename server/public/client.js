console.log ('im in javascript');

$(document).ready(onReady);

function onReady () {
    console.log('in jqeruy');
    $('#equal').on('click', onEqualClick)
}

function onEqualClick () {
    console.log('i/m totaling');
   $('#appendMathHere').append(`
   <li>SOMETHING</li>
   `)
}