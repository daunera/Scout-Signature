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
A Gmail Add-on keretrendszer fejlesztéseivel lehetőségem adódott alakítani a programon a használhatóságán.
- Mostantól a piszkozat létrehozásakkor lehet a szövegtörzsbe beszúrni az aláírást, nem a létrehozáskor
- Helyességellenőrzés (kötelező mezők megléte, számformátumok, email és hexa formátumok)
- Helyességellenőrzés kijelzése (piros színnel, weben az alsó gomb felett, mobilon az első sorban)
- Nagyobb egység megadására is van lehetőség az alsó részen (eddig fixen MCSSZ szerepelt itt)
- Logó mérete külön beviteli mezőbe került
- A mezők alá tippek kerlültek (mi kerül a helyére ha üres marad egy mező, egyéb megkötések, tippek stb.)
- Adatok mentése automatikus, nem lehet kikapcsolni (Törölni a jobb felső sarok menüjéből lehet)
- Új logója lett, aláírás helyett egy cserkészliliom, utalva a cserkészaláírás voltára
- Változott a színkészlet
- A képfájlok közös statikus helyre kerültek

## Koncepció képek

![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign01.PNG)
![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign06.PNG)
![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign10.PNG)

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
- __Szín__: Ajánlatként az ECSET-ben is megtalálható színek szövegesen is kiválaszthatóak. Ezen felül hexadecimális színkódok használhatóak, ezek formátumát ellenőrzi az alkalmazás. Üresen hagyva Trendizöld az alapértelmezett. Színkódokhoz egy hasznos oldal: color-hex.cim
- __Logó URL__: Saját logó statikusan elérhető url címét add meg. A logó négyzetes legyen, körülbelül 70-150px nagyságú. Ha üresen hagyod, a szövetségi logó kerül ide.
- __Logó mérete__: Az itt megadott méretet veszi fel a logó is, mértékegysége pixel, üresen hagyva az alapértelmezett érték 70 pixel
- __Logó alatti szöveg__: A logó alá kerülő szöveg adható meg, általában a logóval összhangban lévő név, egység neve. Üresen hagyva _cserkesz.hu_ kerül ide. Extra opció: Ha több sorba szeretnéd törni a neved a _ karakterrel sor törés érhető el (pl: Okosabb_cserkészek)
- __Logó alatti szöveg linkje__: A logó alatti szöveg egyben egy hivatkozás. Itt megadhatod az egységed webes elérhetőségét, honlap vagy fb oldalét. Üresen hagyva a cserkesz.hu-ra mutat.

Legalul a beillesztő gomb található:
- __Aláírás beszúrása__: Beszúrja oda a piszkozaton belül az aláírást, ahol a kurzor áll. Ha nincs benne a kurzor, akkor legfelülre. Csak sikeres ellenőrzés esetén szúrja be, sikertelenség esetén a hiba okát írja ki. 

Ezen felül az jobb felső sarokban lévő almenüből
- erre az oldalra mutató segítség érhető el
- törölni lehet a bővítmény által eltárolt adatokat

## Telepítés és használatba vétel
[Eredeti angol nyelvű leírás telepítéshez](https://developers.google.com/gmail/add-ons/how-tos/install-unpublished)

Egyenlőre semmilyen Gmail Add-on-t nem lehet publikálni, mert az egész add-on rendszer friss dolog. Csak fejlesztői bővítményként lehet telepíteni @gmail.com-os accountról. Cserkesz.hu-s címről úgy küldhető ilyen aláírás, hogy egy másik @gmail.com-is címhez hozzákötöd a cserkesz.hu-s címet, hogy annak nevében is tudj emial küldeni. Ezt a _Beállítások > Fiókok és importálás > E-mail küldése erről a címről: "Újabb e-mail-cím hozzáadása"_-nál tudod beállítani.


Deployment/Telepítés ID: __AKfycbxiSAbxwCAWB9cdOCvt96ml6-72ixIt3aAdfKMVNOAYa67w9D1JD5VO__


1. [Nyisd meg a Gmail Add-on/Bővítmények beállítás fülét](https://mail.google.com/mail/#settings/addons)
2. A Bővítmények fülön ellenőrizd, hogy a __Fejlesztői bővítmények bekapcsolása a fiókomhoz__ opció be van pipálva.
3. Másold be a bővítmény telepítési ID-ját (deployment ID fentebb) a __Fejlesztő bővítmények__ szövegdobozra, majd kattins a __Telepítés__-re
4. Pipáld és fogadd el a felugró ablakot.

Ezután piszkozatot létrehozva
- web esetén a küldés gomb sávjában jobb oldalt az általános gombok után az alábbi ikonra kattintva, 
- mobil esetén a jobb felső sarokban lévő _hárompontos_ menü legalján __MCSSZ aláírás__ menüpontból
érhető el a bővítmény.

![](http://varosmajor.cserkesz.hu/mcsszsign/icon.png)

### Telepítést követő első használatkor
[Eredeti angol nyelvű leírás](https://developers.google.com/gmail/add-ons/how-tos/authorizing)

Hozzáférést kell adni a fiókhoz a bovítménynek, ez biztosít arról, hogy semmi rosszaság nem történik a háttérben. Első használatkor a bővítmény helyén egy "Hozzáférés megadása" gomb jelenik meg, erre kattintva kell megadni az engedélyt felhasználóhoz kötve. Érdemes tudni, hogy minden hozzáférés csak ideiglenesen adódik át az adott munkamenetre, így mindig történik authorizáció felhasználó részről.

Azért leírom melyik engedély mire kell:
- _Futtatás Gmail-bővítményként_: Minden Gmail bövítménynél kötelező ezt a hozzáférést megadni
- _Piszkozatok kezelése és e-mailek küldése_: Piszkozatokba való szövegbeillesztéshez szükséges
- _Emailek metaadatainak megtekintése_: Piszkozatokba való szövegbeillesztéshez szükséges
- _Az alkalmazáshoz társított adatok megtekintése és kezelése_: Ez engedéllyel lehet csak eltárolni a beírt adatokat, csak az alkalmazás érheti el, senki más.

## Képernyőképek a bővítményről (régi verzió)

### Android

![](https://github.com/daunera/Scout-Signature/blob/master/screens/new_android1.png)  ![](https://github.com/daunera/Scout-Signature/blob/master/screens/new_android2.png)  ![](https://github.com/daunera/Scout-Signature/blob/master/screens/new_android3.png)

### Web

![](https://github.com/daunera/Scout-Signature/blob/master/screens/new_web1.png) ![](https://github.com/daunera/Scout-Signature/blob/master/screens/new_web2.png)
