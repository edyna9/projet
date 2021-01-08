//creation de fonction avec ajax pour demander le dossier json remplie des infos sur les articles
//cible le document et on cree une fonction pour demander le doss json 
//On donne les infos URL, type de requete et type de fichier demandé
//creation de la fonction status succes data qui va contenir:
//Boucle FOR pour parcourir le data donc le contenu du precedent url
//cible la div contenant et lui ajoute les img et tites des articles

//REQUETE GET EN AJAX
$(document).ready(function () {
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=07002241e6114b4ebcc207a9227b0893",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data.articles);
            for (i = 0; i < data.articles.length; i++) {
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" + "<h2>" + data.articles[i].title + "</h2>" + "<p>" + data.articles[i].description + "</p>"+"<a href="+ data.articles[i].url+"</a>"+"<button>Voir article</button></a></div>");
            }
        },
        error: function(result, error){
            alert("ERROR API");
        }
    });
});

/* second link
$(document).click(function () {
    $.ajax({
        url:"http://newsapi.org/v2/everything?domains=wsj.com&apiKey=07002241e6114b4ebcc207a9227b0893",
        type: "get",
        dataType: "html",
        success: function (code_html, statut) 
                $("#lien").append("<a href="+ url+">"+"<button>More information</button></a>");
            }
        },
        error: function(result, error){
            alert("ERROR");
        }
    });
});
*/

//Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}

