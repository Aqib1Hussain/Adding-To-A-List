const text=document.querySelector("#text");
const click=document.querySelector("#submit");
const ul=document.querySelector("#list");

click.addEventListener("click",function(){
    if(text.value===""){

    }
    else{
        const li =document.createElement("li");
        li.innerText=text.value;
        ul.appendChild(li);
        text.value="";
    }


})