# createGraph.py
#--------------------------------------------------------------------------------
import pdb
import json
import sys
import os.path
from yamlsToCyJSON import *
#--------------------------------------------------------------------------------
if(len(sys.argv) < 2):
    print("usage: python createGraph.py <title:graph.yaml> <title2:graph2.yaml>...")

args = sys.argv[1:]

data = []
for arg in args:
   assert(":" in args[0])
   (title, file) = arg.split(":")

   locsFile = "%s.loc" % title
   print("--- looking for locs file: %s" % locsFile)
   if(os.path.isfile(locsFile)):
      y = YamlToCyJSON(file, locsFile)
   else:
      y = YamlToCyJSON(file)
   y.parse()
   (elString, elObj) = y.getElements()
   (styleString, styleObj) = y.getStyles()
   if(os.path.isfile(locsFile)):
      #(locsJSON, locsObj) = getLocationsFromJsonFile(locsFile)
      print("--- createGraphs.py, zoom: %f" % y.getZoom())
      data.append({"title": title, "elements": elObj, "styles": styleObj, "zoom": y.getZoom(), "pan": y.getPan()})
   else:
      data.append({"title": title, "elements": elObj, "styles": styleObj, "zoom": 1.0, "pan": {"x": 10, "y": 10}})

filename = "garden-graphs.js"
s = "let graphsData = %s" % json.dumps(data)
s += "\n"
s += """
//--------------------------------------------------------------------------------
function getGraphs()
{
    return(graphsData)
    
} // getGraphs
//--------------------------------------------------------------------------------
function getZoom()
{
    return(graphsData["zoom"])
    
} // getGraphs
//--------------------------------------------------------------------------------
function getPan()
{
    return(graphsData["pan"])
    
} // getGraphs
//--------------------------------------------------------------------------------
export {getGraphs, getZoom, getPan}
"""

with(open(filename, "w") as f):
   f.write(s)
   f.write("\n")

print("--- wrote %d graphs to %s" % (len(args), filename))
   
