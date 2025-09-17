function register() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("User has been registered");
            resolve();
        }, 5000);
    })
}
function sendEmail() {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("Email has been sent");
        resolve();
    }, 5000);
  })

}


function login() { 
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     console.log("login has been sucess");
     resolve();
   }, 5000);
 });
}
function getData(cb) {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("data geted");
         resolve();
       }, 5000);
     });
 }
function displayData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data displayed");
        resolve();
      }, 5000);
    }); 
    }

function waitforfiveseconds() {
    const ms = new Date().getTime() + 5000;
    while (new Date().getTime() < ms) { }
}
// register();
// sendEmail();
// login();
// getData();
// displayData();

// this patern is callback hell
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getData(() => {
//                 displayData();
//             })
//         })
//     })
// });

// promise


// by sync function
try {
    async function f1() {
        await register();
        await sendEmail();
        await login();
        await getData();
        await displayData();
    }
    f1();
}
        catch(err) {
            console.log(err)
        }


console.log("call other functions");