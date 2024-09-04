// garden.js
//--------------------------------------------------------------------------------
var state = {}
state["cyDivSelectors"] = [];
console.log(" setting window.state");
window.state = state;
console.log(" after setting window.state");

//--------------------------------------------------------------------------------
import cytoscape from 'https://cdn.jsdelivr.net/npm/cytoscape@3.30.2/+esm'

const Showdown = await import("https://cdn.jsdelivr.net/npm/showdown/+esm");
const converter = new Showdown.default.Converter();
converter.setOption("tables", true);

import {kb} from './kb.js'
import {doLayout} from './layouts.js'
import {getGraphs, getZoom, getPan} from './garden-graphs.js'
 
let graphs = getGraphs()

state["graphs"] = graphs

console.log("--- garden.js, global state, graph count: " + graphs.length)

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
  console.log("--- refreshLayout");

  var cyDivWidth = $("#cyDiv").width()

  let cyDivs = state['cyDivSelectors'];
  let count = cyDivs.length;
  for(let i=0; i < count; i++){
     $(cyDivs[i]).width($("#cyDiv").width())
     }

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
function getSavedLayouts()
{
   var layoutKeys = []
   for (var key in localStorage){
      if(key.indexOf("layout-") >= 0){
         layoutKeys.push(key)
         }
      } // for key

   return(layoutKeys)
   
} // getSavedLayouts
//----------------------------------------------------------------------------------------------------
function haveSavedLayout(cyDivName)
{
   return(getSavedLayouts().includes("layout-" + cyDivName))

} // haveSavedLayout
//----------------------------------------------------------------------------------------------------
function getLayoutInfo(cyDivName)
{
    var s = '{"locs": '
    s += saveLayout(cyDivName)
    s += ', "zoom": ' + cy.zoom()
    s += ', "pan": '+ JSON.stringify(cy.pan())
    s += '}'

    console.log(s)

} // getLayoutInfo
//----------------------------------------------------------------------------------------------------
window.loc = getLayoutInfo;
window.sl = saveLayout;
window.rl = restoreLayout;
window.gsl = getSavedLayouts
window.hsl = haveSavedLayout
//----------------------------------------------------------------------------------------------------
function saveLayout(cyDivName)
{
  let nodes = state[cyDivName].nodes();
  console.log("--- nodes in " + cyDivName + ": " + nodes.length)
  let nodePositions = {};
  for (let i = 0; i < nodes.length; i++) {
    nodePositions[nodes[i].id()] = nodes[i].position();
    }
  let jsonString = JSON.stringify(nodePositions);
  let storageName = "layout-" + cyDivName
  localStorage.setItem(storageName, jsonString)
  return(jsonString)

} // saveLayout
//----------------------------------------------------------------------------------------------------
function restoreLayout(cyDivName)
{
  let storageName = "layout-" + cyDivName
  let jsonString = localStorage.getItem(storageName)
  let nps = JSON.parse(jsonString)
  
  for (const k of Object.keys(nps)) {
    const node = state[cyDivName].getElementById(k);
    console.log("k:  " + k + "  next node: " + node)
    if (node && node.length > 0) {
      node.position(nps[k]);
      } // if node
    } // for k

} // restoreLayout
//----------------------------------------------------------------------------------------------------
function newDrawGraph(divName, graph, zoom, pan)
{
  console.log("--- newDrawGraph: " + divName + " zoom: " + zoom + "  pan: " + pan)

  let doFit = function(margin){
      console.log("------------- doFit");
      window.cy.fit(margin)
      }

  let cy = cytoscape({
      container: document.getElementById(divName),
      elements: graph.elements, 
      style: graph.styles,
      layout: {
          name: "preset",
          fit: false
         },
      ready: function(){
         console.log("garden.js, newDrawGraph(), cy.ready")
         }
     })

  window.cy = cy;
  setTimeout(function(){
     console.log("wish to set zoom in timeout to " + zoom);
     cy.zoom(zoom)
     cy.pan(pan)
     }, 10)

  console.log("adding divname cy to state: " + divName)
  state[divName] = cy

  cy.on('tap', 'node', function(evt){
     var node = evt.target;
     console.log(node)
     state["currentNode"] = node
      //console.log( 'tapped ' + node.id() );
     displayAnnotation(node.id())
     });

  cy.on('tap', 'edge', function(evt){
     console.log("edge tap: " + evt.target.id());
     var edge = evt.target;
     state["currentEdge"] = edge;
     displayAnnotation(edge.id())
     });
    
  return(cy);

} // newDrawGraph
//----------------------------------------------------------------------------------------------------
$(document).ready(function()
{
   console.log( "ready!" );
   console.log("kb entries*: " + Object.keys(kb).length)
   $("#cyDiv").show();
   $("#notesDiv").show();
   $("#cyDiv").tabs()
   newSetupTabs();

   var resizeObserver = new ResizeObserver(entries => {
     for (let entry of entries) {
        if(entry.target.id === "cyDiv"){
           refreshLayout()
           }
        } // for
     });
   
   resizeObserver.observe(document.querySelector("#cyDiv"));

}) // doc ready
//--------------------------------------------------------------------------------
//function setupTabs()
//{
//  $("#cyDiv").show()
//  $("#notesDiv").show()
//  $("#cyDiv").tabs({
//    //event: "mouseover",
//    activate: function(event, ui) {
//      window.ui = ui;
//      let tabNumber = ui.newTab.index() + 1
//      let selector = ui.newPanel.attr("id")
//      console.log("activated panel: " + selector)
//      console.log("activated tab " + tabNumber  + "  height: " +
//                  $(jQuerySelector).height());
//      if(tabNumber === 2){
//         console.log("need to draw graph in cyDiv_2")
//          if(typeof cy2 == 'undefined'){
//             window.cy2 = drawGraph("cyDiv_2")
//             }
//          $("#cyDiv_2").show()
//          $("#cyDiv_2").resize()
//         }
//      }
//   });
//
//   $("#cyDiv_1").height($("#cyDiv").height())
//   $("#cyDiv_1").width($("#cyDiv").width())
//   $("#cyDiv_2").height($("#cyDiv").height())
//   $("#cyDiv_2").width($("#cyDiv").width())
//   //$("#notesDiv").width(400)
//
//} // setupTabs
//--------------------------------------------------------------------------------
function addTab(tabTitle, tabContent)
{
   console.log("--- addTab: "+ tabTitle);
   console.log("found pre-exiting tabs: " + $("cyDiv#cyDiv ul li").length);

   let tabSelector = "#" + tabTitle;
   let newListElement = "<li><a href='" + tabSelector + "'>" + tabTitle + "</a></li>";
   //console.log("newListElement: " + newListElement);
   $("#cyDiv ul").append(newListElement);
   
   let newContentElement = "<div id='" + tabTitle + "'>" + tabContent + "</div>";
   //console.log("newContentElement: " + newContentElement);
   $("#cyDiv").append(newContentElement)

   $(tabSelector).height($("#cyDiv").height())
   $(tabSelector).width($("#cyDiv").width())
   $(tabSelector).show()

    $("#cyDiv").tabs("refresh");

    state["cyDivSelectors"].push(tabSelector)

} // addTab
//--------------------------------------------------------------------------------
window.addTab = addTab
//--------------------------------------------------------------------------------
function newSetupTabs()
{
  // console.log("--- newSetupTabs");

  $("#cyDiv").tabs({
    activate: function(event, ui){
      window.ui = ui;
      let tabNumber = ui.newTab.index();
      let selector = ui.newPanel.attr("id")
      let jQuerySelector = "#" + selector;
      //console.log("activated panel, selector: " + selector)
      //console.log("activated tab " + tabNumber  + "  height: " + $(jQuerySelector).height());
      let kidCount = $(jQuerySelector).children().length
      if(kidCount == 0){
         //console.log("--- active tab " + tabNumber + ", need to draw graph on empty div");
         let graph = state.graphs[tabNumber];
         var title = graph["title"];
         var zoom = graph["zoom"]
         var pan = graph["pan"]
         title = title.replaceAll(' ', '')
         console.log("---- calling newDrawGraph from activate event handler: " + title)
         newDrawGraph(title, graph, zoom, pan);
         } // if no contents
       }}) // tabs ctor, with activate handler

  var graphs = state["graphs"];
  let count = graphs.length;

   for(let i=0; i < count;  i++){
      let graph = graphs[i];
      var title = graph["title"];
      var zoom = graph["zoom"]
      var pan = graph["pan"]
      title = title.replaceAll(' ', '')
      addTab(title, "")
      if (i == 0){
         $("#cyDiv").tabs("option", "active", 0) // first tab active
         console.log("---- calling newDrawGraph from for first tab only");
         newDrawGraph(title, graph, zoom, pan);
         }
      } // for i
       


} // newSetupTabs
//--------------------------------------------------------------------------------
// window.cy1 = drawGraph("cyDiv_1")

//$('#cyDiv_2').on('tabsactivate', function(event, ui) {
//    var newIndex = ui.newTab.index();
//    console.log('Switched to tab '+newIndex);
//});

//doLayout("circle")
//doLayout("cose")
//doLayout("grid")
//doLayout("klay")
//doLayout("cola")
//doLayout("breadthfirst")
//doLayout("concentric")
//doLayout("fcose")
//doLayout("elk")

