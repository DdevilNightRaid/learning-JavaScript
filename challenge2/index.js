function generateCat(){
    let image = document.createElement("img");
    let catContainer = document.getElementById('catImages');
    image.src = "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg";
    catContainer.appendChild(image);
}