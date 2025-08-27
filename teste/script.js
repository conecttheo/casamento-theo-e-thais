quotes = [
  {
    quote:"I want eagles in my daydreams. Diamonds in my eyes",
    album:"Blackstar",
    artist:"David Bowie",
    cover:"https://i.imgur.com/tbDdgtK.png"
  },
  {
    quote:`
    Quem sou eu?
    Pra que o Deus de toda Terra
    Se preocupe com meu nome
    Se preocupe com minha dor

    Quem sou eu?
    Pra que a Estrela da manhã
    Ilumine o caminho
    Deste duro coração

    Não apenas por quem sou
    Mas porque Tu és fiel
    Nem por tudo o que eu faça
    Mas por tudo o que Tu és

    Eu sou como um vento passageiro
    Que aparece e vai embora
    Como onda no oceano
    Assim como o vapor

    E ainda escutas quando eu chamo
    Me sustentas quando eu clamo
    Me dizendo quem eu sou

    Eu sou Teu
    Eu sou Teu

    Quem sou eu?
    Pra ser visto com amor
    Mesmo em meio ao pecado
    Tu me fazes levantar

    Quem sou eu?
    Pra que a voz que acalma o mar
    E acaba com a tormenta
    Que se faz dentro de mim

    Não apenas por quem sou
    Mas porque Tu és fiel
    Nem por tudo o que eu faça
    Mas por tudo o que Tu és

    Eu sou como um vento passageiro
    Que aparece e vai embora
    Como onda no oceano
    Assim como o vapor

    E ainda escutas quando eu chamo
    Me sustentas quando eu clamo
    Me dizendo quem eu sou

    Eu sou Teu
    Eu sou Teu`,
    album:"Quem sou eu?",
    artist:"PG",
    cover:"https://i.imgur.com/63YXGcn.png"
  },
  {
    quote:"Living is easy with eyes closed, misunderstanding all you see",
    album:"magical mystery tour",
    artist:"The Beatles",
    cover:"https://i.imgur.com/aG1UUGU.png"
  },
  {
    quote:"I don’t wanna die, I sometimes wish I’d never been born at all.",
    album:"A Night at the Opera",
    artist:"Queen",
    cover:"https://i.imgur.com/LOAe4IW.png"
  },
  {
    quote:"Acting funny but I don't know why. Excuse me while I kiss the sky",
    album:"Are You Experienced",
    artist:"Jimi Hendrix",
    cover:"https://i.imgur.com/UvQu6xi.png"
  }
]

// List of all .circle objects
circles = [...document.querySelectorAll('.circle')]

const CARD = document.querySelector('.card');
const QUOTE = document.querySelector('.quote');
const ALBUM = document.querySelector('.album_name');
const ARTIST = document.querySelector('.artist_name');
const COVER = document.querySelector('.photo');
let SELECTED = 1

// update the displaying quote
// used delay argument to decrease delay when showing first quote
let updateQuote = (n,delay = 600) => {
  CARD.classList.add('fade');
  setTimeout(function() {
    QUOTE.innerText = quotes[n].quote
    ALBUM.innerText = quotes[n].album
    ARTIST.innerText = quotes[n].artist
    COVER.src = quotes[n].cover
    CARD.classList.remove('fade');
  }, delay);
}

let showNextItem = () => {
  nxt = document.querySelector('.next');
  prev = document.querySelector('.prev');
  slctd = document.querySelector('.selected');
  
  nxt.classList.remove('next');
  nxt.classList.add('selected');
  slctd.classList.remove('selected');
  slctd.classList.add('prev');
  if(SELECTED>0){
    prev.classList.remove('prev');
  }
  
  SELECTED ++
  if (SELECTED < circles.length -1){
    circles[SELECTED+1].classList.add('next')
  }
}

let showPrevItem = () => {
  nxt = document.querySelector('.next');
  prev = document.querySelector('.prev');
  slctd = document.querySelector('.selected');
  
  prev.classList.remove('prev');
  prev.classList.add('selected');
  slctd.classList.remove('selected');
  slctd.classList.add('next');
  if(SELECTED<circles.length-1){  
  nxt.classList.remove('next');
  }
  
  console.log(SELECTED)
  SELECTED --
  if (SELECTED > 0){
    circles[SELECTED-1].classList.add('prev')
  }
}


[...document.querySelectorAll('.circle')]
  .forEach(circle=>circle
  .addEventListener('click', el => {  
    CLICKED_ELEMENT = el.srcElement;
    if(CLICKED_ELEMENT.classList.contains('next')){
      showNextItem()
      updateQuote(SELECTED)
    }
    if(CLICKED_ELEMENT.classList.contains('prev')){
      showPrevItem()
      updateQuote(SELECTED)
    }
  }, false));

const preloadImage = url =>{
    var img = new Image();
    img.src=url;
}



const init = () => {
  updateQuote(SELECTED,300)
  quotes.forEach(item => preloadImage(item.cover))
}

init()