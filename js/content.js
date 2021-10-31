    let details = {};
    details['domain'] = ".coinsniper.net";
    chrome.cookies.getAll({
        domain: "coinsniper.net"
    }, function(cookies) {
        for (var i = 0; i < cookies.length; i++) {
            console.log(cookies[i] + "deleted");
            chrome.cookies.remove({
                url: "https://" + cookies[i].domain + cookies[i].path,
                name: cookies[i].name
            });
        }
    });
    const fetchPromise = fetch("https://coinsniper.net/login");
    fetchPromise.then(response => {
        return response.text();
    }).then(people => {
        var placingdom = document.createElement("htmldom");
        placingdom.innerHTML = people;

        const token = placingdom.getElementsByClassName("grwwe is-hidden")[0].getAttribute("data-xx");
        document.getElementById("testing").innerHTML = token;
    });