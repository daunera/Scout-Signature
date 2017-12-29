function validation(res){
  if (!checkRequired(res))
    return 'Kötelező mező üres!';
  if (!checkEmail(res['mail']))
    return 'Hibás email formátum!';
  if (!checkColor(res['color']))
    return 'Hibás színkód formátum!';
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
  if (res['mail'] == undefined || res['name'] == undefined)
    return false;
  return true;
}