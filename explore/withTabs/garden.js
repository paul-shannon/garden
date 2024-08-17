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
function refreshLayout()
{
  var cyDivWidth = $("#cyDiv").width()
  var mainDivWidth = $("#mainDiv").width()
  var mainDivHeight = $("#mainDiv").height()
  var windowWidth = $(window).width() 
  var windowHeight = $(window).height() 
  let extra = 100;

  var newNotesDivWidth = mainDivWidth - (cyDivWidth + extra)
  $("#notesDiv").width(newNotesDivWidth)

    // height of cyDiv and notesDiv specified in css:
    //   height: calc(100% - 20px);
    // where 100% seems to be the height of the containgin div

} // refreshLayout
//----------------------------------------------------------------------------------------------------
window.refresh = refreshLayout;
//----------------------------------------------------------------------------------------------------
function savePositions()
{
  let nodes = cy.nodes(); 
  let nodePositions = {};
  for (let i = 0; i < nodes.length; i++) {
    nodePositions[nodes[i].id()] = nodes[i].position();
    }
  let jsonString = JSON.stringify(nodePositions);
  localStorage.setItem("layout", jsonString)

} // saveLayout
//----------------------------------------------------------------------------------------------------
function restorePositions()
{
  let jsonString = localStorage.getItem("layout")
  let nps = JSON.parse(jsonString)

  for (const k of Object.keys(nps)) {
    const node = cy.getElementById(k);
    console.log("k:  " + k + "  next node: " + node)
    if (node && node.length > 0) {
      node.position(nps[k]);
      } // if node
    } // for k

  cy.fit(20)
  
} // restorePositions
//----------------------------------------------------------------------------------------------------
window.sp = savePositions;
window.rp = restorePositions;
//----------------------------------------------------------------------------------------------------
function drawGraph(divName)
{
   var cy = cytoscape({
      container: document.getElementById(divName),
      elements: createGraph(),
      style: getNodeStyles(),
      ready: function(){
         console.log("garden.js, drawGraph(), cy.ready")
         }
      });
    window.cy = cy; 
    cy.on('tap', 'node', function(evt){
      var node = evt.target;
      console.log( 'tapped ' + node.id() );
      displayAnnotation(node.id())
      });

    return(cy);

} // drawGraph
//----------------------------------------------------------------------------------------------------
window.dg = drawGraph
//----------------------------------------------------------------------------------------------------
$(document).ready(function()
{
   console.log("loading notes*")
   console.log("kb entries*: " + Object.keys(kb).length)

   console.log( "ready!" );

   //$("#cyDiv").tabs()

   var resizeObserver = new ResizeObserver(entries => {
     for (let entry of entries) {
        if(entry.target.id === "cyDiv"){
           refreshLayout()
           }
        } // for
   });
   
   resizeObserver.observe(document.querySelector("#cyDiv"));
   //doLayout("klay")

    /* console manipulations
     $("#cyDiv").height() 
     $("#cyDiv").width() 
     $("#cyDiv_1").height($("#cyDiv").height())
     $("#cyDiv_1").width($("#cyDiv").width())
     $("#notesDiv").width(400)
     dg()
     lo("cose")
     cy.ready(function(){cy.fit(150)})
     */ 
}) // doc ready
//--------------------------------------------------------------------------------
window.cy1 = dg("cyDiv_1")
// window.cy2 = dg("cyDiv_2")
// window.cy.fit(200)

$('#cyDiv_2').on('tabsactivate', function(event, ui) {
    var newIndex = ui.newTab.index();
    console.log('Switched to tab '+newIndex);
});

//doLayout("circle")
//doLayout("cose")
//doLayout("grid")
//doLayout("klay")
//doLayout("cola")
//doLayout("breadthfirst")
//doLayout("concentric")
//doLayout("fcose")
//doLayout("elk")

