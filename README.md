# BarScuola

                                             INTRODUZIONE

Bar Scuola è un'applicazione web che permette di gestire i dati relativi ai clienti e alle ordinazioni.      
L’host può creare, modificare ed eliminare gli utenti registrati al sistema; visualizzare le informazioni relative 
agli articoli ed inoltre controllare in maniera semplice la rimozione o l'aggiunta di essi, in quanto nel file js 
sono presenti due sole variabili che gestiscono il "database dei prodotti, nel file html basterà semplicemente 
modificare la select con le opzioni dedicate.                                                                      
Inoltre è implementata una gestione delle e-mail attraverso la quale è consentito l'ordine solo agli studenti, con 
in aggiunta la presenza della scelta della sede in cui si trova lo studente.
E' inoltre presente un controllo per selezionare più opzioni in una singola select.
Nella strutturazione delle due pagine è inoltre stato utilizzato il passaggio di parametri tramite url, ciò non è 
totalmente conforme alle linee guida della privacy, ma è la soluzione più pratica che ho trovato.
Uno dei bug che si sono presentati all'interno della pagina era quello causato alla chiusura dei modali, risolto 
tramite l'aggiunta di una riga di codice dichiarante una variabile nella rispettiva funzione javascript.
Inoltre è presente l'invio di un'email in maniera manuale tramite l'utilizzo del metodo mailto all' interno del file 
js, in essa sono presenti anche la classe e l'istituto di consegna oltre ai dati dell'ordine.

                                    SPIEGAZIONE CODICE HTML + JS

Nella cartella sono presenti due pagine Html, la prima pagina si occupa dell'inserimento dei dati fondamentali per 
l'ordine, mentre la seconda si occupa dell'ordine vero e proprio.

                                        -->PRIMA PAGINA<--

Nella prima pagina è presente l'inserimento dei dati personali da parte dell'utente ovvero: e-mail, classe 
ed istituto, effettuando i relativi controlli tramite il javascript. In seguito al corretto invio del form 
si potrà passare alla pagina successiva dopo 1000ms, inoltre i dati relativi a classe sezione ed istituto 
sono passati tramite parametro all'interno dell'url del sito con la seguente linea di javascript:
# window.location.href = "formOrdine.html" + "?classe=" + encodeURIComponent(classe) + "&sezione=" + encodeURIComponent(sezione) + "&istituto=" + encodeURIComponent(istituto);
