function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/ +/g,"");
  str = str.replace("/","");
  
  var length = str.length;
  
  var i=1;
  var us = true;
  while(i<length){
    var ch = str.charAt(i-1);
    if(!ch.match(/[0-9a-z]/i)){
      str = str.substr(0,i-1)+str.substr(i,length);
    }
    ++i;
  }

  console.log(str);
  length=str.length;
  var i=1;
  while(i<length){
    var ch = str.charAt(i-1);
    console.log(ch+str.charAt(length-i));
    if(ch!=str.charAt(length-i)){
      us=false;
    }
    ++i;
  }
  console.log(str+us);
  return us;
}



palindrome("0_0 (: /-\ :) 0-0");
