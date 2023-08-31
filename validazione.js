function Invio() 
{
    var email = document.modulo.email.value;
    var contoChiocciola = 0;
    var contoPunti = 0;
    var errori = 0;
    var classe = document.getElementById("inputClasse").value;
    var sezione = document.getElementById("inputSezione").value;
    var errorescrt = document.getElementById("popuperrore");
    var dominioEmail = email.split("@")[1];
    //controllo mail
    if(email == "" || email == "undefinied")
    {
        errorescrt.innerHTML="Inserisci un indirizzo e-mail";
        errori++;
    }
    else if(email != "")
    {
        for (let i = 0; i < email.length; i++) 
        {
            if(email.charAt(i) == '@')
                contoChiocciola++;
            if (email.charAt(i) == '.') 
                contoPunti++;
        } 
        if(contoChiocciola != 1 || (contoPunti !=4 && contoPunti!=3))
        {
            errori++;
            errorescrt.innerHTML = "L'EMAIL INSERITA NON E' VALIDA, RIPROVA"
        }
    }
    
    //controllo dominio e-mail
    if(dominioEmail !="studenti.ittsrimini.edu.it")
    {   
        errori++;
        errorescrt.innerHTML = "IL DOMINIO DELL' EMAIL INSERITA NON E' VALIDO, RIPOVA"
    }

    //Controllo della classe e sezione
    if (classe < 1 || classe > 5 || classe === "" || sezione === "" || classe === "undefined" || sezione === "undefined")
    {   
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la classe o la sezione";
    }

    // Converti le sezioni in maiuscolo per un confronto uniforme
    var sezioneMaiuscola = sezione.toUpperCase();

    if ((sezioneMaiuscola > "O" || sezioneMaiuscola > "o"||/^\d+$/.test(sezioneMaiuscola)) && classe == 1) 
    {   
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la sezione";
    }
    if (sezioneMaiuscola > "N" && classe == 2||/^\d+$/.test(sezioneMaiuscola))
    {   
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la sezione";
    }
    if (sezioneMaiuscola > "L" && classe == 3||/^\d+$/.test(sezioneMaiuscola))
    {   
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la sezione";
    }
    if (sezioneMaiuscola > "L" && classe == 4||/^\d+$/.test(sezioneMaiuscola))
    {   
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la sezione";
    }
    if (sezioneMaiuscola > "J" && classe == 5||/^\d+$/.test(sezioneMaiuscola))
    { 
        errori++;
        errorescrt.innerHTML = "Valore non corretto per la sezione";
    }

    if (errori == 0)
    {
        setTimeout(() => {
            window.location.href = "formOrdine.html" + "?classe=" + encodeURIComponent(classe) + "&sezione=" + encodeURIComponent(sezione);
        }, 1000);
    }
    else
    {
        // Open the modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
}

function PrezzoPagare()
{
    var scritta = document.getElementById('prezzo');
    // Recupera i valori dei parametri dalla query string dell'URL
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);   
    // Ottieni i valori dei parametri "classe" e "sezione"
    var classe = urlParams.get('classe');
    const dictionaryC = 
    {
        'Cotoletta': 2.00,
        'HotDog': 1.70,
        'Focaccia': 1.00,
        'FocacciaSalame': 1.70,
        'FocacciaMortadella': 1.70,
        'FocacciaCotto': 1.70,
        'FocacciaCrudo': 2.00,
        'FocacciaCottoFormaggio': 2.00,
        'FocacciaSalameFormaggio': 2.00,
        'PaninoSalame': 1.40,
        'PaninoCotto': 1.40,
        'PaninoMortadella': 1.40,
        'PaninoCrudo': 1.60,
        'ToastCottoFontina': 2.00,
        'Toast': 1.10,
        'CiabattaCrudoMozzarella': 2.00,
        'Pizza': 1.30,
        'RotoloWurstel': 2.00,
        'RotoloSalsiccia': 2.00,
    };
    const dictionaryB = 
    {
        "Soda" : 1.10,
        "CocaCola" : 1.10,
        "Aranciata" : 1.10,
        "TeLimone" : 1.10,
        "TePesca" : 1.10,
        "Chinotto" : 1.10,
        "CocaColaBottiglia" : 1.80,
        "AcquaNaturale" : 0.45,
        "AcquaFrizzante" : 0.45
    };
    const selectElementC = document.getElementById('cibo');
    const selectedOptionsC = Array.from(selectElementC.selectedOptions);
    const selectElementB = document.getElementById('bere');
    const selectedOptionsB = Array.from(selectElementB.selectedOptions);
    var spesaTotale = 0.0;
    selectedOptionsC.forEach(option => {
        console.log(option.value);
        spesaTotale += dictionaryC[option.value];
    }); 
    selectedOptionsB.forEach(option => {
        console.log(option.value);
        spesaTotale += dictionaryB[option.value];
    });
    spesaTotale = spesaTotale.toFixed(2);
    return spesaTotale;
}
function InvioOrdine(spesaTotale)
{
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    var testo = document.getElementById("testo");
    var selectElementC = document.getElementById("cibo");
    var selectElementB = document.getElementById("bere");
    var selectedOptionsC = selectElementC.selectedOptions;
    var selectedOptionsB = selectElementB.selectedOptions;
    var puls = document.getElementById("button-finale-submit2");
    var modalContent = document.getElementById("modal-body");
    modalContent.innerHTML = "";
    if(spesaTotale!= 0.00)
    {
        document.getElementById("modal-content").style.marginLeft = "-8em";
        document.getElementById("modal-content").style.height = "10em";
        document.getElementById("modal-content").style.width = "150%";
        document.getElementById("modal-body").style.display = "flex";
        document.getElementById("modal-footer").style.display = "flex";
        document.getElementById("prezzo").style.display = "flex";
        puls.style.display = "flex";
        testo.innerHTML = "Il tuo ordine è quasi pronto, seleziona la quantità dei prodotti selezionati";
        for (var i = 0; i < selectedOptionsC.length; i++) 
        {
            var labelElement = document.createElement("label");
            var imgElement = document.createElement("img");
            var inputElement = document.createElement("input");
            inputElement.type = "number";
            inputElement.id = "input" + i;
            inputElement.onchange = CalcolaSpesaTotale;
            labelElement.className="labelOrdine";
            imgElement.style.width = "75px";
            imgElement.style.height = "75px";
            imgElement.style.borderRadius = "50px";
            imgElement.src = "img/" + selectedOptionsC[i].value + ".jpg";            
            inputElement.addEventListener("input", function() 
            {
                if (this.value.length > 1) 
                    this.value = this.value.slice(0, 1); // Limita la lunghezza a 2 cifre
            });
            modalContent.appendChild(labelElement);
            labelElement.appendChild(imgElement);
            modalContent.appendChild(inputElement);
            modalContent.appendChild(document.createElement("br"));
        }
        for (var i = 0; i < selectedOptionsB.length; i++) 
        {
            
            var labelElement = document.createElement("label");
            var imgElement = document.createElement("img");
            var inputElement = document.createElement("input");
            inputElement.type = "number";
            inputElement.id = "input" + i+10;
            inputElement.onchange = CalcolaSpesaTotale;
            labelElement.className = "labelOrdine";
            imgElement.style.width = "75px";
            imgElement.style.height = "75px";
            imgElement.style.borderRadius = "50px";
            imgElement.src = "img/" + selectedOptionsB[i].value+ ".jpg";
            inputElement.addEventListener("input", function() 
            {
                if (this.value.length > 1) 
                    this.value = this.value.slice(0, 1); // Limita la lunghezza a 2 cifre
            });
            modalContent.appendChild(labelElement);
            labelElement.appendChild(imgElement);
            modalContent.appendChild(inputElement);
            modalContent.appendChild(document.createElement("br"));
        }
        myModal.show();
    }
    else
    {
        document.getElementById("modal-content").style.marginLeft = 0;
        document.getElementById("modal-content").style.height = "auto";
        document.getElementById("modal-content").style.width = "100%";
        document.getElementById("modal-body").style.display = "none";
        document.getElementById("modal-footer").style.display = "none";
        testo.innerHTML = "Non hai selezionato nessun cibo o bevanda";
        puls.style.display = "none";
        document.getElementById("prezzo").style.display = "none";
        myModal.show();
    }
}
function resetForm() {
    // Reimposta i valori dei campi del form
    document.getElementById("cibo").selectedIndex = 0;
    document.getElementById("bere").selectedIndex = 0;
    // Reimposta l'importo da pagare
    document.getElementById("prezzo").textContent = "IMPORTO DA PAGARE:";
    var selectElements = document.querySelectorAll(".selectpicker");
    selectElements.forEach(function(selectElement) 
    {
        selectElement.previousElementSibling.querySelector(".filter-option-inner-inner").textContent = "Nessuna selezione";
    });
}
function CalcolaSpesaTotale() {
    const dictionaryC = 
    {
        'Cotoletta': 2.00,
        'HotDog': 1.70,
        'Focaccia': 1.00,
        'FocacciaSalame': 1.70,
        'FocacciaMortadella': 1.70,
        'FocacciaCotto': 1.70,
        'FocacciaCrudo': 2.00,
        'FocacciaCottoFormaggio': 2.00,
        'FocacciaSalameFormaggio': 2.00,
        'PaninoSalame': 1.40,
        'PaninoCotto': 1.40,
        'PaninoMortadella': 1.40,
        'PaninoCrudo': 1.60,
        'ToastCottoFontina': 2.00,
        'Toast': 1.10,
        'CiabattaCrudoMozzarella': 2.00,
        'Pizza': 1.30,
        'RotoloWurstel': 2.00,
        'RotoloSalsiccia': 2.00,
    };
    const dictionaryB = 
    {
        "Soda" : 1.10,
        "CocaCola" : 1.10,
        "Aranciata" : 1.10,
        "TeLimone" : 1.10,
        "TePesca" : 1.10,
        "Chinotto" : 1.10,
        "CocaColaBottiglia" : 1.80,
        "AcquaNaturale" : 0.45,
        "AcquaFrizzante" : 0.45
    };
    const selectElementC = document.getElementById('cibo');
    const selectedOptionsC = Array.from(selectElementC.selectedOptions);
    const selectElementB = document.getElementById('bere');
    const selectedOptionsB = Array.from(selectElementB.selectedOptions);
    var spesaTotale = 0;
    selectedOptionsC.forEach(option => {
        const inputId = 'input' + selectedOptionsC.indexOf(option);
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            const quantita = parseInt(inputElement.value, 10) || 0;
            spesaTotale += quantita * dictionaryC[option.value];
        }
    });
    selectedOptionsB.forEach(option => {
        const inputId = 'input' + selectedOptionsB.indexOf(option)+10;
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
            const quantita = parseInt(inputElement.value, 10) || 0;
            spesaTotale += quantita * dictionaryB[option.value];
        }
    });
    document.getElementById("prezzo").innerHTML = "IMPORTO DA PAGARE: " + spesaTotale.toFixed(2) + "€    ";
    return spesaTotale.toFixed(2) + " €";
}
function ControlloQuantita() 
{
    var myModal = document.getElementById('myModal');
    var myModal2 = new bootstrap.Modal(document.getElementById('ModalErrore'));
    var numeroInput = document.querySelectorAll('input[type="number"]');
    var parametri = new URLSearchParams(window.location.search);
    for (let i = 0; i < numeroInput.length; i++) 
    {
        if(numeroInput[i].value ===""||numeroInput[i].value === 0 || numeroInput[i].value === undefined)
        {
            document.getElementById("testoFinale").innerHTML = "Inserisci delle quantita valide per tutti i prodotti";
            myModal2.show();
        }
        else
        {
            document.getElementById("testoFinale").innerHTML = "Ordine in consegna, presso la classe "+ parametri.get('classe')+ parametri.get('sezione').toUpperCase() +" spesa totale = "+ CalcolaSpesaTotale();
            myModal.style.visibility = "hidden";
            myModal2.show();        
            setTimeout(() => {
                window.location.href = "index.html";
            }, 10000);
        }
    }
}
