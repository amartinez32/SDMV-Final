let myList = document.getElementsByTagName('LI');
var i;
for( i = 0; i < myList.length; i++) {
    const span = document.createElement("span"); 
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
var  i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
        }
}

let list = document.querySelector('ul');
list.addEventListener('click',function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert("Please write something down");
    } else {
        document.getElementById("list").appendChild(li);
    }
    

}
