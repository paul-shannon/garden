# createGraph.py
#--------------------------------------------------------------------------------
import pdb
import json
import sys
from yamlToCyJSON import *
#--------------------------------------------------------------------------------
if(len(sys.argv) < 2):
    print("usage: python createGraph.py <graph yaml file> <optional positions file>")

y = YamlToCyJSON(sys.argv[1])
# pdb.set_trace()

y.parse()
with(open("nodeData.js", "w") as f):
   print("writing nodeData.js")
   f.write("nodeData = ")
   f.write(y.getElements())
   f.write("\n")
   
with(open("nodeStyles.js", "w") as f):
   print("writing nodeStyles.js")
   f.write("nodeStyles = ")
   f.write(y.getCustomNodeStyles())
   f.write("\n")
   

