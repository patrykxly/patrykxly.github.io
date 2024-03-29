const ghToClick = document.getElementById("ghClick");
const qnToClick = document.getElementById("qnClick");
const pageToClick = document.getElementById("pageClick");
const linkedinUrl = document.getElementById("linkedUrl");
const mailUrl = document.getElementById("mailUrl");

ghToClick.addEventListener("click", (e) =>{
    ghToClick.style.cursor = "pointer";
    window.open("https://github.com/patrykxly/catering-app");
})

qnToClick.addEventListener("click", (e) =>{
    window.open("http://quicknailslublin.pl");
})

pageToClick.addEventListener("click", (e) =>{
    window.open("https://patrykxly.github.io/shoppingsite/index.html");
})

linkedinUrl.addEventListener("click", (e) =>{
    window.open("https://linkedin.com/in/psokolinski1");
})

mailUrl.addEventListener("click", (e) =>{
    location.href =  "mailto:psokolinski01@gmail.com";
})
