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

    async function postgenerateemail() {
        await fetch("https://tempm.com/email-generator", {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "X-Moz": "prefetch",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "no-cors",
                "Sec-Fetch-Site": "same-origin"
            },
            "method": "GET",
            "mode": "cors"
        });
    }
    
    getemail();
    async function getemail() {
        await fetch("https://tempm.com/").then(response => {
        return response.text();
    }).then(people => {
            var placingdom = document.createElement("htmlemail");
            document.getElementById("alltests").innerHTML = people;

            document.getElementById("emailing").innerHTML = document.getElementById("email_ch_text").innerHTML;
                   sendingverification();
        });
    };
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
    postgenerateemail();
async function sendingverification (){
    const emailtxt = document.getElementById("emailing").innerHTML;
    const fetchPromise =  (async () => {  return await  fetch("https://coinsniper.net/login");})(); 
 
    fetchPromise.then(response => {
        return response.text();
    }).then(people => {
        var placingdom = document.createElement("htmldom");
        placingdom.innerHTML = people;

        const token = placingdom.getElementsByClassName("grwwe is-hidden")[0].getAttribute("data-xx");
        document.getElementById("testing").innerHTML = token;

        const email = encodeURI(emailtxt);
        const body = "_token=" + document.getElementById("testing").innerHTML + "&name=zakirtesting&email=" + email + "&password=zakir%25%25%24&password_confirmation=zakir%25%25%24";
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
      (async () => { await start(token, body)})();
    
    gettingmessage();
    });
    }


async function gettingmessage(){ 
      for (let i = 0; i < 10; i++) {
        await sleep(3000);
          const emailtxt = document.getElementById("emailing").innerHTML;

    await fetch("https://tempm.com/"+emailtxt).then(response => {
        return response.text();
    }).then(people => {
        const regex = "https://coinsniper.net/verify-email/.*" + "/ class";
         document.getElementById("verifyemail").innerHTML= people.match(regex);
      
    })
        if (  document.getElementById("verifyemail").innerHTML != ""){
            return ;
        }
}
      };
