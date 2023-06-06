/*
 Copyright (c) Universidad Privada Boliviana (UPB) - EUBBC-Digital
 MIT License - See LICENSE file in the root directory
 Boris Pedraza, Alex Villazon
*/

import UI from './ui.js' 

const TIMER = {
  timer_function(end_date){
    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = end_date - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="timer"
      document.getElementById("timer").innerHTML = `${hours}h : ${minutes}m : ${seconds}s`;

      // If the count down is over, write some text 
      if (distance < 0) {
        var encodedMessage = encodeURIComponent("Run out of Time. Access denied");
        var redirectURL = "../alert_page.html?message=" + encodedMessage + "&alert=1";
        UI.accessPassword = null;
        document.getElementById("timer").innerHTML = "TIME COMPLETED";
        clearInterval(x);
        try {
          UI.disconnect();
          window.location.href = redirectURL;
        } catch {
          window.location.href = redirectURL;
        }
      }
    }, 1000);
  }
}
export default TIMER;
