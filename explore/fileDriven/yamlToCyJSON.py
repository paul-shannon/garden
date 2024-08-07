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
     for node in nodes:
        data = {"data": {"id": node["id"], "label": node["label"]}}
        s += "%s" % json.dumps(data)
        if(not node == nodes[-1]):
            s += ","
     s += "]"
     return(s)
        
  def getCustomNodeStyles(self):

     s = "["
     nodes = self.x['nodes']
      
     for node in nodes:
        keys = list(node.keys())
        keys = list(set(keys).difference({'id'}))
        obj = {'selector': '#%s' % node["id"]}
        obj['style'] = {}
        nodeAttributes = ""
        for attribute in keys:
           obj['style'][attribute] = node[attribute]
        nodeAttributes += json.dumps(obj)
        if(not node == nodes[-1]):
           nodeAttributes += ","
        s += nodeAttributes  
     s += "]"
     return(s)
        
def getPositionsFromJsonFile(filename):

   return (json.loads(open("positions.json").read()))

  

       
