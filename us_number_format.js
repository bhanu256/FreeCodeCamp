function telephoneCheck(str) {
  // Good luck!
  if(str.charAt(0)=="-"){
    return false;
  }
  var ba =0;
  if(str.includes("(")) 
  ba=ba+1;
  if(str.includes(")")) 
  ba=ba+1;
  if(ba==1) 
  return false;
  if(str.charAt(0)=="("&&str.charAt(str.length-1)==")")
  return false;
  str = str.replace("(","");
  str = str.replace(/[)]/g,"");
  str = str.replace(/-/g,"");
  str = str.replace(/ +/g,"");
  console.log(str);
  var length = str.length;
  if(length==10&&str.match(/[0-9]/)){
    return true;
  }
  else if(length==11&&str.match(/[0-9]/)&&str.charAt(0)=="1"){
    return true;
  }
  return false;
}

telephoneCheck("1 555)555-5555");
