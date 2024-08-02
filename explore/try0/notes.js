converter = new showdown.Converter()
converter.setOption("tables", true);

var timer = null;


$(function() {
   console.log("loading notes")
   console.log("kb entries: " + Object.keys(kb).length)
})
//------------------------------------------------------------------------------------------------------------------------
function displayAnnotation(topic)
{
  var annoBox = $("#annoDiv");
  var annoText = lookup(topic)
  annoBox.html(text);
   
} 
//------------------------------------------------------------------------------------------------------------------------
function lookup(tag)
{
   var index = Object.keys(kb).indexOf(tag);
   var found = index >= 0
   //console.log("---- lookup, using kb: '" + tag + "', found? " + found)
   //console.log("    index: " + index);

   if(index < 0)
       return("")

    var markup = converter.makeHtml(kb[tag]);
    return(markup);

} // lookup
//------------------------------------------------------------------------------------------------------------------------


