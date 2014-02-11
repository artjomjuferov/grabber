jQuery( document ).ready(function() {
  window.createDiv = function(){

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
    s.setAttribute('value',"Save");
    s.setAttribute('id',"wlSend");

    textDiv.appendChild(i);
    textDiv.appendChild(s);

    dragDiv = document.createElement("div");
    dragDiv.setAttribute('id',"wlDrag");
    
    dragDiv.style.width = "350px";
    dragDiv.style.height = "50px";
    dragDiv.style.padding = "10px";
    dragDiv.style.border = "3px solid #aaaaaa";  
    
    allImg = document.createElement("input"); //input element, Submit button
    allImg.setAttribute('type',"button");
    allImg.setAttribute('value',"Show All");
    allImg.setAttribute('id',"wlAllImg");

    mainDiv.appendChild(textDiv);
    mainDiv.appendChild(dragDiv);
    mainDiv.appendChild(allImg);

    document.getElementsByTagName('body')[0].appendChild(mainDiv);
  };

  window.createDiv();

  $jq = $.noConflict();
  var movementTimer = null;
  var nowMousePos = {}, wasMousePos = {}, x, y, evt = "";

  $jq('body').mousemove(function(e)
  { 
      x = e.pageX;
      y = e.pageY;
      
      evt = document.elementFromPoint(e.pageX- window.pageXOffset, e.pageY- window.pageYOffset);
      clearTimeout(movementTimer);
      movementTimer = setTimeout(function()
      {
        if (evt.tagName != "IMG"){
          evt = findChildImg(evt);
          if (evt.tagName == "undefined" || evt.tagName != "IMG"){
             return false;
          }
          else
          {
            $jq('#wlDrag').empty();
          }
        }
        else
        {
          $jq('#wlDrag').empty();
        }

        var image = document.createElement("img");
        image.setAttribute('id',"wlDragImg");
        image.setAttribute('src',evt.src);
        document.getElementById('wlDrag').appendChild(image);
      }, 1000);
  })

  function findChildImg(obj){
    if (obj != null){
      obj = $jq(obj).find('*')[0];
    }
    return obj;
  }

  $jq(function() {
    $jq('#wlAllImg').click(function() {
      $jq('#wlShowImgs').empty();
      $jq('#wlShowImgs').remove();
      var imgs = $jq( "body" ).find( "img" );
      var imagesDiv = document.createElement("div");
      imagesDiv.setAttribute('id',"wlShowImgs");
      imagesDiv.style.zIndex = "1000";
      imagesDiv.style.position ="fixed";
      imagesDiv.style.left = "100px";
      imagesDiv.style.top = "10px";
      imagesDiv.style.width = "800px";
      imagesDiv.style.overflowY = "scroll";
      imagesDiv.style.height = "250px";
      imagesDiv.style.border = "3px solid #aaaaaa";
      document.getElementsByTagName('body')[0].appendChild(imagesDiv);

      $jq.each(imgs, function( key, value ) {
        var img = document.createElement("img");
        img.setAttribute('id',"wlImage"+key);
        img.setAttribute('src',value.src);
        document.getElementById('wlShowImgs').appendChild(img);
      });
    });
  });


  $jq('#wlSend').click(function() {
    $jq('#wlShowImgs').empty();
    $jq('#wlShowImgs').remove();
    $jq('#wlDrag').empty();
    var tmp1 = $jq("#wlInput").val();
    var tmp2 = $jq("#wlDragImg").src;
    alert(tmp1+' '+tmp2);
  });
});
