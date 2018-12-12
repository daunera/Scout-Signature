function createSignature(res){
  var color = colorToHex(res.color);
  var name = setName(res.name,res.level,res.teamNum);
  var rank = setRank(res.rank);
  var rankTeam = setRankTeam(res.rankTeam);
  var outerTeam = setOuterTeam(res.outerTeam);
  var phone = setPhone(res.phone);
  var email = setEmail(res.mail);
  var address = setAddress(res.address);
  var logoUrl = setLogoUrl(res.logoUrl, res.logoSize);
  var title = setTitle(res.title);
  var titleUrl = setTitleUrl(res.titleUrl);

  var signature = '<table style="margin-right: 0px; font-size: 9pt; font-family: Arial, Helvetica, sans-serif;"><tbody><tr><td style="width: 85px; text-align: center; vertical-align: top">';
  signature += logoUrl;
  signature += '<br><br><a href="';
  signature += titleUrl + '" style="color: ' + color + '; text-decoration: none" target="_blank">';
  signature += title + '</a></td><td style="width: 4px; background-color: '+ color + ';"></td>';
  signature += '<td style="white-space: nowrap;"><div style="margin-left: 10px;"><span style="color: '+ color + '; font-weight: bold; font-size: 11pt">';
  signature += name + '</span><br>';
  signature += rank + rankTeam + phone + email;
  signature += '<br><span style="color: '+color+'; font-weight: bold;">'+outerTeam+'</span><br>';
  signature += '<a style="color: rgb(0, 0, 0); text-decoration: none" href="https://www.google.hu/maps/place/'+address+'" target="_blank">'+address+'</a><span style="color: #E2E3E0;">»</span><br>';
  signature += '</div></td></tr></tbody></table>';

  return signature;
}

function colorToHex(color){
  if (!color)
    color = 'Trendizöld';

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
    case 'Városmajor zöld':
      return '#48B84F';
    default:
      return color;
  }
}

function setName(name, level, teamNum){
  if (!level)
    level = '';
  else
    level = ' '+level;
  if (!teamNum)
    teamNum = '';
  else
    teamNum = ' ('+teamNum+'.)';

  return name+level+teamNum;
}

function setRank(rank){
  if(!rank)
    return '';
  return '<span style="font-weight: bold; font-size: 10pt">'+rank+'</span><br>';
}

function setRankTeam(rankTeam){
  if (!rankTeam)
    return '';
  return '<span style="font-size: 9pt">'+rankTeam+'</span><br>';
}

function setOuterTeam(outerTeam){
  if (!outerTeam)
    return 'Magyar Cserkészszövetség';
  return outerTeam;
}

function setPhone(phone){
  if (!phone)
    return '';
  return '<br> mobil: <a style="color: rgb(0, 0, 0); text-decoration: none" href="tel:'+phone+'">'+phone+'</a><span style="color: #E2E3E0;">»</span>';
}

function setEmail(email){
  if (!email)
    return '';
  return '<br> email: <a style="color: rgb(0, 0, 0); text-decoration: none" href="mailto:'+email+'">'+email+'</a><span style="color: #E2E3E0;">»</span><br>';
}

function setAddress(address){
  Logger.log(address);
  if (!address)
    address = '1025 Budapest, Tömörkény u. 3/a';
  return address;
}

function setLogoUrl(logoUrl, logoSize){
  if (!logoUrl)
    logoUrl = 'https://ecset-static.cserkesz.net/static/alairas/mcssz_alairas.png';
  if (!logoSize)
    logoSize = 70;
  
  return '<img alt="" src="' + logoUrl + '" style="height: '+logoSize+'px; width: '+logoSize+'px">';
}

function setTitle(title){
  if (!title)
    title = 'cserkesz.hu';
  if (/\S+_\S+/.test(title)){
    title = title.replace('_','<br>');
  }
    
  return title;
}

function setTitleUrl(titleUrl){
  if (!titleUrl)
    titleUrl = 'https://cserkesz.hu/';
    
  return titleUrl;
}