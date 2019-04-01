queue()
    .defer(d3.csv, "data/Pokemonv2.csv")
    .await(makeGraphs);

function makeGraphs(error, pokedata) {

    var ndx = crossfilter(pokedata);
    pokemon_selector(ndx);
    show_pokemon_type(ndx);
    show_pokemon_gen(ndx);
    show_legendary_pokemon(ndx);
    show_total_pokemon_volume(ndx);
    show_pokemon_color(ndx);
    show_pokemon_height(ndx);
    show_pokemon_weight(ndx);
    show_pokemon_stats(ndx);
    dc.renderAll();
}

function pokemon_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('name'));
    var group = dim.group();

    dc.selectMenu("#select-pokemon")
        .dimension(dim)
        .group(group);
}

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

function show_pokemon_gen(ndx) {
    var genDim = ndx.dimension(dc.pluck('generation'));
    var genGroup = genDim.group();
    dc.pieChart('#pokemon-gen-type')
        .height(330)
        .radius(90)
        .useViewBoxResizing(true)
        .transitionDuration(1500)
        .dimension(genDim)
        .group(genGroup);
}

function show_legendary_pokemon(ndx) {
    var legendaryDim = ndx.dimension(dc.pluck('legendary'));
    var legendaryGroup = legendaryDim.group();
    dc.pieChart('#legendary-pokemon')
        .height(330)
        .radius(90)
        .useViewBoxResizing(true)
        .transitionDuration(1500)
        .dimension(legendaryDim)
        .group(legendaryGroup);
}

function show_total_pokemon_volume(ndx) {
    var totalPokemonGroup = ndx.groupAll('#');
    dc.numberDisplay("#pokemon-volume")
        .formatNumber(d3.format("d"))
        .valueAccessor(function(d) {
            return (+d);
        })
        .group(totalPokemonGroup);
}

function show_pokemon_color(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['blue', 'brown', 'purple', 'green', '#fffafa', 'grey', 'yellow', 'red', 'pink', 'orange', 'black', 'gold']);
    var colorDim = ndx.dimension(dc.pluck('color'));
    var colorGroup = colorDim.group();
    dc.pieChart('#pokemon-color')
        .height(330)
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

function show_pokemon_height(ndx) {
    var chartColors = d3.scale.ordinal()
        .range(['#ffdb58', '#4169e1']);
    var heightDim = ndx.dimension(function(d) {
        switch (true) {
            case (d.height == 0):
                return "0m";
            case (d.height < 10):
                return "0m to 10 feet";
            case (d.height < 20):
                return "10 to 20 feet";
            case (d.height < 30):
                return "20 to 30 feet";
            case (d.height >= 30):
                return "Over 30 feet";
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
