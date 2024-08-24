
function createGraph(){
   let graph = [{"data": {"id": "geertz", "label": "Clifford Geertz"}},{"data": {"id": "geertz-religion", "label": "Religion as a Cultural System"}},{"data": {"id": "geertz-weber", "label": "Webs of Significance", "parent": "geertz-religion"}},{"data": {"id": "geertz-religion-symbols", "label": "A system of symbols", "parent": "geertz-religion"}},{"data": {"id": "geertz-religion-moods", "label": "Moods and Motivations", "parent": "geertz-religion"}},{"data": {"id": "geertz-ethos", "label": "World-view and Ethos"}},{"data": {"id": "e1", "source": "geertz", "target": "geertz-religion", "edgeType": "child"}},{"data": {"id": "e2", "source": "geertz", "target": "geertz-ethos", "edgeType": "child"}}]
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
            },{"selector": "#geertz", "style": {"height": 100, "font-size": 32, "background-fit": "cover", "width": 200, "background-image": "http://localhost:8002/img/geertz.jpg", "shape": "roundrectangle", "text-valign": "top", "label": "Clifford Geertz"}},{"selector": "#geertz-religion", "style": {"background-color": "beige", "height": 100, "font-size": 24, "width": 300, "shape": "roundrectangle", "border-color": "blue", "border-width": 1, "label": "Religion as a Cultural System"}},{"selector": "#geertz-weber", "style": {"background-color": "beige", "height": 40, "font-size": 24, "text-halign": "center", "width": 280, "shape": "roundrectangle", "text-valign": "center", "border-color": "gray", "border-width": 1, "label": "Webs of Significance"}},{"selector": "#geertz-religion-symbols", "style": {"background-color": "beige", "height": 40, "font-size": 24, "text-halign": "center", "width": 280, "shape": "roundrectangle", "text-valign": "center", "border-color": "gray", "border-width": 1, "label": "A system of symbols"}},{"selector": "#geertz-religion-moods", "style": {"background-color": "beige", "height": 40, "font-size": 24, "text-halign": "center", "width": 280, "shape": "roundrectangle", "text-valign": "center", "border-color": "gray", "border-width": 1, "label": "Moods and Motivations"}},{"selector": "#geertz-ethos", "style": {"background-color": "beige", "height": 200, "font-size": 24, "width": 200, "shape": "roundrectangle", "border-color": "blue", "border-width": 1, "label": "World-view and Ethos"}}]
   return(nodeStyles)
   }
export {createGraph, getNodeStyles}

