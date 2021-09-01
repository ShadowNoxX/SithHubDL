var GURL = "https://sithubdl.romanolegend.repl.co/"
function sendURL(URL) {
    fetch(`http://localhost:4000/download?URL=${URL}`, {
        method:'GET'
    }).then(res => res.json())
    .then(json => console.log(json));
}
var a = false;
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".vd").addEventListener("click", function() {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            if (url.startsWith("https://www.youtube.com/watch?v=")) {
                chrome.downloads.download({
                    url: GURL+"dlv?URL="+url,
                });
            } else {
                if (!a) {
                    document.querySelector("body").append("Invalid Video");
                    a = true;
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".au").addEventListener("click", function() {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            if (url.startsWith("https://www.youtube.com/watch?v=")) {
                chrome.downloads.download({
                    url: GURL+"dla?URL="+url,
                });
            } else {
                if (!a) {
                    document.querySelector(".message").append("Invalid Video");
                    a = true;
                }
            }
        });
    });
});