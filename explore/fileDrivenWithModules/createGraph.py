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
with(open("graph.txt", "w") as f):
   print("writing graph.txt for m4 include in createGraph.js")
   f.write(y.getElements())
   f.write("\n")
   
with(open("nodeStyles.txt", "w") as f):
   print("writing nodeStyles.txt for m4 include in createGraph.js")
   f.write(y.getCustomNodeStyles())
   f.write("\n")
   

