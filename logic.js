d3.csv("data/20200929spcs_edit.csv").then(function(species) {


    console.log(species);

var Endangered = [];
var Vulnerable = [];
var Extinct = [];
var Crit_Endangered =[]; 





species.forEach(function(specie){

var data = specie["Threatend status"];
var name = specie["Common Name"];


    function status_Sortd(data) {
    switch(data) {
      case "Endangered":
        Endangered.push(name);
        break;
      case "Vulnerable":
        Vulnerable.push(name);
        break;
      case "Extinct":
        Extinct.push(name);
        break;
     case "Critically Endangered ":
        Crit_Endangered.push(name);
            break;
        };
};

});

    // status_Sortd(status);

    console.log(Endangered);
    console.log(Vulnerable);
    console.log(Extinct);
    console.log(Crit_Endangered);

 });