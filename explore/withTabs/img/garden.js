import klay from 'cytoscape-klay';

//----------------------------------------------------------------------------------------------------
function refreshLayout()
{
  var cyDivWidth = $("#cyDiv").width()
  var mainDivWidth = $("#mainDiv").width()
  var mainDivHeight = $("#mainDiv").height()
  var windowWidth = $(window).width() 
  var windowHeight = $(window).height() 
  let extra = 50;

  var newNotesDivWidth = mainDivWidth - (cyDivWidth + extra)
  $("#notesDiv").width(newNotesDivWidth)

    // height of cyDiv and notesDiv specified in css:
    //   height: calc(100% - 20px);
    // where 100% seems to be the height of the containgin div

} // refreshLayout
//----------------------------------------------------------------------------------------------------
$(document).ready(function() {

   window.addEventListener('resize', refreshLayout)
   
   console.log("document ready");

   var cyDiv = $("#cyDiv");
   window.cy = cytoscape({
      container: document.getElementById('cyDiv'),
       elements: nodeData,
       layout: {name: 'preset'},
       style: nodeStyles
     }); // cytoscape


   for (const k of Object.keys(positions)) {
   const node = cy.getElementById(k);
    if (node && node.length > 0) {
       console.log("setting position of " + k)
       node.position(positions[k]);
       } // if node
   } // for k


   cy.on('tap', 'node', function(evt){
      var node = evt.target;
      //console.log( 'tapped ' + node.id() );
      displayNotes(node.id())
      });

cy.ready(function() {
  console.log("--- cy.ready");
  cy.fit(40)
  })

var resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
     if(entry.target.id === "cyDiv"){
        refreshLayout()
        }
     } // for
  });
resizeObserver.observe(document.querySelector("#cyDiv"));
}); // document ready

//----------------------------------------------------------------------------------------------------
function displayNotes(nodeID)
{
   console.log("displayNotes: " + nodeID)
   let htmltext = lookup(nodeID)
   if(htmltext.length > 0){
      $("#notesDiv").html(htmltext)
      }
    
} // displayNotes
//----------------------------------------------------------------------------------------------------
function oldSaveLayout()
{
  jsonString = JSON.stringify(cy.json().elements)     
  localStorage.setItem("layout", jsonString)

} // oldSaveLayout
//----------------------------------------------------------------------------------------------------
function oldRestoreLayout()
{
  jsonString = localStorage.getItem("layout")
  cy.json({elements: JSON.parse(jsonString)})    
  cy.fit(100)

} // oldRestoreLayout
//----------------------------------------------------------------------------------------------------
function savePositions()
{
  const nodes = cy.nodes(); 
  const nodePositions = {};
  for (let i = 0; i < nodes.length; i++) {
    nodePositions[nodes[i].id()] = nodes[i].position();
    }
    jsonString = JSON.stringify(nodePositions, null, 3);
  console.log(jsonString)
  //return nodePositions;
  //localStorage.setItem("nodePositions", jsonString)

} // saveLayout
//----------------------------------------------------------------------------------------------------
function restorePositions()
{
  jsonString = localStorage.getItem("layout")
  let nps = JSON.parse(jsonString)

  for (const k of Object.keys(nps)) {
    const node = cy.getElementById(k);
    // console.log("k:  " + k + "  next node: " + node)
    if (node && node.length > 0) {
      node.position(nps[k]);
      } // if node
    } // for k

  cy.fit(100)
  
} // restorePositions
//----------------------------------------------------------------------------------------------------
