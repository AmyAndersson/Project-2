# THE DATA DIVERS
## Project-2

## Endangered Species in Australia


![Quoll](images/quoll.jpg)


## Proposal: 
Using Environmental data from Australian Government databases and websites to map the location and status of endangered fauna and animals in different conservation zones. Conservation zones are from the [Department of Agriculture](https://data.gov.au/data/dataset/conservation-management-zones-of-australia). 

## Requirements: 

![requirements](images/requirements.png) 


## Methodology: 

1. Created HTML and CSS files with layouts and stylings that will hold our visualisations. This included several pages, dashboard creation and the inclusion of the picture carousel. 

2. Searched and collected data from many different governmental and evironmental sources. 

3. Cleaned the data using Panda's, dropping any columns which had data that is not useful for visualising.

4. Created our SQL database and imported data into our postgres database.

5. Used our Flask app to connect to our database and deliver data to HTML in json format. 

6. Javascript files interact with our data ( via flask) and create visualisations.

7. FInally, JS is linked into our html and CSS to format the visualisation and present




## Tasks: 

Bonner: Flask App 

Kirstie: HTML 

Conor: Map and map overlays 

Amy: Visualisations




## Datasets: 

The external location of our datasets are here: 

[Data1](https://services.slip.wa.gov.au/public/rest/services/SLIP_Public_Services/Environment/MapServer/23?f=pjson)

[Data2](https://data.gov.au/data/dataset/threatened-species-state-lists)

[Data3](https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/)

[Data4](http://www.environment.gov.au/cgi-bin/sprat/public/publicreports.pl?proc=species)

[Data5](https://www.environment.gov.au/sprat-public/action/report)


<hr>


# Results 

This project was created using the following:<br>
* Flask
* Mapbox
* D3
* JavaScript
* Bootstrap
* HTML
* CSS
* Leaflet
* Owl Carousel
* Google Fonts 
* Animate.css


<br>
## Our Homepage: <br>

![homepage](images/homepage2.png)<br>

with our carousel.. here is a second view: <br>

![homepage2](images/HOMEPAGE.png)<br>

## Visualisations 

### Clorepleth map: 
See where endandered, vulnerable and critically endangered plants and animals occur across Australia.

![map](images/EndangeredMap.png)<br>

### Bubble Chart: 

See the amount of plants and animals in Australia by threatened status! 

![index](images/bubble.png)<br>

 ### Bar Chart: 

See the amount of plants and animals in Australia by threatened status! This bar chart can be filtered by state!<br>

![bar](images/Bar.PNG)<br>

 ### Radar Chart: 

See the amount of plants and animals in Australia by threatened status! This chart allows you to easily see weighting of threatened status. Are there more endangered species, or extinct species?! This plot also distinguishes between plants and animals.  This radar chart can be filtered by state!<br>

![radar](images/Radar.PNG)<br>



