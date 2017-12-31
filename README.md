# MCSSZ Aláírás generáló Gmail Bővítmény

### Tartalomjegyzék:
- [Changelog](https://github.com/daunera/Scout-Signature/blob/master/README.md#changelog--v%C3%A1ltoz%C3%A1sok)
- [Koncepció képek](https://github.com/daunera/Scout-Signature/blob/master/README.md#koncepci%C3%B3-k%C3%A9pek)
- [Felületi elemek leírása](https://github.com/daunera/Scout-Signature/blob/master/README.md#fel%C3%BClet-elemei)
- [Telepítés és használat](https://github.com/daunera/Scout-Signature/blob/master/README.md#telep%C3%ADt%C3%A9s-%C3%A9s-haszn%C3%A1latba-v%C3%A9tel)

Ennek az add-on-nak a segítségével a Gmail webes és mobilos felületéről könnyen beillesztheted egy-egy levélbe a cserkész email aláírásodat. Így nem kell állandóra beállítani vagy ha csak alkalomról alkalomra használod, nem kell ECSET-ből kimásolnod. Akkor is hasznos lehet, ha egyszerre több megbizatás kapcsán használsz ilyen aláírást, könnyen generálhatsz ilyet is-olyat is.

Ezen felül megvan a lehetőséged, hogy a szokásos szövetségi opciók (logó, link, színek) mellett sajátot készíts, saját egységed, csapatod számára.

## Changelog / Változások

__Version 3 (2017.12.29)__
- Első kiadott verzió

## Koncepció képek

![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign01.PNG)
![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign06.PNG)
![](https://github.com/daunera/Scout-Signature/blob/master/concept_art/sign10.PNG)

__[MÉG TÖBB ITT](https://photos.app.goo.gl/nKFlu7gx5Hiv5Vc23)__

## Felület elemei

- __Név__: Kötelező kitölteni, teljes név
- __Email__: Kötelező kitölteni, érvényes email címnek kell lennie, történik ellenőrzés, ajánlatként a saját email cím mindig megjelenik
- __Telefonszám__


__Cserkészadatok__
- __Csapatszám__: Csak arab szám, mindenféle pont, vessző nélkül
- __Képesítés__: Legördülő listából kizárólag az alábbiak: - (üresen marad), őrsvezető, segédtiszt, cserkésztiszt
- __Megbizatás__
- __Megbizatás egysége__: Teljes névvel (pl: 2. Sík Sándor cserkészcsapat, Szent Katalin raj, Országos Elnökség)
- __Cím__: Egységed elérhetősége, üresen hagyva a központi iroda címe kerül ide (Tömörkény utca)


__Kinézet__
- __Szín__: Ajánlatként az ECSET-ben is megtalálható színek szövegesen is kiválaszthatóak. Ezen felül hexadecimális színkódok használhatóak, ezek formátumát ellenőrzi az alkalmazás. Üresen hagyva Trendizöld az alapértelmezett.
- __Logó URL__: Saját logó statikusan elérhető url címét add meg. A logó négyzetes legyen, körülbelül 70-150px nagyságú. Ha üresen hagyod, a szövetségi logó kerül ide. Extra opció: Az url előtt egy számot adsz meg, azt a méretet veszi fel a logó. (pl: _100 valalmi-webcim-hu/logo.jpg_) Az alapérték 70.
- __Logó alatti szöveg__: A logó alá kerülő szöveg adható meg, általában a logóval összhangban lévő név, egység neve. Üresen hagyva _cserkesz.hu_ kerül ide. Extra opció: Ha több sorba szeretnéd törni a neved a _ karakterrel sor törés érhető el (pl: Okosabb_cserkészek)
- __Logó alatti szöveg linkje__: A logó alatti szöveg egyben egy hivatkozás. Itt megadhatod az egységed webes elérhetőségét, honlap vagy fb oldalét. Üresen hagyva a cserkesz.hu-ra mutat.

__Beállítások megjegyzése__: Ezt bepipálva a kitöltésed eltárolódik, a bővítmény újboli megnyitásakkor továbbra is elérhető. Ha bepipálás után bármelyik mezőt szerkeszted, a módosítás utáni állapot tárolódik el.

Legalul két gomb található:
- __Új email__: Teljesen új piszkozatot hoz létre. Csak sikeres ellenőrzést követően hozza létre.
- __Válasz erre__: A megnyitott levélre válaszoló piszkozatot hoz létre aláírással. Csak sikeres ellenőrzést követően hozza létre.

Ezen felül az jobb felső sarokban lévő almenüből
- email-es visszajelzés küldhető javaslatoknak, hibajelentésekhez a fejlesztő felé
- erre az oldalra mutató segítség érhető el

## Telepítés és használatba vétel
[Eredeti angol nyelvű leírás telepítéshez](https://developers.google.com/gmail/add-ons/how-tos/install-unpublished)

Egyenlőre semmilyen Gmail Add-on-t nem lehet publikálni, mert az egész add-on rendszer friss dolog. Csak fejlesztői bővítményként lehet telepíteni @gmail.com-os accountról.


Deployment/Telepítés ID: __AKfycbxiSAbxwCAWB9cdOCvt96ml6-72ixIt3aAdfKMVNOAYa67w9D1JD5VO__


1. [Nyisd meg a Gmail Add-on/Bővítmények beállítás fülét](https://mail.google.com/mail/#settings/addons)
2. A Bővítmények fülön ellenőrizd, hogy a __Fejlesztői bővítmények bekapcsolása a fiókomhoz__ opció be van pipálva.
3. Másold be a bővítmény telepítési ID-ját (deployment ID fentebb) a __Fejlesztő bővítmények__ szövegdobozra, majd kattins a __Telepítés__-re
4. Pipáld és fogadd el a felugró ablakot.

Ezután bármelyik üzenetre kattintva elérhető a bővítmény ezen ikonra kattintva: 

![](https://www.gstatic.com/images/icons/material/system/2x/gesture_black_24dp.png)

Webes felületen egy megnyitott levél melleti jobb oldali sávon, mobilon pedig a levél alatti legalsó sávban.

### Telepítést követő első használatkor
[Eredeti angol nyelvű leírás](https://developers.google.com/gmail/add-ons/how-tos/authorizing)

Hozzáférést kell adni a fiókhoz a bovítménynek, ez biztosít arról, hogy semmi rosszaság nem történik a háttérben. Első használatkor a bővítmény helyén egy "Hozzáférés megadása" gomb jelenik meg, erre kattintva kell megadni az engedélyt felhasználóhoz kötve.

Azért leírom melyik engedély mire kell:
- _Futtatás Gmail-bővítményként_: Minden Gmail bövítménynél kötelező hozzáférést kérni, elérhetővé teszi az email címed lekérését is a bővítmény számára
- _Email-üzenetek megtekintése_: A megnyitott üzenet azonosítójának lekérésére kell, hogy lehessen válaszlevelet létrehozni.
- _Piszkozatok kezelése és e-mailek küldése_: Piszkozatok létrehozására kell
- _Az alkalmazáshoz társított adatok megtekintése és kezelése_: Ez engedéllyel lehet csak eltárolni a kitöltéseket, csak az alkalmazás érheti el, senki más.
