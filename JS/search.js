const searchInput = document.getElementById("search-input");

const showSearchResult = () => {
  let searchWord = searchInput.value;
  window.open(`https://www.google.com/search?q=${searchWord}`).focus();
  searchWord = "";
};

const enterKey = (event) => {
  if (event.code === "Enter") {
    showSearchResult();
  }
};

searchInput.addEventListener("keypress", (event) => {enterKey(event);});
