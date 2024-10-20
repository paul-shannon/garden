# createGraph.py
#--------------------------------------------------------------------------------
import pdb
import json
import sys
from yamlsToCyJSON import *
#--------------------------------------------------------------------------------
def writeJavascriptFile(title, graphElements, nodeStyles):
    
   js = """
function createGraph(){
   let graph = %s
   return(graph)
   }
function getNodeStyles(){
   let nodeStyles = %s
   return(nodeStyles)
   }
export {createGraph, getNodeStyles}
"""
   s = js % (graphElements, nodeStyles)

   filename = "graphs-%s.js" % title
   with(open(filename, "w") as f):
      f.write(s)
      f.write("\n")

   print("--- wrote %s" % filename)

#--------------------------------------------------------------------------------
if(len(sys.argv) < 2):
    print("usage: python createGraph.py <title:graph.yaml> <title2:graph2.yaml>...")

args = sys.argv[1:]

data = []
for arg in args:
   assert(":" in args[0])
   (title, file) = arg.split(":")
   y = YamlToCyJSON(file)
   y.parse()
   (elString, elObj) = y.getElements()
   (styleString, styleObj) = y.getStyles()
   data.append({"title": title, "elements": elObj, "styles": styleObj})

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
   
