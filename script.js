//const container=document.querySelector(".container");
//const row=document.querySelector(".row");
//const column=document.querySelector(".col-md-3");

//var div=document.createElement(div);
//div.setAttribute("class","box");
let card = document.getElementById("card")
console.log(card)

var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1));
function foo(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);

  var div=document.createElement("div");

    div.style.color="black";
    div.style.fontSize="20px";
    //div.style.backgroundColor="#F1B24A";
    //div.style.container="card md-4";
    // div.innerHTML=`${arr[i].name}`;
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${arr[i].flags.png}" class="card-img-top" alt="...">
    <div class="card-body text-left";>
    <p><b>${arr[i].name.common}</b></p>
    <label for="">Region:<span> ${arr[i].region}</span></label><br>
    <label for="">Capital:<span> ${arr[i].capital}</span></label><br>
    <label for="">Latitude:<span> ${arr[i].latlng[0]}</span></label><br>
    <label for="">Longitude:<span> ${arr[i].latlng[1]}</span></label>
    <a href="#" class="btn btn-primary">click for weather</a>
    </div>
    </div>`;
    //div.append(span);
    //document.body.append(div);
    //container.appendChild(div);
    card.append(div);
}
}
