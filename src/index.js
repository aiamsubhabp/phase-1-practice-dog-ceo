console.log('%c HI', 'color: firebrick')



//CHALLENGE 1
function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json ())
    .then(json => renderImages(json))
}

function renderImages(images) {
    const imageContainer = document.getElementById('dog-image-container')
    //console.log(imageContainer)
    //used the code below to see what images was
    //console.log(images.message)
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        imageContainer.appendChild(img)
    }) 

} 

function fetchDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderDogBreeds(json))
}

//CHALLENGE 2
function renderDogBreeds(dogBreeds) {
    const dogBreedsContainer = document.getElementById('dog-breeds')
    //console.log(dogBreedsContainer)
    //console.log(dogBreeds)
    //console.log(dogBreeds.message)
    //console.log(typeof(dogBreeds.message))
    const allDogBreeds = Object.keys(dogBreeds.message)
    //console.log(allDogBreeds)
    //console.log(typeof(allDogBreeds))

    allDogBreeds.forEach(dogBreed => {
        const li = document.createElement('li')
        li.innerText = dogBreed
        dogBreedsContainer.append(li)
    })
    
}
//CHALLENGE 3

function changeFontColor() {
    const dogBreedsContainer = document.getElementById('dog-breeds')
    dogBreedsContainer.addEventListener('click', (e) => {
        e.target.style.color = 'green'
    })
}


//CHALLENGE 4

function dropdownFilter() {
    const breedDropdown = document.getElementById('breed-dropdown')
    let allBreeds = []
    breedDropdown.addEventListener('change', (e) => {
        const letter = e.target.value
        const filteredBreeds = allBreeds.filter((breed) => breed.startsWith(letter))
        breedDropdown.innerHTML = renderDogBreeds(filteredBreeds)

    })
}

addEventListener('DOMContentLoaded', fetchImages)
addEventListener('DOMContentLoaded', fetchDogBreeds)
addEventListener('DOMContentLoaded', changeFontColor)
addEventListener('DOMContentLoaded', dropdownFilter)
/* https://www.youtube.com/watch?v=NcUGT_-uoqE look tomorrow **/