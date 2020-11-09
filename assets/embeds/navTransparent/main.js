window.onload = function () {
    var searchButton = document.getElementById("search-button");
    searchButton.children[0].removeAttribute("href");
    
    searchButton.onclick = function () {
        window.parent.showResults();
    }
}