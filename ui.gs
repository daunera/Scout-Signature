var SECONDARY_COLOR = '#0075bf';
var COLORS = ['Trendizöld','WOSM-lila','Narancssárga','Világoskék','Piros','Gesztenyebarna','Türkizkék'];

function buildAddOn(e) {
  var accessToken = e.messageMetadata.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  
  return [buildUI()];
}

function buildUI(status) {
  var card = CardService.newCardBuilder();
  
  card.setHeader(CardService.newCardHeader()
    .setTitle('Hozz létre aláírást!')
    .setImageUrl('https://ecset-static.cserkesz.net/static/alairas/mcssz_alairas.png'));
  
  var section = buildSection(status);
  card.addSection(section);
  
  return card.build();
}

function buildSection(status){
  var section = CardService.newCardSection();
  
  section
    .addWidget(CardService.newTextParagraph().setText('<font color="#ff0000">*kötelező</font>'))
    .addWidget(buildTextInput('name','Név*'))
    .addWidget(buildTextInput('mail','Email*').setSuggestions(suggestMail()))
    .addWidget(buildTextInput('phone','Telefonszám'));
    
  section
    .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Cserkészadatok</font></b>'))
    .addWidget(buildTextInput('team','Csapatszám'))
    .addWidget(CardService.newSelectionInput()
      .setFieldName('level')
      .setTitle('Képesítés')
      .setType(CardService.SelectionInputType.DROPDOWN)
      .addItem('-', '', true)
      .addItem('őrsvezető', 'őv.', false)
      .addItem('segédtiszt', 'csst.', false)
      .addItem('cserkésztiszt', 'cst.', false))
    .addWidget(buildTextInput('rank','Megbizatás'))
    .addWidget(buildTextInput('unit','Megbizatás egysége'))
    .addWidget(buildTextInput('address','Cím'));
    
  section
    .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Kinézet</font></b>'))
    .addWidget(buildTextInput('color','Szín')
      .setSuggestions(CardService.newSuggestions()
        .addSuggestions(COLORS)))
    .addWidget(buildTextInput('logo','Logó URL'))
    .addWidget(buildTextInput('title','Logó alatti szöveg'))
    .addWidget(buildTextInput('titleUrl','Logó alatti szöveg linkje'))
    
  section
    .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Létrehozás</font></b>'))
    .addWidget(CardService.newSelectionInput()
      .setFieldName('save')
      .setType(CardService.SelectionInputType.CHECK_BOX)
      .addItem('Jegyezd meg', 'saveIt', false))
    .addWidget(CardService.newTextParagraph().setText('Állapot: OKÉ'));
    
   var action =  CardService.newAction().setFunctionName('compose');
   section 
    .addWidget(CardService.newButtonSet()
      .addButton(CardService.newTextButton()
        .setText('Új email')
        .setComposeAction(action, CardService.ComposedEmailType.STANDALONE_DRAFT))
      .addButton(CardService.newTextButton()
        .setText('Válasz erre')
        .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT)))
  
  return section;
}

function buildTextInput(fieldName, title, value, action){

  var textInput = CardService.newTextInput()
    .setFieldName(fieldName)
    .setTitle(title);
  
  return textInput;
}

function compose(){
}
