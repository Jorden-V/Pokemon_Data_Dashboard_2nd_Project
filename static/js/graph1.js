queue()
    .defer(d3.csv, "data/Pokemonv3.csv")
    .await(makeGraphs);

function makeGraphs(error, pokedata) {

    var ndx = crossfilter(pokedata);
    /* ---------- Pokemon Selector ---------*/
    pokemon_selector(ndx);
    showAttackLevel(ndx);
    /* ---------- Pokemon count ---------*/
    show_total_pokemon_volume(ndx);
    /* ---------- Bar charts ---------*/
    show_pokemon_height(ndx);
    show_pokemon_weight(ndx);
    /* ---------- Row chart ---------*/
    show_pokemon_type(ndx);
    /* ---------- Pie charts ---------*/
    show_pokemon_gen(ndx);
    show_legendary_pokemon(ndx);
    show_pokemon_color(ndx);
    /* ---------- Composite charts ---------*/
    show_pokemon_stats(ndx);
    dc.renderAll();
}

/* ---------- Pokemon Selector ---------*/
function pokemon_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('name'));
    var group = dim.group();

    dc.selectMenu("#select-pokemon")
        .dimension(dim)
        .group(group);
}

/* ---------- Pokemon count ---------*/
function show_total_pokemon_volume(ndx) {
    var totalPokemonGroup = ndx.groupAll('#');
    dc.numberDisplay("#pokemon-volume")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(totalPokemonGroup);
}

function showAttackLevel(ndx) {
    var attackLevel = ndx.groupAll().reduceSum(dc.pluck("attack"));
    dc.numberDisplay("#showAttackLevel")
    .formatNumber(d3.format("d"))
        .valueAccessor(function (d) {
            return d;
        })
        .group(attackLevel)
        .formatNumber(d3.format(".2s"));
}



/* ---------- Bar charts ---------*/

/* ---------- Height bar chart ---------*/
function show_pokemon_height(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['#ffdb58', '#4169e1']);
    var heightDim = ndx.dimension(function(d) {
        switch (true) {
            case (d.height == 0):
                return "0m";
            case (d.height < 5):
                return "0m to 5 feet";
            case (d.height < 15):
                return "5 to 15 feet";
            case (d.height < 25):
                return "15 to 25 feet";
            case (d.height >= 25):
                return "Over 25 feet";
        }
    });
    var heightGroup = heightDim.group();
    dc.barChart('#pokemon-height')
        .width(500)
        .height(350)
        .margins({ top: 15, right: 40, bottom: 40, left: 40 })
        .dimension(heightDim)
        .group(heightGroup)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(chartColors)
        .elasticY(true)
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Height')
        .yAxis().ticks(4);
}

/* ---------- Weight bar chart ---------*/
function show_pokemon_weight(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['#ffdb58', '#4169e1']);
    var weightDim = ndx.dimension(function(d) {
        switch (true) {
            case (d.weight == 0):
                return "0m";
            case (d.weight < 50):
                return "0m to 50 lbs";
            case (d.weight < 150):
                return "50 to 150 lbs";
            case (d.weight < 250):
                return "150 to 250 lbs";
            case (d.weight >= 250):
                return "Over 250 lbs";
        }
    });

    var weightGroup = weightDim.group();
    dc.barChart('#pokemon-weight')
        .width(500)
        .height(350)
        .margins({ top: 15, right: 40, bottom: 40, left: 40 })
        .dimension(weightDim)
        .group(weightGroup)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(chartColors)
        .elasticY(true)
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel('Weight')
        .yAxis().ticks(4);
}

/* ---------- Row chart ---------*/
/* ---------- Type row chart ---------*/
function show_pokemon_type(ndx) {
    var typeDim = ndx.dimension(dc.pluck('type1'));
    var typeGroup = typeDim.group();
    dc.rowChart('#pokemon-type')
        .width(900)
        .height(400)
        .margins({ top: 10, right: 20, bottom: 40, left: 20 })
        .dimension(typeDim)
        .group(typeGroup)
        .label(function(d) {
            return d.key + " - " + d.value;
        })
        .useViewBoxResizing(true)
        .transitionDuration(500)
        .transitionDuration(500);
}

/* ---------- Pie charts ---------*/
/* ---------- Generation pie chart ---------*/
function show_pokemon_gen(ndx) {
    var genDim = ndx.dimension(dc.pluck('generation'));
    var genGroup = genDim.group();
    dc.pieChart('#pokemon-gen-type')
        .height(300)
        .radius(90)
        .useViewBoxResizing(true)
        .transitionDuration(1500)
        .dimension(genDim)
        .group(genGroup);
}

/* ---------- Legendary pie chart ---------*/
function show_legendary_pokemon(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['red', 'green']);
    var legendaryDim = ndx.dimension(dc.pluck('legendary'));
    var legendaryGroup = legendaryDim.group();
    dc.pieChart('#legendary-pokemon')
        .height(300)
        .radius(90)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(chartColors)
        .externalLabels(30)
        .drawPaths(true)
        .useViewBoxResizing(true)
        .transitionDuration(1500)
        .dimension(legendaryDim)
        .group(legendaryGroup);
}

/* ---------- Color pie chart ---------*/
function show_pokemon_color(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['blue', 'brown', 'purple', 'green', '#fffafa', 'grey', 'yellow', 'red', 'pink', 'orange', 'black', 'gold']);
    var colorDim = ndx.dimension(dc.pluck('color'));
    var colorGroup = colorDim.group();
    dc.pieChart('#pokemon-color')
        .height(300)
        .radius(90)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(chartColors)
        .externalLabels(30)
        .drawPaths(true)
        .minAngleForLabel(0)
        .cap(9)
        .useViewBoxResizing(true)
        .transitionDuration(1500)
        .dimension(colorDim)
        .group(colorGroup);
}


/* ---------- Composite charts ---------*/
/* ---------- Pokemon stats chart ---------*/
function show_pokemon_stats(ndx) {

    var attackDim = ndx.dimension(dc.pluck('attack'));
    var attackGroup = attackDim.group();
    var defenceDim = ndx.dimension(dc.pluck('defence'));
    var defenceGroup = defenceDim.group();
    var spatkDim = ndx.dimension(dc.pluck('sp atk'));
    var spatkGroup = spatkDim.group();
    var spdefDim = ndx.dimension(dc.pluck('sp def'));
    var spdefGroup = spdefDim.group();
    var speedDim = ndx.dimension(dc.pluck('speed'));
    var speedGroup = speedDim.group();

    var compositeChart = dc.compositeChart('#pokemon-stats');

    compositeChart
        .width(900)
        .height(400)
        .margins({ top: 10, right: 30, bottom: 40, left: 40 })
        .x(d3.scale.linear().domain([0, 250]))
        .xAxisLabel('Attribute Value')
        .yAxisLabel('Frequency')
        .elasticY(true)
        .legend(dc.legend().x(80).y(20).itemHeight(18).gap(5).horizontal(true).autoItemWidth(true))
        .useViewBoxResizing(true)
        .brushOn(false)
        .compose([
            dc.lineChart(compositeChart)
            .colors('red')
            .group(attackGroup, 'Attack'),
            dc.lineChart(compositeChart)
            .colors('yellow')
            .group(defenceGroup, 'Defence'),
            dc.lineChart(compositeChart)
            .colors('orange')
            .group(spatkGroup, 'Special attack'),
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(spdefGroup, 'Special defence'),
            dc.lineChart(compositeChart)
            .colors('purple')
            .group(speedGroup, 'Speed'),

        ]);
}
