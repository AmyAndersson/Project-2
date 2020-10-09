
// Create a function to populate the Bubble Chart 
function Bubblechart() {
  
  d3.csv("spcs_cleaned.csv").then((data) => {
    
    // console.log(data)

    var Endangered_count = 0;
    var Crit_end_count = 0;
    var Extinct_count = 0;
    var Vul_count = 0;
    var Extinct_wild_count = 0;
    var Con_dep_count = 0;
      

    for (var i = 0; i < data.length; i++) {
      var commonname = data[i].Common_Name;
      var status = data[i].Threatened_Status;
      
      

      // console.log(status)
        
      function ACT() {
        if (data[i].ACT === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          };
        };
      };

      function NSW() {
        if (data[i].NSW === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };
      
      function NT() {
        if (data[i].NT === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };
      

      function QLD() {
        if (data[i].QLD === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };

      function SA() {
        if (data[i].SA === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };

      function TAS() {
        if (data[i].TAS === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };

      function VIC() {
        if (data[i].VIC === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };

      function WA() {
        if (data[i].WA === "Yes") {
          if (status === "Endangered") {
            Endangered_count = Endangered_count + 1;
          } else if (status === "Critically Endangered") {
            Crit_end_count = Crit_end_count + 1;
          } else if (status === "Vulnerable") {
            Vul_count = Vul_count + 1;
          } else if (status === "Extinct") {
            Extinct_count = Extinct_count + 1;
          } else if (status === "Extinct in the wild") {
            Extinct_wild_count = Extinct_wild_count + 1;
          } else if (status === "Conservation Dependent") {
            Con_dep_count = Con_dep_count + 1;
          }
        }
      };
        
     
      
      ACT();
      NSW();
      NT();
      QLD();
      SA();
      TAS();
      VIC();
      WA();

    }
    
       (x_axis = [
         Endangered_count,
         Crit_end_count,
         Vul_count,
         Extinct_count,
         Extinct_wild_count,
         Con_dep_count,
       ]);
      
       (y_axis = [
         "Endangered",
         "Critically Endangered",
         "Vulnerable",
         "Extinct",
         "Extinct In Wild",
         "Conservation Dependent",
       ]);

   
       // Create the trace for plotting
       var trace = {
         x: y_axis,
         y: x_axis,
         mode: "markers",
         marker: {
           size: x_axis,
           color: x_axis,
           sizeref: 0.1,
           sizemode: "area",
         },
       };

       // Define the plot layout
       var layout = {
         title: `Threatened status of Austalian Plants and Animals in Australia`,
         xaxis: { title: "Count" },
         yaxis: { title: "Threatened Status" },
       };

       // Define the data
       var plotdata = [trace];

       // Create plot using Plotly
       Plotly.newPlot("bubble", plotdata, layout);

    
   });
};
Bubblechart();

