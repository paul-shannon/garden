function createGraph()
{
   console.log("--- returning graph from createGraph.js")

   let graph = [{"data": {"id": "sahlins", "label": "Sahlins"}},{"data": {"id": "sahlins-western-illusion", "label": "Western Illusion"}},{"data": {"id": "imprinting", "label": "Imprinting"}},{"data": {"id": "butler", "label": "Judith Butler"}},{"data": {"id": "butler-gender-trouble", "label": "Gender Trouble"}},{"data": {"id": "e0", "source": "imprinting", "target": "butler-gender-trouble", "edgeType": "child"}},{"data": {"id": "e2", "source": "imprinting", "target": "sahlins-western-illusion", "edgeType": "child"}},{"data": {"id": "e3", "source": "sahlins", "target": "sahlins-western-illusion", "edgeType": "child"}},{"data": {"id": "e4", "source": "butler", "target": "butler-gender-trouble", "edgeType": "child"}}]

   return(graph)

} // createGraph
//--------------------------------------------------------------------------------
function getNodeStyles()
{
   let nodeStyles =
        [{"selector": "#sahlins", "style": {"border-width": 1, "font-size": 48, "label": "Sahlins", "shape": "roundrectangle", "width": 300, "background-image": "http://localhost:8000/sahlins.jpeg", "text-valign": "top", "height": 500, "background-fit": "cover"}},
         {"selector": "#sahlins-western-illusion", "style": {"border-width": 1, "font-size": 48, "label": "Western Illusion", "shape": "roundrectangle", "width": 600, "background-color": "beige", "text-halign": "center", "text-valign": "center", "border-color": "gray", "height": 200}},
         {"selector": "#imprinting", "style": {"border-width": 1, "font-size": 64, "label": "Imprinting", "shape": "roundrectangle", "width": 400, "background-color": "white", "text-halign": "center", "text-valign": "center", "border-color": "gray", "height": 150}},
         {"selector": "#butler", "style": {"border-width": 1, "fontSize": 48, "label": "Judith Butler", "shape": "roundrectangle", "width": 300, "background-color": "beige", "text-halign": "center", "text-valign": "center", "border-color": "gray", "height": 100}},
         {"selector": "#butler-gender-trouble", "style": {"border-width": 1, "fontSize": 48, "label": "Gender Trouble", "shape": "roundrectangle", "width": 800, "background-color": "beige", "text-halign": "top", "background-image": "http://localhost:8000/genderTrouble.png", "text-valign": "center", "border-color": "gray", "height": 600, "background-fit": "cover"}}]

    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
