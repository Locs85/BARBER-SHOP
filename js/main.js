import * as $ from 'jquery';
import 'paroller.js';

$(document).ready(function() {

   $('.paroller-item').paroller({ 
   	factor: 0.1, 
   	factorXs: 0.2, 
   	type: 'foreground', 
   	direction: 'vertical' 
   });

});








