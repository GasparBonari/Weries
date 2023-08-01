"use strict";

let latest = {
  names: ["House of the Dragon","The Rings of Power", "The Peripheral", "Warrior Nun"],

  about: [
    "House of the Dragon is set two centuries before the events of Game of Thrones, and follows House Targaryen as they descend into a civil war over who should inherit the throne after King Viserys I.",
    `Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.`,
    "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own.",
    "The series is narrated and led by Portuguese actress Alba Baptista in the role of Ava Silva, a quadriplegic orphan who discovers she now has supernatural powers which force her to join an ancient order of warrior nuns.",
  ],
};


let seriesList = 
[
  {
    genre: ["drama"],

    names: [
      "Better Call Saul", "Game of Thrones", "Ozark", "Peaky Blinders", "Stranger Things",
      "Sex Education", "13 Reasons Why", "Skins", "One of Us Is Lying",
    ],
  
    about: [
      "Six years before he meets Walter White, small-time lawyer Jimmy McGill transforms into his alias, Saul Goodman and searches for his destiny hustling to make a name for himself.",
      "Game of Thrones is an HBO series that tells the story of a medieval country's civil war. The series is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years.",
      "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
      "Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby.",
      "Set in the 1980s, primarily in the fictional town of Hawkins, Indiana, the series centers on a number of mysteries and supernatural events occurring around the town and their impact on an ensemble of child and adult characters.",
      "Sex education is the provision of information about bodily development, sex, sexuality, and relationships, along with skills-building to help young people communicate about and make informed decisions regarding sex and their sexual health.",
      "The series revolves around high school student Clay Jensen (Dylan Minnette) and the aftermath of the suicide of fellow high school student Hannah Baker (Katherine Langford).",
      "Skins is a British teen comedy drama television series that follows the lives of a group of teenagers in Bristol, South West England, through the two years of sixth form.",
      "The series is based on the 2017 novel of the same name by Karen M. McManus and follows five high school students who enter detention, where one of them dies under suspicious circumstances and an investigation ensues.",
    ],
  
    stars: [
      "fas fa-star",
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
      "fa-solid fa-star-half-stroke",
      "far fa-star",
    ],

    letter: ["d"],
  },

  {
    genre: ["horror"],

    names: [
      "Penny Dreadful", "Them", "The Haunting of Bly Manor", "Sweet Home", "The Haunting of Hill House",
      "Haunted", "Marianne", "The Midnight Club",
    ],
  
    about: [
      "Penny Dreadful is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.",
      "Set in 1953, Them follows a black family who, during the Second Great Migration, moves from North Carolina to an all-white neighborhood in Los Angeles. The family's idyllic home slowly transforms into an epicenter of evil forces, next-door and otherworldly, that threaten to haunt, ravage and destroy them.",
      "The story tells of a young au pair hired by a man to look after his niece and nephew at the family country house after they fall into his care. Arriving at the Bly estate, she begins to see apparitions that proceed to haunt the premises.",
      "As humans turn into savage monsters and wreak terror, one troubled teen and his apartment neighbors fight to survive and to hold on to their humanity.",
      "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
      "The anthology series focuses on horror stories in which individuals or groups of people talk about their paranormal experience.",
      "When a famous horror writer goes back to her hometown, she finds out that the evil spirit that plagues her dreams is also there in real life.",
      'The series is set in a hospice and follows eight terminally ill young adults who form "The Midnight Club", meeting up each night to tell each others scary tales; it features an overarching story, while also frequently depicting those tales on screen.',
    ],
  
    stars: [
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
      "far fa-star",
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
      "fas fa-star",
    ],

    letter: ["h"],
  },

  {
    genre: ["comedy"],

    names: [
      "The Office US", "The Office UK", "Friends", "Seinfeld", "The Simpsons","The Good Place",
      "Two and a Half Men"
    ],
  
    about: [
      "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania.",
      "The Office is a British television mockumentary sitcom first broadcast in the UK on BBC Two on 9 July 2001.",
      "Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      "Stand-up comedian Jerry Seinfeld wrestles with life's most perplexing yet trivial questions with his eccentric friends George, Elaine and Kramer.",
      "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie.",
      'a woman welcomed after her death to the Good Place, a highly selective Heaven-like utopia designed and run by afterlife "architect" Michael',
      "Charlie Harper, a hedonistic jingle writer living in a beachfront Malibu abode, whose life is turned upside down when his brother Alan comes to live with him following a divorce, coupled with his nephew Jake visiting on the weekends.",
    ],
  
    stars: [
      "fas fa-star",
      "fas fa-star",
      "fa-solid fa-star-half-stroke",
      "far fa-star",
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
    ],

    letter: ["c"],
  },

  {
    genre: ["action"],

    names: [
      "The Terminal List", "See", "The Witcher", "The Umbrella Academy", "Loki",
      "The Mandalorian", "Obi-Wan Kenobi", "Andor"
    ],

    about: [
      "The series tells the story of a Navy SEAL who seeks to avenge the murder of his family.",
      "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins are born with sight.",
      "The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
      "The series revolves around a dysfunctional family of adopted sibling superheroes who reunite to solve the mystery of their father's death and the threat of an imminent apocalypse.",
      "After stealing the Tesseract during the events of Avengers: Endgame (2019), an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline.",
      'beginning five years after the events of Return of the Jedi (1983) a lone bounty hunter who goes on the run to protect "the Child".',
      "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.",
      "The series follows thief-turned-Rebel spy Cassian Andor during the five years leading up to the events of the film. Diego Luna reprises his role as Cassian Andor and also serves as an executive producer."
    ],

    stars: [
      "fa-solid fa-star-half-stroke",
      "fas fa-star",
      "fa-solid fa-star-half-stroke",
      "fas fa-star",
      "far fa-star",
      "fa-solid fa-star-half-stroke",
      "fas fa-star",
      "far fa-star",
    ],

    letter: ["a"],
  }
]


const dramaPlace = document.querySelector("#drama-wrapper");
const comedyPlace = document.querySelector("#comedy-wrapper");
const actionPlace = document.querySelector("#action-wrapper");
const horrorPlace = document.querySelector("#horror-wrapper");

const btnSlideRight = document.querySelector(".slider__btn-right");
const btnSlideLeft = document.querySelector(".slider__btn-left");

const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".navbar-links");
const slider = document.querySelector(".slider");


// DISPLAY LATEST

for(let [i, k] of latest.names.entries())
{
  let uiString =
  `<img class="slide" src="img/${i + 1}.jpg" alt="Photo ${i + 1}">
  <h1 class="slide-text">${k}</h1>
  <p class="slide-p">${latest.about[i]}</p>
  `;

  slider.innerHTML += uiString;
}

const slides = document.querySelectorAll(".slide");
const slideText = document.querySelectorAll("h1");
const slideP = document.querySelectorAll(".slide-p");


// DISPLAY DOTS

const dots = document.querySelector(".dots");

for(let [i, k] of slides.entries())
{
  dots.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
}

dots.addEventListener("click", function(e)
{
  if(e.target.classList.contains("dots__dot"))
  {
    let slide = e.target.dataset.slide;

    goToSlide(slide);
    activeDots(slide);
  }
})

function activeDots(slide)
{
  document.querySelectorAll(".dots__dot").forEach(e => e.classList.remove("dots__dot--active"));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
}

activeDots(0);


// SETTING HEADER SLIDER

let currentSlide = 0;
let maxSlide = slides.length;

function goToSlide(slide)
{
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  slideText.forEach((s, i) => s.style.transform = `translateX(${300 * (i - slide)}%)`);
  slideP.forEach((s, i) => s.style.transform = `translateX(${350 * (i - slide)}%)`)
}

goToSlide(0);


function slideToRight()
{
  if(currentSlide == maxSlide - 1)
  {
    currentSlide = 0;
  }
  else
  {
    currentSlide++;
  }
  
  activeDots(currentSlide);
  goToSlide(currentSlide);
}


function slideToLeft()
{
  if(currentSlide == 0)
  {
    currentSlide = maxSlide - 1
  }
  else
  {
    currentSlide--;
  }

  activeDots(currentSlide);
  goToSlide(currentSlide);
}

btnSlideLeft.addEventListener("click", slideToLeft);
btnSlideRight.addEventListener("click", slideToRight);

// auto slider

let autoSlide;

function timer()
{
  autoSlide = setInterval(function()
  {
    slideToRight();
  }, 6000)
}

timer();

// arrow keys

document.addEventListener("keydown", function(e)
{
  if(e.key == "ArrowRight")
  {
    slideToRight();

    clearInterval(autoSlide)
    timer();
  }
})

document.addEventListener("keydown",function(e)
{
  if(e.key == "ArrowLeft")
  {
    slideToLeft();

    clearInterval(autoSlide)
    timer();
  }
})


// DISPLAY SEARCH LIST NAV

const searchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');

function displaySearchList()
{
  seriesList.forEach(e => 
    {
      let letter = e.letter;
      
      e.names.forEach((k, i) => 
        {
          let uiString = `
          <div class = "search-list-item" id="${k}">
            <div class = "search-item">
                <img src = "img/${i + 2}${letter}.jpg">
            </div>
            <div class = "search-item-info">
                <h3>${k}</h3>
            </div>
          </div>`;

          searchList.innerHTML += uiString;

          searchList.classList.remove('hide-search-list');
        })
    })
}

displaySearchList();

function findMovies()
{
  let word = searchBox.value;

  seriesList.forEach(e => 
    {
      e.names.forEach((k, i) => 
        {
          if(word.length > 0)
          {
            let match = k.toLowerCase().includes(word.toLowerCase());
            let seriesToShow = document.getElementById(k);

            seriesToShow.style.display = match ? "" : "none";

            searchList.classList.remove('hide-search-list');
          } 
          else
          {
            searchList.classList.add('hide-search-list');
          }
        })
    })
}

findMovies();


// NAVBAR

navbarLinks.addEventListener("click", function (e) 
{
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) 
  {
    let id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({behavior: "smooth", block: "center"});
  }
});

// scroll to top

function scrollToTop()
{
  window.scrollTo(0, 0);
}


// NAVBAR OPACITY ANIMATION

function animationNavbar(e) 
{
  if (e.target.classList.contains("nav-link")) 
  {
    let link = e.target;
    let allButtons = link.closest(".navbar").querySelectorAll(".nav-link");
    let title = link.closest(".navbar").querySelector(".brand-title");

    for (let i of allButtons) 
    {
      if (i != link) 
      {
        i.style.opacity = this;
        title.style.opacity = this;
      }
    }
  }
}

navbar.addEventListener("mouseover", animationNavbar.bind(0.2));
navbar.addEventListener("mouseout", animationNavbar.bind(1));


// STICKY NAVBAR

function stickynav(entries) 
{
  let [entry] = entries;

  if (!entry.isIntersecting) 
  {
    navbar.classList.add("sticky");
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}

let navbarStick = new IntersectionObserver(stickynav, 
{
  root: null,
  rootMargin: "-100px",
});

navbarStick.observe(slider);


// NAVBAR RESPONSIVE

let btnToggle = document.querySelector(".toggle-button");

btnToggle.addEventListener("click", function (e) 
{
  e.preventDefault();

  navbarLinks.classList.toggle("active");
});


// DISPLAY SERIES BY GENRE

function displaySeries(series, genreName, place, letter)
{
  let filterSeries = series.filter(e => e.genre == genreName);

  for(let [i, k] of filterSeries.entries())
  {
    for(let [q, r] of k.names.entries())
    {
      let HTML = 
      `
      <div class="series">
        <img class="series-${genreName}" src="img/${q + 2}${letter}.jpg" alt="series-${genreName}" />
      </div>
      `
      place.innerHTML += HTML;
    }
  }
}

displaySeries(seriesList, "drama", dramaPlace, "d");
displaySeries(seriesList, "action", actionPlace, "a");
displaySeries(seriesList, "comedy", comedyPlace, "c");
displaySeries(seriesList, "horror", horrorPlace, "h");


// SETTING SLIDERS BY GENRE

let currentSlideGenre = 0;
let maxSlideGenre = seriesList.filter(e => e.genre == "drama").flatMap(e => e.names).length;
let seriesDrama = document.querySelectorAll(".series-drama");
let btnDramaLeft = document.querySelector(".btn-d-left");
let btnDramaRight = document.querySelector(".btn-d-right");

function getSeriesWidth() {
  const firstSeries = seriesDrama[0];
  return firstSeries.offsetWidth;
}

function goToSlideGenre(slide) {
  const seriesWidth = getSeriesWidth();

  seriesDrama.forEach((s, i) => {
    s.style.transform = `translateX(${-seriesWidth * slide}px)`;
    s.style.transition = "transform 0.2s ease-in-out";
  });
}
goToSlideGenre(0);


function ToRight()
{
  if(currentSlideGenre == maxSlideGenre - 1)
  {
    currentSlideGenre = 0;
  }
  else
  {
    currentSlideGenre++;
  }

  goToSlideGenre(currentSlideGenre);
}


function ToLeft()
{
  if(currentSlideGenre == 0)
  {
    currentSlideGenre = maxSlideGenre - 1
  }
  else
  {
    currentSlideGenre--;
  }

  goToSlideGenre(currentSlideGenre);
}

btnDramaLeft.addEventListener("click", ToLeft);
btnDramaRight.addEventListener("click", ToRight);