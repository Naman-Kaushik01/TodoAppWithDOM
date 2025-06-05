let btn =document.querySelector("button");
let input =document.querySelector("input");
let lists =document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let btn=document.createElement("button");
    btn.innerText="Delete";
    btn.classList.add("Delete");

    item.appendChild(btn); 
    lists.appendChild(item);

    input.value="";
});

lists.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem=event.target.parentElement;
        ListItem.remove();
    }

});


