import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './haiku-checker-creator';

$(document).ready(function() {
  $('#haikuForm').submit(function(event) {
    console.log('test', $('#haikuText').val());
    const text = $('#haikuText').val().split(/\r\n|\n|\r/);

    const haiku = new Haiku(text);
    const result = haiku.haikuCheck(); 

    console.log('result', result);

    event.preventDefault();
  });
});