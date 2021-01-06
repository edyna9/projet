//creation de fonction avec ajax pour demander le dossier json remplie des infos sur les articles
//cible le document et on cree une fonction pour demander le doss json 
//On donne les infos URL, type de requete et type de fichier
//creation de la fonction status succes data qui va contenir:
//Boucle for pour parcourir le data
//cible la div contenant et lui ajoute les img et tites des articles

$(document).ready(function () {
    $.ajax({
        url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=07002241e6114b4ebcc207a9227b0893",
        type: "get",
        dataType : "json",
        success: function (data) {
            console.log(data);
            for(i=0; i < data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" + "<h2>" + data.articles[i].title + "</h2></div>");
            }
        },
    });
});



/*
$(document).ready(function () {
    $.ajax({
        url:"http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07002241e6114b4ebcc207a9227b0893",
        type: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" + "<h2>" + data.articles[i].title + "</h2></div>");
            }
        }
    });
});


$(document).ready(function () {
    $.ajax({
        url:"http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=",
        type: "get",
        method: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" + "<h2>" + data.articles[i].title + "</h2></div>");
            }
        }
    });
});




$(document).ready(function () {

    $("#bouton").click(function () {
        $.ajax({
            url: "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ea123760bcd0442196436d5522052c26",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data.articles)
            },
            for(let i=0; i<data.articles.length; i++){
                $("#liste").append("<li>" + data.articles[i].title +"</li>");

            }

        });
       
    });
});


$(document).ready(function () {
    $.ajax({
        url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=59f2efdf482744f78e2788f1d5f5fcda",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data.articles.length; i++); {
                $("#news").append("<li>" + data.articles[i].title+"</li>");
            }
        },
    });
});
*/