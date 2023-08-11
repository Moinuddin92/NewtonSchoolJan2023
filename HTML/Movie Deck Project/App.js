let pageNumber;
let totalPages = 0;
let currentState = "desc";

const movieListSection = document.querySelector("#movie-list");
const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#prev");
const pageNumberContainer = document.querySelector("#page-no");
const ratingToggle = document.querySelector("#rating-toggle");

const SORT_ASC_TEXT = "Sort by rating (most to least)";
const SORT_DESC_TEXT = "Sort by rating (least to most)";

const SORT_ASC = "popularity.asc";
const SORT_DESC = "popularity.desc";

function addNavigationButtons() {
  nextBtn.addEventListener("click", () => {
    if (pageNumber < totalPages) {
      pageNumber++;
      showMovies(pageNumber, currentState);
    }
  });

  backBtn.addEventListener("click", () => {
    if (pageNumber > 1) {
      pageNumber--;
      showMovies(pageNumber, currentState);
    }
  });
}

function addPopularityButton() {
  ratingToggle.addEventListener("click", (e) => {
    currentState = currentState === "desc" ? "asc" : "desc";
    pageNumber = 1;
    showMovies(pageNumber, currentState);
    e.target.innerText =
      currentState === "desc" ? SORT_DESC_TEXT : SORT_ASC_TEXT;
  });
}

async function showMovies(pageNumber = 1, sort_by = "desc") {
  movieListSection.innerText = "";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTk2Nzc5YmYxODJmOWY3ZTZjZGNkYjM2MWM5YzJlNSIsInN1YiI6IjY0ZDYzM2U5ZGI0ZWQ2MDEzOTU5YjIwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wRn2jZftjLdeYL4DP_JhcaDnmAhnKzebuaJd4NcJMA",
    },
  };
  let response;

  response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${pageNumber}&sort_by=${
      sort_by === "asc" ? SORT_ASC : SORT_DESC
    }`,
    options
  );

  const json = await response.json();
  totalPages = json.total_pages;
  const movieList = json.results;
  for (let movie of movieList) {
    // movie section
    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;
    const rating = document.createElement("p");
    rating.textContent = movie.vote_average;
    const movieDetails = document.createElement("section");
    movieDetails.appendChild(movieTitle);
    
    movieDetails.classList.add("movie-details");
    // image/ banner
    let banner = document.createElement("img");
    banner.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    banner.classList.add("movie-poster");
    // footer
    const footer = document.createElement("footer");
    const date = document.createElement("p");
    date.innerText = `date ${movie.release_date}`;
    const heart = document.createElement("i");
    heart.classList.add("fa-regular", "fa-heart", "like");
    footer.appendChild(rating);
    footer.appendChild(date);
    footer.appendChild(heart);
    // parent
    const movieElement = document.createElement("article");
    movieElement.classList.add("movie");
    movieElement.appendChild(banner);
    movieElement.appendChild(movieTitle);
    movieElement.appendChild(footer);
    movieListSection.appendChild(movieElement);
    pageNumberContainer.innerText = "Current Page: " + pageNumber;
  }

  //   movieList
}

async function init() {
  pageNumber = 1;
  await showMovies(1);
  addNavigationButtons();
  addPopularityButton();
}

// application code
init();