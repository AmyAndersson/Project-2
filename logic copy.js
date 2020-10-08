
d3.csv("data/spcs_cleaned.csv").then(function(species) {


   console.log(species);

   var Endangered_count = 0
   var Crit_end_count = 0
   var Extinct_count = 0 
   var Vul_count = 0 
   var Extinct_wild_count = 0 
   var Con_dep_count = 0 
   
   species.forEach(function(specie){
   var status =specie.Threatened_Status;

   
   // status_list.push(status);
   // name_list.push(name);
   
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
          
   }); 

   / Create location list 
   var locationList = ["ACT", "NT", "QLD", "SA", "TAS", "VIC", "WA"]
   // Populate dropbox with ID Values - ID Values come from Location List
   
   d3.selectAll("#selDataset").on("change", optionChanged);
   
   
   locationList.forEach((location) => {
      var dropdownMenu = d3.select("#selDataset");
      var newoption = dropdownMenu.append("option");
      newoption.attr("value", location);
      newoption.text(location);
      selectedState = dropdownMenu.node().value;
   });   

   switch(selectedState) { 
      case "ACT":
          var READDATA =d3.csv("data/cleaned_ACT.csv") ; 
      case "WA":
         var READDATA =d3.csv("data/cleaned_WA.csv") ; 
      case "TAS":
         var READDATA =d3.csv("data/cleaned_TAS.csv") ;      
      case "NSW":
         var READDATA =d3.csv("data/cleaned_NSW.csv") ;    
      case "VIC":
         var READDATA =d3.csv("data/cleaned_VIC.csv") ;  
      case "QLD":
         var READDATA =d3.csv("data/cleaned_QLD.csv") ;  
      case "NT":
         var READDATA =d3.csv("data/cleaned_NT.csv") ; 
      case "SA":
         var READDATA =d3.csv("data/cleaned_SA.csv") ;                           
   }

   d3.csv("data/spcs_cleaned.csv").then((data) => {
      //    var dropdownMenu = d3.select("#selDataset");
      //    selectedState = dropdownMenu.node().value;
         // console.log(data)
      data.forEach((d) => {
   
         if (d.selectedState === "Yes"){
   
         var Endangered_count = 0
         var Crit_end_count = 0
         var Extinct_count = 0 
         var Vul_count = 0 
         var Extinct_wild_count = 0 
         var Con_dep_count = 0 
   
         var status = d.Threatened_Status; 
   
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
               };
            }
         
          
         y_axis = [
                  Endangered_count,
                  Crit_end_count,
                  Vul_count,
                  Extinct_count,
                  Extinct_wild_count,
                  Con_dep_count,
               ],
         x_axis = [
                  "Endangered",
                  "Critically Endangered",
                  "Vulnerable",
                  "Extinct",
                  "Extinct In Wild",
                  "Conservation Dependent",
               ]; 
               // Create the trace for plotting
               var trace = {
                  x: x_axis,
                  y: y_axis,
                  type: "bar",
               };
               // Define the plot layout
               var layout = {
                 title: `Threatened status of Austalian Plants and Animals in ${selectedState}`,
                 xaxis: { title: "Threatened Status" },
                 yaxis: { title: "Count" },
               };
               // Define the data
               var plotdata = [trace];
               // Create plot using Plotly
               Plotly.newPlot("scatter", plotdata, layout);
            })
         });




















// Create global variables
var selectedState;

var location;
var commonname;
// Create location list 
var locationList = ["ACT", "NT", "QLD", "SA", "TAS", "VIC", "WA"]
// Populate dropbox with ID Values - ID Values come from Location List

d3.selectAll("#selDataset").on("change", optionChanged);


locationList.forEach((location) => {
   var dropdownMenu = d3.select("#selDataset");
   var newoption = dropdownMenu.append("option");
   newoption.attr("value", location);
   newoption.text(location);
   selectedState = dropdownMenu.node().value;
});   
// Run the optionChanged function on the default ID to load when the page is first opened
// var defaultState = "ACT"
// optionChanged(defaultState);
// Create a function to change demographics table and all charts based on selected ID
function optionChanged(selectedState) {
         barchart(selectedState);
};
// Create a function to populate the Bar Chart based on selected State
function barchart(selectedState) {
   d3.csv("data/spcs_cleaned.csv").then((data) => {
   //    var dropdownMenu = d3.select("#selDataset");
   //    selectedState = dropdownMenu.node().value;
      // console.log(data)
   data.forEach((d) => {

      if (d.selectedState === "Yes"){

      var Endangered_count = 0
      var Crit_end_count = 0
      var Extinct_count = 0 
      var Vul_count = 0 
      var Extinct_wild_count = 0 
      var Con_dep_count = 0 

      var status = d.Threatened_Status; 

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
            };
         }
      
       
      y_axis = [
               Endangered_count,
               Crit_end_count,
               Vul_count,
               Extinct_count,
               Extinct_wild_count,
               Con_dep_count,
            ],
      x_axis = [
               "Endangered",
               "Critically Endangered",
               "Vulnerable",
               "Extinct",
               "Extinct In Wild",
               "Conservation Dependent",
            ]; 
            // Create the trace for plotting
            var trace = {
               x: x_axis,
               y: y_axis,
               type: "bar",
            };
            // Define the plot layout
            var layout = {
              title: `Threatened status of Austalian Plants and Animals in ${selectedState}`,
              xaxis: { title: "Threatened Status" },
              yaxis: { title: "Count" },
            };
            // Define the data
            var plotdata = [trace];
            // Create plot using Plotly
            Plotly.newPlot("scatter", plotdata, layout);
         })
      });
   }
