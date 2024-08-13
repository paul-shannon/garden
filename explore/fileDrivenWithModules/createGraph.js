function createGraph()
{
   console.log("--- returning graph from createGraph.js")

    let graph =
        [{"data": {"id": "geertz", "label": "Clifford Geertz"}},{"data": {"id": "geertz-religion", "label": "Religion as a Cultural System"}},{"data": {"id": "geertz-weber", "label": "Webs of Significance", "parent": "geertz-religion"}},{"data": {"id": "geertz-religion-symbols", "label": "A system of symbols", "parent": "geertz-religion"}},{"data": {"id": "geertz-religion-moods", "label": "Moods and Motivations", "parent": "geertz-religion"}},{"data": {"id": "geertz-ethos", "label": "World-view and Ethos"}},{"data": {"id": "e1", "source": "geertz", "target": "geertz-religion", "edgeType": "child"}},{"data": {"id": "e2", "source": "geertz", "target": "geertz-ethos", "edgeType": "child"}}]


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
            },{"selector": "#geertz", "style": {"height": 100, "background-image": "http://localhost:8002/img/geertz.jpg", "text-valign": "top", "font-size": 32, "background-fit": "cover", "label": "Clifford Geertz", "width": 200, "shape": "roundrectangle"}},{"selector": "#geertz-religion", "style": {"height": 100, "background-color": "beige", "font-size": 24, "border-width": 1, "label": "Religion as a Cultural System", "width": 300, "border-color": "blue", "shape": "roundrectangle"}},{"selector": "#geertz-weber", "style": {"height": 40, "background-color": "beige", "text-halign": "center", "text-valign": "center", "font-size": 24, "border-width": 1, "width": 280, "label": "Webs of Significance", "border-color": "gray", "shape": "roundrectangle"}},{"selector": "#geertz-religion-symbols", "style": {"height": 40, "background-color": "beige", "text-halign": "center", "text-valign": "center", "font-size": 24, "border-width": 1, "width": 280, "label": "A system of symbols", "border-color": "gray", "shape": "roundrectangle"}},{"selector": "#geertz-religion-moods", "style": {"height": 40, "background-color": "beige", "text-halign": "center", "text-valign": "center", "font-size": 24, "border-width": 1, "width": 280, "label": "Moods and Motivations", "border-color": "gray", "shape": "roundrectangle"}},{"selector": "#geertz-ethos", "style": {"height": 200, "background-color": "beige", "font-size": 24, "border-width": 1, "label": "World-view and Ethos", "width": 200, "border-color": "blue", "shape": "roundrectangle"}}]


    return(nodeStyles)

} // getNodeStyles
//--------------------------------------------------------------------------------
export {createGraph, getNodeStyles}
