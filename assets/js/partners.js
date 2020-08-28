var needsLi = document.getElementsByClassName("need");
var partnersLi = document.getElementsByClassName("partner");
var json = [
  {need: "billettique", partner: "ubi"},
  {need: "billettique", partner: "ventrata"},
  {need: "comptage", partner: "webreathe"},
  {need: "diagnostic", partner: "digimobee"},
  {need: "connecteddriver", partner: "hubup"},
  {need: "wifi", partner: "qostelecom"},
  {need: "annexe11", partner: "lumiplan"}
]
//console.log(needsLi[0].classList.item(1));
for(i=0; i<needsLi.length; i++){
  needsLi[i].addEventListener('mouseover', function(){
    var partnersAssociated = [];
    for(var j=0; j<json.length; j++){
      if(this.classList.item(1) == json[j].need){
        partnersAssociated.push(json[j].partner);
      }
    }
    if(partnersAssociated != []){
      partnersAssociated.forEach(function(el){
         document.getElementById("partners").classList.add(el);
      })
    }
  });
}
for(i=0; i<needsLi.length; i++){
  needsLi[i].addEventListener('mouseout', function(){
    var partnersAssociated = [];
    for(var j=0; j<json.length; j++){
      if(this.classList.item(1) == json[j].need){
        partnersAssociated.push(json[j].partner);
      }
    }
    if(partnersAssociated != []){
      partnersAssociated.forEach(function(el){
         document.getElementById("partners").classList.remove(el);
      })
    }
  });
}
for(i=0; i<partnersLi.length; i++){
  partnersLi[i].addEventListener('mouseover', function(){
    var needsAssociated = [];
    for(var j=0; j<json.length; j++){
      if(this.classList.item(1) == json[j].partner){
        needsAssociated.push(json[j].need);
      }
    }
    if(needsAssociated != []){
      needsAssociated.forEach(function(el){
         document.getElementById("needs").classList.add(el);
      })
    }
  });
}
for(i=0; i<needsLi.length; i++){
  partnersLi[i].addEventListener('mouseout', function(){
    var needsAssociated = [];
    for(var j=0; j<json.length; j++){
      if(this.classList.item(1) == json[j].partner){
        needsAssociated.push(json[j].need);
      }
    }
    if(needsAssociated != []){
      needsAssociated.forEach(function(el){
         document.getElementById("needs").classList.remove(el);
      })
    }
  });
}