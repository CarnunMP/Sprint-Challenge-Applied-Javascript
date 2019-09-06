// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article) {
    const [card, headline, author, imgContainer, image, authorName] = ["div", "div", "div", "div", "img", "span"]
        .map(str => document.createElement(str));

    const classes = ["card", "headline", "author", "img-container"];
    [card, headline, author, imgContainer].map((element, i) => {
        element.setAttribute("class", classes[i]);
    });

    const textContents = [article.headline, article.authorName];
    [headline, authorName].map((element, i) => {
        element.textContent = textContents[i];
    });

    image.setAttribute("src", article.authorPhoto);

    imgContainer.appendChild(image);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    card.appendChild(headline);
    card.appendChild(author);

    return card;
}

// console.log(Card({"authorName" : "X", "authorPhoto": "./assets/bones.jpg", "headline": "Z"}));

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articles = response.data.articles;
        let articlesArray = [];
        for (let articleGroup in articles) {
            articlesArray = articlesArray.concat(articles[articleGroup]);
        }

        const cardsContainer = document.querySelector(".cards-container");
        articlesArray.map(article => {
            cardsContainer.appendChild(Card(article));    
        })
    })
    .catch(error => {
        debugger
    });