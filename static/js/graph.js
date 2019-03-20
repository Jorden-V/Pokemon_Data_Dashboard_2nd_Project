queue()
    .defer(d3.csv, "data/performance.csv") //add data filepath here
    .await(makeGraphs);
    
function makeGraphs (error, performance) { //add data filename here
    var ndx = crossfilter(performance); // add same filename as above in here
    
    #(ndx); //graph name in place of #
    
    dc.renderAll();
}