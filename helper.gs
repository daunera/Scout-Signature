function suggestMail() {  
  var email = Session.getActiveUser().getEmail();
  return CardService.newSuggestions().addSuggestion(email);
}

function sendFeedback(e){
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  
  var draft = GmailApp.createDraft('daunera@gmail.com','[ScoutSignature] visszajelzés','');
  return CardService.newComposeActionResponseBuilder().setGmailDraft(draft).build();
}

function compose(e){
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  
  var res = e['formInput'];  
  var check = validation(res);
  
  if(check == 'Ok'){
    var draft = GmailApp.createDraft('', '', '', {htmlBody: 'Ide írj!<br><br>'+createSignature(res)});
    return CardService.newComposeActionResponseBuilder().setGmailDraft(draft).build();
  }
  else
    Logger.log('ERROR: '+check);
    return null;
}

function composeReply(e){
  var accessToken = e.messageMetadata.accessToken;
  var messageId = e.messageMetadata.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  var message = GmailApp.getMessageById(messageId);
  
  var res = e['formInput'];  
  var check = validation(res);
  
  if(check == 'Ok'){
    var draft = message.createDraftReply('',{htmlBody: 'Ide írj!<br><br>'+createSignature(res)});
    return CardService.newComposeActionResponseBuilder().setGmailDraft(draft).build();
  }
  else
    Logger.log('ERROR: '+check);
    return null;
}

function validateAction(e){
  //var accessToken = e.messageMetadata.accessToken;
  //GmailApp.setCurrentMessageAccessToken(accessToken);
  
  var res = e['formInput'];
  
  var check = validation(res);
  
  if(check == 'Ok')
    check = '<font color="#00ff00">'+check+'</font>'
  else
    check = '<font color="#ff0000">'+check+'</font>'
  
  return buildUI(check);
}

function saveAction(e){
  var res = e['formInput'];
  var properties = PropertiesService.getUserProperties();
  properties.deleteAllProperties();
  if('save' in res){
    var keys = Object.keys(res);
    for(var i=0; i<keys.length ; i++)
      properties.setProperty(keys[i], res[keys[i]]);
  }
}

function getValue(property, option){
  var propertyValue = PropertiesService.getUserProperties().getProperty(property);
  if(property == 'save'){
    if(propertyValue == null)
      return false;
    return true;
  }
  if(property == 'level'){
    if(option == propertyValue || (propertyValue == null && option == ''))
      return true;
    return false;
  }
  if(propertyValue == undefined)
      return '';
  return propertyValue;
}