const addButton = document.querySelector(".addBTN");
const form = document.querySelector(".add-form");
const addGameBTN = document.querySelector(".add-game-btn");
const gameDetails = document.querySelector(".game-details");
const priceTotal = document.querySelector(".priceTotal");
const formBackground = document.querySelector(".form-background");
const northPrice = document.querySelector(".north-price");
const gamesAdded = document.querySelector(".gamesAdded");
const items = document.querySelector(".items");
const maximum = document.querySelector(".maximum");

const titleInput = document.querySelector("#title");
const genreInput = document.querySelector("#genre");
const devInput = document.querySelector("#developer");
const priceInput = document.querySelector("#price");
const storeInput = document.querySelector("#store");
const releaseInput = document.querySelector("#release");

const title = document.querySelector(".title1");

addButton.addEventListener("click", function () {
  form.style.display = "block";
  formBackground.style.display = "block";
});

let games = [];

function addGame(title, genre, dev, price, link, date) {
  games.push({
    title: title,
    genre: genre,
    dev: dev,
    price: price,
    link: link,
    date: date,
  });
  return { title, genre, dev, price, link, date };
}

let sum = 0;

function createGame({ title, genre, dev, price, link, date }) {
  const gameDiv = document.createElement("div");
  const gameDivChild = document.createElement("div");
  const gameTitle = document.createElement("h2");
  const gameGenre = document.createElement("h3");
  const gameDev = document.createElement("p");
  const gamePrice = document.createElement("p");
  const gameLink = document.createElement("a");
  const gameDate = document.createElement("p");
  const gameDel = document.createElement("a");
  const steamImg = document.createElement("img");

  gameTitle.innerText = "Title: " + title;
  gameGenre.innerText = "Genre: " + genre;
  gameDev.innerText = "Developer: " + dev;
  gamePrice.innerText = "Price: P" + price;
  gameLink.innerText = "Store Link";
  gameDate.innerText = "Release Date: " + date;
  gameDel.textContent = "DELETE";
  gameDel.id = "deleteNow";
  gameDiv.className = "addedGame";
  gamePrice.id = price;
  steamImg.src = "img/steam.jpg";
  gameDivChild.className = "gameDivChild";
  gameLink.href = link;
  gameLink.className = "gameLink";

  gamePrice.style.color = "rgb(146, 50, 50)";
  gamePrice.style.fontWeight = "bold";

  if (games.length == 1) {
    let gPrice = Number(priceInput.value) + Number(northPrice.id);

    sum = Number(sum) + gPrice;

    priceTotal.innerHTML = sum;
  } else {
    let gPrice = Number(priceInput.value);

    sum = Number(sum) + gPrice;

    priceTotal.innerHTML = sum;
  }

  gameDivChild.append(
    gameTitle,
    gameGenre,
    gameDev,
    gamePrice,
    gameLink,
    gameDate,
    gameDel
  );

  gameDetails.appendChild(gameDiv);
  gameDiv.appendChild(steamImg);
  gameDiv.appendChild(gameDivChild);

  gameDel.addEventListener("click", function () {
    gameDiv.remove();
    sum = sum - Number(gamePrice.id);
    priceTotal.innerHTML = sum;

    games.length = games.length - 1;
    items.innerHTML = games.length;
    gamesAdded.innerHTML = games.length;
  });
}

games.forEach(createGame);

addGameBTN.addEventListener("click", function () {
  if (games.length < 4) {
    const newGame = addGame(
      titleInput.value,
      genreInput.value,
      devInput.value,
      priceInput.value,
      storeInput.value,
      releaseInput.value
    );

    createGame(newGame);
    form.style.display = "none";
    formBackground.style.display = "none";

    gamesAdded.innerHTML = games.length + 1;
    items.innerHTML = games.length + 1;
  } else {
    form.style.display = "none";
    formBackground.style.display = "none";
    maximum.style.display = "block";
    console.log("limit");
  }

  titleInput.value = "";
  genreInput.value = "";
  devInput.value = "";
  priceInput.value = "";
  storeInput.value = "";
  releaseInput.value = "";
});

formBackground.addEventListener("click", function () {
  form.style.display = "none";
  formBackground.style.display = "none";
});

maximum.addEventListener("click", function () {
  maximum.style.display = "none";
});
