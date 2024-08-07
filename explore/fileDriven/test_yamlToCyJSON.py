# test_yamlToCyJSON.py
#--------------------------------------------------------------------------------
import pdb
import json
from yamlToCyJSON import *
#--------------------------------------------------------------------------------
def test_ctor():

    print("--- test_ctor")
    y = YamlToCyJSON("demo.yaml")

#--------------------------------------------------------------------------------
def test_getElements():

    print("--- test_getElements")

    y = YamlToCyJSON("demo.yaml")
    y.parse()
    string = y.getElements()
    obj = json.loads(string)
    assert(len(obj) == 3)
    assert([x['data']['id'] for x in obj] == ['sahlins', 'imprinting', 'butler'])

#--------------------------------------------------------------------------------
def test_getCustomNodeStyles():

    print("--- test_getCustomNodeStyles")

    y = YamlToCyJSON("demo.yaml")
    y.parse()
    string = y.getCustomNodeStyles()
    x = json.loads(string)
    assert(len(x) == 3)
    assert([e['selector'] for e in x] == ['#sahlins', '#imprinting', '#butler'])
    assert([e['style']['width'] for e in x] == [300, 200, 200])

#--------------------------------------------------------------------------------
def test_readPositions():

   print("--- test_readPositions")
   jsonString = getPositionsFromJsonFile("positions.json")
   pdb.set_trace()

#--------------------------------------------------------------------------------
def runTests():

    test_ctor()
    test_getElements()
    test_getCustomNodeStyles()
    test_readPositions()
    
#--------------------------------------------------------------------------------
if __name__ == '__main__':
    runTests()

