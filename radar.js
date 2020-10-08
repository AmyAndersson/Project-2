
   data = [
    {
    type: 'scatterpolar',
    r: [196, 566, 38, 608],
    theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
    fill: 'toself',
    name: 'Plants'
    },
    {
    type: 'scatterpolar',
    r: [91, 179, 53, 216],
    theta: ['Critically Endangered','Endangered','Extinct', 'Vunerable'],
    fill: 'toself',
    name: 'Animals'
    }
  ]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 600]
      }
    }
  }
  
  Plotly.newPlot("scatter", data, layout)