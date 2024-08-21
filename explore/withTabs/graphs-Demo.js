
function createGraph(){
   let graph = [{"data": {"id": "sahlins", "label": "Sahlins"}},{"data": {"id": "imprinting", "label": "Imprinting"}},{"data": {"id": "conradLorenz", "label": "Lorenz"}},{"data": {"id": "geese", "label": "Geese", "parent": "conradLorenz"}},{"data": {"id": "butler", "label": "Judith Butler"}},{"data": {"id": "e1", "source": "imprinting", "target": "butler", "edgeType": "child"}},{"data": {"id": "e2", "source": "imprinting", "target": "sahlins", "edgeType": "child"}},{"data": {"id": "e3", "source": "imprinting", "target": "conradLorenz", "edgeType": "child"}}]
   return(graph)
   }
function getNodeStyles(){
   let nodeStyles = [{"selector": "edge",
              "style": {
                    "width": 3,
                    "curve-style": "bezier",
                    "line-color": "black",
                    "target-arrow-color": "black",
                    "arrow-scale": 1,
                    "target-arrow-shape": "triangle"
                }
            },{"selector": "#sahlins", "style": {"height": 500, "font-size": 32, "background-fit": "cover", "width": 300, "background-image": "http://localhost:8002/img/sahlins.jpeg", "shape": "roundrectangle", "text-valign": "top", "border-color": "blue", "label": "Sahlins"}},{"selector": "#imprinting", "style": {"background-color": "beige", "height": 200, "font-size": 48, "width": 200, "shape": "roundrectangle", "border-color": "blue", "border-width": 1, "label": "Imprinting"}},{"selector": "#conradLorenz", "style": {"background-color": "beige", "height": 200, "font-size": 48, "width": 200, "shape": "roundrectangle", "border-color": "blue", "border-width": 1, "label": "Lorenz"}},{"selector": "#geese", "style": {"background-color": "white", "height": 50, "font-size": 48, "text-halign": "center", "width": 200, "shape": "roundrectangle", "text-valign": "center", "border-color": "red", "border-width": 1, "label": "Geese"}},{"selector": "#butler", "style": {"background-color": "beige", "height": 100, "width": 200, "fontSize": 32, "shape": "roundrectangle", "text-valign": "center", "border-color": "black", "color": "blue", "border-width": 1, "text-halign": "center", "label": "Judith Butler"}}]
   return(nodeStyles)
   }
export {createGraph, getNodeStyles}

