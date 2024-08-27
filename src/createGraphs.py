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
   print("--- looking for locs file: %s" % locsFile)
   if(os.path.isfile(locsFile)):
      (locsJSON, locsObj) = getLocationsFromJsonFile(locsFile)
   data.append({"title": title, "elements": elObj, "styles": styleObj, "locs": locsObj})

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
export {getGraphs}
"""

with(open(filename, "w") as f):
   f.write(s)
   f.write("\n")

print("--- wrote %d graphs to %s" % (len(args), filename))
   
