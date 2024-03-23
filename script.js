document.getElementById("link-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var url = document.getElementById("link-url").value;
    if (url) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="' + url + '">' + url + '</a>';
        document.getElementById("links-list").appendChild(li);
        document.getElementById("link-url").value = "";
    }
});
