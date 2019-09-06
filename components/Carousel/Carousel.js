/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

function Carosel(images) {
  const [carosel, leftButton, rightButton] = ["carosel", "left-button", "right-button"].map(str => {
    const element = document.createElement("div");
    element.setAttribute("div", str);
    return element;
  });

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";

  const imageElements = [];
  images.forEach(image => {
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    imageElements.push(imageElement);
  });

  let caroselChildren = [leftButton].concat(imageElements);
  caroselChildren.push(rightButton);
  console.log(caroselChildren);

  caroselChildren.forEach(child => {
    carosel.appendChild(child);
  })

  return carosel;
}

// console.log(Carosel(["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/turntable.jpeg"]));

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