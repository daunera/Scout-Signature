var SECONDARY_COLOR = '#0075bf';
var COLORS = ['Trendizöld','WOSM-lila','Narancssárga','Világoskék','Piros','Gesztenyebarna','Türkizkék','#48B84F'];

function buildAddOn(e) {
  return [buildUI('')];
}

function buildUI(status) {
  var card = CardService.newCardBuilder();
  
  card.addCardAction(CardService.newCardAction()
    .setText('Segítség')
    .setOpenLink(CardService.newOpenLink().setUrl('https://github.com/daunera/Scout-Signature/blob/master/README.md')));
    
  card.addCardAction(CardService.newCardAction()
    .setText('Visszajelzés')
    .setComposeAction(CardService.newAction().setFunctionName('sendFeedback'), CardService.ComposedEmailType.STANDALONE_DRAFT))
  
  card.setHeader(CardService.newCardHeader()
    .setTitle('Hozz létre saját aláírást!')
    .setImageUrl('https://ecset-static.cserkesz.net/static/alairas/mcssz_alairas.png'));
  
  card.addSection(buildEditSection());
  card.addSection(buildEndSection(status));
  
  return card.build();
}

function buildEditSection(){
  var section = CardService.newCardSection();
  
  section
    .addWidget(CardService.newTextParagraph().setText('<font color="#ff0000">*kötelező</font>'))
    .addWidget(buildTextInput('name','Név*'))
    .addWidget(buildTextInput('mail','Email*').setSuggestions(suggestMail()))
    .addWidget(buildTextInput('phone','Telefonszám'));
    
  section
    .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Cserkészadatok</font></b>'))
    .addWidget(buildTextInput('teamNum','Csapatszám'))
    .addWidget(CardService.newSelectionInput()
      .setFieldName('level')
      .setTitle('Képesítés')
      .setType(CardService.SelectionInputType.DROPDOWN)
      .setOnChangeAction(CardService.newAction().setFunctionName('saveAction'))
      .addItem('-', '', getValue('level',''))
      .addItem('őrsvezető', 'őv.', getValue('level','őv.'))
      .addItem('segédtiszt', 'csst.', getValue('level','csst.'))
      .addItem('cserkésztiszt', 'cst.', getValue('level','cst.')))
    .addWidget(buildTextInput('rank','Megbizatás'))
    .addWidget(buildTextInput('rankTeam','Megbizatás egysége'))
    .addWidget(buildTextInput('address','Cím'));
    
  section
    .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Kinézet</font></b>'))
    .addWidget(buildTextInput('color','Szín')
      .setSuggestions(CardService.newSuggestions()
        .addSuggestions(COLORS)))
    .addWidget(buildTextInput('logoUrl','Logó URL'))
    .addWidget(buildTextInput('title','Logó alatti szöveg'))
    .addWidget(buildTextInput('titleUrl','Logó alatti szöveg linkje'))
  
  return section;
}

function buildEndSection(status){
  var section = CardService.newCardSection();
  
  section
  .addWidget(CardService.newSelectionInput()
    .setFieldName('save')
    .setType(CardService.SelectionInputType.CHECK_BOX)
    .setOnChangeAction(CardService.newAction().setFunctionName('saveAction'))
    .addItem('Beállítások megjegyzése', 'saveIt', getValue('save')));
  
  var composeAction = CardService.newAction().setFunctionName('compose');
  section 
  .addWidget(CardService.newButtonSet()
    .addButton(CardService.newTextButton()
      .setText('Új email')
      .setComposeAction(composeAction.setParameters({reply: 'no'}), CardService.ComposedEmailType.STANDALONE_DRAFT))
    .addButton(CardService.newTextButton()
      .setText('Válasz erre')
      .setComposeAction(composeAction.setParameters({reply: 'yes'}), CardService.ComposedEmailType.REPLY_AS_DRAFT)));
      
  //section.addWidget(CardService.newTextParagraph().setText(status));
      
  return section;
}


function buildTextInput(fieldName, title){

  var textInput = CardService.newTextInput()
    .setFieldName(fieldName)
    .setTitle(title)
    .setOnChangeAction(CardService.newAction().setFunctionName('saveAction'))
    .setValue(getValue(fieldName));
  
  return textInput;
}