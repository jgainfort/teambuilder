#League of Legends Team Builder

#Dependencies
* NodeJS
* NPM
* Typescript
* TSD

#Setup
* Ensure Dependencies are installed globally
* Clone REPO
* Install module dependencies
```
$npm install
```
* Install Definately Typed dependencies
```
$tsd install
```
* Install jspm dependencies
```
$jspm install
```
* Bundle jspm libraries into application
```
$jspm bundle app/app --inject --minify
```
* Compile typescript files to javascript
```
$tsc -w
```
* Run express server. Express will use port number set on env.PORT or default is 3000. For console output register listeners through env.DEBUG. Example provided
```
$PORT=3333 DEBUG=teambuilder:* npm start
```
* Open browser and point address to http://localhost:3333 / http://locahost:3000