//import { generateText } from '@herbylegall9/gptapi-backend';
import { generateText } from 'backend/gtpApi'
import { authentication, currentMember } from 'wix-members';
import wixLocation from 'wix-location';
import { getAllTasks, insertTask, removeTask } from 'backend/sqlpromptstore';
var globalid = ""
var fullName = ""
var savechecker=true
$w.onReady(async function () {
    registerHandlers();
    fetchData();
});

function registerHandlers() {
    console.log('checkpoint2')
    $w('#text34').text = ""

    $w('#button1').onClick(() => gptCall());
    $w('#button2').onClick(() => storeprompt());

}
async function fetchData() {
    console.log("checkpoint1")
    try {
          const isLoggedIn = authentication.loggedIn();

if (!isLoggedIn) {
            $w('#section5').hide()
            $w('#section4').hide()

            $w('#text32').text = "Please login with your wix account to unlock full website functions!"
              $w('#text33').hide()
  }

                $w('#button2').hide()

    var  members= await  currentMember.getMember()
          
                globalid = members._id;
                fullName = members.contactDetails.firstName + " " + members.contactDetails.lastName;
              
                $w('#text32').text = "Welcome " + fullName;
              
    } catch {
        console.log("hi")
    }
}
async function gptCall() {
    try {
        let response = await generateText($w('#input1').value + " in less than 50 words");
        $w('#text30').text = response;
        console.log(response)
        savechecker=true
        $w('#button2').show()

    } catch (error) {
        console.error(error);
    }
}

async function storeprompt() {
    try {
        if(savechecker){
        insertTask(globalid,$w('#input1').value, $w('#text30').text)
            $w('#text34').text = "Saved"
        savechecker=false
         $w('#button2').hide()

        }
        else{
         $w('#text34').text = "Already Saved"

        }
    } catch (error) {
        console.error(error);
    }
}

authentication.onLogin((user)=>{
    wixLocation.to("/");
    }
)
