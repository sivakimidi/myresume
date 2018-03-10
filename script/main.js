function getfile(file,callback)
{
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
getfile("resources/data.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
})
  var right_child=document.querySelector(".content_child");
function career(info){
var h2=document.createElement("h2");
h2.textContent="Career Objective";
right_child.appendChild(h2);
var hr=document.createElement("hr");
right_child.appendChild(hr);
var career_info=document.createElement("p");
career_info.style.margin="1%"
career_info.textContent=info.objective;
right_child.appendChild(career_info);
}
function education(info){
  var h2=document.createElement("h2");
  h2.textContent="Education Details";
  right_child.appendChild(h2);
  var hr=document.createElement("hr");
  right_child.appendChild(hr);
var ul=document.createElement("ul");
right_child.appendChild(ul);
  for( var i=0;i<info.length;i++)
  {
      var l1=document.createElement("li");
  //var education_info=document.createElement("p");
      l1.textContent=info[i].degree;
      ul.appendChild(l1);
//var p=document.createElement("p");
      var l2=document.createElement("li");
      l2.textContent=info[i].college;
      ul.appendChild(l2);

      var u2=document.createElement("ul");
      l2.appendChild(u2);

for( var j=0;j<info[i].data.length;j++){
var k=document.createElement("li");

k.textContent=info[i].data[j];
u2.appendChild(k);
}
}

}
