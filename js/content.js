    // let details = {};
    // details['domain'] = ".coinsniper.net";
    // chrome.cookies.getAll({
    //     domain: "coinsniper.net"
    // }, function(cookies) {
    //     for (var i = 0; i < cookies.length; i++) {
    //         console.log(cookies[i] + "deleted");
    //         chrome.cookies.remove({
    //             url: "https://" + cookies[i].domain + cookies[i].path,
    //             name: cookies[i].name
    //         });
    //     }
    // });

    const fetchPromise = fetch("https://coinsniper.net/login");
    fetchPromise.then(response => {
        return response.text();
    }).then(people => {
        var placingdom = document.createElement("htmldom");
        placingdom.innerHTML = people;

        const token = placingdom.getElementsByClassName("grwwe is-hidden")[0].getAttribute("data-xx");
        document.getElementById("testing").innerHTML = token;

        const email = "tcggukcnw@metalunits.com";
        const body = "_token=" + token + "&name=zakirtesting&email=" + email + "&password=zakir%25%25%24&password_confirmation=zakir%25%25%24";
        document.getElementById("loadinglink").innerHTML = body;
        async function start(token, body) {
            await fetch("https://coinsniper.net/register", {
                "credentials": "include",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Upgrade-Insecure-Requests": "1",
                    "Sec-Fetch-Dest": "document",
                    "Sec-Fetch-Mode": "navigate",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-User": "?1"
                },
                "referrer": "https://coinsniper.net/register",
                "body": body,
                "method": "POST",
                "mode": "cors"
            });
        }
        start(token, body);
    });