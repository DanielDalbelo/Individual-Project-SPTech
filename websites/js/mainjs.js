
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
  forWishlist();
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
  forWishlist();
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
  forWishlist();
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
  forWishlist();
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
  forWishlist();
  }

function forWishlist(){
  firstWishedGame = wishlistGames[0];
  if (wishlistLength >= 1 && firstWishedGame != undefined) {
    wishlist_games.innerHTML = ``;
    for (let positionlist = 0; positionlist < wishlistLength; positionlist++) {
      if (!(wishlistGames[positionlist] == undefined)) {
        wishlist_games.innerHTML += `${wishlistGames[positionlist]}`;
      }
      if (wishlistGames[positionlist] == 'Counter Strike 2') {
        wishlist_games.innerHTML += `
        <a href="https://store.steampowered.com/app/730/CounterStrike_2/">
        <img src="img/counterstrike.webp" alt="Counter Strike 2" class="wishlist-global-games">
        </a>
        <p">
        Counter-Strike 2, conhecido também como CS2 é um jogo tático multijogador de tiro em primeira 
        pessoa anunciado 22 de março de 2023 e lançado em 27 de setembro de 2023. Desenvolvido e publicado 
        pela Valve. É o quinto jogo da série principal Counter-Strike.
        </p>
        `
      }
      if (wishlistGames[positionlist] == 'Dead by Daylight') {
        wishlist_games.innerHTML += `
        <a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/?l=portuguese">
        <img src="img/deadbydaylight.jpg" alt="Dead by Daylight" class="wishlist-global-games">
        </a>
        <p>
        Dead by Daylight é um jogo eletrônico multijogador online assimétrico do gênero survival horror 
        desenvolvido pelo estúdio canadense Behaviour Interactive.
        </p>
        `
      }
      if (wishlistGames[positionlist] == 'Undertale') {
        wishlist_games.innerHTML += `
        <a href="https://store.steampowered.com/app/391540/Undertale/?l=portuguese">
        <img src="img/undertale.png" alt="Undertale" class="wishlist-global-games">
        </a>
        <p>
        Undertale é um RPG eletrônico criado pelo desenvolvedor independente norte-americano Toby Fox. 
        Nele, o jogador pode controlar uma criança humana que caiu em uma caverna, uma região grande e 
        isolada sob a superfície da Terra, separada por uma barreira mágica.
        </p>
        `
      }
      if (wishlistGames[positionlist] == 'Minecraft') {
        wishlist_games.innerHTML += `
        <a href="https://www.minecraft.net/pt-br">
        <img src="img/minecraft.avif" alt="Minecraft" class="wishlist-global-games">
        </a>
        <p>
        Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco 
        Markus "Notch" Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja 
        propriedade intelectual foi obtida pela Microsoft em 2014.
        </p>
        `
      }
      if (wishlistGames[positionlist] == 'Iguinho') {
        wishlist_games.innerHTML += `
        <a href="https://iguinho.com.br/">
        <img src="img/iguinhoGame.png" alt="Iguinho" class="wishlist-global-games">
        </a>
        <p>
        Iguinho é um site que hospeda diversos jogos infantil, tanto educativos quanto de puro 
        entreterimento criado por Camilo Brunelli, Carlos Baldim e César Figueiredo. Além de jogos
        o site hospeda também quadrinhos e livros infantis desde 2007.
        </p>
        `
      }
    }
  } else {
    wishlist_games.innerHTML = `<b style="color: red">Você ainda não adicionou nenhum jogo à sua lista de desejos</b>`
  }
}



counterstrikeWishlistButton.addEventListener("click", addCstoWishlist);
deadbydaylightWishlistButton.addEventListener("click", addDbdtoWishlist);
undertaleWishlistButton.addEventListener("click", addUndertoWishlist);
minecraftWishlistButton.addEventListener("click", addMinetoWishlist);
iguinhoWishlistButton.addEventListener("click", addIguitoWishlist);

// end buttons