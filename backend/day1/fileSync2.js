const {myReadFile, myWriteFile, myAppendFile, myDeleteFile, username}= require('./fileSync1.js')
myReadFile();
myWriteFile("ABCD");
myReadFile();
myAppendFile("ABCD");
myAppendFile();
myDeleteFile("dummy.txt")
console.log("User-Name",username);
