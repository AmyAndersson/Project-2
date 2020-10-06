d3.csv("data/spcs_cleaned.csv").then(function(species) {


    console.log(species);

// var status_list = [];
// var name_list = [];
// var Extinct = [];
// var Crit_Endangered =[]; 

Endangered_count = 0
Crit_end_count = 0
Extinct_count = 0 
Vul_count = 0 
Extinct_wild_count = 0 
Con_dep_count = 0 

species.forEach(function(specie){
var status =specie.Threatened_Status;
var name = specie.Common_Name;

// status_list.push(status);
// name_list.push(name);

 if (status === "Endangered"){
     Endangered_count = Endangered_count+1
 }
 else if (status === "Critically Endangered"){
    Crit_end_count = Crit_end_count +1
 }
 else if (status === "Vulnerable"){
    Vul_count = Vul_count +1
 }
 else if (status === "Extinct"){
    Extinct_count = Extinct_count +1
 }
 else if (status === "Extinct in the wild"){
    Extinct_wild_count = Extinct_wild_count +1
 }
 else if (status === "Conservation Dependent"){
    Con_dep_count = Con_dep_count +1
 }

});

console.log(Vul_count); 

y_axis = [Vul_count, Endangered_count, Crit_end_count, Extinct_wild_count, Con_dep_count], 
x_axis = ["Vulnerable", "Endangered", "Critically endangered", "Extinct in wild", "Conservation dependent" ]

var data = [
    {
      x: x_axis,
      y: y_axis,
      type: 'bar'
    }];
  
  // Define the plot layout
  var layout = {
    title: "Threatened status of Austalian plants and animals",
    xaxis: { title: "Threatened status" },
    yaxis: { title: "Number" }
  };
  
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("scatter", data, layout);
       



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