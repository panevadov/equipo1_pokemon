const url = 'https://pokeapi.co/api/v2/pokemon/150';
const pokemonData = []
const section = document.querySelector('section');


async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    pokemonData.push({
        name: data.name,
        hp: data.stats[0].base_stat,
        img: data.sprites.other['official-artwork'].front_default,
    });

    const card = document.createElement('div');
    card.classList.add('main-container');
    card.innerHTML = ` <div class="up-container inline">
                            <p>${pokemonData.name}</p>
                            <a href="">${pokemonData.hp}</a>
                        </div>
                        <div>
                            <img  src="${pokemonData.img}" alt="charmander">
                        </div>
                        <div  class="down-container inline">
                            <p>Power level</p>
                            <input type="button" value="Buy">
                        </div>`;

    section.appendChild(card);
    }
    

fetchData(url);
