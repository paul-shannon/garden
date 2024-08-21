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
            },{"selector": "#sahlins", "style": {"border-color": "blue", "background-fit": "cover", "text-valign": "top", "shape": "roundrectangle", "label": "Sahlins", "font-size": 32, "background-image": "http://localhost:8002/img/sahlins.jpeg", "width": 300, "height": 500}},{"selector": "#imprinting", "style": {"border-color": "blue", "label": "Imprinting", "shape": "roundrectangle", "border-width": 1, "background-color": "beige", "font-size": 48, "width": 200, "height": 200}},{"selector": "#conradLorenz", "style": {"border-color": "blue", "label": "Lorenz", "shape": "roundrectangle", "border-width": 1, "background-color": "beige", "font-size": 48, "width": 200, "height": 200}},{"selector": "#geese", "style": {"border-color": "red", "text-valign": "center", "shape": "roundrectangle", "border-width": 1, "label": "Geese", "background-color": "white", "text-halign": "center", "font-size": 48, "width": 200, "height": 50}},{"selector": "#butler", "style": {"border-color": "black", "text-valign": "center", "shape": "roundrectangle", "label": "Judith Butler", "border-width": 1, "background-color": "beige", "text-halign": "center", "width": 200, "fontSize": 32, "color": "blue", "height": 100}}]


    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
