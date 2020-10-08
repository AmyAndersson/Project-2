
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
          var state = ACT;  
      case "WA":
         var READDATA =d3.csv("data/cleaned_WA.csv") ;
         var state = WA;  
      case "TAS":
         var READDATA =d3.csv("data/cleaned_TAS.csv") ;
         var state = TAS;       
      case "NSW":
         var READDATA =d3.csv("data/cleaned_NSW.csv") ;
         var state = NSW;     
      case "VIC":
         var READDATA =d3.csv("data/cleaned_VIC.csv") ;
         var state = VIC;   
      case "QLD":
         var READDATA =d3.csv("data/cleaned_QLD.csv") ;
         var state = QLD;   
      case "NT":
         var READDATA =d3.csv("data/cleaned_NT.csv") ;
         var state = NT; 
      case "SA":
         var READDATA =d3.csv("data/cleaned_SA.csv") ;
         var state = SA;                            
   }

   READDATA.then((data) => {

   
      var Endangered_count = 0
      var Crit_end_count = 0
      var Extinct_count = 0 
      var Vul_count = 0 
      var Extinct_wild_count = 0 
      var Con_dep_count = 0 
      
      data.forEach(function(d){
      var status =d.Threatened_Status;
   
      
      // status_list.push(status);
      // name_list.push(name);
      
      switch(status) { 
         case "Endangered":
            Endangered_count = Endangered_count+1;  
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
          title: `Threatened status of Austalian Plants and Animals in ${State}`,
          xaxis: { title: "Threatened status" },
          yaxis: { title: "Number" }
        };
        
        // Plot the chart to a div tag with id "bar-plot"
        Plotly.newPlot("scatter", data, layout);
             
      }); 









