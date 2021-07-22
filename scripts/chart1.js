<script>

var margin = {top: 50, right: 20, bottom: 50, left: 60};
var width = 600;
var height = 400;

var svg = d3.select("#svg1")
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
    .domain([5, 1950])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));
	
svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.CO2_Emission); } )
      .attr("cy", function (d) { return y(d.TotalEnergy_Consumption); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")  

})

</script>
