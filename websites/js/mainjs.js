
const counterstrikeWishlistButton = document.getElementById("button_counterstrike_wishlist");
const deadbydaylightWishlistButton = document.getElementById("button_deadbydaylight_wishlist");
const undertaleWishlistButton = document.getElementById("button_undertale_wishlist");
const minecraftWishlistButton = document.getElementById("button_minecraft_wishlist");
const iguinhoWishlistButton = document.getElementById("button_iguinho_wishlist");
const wishListCs = document.querySelector(".add-cs-towishlist");
const wishListDbd = document.querySelector(".add-dbd-towishlist");
const wishListUnder = document.querySelector(".add-under-towishlist");
const wishListMine = document.querySelector(".add-mine-towishlist");
const wishListIgui = document.querySelector(".add-igui-towishlist");

const wishlistGames = [];
let wishlistLength = 0;
let firstWishedGame = wishlistGames[0];

let favoritecs = false;
let favoritedbd = false;
let favoriteunder = false;
let favoritemine = false;
let favoriteigui = false;
// SlideShow:

let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// end SlideShow

// wishlist buttons:

function addCstoWishlist() {
  wishListCs.classList.toggle("fullhearth");
  if (!favoritecs) {
    favoritecs = true;
    wishlistGames.push("Counter Strike 2");
    wishlistLength = wishlistGames.length;
  } else {
    favoritecs = false;
    wishlistLength = wishlistGames.length;
    for (let position = 0; position < wishlistLength; position++) {
      if (wishlistGames[position] == 'Counter Strike 2') {
        wishlistGames.splice(position, 1);
      }
    }
  }
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_items.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (wishlistGames[positionlist] == undefined) {

      } else {
        wishlist_items.innerHTML += `<br>${wishlistGames[positionlist]}`;
      }
    }
  } else {
    wishlist_items.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}

function addDbdtoWishlist() {
  wishListDbd.classList.toggle("fullhearth");
  if (!favoritedbd) {
    favoritedbd = true;
    wishlistGames.push("Dead by Daylight");
    wishlistLength = wishlistGames.length;
  } else {
    wishlistLength = wishlistGames.length;
    favoritedbd = false;
    for (let position = 0; position < wishlistLength; position++) {
      if (wishlistGames[position] == 'Dead by Daylight') {
        wishlistGames.splice(position, 1);
      }
    }
  }
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_items.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (wishlistGames[positionlist] == undefined) {

      } else {
        wishlist_items.innerHTML += `<br>${wishlistGames[positionlist]}`;
      }
    }
  } else {
    wishlist_items.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}

function addUndertoWishlist() {
  wishListUnder.classList.toggle("fullhearth");
  if (!favoriteunder) {
    favoriteunder = true;
    wishlistGames.push("Undertale");
    wishlistLength = wishlistGames.length;
  } else {
    favoriteunder = false;
    wishlistLength = wishlistGames.length;
    for (let position = 0; position < wishlistLength; position++) {
      if (wishlistGames[position] == 'Undertale') {
        wishlistGames.splice(position, 1);
      }
    }
  }
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_items.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (wishlistGames[positionlist] == undefined) {

      } else {
        wishlist_items.innerHTML += `<br>${wishlistGames[positionlist]}`;
      }
    }
  } else {
    wishlist_items.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}

function addMinetoWishlist() {
  wishListMine.classList.toggle("fullhearth");
  if (!favoritemine) {
    favoritemine = true;
    wishlistGames.push("Minecraft");
    wishlistLength = wishlistGames.length;
  } else {
    favoritemine = false;
    wishlistLength = wishlistGames.length;
    for (let position = 0; position < wishlistLength; position++) {
      if (wishlistGames[position] == 'Minecraft') {
        wishlistGames.splice(position, 1);
      }
    }
  }
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_items.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (wishlistGames[positionlist] == undefined) {

      } else {
        wishlist_items.innerHTML += `<br>${wishlistGames[positionlist]}`;
      }
    }
  } else {
    wishlist_items.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}

function addIguitoWishlist() {
  wishListIgui.classList.toggle("fullhearth");
  if (!favoriteigui) {
    favoriteigui = true;
    wishlistGames.push("Iguinho");
    wishlistLength = wishlistGames.length;
  } else {
    favoriteigui = false;
    wishlistLength = wishlistGames.length;
    for (let position = 0; position < wishlistLength; position++) {
      if (wishlistGames[position] == 'Iguinho') {
        wishlistGames.splice(position, 1);
      }
    }
  }
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_items.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (wishlistGames[positionlist] == undefined) {

      } else {
        wishlist_items.innerHTML += `<br>${wishlistGames[positionlist]}`;
      }
    }
  } else {
    wishlist_items.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}

counterstrikeWishlistButton.addEventListener("click", addCstoWishlist);
deadbydaylightWishlistButton.addEventListener("click", addDbdtoWishlist);
undertaleWishlistButton.addEventListener("click", addUndertoWishlist);
minecraftWishlistButton.addEventListener("click", addMinetoWishlist);
iguinhoWishlistButton.addEventListener("click", addIguitoWishlist);

// end buttons