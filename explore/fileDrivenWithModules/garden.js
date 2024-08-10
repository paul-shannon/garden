import cytoscape from 'https://cdn.jsdelivr.net/npm/cytoscape@3.30.2/+esm'

const Showdown = await import("https://cdn.jsdelivr.net/npm/showdown/+esm");
const converter = new Showdown.default.Converter();
converter.setOption("tables", true);

import {kb} from './kb.js'
import {createGraph, getNodeStyles} from './createGraph.js'
import {doLayout} from './layouts.js'

//------------------------------------------------------------------------------------------------------------------------
function displayAnnotation(topic)
{
  var annoBox = $("#notesDiv");
  var annoText = lookup(topic)
  annoBox.html(annoText);
   
} // displayAnnotation
//------------------------------------------------------------------------------------------------------------------------
function lookup(tag)
{
   var index = Object.keys(kb).indexOf(tag);
   var found = index >= 0
   console.log("---- lookup, using kb: '" + tag + "', found? " + found)
   console.log("    index: " + index);

   if(index < 0)
       return("")

    var markup = converter.makeHtml(kb[tag]);
    return(markup);

} // lookup
//------------------------------------------------------------------------------------------------------------------------
console.log("entering garden.js")
//--------------------------------------------------------------------------------
$(document).ready(function()
{
   console.log("loading notes*")
   console.log("kb entries*: " + Object.keys(kb).length)

   console.log( "ready!" );
   var cy = cytoscape({
      container: document.getElementById('cyDiv'),
      elements: createGraph(),
      style: getNodeStyles()
      });
    window.cy = cy; 
    cy.on('tap', 'node', function(evt){
      var node = evt.target;
      console.log( 'tapped ' + node.id() );
      displayAnnotation(node.id())
      });

}) // doc ready
//--------------------------------------------------------------------------------
// window.cy.fit(200)



//doLayout("circle")
//doLayout("cose")
//doLayout("grid")
//doLayout("klay")
//doLayout("cola")
//doLayout("breadthfirst")
//doLayout("concentric")
//doLayout("fcose")
//doLayout("elk")

