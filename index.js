function shout(string){
  return string.toUpperCase();
}
console.log(shout("Hello"));


function whisper(string){
  return string.toLowerCase();
}
console.log(shout("Hello"))

function logShout(string){
console.log(string.toUpperCase());
}
logShout("hello!");

function logWhisper(string){
  console.log(string.toLowerCase());
  }
  logShout("hello!");
function sayHiToHeadphonedRoommate(string) {

      if (string === string.toLowerCase()){
      return "I can't hear you!";
  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!"; 
}
else {
        return "I would love to!";
}
}
