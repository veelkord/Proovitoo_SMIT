# testcafe-cucumber suitsutestid IMDB.com jaoks

Testcafe ja Cucumberjs raamistikuga loodud kasutajaliidese testid harjutamiseks.\
Otsi siitsamalt lehelt veel näiteid ja proovi neid käima panna kasutades otsingusõna "testcafe examples"\
Otsi Testcafe dokumentatsiooni ja uuri kuidas see toimib\
Kui hätta jääd, kindlasti küsi 

### Kuidas jooksutada - käsurealt käivita järgmised käsud

1. Typescripti laadimiseks  `npm i -g typescript`
1. Klooni repo
2. Lae alla sõltuvused `npm i`
3. Käivita Chromes testimiseks: `npm run prio1` või `npm run prio2` 
4. Käivita IE's testimiseks: `npm run test:ie`

### Ülesanded

Manuaaltestid:
Mis on kõige tähtsamad funktsioonid sellel lehel? Millised on riskid? Loo nendest lähtudes manuaalsed testlood \
Prioritiseeri testlood (kõrge, keskmine, madal)

Automaattestid:
Nüüd kui sa oled näinud kuidas testid jooksevad, kohanda neid IMDB teste meie karjäärilehe jaoks https://www.smit.ee/et/karjaar \
Seejärel automatiseeri testlood muutes olemasolevates testides väärtusi: testsammud on /steps kaustas ja leheobjektid ehk HTML elemendid on /pages kaustas ja testlood ise saad kirjutada features/ kaustas olevasse faili \
Eriti tubli oled kui oskad öelda mille jaoks on package.json ja readme.md failid \
