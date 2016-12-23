import $ from 'jquery';

// cache the button so we don't have to
// look for it everytime we want to manipulate it
const $button = $('.js-button');

$button.on('click', () => {
  $button.toggleClass('success');
});