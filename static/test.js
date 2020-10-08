var api_url = "localhost:5000/dataone"

d3.json(api_url).then((imported)=>{
    //sample= imported.scientific_name;
    console.log(imported);
});
