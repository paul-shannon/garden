import cytoscape from 'https://cdn.jsdelivr.net/npm/cytoscape@3.30.2/+esm'
import klay from 'https://cdn.jsdelivr.net/npm/cytoscape-klay@3.1.4/+esm'
import cola from 'https://cdn.jsdelivr.net/npm/cytoscape-cola@2.5.1/+esm'
import fcose from 'https://cdn.jsdelivr.net/npm/cytoscape-fcose@2.2.0/+esm'
import elk from 'https://cdn.jsdelivr.net/npm/cytoscape-elk@2.2.0/+esm'
//import dagre from 'https://cdn.jsdelivr.net/npm/cytoscape-dagre@2.5.0/+esm'
//------------------------------------------------------------------------------------------------------------------------
function doLayout(cyDivName, layoutName)
{
   console.log("---- doing layout " + layoutName + " on " + cyDivName);
   state[cyDivName].layout({name: layoutName}).run();

} // doLayout
//------------------------------------------------------------------------------------------------------------------------
function listLayouts()
{
    return("grid, cola, cose, elk, fcose, klay,")

} // doLayout
//------------------------------------------------------------------------------------------------------------------------
// expose these functions for use in the javascript console
window.lo = doLayout;
window.llo = listLayouts;
//------------------------------------------------------------------------------------------------------------------------
cytoscape.use(klay)
cytoscape.use(cola)
cytoscape.use(fcose)
cytoscape.use(elk)

export {doLayout, listLayouts}
