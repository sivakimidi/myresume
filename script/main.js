function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("resources/data.json",function(text) {
  let data = JSON.parse(text);
    console.log(data.career);
})

function career(info){
  var right_child=document.querySelector(".content_child");
  function career(info){
    var h2=document.createElement("h2");
    h2.textContent="Career Objective";
    right_child.appendchild(h2);
  }
}
