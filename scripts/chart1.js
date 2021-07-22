charts.chart1 = function() {

var margin = {top: 50, right: 20, bottom: 50, left: 60};
var width = 600;
var height = 400;

var svg = d3.select("svg")
    .attr("width", width + 2* margin)
    .attr("height", height + 2*margin)
  .append("g")
    .attr("transform",
          "translate(" + margin + "," + margin + ")");

d3.csv("data/Database1990.csv", function(data) {

// Add X axis		  
var x = d3.scaleLinear()
    .domain([20, 5000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
	
// Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

})

}