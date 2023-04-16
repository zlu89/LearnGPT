import { getAllTasks, insertTask, updateTask, removeTask, getAll } from 'backend/graph';
import { local } from 'wix-storage';
import { authentication, currentMember } from 'wix-members';
import { generateText } from 'backend/gtpApi'
import {getprompt} from   'backend/promptget';


var globalid=""
var fullName =""
var currentscore=""
var displayedresponse=""
var currentinput=""
var numericacloseness=""
var guessedcheck=true

$w.onReady(async function () {
    registerHandlers();
    fetchData();
    getLogin();
    getgptPrompt();
   // updateData(userid) ;
});


function registerHandlers() {
    console.log('checkpoint2')
   $w('#button3').onClick(() => getgptPrompt());
    $w('#button4').onClick(() => updateData());
}

async function updateData() {
    try {
if(!guessedcheck){
     let response = await generateText("on a scale from 1-10 how close are these two sentences: '" + $w('#input1').value +"' and '"+currentinput+ "'in less than 3 words and as a decimal numerical result");
          //  $w('#text28').text = response;
            numericacloseness=response;
      console.log(response)
      let currentnum=response
//      let numericallist=["0","1","2","3","4","5","6","7","8","9"]
 //     for (var i=0;i<response.length;i++) {
 //       if(numericallist.includes(response[i])){
  //        if (response[i+1]=="0" ){
  //          currentnum="10"
   //       }
   //       currentnum=response[i]
   //     }
   //   }
   guessedcheck=true
       $w('#text31').text = currentinput
//$w('#input1').value = "";

      
      if(Number(currentnum)>5){
       await updateTask(globalid,Number(currentscore)+1);
            $w('#text26').text = "Your score: " + (Number(currentscore)+1).toLocaleString('en');
currentscore=(Number(currentscore)+1).toLocaleString('en')
console.log("Nice, accourding to chatgpt, your guess has a sameness score of "+currentnum.toLocaleString('en')+"/10. You get a point!")
  $w('#text32').text = "Nice, accourding to chatgpt, your guess has a sameness score of "+currentnum.toLocaleString('en')+"/10. You get a point!";

      }else{
          $w('#text32').text = "Sorry, accourding to chatgpt, your guess has a sameness score of "+currentnum.toLocaleString('en')+"/10. The score is too low to award a point. Please move on to a new reponse to guess!";

      }
      }else{
               $w('#text32').text = "Feedback: You have already guessed for this response! Please move onto the next one"
      
        } 
        let topic2 = await getAll()
            console.log(topic2)
                  var myTableData = []
    for (var i=0;i<10; i++) {
      myTableData.push(
  {"rank": (i+1).toLocaleString('en'), "user": topic2[i].Name, "score":topic2[i].score.toLocaleString('en')}
);
    }
   console.log(myTableData)
       $w('#table1').rows = myTableData;
         }
     catch (error) {
        console.error(error);
    }}

async function getgptPrompt(){
    console.log("testing here")
    try {
      if(guessedcheck){
    let topic5 = await getprompt()
    console.log(topic5)
let ranint=Math.floor((Math.random() * topic5.length) )
displayedresponse=topic5[ranint].responses
   $w('#text29').text = displayedresponse
currentinput=topic5[ranint].inputs
console.log(currentinput)
guessedcheck=false
$w('#input1').value = "";
    $w('#text32').text = "Feedback: Awaiting guess"
       $w('#text31').text = "Please submit a guess for this response"

      }else{
    
    $w('#text32').text = "Feedback: Please submit a guess for this response first before moving onto the next one!"
 }
   } catch (error) {
        console.error(error);
    }
}

async function fetchData(){
    console.log("checkpoint1")
    try {
        const isLoggedIn = authentication.loggedIn();

      if (!isLoggedIn) {
            $w('#section1').hide()
            $w('#text34').text = "Please login with your wix account to unlock full website functions!"
              $w('#text33').hide()
  }
 var  members= await currentMember.getMember()
 
    globalid=members._id;
    fullName  = members.contactDetails.firstName+ " " + members.contactDetails.lastName ;
console.log(fullName)
    $w('#text34').text = "Welcome " + fullName;
    console.log(globalid)
  
 // console.log("Welcome " + fullName +"happy")


        let topic2 = await getAll()
            console.log(topic2)
                  var myTableData = []
    for (var i=0;i<10; i++) {
      myTableData.push(
  {"rank": (i+1).toLocaleString('en'), "user": topic2[i].Name, "score":topic2[i].score.toLocaleString('en')}
);
    }
   console.log(myTableData)
       $w('#table1').rows = myTableData;
        //   let topic = await getAllTasks($w('#input1').value)
            let topic = await getAllTasks(globalid)
     
            if(topic.length==0){
                console.log(0)
                $w('#text26').text = "Your score: 0";
                await insertTask(globalid,fullName);
            }else{
      console.log(topic[0].score.toLocaleString('en'))
      currentscore=topic[0].score.toLocaleString('en')
        $w('#text26').text = "Your score: "+topic[0].score.toLocaleString('en');
            }
   
              
    } catch (error) {
        console.error(error);
    }
}
async function getLogin() {
    currentMember.getMember()
  .then((members) => {
    const id = members._id;
    console.log(id)
    return (id)
  })
  .catch((error) => {
    console.error(error);
  });
}


