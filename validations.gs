function validation(res){
  var req = checkRequired(res);
  if (req !== 'Ok')
    return req;
  else if (!checkEmail(res.mail))
    return 'Helytelen az email formátuma!';
  else if (!checkColor(res.color))
    return 'Helytelen a színkód formátuma!';
  else if (!checkNum(res.logoSize))
    return 'A logó mérete csak szám lehet!';
  else
    return 'Ok';
}

function checkColor(color) {
  var tempColor = colorToHex(color);
  var regExpPattern = /#[0-9,a-f,A-F]{6}$/;
  return regExpPattern.test(tempColor);
}

function checkEmail(email){
  var regExpPattern = /\S+@\S+\.\S+/;
  return regExpPattern.test(email);
}

function checkRequired(res){
  if (!res.mail && !res.name)
    return 'Üres a név és az email mező!';
  else if (!res.mail)
    return 'Üres az email mező!';
  else if (!res.name)
    return 'Üres a név mező!';
  else
    return 'Ok';
}

function checkNum(number){
  var regExpPattern = /^[0-9]*$/;
  return regExpPattern.test(number);
}