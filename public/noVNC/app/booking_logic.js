import * as TIMER from './timer.js';
import * as UI from './UI.js';

var credentialsData= await fetch('../utils/credentials.json');
credentialsData= await credentialsData.json();

const urlParams = new URLSearchParams(window.location.search);
const bookingAccessKey = urlParams.get('access_key');
const bookingPwd = urlParams.get('pwd');

const BOOKING_VALIDATION= {
  async validateReservation(pwd, accessKey){
    if (accessKey != null) {
      var url =`${credentialsData.bookingUrl}api/reservation/?access_key=${accessKey}`;
      if (pwd != null) { 
        url = `${url}&pwd=${pwd}`;
        UI.accessPassword = credentialsData.password;
      } else {
        UI.accessPassword = credentialsData.viewOnlyPassword;
      }
      const response_booking_api = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
          
      const data = await response_booking_api.json();
      if (data.length) {
        var end_date = new Date(data[0].end_date).getTime();
        TIMER.timer_function(end_date);
      } else {
        UI.accessPassword = null;
        window.location.pathname = "../alert_page.html"
      }
    }
  }
}

BOOKING_VALIDATION.validateReservation(bookingPwd, bookingAccessKey);
