function createGraph()
{
   console.log("--- returning graph from createGraph.js")

    let graph =
        [{"data": {"id": "sahlins", "label": "Sahlins"}},{"data": {"id": "sahlins-western-illusion", "label": "Western Illusion"}},{"data": {"id": "imprinting", "label": "Imprinting"}},{"data": {"id": "butler", "label": "Judith Butler"}},{"data": {"id": "butler-gender-trouble", "label": "Gender Trouble"}},{"data": {"id": "e0", "source": "imprinting", "target": "butler-gender-trouble", "edgeType": "child"}},{"data": {"id": "e2", "source": "imprinting", "target": "sahlins-western-illusion", "edgeType": "child"}},{"data": {"id": "e3", "source": "sahlins", "target": "sahlins-western-illusion", "edgeType": "child"}},{"data": {"id": "e4", "source": "butler", "target": "butler-gender-trouble", "edgeType": "child"}}]


   return(graph)

} // createGraph
//--------------------------------------------------------------------------------
function getNodeStyles()
{
   let nodeStyles =
       [{"selector": "#sahlins", "style": {"label": "Sahlins", "background-fit": "cover", "background-image": "http://localhost:8000/sahlins.jpeg", "shape": "roundrectangle", "border-width": 1, "font-size": 48, "height": 500, "width": 300, "text-valign": "top"}},{"selector": "#sahlins-western-illusion", "style": {"label": "Western Illusion", "shape": "roundrectangle", "border-width": 1, "font-size": 48, "height": 200, "text-halign": "center", "border-color": "gray", "width": 600, "text-valign": "center", "background-color": "beige"}},{"selector": "#imprinting", "style": {"label": "Imprinting", "shape": "roundrectangle", "border-width": 1, "font-size": 64, "height": 150, "text-halign": "center", "border-color": "gray", "width": 400, "text-valign": "center", "background-color": "white"}},{"selector": "#butler", "style": {"label": "Judith Butler", "shape": "roundrectangle", "border-width": 1, "height": 100, "fontSize": 48, "border-color": "gray", "text-halign": "center", "width": 300, "text-valign": "center", "background-color": "beige"}},{"selector": "#butler-gender-trouble", "style": {"label": "Gender Trouble", "background-fit": "cover", "background-image": "http://localhost:8000/genderTrouble.png", "shape": "roundrectangle", "border-width": 1, "height": 600, "fontSize": 48, "border-color": "gray", "text-halign": "top", "width": 800, "text-valign": "center", "background-color": "beige"}}]


    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
