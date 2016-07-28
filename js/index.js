/*
var width = 930,
    height = 500;

var projection = d3.geo.mercator()
    .translate([-1600, 1980]) // horizontal and vertical
    .scale(2800);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("world-topo-min.json", function(error, topology) {

// load and display the cities
d3.csv("isis-iraq.csv", function(data) {
    svg.selectAll("circle")
       .data(data)
       .enter()
       .append("circle") 
       .attr("cx", function(d) {
               return projection([d.lon, d.lat])[0];
       })
       .attr("cy", function(d) {
               return projection([d.lon, d.lat])[1];
       })
       .attr("r", 3)
       .style("fill", "red")
       .style("stroke", "black");
});

//color-coordinate the refugee countries???
//label the countries using AI2HTML??

//this projects everything
g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)
});
*/