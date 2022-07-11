<<<<<<< HEAD
# Teverola-Times-Journal - Guida all'installazione
=======
Istruzioni dettagliate per l'installazione, la configurazione ed il lancio di test : 

Scaricare e installare NodeJs da https://nodejs.org/it/download/
(npm, il gestore di pacchetti javascript è incluso in questa installazione)
 
Tutti i file di progetto si trovano su github : https://github.com/Formola/Teverola-Times-Journal

Clonare la repo con “git clone https://github.com/Formola/Teverola-Times-Journal“
oppure scaricare il file .zip ed estrarre la cartella “Teverola-Times-Journal”

Aprire il terminale nella cartella "Teverola-Times-Journal" e digitare npm install per installare tutti i package necessari. Fatto ciò , aprire la cartella in VisualStudioCode o in qualsiasi editor di testo , e lanciare “npm start” per avviare l’applicazione su http://localhost:3000/

Dopo aver fatto ciò : 

Scaricare e installare  XAMPP da https://www.apachefriends.org/download.html

Una volta eseguita l'installazione, avviare Apache e MySQL.

Andare su http://localhost/phpmyadmin/index.php

Creare un nuovo db chiamandolo “teverola-times-journal”

Selezionare e importare prima il dump della tabella UTENTE, dopodiché importare il dump della tabella ARTICOLO ( !!eseguire gli import in questo ordine per evitare errore sulla foreign key in articolo!!)

Andare sulla propria cartella "xampp", scegliere "htdocs" e copiare al suo interno la cartella “Teverola-Times-Journal” ( non solo il contenuto , bisogna copiare proprio tutta la cartella ). 





 
Link a tutte le librerie e ai files esterni da scaricare : 
Tutti i file di progetto si trovano su github : https://github.com/Formola/Teverola-Times-Journal
( le librerie e i package usati in react dovrebbero essere importate automaticamente eseguendo “npm install” dopo aver clonato la repo o estratta la cartella del progetto dal file .zip,  ad ogni modo quelle utilizzate sono : 
https://bulma.io/documentation/overview/start/
https://www.npmjs.com/package/md5
https://www.npmjs.com/package/react-axios  -  Axios official website:  https://axios-http.com/docs/intro
https://www.npmjs.com/package/fontawesome-4.7
https://www.npmjs.com/package/react-router-dom
Xampp :   https://www.apachefriends.org/download.html
PHP Composer :  https://getcomposer.org/download/  //forse non necessario
NodeJs  :  https://nodejs.org/it/download/
VisualStudioCode : per una semplice visualizzazione di tutto il progetto , cliccare su open folder per importare la cartella di progetto \teverola-times , eventualmente anche la cartella \Teverola-Times-Journal  per una più semplificata visualizzazione degli script php.          https://code.visualstudio.com/download
Documentazione di React :  https://it.reactjs.org/








Fase di Test : 

Sul database sono già presenti diversi utenti e articoli pubblicati dai giornalisti, per eseguire dei test provare a loggarsi con : 

ADMIN:  ( può gestire gli altri utenti , non può eliminare se stesso, se elimina un giornalista elimina anche gli articoli di quel giornalista): 
email: paolo@libero.it
password : paolo

email:  emilio@tirozzi
password:  emilio

GIORNALISTA : ( può pubblicare e eventualmente modificare articoli ) :
email : lele@adani
password : lele

email : anto@cannavacciuolo
password: anto

UTENTE : ( può solo leggere articoli , cercarli o modificare il profilo )
email: homer@simpson
password: homer

Gli utenti una volta loggati non possono tornare alle pagine: 
http://localhost:3000/
http://localhost:3000/SignUp
http://localhost:3000/Login
si possono fare dei test digitando questi url e verificare il reindirizzamento sempre a http://localhost:3000/HomePage 

Gli utenti loggati , a seconda del proprio ruolo , non possono accedere a pagine relative alle funzionalità presenti per altri ruoli, ad esempio : 
ADMIN e UTENTE non possono accedere a http://localhost:3000/WriteArticle , http://localhost:3000/ModificaArticolo , solo i giornalisti possono
GIORNALISTA e UTENTE non possono accedere a http://localhost:3000/GestioneUtenti , http://localhost:3000/ModificaUtenti , solo gli ADMIN possono
Nessuno può accedere a http://localhost:3000/ModificaProfilo , http://localhost:3000/ArticlePage , senza prima aver cliccato sui button “Il Tuo Profilo” e “Read More” nell’anteprima articolo

In caso di chiusura della finestra localhost:3000/… , l’utente rimane ancora loggato , per disconnettersi  permanentemente bisogna eseguire il logout




