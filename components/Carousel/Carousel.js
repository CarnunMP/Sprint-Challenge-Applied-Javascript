/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// function Carousel(images) {
//   const [carousel, leftButton, rightButton] = ["carousel", "left-button", "right-button"].map(str => {
//     const element = document.createElement("div");
//     element.setAttribute("div", str);
//     return element;
//   });

//   leftButton.textContent = " < ";
//   rightButton.textContent = " > ";

//   const imageElements = [];
//   images.forEach(image => {
//     let imageElement = document.createElement("img");
//     imageElement.setAttribute("src", image);
//     imageElements.push(imageElement);
//   });

//   let carouselChildren = [leftButton].concat(imageElements);
//   carouselChildren.push(rightButton);

//   carouselChildren.forEach(child => {
//     carousel.appendChild(child);
//   })

//   return carousel;
// }

// // console.log(Carousel(["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/turntable.jpeg"]));
// const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
// const carouselContainer = document.querySelector(".carousel-container");
// const carouselElement = Carousel(images);
// carouselContainer.appendChild(carouselElement);

// const carouselImages = carouselContainer.querySelectorAll("img");
// let currentIndex = 0;
// carouselImages.forEach((image, index) => {
//   displayCurrentImage(image, index);
//   image.style.width = "100vw";
// });
// function displayCurrentImage(image, index) {
//   index != currentIndex ?
//     image.style.display = "none" :
//     image.style.display = "inherit";
// }

// carouselElement.style.background = "pink";

// const buttons = carouselElement.querySelectorAll("div");
// console.log(buttons);
// buttons[0].addEventListener("click", decreaseCurrentIndex);
// buttons[1].addEventListener("click", increaseCurrentIndex);

// function decreaseCurrentIndex() {
//   currentIndex - 1 < 0 ?
//     currentIndex = carouselImages.length - 1 :
//     currentIndex --;

//   displayCurrentImage(carouselImages[currentIndex, currentIndex]);
// }
// function increaseCurrentIndex() {
//   currentIndex + 1 >= carouselImages.length ?
//     currentIndex = 0 :
//     currentIndex++;

//   displayCurrentImage(carouselImages[currentIndex, currentIndex]);
// }