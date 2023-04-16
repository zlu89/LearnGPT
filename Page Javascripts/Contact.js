// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { authentication, currentMember } from 'wix-members';
import wixLocation from 'wix-location';
import {sendEmail} from 'backend/email';

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");
  $w("#button1").onClick(() =>sendFormData());

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});



function sendFormData() {
  const subject = 'New Submission from ${$w("#input1").value}';
  const body = '{firstName: ${$w("#input5").value}';
  let email= $w('#input4').value
  const name =$w('#input5').value
  sendEmail(subject, body,email,name)
    .then(response => console.log(response)); 
}

authentication.onLogin((user)=>{
    wixLocation.to("/");
    }
)
