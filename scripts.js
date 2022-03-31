const API_URL = 'https://rickandmortyapi.com/api/character'

const form = document.getElementById('form');
const search = document.getElementById ('search');
const main = document.getElementById ('main');


const getCharacters = (url) => {

    const petition = fetch (url)
    petition.then (res => res.json())
            .then(data => showCharacters(data.results))
           
}
getCharacters(API_URL)

function  showCharacters (characters){
    main.innerHTML = ''
    characters.forEach((character => {
        
        let {id, name, status, species, type, gender,image } = character

        let characterNW = document.createElement ('div')
        characterNW.classList.add('character')

        characterNW.innerHTML +=`
        <img src = "${image}" alt = "">
        <div  class = "character">
        <p><h3>${name}</h3></p>
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