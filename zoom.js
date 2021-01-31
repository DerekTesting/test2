let panZoomTiger = svgPanZoom('.svg');

//   panZoomTiger.zoomAtPointBy(5.3, {x: 50, y: 50})

document.addEventListener("DOMContentLoaded", function(event) {
    svgPanZoom('#demo-tiger', {
        minZoom: 0.5
    , maxZoom: 10 
    });
});