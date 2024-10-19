let graphsData = [{"title": "Writing", "elements": [{"data": {"id": "askesis", "label": "ask\u0113sis"}, "position": {"x": -167.62677917272902, "y": -453.3280150975407}}, {"data": {"id": "writing-wrongStory", "label": "In the Wrong Story"}, "position": {"x": 304.0289228894391, "y": -448.0506380793945}}, {"data": {"id": "mother-nature", "label": "'Mother Nature'"}, "position": {"x": -153.23235440969992, "y": -211.7705572178998}}, {"data": {"id": "orthodox-neighbor-inspiration", "label": "Inspiration from\n our Orthodox Neighbors"}, "position": {"x": 315.68356439879443, "y": -330.8644295693122}}, {"data": {"id": "annotated-forest", "label": "The Annotated Forest"}, "position": {"x": -163.62936206525336, "y": -334.7667217279483}}, {"data": {"id": "wordsworth-force", "label": "Wordsworth's force:\nrolling through all things"}, "position": {"x": 307.15439953195187, "y": -212.79260443915618}}], "styles": [{"selector": "edge", "style": {"width": 8, "curve-style": "bezier", "line-color": "green", "target-arrow-color": "black", "arrow-scale": 3, "target-arrow-shape": "triangle"}}, {"selector": "edge:selected", "style": {"width": 14, "line-color": "red"}}, {"selector": "#askesis", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "ask\u0113sis", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 32}}, {"selector": "#writing-wrongStory", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "In the Wrong Story", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 32}}, {"selector": "#mother-nature", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "'Mother Nature'", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 32}}, {"selector": "#orthodox-neighbor-inspiration", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "Inspiration from\n our Orthodox Neighbors", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 32}}, {"selector": "#annotated-forest", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "The Annotated Forest", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 24}}, {"selector": "#wordsworth-force", "style": {"shape": "roundrectangle", "border-width": 1, "background-color": "#f9f9eb", "text-max-width": 1000, "label": "Wordsworth's force:\nrolling through all things", "text-valign": "center", "height": 80, "text-wrap": "wrap", "border-color": "black", "width": 400, "font-size": 32}}, {"selector": "node:selected", "style": {"border-width": 8, "border-color": "red"}}], "zoom": 0.5805821236820548, "pan": {"x": 309.9352357583247, "y": 384.1171546253674}}]

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

