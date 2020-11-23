const DUMMY_DATA = [
    {
        id:'1',value:10,region:'USA'
    },
    {
        id:'2',value:13,region:'DZ'
    },
    {
        id:'3',value:11,region:'EGY'
    },
    {
        id:'3',value:13,region:'MAR'
    },
    {
        id:'4',value:10,region:'UK'
    },
]

var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },


// the O point in d3 js by default is positioned in the top left, so when making ranger we start from the biggest value 
//to the least value 

 xScale = d3.scaleBand().domain(DUMMY_DATA.map(e=>e.region)).rangeRound([0,250]).paddingInner(0.1);
 yScale = d3.scaleLinear().domain([0,15]).range([200,0]);




const container  = d3.select('svg')
.classed('container',true);

//add new eleemtns 

//amke sure that eleùtns with .bar havre thje container class set in container variable 
const bars = container
.selectAll('.bar')
.data(DUMMY_DATA)
.enter()
.append('rect')
.classed('bar',true)    
.attr('width', xScale.bandwidth())
.attr('height',data=>200 - yScale(data.value) )
.attr('x', data=> xScale(data.region))
.attr('y',data=>yScale(data.value) );



xScale1 = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000,2010])
yScale1 = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215])

//create axes.
xAxis = d3.axisBottom()
    .scale(xScale1),
  
yAxis = d3.axisTop()
    .scale(yScale1);

    
vis.append("svg:g")
    .call(xAxis);