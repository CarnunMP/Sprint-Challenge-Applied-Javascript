// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement("div");
    header.setAttribute("class", "header");

    const date = document.createElement("span");
    date.setAttribute("class", "date");
    date.textContent = "SMARCH 28, 2019";

    const title = document.createElement("h1");
    title.textContent = "Lambda Times";

    const temp = document.createElement("span");
    temp.setAttribute("class", "temp");
    temp.textContent = "98°";

    let children = [date, title, temp];
    children.forEach(element => {
        header.appendChild(element);
    });

    return header;

    // const [header, date, title, temp] = ["div", "span", "h1", "span"].map(str => document.createElement(str));
    // [header, "header", date, "date", temp, "temp"].forEach((e, index) => {
    //     if (index % 2 === 0) {
    //         e.setAttribute("class" , index + 1)
    //     } 
    // });
    // console.log(date);
}

let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
