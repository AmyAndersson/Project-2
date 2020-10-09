// Create a function to populate the Bar Chart based on selected State
function Bubblechart() {
  d3.csv("data/spcs_cleaned.csv").then((data) => {
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
      //  
      
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
    var_NSW_x = [
      Endangered_count,
      Crit_end_count,
      Vul_count,
      Extinct_count,
      Extinct_wild_count,
      Con_dep_count,
    ];
     }

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
  var_TAS_x = [
    Endangered_count,
    Crit_end_count,
    Vul_count,
    Extinct_count,
    Extinct_wild_count,
    Con_dep_count,
  ];
   }
      
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
         x: x_axis,
         y: y_axis,
         // text: y_axis,
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
         sliders: [{
          pad: {t: 30},
          currentvalue: {
            xanchor: 'right',
            prefix: 'color: ',
            font: {
              color: '#888',
              size: 20
            }
          },
          steps: [{
            label: 'NSW',
            method: 'restyle',
            args: ['line.color', 'red']
          }, {
            label: 'green',
            method: 'restyle',
            args: ['line.color', 'green']
          }, {
            label: 'blue',
            method: 'restyle',
            args: ['line.color', 'blue']
          }]
        }]
       };
       // Define the data
       var plotdata = [trace];
       // Create plot using Plotly
       Plotly.newPlot("scatter", plotdata, layout);
   });
};
Bubblechart()



