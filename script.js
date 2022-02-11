
const container = document.querySelector('#characters');


axios.get('https://bobsburgers-api.herokuapp.com/characters')
  .then(function (response) {
    for(character of response.data){
        renderCharacter(character);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  const renderCharacter  = (character) => {
    console.log('Rendering');
    console.log(character);

    // overall container per-character
    let characterContainer = document.createElement('div');
    characterContainer.setAttribute('id','character_'+character.id )
    characterContainer.classList.add('character');

    // menu Item for character
    let menuItem = document.createElement('a');
    if ( character.hairColor != null){
        let cssClass = character.hairColor.replaceAll(/\s/g,'');
        menuItem.classList.add(cssClass);
    }
    menuItem.innerHTML = character.name;
    menuItem.addEventListener("click", (e)=>{

        document.querySelector('.character')
            .style.width= 'auto';

        document.querySelector('#character_'+character.id)
            .style.width= '100vw';

        document.querySelectorAll('.characterDetails').forEach((el)=>{
            el.style.display ="none";
        })
        document.querySelector('#character_'+character.id+' .characterDetails')
            .style.display ="block";
    })
    characterContainer.appendChild(menuItem)

    // character details
    let characterDetails = document.createElement('div');
    characterDetails.innerHTML = `<img src="${character.image}"> `;
    characterDetails.classList.add('characterDetails');
    characterContainer.appendChild(characterDetails)

        // add everything to the page.
    container.appendChild(characterContainer);

    
    


  }