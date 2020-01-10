import $ from 'jquery';
import 'bootstrap';

$(document).ready(function () {

  $(".menu-toggle").click(function() {
    $(".main-menu-toggle").toggleClass("visible");
  });
  
});