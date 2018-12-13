# MCSSZ Aláírás generáló Gmail Bővítmény

### Tartalomjegyzék:
- [Frissítések](https://github.com/daunera/Scout-Signature/blob/master/README.md#friss%C3%ADt%C3%A9s-20181212)
- [Koncepció képek](https://github.com/daunera/Scout-Signature/blob/master/README.md#koncepci%C3%B3-k%C3%A9pek)
- [Felületi elemek leírása](https://github.com/daunera/Scout-Signature/blob/master/README.md#fel%C3%BClet-elemei)
- [Telepítés és használat](https://github.com/daunera/Scout-Signature/blob/master/README.md#telep%C3%ADt%C3%A9s-%C3%A9s-haszn%C3%A1latba-v%C3%A9tel)
- [Képernyőképek a bővítményről](https://github.com/daunera/Scout-Signature/blob/master/README.md#k%C3%A9perny%C5%91k%C3%A9pek-a-b%C5%91v%C3%ADtm%C3%A9nyr%C5%91l)

Ennek az add-on-nak a segítségével a Gmail webes és mobilos felületéről könnyen beillesztheted egy-egy levélbe a cserkész email aláírásodat. Így nem kell állandóra beállítani vagy ha csak alkalomról alkalomra használod, nem kell ECSET-ből kimásolnod. Akkor is hasznos lehet, ha egyszerre több megbizatás kapcsán használsz ilyen aláírást, könnyen generálhatsz ilyet is-olyat is.

Ezen felül megvan a lehetőséged, hogy a szokásos szövetségi opciók (logó, link, színek) mellett sajátot készíts, saját egységed, csapatod számára.

## Frissítés (2018.12.12)
- Mostantól a piszkozat szerkesztése közben bármikor be lehet szúrni a szövegtörzsbe az aláírást, nem csak a létrehozáskor
- Helyességellenőrzés (kötelező mezők megléte, számformátumok, email és hexa formátumok)
- Helyességellenőrzés kijelzése (piros színnel, weben az alsó gomb felett, mobilon az első sorban)
- Nagyobb egység megadására is van lehetőség az alsó részen (eddig fixen MCSSZ szerepelt itt)
- Logó mérete külön beviteli mezőbe került
- A mezők alá tippek, leírások kerültek (mi kerül a helyére ha üres marad egy mező, egyéb megkötések, tippek stb.)
- Adatok mentése automatikus, törölni a jobb felső sarok menüjéből lehet
- Új logója lett, aláírás helyett egy cserkészliliom, utalva a cserkészaláírás voltára
- Változott a színkészlet
- A képfájlok közös statikus helyre kerültek

## Koncepció képek
<img src="https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign01.PNG" width="350"> <img src="https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign06.PNG" width="350">
<img src="https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign10.PNG" width="350"> <img src="https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign11.PNG" width="350">

__[MÉG TÖBB ITT](https://photos.app.goo.gl/nKFlu7gx5Hiv5Vc23)__

## Felület elemei

- __Név__: Kötelező kitölteni, teljes név (kitöltöttségellenőrzés történik)
- __Email__: Kötelező kitölteni, érvényes email címnek kell lennie (formátum és kitöltöttségellenőrzés történik)
- __Telefonszám__


__Cserkészadatok__
- __Csapatszám__: Csak arab szám, mindenféle pont, vessző nélkül
- __Képesítés__: Legördülő listából kizárólag az alábbiak: - (üresen marad), őrsvezető, segédtiszt, cserkésztiszt
- __Megbizatás__
- __Megbizatás egysége__: Teljes névvel (pl: 2. Sík Sándor cserkészcsapat, Szent Katalin raj, Országos Elnökség)
- __Nagyobb egység__: Ha a megbizatás egysége őrs vagy más kisebb egység, itt meg lehet adni a csapat nevét, üresen hagyva a szövetség neve kerül ide
- __Cím__: Egységed elérhetősége, üresen hagyva a központi iroda címe kerül ide (Tömörkény utca)


__Kinézet__
- __Szín__: Ajánlatként az ECSET-ben is megtalálható színek szövegesen is kiválaszthatóak. Ezen felül hexadecimális színkódok használhatóak, ezek formátumát ellenőrzi az alkalmazás. Üresen hagyva Trendizöld az alapértelmezett. Színkódokhoz egy hasznos oldal: [color-hex.com](https://color-hex.com)
- __Logó URL__: Saját logó statikusan elérhető url címét add meg. A logó négyzetes legyen, körülbelül 70-150px nagyságú. Ha üresen hagyod, a szövetségi logó kerül ide.
- __Logó mérete__: Az itt megadott méretet veszi fel a logó is, mértékegysége pixel, üresen hagyva az alapértelmezett érték 70 pixel
- __Logó alatti szöveg__: A logó alá kerülő szöveg adható meg, általában a logóval összhangban lévő név, egység neve. Üresen hagyva _cserkesz.hu_ kerül ide. Extra opció: Ha több sorba szeretnéd törni a neved a _ karakterrel sor törés érhető el (pl: Okosabb_cserkészek)
- __Logó alatti szöveg linkje__: A logó alatti szöveg egyben egy hivatkozás. Itt megadhatod az egységed webes elérhetőségét, honlap vagy fb oldalét. Üresen hagyva a cserkesz.hu-ra mutat.

Legalul a beillesztő gomb található:
- __Aláírás beszúrása__: Beszúrja oda a piszkozaton belül az aláírást, ahol a kurzor áll. Ha nincs benne a kurzor, akkor legfelülre. Csak sikeres ellenőrzés esetén szúrja be, sikertelenség esetén a hiba okát írja ki. 

Ezen felül a jobb felső sarokban lévő almenüből
- erre az oldalra mutató segítség érhető el és
- törölni lehet a bővítmény által eltárolt adatokat.

## Telepítés és használatba vétel
[Eredeti angol nyelvű leírás telepítéshez](https://developers.google.com/gmail/add-ons/how-tos/install-unpublished)

Egyenlőre semmilyen Gmail Add-on-t nem lehet publikálni, mert az egész add-on rendszer friss dolog. Csak fejlesztői bővítményként lehet telepíteni @gmail.com-os accountról. Cserkesz.hu-s címről úgy küldhető ilyen aláírás, hogy egy másik @gmail.com-is címhez hozzákötöd a cserkesz.hu-s címet, hogy annak nevében is tudj emial küldeni. Ezt a _Beállítások > Fiókok és importálás > E-mail küldése erről a címről: "Újabb e-mail-cím hozzáadása"_-nál tudod beállítani.


Deployment/Telepítés ID: __AKfycbwLeyyMPZIMZQF_oV8iQb1AzcIU7rkkwPELEAX0Gj43QCRtl7eQMVGzfqZmHgULKDqm__


1. [Nyisd meg a Gmail Add-on/Bővítmények beállítás fülét](https://mail.google.com/mail/#settings/addons)
2. A Bővítmények fülön ellenőrizd, hogy a __Fejlesztői bővítmények bekapcsolása a fiókomhoz__ opció be van pipálva.
3. Másold be a bővítmény telepítési ID-ját (deployment ID fentebb) a __Fejlesztő bővítmények__ szövegdobozra, majd kattins a __Telepítés__-re
4. Pipáld és fogadd el a felugró ablakot.

Ezután piszkozatot létrehozva:
- web esetén a küldés gomb sávjában jobb oldalt az általános gombok után a <img src="http://varosmajor.cserkesz.hu/mcsszsign/icon.png" width="20"> ikonra kattintva, 
- mobil esetén a jobb felső sarokban lévő _hárompontos_ menü legalján __MCSSZ aláírás__ menüpontból

érhető el a bővítmény.

### Telepítést követő első használatkor
[Eredeti angol nyelvű leírás](https://developers.google.com/gmail/add-ons/how-tos/authorizing)

Hozzáférést kell adni a fiókhoz a bovítménynek, ez biztosít arról, hogy semmi rosszaság nem történik a háttérben. Első használatkor a bővítmény helyén egy "Hozzáférés megadása" gomb jelenik meg, erre kattintva kell megadni az engedélyt felhasználóhoz kötve. A hozzáférés megadáshoz először ki kell választani a kívánt felhasználót, majd a _Az alkalmazás nincs ellenőrizve_ ablaknál bal oldalt a _Speciális_ gombra kattintani, ahonnan a lenyílő rész alján a _Lépjen ide:..._ linket kell választani. Itt kell az _Engedélyezés_ gombra kattintani.

Azért leírom melyik engedély mire kell:
- _Futtatás Gmail-bővítményként_: Minden Gmail bövítménynél kötelező ezt a hozzáférést megadni
- _Piszkozatok kezelése és e-mailek küldése_: Piszkozatokba való szövegbeillesztéshez szükséges
- _Megtekintheti az e-mail-üzenetek metaadatait_: Piszkozatokba való szövegbeillesztéshez szükséges
- _Az alkalmazáshoz társított adatok megtekintése és kezelése_: Ez engedéllyel lehet csak eltárolni a beírt adatokat, csak az alkalmazás érheti el, senki más.

## Képernyőképek a bővítményről

### Mobil
<img src="https://github.com/daunera/Scout-Signature/blob/master/screens/new_android1.jpg" width="210"> <img src="https://github.com/daunera/Scout-Signature/blob/master/screens/new_android2.jpg" width="210"> <img src="https://github.com/daunera/Scout-Signature/blob/master/screens/new_android3.png" width="210">

### Web
<img src="https://github.com/daunera/Scout-Signature/blob/master/screens/new_web1.jpg" width="400"> <img src="https://github.com/daunera/Scout-Signature/blob/master/screens/new_web2.jpg" width="400">
