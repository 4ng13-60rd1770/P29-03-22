const API_URL = 'https://rickandmortyapi.com/api/character'

const form = document.getElementById('form');
const search = document.getElementById ('search');
const main = document.getElementById ('main');



document.addEventListener('DOMContentLoaded', () => {
        getCharacters(API_URL)
})

const getCharacters = (url) => {

    const petition = fetch (url)
    petition.then (res => res.json())
            .then(data => showCharacters(data.results))
           .catch(err => console.log(err))
}

// getCharacters(API_URL)
function  showCharacters (characters){
    main.innerHTML = ''
    characters.forEach((character => {
        
        let {id, name, status, species, type, gender,image } = character

        let characterNW = document.createElement ('div')
        characterNW.classList.add('character')

        characterNW.innerHTML =`
        <img src="${image}" alt = "">
        <div  class = "info">
        <h3>${name}</h3>
      <ul>
      <li>${status}</li>
      <li>${species}</li>
      <li>${type}</li>
      <li>${gender}</li>
      </ul>
       </div> 
              
   `

        main.appendChild(characterNW)
    }));
}

//Función de búsqueda

form.addEventListener('submit', e =>{
    e.preventDefault()
   let SEARCH_URL = 'https://rickandmortyapi.com/api/character/?name='
    const buscar = search.value
    console.log(buscar)
    if(buscar !== ''){
        getCharacters(SEARCH_URL+buscar)
        search.value = ''
    }
    else{
        window.location.reload()
    }
})

