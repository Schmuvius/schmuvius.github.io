window.onload = function () {
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
}
