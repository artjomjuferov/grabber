window.appendJQuery = function(){
  var jqueryScript1 = document.createElement("script");
  jqueryScript1.type = "text/javascript";
  jqueryScript1.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
  
  var jqueryScript2 = document.createElement("script");
  jqueryScript2.type = "text/javascript";
  jqueryScript2.src = "http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js";

  document.getElementsByTagName('body')[0].appendChild(jqueryScript1);
  document.getElementsByTagName('body')[0].appendChild(jqueryScript2);
}


window.appendJQuery();