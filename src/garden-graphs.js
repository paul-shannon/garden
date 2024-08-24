let graphsData = [{"title": "Stardust", "elements": [{"data": {"id": "youngWaltWhitman", "label": "Walt Whitman"}}, {"data": {"id": "whitman-journeyWorkOfStars", "label": "a leaf of grass\nis no less\n than the journey-work\nof the stars"}}, {"data": {"id": "nucleosynthesis", "label": "Nucleosynthesis"}}, {"data": {"id": "e1", "source": "youngWaltWhitman", "target": "whitman-journeyWorkOfStars", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 3, "curve-style": "bezier", "line-color": "black", "target-arrow-color": "black", "arrow-scale": 1, "target-arrow-shape": "triangle"}}, {"selector": "#youngWaltWhitman", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/youngWaltWhitman.png", "label": "Walt Whitman", "text-valign": "top", "width": 300, "height": 500, "shape": "roundrectangle", "border-color": "gray"}}, {"selector": "#whitman-journeyWorkOfStars", "style": {"font-size": 14, "label": "a leaf of grass\nis no less\n than the journey-work\nof the stars", "text-valign": "center", "background-color": "#f9f9eb", "width": 200, "font-family": "courier", "height": 100, "shape": "roundrectangle", "border-color": "black", "text-max-width": 1000, "text-wrap": "wrap", "border-width": 1}}, {"selector": "#nucleosynthesis", "style": {"font-size": 18, "label": "Nucleosynthesis", "text-valign": "center", "width": 200, "height": 100, "shape": "roundrectangle", "border-color": "black", "background-color": "#f9f9eb", "border-width": 1}}, {"selector": "node:selected", "style": {"border-width": 3, "border-color": "red"}}]}, {"title": "Imprint", "elements": [{"data": {"id": "conradLorenz", "label": "Lorenz"}}, {"data": {"id": "geese", "label": "Geese"}}, {"data": {"id": "sahlins", "label": "Sahlins"}}, {"data": {"id": "sahlins-western-illusion", "label": "Western Illusion", "parent": "sahlins"}}, {"data": {"id": "imprinting", "label": "Imprinting"}}, {"data": {"id": "althusser", "label": "Althusser"}}, {"data": {"id": "althusser-ideology", "label": "Ideology"}}, {"data": {"id": "althusser-interpellation", "label": "Interpellation"}}, {"data": {"id": "e1", "source": "imprinting", "target": "althusser", "edgeType": "child"}}, {"data": {"id": "e2", "source": "althusser", "target": "althusser-ideology", "edgeType": "child"}}, {"data": {"id": "e3", "source": "althusser", "target": "althusser-interpellation", "edgeType": "child"}}, {"data": {"id": "e4", "source": "imprinting", "target": "conradLorenz", "edgeType": "child"}}, {"data": {"id": "e5", "source": "conradLorenz", "target": "geese", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 3, "curve-style": "bezier", "line-color": "black", "target-arrow-color": "black", "arrow-scale": 1, "target-arrow-shape": "triangle"}}, {"selector": "#conradLorenz", "style": {"font-size": 48, "label": "Lorenz", "width": 200, "height": 200, "shape": "roundrectangle", "border-color": "blue", "background-color": "beige", "border-width": 1}}, {"selector": "#geese", "style": {"font-size": 48, "text-halign": "center", "label": "Geese", "text-valign": "center", "width": 200, "height": 50, "shape": "roundrectangle", "border-color": "red", "background-color": "white", "border-width": 1}}, {"selector": "#sahlins", "style": {"font-size": 48, "background-fit": "cover", "background-image": "http://localhost:8000/sahlins.jpeg", "label": "Sahlins", "text-valign": "top", "width": 300, "height": 500, "shape": "roundrectangle", "border-width": 1}}, {"selector": "#sahlins-western-illusion", "style": {"font-size": 48, "text-halign": "center", "label": "Western Illusion", "text-valign": "center", "background-color": "beige", "width": 600, "height": 200, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#imprinting", "style": {"font-size": 64, "text-halign": "center", "label": "Imprinting", "text-valign": "center", "width": 400, "height": 150, "shape": "roundrectangle", "border-color": "gray", "background-color": "white", "border-width": 1}}, {"selector": "#althusser", "style": {"font-size": 64, "background-fit": "cover", "background-image": "http://localhost:8002/img/althusser.jpg", "text-halign": "center", "label": "Althusser", "text-valign": "top", "background-color": "white", "width": 400, "height": 600, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#althusser-ideology", "style": {"font-size": 64, "text-halign": "center", "label": "Ideology", "text-valign": "center", "width": 400, "height": 150, "shape": "roundrectangle", "border-color": "gray", "background-color": "white", "border-width": 1}}, {"selector": "#althusser-interpellation", "style": {"font-size": 64, "text-halign": "center", "label": "Interpellation", "text-valign": "center", "width": 400, "height": 150, "shape": "roundrectangle", "border-color": "gray", "background-color": "white", "border-width": 1}}, {"selector": "node:selected", "style": {"border-width": 3, "border-color": "red"}}]}, {"title": "Geertz", "elements": [{"data": {"id": "geertz", "label": ""}}, {"data": {"id": "geertz-religion-parent", "label": ""}}, {"data": {"id": "geertz-religion", "label": "Religion as a Cultural System", "parent": "geertz-religion-parent"}}, {"data": {"id": "geertz-santayana", "label": "Santayana: a world to live in", "parent": "geertz-religion-parent"}}, {"data": {"id": "geertz-weber", "label": "Weber: Webs of Significance", "parent": "geertz-religion-parent"}}, {"data": {"id": "geertz-religion-symbols", "label": "A system of symbols", "parent": "geertz-religion-parent"}}, {"data": {"id": "geertz-religion-moods", "label": "Moods and Motivations", "parent": "geertz-religion-parent"}}, {"data": {"id": "geertz-ethos", "label": "World-view and Ethos"}}, {"data": {"id": "e1", "source": "geertz", "target": "geertz-religion", "edgeType": "child"}}, {"data": {"id": "e2", "source": "geertz", "target": "geertz-ethos", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 3, "curve-style": "bezier", "line-color": "black", "target-arrow-color": "black", "arrow-scale": 1, "target-arrow-shape": "triangle"}}, {"selector": "#geertz", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/geertz.png", "label": "", "text-valign": "top", "width": 500, "height": 250, "shape": "roundrectangle", "border-radius": 10, "border-color": "black", "border-width": 4}}, {"selector": "#geertz-religion-parent", "style": {"font-size": 32, "label": "", "width": 300, "height": 100, "shape": "roundrectangle", "border-color": "blue", "background-color": "white", "border-width": 1}}, {"selector": "#geertz-religion", "style": {"font-size": 24, "text-halign": "center", "label": "Religion as a Cultural System", "text-valign": "center", "background-color": "white", "width": 360, "height": 40, "shape": "roundrectangle", "border-color": "blue", "border-width": 1}}, {"selector": "#geertz-santayana", "style": {"font-size": 24, "text-halign": "center", "label": "Santayana: a world to live in", "text-valign": "center", "background-color": "beige", "width": 380, "height": 40, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#geertz-weber", "style": {"font-size": 24, "text-halign": "center", "label": "Weber: Webs of Significance", "text-valign": "center", "background-color": "beige", "width": 380, "height": 40, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#geertz-religion-symbols", "style": {"font-size": 24, "text-halign": "center", "label": "A system of symbols", "text-valign": "center", "background-color": "beige", "width": 280, "height": 40, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#geertz-religion-moods", "style": {"font-size": 24, "text-halign": "center", "label": "Moods and Motivations", "text-valign": "center", "background-color": "beige", "width": 280, "height": 40, "shape": "roundrectangle", "border-color": "gray", "border-width": 1}}, {"selector": "#geertz-ethos", "style": {"font-size": 24, "text-halign": "center", "label": "World-view and Ethos", "text-valign": "center", "width": 300, "height": 80, "shape": "roundrectangle", "border-color": "blue", "background-color": "white", "border-width": 1}}, {"selector": "node:selected", "style": {"border-width": 3, "border-color": "red"}}]}, {"title": "Perspective", "elements": [{"data": {"id": "bedroom", "label": ""}}, {"data": {"id": "bedroom-euclidean-monocular", "label": ""}}, {"data": {"id": "bedroom-euclidean-monocular", "label": ""}}, {"data": {"id": "bedroom-lines-traced", "label": ""}}, {"data": {"id": "bedroom-rectilinear", "label": ""}}, {"data": {"id": "morganStreet-porch", "label": ""}}, {"data": {"id": "mudra", "label": ""}}, {"data": {"id": "e1", "source": "bedroom", "target": "bedroom-rectilinear", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 3, "curve-style": "bezier", "line-color": "black", "target-arrow-color": "black", "arrow-scale": 1, "target-arrow-shape": "triangle"}}, {"selector": "#bedroom", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/bedroomAtArles.jpg", "label": "", "text-valign": "top", "width": 1000, "height": 800, "shape": "roundrectangle", "border-color": "green"}}, {"selector": "#bedroom-euclidean-monocular", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/vg-bedroom-monocular-euclidean.png", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle", "border-color": "green"}}, {"selector": "#bedroom-euclidean-monocular", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/vg-bedroom-monocular-euclidean.png", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle", "border-color": "green"}}, {"selector": "#bedroom-lines-traced", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/vg-bedroom-lines-traced.png", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle"}}, {"selector": "#bedroom-rectilinear", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/bedroomAtArles-rectilinear.jpeg", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle"}}, {"selector": "#morganStreet-porch", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/morganStreetPorch.png", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle"}}, {"selector": "#mudra", "style": {"font-size": 32, "background-fit": "cover", "background-image": "http://localhost:8002/img/mudra.jpeg", "label": "", "text-valign": "top", "width": 600, "height": 400, "shape": "roundrectangle"}}, {"selector": "node:selected", "style": {"border-width": 3, "border-color": "red"}}]}, {"title": "Daylight", "elements": [{"data": {"id": "haeberlin-mythology", "label": "Haeberlin's Mythology"}}, {"data": {"id": "sonsOfMinkAndRaven", "label": "How the Sons of Mink and Raven Stole Light"}}, {"data": {"id": "minkAndTheClock", "label": "How Mink Got Daylight"}}, {"data": {"id": "e1", "source": "haeberlin-mythology", "target": "sonsOfMinkAndRaven", "edgeType": "child"}}, {"data": {"id": "e2", "source": "haeberlin-mythology", "target": "minkAndTheClock", "edgeType": "child"}}], "styles": [{"selector": "edge", "style": {"width": 3, "curve-style": "bezier", "line-color": "black", "target-arrow-color": "black", "arrow-scale": 1, "target-arrow-shape": "triangle"}}, {"selector": "#haeberlin-mythology", "style": {"font-size": 24, "label": "Haeberlin's Mythology", "text-valign": "center", "background-color": "beige", "width": 300, "height": 100, "shape": "roundrectangle", "border-color": "blue"}}, {"selector": "#sonsOfMinkAndRaven", "style": {"font-size": 24, "label": "How the Sons of Mink and Raven Stole Light", "text-valign": "center", "width": 300, "height": 100, "shape": "roundrectangle", "border-color": "blue", "background-color": "beige"}}, {"selector": "#minkAndTheClock", "style": {"font-size": 24, "label": "How Mink Got Daylight", "text-valign": "center", "width": 300, "height": 100, "shape": "roundrectangle", "border-color": "blue", "background-color": "beige"}}, {"selector": "node:selected", "style": {"border-width": 3, "border-color": "red"}}]}]

//--------------------------------------------------------------------------------
function getGraphs()
{
    return(graphsData)
    
} // getGraphs
//--------------------------------------------------------------------------------
export {getGraphs}

