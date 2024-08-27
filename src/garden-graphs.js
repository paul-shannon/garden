let graphsData = [{"title": "Two", "elements": [{"data": {"id": "one", "label": "One"}, "position": {"x": 1, "y": 1}}, {"data": {"id": "two", "label": "Two"}, "position": {"x": 1000, "y": 1000}}], "styles": [{"selector": "edge", "style": {"width": 8, "curve-style": "bezier", "line-color": "green", "target-arrow-color": "black", "arrow-scale": 3, "target-arrow-shape": "triangle"}}, {"selector": "edge:selected", "style": {"width": 14, "line-color": "red"}}, {"selector": "#one", "style": {"width": 300, "label": "One", "height": 500, "background-color": "beige", "shape": "roundrectangle", "font-size": 32, "border-color": "blue", "text-valign": "center"}}, {"selector": "#two", "style": {"width": 500, "label": "Two", "height": 300, "background-color": "beige", "shape": "roundrectangle", "font-size": 32, "border-color": "blue", "text-valign": "center"}}, {"selector": "node:selected", "style": {"border-width": 8, "border-color": "red"}}], "locs": {"one": {"x": 1, "y": 1}, "two": {"x": 1000, "y": 1000}}}]

//--------------------------------------------------------------------------------
function getGraphs()
{
    return(graphsData)
    
} // getGraphs
//--------------------------------------------------------------------------------
export {getGraphs}

