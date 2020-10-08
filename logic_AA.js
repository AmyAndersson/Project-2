d3.csv("data/spcs_cleaned.csv").then(function(species) {


    console.log(species);

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
    
   //  console.log(Vul_count); 
    
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
           
    



// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
//   var x = [];
//   var y = [];


for ( var i = 0 ; i< (species.length) ; i++){

   
   var status =species[i].Threatened_Status;
   var name = species[i].Common_Name;
   
// console.log(status)

if (dataset === "act"){
   // console.log(dataset)
            if (species[i].ACT === "Yes"){
                  // console.log(specie.ACT)
            Endangered_count = 0
            Crit_end_count = 0
            Extinct_count = 0 
            Vul_count = 0 
            Extinct_wild_count = 0 
            Con_dep_count = 0 

                  switch(status) { 
                     case "Endangered":
                        Endangered_count = Endangered_count+1 ; 
                     case "Critically Endangered":
                        Crit_end_count = Crit_end_count +1 ; 
                     case "Vulnerable":
                        Vul_count = Vul_count +1 ;      
                     case "Extinct":
                        Extinct_count = Extinct_count +1 ;    
                     case "Extinct in the wild":
                        Extinct_wild_count = Extinct_wild_count +1 ;  
                     case "Conservation Dependent":
                        Con_dep_count = Con_dep_count +1 ;                      
                  }
           }
      y_axis = [Vul_count, Endangered_count, Crit_end_count, Extinct_wild_count, Con_dep_count, Extinct_count], 
      x_axis = ["Vulnerable", "Endangered", "Critically endangered", "Extinct in wild", "Conservation dependent", "Extinct"]
      
      // console.log(y_axis)
      var data = [
          {
            x: x_axis,
            y: y_axis,
            type: 'bar'
          }];
        
        // Define the plot layout
        var layout = {
          title: "Threatened status of plants and animals in the ACT",
          xaxis: { title: "Threatened status" },
          yaxis: { title: "Number" }
        };
        
        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("scatter", data, layout);
      }



  

// if (dataset === "tas"){

//    if (specie.TAS === "Yes"){

//    Endangered_count = 0
//    Crit_end_count = 0
//    Extinct_count = 0 
//    Vul_count = 0 
//    Extinct_wild_count = 0 
//    Con_dep_count = 0 

//             if (status === "Endangered"){
//                Endangered_count = Endangered_count+1
//          }
//             else if (status === "Critically Endangered"){
//             Crit_end_count = Crit_end_count +1
//          }
//             else if (status === "Vulnerable"){
//             Vul_count = Vul_count +1
//          }
//             else if (status === "Extinct"){
//             Extinct_count = Extinct_count +1
//          }
//             else if (status === "Extinct in the wild"){
//             Extinct_wild_count = Extinct_wild_count +1
//          }
//             else if (status === "Conservation Dependent"){
//             Con_dep_count = Con_dep_count +1
//          }
//       }
//          y_axis = [Vul_count, Endangered_count, Crit_end_count, Extinct_wild_count, Con_dep_count], 
//       x_axis = ["Vulnerable", "Endangered", "Critically endangered", "Extinct in wild", "Conservation dependent" ]
      
//       var data = [
//           {
//             x: x_axis,
//             y: y_axis,
//             type: 'bar'
//           }];
        
//         // Define the plot layout
//         var layout = {
//           title: "Threatened status of plants and animals in the TAS",
//           xaxis: { title: "Threatened status" },
//           yaxis: { title: "Number" }
//         };
        
//         // Plot the chart to a div tag with id "bar-plot"
//         Plotly.newPlot("scatter", data, layout);
//       }; 



//    if (dataset === "wa"){

//       if (specie.WA === "Yes"){
   
//       Endangered_count = 0
//       Crit_end_count = 0
//       Extinct_count = 0 
//       Vul_count = 0 
//       Extinct_wild_count = 0 
//       Con_dep_count = 0 
   
//                if (status === "Endangered"){
//                   Endangered_count = Endangered_count+1
//             }
//                else if (status === "Critically Endangered"){
//                Crit_end_count = Crit_end_count +1
//             }
//                else if (status === "Vulnerable"){
//                Vul_count = Vul_count +1
//             }
//                else if (status === "Extinct"){
//                Extinct_count = Extinct_count +1
//             }
//                else if (status === "Extinct in the wild"){
//                Extinct_wild_count = Extinct_wild_count +1
//             }
//                else if (status === "Conservation Dependent"){
//                Con_dep_count = Con_dep_count +1
//             }
//             }
         
//           y_axis = [Vul_count, Endangered_count, Crit_end_count, Extinct_wild_count, Con_dep_count], 
//          x_axis = ["Vulnerable", "Endangered", "Critically endangered", "Extinct in wild", "Conservation dependent" ]
         
//          var data = [
//              {
//                x: x_axis,
//                y: y_axis,
//                type: 'bar'
//              }];
           
//            // Define the plot layout
//            var layout = {
//              title: "Threatened status of plants and animals in the TAS",
//              xaxis: { title: "Threatened status" },
//              yaxis: { title: "Number" }
//            };
           
//            // Plot the chart to a div tag with id "bar-plot"
//            Plotly.newPlot("scatter", data, layout);
//          }


     // close for loop 

   }
}
})
