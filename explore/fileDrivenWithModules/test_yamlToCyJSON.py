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
    assert(len(obj) == 5)
    assert([x['data']['id'] for x in obj] == ['sahlins', 'imprinting', 'butler',
                                              'e1', 'e2'])

#--------------------------------------------------------------------------------
def test_getStyles():

    print("--- test_getStyles")

    y = YamlToCyJSON("demo.yaml")
    y.parse()
    string = y.getStyles()
    x = json.loads(string)
    assert(len(x) == 4)
    assert([e['selector'] for e in x] == ['edge', '#sahlins', '#imprinting', '#butler'])
    assert([e['style']['width'] for e in x] == [3, 300, 200, 200])

#--------------------------------------------------------------------------------
def test_readPositions():

   print("--- test_readPositions")
   jsonString = getPositionsFromJsonFile("positions.js")

#--------------------------------------------------------------------------------
def runTests():

    test_ctor()
    test_getElements()
    test_getStyles()
    test_readPositions()
    
#--------------------------------------------------------------------------------
if __name__ == '__main__':
    runTests()

