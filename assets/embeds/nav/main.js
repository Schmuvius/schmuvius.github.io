window.onload = function () {
    var searchBar = document.getElementById("search");
    var searchButton = document.getElementById("search-button");

    searchBar.onchange = function () {
        searchButton.href = "/search?q=" + encodeURIComponent(searchBar.value);
    }
}
