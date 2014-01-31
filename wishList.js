  
function findChildImg(url){
  if (url != ""){
    var a = $("a[href='"+url+"']").find('img').attr('src');
    return a;
  }
}

function isImg(url){
  if (url == null){
    return 0;
  }
  var patt1 = /.png$|.jpg$/i;
  var result = url.match(patt1);
  if(result != null){
    return 1;
  }else{
    return 0;
  }
}

function noopHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
}

function drop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    $('#wlDrag').empty();
    var imageUrl = evt.dataTransfer.getData("url");
    if (isImg(imageUrl) == 0){
      imageUrl = findChildImg(imageUrl);
      if (isImg(imageUrl) == 0){
        return false;
      }    
    }
    var dragImg = document.createElement("img");
    dragImg.setAttribute('id',"wlDragImg");
    dragImg.setAttribute('src',imageUrl);
    document.getElementById('wlDrag').appendChild(dragImg);
}

window.createDiv = function(){
  var jqueryScript1 = document.createElement("script");

  jqueryScript1.type = "text/javascript";
  jqueryScript1.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
  
  var jqueryScript2 = document.createElement("script");
  jqueryScript2.type = "text/javascript";
  jqueryScript2.src = " http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js";
  
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute('id',"wlMain");
  mainDiv.style.zIndex = "1000";
  mainDiv.style.position ="fixed";
  mainDiv.style.left = "1000px";
  mainDiv.style.top = "10px";

  var textDiv = document.createElement("div");
  textDiv.setAttribute('id',"wlText");

  var i = document.createElement("input"); //input element, text
  i.setAttribute('type',"text");
  i.setAttribute('name',"username");
  i.setAttribute('id',"wlInput");

  var s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type',"button");
  s.setAttribute('value',"Send");
  s.setAttribute('id',"wlSend");

  textDiv.appendChild(i);
  textDiv.appendChild(s);

  dragDiv = document.createElement("div");
  dragDiv.setAttribute('id',"wlDrag");
  
  dragDiv.style.width = "350px";
  dragDiv.style.height = "50px";
  dragDiv.style.padding = "10px";
  dragDiv.style.border = "3px solid #aaaaaa";  
  
  dragDiv.addEventListener('dragenter', noopHandler, false);
  dragDiv.addEventListener('dragexit', noopHandler, false);
  dragDiv.addEventListener('dragover', noopHandler, false);
  dragDiv.addEventListener('drop', drop, false);

  allImg = document.createElement("input"); //input element, Submit button
  allImg.setAttribute('type',"button");
  allImg.setAttribute('value',"Show All");
  allImg.setAttribute('id',"wlAllImg");

  mainDiv.appendChild(textDiv);
  mainDiv.appendChild(dragDiv);
  mainDiv.appendChild(allImg);

  document.getElementsByTagName('body')[0].appendChild(mainDiv);
  document.getElementsByTagName('body')[0].appendChild(jqueryScript1);
  document.getElementsByTagName('body')[0].appendChild(jqueryScript2);

};


window.createDiv();

$(function() {
  $('#wlAllImg').click(function() {
    $('#wlShowImgs').empty();
    $('#wlShowImgs').remove();
    var imgs = $( "body" ).find( "img" );
    var imagesDiv = document.createElement("div");
    imagesDiv.setAttribute('id',"wlShowImgs");
    imagesDiv.style.zIndex = "1000";
    imagesDiv.style.position ="fixed";
    imagesDiv.style.left = "100px";
    imagesDiv.style.top = "10px";
    imagesDiv.style.width = "800px";
    imagesDiv.style.height = "250px";
    imagesDiv.style.border = "3px solid #aaaaaa";
    document.getElementsByTagName('body')[0].appendChild(imagesDiv);

    $.each(imgs, function( key, value ) {
      var img = document.createElement("img");
      img.setAttribute('id',"wlImage"+key);
      img.setAttribute('src',value.src);
      document.getElementById('wlShowImgs').appendChild(img);
    });
  });
});

$(function() {
  $('#wlSend').click(function() {
    $('#wlShowImgs').empty();
    $('#wlShowImgs').remove();
    $('#wlDrag').empty();
    var tmp = $("#wlInput").val();
    alert(tmp);
  });
});
