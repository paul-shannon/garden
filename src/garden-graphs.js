let graphsData = [{"title": "Ruyer", "elements": [{"data": {"id": "raymond-ruyer", "label": "Raymond Ruyer"}, "position": {"x": 181.01452481129607, "y": -850.4588342227814}}, {"data": {"id": "battleOfFrance", "label": "Battle of France"}, "position": {"x": 199.1134420751446, "y": -418.6622711409671}}, {"data": {"id": "university-in-captivity", "label": "Universit\u00e9 en Captivit\u00e9"}, "position": {"x": 411.29078901414556, "y": 66.52244792030544}}, {"data": {"id": "etienne-wolff", "label": "Etienne Wolff"}, "position": {"x": 795.8617988736966, "y": -791.5137820786937}}, {"data": {"id": "neofinalism", "label": "Neofinalixm"}, "position": {"x": 385.00591763716744, "y": 572.7360758238858}}, {"data": {"id": "raymond-ruyer-battleOfFrance", "source": "raymond-ruyer", "target": "battleOfFrance", "edgeType": "child"}}, {"data": {"id": "battleOfFrance-university-in-captivity", "source": "battleOfFrance", "target": "university-in-captivity", "edgeType": "child"}}, {"data": {"id": "etienne-wolff-university-in-captivity", "source": "etienne-wolff", "target": "university-in-captivity", "edgeType": "child"}}, {"data": {"id": "university-in-captivity-neofinalism", "source": "university-in-captivity", "target": "neofinalism", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 8, "curve-style": "bezier", "line-color": "green", "target-arrow-color": "black", "arrow-scale": 3, "target-arrow-shape": "triangle"}}, {"selector": "edge:selected", "style": {"width": 14, "line-color": "red"}}, {"selector": "#raymond-ruyer", "style": {"font-size": 48, "background-fit": "cover", "height": 500, "border-color": "blue", "shape": "roundrectangle", "label": "Raymond Ruyer", "text-valign": "top", "background-image": "img/raymond-ruyer.png", "width": 300}}, {"selector": "#battleOfFrance", "style": {"background-color": "white", "border-width": 2, "font-size": 48, "height": 80, "border-color": "blue", "shape": "roundrectangle", "label": "Battle of France", "text-valign": "center", "width": 400}}, {"selector": "#university-in-captivity", "style": {"font-size": 48, "background-fit": "cover", "height": 400, "border-color": "blue", "shape": "roundrectangle", "label": "Universit\u00e9 en Captivit\u00e9", "text-valign": "bottom", "background-image": "img/oflag17a.png", "width": 700}}, {"selector": "#etienne-wolff", "style": {"font-size": 48, "background-fit": "cover", "height": 500, "border-color": "blue", "shape": "roundrectangle", "label": "Etienne Wolff", "text-valign": "top", "background-image": "img/fateMapNeuralCrest.png", "width": 300}}, {"selector": "#neofinalism", "style": {"border-width": 2, "font-size": 48, "height": 80, "border-color": "blue", "shape": "roundrectangle", "label": "Neofinalixm", "text-valign": "center", "width": 400}}, {"selector": "node:selected", "style": {"border-width": 8, "border-color": "red"}}], "zoom": 0.3141130194220659, "pan": {"x": 107.05105999924294, "y": 393.1433423875426}}]

//--------------------------------------------------------------------------------
function getGraphs()
{
    return(graphsData)
    
} // getGraphs
//--------------------------------------------------------------------------------
function getZoom()
{
    return(graphsData["zoom"])
    
} // getGraphs
//--------------------------------------------------------------------------------
function getPan()
{
    return(graphsData["pan"])
    
} // getGraphs
//--------------------------------------------------------------------------------
export {getGraphs, getZoom, getPan}

