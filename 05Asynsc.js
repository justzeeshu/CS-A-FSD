function register() {
    // waitforfiveseconds();
    setTimeout(() => {
      console.log("User has been registered");
    }, 5000);
}
function sendEmail() {
    setTimeout(() => {
      console.log("Email has been sent");
    }, 5000);

}


function login() { 
setTimeout(() => {
  console.log("User has been logged in");
}, 5000);
}
function getData() {
    setTimeout(() => {
        console.log("Data has been fetched");
    },5000)
 }
function displayData() {
   setTimeout(() => {
    console.log("Data has been displayed");
   },5000) 
}
 console.log("call other functions");

function waitforfiveseconds() {
    const ms = new Date().getTime() + 5000;
    while (new Date().getTime() < ms) { }
 }
register();
sendEmail();
login();
getData();
displayData();