function update(e){
  var res = e.formInput;  
  var check = validation(res);
  
  if(check === 'Ok'){
    check = '';
    var htmlContent = 'Szöveg helye<br><br>'+createSignature(res); 
    var response = CardService.newUpdateDraftActionResponseBuilder()
    .setUpdateDraftBodyAction(CardService.newUpdateDraftBodyAction()
                              .addUpdateContent(
                                htmlContent,
                                CardService.ContentType.MUTABLE_HTML)
                              .setUpdateType(
                                CardService.UpdateDraftBodyType.IN_PLACE_INSERT))
    .build();
    return response;
  } else{
    return buildUI(check, e.clientPlatform);
  }
}

function saveAction(e){
  var res = e.formInput;
  var properties = PropertiesService.getUserProperties();
  properties.setProperties(res, true);
}

function deleteAction(e){
  var properties = PropertiesService.getUserProperties();
  properties.deleteAllProperties();
  return buildUI('', e.clientPlatform);
}

function getValue(property, option){
  var propertyValue = PropertiesService.getUserProperties().getProperty(property);
  if(property == 'level'){
    if(option == propertyValue || (!propertyValue && option == '')){
      return true;
    }
    return false;
  }
  if(!propertyValue)
    return '';
  return propertyValue;
}