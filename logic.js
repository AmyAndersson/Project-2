d3.csv("data/20200929spcs_edit.csv").then(function(species) {


    console.log(species);

// var Endangered = [];
// var Vulnerable = [];
// var Extinct = [];
// var Crit_Endangered =[]; 



species.forEach(function(d){
var status =d["Threatened status"];
var name = d["Common Name"];

console.log(status); 
console.log(name);
});

// if (specie["Threatend status"] === "Endangered"){
//   Endangered.push(specie["Common Name"]);
//   console.log(name,  status);
//   console.log(Endangered)
// }

//     function status_Sortd(data) {
//     switch(data) {
//       case "Endangered":
//         console.log(data)
//         Endangered.push(name);
//         break;
//       case "Vulnerable":
//         Vulnerable.push(name);
//         break;
//       case "Extinct":
//         Extinct.push(name);
//         break;
//      case "Critically Endangered ":
//         Crit_Endangered.push(name);
//             break;
//         };
// };





    // console.log(Endangered);
    // console.log(Vulnerable);
    // console.log(Extinct);
    // console.log(Crit_Endangered);





    

 });