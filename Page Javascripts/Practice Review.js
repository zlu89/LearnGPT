//import { generateText } from '@herbylegall9/gptapi-backend';
import { generateText } from 'backend/gtpApi'
import { authentication, currentMember } from 'wix-members';
import wixLocation from 'wix-location';
import { getAllTasks, insertTask, removeTask } from 'backend/sqlpromptstore';
var globalid = ""
var fullName = ""
var actualresponse=""
var currentprompt=""

var savechecker=true
$w.onReady(async function () {
   
    registerHandlers();
    fetchData();
});

function registerHandlers() {
    console.log('checkpoint2')


    $w('#button1').onClick(() => gptCall());
 $w('#button2').onClick(() => deleteprompt());
  $w('#button3').onClick(() => nextprompt());
}
async function fetchData() {
    console.log("checkpoint1")
    try {
        var  members=await currentMember.getMember()
   const isLoggedIn = authentication.loggedIn();

if (!isLoggedIn) {
            $w('#section5').hide()
            $w('#text32').text = "Please login with your wix account to unlock full website functions!"
              $w('#text33').hide()
  }


                globalid = members._id;
                fullName = members.contactDetails.firstName + " " + members.contactDetails.lastName;
                console.log(fullName)
                $w('#text32').text = "Welcome " + fullName;
                console.log(globalid)

              let resp= await getAllTasks(  globalid)
                console.log(resp)
                let ranint=Math.floor((Math.random() * resp.length) )
                console.log(resp[ranint])

                $w('#text34').text = resp[ranint].prompt
                currentprompt=resp[ranint].prompt
                actualresponse = resp[ranint].response
    } catch {
        console.log("hi")
    }
}
async function gptCall() {
    try {
        let response = await generateText("on a scale from 1-10 how close are these two sentences: '" + $w('#input1').value +"' and '"+actualresponse+ "'in less than 3 words and as a decimal numerical result");
        $w('#text30').text = "ChatGPT's actual response is: \n" + actualresponse+". \nAccourding to ChatGPT, your response on a scale from 1-10 is a "+response+" in terms of simularity.";
        console.log(response)
        savechecker=true

    } catch (error) {
        console.error(error);
    }
}
async function deleteprompt() {
    console.log("checkpoint1")
    try {
    
        await removeTask(  globalid,currentprompt)
            
            let resp= await getAllTasks(  globalid)
                console.log(resp)
                let ranint=Math.floor((Math.random() * resp.length) )
                console.log(resp[ranint])

                $w('#text34').text = resp[ranint].prompt
                currentprompt=resp[ranint].prompt
                actualresponse = resp[ranint].response
       $w('#text30').text = "Old prompt was deleted from database. A new prompt is displayed!";
  
    } catch {
        console.log("hi")
    }
}

async function nextprompt() {
    console.log("checkpoint1")
    try {
    
            let resp= await getAllTasks(  globalid)
                console.log(resp)
                let ranint=Math.floor((Math.random() * resp.length) )
                console.log(resp[ranint])

                $w('#text34').text = resp[ranint].prompt
                currentprompt=resp[ranint].prompt
                actualresponse = resp[ranint].response
       $w('#text30').text = "New prompt was loaded! Awaiting guess submission...";
  
    } catch {
        console.log("hi")
    }
}

async function storeprompt() {
    try {
      var resp= getAllTasks(globalid)
    } catch (error) {
        console.error(error);
    }
}

authentication.onLogin((user)=>{
    wixLocation.to("/");
    }
)
