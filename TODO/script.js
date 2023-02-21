var List = document.querySelector('ul');

var todos;
function toLocal(){
   todos=List.innerHTML;
    localStorage.setItem('todos',todos);
}




List.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        toLocal();
    }
    else if(ev.target.tagName==="SPAN"){
        var div=ev.target.parentNode;
        div.remove();
        toLocal();
    }



},false);


function newElement(){

    var li=document.createElement('li');
    li.style.cssText="width:50%;margin-bottom:10px;border-radius: 9px 9px 9px 9px;";
    var inputValue=document.getElementById('toDoEl').value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == ""){
        alert("Введите новое дело!");
        }
    else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value= "";
    var span=document.createElement('SPAN');
    var txt=document.createTextNode("X");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();

}
if(localStorage.getItem('todos')){
    List.innerHTML=localStorage.getItem('todos');
}
