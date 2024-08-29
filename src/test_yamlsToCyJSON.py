# test_yamlsToCyJSON.py
#--------------------------------------------------------------------------------
import pdb
import json
from yamlsToCyJSON import *
#--------------------------------------------------------------------------------
def test_ctor():

    print("--- test_ctor")
    y = YamlToCyJSON("demo.yaml")

#--------------------------------------------------------------------------------
def test_getElements():

    print("--- test_getElements")

    y = YamlToCyJSON("demo.yaml")
    y.parse()
    (string, obj) = y.getElements()
    assert(len(obj) == 8)
    elements = [x['data']['id'] for x in obj] 
    expected = ['sahlins', 'imprinting', 'conradLorenz', 'geese', 'butler', 'imprinting-butler', 'imprinting-sahlins', 'imprinting-conradLorenz']
    assert(elements == expected)

#--------------------------------------------------------------------------------
def test_getElementsWithLocationsPanZoom():

    print("--- test_getElementsWithLocationsPanZoom")

    y = YamlToCyJSON("single.yaml", "One.loc")
    y.parse()
    (string, obj) = y.getElements()
    assert(len(obj) == 1)
    elements = obj
    expected = [{'data': {'id': 'one', 'label': 'One'}, 'position': {'x': 100, 'y': 10}}]
    assert(elements == expected)
    assert(y.getZoom() == 0.2)
    assert(y.getPan() == {"x": 50, "y": 50})

#--------------------------------------------------------------------------------
def test_getStyles():

    print("--- test_getStyles")

    y = YamlToCyJSON("demo.yaml")
    y.parse()
    (string, obj) = y.getStyles()
    assert(len(obj) == 8)
    expected = ['edge', 'edge:selected', '#sahlins', '#imprinting', '#conradLorenz',
                '#geese', '#butler', 'node:selected']
    assert([e['selector'] for e in obj] == expected)
    expected = [500, 200, 200, 50, 100]
    actual = [e['style']['height'] for e in obj if 'height' in list(e['style'].keys())]
    assert(actual == expected)

#--------------------------------------------------------------------------------
def test_readLocations():

   print("--- test_readLocations")
   file = "Demo.loc"
   (s, obj) = getLocationsFromJsonFile(file)
   assert(obj['sahlins']['x'] > 918)
   assert(obj['sahlins']['x'] < 919)
   sObj = json.loads(s)
   assert(sObj['sahlins']['x'] > 918)
   assert(sObj['sahlins']['x'] < 919)

#--------------------------------------------------------------------------------
def runTests():

    test_ctor()
    test_getElements()
    test_getElementsNoEdges()
    test_getStyles()
    test_getElementsWithLocationsPanZoom()

    #test_readLocations()
    
#--------------------------------------------------------------------------------
def test_getElementsNoEdges():

    print("--- test_getElementsNoEdges")

    y = YamlToCyJSON("demo-noEdges.yaml")
    y.parse()
    (string, obj) = y.getElements()
    assert(len(obj) == 5)
    elements = [x['data']['id'] for x in obj] 
    expected = ['sahlins', 'imprinting', 'conradLorenz', 'geese', 'butler']
    assert(elements == expected)

#--------------------------------------------------------------------------------
if __name__ == '__main__':
    runTests()

