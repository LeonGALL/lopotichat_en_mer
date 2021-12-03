$(document).ready(function () {
  $("#suivant").click(function () {
    let x = $("#menu-deroulant").val();
    switch (x) {
      case "personne":
        document.getElementById("search-personne").style.display = "inline";
        document.getElementById("search-sortie").style.display = "none";
        document.getElementById("search-cs").style.display = "none";
        document.getElementById("search-biblio").style.display = "none";
        $(".add").click(function () {
          if (
            $("#texte-nom").val() == "poti" &&
            $("#texte-prenom").val() == "chats"
          ) {
            window.open("frontend/img/sauvetage.gif");
          }
          let tab;
          if ($("#texte-nom").val() == "") {
            tab = [$("#texte-prenom").val(), 2];
          } else if ($("#texte-prenom").val() == null) {
            tab = [$("#texte-nom").val(), 1];
          } else {
            tab = [$("#texte-nom").val(), $("#texte-prenom").val()];
          }
          function stock(donnee, type) {
            var structureb;
            if (type == "personne") {
              if (donnee[1] == 1) {
                structureb = { nom: donnee[0], prenom: null };
              } else {
                if (donnee[1] == 2) {
                  structureb = { nom: null, prenom: donnee[0] };
                } else {
                  var structureb = { nom: donnee[0], prenom: donnee[1] };
                }
              }
            }
            if (type == "sortie") {
              structureb = {
                annee: donnee[2],
                mois: donnee[1],
                jour: donnee[0],
              };
            }
            if (type == "centre_secours") {
              structureb = { centre_secours: donnee };
            }
            if (type == "bibliographie") {
              structureb = { bibliographie: donnee };
            }
            var structure = JSON.stringify(structureb);
            $.ajax({
              url:
                "https://potichats.alwaysdata.net/search?t=" +
                type +
                "&o=" +
                structure,
              success: function (res) {
                try {
                  let taille = res.length;
                  for (let index = 0; index < taille; index++) {
                    let data = res[index];
                    let d = $("<p></p>").text(data.nom + " " + data.prenom);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                    d = $(
                      "<a href='https://sauveteurdudunkerquois.fr/" +
                        data.link +
                        '"></a>"
                    ).text("https://sauveteurdudunkerquois.fr/" + data.link);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                  }
                } catch (e) {
                  console.log(e);
                }
              },
            });
          }
          stock(tab, $("#menu-deroulant").val());
        });
        break;
      case "sortie":
        document.getElementById("search-sortie").style.display = "inline";
        document.getElementById("search-personne").style.display = "none";
        document.getElementById("search-cs").style.display = "none";
        document.getElementById("search-biblio").style.display = "none";
        $(".add").click(function () {
          let tab;
          if ($("#texte-sortie-j").val() != null) {
            tab = [
              $("#texte-sortie-j").val(),
              $("#texte-sortie-m").val(),
              $("#texte-sortie-a").val(),
            ];
          } else if ($("#texte-sortie-m").val() != null) {
            tab = [
              null,
              $("#texte-sortie-m").val(),
              $("#texte-sortie-a").val(),
            ];
          } else {
            tab = [null, null, $("#texte-sortie-a").val()];
          }
          console.log($("#menu-deroulant").val());
          function stock(donnee, type) {
            var structureb;
            if (type == "personne") {
              if (donnee[1] == 1) {
                structureb = { nom: donnee[0], prenom: null };
              } else {
                if (donnee[1] == 2) {
                  structureb = { nom: null, prenom: donnee[0] };
                } else {
                  var structureb = { nom: donnee[0], prenom: donnee[1] };
                }
              }
            }
            if (type == "sortie") {
              structureb = {
                annee: donnee[2],
                mois: donnee[1],
                jour: donnee[0],
              };
            }
            if (type == "centre_secours") {
              structureb = { centre_secours: donnee };
            }
            if (type == "bibliographie") {
              structureb = { bibliographie: donnee };
            }
            var structure = JSON.stringify(structureb);
            $.ajax({
              url:
                "https://potichats.alwaysdata.net/search?t=" +
                type +
                "&o=" +
                structure,
              success: function (res) {
                try {
                  let taille = res.length;
                  for (let index = 0; index < taille; index++) {
                    let data = res[index];
                    let d = $("<p></p>").text(data.titre);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                    d = $(
                      "<a href='https://sauveteurdudunkerquois.fr/" +
                        data.link +
                        '"></a>"
                    ).text("https://sauveteurdudunkerquois.fr/" + data.link);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                  }
                } catch (e) {
                  console.log(e);
                }
              },
            });
          }
          stock(tab, $("#menu-deroulant").val());
        });
        break;
      case "centre_secours":
        document.getElementById("search-cs").style.display = "inline";
        document.getElementById("search-personne").style.display = "none";
        document.getElementById("search-sortie").style.display = "none";
        document.getElementById("search-biblio").style.display = "none";
        $(".add").click(function () {
          function stock(donnee, type) {
            var structureb;
            if (type == "personne") {
              if (donnee[1] == 1) {
                structureb = { nom: donnee[0], prenom: null };
              } else {
                if (donnee[1] == 2) {
                  structureb = { nom: null, prenom: donnee[0] };
                } else {
                  var structureb = { nom: donnee[0], prenom: donnee[1] };
                }
              }
            }
            if (type == "sortie") {
              structureb = {
                annee: donnee[2],
                mois: donnee[1],
                jour: donnee[0],
              };
            }
            if (type == "centre_secours") {
              structureb = { centre_secours: donnee };
            }
            if (type == "bibliographie") {
              structureb = { bibliographie: donnee };
            }
            var structure = JSON.stringify(structureb);
            $.ajax({
              url:
                "https://potichats.alwaysdata.net/search?t=" +
                type +
                "&o=" +
                structure,
              success: function (res) {
                try {
                  let taille = res.length;
                  for (let index = 0; index < taille; index++) {
                    let data = res[index];
                    let d = $("<p></p>").text(data.ville);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                    d = $(
                      "<a href='https://sauveteurdudunkerquois.fr/" +
                        data.link +
                        '"></a>"
                    ).text("https://sauveteurdudunkerquois.fr/" + data.link);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                  }
                } catch (e) {
                  console.log(e);
                }
              },
            });
          }
          stock($("#texte-cs").val(), $("#menu-deroulant").val());
        });
        break;
      case "bibliographie":
        document.getElementById("search-biblio").style.display = "inline";
        document.getElementById("search-personne").style.display = "none";
        document.getElementById("search-sortie").style.display = "none";
        document.getElementById("search-cs").style.display = "none";
        $(".add").click(function () {
          function stock(donnee, type) {
            var structureb;
            if (type == "personne") {
              if (donnee[1] == 1) {
                structureb = { nom: donnee[0], prenom: null };
              } else {
                if (donnee[1] == 2) {
                  structureb = { nom: null, prenom: donnee[0] };
                } else {
                  var structureb = { nom: donnee[0], prenom: donnee[1] };
                }
              }
            }
            if (type == "sortie") {
              structureb = {
                annee: donnee[2],
                mois: donnee[1],
                jour: donnee[0],
              };
            }
            if (type == "centre_secours") {
              structureb = { centre_secours: donnee };
            }
            if (type == "bibliographie") {
              structureb = { bibliographie: donnee };
            }
            var structure = JSON.stringify(structureb);
            $.ajax({
              url:
                "https://potichats.alwaysdata.net/search?t=" +
                type +
                "&o=" +
                structure,
              success: function (res) {
                try {
                  let taille = res.length;
                  for (let index = 0; index < taille; index++) {
                    let data = res[index];
                    let d = $("<p></p>").text(data.titre);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                    d = $(
                      "<a href='https://sauveteurdudunkerquois.fr/" +
                        data.link +
                        '"></a>"
                    ).text("https://sauveteurdudunkerquois.fr/" + data.link);
                    $("#liens").append(d);
                    d = $("<br>");
                    $("#liens").append(d);
                  }
                } catch (e) {
                  console.log(e);
                }
              },
            });
          }
          stock($("#texte-biblio").val(), $("#menu-deroulant").val());
        });
        break;
      default:
        break;
    }
  });
});

// $(document).ready(function () {
//     $("#add").click(function () {
//         console.log($("#texte").val());
//         console.log($("#menu-deroulant").val());
//         stock($("#texte").val(), $("#menu-deroulant").val());
//     });
// });
