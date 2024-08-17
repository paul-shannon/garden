function createGraph()
{
   console.log("--- returning graph from createGraph.js")

    let graph =
        [{"data": {"id": "sahlins", "label": "Sahlins"}},{"data": {"id": "imprinting", "label": "Imprinting"}},{"data": {"id": "conradLorenz", "label": "Lorenz"}},{"data": {"id": "geese", "label": "Geese", "parent": "conradLorenz"}},{"data": {"id": "butler", "label": "Judith Butler"}},{"data": {"id": "e1", "source": "imprinting", "target": "butler", "edgeType": "child"}},{"data": {"id": "e2", "source": "imprinting", "target": "sahlins", "edgeType": "child"}},{"data": {"id": "e3", "source": "imprinting", "target": "conradLorenz", "edgeType": "child"}}]


   return(graph)

} // createGraph
//--------------------------------------------------------------------------------
function getNodeStyles()
{
   let nodeStyles =
       [{"selector": "edge",
              "style": {
                    "width": 3,
                    "curve-style": "bezier",
                    "line-color": "black",
                    "target-arrow-color": "black",
                    "arrow-scale": 1,
                    "target-arrow-shape": "triangle"
                }
            },{"selector": "#sahlins", "style": {"width": 300, "background-fit": "cover", "background-image": "http://localhost:8002/img/sahlins.jpeg", "text-valign": "top", "label": "Sahlins", "font-size": 32, "border-color": "blue", "shape": "roundrectangle", "height": 500}},{"selector": "#imprinting", "style": {"width": 200, "label": "Imprinting", "background-color": "beige", "border-color": "blue", "border-width": 1, "font-size": 48, "shape": "roundrectangle", "height": 200}},{"selector": "#conradLorenz", "style": {"width": 200, "label": "Lorenz", "background-color": "beige", "border-color": "blue", "border-width": 1, "font-size": 48, "shape": "roundrectangle", "height": 200}},{"selector": "#geese", "style": {"width": 200, "text-valign": "center", "label": "Geese", "background-color": "white", "border-color": "red", "border-width": 1, "font-size": 48, "shape": "roundrectangle", "height": 50, "text-halign": "center"}},{"selector": "#butler", "style": {"fontSize": 32, "width": 200, "height": 100, "text-valign": "center", "label": "Judith Butler", "background-color": "beige", "border-color": "black", "border-width": 1, "shape": "roundrectangle", "color": "blue", "text-halign": "center"}}]


    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
