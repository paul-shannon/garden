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

  def __init__(self, file):

     assert(os.path.isfile(file))
     self.yamlFile = file

  def parse(self):

     with open(self.yamlFile, 'r') as stream:
        x = yaml.safe_load(stream)
     self.x =  x


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
        data = {"data": {"id": node["id"], "label": node["label"]}}
        s += "%s" % json.dumps(data)
        if(elementCount < elementTotal):
            s += ","
     edgeNumber = 0
     for edge in edges:
        elementCount += 1
        edgeNumber += 1
        data = {"data": {"id": "e%d" % edgeNumber, 
                         "source": edge["source"],
                         "target": edge["target"],
                         "edgeType": edge["edgeType"]}}
        s += "%s" % json.dumps(data)
        if(elementCount < elementTotal):
            s += ","
     s += "]"
     return(s)
        
  def getStyles(self):

     s = """[{"selector": "edge",
              "style": {
                    "width": 3,
                    "curve-style": "bezier",
                    "line-color": "black",
                    "target-arrow-color": "black",
                    "arrow-scale": 5,
                    "target-arrow-shape": "triangle"
                }
            },"""

     #s = "["
     nodes = self.x['nodes']
      
     for node in nodes:
        keys = list(node.keys())
        keys = list(set(keys).difference({'id'}))
        obj = {'selector': '#%s' % node["id"]}
        obj['style'] = {}
        nodeAttributes = ""
        for attribute in keys:
           obj['style'][attribute] = node[attribute]
           # print("--- creating new node attribute: %s" % attribute)
        nodeAttributes += json.dumps(obj)
        if(not node == nodes[-1]):
           nodeAttributes += ","
        s += nodeAttributes  
     s += "]"
     return(s)
        
def getPositionsFromJsonFile(filename):

   s = open(filename).read()
      # remove likely "positions = "
      # this is needed for <script> read of the data
      # and assignment, but is not good for testing
      
   s = s.replace("positions = ", "")
   return (json.loads(s))

  

       
