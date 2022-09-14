const listIdeaElement = document.getElementById('list-idea') as HTMLUListElement;
const inputIdeaElement = document.getElementById('input-idea') as HTMLInputElement;
const btnAddIdeaElement = document.getElementById('btn-add-idea') as HTMLButtonElement;
 
type Idee = {
    Id : string;
    Idee: string;
    Like: number;
}

//STOCKAGE

let stock: Idee[] = []
console.log(stock);

console.info(inputIdeaElement);

console.log(inputIdeaElement);

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Date.now() // Math.floor(Math.random() * (max - min)) + min;
}

//supprimer une ligne du tableau
function supprimer(id : string) {
    const index = stock.findIndex((item)=> item.Id === id)
    console.log(index);

    stock.splice(index, 1)

    Afficher()
    
}

//AFFICHER LE TABLEAU DES IDEES
function Afficher(){

    //Vider tableau quand nouvelle idée arrive
    while (listIdeaElement.firstChild) { 
        listIdeaElement.removeChild(listIdeaElement.firstChild); 
    }

    // Afficher la liste des idées
    stock.forEach((item, index, array)=> {
        console.log(item, index);

        var el = document.createElement('li');
        el.setAttribute("id",item.Id);
        console.log(el);

        // ✅ Add text content to element
        el.textContent = item.Idee;

        listIdeaElement.appendChild(el);

        // Supprimer une idée
        var button = document.createElement('button');
        console.log(button);
        button.addEventListener('click', ()=> supprimer(item.Id.toString()))
        el.appendChild(button)

        button.style.backgroundColor= "tomato";

        // faire un bouton like, cliquer dessus = ajouter un like (point)

        // afficher ds tableau nombre like


    });
}

//Affichage des data lors du chargement de la page
 Afficher()

//ajout de l'action du boutton
btnAddIdeaElement?.addEventListener('click', recupid)

//ici et la fonction que récupére le boutton
function recupid(event: any) {

    //l'idée à récupéré dans la zone de text
    var value = inputIdeaElement.value.trim()
    console.log(value);

    //condition suppression des indésirable et longueur suppérieur à 1
    if (value) {
        console.log("ok ligne 25");

        //condition pour qu'il y est une lettre minimum
        console.log(value.trim());
        console.log("ok ligne 30");

        //l'action qui ajoute l'idée au stockage
        stock.push(
            {
             Id : getRandomInt(1, 999).toString(),
             Idee: value,
             Like: 0
            })
        //persistance (sauvegarde donnée) ds local storage
        localStorage.setItem('idee', JSON.stringify(stock));
        
    }

    //supprimer ce qui est écrit dans le input
    inputIdeaElement.value = ""

    //appel function afficher
    Afficher();

}

//liker un avis
function like() {

    
    
}
