import os
import yaml
import json
import pdb

# we want to create javascript-ready data structures from
# yaml file, easily imported into a cytoscape.js client html/javascript
# application
#
# cytoscape.js uses these objects for the three graph elements
# we currently care about:
#   node attributes (e.g., width, height, font-size, any arbitrary data)
#   node position: x and y
#   node style:  colors
#   x = cy.json()
#   x['elements']['nodes'][n]['data']
#   x['elements']['nodes'][n]['position']['x'|'y']
#   x['style'][0]    # note ['style']['selector'] nests another ['style']
#      {"selector": "#sahlins",
#          "style": {
#             "text-valign": "top",
#             "width": "300px",
#             "background-image": "http://localhost:8000/sahlins.jpeg",
#             "height": "500px",
#             "background-fit": "cover",
#             "shape": "roundrectangle",
#             "font-size": "32px"
#            }
#          }
# x['style'] ['elements']['nodes'][n]['style']

class YamlToCyJSON:

  yamlFile = None
  locsFile = None
  locs = None

  def __init__(self, yamlFile, locsFile=None):

     assert(os.path.isfile(yamlFile))
     self.yamlFile = yamlFile
     self.locsFile = locsFile

  def parse(self):

     with open(self.yamlFile, 'r') as stream:
        x = yaml.safe_load(stream)
     self.x =  x
     if(self.locsFile):
       with open(self.locsFile, "r") as f:
          text = f.read()
          self.locs = json.loads(text)

  def getElements(self):

     s = "["
     nodes = self.x['nodes']
     edges = []
     if('edges' in list(self.x.keys())):
        edges = self.x['edges']
     elementTotal = len(nodes) + len(edges)
     elementCount = 0
     for node in nodes:
        elementCount += 1
        nodeID = node["id"]
        if(self.locs):
          if(nodeID in list(self.locs.keys())):
            position = self.locs[nodeID]
            data = {"data": {"id": nodeID, "label": node["label"]},
                   "position": position}
        else:
           data = {"data": {"id": nodeID, "label": node["label"]}}
        if "parent" in (list(node.keys())):
          data["data"]["parent"] = node["parent"]
        s += "%s" % json.dumps(data)
        if(elementCount < elementTotal):
            s += ","

     edgeNumber = 0
     for edge in edges:
        elementCount += 1
        edgeNumber += 1
        id = "%s-%s" % (edge["source"], edge["target"])
        data = {"data": {"id": id, # "e%d" % edgeNumber, 
                         "source": edge["source"],
                         "target": edge["target"],
                         "edgeType": edge["edgeType"]}}
        s += "%s" % json.dumps(data)
        if(elementCount < elementTotal):
            s += ","
     s += "]"
     return(s, json.loads(s))
        
  def getStyles(self):

     s = """[{"selector": "edge",
              "style": {
                    "width": 8,
                    "curve-style": "bezier",
                    "line-color": "green",
                    "target-arrow-color": "black",
                    "arrow-scale": 3,
                    "target-arrow-shape": "triangle"
                    }
            },
            {"selector": "edge:selected",
                "style": {
                    "width": 14,
                    "line-color": "red"
                    }},
          """

     #s = "["
     nodes = self.x['nodes']
      
     for node in nodes:
        keys = list(node.keys())
        keys = list(set(keys).difference({'id', 'parent'}))
        obj = {'selector': '#%s' % node["id"]}
        obj['style'] = {}
        nodeAttributes = ""
        for attribute in keys:
           obj['style'][attribute] = node[attribute]
           # print("--- creating new node attribute: %s" % attribute)
        nodeAttributes += json.dumps(obj)
        #if(not node == nodes[-1]):
        nodeAttributes += ","
        s += nodeAttributes  
     s += """{"selector": "node:selected",
                "style": {
                   "border-width": 8,
                   "border-color": "red"
                   }
                }
              """
     s += "]"
     #print(s)
     return(s, json.loads(s))
        
def getLocationsFromJsonFile(filename):

   with open(filename, "r") as f:
      text = f.read()
   locs = json.loads(text)
   return (text, locs)
 
