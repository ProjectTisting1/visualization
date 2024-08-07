const dscc = require('@google/dscc');
const d3 = require('d3');

dscc.subscribeToData(data => {
    const circle = d3.select("#data-circle");

    // Assuming data includes a color value for the circle
    const color = data.tables.DEFAULT[0].color;

    circle.attr("fill", color);

    // Additional logic to handle more shapes/images and data binding
}, {transform: dscc.objectTransform});
