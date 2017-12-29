function suggestMail() {  
  var email = Session.getActiveUser().getEmail();
  return CardService.newSuggestions().addSuggestion(email);
}

function createSignature(res){
  var name = '';
  var level = '';
  var team = '('+'.)';
  var rank = '';
  var rankTeam = '';
  var phone = '';
  var email = '';
  var address = '';
  var color = colorToHex('');
  var logoUrl = '';
  var title = '';
  var titleLink = '';

  var signature = '';


  return signature;
}

function colorToHex(color){
  switch(color){
    case 'Trendizöld':
      return '#76b82a';
    case 'WOSM-lila':
      return '#5d2f88';
    case 'Narancssárga':
      return '#f39200';
    case 'Világoskék':
      return '#0075bf';
    case 'Piros':
      return '#da0812';
    case 'Gesztenyebarna':
      return '#5b2919';
    case 'Türkizkék':
      return '#009a93';
    default:
      return color;
  }
}