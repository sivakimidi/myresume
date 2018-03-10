function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true)
xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(); //null message
}
getfile("resources/data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  })


    var right_child=document.querySelector(".content_child");
  function career(info){
    var h2=document.createElement("h2");
    h2.textContent="Career Objective";
    right_child.appendChild(h2);
    var hr=document.createElement("hr");
    right_child.appendChild(hr);
    var career_info=document.createElement("p");
    career_info.textContent=info.objective;
    right_child.appendChild(career_info);
  }
