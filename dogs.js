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
// Take first 3 images for the slideshow (you can increase if you want)
    images = data.message.slice(0, 3);
    currentIndex = 0;

    showImage(); // Start the slideshow
  }
}


function showImage() {
  if (images.length > 0) {
    document.getElementById("photo1").innerHTML = `<img src="${images[currentIndex]}" height="400">`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    setTimeout(showImage, 3000); // Change image every 3 seconds
  }
}

// Automatically populate breed dropdown when page loads
createBreedList();
