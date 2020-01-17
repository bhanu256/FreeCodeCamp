function rot13(str) { // LBH QVQ VG!
  str = str.toUpperCase();
  var length = str.length;
  var i=0;

  while(i<length){
    var ch = str.charCodeAt(i)-65;
    if(ch>=0&&ch<=26){
      console.log(ch);
      if(ch<13)
      var num = ch+13;
      else
      var num = ch%13;
      console.log(ch+String.fromCharCode(num+65));
      str = str.substr(0,i)+String.fromCharCode(num+65)+str.substr(i+1,length-1);
    }
    ++i;
  } 
  console.log(str);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
