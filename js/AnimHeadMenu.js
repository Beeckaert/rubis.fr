// Main Template.css *by système Rubis

//Main head Menu Anim

// variable GetID

//full id Link avant-propos

const AvantPropos = document.getElementById("AvantPropos");
const TextAvantPropos = document.getElementById("TextAvantPropos");

//full id Link blog

const Blog = document.getElementById("Blog");
const TextBlog = document.getElementById("TextBlog");

//full id Link creation

const Creation = document.getElementById("Creation");
const TextCreation = document.getElementById("TextCreation");

//full id Link partenaria

const Partenaria = document.getElementById("Partenaria");
const TextPartenaria = document.getElementById("TextPartenaria");

// start Anim

//link AvantPropos Event

AvantPropos.addEventListener("mouseenter", function(){

    AvantPropos.style.backgroundColor ="#D21E43";
    TextAvantPropos.style.textShadow ="4px 4px 4px black";

});

AvantPropos.addEventListener("mousemove", function(){

    AvantPropos.style.backgroundColor ="#D21E43";
    TextAvantPropos.style.textShadow ="4px 4px 4px black";

});

AvantPropos.addEventListener("mouseout", function(){

    AvantPropos.style.backgroundColor ="transparent";
    TextAvantPropos.style.textShadow ="4px 4px 4px #D21E43";

});

//link Blog Event

Blog.addEventListener("mouseenter", function(){

    Blog.style.backgroundColor ="#D21E43";
    TextBlog.style.textShadow ="4px 4px 4px black";

});

Blog.addEventListener("mousemove", function(){

    Blog.style.backgroundColor ="#D21E43";
    TextBlog.style.textShadow ="4px 4px 4px black";

});

Blog.addEventListener("mouseout", function(){

    Blog.style.backgroundColor ="transparent";
    TextBlog.style.textShadow ="4px 4px 4px #D21E43";

});

//link Creation Event

Creation.addEventListener("mouseenter", function(){

    Creation.style.backgroundColor ="#D21E43";
    TextCreation.style.textShadow ="4px 4px 4px black";

});

Creation.addEventListener("mousemove", function(){

    Creation.style.backgroundColor ="#D21E43";
    TextCreation.style.textShadow ="4px 4px 4px black";

});

Creation.addEventListener("mouseout", function(){

    Creation.style.backgroundColor ="transparent";
    TextCreation.style.textShadow ="4px 4px 4px #D21E43";

});

//link Partenaria Event

Partenaria.addEventListener("mouseenter", function(){

    Partenaria.style.backgroundColor ="#D21E43";
    TextPartenaria.style.textShadow ="4px 4px 4px black";

});

Partenaria.addEventListener("mousemove", function(){

    Partenaria.style.backgroundColor ="#D21E43";
    Partenaria.style.textShadow ="4px 4px 4px black";

});

Partenaria.addEventListener("mouseout", function(){

    Partenaria.style.backgroundColor ="transparent";
    TextPartenaria.style.textShadow ="4px 4px 4px #D21E43";

});