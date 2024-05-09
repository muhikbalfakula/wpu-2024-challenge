// day 17/366
// link challenge: 

const areaOrPerimeter = function(l, w) {
    if(l === w) {return l * w} else {return 2*l + 2*w};
}

console.log(areaOrPerimeter(6,10));