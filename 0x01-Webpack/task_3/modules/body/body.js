import $ from "jquery";
import './body.css'
const _ = require('lodash');

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id=\'count\'></p>');

$('button').on('click', _.debounce(updateCounter, 500, {
  'leading': true,
  'trailing': false,
}));

let count = 0;

function updateCounter() {
  count = count + 1;
  $('#count').text(`${count} clicks on the button`);
}
