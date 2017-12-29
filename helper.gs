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