## Domácí úkol 1

Deadline: 29.11.2023 23:59

Počet bodů: nebodované

Cílem toho úkolu je ověřit že máš připravené prostředí a vytvořit projekt, který budeme používat napříč celým kurzem. Do Google Classroom odevzdejte odkaz na svůj repozitář (ve tvaru https://github.com/rostislavjadavan).

-   Oveř si že máš nainstalovaný Node JS, ideálně verze 18+ (node -v) a NPM

-   Vytvoř si novou složku a inicializuj NPM projekt, který bude sloužit pro náš backend (npm init)

-   Nainstaluj baliček s express.js frameworkem (npm install express)

-   Vytvoř index.js soubor s následujícím obsahem:

const express = require('express') 

const app = express() 

app.get('/', function (req, res) { 

res.send('Hello World') 

}) 

app.listen(3000)

-   Spusť projekt (node index.js)

-   A vyzkoušej, že funguje tak, že v browseru jdi na <http://localhost:3000/> (měl bys vidět Hello World) 

-   Pokud ti vše funguje, tak projekt commitni do repozitáře u tvého oblíbeného git poskytovatele (github, gitlab atd.) a pošli mi ho skrz google classroom

-   Pokud ti něco nefunguje, tak mi to stejně pošli a mrknem na to spolu 🙂

## Notes
- nainstalovat si nvm (Node Version Manager), můžeme přepínat mezi jednotlivými verzemi node 18 --> 20.8
- install dotenv  and modify the index.js
- create .env a .git files
- add npm run dev to package.json Scripts. 
.env
PORT=3000

### Dependecies
``npm i express``
- will install Express save it in the dependencies list in "package.json"
``npm i dotenv``
- Install dot environment to your app to use env.process.host
``curl localhost:3000``
- reach the server and return the request.

