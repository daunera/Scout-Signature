var SECONDARY_COLOR = '#ffa500';
var COLORS = ['Trendizöld','WOSM-lila','Narancssárga','Világoskék','Piros','Gesztenyebarna','Türkizkék','Városmajor zöld'];

function buildAddOn(e){
  return [buildUI('', e.clientPlatform)];
}

function buildUI(status, platform) {
  var card = CardService.newCardBuilder();
  
  card.addCardAction(CardService.newCardAction()
                     .setText('Segítség')
                     .setOpenLink(CardService.newOpenLink().setUrl('https://github.com/daunera/Scout-Signature/blob/master/README.md')));
  
  card.addCardAction(CardService.newCardAction()
                     .setText('Törlöm a tárolt adataim')
                     .setOnClickAction(CardService.newAction().setFunctionName('deleteAction')));
  
  card.setHeader(CardService.newCardHeader()
                 .setTitle('Hozz létre saját aláírást!')
                 .setImageUrl('http://varosmajor.cserkesz.hu/mcsszsign/mcssz_alairas.png'));
  
  card.addSection(buildEditSection(status, platform));
  
  return card.build();
}

function buildEditSection(status, platform){
  var section = CardService.newCardSection();
  
  Logger.log(platform);
  if(platform === 'android' || platform === 'ios'){
    section.addWidget(CardService.newTextParagraph().setText('<font color="#ff0000">'+status+'</font>'));
  }
  
  section
  .addWidget(buildTextInput('name','Név (kötelező)'))
  .addWidget(buildTextInput('mail','Email (kötelező)'))
  .addWidget(buildTextInput('phone','Telefonszám'));
  
  section
  .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Cserkészadatok</font></b>'))
  .addWidget(buildTextInput('teamNum','Csapatszám', 'Pont nélkül a végén'))
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
  .addWidget(buildTextInput('outerTeam','Nagyobb egység', 'Üresen hagyva: Magyar Cserkészszövetség'))
  .addWidget(buildTextInput('address','Cím', 'Üresen hagyva: szövetségi iroda címe'));
  
  section
  .addWidget(CardService.newTextParagraph().setText('<b><font color="'+SECONDARY_COLOR+'">Kinézet</font></b>'))
  .addWidget(buildTextInput('color','Szín','Üresen hagyva Trendizöld, hexa színkód is használható: color-hex.com')
             .setSuggestions(CardService.newSuggestions()
                             .addSuggestions(COLORS)))
  .addWidget(buildTextInput('logoUrl','Logó URL','Üresen hagyva: MCSSZ logó'))
  .addWidget(buildTextInput('logoSize','Logó mérete','Pixelben, üresen hagyva: 70 px'))
  .addWidget(buildTextInput('title','Logó alatti szöveg','Több sor esetén: elsősor_másodiksor, üresen hagyva: cserkesz.hu'))
  .addWidget(buildTextInput('titleUrl','Logó alatti szöveg linkje', 'Üresen hagyva: cserkesz.hu'))
  
  if(platform === 'web' || !platform){
    section.addWidget(CardService.newTextParagraph().setText('<font color="#ff0000">'+status+'</font>'));
  }
  
  section
  .addWidget(CardService.newButtonSet()
             .addButton(CardService.newTextButton()
                        .setText('Aláírás beszúrása')
                        .setOnClickAction(CardService.newAction().setFunctionName('update'))))
  
  return section;
}

function buildTextInput(fieldName, title, hint){
  
  var textInput = CardService.newTextInput()
  .setFieldName(fieldName)
  .setTitle(title)
  .setOnChangeAction(CardService.newAction().setFunctionName('saveAction'))
  .setValue(getValue(fieldName));
  
  if (hint) {
    textInput.setHint(hint)
  }
  
  return textInput;
}