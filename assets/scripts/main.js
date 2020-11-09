window.onload = function () {
    var darkness = document.createElement("div");
    darkness.id = "darkness";
    document.body.appendChild(darkness);


    var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    var i = 0;
    while (i != headings.length) {
        headings[i].id = encodeURIComponent(headings[i].innerText);
        i++;
    }

    if (document.getElementsByTagName("outline").length != 0) {
        var outline = document.getElementsByTagName("outline")[0]
        outline.id = "outline"
        var heading = document.createElement("h4");
        heading.innerText = "Page Outline";
        outline.appendChild(heading);
        var ul = document.createElement("ul")
        var i = 0;
        while (i != headings.length) {
            var a = document.createElement("a");
            a.href = "#" + headings[i].id;
            a.innerText = headings[i].innerText;
            a.classList.add("obvious");

            var li = document.createElement("li");
            li.classList.add(headings[i].tagName + "-outline");
            li.appendChild(a);

            ul.appendChild(li);
            i++;
        }
        outline.appendChild(ul);
    }

    window.onscroll = function () {
        var bar = document.querySelector("embed[src=\"/assets/embeds/nav/\"]");
        if (bar && document.body.scrollTop > window.innerHeight) {
            bar.style.top = "0px";
        } else {
            bar.style.top = "-50px";
        }
    }

    var searchResults = document.createElement("embed");
    searchResults.id = "search-results";
    searchResults.src = "/search/";


    var resultsClose = document.createElement("button");
    resultsClose.id = "results-close";
    var resultsCloseImg = document.createElement("img");
    resultsCloseImg.src = "/assets/images/cancel.svg";

    resultsClose.appendChild(resultsCloseImg);
    document.body.appendChild(searchResults);
    document.body.appendChild(resultsClose);

    window.showResults = function () {
        searchResults.style.opacity = 1;
        resultsClose.style.opacity = 1;
        darkness.style.zIndex = 1;
        darkness.style.opacity = 0.5;
        document.body.style.overflow = "hidden";
    }

    window.hideResults = function () {
        searchResults.style.opacity = 0;
        resultsClose.style.opacity = 0;
        darkness.style.opacity = 0;
        document.body.style.overflow = "auto";
        setTimeout(function () {
            darkness.style.zIndex = -1;
        }, 0.2);
    }
    hideResults()
    resultsClose.onclick = hideResults;
}
