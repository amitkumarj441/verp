/*
 *
 * File  : circle.js
 * Author: Cagatay Demiralp (cagatay)
 * Desc  :
 *
 * 	Example:
 *
 * Date    : Mon Jan  5 00:44:44 2015
 *
 */

var circle = function(){

    var width = 256,
        height = 256,
        xScale = d3.scale.linear()
            .domain([0, width])
            .range([0, width]),
        yScale =  d3.scale.linear()
            .domain([0, height])
            .range([0, height]),
        color =  d3.scale.category10(),
        listeners=[],
        svg;


    function _circle(s, d){

        svg = s.append('svg')
            .attr('width', width)
            .attr('height', height);

        var circles = svg.selectAll('circle')
            .data(d)
            .enter()
            .append('circle');

        appendListeners(circles);

        draw();
    }


    function updateBinding(d){

        //update selection
        var s = svg.selectAll('circle')
            .data(d);

        var newcircles  = s.enter()
            .append('circle');

        appendListeners(newcircles);

        s.exit()
            .remove();

    }


    function draw(){

        svg.selectAll('circle')
            .attr('cx', function(d){ return xScale(d.pos[0]);})
            .attr('cy', function(d){ return yScale(d.pos[1]);})
            .attr('r', 20)
            .style('fill', function(d,i){return color(i);})

    }


    function appendListeners(s){

        for (var event in listeners)
            if (listeners.hasOwnProperty(event))
                s.on(event,listeners[event]);


    };



    _circle.update = function(_){

        if(arguments.length) {
            updateBinding(_);
            draw();
        } else {
            draw();
        }

    };


    _circle.width = function(_){

        if(!arguments.length) return width;

        width = _;

        return _circle;

    };


    _circle.height = function(_){

        if(!arguments.length) return height;

        height = _;

        return  _circle;

    };


    _circle.xScale = function(_){


        if(!arguments.length) return xScale;

        xScale = _;

        return  _circle;



    };



    _circle.yScale = function(_){

        if(!arguments.length) return yScale;

        yScale = _;

        return  _circle;

    };


    _circle.on  = function(event, handler){

        if(arguments.length === 0)
            return listeners;
        else if(arguments.length === 1)
            return listeners[event];

        listeners[event] = handler;

        return _circle;

    };

    return _circle;

};

