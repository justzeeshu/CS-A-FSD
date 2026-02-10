const os = require('os');

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("os Release:", os.release());
console.log("hostname:", os.hostname());

const totalMemGb = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeMemGb = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log(`Total Memory: ${freeMemGb}GB Free of ${totalMemGb} GB`);


const UserInfo= os.userInfo();
console.log("User Info:", UserInfo.username);