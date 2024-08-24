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
            },{"selector": "#sahlins", "style": {"border-color": "blue", "shape": "roundrectangle", "background-fit": "cover", "background-image": "http://localhost:8002/img/sahlins.jpeg", "font-size": 32, "width": 300, "height": 500, "label": "Sahlins", "text-valign": "top"}},{"selector": "#imprinting", "style": {"background-color": "beige", "border-color": "blue", "shape": "roundrectangle", "border-width": 1, "font-size": 48, "width": 200, "height": 200, "label": "Imprinting"}},{"selector": "#conradLorenz", "style": {"background-color": "beige", "border-color": "blue", "shape": "roundrectangle", "border-width": 1, "font-size": 48, "width": 200, "height": 200, "label": "Lorenz"}},{"selector": "#geese", "style": {"background-color": "white", "border-color": "red", "shape": "roundrectangle", "border-width": 1, "text-halign": "center", "font-size": 48, "width": 200, "height": 50, "label": "Geese", "text-valign": "center"}},{"selector": "#butler", "style": {"background-color": "beige", "color": "blue", "shape": "roundrectangle", "border-color": "black", "fontSize": 32, "border-width": 1, "text-halign": "center", "width": 200, "height": 100, "label": "Judith Butler", "text-valign": "center"}}]


    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
