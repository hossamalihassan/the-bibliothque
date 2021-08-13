// Random Quotes
function randomQuotes (){
    var quotes = [
        ["\“Never trust anyone who has not brought a book with them.\”", "Lemony Snicket, Horseradish"],
        ["\“You can never get a cup of tea large enough or a book long enough to suit me.\”", "C.S. Lewis"],
        ["\“We read to know we're not alone.\”", "William Nicholson, Shadowlands"],
        ["\“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.\”", "Oscar Wilde"],
        ["\“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.\”", "Groucho Marx"],
        ["\“Books are a uniquely portable magic.\”" , "Stephen King"],
        ["\“You don't have to burn books to destroy a culture. Just get people to stop reading them.\”", "Ray Bradbury"],
        ["\“Let us read, and let us dance; these two amusements will never do any harm to the world.\”", "Voltaire"],
        ["\“Books are mirrors: you only see in them what you already have inside you.\”", "Carlos Ruiz Zafón, The Shadow of the Wind"],
        ["\“Many people, myself among them, feel better at the mere sight of a book.\”", "Jane Smiley, Thirteen Ways of Looking at the Novel"],
        ["\“Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.\”", "Anna Quindlen, How Reading Changed My Life"],
        ["\“No. I can survive well enough on my own— if given the proper reading material.\”", "Sarah J. Maas, Throne of Glass"],
        ["\“Today a reader, tomorrow a leader.\”", "Margaret Fuller"]
    ];

    var num = Math.floor(Math.random() * 11);

    var getQuote = document.getElementById("quote");
    var getPrs = document.getElementById("person");

    var quote = document.createTextNode(quotes[num][0]);
    var prs = document.createTextNode("- " + quotes[num][1]);

    getQuote.appendChild(quote);
    getPrs.appendChild(prs);
}

// Submit 
function doNotReload() {
    var form = document.getElementById("form");
    function handleForm() {
        event.preventDefault();
    }
    form.addEventListener('submit', handleForm);
}

let myLib = [];
var author = document.getElementById("input-1");
var title = document.getElementById("input-2");
var pages = document.getElementById("input-3"); 
var read = document.getElementById("check");
var theAuthor = "";
var theTitle = "";
var num ="";
var readingStat = false;


form.onsubmit = function onSubmit() {
    theAuthor = author.value;
    theTitle = title.value
    num = pages.value;

    if(read.checked == true) {
        readingStat = true;
    } else {
        readingStat = false;
    }

    myLib.push({
        "name": theAuthor,
        "title": theTitle,
        "pages": num,
        "read": readingStat
    });

    for (var i = 0; i < myLib.length; i++) { 
        localStorage.setItem("name"+i, myLib[i].name);
        localStorage.setItem("title"+i, myLib[i].title);
        localStorage.setItem("pages"+i, myLib[i].pages);
        localStorage.setItem("read"+i, myLib[i].read);
    }

    var table = document.getElementById("table");
    for (var i = 0; i < myLib.length; i++) {
       var getName =  localStorage.getItem("name"+i);
       var getTitle = localStorage.getItem("title"+i);
       var getPages = localStorage.getItem("pages"+i);
       if(readingStat == true) {
           table.innerHTML += "<tr>"
           +"<td class=\"author\">"+ getName +"</td>"
           +"<td class=\"title\">"+ getTitle +"</td>"
           +"<td class=\"pages\">"+ getPages +"</td>"
           +"<td class=\"read\"><input type=\"checkbox\" class=\"form-check-input checkbox\" checked></td>"
           +"<td><button class=\"btn btn-danger\">Delete</button></td></tr>";
           break;
       } else if (readingStat == false){
           table.innerHTML += "<tr>"
           +"<td class=\"author\">"+ getName +"</td>"
           +"<td class=\"title\">"+ getTitle +"</td>"
           +"<td class=\"pages\">"+ getPages +"</td>"
           +"<td class=\"read\"><input type=\"checkbox\" class=\"form-check-input checkbox\"></td>"
           +"<td><button class=\"btn btn-danger\">Delete</button></td></tr>";
           break;
       }
    }
    form.reset();

}


// Functions
randomQuotes();
doNotReload();
setInterval(function(){
   document.querySelector("body").style.height = screen.height;
}, 1000);

window.onload = function() {
    show();
}