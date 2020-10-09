// Create global variables
var selectedState;
var status;
var location;
var commonname;


// Create location list 
var locationList = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]

// Populate dropbox with ID Values - ID Values come from Location List
locationList.forEach((location) => {
   var dropdownMenu = d3.select("#selDataset");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", location);
   newoption.text(location);
   selectedState = dropdownMenu.node().value;
});   
   
// Run the optionChanged function on the default ID to load when the page is first opened
var defaultState = "ACT"
optionChanged(defaultState);

// Create a function to change demographics table and all charts based on selected ID
function optionChanged(selectedState) {
         barchart(selectedState);
};

// Create a function to populate the Bar Chart based on selected State
function barchart(selectedState) {
   d3.json("/datatwo").then((data) => {
      var dropdownMenu = d3.select("#selDataset");
      selectedState = dropdownMenu.node().value;
      console.log(data)

      var Endangered_count = 0;
      var Crit_end_count = 0;
      var Extinct_count = 0;
      var Vul_count = 0;
      var Extinct_wild_count = 0;
      var Con_dep_count = 0;
      

      for (var i = 0; i < data.length; i++) {
        var commonname = data[i].common_name;
        var status = data[i].threatened_status;
        
         // if selectedState = data[i].ACT

      switch (selectedState) {
        case "NSW":
          if (data[i].nsw === "Yes") {
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
          break;

        case "NT":
          if (data[i].nt === "Yes") {
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
          break;

        case "QLD":
          if (data[i].qld === "Yes") {
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
          break;

        case "SA":
          if (data[i].sa === "Yes") {
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
          break;

        case "TAS":
          if (data[i].tas === "Yes") {
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
          break;

        case "VIC":
          if (data[i].vic === "Yes") {
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
          break;

        case "WA":
          if (data[i].wa === "Yes") {
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
          break;

        default:
          if (data[i].act === "Yes") {
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

          break;
      }
      }

         (y_axis = [
            Endangered_count,
            Crit_end_count,
            Vul_count,
            Extinct_count,
            Extinct_wild_count,
            Con_dep_count,
         ]);
      
         (x_axis = [
            "Endangered",
            "Critically Endangered",
            "Vulnerable",
            "Extinct",
            "Extinct In Wild",
            "Conservation Dependent",
         ]);

   
         // Create the trace for plotting
         var trace = {
            x: x_axis,
            y: y_axis,
            type: "bar",
         };

         // Define the plot layout
         var layout = {
            title: `Threatened Status of Austalian Animals in ${selectedState}`,
            xaxis: { title: "Threatened Status" },
            yaxis: { title: "Count" },
         };

         // Define the data
         var plotdata = [trace];

         // Create plot using Plotly
         Plotly.newPlot("bar", plotdata, layout);

      
   });
};

