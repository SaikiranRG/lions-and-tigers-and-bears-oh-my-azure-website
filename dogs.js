/*
  Author: Saikiran Reddy Gokula
  Project: Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await
  Credits: Based on Brad Schiff's tutorial and public APIs. Final modifications made by me.
*/

// Create a dropdown list of dog breeds
async function createBreedList() {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const breedList = await response.json();

  document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
      <option>Choose a dog breed...</option>
      ${Object.keys(breedList.message)
        .map(breed => `<option>${breed}</option>`)
        .join("")}
    </select>`;
}

// Load and display two dog images based on selected breed
async function loadByBreed(breed) {
  if (breed !== 'Choose a dog breed...') {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();

    document.getElementById("photo1").innerHTML = `<img src="${data.message[0]}" height="400">`;
    document.getElementById("photo2").innerHTML = `<img src="${data.message[1]}" height="400">`;
  }
}

// Automatically populate breed dropdown when page loads
createBreedList();
